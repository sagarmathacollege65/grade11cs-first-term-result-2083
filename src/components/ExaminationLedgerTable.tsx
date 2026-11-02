import React from 'react';
import { SubjectDiagnostic } from '../utils/diagnosticEngine';
import { CheckCircle2, AlertOctagon, HelpCircle } from 'lucide-react';

interface ExaminationLedgerTableProps {
  subjects: SubjectDiagnostic[];
  studentName: string;
}

export const ExaminationLedgerTable: React.FC<ExaminationLedgerTableProps> = ({
  subjects,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden mb-6">
      <div className="px-5 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            First Terminal Examination Subject Ledger
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Theory vs. Practical granular marks ledger (NEB Curriculum standard: Theory Pass ≥ 35%, Internal Pass ≥ 40%)
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-100 border border-emerald-300"></span>
            <span>Mastery (≥80%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-rose-100 border border-rose-300"></span>
            <span>NG / Deficit (&lt;35% Theory or &lt;40% In)</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-50 text-slate-600 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
              <th className="py-3 px-4">Subject</th>
              <th className="py-3 px-4 text-center">Track</th>
              <th className="py-3 px-4 text-right">Theory Marks<br /><span className="text-[10px] text-slate-400 font-normal">Obt / Full (Min 35%)</span></th>
              <th className="py-3 px-4 text-right">Practical / Internal<br /><span className="text-[10px] text-slate-400 font-normal">Obt / Full (Min 40%)</span></th>
              <th className="py-3 px-4 text-right">Total Marks<br /><span className="text-[10px] text-slate-400 font-normal">Obt / 100</span></th>
              <th className="py-3 px-4 text-right">Percentage</th>
              <th className="py-3 px-4 text-center">Grade</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {subjects.map((sub) => {
              const isTheoryFail = sub.theory !== null && sub.theory < sub.theoryMax * 0.35;
              const isPracticalFail = sub.practical !== null && sub.practical < sub.practicalMax * 0.40;
              const isFail = !sub.isPassed || sub.grade === 'NG';
              const isHigh = sub.isHighMastery;

              return (
                <tr
                  key={sub.key}
                  className={`transition-colors ${
                    isFail
                      ? 'bg-rose-50/60 hover:bg-rose-50 text-rose-950 font-medium'
                      : isHigh
                      ? 'bg-emerald-50/30 hover:bg-emerald-50/50'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  {/* Subject Name */}
                  <td className="py-3 px-4 font-semibold text-slate-900">
                    <div className="flex items-center gap-2">
                      <span>{sub.name}</span>
                      {sub.key === 'computer' && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700 font-bold">
                          Core Technical
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Track Type */}
                  <td className="py-3 px-4 text-center">
                    <span className="text-xs text-slate-500 capitalize">
                      {sub.type}
                    </span>
                  </td>

                  {/* Theory Marks */}
                  <td className="py-3 px-4 text-right">
                    <div className="font-mono tabular-nums">
                      <span
                        className={
                          isTheoryFail
                            ? 'text-rose-600 font-bold underline decoration-rose-400'
                            : 'text-slate-800'
                        }
                      >
                        {sub.theory ?? '—'}
                      </span>
                      <span className="text-slate-400 text-xs"> / {sub.theoryMax}</span>
                    </div>
                    {isTheoryFail && (
                      <span className="text-[10px] text-rose-600 font-medium block">
                        Min {(sub.theoryMax * 0.35).toFixed(1)} required
                      </span>
                    )}
                  </td>

                  {/* Practical Marks */}
                  <td className="py-3 px-4 text-right">
                    <div className="font-mono tabular-nums">
                      <span
                        className={
                          isPracticalFail
                            ? 'text-rose-600 font-bold underline decoration-rose-400'
                            : 'text-slate-800'
                        }
                      >
                        {sub.practical ?? '—'}
                      </span>
                      <span className="text-slate-400 text-xs"> / {sub.practicalMax}</span>
                    </div>
                    {isPracticalFail && (
                      <span className="text-[10px] text-rose-600 font-medium block">
                        Min {(sub.practicalMax * 0.40).toFixed(0)} required
                      </span>
                    )}
                  </td>

                  {/* Total Marks */}
                  <td className="py-3 px-4 text-right font-mono font-bold tabular-nums">
                    <span className={isFail ? 'text-rose-700' : 'text-slate-900'}>
                      {sub.totalObtained}
                    </span>
                    <span className="text-slate-400 text-xs font-normal"> / {sub.totalMax}</span>
                  </td>

                  {/* Percentage */}
                  <td className="py-3 px-4 text-right font-mono font-semibold tabular-nums text-slate-700">
                    {sub.percentage !== null ? `${sub.percentage.toFixed(1)}%` : '—'}
                  </td>

                  {/* Grade */}
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-mono font-bold ${
                        sub.grade === 'NG'
                          ? 'bg-rose-600 text-white'
                          : sub.grade === 'A+' || sub.grade === 'A'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : sub.grade === 'B+' || sub.grade === 'B'
                          ? 'bg-blue-100 text-blue-800 border border-blue-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {sub.grade}
                    </span>
                  </td>

                  {/* Status Indicator */}
                  <td className="py-3 px-4 text-center">
                    {isFail ? (
                      <div className="inline-flex items-center gap-1 text-xs text-rose-700 font-semibold" title={sub.deficitReason}>
                        <AlertOctagon className="w-4 h-4 text-rose-600" />
                        <span>Deficit</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1 text-xs text-emerald-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Qualified</span>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-slate-50 font-bold border-t-2 border-slate-200 text-xs uppercase text-slate-700">
              <td colSpan={4} className="py-3 px-4 text-slate-900">
                Aggregate First Terminal Result (6 Subjects)
              </td>
              <td className="py-3 px-4 text-right font-mono text-sm tabular-nums text-slate-900">
                {subjects.reduce((sum, s) => sum + (s.totalObtained ?? 0), 0)} / 600
              </td>
              <td className="py-3 px-4 text-right font-mono text-sm tabular-nums text-slate-900">
                {(subjects.reduce((sum, s) => sum + (s.totalObtained ?? 0), 0) / 6).toFixed(1)}%
              </td>
              <td colSpan={2} className="py-3 px-4 text-center">
                {subjects.some((s) => !s.isPassed || s.grade === 'NG') ? (
                  <span className="text-rose-600 font-semibold font-mono text-xs">
                    Non-Graded (NG Triggered)
                  </span>
                ) : (
                  <span className="text-emerald-700 font-semibold font-mono text-xs">
                    Fully Cleared
                  </span>
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
