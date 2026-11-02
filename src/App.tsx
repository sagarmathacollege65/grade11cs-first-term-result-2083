import React, { useState, useMemo, useEffect } from 'react';
import { STUDENTS_DATA, StudentRecord } from './data/studentsData';
import { diagnoseStudent } from './utils/diagnosticEngine';
import { getSavedImagesSync, loadAllSavedImages, saveStudentImage } from './utils/imageStorage';
import { Header } from './components/Header';
import { StudentSelector } from './components/StudentSelector';
import { StudentProfileKpi } from './components/StudentProfileKpi';
import { ExaminationLedgerTable } from './components/ExaminationLedgerTable';
import { SubjectPerformanceBreakdown } from './components/SubjectPerformanceBreakdown';
import { InterventionProfileCard } from './components/InterventionProfileCard';
import { PersonalizedFeedbackCard } from './components/PersonalizedFeedbackCard';
import { AtRiskInterventionDesk } from './components/AtRiskInterventionDesk';
import { CohortAnalyticsView } from './components/CohortAnalyticsView';
import { MasterLedgerView } from './components/MasterLedgerView';
import { PrintableReportCard } from './components/PrintableReportCard';

export default function App() {
  // Load custom student photos synchronously from localStorage first (user-uploaded overrides default)
  const [students, setStudents] = useState<StudentRecord[]>(() => {
    const savedMap = getSavedImagesSync();
    return STUDENTS_DATA.map((s) => ({
      ...s,
      imageUrl: savedMap[s.sn] || s.imageUrl || '',
    }));
  });

  const [selectedStudent, setSelectedStudent] = useState<StudentRecord>(() => students[0]);
  const [activeTab, setActiveTab] = useState<'diagnostic' | 'interventions' | 'cohort' | 'ledger'>('diagnostic');

  // Hydrate from IndexedDB on mount in case large photos were stored in IndexedDB
  useEffect(() => {
    let mounted = true;
    loadAllSavedImages().then((idbMap) => {
      if (!mounted || Object.keys(idbMap).length === 0) return;
      setStudents((prev) =>
        prev.map((s) => ({
          ...s,
          imageUrl: idbMap[s.sn] || s.imageUrl || '',
        }))
      );
      setSelectedStudent((prev) => ({
        ...prev,
        imageUrl: idbMap[prev.sn] || prev.imageUrl || '',
      }));
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Handle student photo upload & persistent storage
  const handleUpdateStudentImage = (sn: number, imageUrl: string) => {
    // Persist to both localStorage and IndexedDB
    saveStudentImage(sn, imageUrl);

    setStudents((prev) =>
      prev.map((s) => (s.sn === sn ? { ...s, imageUrl } : s))
    );

    setSelectedStudent((prev) =>
      prev.sn === sn ? { ...prev, imageUrl } : prev
    );
  };

  // Compute diagnostic for the active student
  const diagnostic = useMemo(() => {
    return diagnoseStudent(selectedStudent);
  }, [selectedStudent]);

  // Handler for student selection from any component
  const handleSelectStudent = (student: StudentRecord) => {
    // Find current instance in state (preserves uploaded photos)
    const current = students.find((s) => s.sn === student.sn) || student;
    setSelectedStudent(current);
    setActiveTab('diagnostic');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler to export CSV
  const handleExportCsv = () => {
    const headers = [
      'S.N.',
      'Student Name',
      'Days Present',
      'Total Days',
      'Attendance %',
      'Nepali Th(75)',
      'Nepali In(25)',
      'English Th(75)',
      'English In(25)',
      'Social Th(75)',
      'Social In(25)',
      'Math Th(75)',
      'Math In(25)',
      'Account Th(75)',
      'Account In(25)',
      'Economics Th(75)',
      'Economics In(25)',
      'Computer Th(50)',
      'Computer In(50)',
      'Total Marks(600)',
      'Percentage',
      'Term GPA',
      'Division',
      'Class Rank',
      'SEE GPA',
      'GPA Variance',
      'Engagement',
      'Faculty Note',
    ];

    const rows = STUDENTS_DATA.map((s) => {
      const variance = (s.firstTermGpa - s.seeGpa).toFixed(2);
      return [
        s.sn,
        `"${s.name}"`,
        s.daysPresent,
        s.totalSchoolDays,
        `${s.attendancePct.toFixed(1)}%`,
        s.nepali.theory ?? '-',
        s.nepali.practical ?? '-',
        s.english.theory ?? '-',
        s.english.practical ?? '-',
        s.social.theory ?? '-',
        s.social.practical ?? '-',
        s.math.theory ?? '-',
        s.math.practical ?? '-',
        s.account.theory ?? '-',
        s.account.practical ?? '-',
        s.economics.theory ?? '-',
        s.economics.practical ?? '-',
        s.computer.theory ?? '-',
        s.computer.practical ?? '-',
        s.obtainedTotalMarks,
        s.percentage.toFixed(2),
        s.firstTermGpa.toFixed(2),
        `"${s.division}"`,
        s.ledgerRank ?? 'N/A',
        s.seeGpa.toFixed(2),
        variance,
        `"${s.classroomEngagement}"`,
        `"${s.strengthsAndWeaknesses.replace(/"/g, '""')}"`,
      ].join(',');
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Grade_11_CS_Term1_Ledger_2083.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Printable Report Card (Shown ONLY during print) */}
      <PrintableReportCard diagnostic={diagnostic} />

      {/* Interactive Application Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPrint={handlePrint}
        onExportCsv={handleExportCsv}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 no-print">
        {/* View 1: Student Diagnostic (Default & Core Interactive Dashboard) */}
        {activeTab === 'diagnostic' && (
          <div>
            {/* Interactive Student Selector Dropdown */}
            <StudentSelector
              students={students}
              selectedStudent={selectedStudent}
              onSelectStudent={setSelectedStudent}
            />

            {/* Profile & KPI Integration Strip with Photo Upload */}
            <StudentProfileKpi
              diagnostic={diagnostic}
              onUpdateStudentImage={handleUpdateStudentImage}
            />

            {/* Examination Granular Marks Ledger Table */}
            <ExaminationLedgerTable
              subjects={diagnostic.evaluatedSubjects}
              studentName={selectedStudent.name}
            />

            {/* Subject-Wise Mastery Breakdown & Technical Contrast */}
            <SubjectPerformanceBreakdown diagnostic={diagnostic} />

            {/* Automated Intervention Profile for NG / At-Risk Students */}
            <InterventionProfileCard diagnostic={diagnostic} />

            {/* Dynamic Personalized Narrative Feedback */}
            <PersonalizedFeedbackCard diagnostic={diagnostic} />
          </div>
        )}

        {/* View 2: At-Risk & NG Intervention Desk */}
        {activeTab === 'interventions' && (
          <AtRiskInterventionDesk
            students={students}
            onSelectStudent={handleSelectStudent}
          />
        )}

        {/* View 3: Cohort Analytics View */}
        {activeTab === 'cohort' && <CohortAnalyticsView />}

        {/* View 4: Full Master Ledger View */}
        {activeTab === 'ledger' && (
          <MasterLedgerView
            students={students}
            onSelectStudent={handleSelectStudent}
            onExportCsv={handleExportCsv}
          />
        )}
      </main>

      {/* Quiet Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Grade 11 "Computer Science" · First Terminal Examination Academic Diagnostic Ledger (2083 B.S.)</span>
          <div className="flex items-center gap-3">
            <span>Evaluated by Computer Faculty Head</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={handlePrint}
              className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
            >
              Print Active Profile
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
