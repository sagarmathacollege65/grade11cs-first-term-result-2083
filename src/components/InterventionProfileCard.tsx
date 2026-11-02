import React, { useState } from 'react';
import { StudentDiagnosticResult } from '../utils/diagnosticEngine';
import {
  AlertOctagon,
  Users,
  CalendarCheck,
  PhoneCall,
  CheckSquare,
  Square,
  ClipboardList,
  ShieldAlert,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface InterventionProfileCardProps {
  diagnostic: StudentDiagnosticResult;
}

export const InterventionProfileCard: React.FC<InterventionProfileCardProps> = ({
  diagnostic,
}) => {
  const {
    student,
    isNg,
    rootCauses,
    peerTutors,
    remediationPlan,
    highRiskSubjects,
  } = diagnostic;

  // Local checklist state for counseling & remedial steps (allows faculty to check off tasks in session)
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  const toggleStep = (id: string) => {
    setCompletedSteps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!isNg && rootCauses.length === 0) {
    return (
      <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-emerald-950">
              Optimal Academic Standing · No Remedial Triggers Active
            </h3>
            <p className="text-xs text-emerald-800 mt-0.5">
              {student.name} maintains a passing grade across all 6 evaluated subjects with satisfactory attendance ({student.attendancePct.toFixed(1)}%) and {student.classroomEngagement.toLowerCase()} classroom behavior.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`border rounded-xl shadow-xs p-5 mb-6 ${
      isNg
        ? 'bg-white border-rose-300'
        : 'bg-white border-amber-300'
    }`}>
      {/* Title & Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
            isNg ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
          }`}>
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-900">
                {isNg
                  ? 'Automated Intervention Profile (Non-Graded / NG Remediator)'
                  : 'Proactive Academic Intervention & Risk Mitigation Profile'}
              </h2>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                isNg ? 'bg-rose-600 text-white' : 'bg-amber-500 text-white'
              }`}>
                {isNg ? 'Mandatory NG Trigger' : 'Advisory Support'}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Classified failure triggers, diagnostic peer-pairing, and remediation milestones
            </p>
          </div>
        </div>
      </div>

      {/* 1. Root Cause Classification */}
      <div className="mb-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
          <AlertOctagon className="w-4 h-4 text-rose-600" />
          <span>Root Cause Classification</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {rootCauses.map((cause, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-lg border text-xs flex flex-col justify-between ${
                cause.type === 'academic'
                  ? 'bg-rose-50/70 border-rose-200 text-rose-950'
                  : cause.type === 'attendance'
                  ? 'bg-amber-50/70 border-amber-200 text-amber-950'
                  : 'bg-orange-50/70 border-orange-200 text-orange-950'
              }`}
            >
              <div>
                <div className="flex items-center justify-between font-bold mb-1">
                  <span>{cause.title}</span>
                  <span className={`text-[10px] uppercase font-mono px-1.5 py-0.2 rounded font-bold ${
                    cause.severity === 'critical' ? 'bg-rose-600 text-white' : 'bg-amber-500 text-white'
                  }`}>
                    {cause.severity}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-700 mt-1">
                  {cause.description}
                </p>
              </div>
              <div className="mt-2.5 pt-1.5 border-t border-slate-200/50 text-[10px] font-medium text-slate-600">
                Trigger Category: <span className="capitalize font-bold">{cause.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Peer-Tutoring Pairing Matrix */}
      {peerTutors.length > 0 && (
        <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-indigo-600" />
            <span>Targeted Peer-Tutoring Pairing (Top Subject Masters)</span>
          </h3>
          <p className="text-xs text-slate-600 mb-3">
            Pairing with high-performing classmates to conduct twice-weekly guided practice in the specific deficit subject:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {peerTutors.map((tutor, idx) => (
              <div
                key={idx}
                className="bg-white p-3 rounded-lg border border-slate-200 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="text-[11px] font-semibold text-indigo-700 uppercase block">
                    Deficit: {tutor.subject}
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {tutor.tutorName}
                  </span>
                  <span className="text-slate-500 block text-[11px]">
                    Ledger Rank #{tutor.tutorRank ?? 'Top'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">Tutor Mark</span>
                  <span className="font-mono font-bold text-emerald-700 text-sm tabular-nums">
                    {tutor.tutorScore} / 100
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Targeted Remediation Action Plan Checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Mandatory Remedial Coaching & Lab Checks */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
            <CalendarCheck className="w-4 h-4 text-indigo-600" />
            <span>Mandatory Remedial & Lab Check-ins</span>
          </h3>
          <div className="space-y-2">
            {remediationPlan.mandatoryCoaching.map((item, idx) => {
              const stepId = `coaching-${idx}`;
              const checked = !!completedSteps[stepId];
              return (
                <div
                  key={stepId}
                  onClick={() => toggleStep(stepId)}
                  className={`p-2.5 rounded-lg border text-xs flex items-start gap-2.5 cursor-pointer transition-colors ${
                    checked
                      ? 'bg-emerald-50/50 border-emerald-200 text-slate-600 line-through'
                      : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-800'
                  }`}
                >
                  <button className="mt-0.5 text-slate-500 shrink-0">
                    {checked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>
                  <span className="leading-snug">{item}</span>
                </div>
              );
            })}

            {remediationPlan.weeklyLabCheckIns.map((item, idx) => {
              const stepId = `lab-${idx}`;
              const checked = !!completedSteps[stepId];
              return (
                <div
                  key={stepId}
                  onClick={() => toggleStep(stepId)}
                  className={`p-2.5 rounded-lg border text-xs flex items-start gap-2.5 cursor-pointer transition-colors ${
                    checked
                      ? 'bg-emerald-50/50 border-emerald-200 text-slate-600 line-through'
                      : 'bg-indigo-50/40 border-indigo-200/80 hover:border-indigo-400 text-indigo-950 font-medium'
                  }`}
                >
                  <button className="mt-0.5 text-indigo-500 shrink-0">
                    {checked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>
                  <span className="leading-snug">{item}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Parent-Teacher Counseling & Milestones */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4 text-amber-600" />
            <span>Counseling Triggers & Immediate Milestones</span>
          </h3>
          <div className="space-y-2">
            {remediationPlan.counselingTriggers.map((item, idx) => {
              const stepId = `counseling-${idx}`;
              const checked = !!completedSteps[stepId];
              return (
                <div
                  key={stepId}
                  onClick={() => toggleStep(stepId)}
                  className={`p-2.5 rounded-lg border text-xs flex items-start gap-2.5 cursor-pointer transition-colors ${
                    checked
                      ? 'bg-emerald-50/50 border-emerald-200 text-slate-600 line-through'
                      : 'bg-white border-amber-200/80 hover:border-amber-400 text-slate-800'
                  }`}
                >
                  <button className="mt-0.5 text-amber-600 shrink-0">
                    {checked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>
                  <span className="leading-snug">{item}</span>
                </div>
              );
            })}

            {remediationPlan.immediateMilestones.map((item, idx) => {
              const stepId = `milestone-${idx}`;
              const checked = !!completedSteps[stepId];
              return (
                <div
                  key={stepId}
                  onClick={() => toggleStep(stepId)}
                  className={`p-2.5 rounded-lg border text-xs flex items-start gap-2.5 cursor-pointer transition-colors ${
                    checked
                      ? 'bg-emerald-50/50 border-emerald-200 text-slate-600 line-through'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <button className="mt-0.5 text-slate-500 shrink-0">
                    {checked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>
                  <span className="leading-snug">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
