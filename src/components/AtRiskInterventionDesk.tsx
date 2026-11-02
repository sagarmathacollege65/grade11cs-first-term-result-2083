import React, { useState, useMemo } from 'react';
import { StudentRecord, STUDENTS_DATA } from '../data/studentsData';
import { diagnoseStudent, StudentDiagnosticResult } from '../utils/diagnosticEngine';
import { getStudentAvatarUrl } from '../utils/studentAvatar';
import {
  ShieldAlert,
  AlertOctagon,
  Calendar,
  UserX,
  ArrowRight,
  BookX,
  Sparkles,
  Users,
  CheckCircle2
} from 'lucide-react';

interface AtRiskInterventionDeskProps {
  students: StudentRecord[];
  onSelectStudent: (student: StudentRecord) => void;
}

export const AtRiskInterventionDesk: React.FC<AtRiskInterventionDeskProps> = ({
  students,
  onSelectStudent,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'attendance' | 'academic' | 'behavioral'>('all');

  // Compute diagnostics for all students and extract NG/At-Risk
  const ngDiagnostics: StudentDiagnosticResult[] = useMemo(() => {
    return students
      .filter((s) => s.firstTermGpa === 0 || s.division === 'Fail')
      .map((s) => diagnoseStudent(s));
  }, [students]);

  const filteredDiagnostics = useMemo(() => {
    return ngDiagnostics.filter((d) => {
      if (filterType === 'all') return true;
      if (filterType === 'attendance') return d.attendanceRisk;
      if (filterType === 'behavioral') return d.behavioralRisk;
      if (filterType === 'academic') return d.ngSubjects.length > 0;
      return true;
    });
  }, [ngDiagnostics, filterType]);

  const totalNg = ngDiagnostics.length;
  const attendanceDeficitCount = ngDiagnostics.filter((d) => d.attendanceRisk).length;
  const behavioralRiskCount = ngDiagnostics.filter((d) => d.behavioralRisk).length;
  const multipleSubjectFailsCount = ngDiagnostics.filter((d) => d.ngSubjects.length > 1).length;

  return (
    <div className="space-y-6">
      {/* Overview Stat Strip */}
      <div className="bg-white border border-rose-200 rounded-xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-rose-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                At-Risk & Non-Graded (NG) Intervention Desk
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Centralized triage, root-cause categorization, and remedial intervention assignment for First Terminal Examination
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-rose-600 text-white font-mono text-xs font-bold">
              10 Students Flagged (18.9% of Class)
            </span>
          </div>
        </div>

        {/* 4 Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="p-3 bg-rose-50/50 rounded-lg border border-rose-100">
            <span className="text-[11px] font-semibold text-rose-800 uppercase block">Total NG Cohort</span>
            <span className="text-2xl font-bold font-mono text-rose-900 tabular-nums">{totalNg}</span>
            <span className="text-[10px] text-slate-500 block">Requires chance/remedial exam</span>
          </div>
          <div className="p-3 bg-amber-50/50 rounded-lg border border-amber-100">
            <span className="text-[11px] font-semibold text-amber-800 uppercase block">Attendance Deficits</span>
            <span className="text-2xl font-bold font-mono text-amber-900 tabular-nums">{attendanceDeficitCount}</span>
            <span className="text-[10px] text-slate-500 block">Below 75% school day threshold</span>
          </div>
          <div className="p-3 bg-indigo-50/50 rounded-lg border border-indigo-100">
            <span className="text-[11px] font-semibold text-indigo-800 uppercase block">Multi-Subject Deficits</span>
            <span className="text-2xl font-bold font-mono text-indigo-900 tabular-nums">{multipleSubjectFailsCount}</span>
            <span className="text-[10px] text-slate-500 block">Failed &gt; 1 subject component</span>
          </div>
          <div className="p-3 bg-purple-50/50 rounded-lg border border-purple-100">
            <span className="text-[11px] font-semibold text-purple-800 uppercase block">Behavioral Concerns</span>
            <span className="text-2xl font-bold font-mono text-purple-900 tabular-nums">{behavioralRiskCount}</span>
            <span className="text-[10px] text-slate-500 block">Marked "Passive" / "Distracted"</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filterType === 'all'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All NG Students ({totalNg})
          </button>
          <button
            onClick={() => setFilterType('attendance')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filterType === 'attendance'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Attendance Deficit &lt;75% ({attendanceDeficitCount})
          </button>
          <button
            onClick={() => setFilterType('academic')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filterType === 'academic'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Subject Failure ({ngDiagnostics.length})
          </button>
          <button
            onClick={() => setFilterType('behavioral')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filterType === 'behavioral'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Passive / Distracted ({behavioralRiskCount})
          </button>
        </div>
        <span className="text-xs text-slate-500">
          Showing {filteredDiagnostics.length} of {totalNg} intervention cases
        </span>
      </div>

      {/* Triage Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDiagnostics.map((d) => {
          const s = d.student;
          const avatarSrc = s.imageUrl || getStudentAvatarUrl(s.name, s.sn);
          return (
            <div
              key={s.sn}
              className="bg-white border border-slate-200 hover:border-indigo-300 rounded-xl p-5 shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Student Portrait Image */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200 shrink-0 bg-slate-100 shadow-xs">
                      <img
                        src={avatarSrc}
                        alt={s.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold">
                          Roll #{s.sn}
                        </span>
                        <h3 className="text-base font-bold text-slate-900">{s.name}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <span>Total: {s.obtainedTotalMarks}/600 ({s.percentage.toFixed(1)}%)</span>
                        <span aria-hidden="true">·</span>
                        <span>SEE: {s.seeGpa.toFixed(2)}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-bold text-rose-600">NG Drop: -{s.seeGpa.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`px-2 py-0.5 text-xs font-bold rounded ${
                      d.attendanceRisk ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {s.attendancePct.toFixed(1)}% Att.
                  </span>
                </div>

                {/* Failing Subjects */}
                <div className="mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 block mb-1">
                    Failed Subject Components:
                  </span>
                  <div className="space-y-1">
                    {d.ngSubjects.map((sub) => (
                      <div
                        key={sub.key}
                        className="flex items-center justify-between text-xs bg-rose-50 px-2.5 py-1 rounded border border-rose-100 text-rose-900"
                      >
                        <span className="font-medium">{sub.name}</span>
                        <span className="font-mono text-[11px] text-rose-700">
                          {sub.deficitReason || `Score ${sub.totalObtained}/${sub.totalMax}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Behavioral & Faculty Remark */}
                <div className="p-2.5 rounded bg-slate-50 border border-slate-100 text-xs mb-3">
                  <div className="flex items-center justify-between text-slate-500 mb-0.5">
                    <span>Engagement: <strong className="text-slate-800">{s.classroomEngagement}</strong></span>
                  </div>
                  <p className="text-slate-700 italic">"{s.strengthsAndWeaknesses}"</p>
                </div>

                {/* Assigned Peer Tutor */}
                {d.peerTutors.length > 0 && (
                  <div className="flex items-center gap-2 text-xs text-indigo-900 bg-indigo-50/50 p-2 rounded border border-indigo-100 mb-3">
                    <Users className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>
                      Peer Tutor Assigned: <strong>{d.peerTutors[0].tutorName}</strong> (Score {d.peerTutors[0].tutorScore}/100)
                    </span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Parent Counseling: Required
                </span>
                <button
                  onClick={() => onSelectStudent(s)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
                >
                  <span>Open Full Diagnostic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
