import { StudentRecord, STUDENTS_DATA, SubjectMarks } from '../data/studentsData';

export interface SubjectDiagnostic {
  key: string;
  name: string;
  type: 'general' | 'technical';
  theory: number | null;
  theoryMax: number;
  practical: number | null;
  practicalMax: number;
  totalObtained: number | null;
  totalMax: number;
  percentage: number | null;
  grade: string;
  isPassed: boolean;
  isHighMastery: boolean; // > 80%
  isAtRisk: boolean; // < 40% or theory < 35%
  deficitReason?: string;
}

export interface StudentDiagnosticResult {
  student: StudentRecord;
  dynamicRank: number;
  gpaVariance: number; // Term GPA - SEE GPA
  rawGpaVariance: number;
  provisionalGpa: number;
  isNg: boolean;
  ngSubjects: SubjectDiagnostic[];
  evaluatedSubjects: SubjectDiagnostic[];
  topSubjects: SubjectDiagnostic[];
  highRiskSubjects: SubjectDiagnostic[];
  technicalMasteryPct: number;
  generalMasteryPct: number;
  learningGapSummary: string;
  attendanceRisk: boolean; // < 75%
  behavioralRisk: boolean; // Passive or Distracted
  academicRisk: boolean; // NG or subject fail
  rootCauses: Array<{
    type: 'academic' | 'behavioral' | 'attendance';
    title: string;
    description: string;
    severity: 'critical' | 'high' | 'moderate';
  }>;
  peerTutors: Array<{
    subject: string;
    tutorName: string;
    tutorScore: number;
    tutorRank: number | null;
  }>;
  remediationPlan: {
    mandatoryCoaching: string[];
    weeklyLabCheckIns: string[];
    counselingTriggers: string[];
    immediateMilestones: string[];
  };
  narrativeFeedback: {
    category: 'High Performer' | 'Moderate Performer' | 'At-Risk / NG';
    headline: string;
    summary: string;
    commendation: string;
    targetAreas: string;
    actionableAdvice: string;
    enrichmentOrRemediation: string;
  };
}

// NEB Grade 11 Grading Scale
export function calculateGrade(percentage: number | null, isTheoryFailed: boolean = false): string {
  if (percentage === null) return 'N/A';
  if (isTheoryFailed || percentage < 35) return 'NG';
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B+';
  if (percentage >= 60) return 'B';
  if (percentage >= 50) return 'C+';
  if (percentage >= 40) return 'C';
  if (percentage >= 35) return 'D';
  return 'NG';
}

// Dynamic Rank Calculator (sorted by GPA desc, then Obtained Total Marks desc, then Attendance desc)
export function computeClassRanks(students: StudentRecord[] = STUDENTS_DATA): Map<number, number> {
  const sorted = [...students].sort((a, b) => {
    if (b.firstTermGpa !== a.firstTermGpa) {
      return b.firstTermGpa - a.firstTermGpa;
    }
    if (b.obtainedTotalMarks !== a.obtainedTotalMarks) {
      return b.obtainedTotalMarks - a.obtainedTotalMarks;
    }
    return b.attendancePct - a.attendancePct;
  });

  const rankMap = new Map<number, number>();
  sorted.forEach((s, idx) => {
    rankMap.set(s.sn, idx + 1);
  });
  return rankMap;
}

const CLASS_RANKS = computeClassRanks();

