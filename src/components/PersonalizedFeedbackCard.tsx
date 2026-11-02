import React, { useState } from 'react';
import { StudentDiagnosticResult } from '../utils/diagnosticEngine';
import { MessageSquare, Copy, Check, Sparkles, BookMarked, Lightbulb, Compass } from 'lucide-react';

interface PersonalizedFeedbackCardProps {
  diagnostic: StudentDiagnosticResult;
}

export const PersonalizedFeedbackCard: React.FC<PersonalizedFeedbackCardProps> = ({
  diagnostic,
}) => {
  const { student, narrativeFeedback } = diagnostic;
  const [copied, setCopied] = useState(false);

  const fullText = `ACADEMIC DIAGNOSTIC FEEDBACK REPORT
Student: ${student.name} (Roll #${student.sn}) | Division: ${student.division} | GPA: ${student.firstTermGpa > 0 ? student.firstTermGpa.toFixed(2) : 'NG (0.00)'} (SEE: ${student.seeGpa.toFixed(2)})
Category: ${narrativeFeedback.category}
Headline: ${narrativeFeedback.headline}

EXECUTIVE SUMMARY:
${narrativeFeedback.summary}

COMMENDATION & QUALITATIVE OBSERVATIONS:
${narrativeFeedback.commendation}

TARGET AREAS & CURRICULAR GAPS:
${narrativeFeedback.targetAreas}

ACTIONABLE ADVICE FOR UPCOMING TERM:
${narrativeFeedback.actionableAdvice}

ENRICHMENT / REMEDIATION TRACK:
${narrativeFeedback.enrichmentOrRemediation}

Faculty In-Charge: Department of Computer Science & Academic Evaluation Committee`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isHigh = narrativeFeedback.category === 'High Performer';
  const isModerate = narrativeFeedback.category === 'Moderate Performer';
  const isNg = narrativeFeedback.category === 'At-Risk / NG';

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-5 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
              isHigh
                ? 'bg-emerald-100 text-emerald-800'
                : isModerate
                ? 'bg-indigo-100 text-indigo-800'
                : 'bg-rose-100 text-rose-800'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-900">
                Automated Personalized Narrative Feedback
              </h2>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                  isHigh
                    ? 'bg-emerald-600 text-white'
                    : isModerate
                    ? 'bg-indigo-600 text-white'
                    : 'bg-rose-600 text-white'
                }`}
              >
                {narrativeFeedback.category}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Multi-variable synthesis of First Term GPA, SEE trajectory, engagement metrics, and faculty notes
            </p>
          </div>
        </div>

        {/* Copy to Clipboard CTA */}
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md transition-colors cursor-pointer self-start sm:self-auto shrink-0"
          title="Copy narrative report to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-600" />
              <span>Copy Feedback Dossier</span>
            </>
          )}
        </button>
      </div>

      {/* Main Headline */}
      <div
        className={`p-3.5 rounded-lg border mb-5 text-sm font-semibold flex items-center gap-2.5 ${
          isHigh
            ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
            : isModerate
            ? 'bg-indigo-50/60 border-indigo-200 text-indigo-950'
            : 'bg-rose-50/60 border-rose-200 text-rose-950'
        }`}
      >
        <Sparkles
          className={`w-4 h-4 shrink-0 ${
            isHigh ? 'text-emerald-600' : isModerate ? 'text-indigo-600' : 'text-rose-600'
          }`}
        />
        <span>{narrativeFeedback.headline}</span>
      </div>

      {/* Content Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left Column: Summary & Commendations */}
        <div className="space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Executive Evaluation Summary
            </span>
            <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
              {narrativeFeedback.summary}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1 flex items-center gap-1">
              <BookMarked className="w-3.5 h-3.5 text-indigo-600" />
              Faculty Observation & Commendations
            </span>
            <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
              {narrativeFeedback.commendation}
            </p>
          </div>
        </div>

        {/* Right Column: Target Areas, Actionable Advice & Enrichment */}
        <div className="space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1 flex items-center gap-1">
              <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
              Target Deficit Areas & Actionable Advice
            </span>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1.5 text-xs text-slate-700 leading-relaxed">
              <p>
                <strong className="text-slate-900">Focus Areas:</strong> {narrativeFeedback.targetAreas}
              </p>
              <p>
                <strong className="text-slate-900">Action Plan:</strong> {narrativeFeedback.actionableAdvice}
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1 flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-indigo-600" />
              {isHigh ? 'Recommended Advanced CS Enrichment' : 'Targeted Remedial Pathway'}
            </span>
            <p
              className={`text-xs leading-relaxed p-3 rounded-lg border ${
                isHigh
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950 font-medium'
                  : isModerate
                  ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950'
                  : 'bg-rose-50/70 border-rose-200 text-rose-950 font-medium'
              }`}
            >
              {narrativeFeedback.enrichmentOrRemediation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
