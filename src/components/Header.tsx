import React from 'react';
import { Printer, GraduationCap, Download } from 'lucide-react';

interface HeaderProps {
  activeTab: 'diagnostic' | 'interventions' | 'cohort' | 'ledger';
  setActiveTab: (tab: 'diagnostic' | 'interventions' | 'cohort' | 'ledger') => void;
  onPrint: () => void;
  onExportCsv: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onPrint,
  onExportCsv,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-indigo-900 flex items-center justify-center text-white shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-base font-bold tracking-tight text-slate-900 whitespace-nowrap">
              Grade 11 CS Diagnostic Ledger
            </span>
          </div>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button
              onClick={() => setActiveTab('diagnostic')}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
                activeTab === 'diagnostic'
                  ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Student Diagnostic
            </button>
            <button
              onClick={() => setActiveTab('interventions')}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer relative ${
                activeTab === 'interventions'
                  ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Intervention Desk
              <span className="ml-1.5 text-xs px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-mono font-semibold">
                10 NG
              </span>
            </button>
            <button
              onClick={() => setActiveTab('cohort')}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
                activeTab === 'cohort'
                  ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cohort Analytics
            </button>
            <button
              onClick={() => setActiveTab('ledger')}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
                activeTab === 'ledger'
                  ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Master Ledger (53)
            </button>
          </nav>

          {/* Zone 3: Primary action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onExportCsv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors whitespace-nowrap cursor-pointer shadow-xs"
              title="Download Master Ledger CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-indigo-900 rounded-md hover:bg-indigo-800 transition-colors whitespace-nowrap cursor-pointer shadow-xs"
              title="Print official student diagnostic dossier"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Dossier</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