export function evaluateSubject(
  key: string,
  name: string,
  marks: SubjectMarks,
  type: 'general' | 'technical'
): SubjectDiagnostic | null {
  if (marks.theory === null && marks.practical === null) return null;

  const theory = marks.theory ?? 0;
  const practical = marks.practical ?? 0;
  const totalObtained = theory + practical;
  const totalMax = marks.theoryMax + marks.practicalMax;
  const percentage = (totalObtained / totalMax) * 100;

  // NEB Passing Criteria:
  // Theory passing minimum is 35% of theory full marks (e.g. 26.25 for 75 marks, 17.5 for 50 marks)
  // Practical passing minimum is 40% of practical full marks (e.g. 10 for 25 marks, 20 for 50 marks)
  const theoryPassThreshold = marks.theoryMax * 0.35;
  const practicalPassThreshold = marks.practicalMax * 0.40;

  const isTheoryFailed = marks.theory !== null && marks.theory < theoryPassThreshold;
  const isPracticalFailed = marks.practical !== null && marks.practical < practicalPassThreshold;
  const isPassed = !isTheoryFailed && !isPracticalFailed && percentage >= 35;

  const grade = calculateGrade(percentage, isTheoryFailed || isPracticalFailed);
  const isHighMastery = percentage >= 80;
  const isAtRisk = !isPassed || percentage < 40;

  let deficitReason: string | undefined;
  if (isTheoryFailed) {
    deficitReason = `Theory score (${theory}/${marks.theoryMax}) is below 35% pass mark (${theoryPassThreshold})`;
  } else if (isPracticalFailed) {
    deficitReason = `Practical score (${practical}/${marks.practicalMax}) is below 40% pass mark (${practicalPassThreshold})`;
  } else if (percentage < 40) {
    deficitReason = `Overall score (${percentage.toFixed(1)}%) is approaching borderline risk`;
  }

  return {
    key,
    name,
    type,
    theory: marks.theory,
    theoryMax: marks.theoryMax,
    practical: marks.practical,
    practicalMax: marks.practicalMax,
    totalObtained,
    totalMax,
    percentage,
    grade,
    isPassed,
    isHighMastery,
    isAtRisk,
    deficitReason,
  };
}

