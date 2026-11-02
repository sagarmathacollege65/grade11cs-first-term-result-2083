import React from 'react';
import { StudentDiagnosticResult } from '../utils/diagnosticEngine';
import { getStudentAvatarUrl } from '../utils/studentAvatar';
import { compressImageFile } from '../utils/imageStorage';
import { TrendingUp, TrendingDown, Minus, Award, Calendar, AlertTriangle, ShieldCheck, Camera } from 'lucide-react';

interface StudentProfileKpiProps {
  diagnostic: StudentDiagnosticResult;
  onUpdateStudentImage?: (sn: number, imageUrl: string) => void;
}

export const StudentProfileKpi: React.FC<StudentProfileKpiProps> = ({ diagnostic, onUpdateStudentImage }) => {
  const { student, dynamicRank, gpaVariance, rawGpaVariance, isNg } = diagnostic;

  // Student portrait image URL: uses student's imageUrl if present, otherwise realistic uniform portrait
  const avatarSrc = student.imageUrl || getStudentAvatarUrl(student.name, student.sn);

  // File upload handler with automatic compression so it persists across reloads
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateStudentImage) {
      try {
        const compressedDataUrl = await compressImageFile(file, 400, 0.85);
        onUpdateStudentImage(student.sn, compressedDataUrl);
      } catch {
        // Fallback to raw FileReader
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          if (result) onUpdateStudentImage(student.sn, result);
        };
        reader.readAsDataURL(file);
      }
      // Reset input value so the same file can be re-selected if needed
      e.target.value = '';
    }
  };

  // Attendance health color
  const attendanceHealthy = student.attendancePct >= 75;

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden mb-6">
      {/* Header Profile Strip */}
      <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Student Portrait Image (Never text initials) */}
            <div className="relative shrink-0 group">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id={`student-photo-upload-${student.sn}`}
              />
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-lg border-2 border-white/30 bg-slate-800 relative">
                <img
                  src={avatarSrc}
                  alt={`${student.name} profile portrait`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Upload Hover Overlay */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  type="button"
                  title="Upload student photo"
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer"
                >
                  <Camera className="w-5 h-5 mb-0.5 text-white" />
                  <span className="text-[9px] font-semibold uppercase tracking-wider">Change</span>
                </button>
              </div>

              <span
                className={`absolute -bottom-1 -right-1 px-1.5 py-0.5 text-[10px] font-mono font-bold rounded border shadow-xs ${
                  isNg
                    ? 'bg-rose-500 text-white border-rose-600'
                    : student.division === 'DISTINCTION'
                    ? 'bg-emerald-500 text-white border-emerald-600'
                    : 'bg-indigo-500 text-white border-indigo-600'
                }`}
              >
                #{student.sn}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {student.name}
                </h1>
                <span
                  className={`px-2.5 py-0.5 text-xs font-semibold rounded-md ${
                    isNg
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : student.division === 'DISTINCTION'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-indigo-500/20 text-indigo-200 border border-indigo-500/40'
                  }`}
                >
                  {isNg ? 'Non-Graded (NG)' : student.division}
                </span>
              </div>

              {/* Clean Unboxed Metadata with Typographic Separators */}
              <div className="flex items-center gap-2 text-xs text-slate-300 mt-1 flex-wrap">
                <span>Roll No: {student.sn}</span>
                <span aria-hidden="true">·</span>
                <span>Grade 11 Computer Science</span>
                <span aria-hidden="true">·</span>
                <span>First Terminal Examination 2083</span>
                <span aria-hidden="true">·</span>
                <span>Evaluated: 6 Subjects (600 FM)</span>
              </div>
            </div>
          </div>

          {/* Quick Rank Badge */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-white/10 shrink-0">
            <div className="text-right">
              <span className="text-xs uppercase tracking-wider text-slate-400">Class Standing</span>
              <div className="flex items-baseline gap-1.5 justify-end">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  #{dynamicRank}
                </span>
                <span className="text-xs text-slate-400">/ 53</span>
              </div>
            </div>
            {student.ledgerRank && (
              <span className="text-[11px] text-slate-400">
                Official Ledger Rank: #{student.ledgerRank}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-white">
        {/* KPI 1: First Term GPA (Col W) */}
        <div className="p-4 sm:p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
            <span>First Term GPA</span>
            <Award className="w-3.5 h-3.5 text-indigo-500" />
          </div>
          <div className="my-1">
            <div className="flex items-baseline gap-2">
              <span className={`text-3xl font-extrabold font-mono tabular-nums ${isNg ? 'text-rose-600' : 'text-slate-900'}`}>
                {student.firstTermGpa.toFixed(2)}
              </span>
              <span className="text-xs text-slate-400">/ 4.00</span>
            </div>
            {isNg && (
              <span className="text-[11px] font-semibold text-rose-600 block mt-0.5">
                NG in {diagnostic.ngSubjects.length} subject(s)
              </span>
            )}
          </div>
          <div className="text-xs text-slate-500 pt-2 border-t border-slate-50">
            Total: <span className="font-mono font-semibold text-slate-800 tabular-nums">{student.obtainedTotalMarks}</span> / 600 ({student.percentage.toFixed(1)}%)
          </div>
        </div>

        {/* KPI 2: SEE GPA (Baseline Entry Score - Col Z) */}
        <div className="p-4 sm:p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
            <span>SEE Entry GPA</span>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Baseline</span>
          </div>
          <div className="my-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono tabular-nums text-slate-800">
                {student.seeGpa.toFixed(2)}
              </span>
              <span className="text-xs text-slate-400">/ 4.00</span>
            </div>
            <span className="text-[11px] text-slate-500 block mt-0.5">
              Grade 10 Secondary Baseline
            </span>
          </div>
          <div className="text-xs text-slate-500 pt-2 border-t border-slate-50">
            Admitted via NEB Entry Record
          </div>
        </div>

        {/* KPI 3: GPA Trajectory & Variance Analysis */}
        <div className="p-4 sm:p-5 flex flex-col justify-between bg-slate-50/50">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
            <span>GPA Trajectory</span>
            {gpaVariance > 0 ? (
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            ) : gpaVariance < 0 ? (
              <TrendingDown className="w-4 h-4 text-rose-600" />
            ) : (
              <Minus className="w-4 h-4 text-slate-400" />
            )}
          </div>
          <div className="my-1">
            <div className="flex items-center gap-1.5">
              <span
                className={`text-3xl font-extrabold font-mono tabular-nums ${
                  gpaVariance > 0
                    ? 'text-emerald-600'
                    : gpaVariance < 0
                    ? 'text-rose-600'
                    : 'text-slate-600'
                }`}
              >
                {gpaVariance > 0 ? `+${gpaVariance.toFixed(2)}` : gpaVariance.toFixed(2)}
              </span>
              <span className="text-base font-bold">
                {gpaVariance > 0 ? '▲' : gpaVariance < 0 ? '▼' : '–'}
              </span>
            </div>
            <div className="text-[11px] font-medium mt-0.5">
              {gpaVariance >= 0.2 ? (
                <span className="text-emerald-700">Significant Growth</span>
              ) : gpaVariance > 0 ? (
                <span className="text-emerald-600">Positive Momentum</span>
              ) : gpaVariance === 0 ? (
                <span className="text-slate-600">Trajectory Parity</span>
              ) : isNg ? (
                <span className="text-rose-600 font-semibold">Regulatory Drop (NG)</span>
              ) : (
                <span className="text-rose-600">Performance Drop</span>
              )}
            </div>
          </div>
          <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
            {isNg ? (
              <span>Raw Score GPA: <span className="font-mono font-medium">{diagnostic.provisionalGpa.toFixed(2)}</span> ({rawGpaVariance >= 0 ? '+' : ''}{rawGpaVariance.toFixed(2)})</span>
            ) : (
              <span>Variance = Term ({student.firstTermGpa.toFixed(2)}) - SEE ({student.seeGpa.toFixed(2)})</span>
            )}
          </div>
        </div>

        {/* KPI 4: Attendance Percentage (Col F) */}
        <div className="p-4 sm:p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
            <span>Attendance Rate</span>
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="my-1">
            <div className="flex items-baseline gap-1.5">
              <span
                className={`text-3xl font-extrabold font-mono tabular-nums ${
                  attendanceHealthy ? 'text-slate-900' : 'text-amber-600'
                }`}
              >
                {student.attendancePct.toFixed(1)}%
              </span>
              {!attendanceHealthy && (
                <span title="Below 75% Mandate">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                </span>
              )}
            </div>
            <span
              className={`text-[11px] font-medium block mt-0.5 ${
                attendanceHealthy ? 'text-emerald-600' : 'text-amber-600'
              }`}
            >
              {student.daysPresent} of {student.totalSchoolDays} Days Present
            </span>
          </div>
          <div className="text-xs text-slate-500 pt-2 border-t border-slate-50">
            {attendanceHealthy ? 'Complies with 75% mandate' : `Missing ${student.totalSchoolDays - student.daysPresent} days (Deficit)`}
          </div>
        </div>

        {/* KPI 5: Classroom Engagement & Faculty Observation (Col AA & AB) */}
        <div className="p-4 sm:p-5 flex flex-col justify-between col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
            <span>Engagement Level</span>
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
          </div>
          <div className="my-1">
            <span
              className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${
                student.classroomEngagement === 'Highly Active'
                  ? 'bg-emerald-100 text-emerald-800'
                  : student.classroomEngagement === 'Attentive'
                  ? 'bg-blue-100 text-blue-800'
                  : student.classroomEngagement === 'Passive'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-rose-100 text-rose-800'
              }`}
            >
              {student.classroomEngagement}
            </span>
            <p className="text-xs text-slate-700 font-medium mt-1.5 line-clamp-2" title={student.strengthsAndWeaknesses}>
              "{student.strengthsAndWeaknesses}"
            </p>
          </div>
          <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-50">
            Observation by Computer Faculty Head
          </div>
        </div>
      </div>
    </div>
  );
};
