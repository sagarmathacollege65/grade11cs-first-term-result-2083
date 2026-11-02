import React from 'react';
import { StudentDiagnosticResult } from '../utils/diagnosticEngine';
import { getStudentAvatarUrl } from '../utils/studentAvatar';

interface PrintableReportCardProps {
  diagnostic: StudentDiagnosticResult;
}

export const PrintableReportCard: React.FC<PrintableReportCardProps> = ({ diagnostic }) => {
  const { student, dynamicRank, gpaVariance, isNg, evaluatedSubjects, narrativeFeedback, rootCauses, remediationPlan, peerTutors } = diagnostic;
  const avatarSrc = student.imageUrl || getStudentAvatarUrl(student.name, student.sn);

  return (
    <div className="hidden print:block p-8 bg-white text-slate-900 font-sans max-w-4xl mx-auto">
      {/* Institutional Letterhead */}
      <div className="text-center border-b-2 border-slate-900 pb-4 mb-6">
        <h1 className="text-xl font-bold tracking-tight uppercase">
          Department of Computer Science & Information Technology
        </h1>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-700">
          First Terminal Examination 2083 · Academic Diagnostic & Intervention Dossier
        </p>
        <p className="text-xs text-slate-500 mt-1">
          Curricular Evaluation Ledger Date: 2083/07/12 · Grade 11 Computer Science Track
        </p>
      </div>

      {/* Student Meta Details with Portrait Photo */}
      <div className="flex items-center gap-6 text-xs mb-6 p-4 border border-slate-300 rounded-lg bg-slate-50">
        <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-slate-400 shrink-0 bg-white shadow-xs">
          <img
            src={avatarSrc}
            alt={student.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div>
            <p><span className="font-semibold text-slate-600">Student Full Name:</span> <strong className="text-sm text-slate-900">{student.name}</strong></p>
            <p className="mt-1"><span className="font-semibold text-slate-600">Roll Number / S.N.:</span> #{student.sn}</p>
            <p className="mt-1"><span className="font-semibold text-slate-600">Class Standing:</span> Rank #{dynamicRank} of 53 (Official Ledger Rank: #{student.ledgerRank ?? 'N/A'})</p>
            <p className="mt-1"><span className="font-semibold text-slate-600">Division Classification:</span> <strong className={isNg ? 'text-rose-700' : 'text-slate-900'}>{isNg ? 'Non-Graded (NG)' : student.division}</strong></p>
          </div>
        <div>
          <p><span className="font-semibold text-slate-600">First Terminal GPA:</span> <strong className="text-sm text-slate-900">{student.firstTermGpa.toFixed(2)}</strong> / 4.00</p>
          <p className="mt-1"><span className="font-semibold text-slate-600">Baseline Entry SEE GPA:</span> {student.seeGpa.toFixed(2)} / 4.00</p>
          <p className="mt-1">
            <span className="font-semibold text-slate-600">Academic Trajectory Variance:</span>{' '}
            <strong className={gpaVariance >= 0 ? 'text-emerald-700' : 'text-rose-700'}>
              {gpaVariance >= 0 ? `+${gpaVariance.toFixed(2)}` : gpaVariance.toFixed(2)} {gpaVariance >= 0 ? '▲ (Growth)' : '▼ (Drop)'}
            </strong>
          </p>
            <p className="mt-1">
              <span className="font-semibold text-slate-600">Attendance Compliance:</span> {student.attendancePct.toFixed(1)}% ({student.daysPresent} of {student.totalSchoolDays} Days)
            </p>
          </div>
        </div>
      </div>

      {/* Granular Marks Ledger Table */}
      <div className="mb-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
          Subject-Wise Examination Marks Ledger (Full Marks: 600)
        </h3>
        <table className="w-full text-xs border border-slate-300 border-collapse text-left">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-300">
              <th className="py-2 px-3 border-r border-slate-300">Subject</th>
              <th className="py-2 px-3 text-right border-r border-slate-300">Theory (Obt / Full)</th>
              <th className="py-2 px-3 text-right border-r border-slate-300">Practical (Obt / Full)</th>
              <th className="py-2 px-3 text-right border-r border-slate-300">Total (Obt / 100)</th>
              <th className="py-2 px-3 text-right border-r border-slate-300">Percentage</th>
              <th className="py-2 px-3 text-center border-r border-slate-300">Grade</th>
              <th className="py-2 px-3 text-center">Diagnostic Status</th>
            </tr>
          </thead>
          <tbody>
            {evaluatedSubjects.map((sub) => {
              const isTheoryFail = sub.theory !== null && sub.theory < sub.theoryMax * 0.35;
              const isPracticalFail = sub.practical !== null && sub.practical < sub.practicalMax * 0.40;
              const isFail = !sub.isPassed || sub.grade === 'NG';
              return (
                <tr key={sub.key} className={`border-b border-slate-200 ${isFail ? 'bg-rose-50 font-semibold' : ''}`}>
                  <td className="py-2 px-3 border-r border-slate-300 font-medium">
                    {sub.name} {sub.key === 'computer' && '(Core Technical)'}
                  </td>
                  <td className={`py-2 px-3 text-right border-r border-slate-300 font-mono ${isTheoryFail ? 'text-rose-700 font-bold' : ''}`}>
                    {sub.theory ?? '—'} / {sub.theoryMax}
                  </td>
                  <td className={`py-2 px-3 text-right border-r border-slate-300 font-mono ${isPracticalFail ? 'text-rose-700 font-bold' : ''}`}>
                    {sub.practical ?? '—'} / {sub.practicalMax}
                  </td>
                  <td className="py-2 px-3 text-right border-r border-slate-300 font-mono font-bold">
                    {sub.totalObtained} / {sub.totalMax}
                  </td>
                  <td className="py-2 px-3 text-right border-r border-slate-300 font-mono">
                    {sub.percentage?.toFixed(1)}%
                  </td>
                  <td className="py-2 px-3 text-center border-r border-slate-300 font-mono font-bold">
                    {sub.grade}
                  </td>
                  <td className="py-2 px-3 text-center">
                    {isFail ? (
                      <span className="text-rose-700 font-bold">DEFICIT / NG</span>
                    ) : (
                      <span className="text-emerald-700">QUALIFIED</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-slate-100 font-bold border-t border-slate-300">
              <td colSpan={3} className="py-2 px-3 border-r border-slate-300">AGGREGATE TOTAL</td>
              <td className="py-2 px-3 text-right border-r border-slate-300 font-mono font-bold">{student.obtainedTotalMarks} / 600</td>
              <td className="py-2 px-3 text-right border-r border-slate-300 font-mono font-bold">{student.percentage.toFixed(1)}%</td>
              <td colSpan={2} className="py-2 px-3 text-center font-mono">{isNg ? 'NON-GRADED (NG)' : student.division}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Diagnostic & Behavioral Insights */}
      <div className="grid grid-cols-2 gap-4 text-xs mb-6 p-4 border border-slate-300 rounded-lg bg-slate-50">
        <div>
          <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-1">
            Faculty Observations & Engagement
          </h4>
          <p><span className="font-semibold">Classroom Engagement:</span> {student.classroomEngagement}</p>
          <p className="mt-1"><span className="font-semibold">Faculty Head Remark:</span> "{student.strengthsAndWeaknesses}"</p>
          <p className="mt-1"><span className="font-semibold">Technical vs General Mastery:</span> CS {diagnostic.technicalMasteryPct.toFixed(1)}% vs General {diagnostic.generalMasteryPct.toFixed(1)}%</p>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-1">
            Diagnostic Narrative & Action Plan
          </h4>
          <p className="leading-relaxed">{narrativeFeedback.summary}</p>
          <p className="mt-2 text-slate-700"><strong>Recommendation:</strong> {narrativeFeedback.enrichmentOrRemediation}</p>
        </div>
      </div>

      {/* Root Causes & Peer Tutor if NG */}
      {isNg && (
        <div className="mb-6 p-4 border border-rose-300 rounded-lg bg-rose-50/50 text-xs">
          <h4 className="font-bold text-rose-900 uppercase tracking-wider mb-2">
            Mandatory Remedial Protocol for Non-Graded Status
          </h4>
          <div className="space-y-1 text-slate-800 mb-2">
            {rootCauses.map((r, i) => (
              <p key={i}>• <strong>{r.title}:</strong> {r.description}</p>
            ))}
          </div>
          {peerTutors.length > 0 && (
            <p className="text-indigo-900">
              <strong>Assigned Peer Tutor:</strong> {peerTutors[0].tutorName} (Score: {peerTutors[0].tutorScore}/100)
            </p>
          )}
        </div>
      )}

      {/* Official Signatures Strip */}
      <div className="grid grid-cols-4 gap-6 pt-12 mt-8 border-t border-slate-300 text-center text-xs">
        <div>
          <div className="border-b border-slate-400 pb-1 mb-1"></div>
          <span className="font-semibold text-slate-700">Class Teacher</span>
        </div>
        <div>
          <div className="border-b border-slate-400 pb-1 mb-1"></div>
          <span className="font-semibold text-slate-700">Computer Faculty Head</span>
        </div>
        <div>
          <div className="border-b border-slate-400 pb-1 mb-1"></div>
          <span className="font-semibold text-slate-700">Academic Coordinator</span>
        </div>
        <div>
          <div className="border-b border-slate-400 pb-1 mb-1"></div>
          <span className="font-semibold text-slate-700">Parent / Guardian</span>
        </div>
      </div>
    </div>
  );
};