export function diagnoseStudent(student: StudentRecord): StudentDiagnosticResult {
  const dynamicRank = CLASS_RANKS.get(student.sn) || student.sn;

  // Evaluate all 6 enrolled subjects
  const subjectList: (SubjectDiagnostic | null)[] = [
    evaluateSubject('nepali', 'Nepali', student.nepali, 'general'),
    evaluateSubject('english', 'English', student.english, 'general'),
    evaluateSubject('social', 'Social Studies', student.social, 'general'),
    evaluateSubject('math', 'Mathematics', student.math, 'general'),
    evaluateSubject('account', 'Accountancy', student.account, 'general'),
    evaluateSubject('economics', 'Economics', student.economics, 'general'),
    evaluateSubject('computer', 'Computer Science', student.computer, 'technical'),
  ];

  const evaluatedSubjects = subjectList.filter((s): s is SubjectDiagnostic => s !== null);

  const ngSubjects = evaluatedSubjects.filter((s) => !s.isPassed || s.grade === 'NG');
  const topSubjects = evaluatedSubjects.filter((s) => s.isHighMastery);
  const highRiskSubjects = evaluatedSubjects.filter((s) => s.isAtRisk);

  // Technical vs General Mastery
  const technicalSubject = evaluatedSubjects.find((s) => s.key === 'computer');
  const technicalMasteryPct = technicalSubject?.percentage ?? 0;

  const generalSubjects = evaluatedSubjects.filter((s) => s.key !== 'computer');
  const generalMasteryPct =
    generalSubjects.length > 0
      ? generalSubjects.reduce((acc, s) => acc + (s.percentage ?? 0), 0) / generalSubjects.length
      : 0;

  // Learning gap analysis
  let learningGapSummary = '';
  const diff = technicalMasteryPct - generalMasteryPct;
  if (diff > 12) {
    learningGapSummary = `High technical affinity (${technicalMasteryPct.toFixed(1)}% in CS) outpaces general academic subjects by +${diff.toFixed(1)}%. Core academic subjects (particularly ${
      highRiskSubjects.map((s) => s.name).join(', ') || 'general coursework'
    }) require structured reinforcement.`;
  } else if (diff < -12) {
    learningGapSummary = `Strong theoretical foundation in general coursework (${generalMasteryPct.toFixed(1)}%) surpasses Computer Science performance (${technicalMasteryPct.toFixed(1)}%) by ${Math.abs(diff).toFixed(1)}%. Focused programming lab practice and algorithmic problem solving are recommended.`;
  } else {
    learningGapSummary = `Balanced performance profile between technical Computer Science (${technicalMasteryPct.toFixed(1)}%) and core general subjects (${generalMasteryPct.toFixed(1)}%). Progression is uniform across curricular tracks.`;
  }

  // GPA Trajectory & Variance
  // Variance = First Term GPA - SEE GPA
  const isNg = student.firstTermGpa === 0 || student.division === 'Fail' || ngSubjects.length > 0;
  const gpaVariance = Number((student.firstTermGpa - student.seeGpa).toFixed(2));

  // Compute what raw provisional GPA would be if not zeroed out by NG
  const provisionalGpa = student.firstTermGpa > 0 
    ? student.firstTermGpa 
    : Number((student.percentage / 25).toFixed(2));
  const rawGpaVariance = Number((provisionalGpa - student.seeGpa).toFixed(2));

  // Root Cause Detection
  const attendanceRisk = student.attendancePct < 75.0;
  const behavioralRisk = student.classroomEngagement === 'Passive' || student.classroomEngagement === 'Distracted';
  const academicRisk = isNg || highRiskSubjects.length > 0;

  const rootCauses: StudentDiagnosticResult['rootCauses'] = [];

  if (academicRisk) {
    rootCauses.push({
      type: 'academic',
      title: 'Academic Deficit (Subject Failure / Borderline Marks)',
      description: ngSubjects.length > 0
        ? `Failed NEB minimum pass criteria in ${ngSubjects.map((s) => s.name).join(', ')}. Theoretical threshold deficit requires targeted remedial syllabus coverage.`
        : `Encountered high-risk score margins in ${highRiskSubjects.map((s) => s.name).join(', ')}.`,
      severity: ngSubjects.length > 0 ? 'critical' : 'high',
    });
  }

  if (attendanceRisk) {
    rootCauses.push({
      type: 'attendance',
      title: `Attendance Deficit (${student.attendancePct.toFixed(1)}% vs 75% Mandate)`,
      description: `Student attended ${student.daysPresent} of ${student.totalSchoolDays} school days. Missing ${student.totalSchoolDays - student.daysPresent} sessions severely impedes instructional continuity and practical laboratory work.`,
      severity: student.attendancePct < 50 ? 'critical' : 'high',
    });
  }

  if (behavioralRisk) {
    rootCauses.push({
      type: 'behavioral',
      title: `Behavioral Disengagement (${student.classroomEngagement})`,
      description: `Classroom observation indicates "${student.classroomEngagement}" disposition. Faculty note: "${student.strengthsAndWeaknesses}". Needs structured active recall and classroom engagement triggers.`,
      severity: 'moderate',
    });
  }

  // Peer Tutors Matching for Deficient Subjects
  const peerTutors: StudentDiagnosticResult['peerTutors'] = [];
  ngSubjects.forEach((ngSub) => {
    // Find highest scoring student in this subject
    const bestStudent = [...STUDENTS_DATA]
      .filter((s) => s.sn !== student.sn && s.firstTermGpa >= 3.4)
      .map((s) => {
        const subData = evaluateSubject(ngSub.key, ngSub.name, s[ngSub.key as keyof StudentRecord] as SubjectMarks, ngSub.type);
        return {
          student: s,
          score: subData?.totalObtained ?? 0,
        };
      })
      .sort((a, b) => b.score - a.score)[0];

    if (bestStudent) {
      peerTutors.push({
        subject: ngSub.name,
        tutorName: bestStudent.student.name,
        tutorScore: bestStudent.score,
        tutorRank: bestStudent.student.ledgerRank,
      });
    }
  });

  // Targeted Remediation Plan
  const mandatoryCoaching: string[] = [];
  const weeklyLabCheckIns: string[] = [];
  const counselingTriggers: string[] = [];
  const immediateMilestones: string[] = [];

  if (isNg || academicRisk) {
    ngSubjects.forEach((sub) => {
      mandatoryCoaching.push(`Remedial clinic: 45-min daily bi-weekly problem sets in ${sub.name} focusing on core theory.`);
    });
    if (mandatoryCoaching.length === 0 && highRiskSubjects.length > 0) {
      mandatoryCoaching.push(`Intensive reinforcement clinic for ${highRiskSubjects.map((s) => s.name).join(', ')}.`);
    }
    immediateMilestones.push('Complete Chapter Diagnostic Worksheet within 7 calendar days.');
    immediateMilestones.push('Submit corrected First Terminal Examination script with self-annotation.');
  }

  if (student.computer.theory !== null && student.computer.theory < 25) {
    weeklyLabCheckIns.push('Weekly Computer Science Lab Check-in: Re-execute C programming algorithms and flowcharts.');
  } else {
    weeklyLabCheckIns.push('Weekly Computer Science Practical Review: Maintain verified practical lab notebook and code repo.');
  }

  if (attendanceRisk || isNg || behavioralRisk) {
    counselingTriggers.push(`Parent-Teacher Academic Conference trigger (Status: ${isNg ? 'Urgent Review' : 'Advisory'}).`);
    if (attendanceRisk) {
      counselingTriggers.push(`Attendance compliance contract: minimum 85% attendance required for upcoming 30 school days.`);
    }
    if (behavioralRisk) {
      counselingTriggers.push('Front-row classroom seating and weekly engagement feedback log with Class Teacher.');
    }
  }

  // Personalized Student Feedback Generation based on specification
  let narrativeFeedback: StudentDiagnosticResult['narrativeFeedback'];

  if (student.firstTermGpa >= 3.2 && !isNg) {
    // High Performer
    narrativeFeedback = {
      category: 'High Performer',
      headline: `Academic Excellence Commendation · Rank #${dynamicRank}`,
      summary: `${student.name} demonstrates superior academic rigor, securing ${student.percentage.toFixed(1)}% with a First Terminal GPA of ${student.firstTermGpa.toFixed(2)}. This represents a ${gpaVariance >= 0 ? '+' + gpaVariance.toFixed(2) : gpaVariance.toFixed(2)} variance against the SEE baseline (${student.seeGpa.toFixed(2)}).`,
      commendation: `Faculty Head notes: "${student.strengthsAndWeaknesses}". The student demonstrates high mastery (>80%) across: ${
        topSubjects.map((s) => `${s.name} (${s.percentage?.toFixed(0)}%)`).join(', ') || 'all enrolled subjects'
      }. Classroom engagement is characterized as "${student.classroomEngagement}".`,
      targetAreas: highRiskSubjects.length > 0
        ? `Maintain momentum while fortifying ${highRiskSubjects.map((s) => s.name).join(', ')} to maximize board examination percentile.`
        : 'Consistent high output across both technical and humanities domains.',
      actionableAdvice: 'Continue active leadership in peer study circles and sustain disciplined daily study habits.',
      enrichmentOrRemediation: 'Recommended Advanced CS Enrichment: Direct participation in the National Computer Science Olympiad prep track, building a full-stack algorithmic web app, and exploring relational database normal forms in SQL.',
    };
  } else if (student.firstTermGpa >= 2.4 && !isNg) {
    // Moderate Performer
    narrativeFeedback = {
      category: 'Moderate Performer',
      headline: `Consistent Academic Baseline with Clear Growth Trajectory · Rank #${dynamicRank}`,
      summary: `${student.name} completed the First Terminal Examination with a GPA of ${student.firstTermGpa.toFixed(2)} (${student.percentage.toFixed(1)}%), achieving a ${student.division} Division. The trajectory reflects a ${gpaVariance >= 0 ? '+' + gpaVariance.toFixed(2) : gpaVariance.toFixed(2)} delta relative to SEE entry score (${student.seeGpa.toFixed(2)}).`,
      commendation: `Faculty observation highlights: "${student.strengthsAndWeaknesses}". Engagement level is assessed as "${student.classroomEngagement}". Strongest evaluated subject is ${
        topSubjects[0]?.name || evaluatedSubjects.sort((a, b) => (b.percentage ?? 0) - (a.percentage ?? 0))[0]?.name || 'Computer Science'
      }.`,
      targetAreas: `Prioritize closing the gap in lower-scoring domains: ${
        highRiskSubjects.map((s) => `${s.name} (${s.percentage?.toFixed(0)}%)`).join(', ') || 'Account/Math core subjects'
      }.`,
      actionableAdvice: 'Convert passive study hours into active recall problem sets. Focus on writing structured theoretical answers for 75-mark papers.',
      enrichmentOrRemediation: 'Subject Gap Remediation: Attend weekly subject problem-solving clinics and complete 3 past board questions every weekend for technical subjects.',
    };
  } else {
    // At-Risk / NG Student
    narrativeFeedback = {
      category: 'At-Risk / NG',
      headline: `Urgent Academic Intervention Required · Non-Graded (NG) Notice`,
      summary: `${student.name} is classified in the At-Risk / Non-Graded (NG) cohort following the First Terminal Examination due to failing marks in: ${
        ngSubjects.map((s) => s.name).join(', ') || 'core subject components'
      }. While baseline SEE entry score was ${student.seeGpa.toFixed(2)}, terminal performance triggered an NG status requiring immediate remedial intervention.`,
      commendation: `Observed behavioral profile: "${student.classroomEngagement}". Faculty Head remark: "${student.strengthsAndWeaknesses}". Potential exists, but urgent recalibration is non-negotiable.`,
      targetAreas: `Critical academic deficit in: ${ngSubjects
        .map((s) => `${s.name} (${s.deficitReason || 'Below passing mark'})`)
        .join('; ')}.${attendanceRisk ? ` Attendance is dangerously low at ${student.attendancePct.toFixed(1)}% (minimum 75% required).` : ''}`,
      actionableAdvice: 'Enroll immediately in the mandatory departmental remedial program. Complete all missing assignments and establish regular attendance.',
      enrichmentOrRemediation: 'Immediate Remedial Protocol: (1) Mandatory remedial coaching sessions, (2) One-on-one peer tutoring, (3) Weekly Computer Science practical verification, and (4) Scheduled Parent-Teacher Academic Counseling conference.',
    };
  }

  return {
    student,
    dynamicRank,
    gpaVariance,
    rawGpaVariance,
    provisionalGpa,
    isNg,
    ngSubjects,
    evaluatedSubjects,
    topSubjects,
    highRiskSubjects,
    technicalMasteryPct,
    generalMasteryPct,
    learningGapSummary,
    attendanceRisk,
    behavioralRisk,
    academicRisk,
    rootCauses,
    peerTutors,
    remediationPlan: {
      mandatoryCoaching,
      weeklyLabCheckIns,
      counselingTriggers,
      immediateMilestones,
    },
    narrativeFeedback,
  };
}

