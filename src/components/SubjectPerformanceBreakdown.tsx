import React from 'react';
import { StudentDiagnosticResult } from '../utils/diagnosticEngine';
import { Cpu, BookOpen, Sparkles, AlertTriangle, ArrowRight } from 'lucide-react';

interface SubjectPerformanceBreakdownProps {
  diagnostic: StudentDiagnosticResult;
}

export const SubjectPerformanceBreakdown: React.FC<SubjectPerformanceBreakdownProps> = ({
  diagnostic,
}) => {
  const {
    evaluatedSubjects,
    topSubjects,
    highRiskSubjects,
    technicalMasteryPct,
    generalMasteryPct,
    learningGapSummary,
  } = diagnostic;

  const computerSub = evaluatedSubjects.find((s) => s.key === 'computer');

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-5 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Subject-Wise Performance Breakdown & Technical Contrast
          </h2>
          <p className="text-xs text-slate-500">
            Evaluating curricular mastery thresholds, core technical depth, and disciplinary disparities
          </p>
        </div>
      </div>

      {/* Top Banner: Core Technical vs General Mastery Contrast */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-6">
        {/* Core Technical Mastery (Computer Science) */}
        <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-indigo-700 font-semibold mb-1">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-indigo-600" />
                Core Technical Track (Computer Science)
              </span>
              <span className="font-mono text-sm tabular-nums font-bold">
                {technicalMasteryPct.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden my-2">
              <div
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.max(0, technicalMasteryPct))}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 font-mono mt-1">
              <span>Theory: {computerSub?.theory ?? 0}/50 ({(computerSub?.theory ? (computerSub.theory / 50) * 100 : 0).toFixed(0)}%)</span>
              <span>Practical: {computerSub?.practical ?? 0}/50 ({(computerSub?.practical ? (computerSub.practical / 50) * 100 : 0).toFixed(0)}%)</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
            {technicalMasteryPct >= 80 ? (
              <span className="text-emerald-700 font-medium">✓ Advanced programming and theoretical computing proficiency</span>
            ) : technicalMasteryPct >= 50 ? (
              <span className="text-slate-700 font-medium">Capable in practical labs, theory requires structured review</span>
            ) : (
              <span className="text-rose-700 font-medium">⚠ Technical gap in C programming syntax and architectural fundamentals</span>
            )}
          </div>
        </div>

        {/* General Academic Track */}
        <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-700 font-semibold mb-1">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-slate-600" />
                General Academic Track (5 Subjects Avg)
              </span>
              <span className="font-mono text-sm tabular-nums font-bold text-slate-900">
                {generalMasteryPct.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden my-2">
              <div
                className="bg-slate-700 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.max(0, generalMasteryPct))}%` }}
              ></div>
            </div>
            <div className="text-xs text-slate-500 flex items-center justify-between mt-1">
              <span>Nepali, English, Math/Social, Account, Economics</span>
              <span className="font-mono">Delta: {(technicalMasteryPct - generalMasteryPct).toFixed(1)}%</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
            <span className="font-medium text-slate-700">{learningGapSummary}</span>
          </div>
        </div>
      </div>

      {/* Granular Mastery Progress Bars for all 6 subjects */}
      <div className="space-y-3 mb-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Curricular Mastery Scale (80% Mastery Threshold · 35% Pass Baseline)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          {evaluatedSubjects.map((sub) => {
            const pct = sub.percentage ?? 0;
            const isTop = sub.isHighMastery;
            const isDanger = sub.isAtRisk;

            return (
              <div key={sub.key} className="p-3 rounded-lg border border-slate-100 bg-slate-50/40">
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <span>{sub.name}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 font-normal">
                      Grade {sub.grade}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold tabular-nums text-slate-900">
                    {pct.toFixed(1)}% ({sub.totalObtained}/{sub.totalMax})
                  </span>
                </div>

                {/* Bar with threshold marker at 35% and 80% */}
                <div className="relative w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      isDanger
                        ? 'bg-rose-500'
                        : isTop
                        ? 'bg-emerald-500'
                        : pct >= 60
                        ? 'bg-indigo-500'
                        : 'bg-amber-500'
                    }`}
                    style={{ width: `${Math.min(100, Math.max(0, pct))}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                  <span>Theory: {sub.theory}/{sub.theoryMax}</span>
                  <span>Practical: {sub.practical}/{sub.practicalMax}</span>
                  <span className={isDanger ? 'text-rose-600 font-semibold' : isTop ? 'text-emerald-600 font-medium' : 'text-slate-500'}>
                    {isDanger ? 'Deficit Warning' : isTop ? 'High Mastery' : 'Satisfactory'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Disciplinary Highlights: Top Strengths vs High-Risk Areas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Top Performing Subjects (>80%) */}
        <div className="p-3.5 rounded-lg border border-emerald-200/80 bg-emerald-50/40">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs mb-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Top-Performing Subjects (&gt;80% Mastery)</span>
          </div>
          {topSubjects.length > 0 ? (
            <div className="space-y-1.5">
              {topSubjects.map((s) => (
                <div key={s.key} className="flex items-center justify-between text-xs text-slate-700 bg-white/80 px-2.5 py-1 rounded border border-emerald-100">
                  <span className="font-semibold">{s.name}</span>
                  <span className="font-mono font-bold text-emerald-700 tabular-nums">
                    {s.percentage?.toFixed(1)}% (Grade {s.grade})
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">
              No subject crossed the 80% distinction threshold in this term examination.
            </p>
          )}
        </div>

        {/* High-Risk Subject Areas (<40% or NG) */}
        <div className="p-3.5 rounded-lg border border-rose-200/80 bg-rose-50/40">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-xs mb-2">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>High-Risk Subject Deficits (&lt;40% or NG)</span>
          </div>
          {highRiskSubjects.length > 0 ? (
            <div className="space-y-1.5">
              {highRiskSubjects.map((s) => (
                <div key={s.key} className="flex items-center justify-between text-xs text-slate-700 bg-white/80 px-2.5 py-1 rounded border border-rose-100">
                  <span className="font-semibold text-rose-900">{s.name}</span>
                  <span className="font-mono font-bold text-rose-700 tabular-nums">
                    {s.percentage?.toFixed(1)}% ({s.grade})
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-emerald-700 font-medium">
              ✓ Clean slate: Zero subject deficits recorded below the 40% margin.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