export interface CohortStats {
  totalStudents: number;
  distinctionCount: number;
  firstCount: number;
  secondCount: number;
  failCount: number;
  passRate: number;
  avgAttendance: number;
  avgGpa: number;
  avgTotalMarks: number;
  avgVariance: number;
  subjectAverages: {
    key: string;
    name: string;
    avgScore: number;
    passCount: number;
    failCount: number;
    highMasteryCount: number;
  }[];
}

export function computeCohortStats(students: StudentRecord[] = STUDENTS_DATA): CohortStats {
  const totalStudents = students.length;
  let distinctionCount = 0;
  let firstCount = 0;
  let secondCount = 0;
  let failCount = 0;
  let totalAtt = 0;
  let totalGpa = 0;
  let totalMarks = 0;
  let totalVariance = 0;

  const subjectMap = new Map<string, { name: string; scores: number[]; fails: number; high: number }>();

  students.forEach((s) => {
    if (s.division === 'DISTINCTION') distinctionCount++;
    else if (s.division === 'First') firstCount++;
    else if (s.division === 'Second') secondCount++;
    else if (s.division === 'Fail' || s.firstTermGpa === 0) failCount++;

    totalAtt += s.attendancePct;
    totalGpa += s.firstTermGpa;
    totalMarks += s.obtainedTotalMarks;
    totalVariance += s.firstTermGpa - s.seeGpa;

    const diag = diagnoseStudent(s);
    diag.evaluatedSubjects.forEach((sub) => {
      if (!subjectMap.has(sub.key)) {
        subjectMap.set(sub.key, { name: sub.name, scores: [], fails: 0, high: 0 });
      }
      const data = subjectMap.get(sub.key)!;
      if (sub.percentage !== null) {
        data.scores.push(sub.percentage);
        if (sub.percentage < 35 || !sub.isPassed) data.fails++;
        if (sub.percentage >= 80) data.high++;
      }
    });
  });

  const subjectAverages = Array.from(subjectMap.entries()).map(([key, data]) => {
    const avgScore = data.scores.length > 0 ? data.scores.reduce((a, b) => a + b, 0) / data.scores.length : 0;
    return {
      key,
      name: data.name,
      avgScore: Number(avgScore.toFixed(1)),
      passCount: data.scores.length - data.fails,
      failCount: data.fails,
      highMasteryCount: data.high,
    };
  });

  return {
    totalStudents,
    distinctionCount,
    firstCount,
    secondCount,
    failCount,
    passRate: Number((((totalStudents - failCount) / totalStudents) * 100).toFixed(1)),
    avgAttendance: Number((totalAtt / totalStudents).toFixed(1)),
    avgGpa: Number((totalGpa / (totalStudents - failCount)).toFixed(2)), // average GPA among passing students
    avgTotalMarks: Number((totalMarks / totalStudents).toFixed(1)),
    avgVariance: Number((totalVariance / totalStudents).toFixed(2)),
    subjectAverages,
  };
}
