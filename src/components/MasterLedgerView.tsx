import React, { useState, useMemo } from 'react';
import { StudentRecord, STUDENTS_DATA } from '../data/studentsData';
import { getStudentAvatarUrl } from '../utils/studentAvatar';
import { Search, ArrowUpDown, ChevronDown, ChevronUp, UserCheck, Download } from 'lucide-react';

interface MasterLedgerViewProps {
  students: StudentRecord[];
  onSelectStudent: (student: StudentRecord) => void;
  onExportCsv: () => void;
}

type SortField = 'sn' | 'name' | 'attendance' | 'totalMarks' | 'percentage' | 'firstTermGpa' | 'seeGpa' | 'variance';

export const MasterLedgerView: React.FC<MasterLedgerViewProps> = ({
  students,
  onSelectStudent,
  onExportCsv,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [divisionFilter, setDivisionFilter] = useState<'ALL' | 'DISTINCTION' | 'First' | 'Second' | 'Fail'>('ALL');
  const [attendanceOnlyRisk, setAttendanceOnlyRisk] = useState(false);
  const [sortField, setSortField] = useState<SortField>('sn');
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false); // default descending for numbers
    }
  };

  const processedStudents = useMemo(() => {
    let list = students.filter((s) => {
      const matchSearch =
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.sn.toString().includes(searchQuery.trim());
      const matchDiv = divisionFilter === 'ALL' ? true : s.division === divisionFilter;
      const matchAtt = attendanceOnlyRisk ? s.attendancePct < 75.0 : true;
      return matchSearch && matchDiv && matchAtt;
    });

    list.sort((a, b) => {
      let va = 0;
      let vb = 0;
      if (sortField === 'sn') {
        va = a.sn;
        vb = b.sn;
      } else if (sortField === 'name') {
        return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (sortField === 'attendance') {
        va = a.attendancePct;
        vb = b.attendancePct;
      } else if (sortField === 'totalMarks') {
        va = a.obtainedTotalMarks;
        vb = b.obtainedTotalMarks;
      } else if (sortField === 'percentage') {
        va = a.percentage;
        vb = b.percentage;
      } else if (sortField === 'firstTermGpa') {
        va = a.firstTermGpa;
        vb = b.firstTermGpa;
      } else if (sortField === 'seeGpa') {
        va = a.seeGpa;
        vb = b.seeGpa;
      } else if (sortField === 'variance') {
        va = a.firstTermGpa - a.seeGpa;
        vb = b.firstTermGpa - b.seeGpa;
      }
      return sortAsc ? va - vb : vb - va;
    });

    return list;
  }, [students, searchQuery, divisionFilter, attendanceOnlyRisk, sortField, sortAsc]);

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
      {/* Table Header and Controls */}
      <div className="p-5 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              First Terminal Examination Official Master Ledger
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Grade 11 "Computer Science" · Complete 53-Student Ledger with Subject Scores and Behavioral Notes
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onExportCsv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CSV</span>
            </button>
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by student name or roll..."
              className="pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs">
              {(['ALL', 'DISTINCTION', 'First', 'Second', 'Fail'] as const).map((div) => (
                <button
                  key={div}
                  onClick={() => setDivisionFilter(div)}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    divisionFilter === div
                      ? 'bg-white text-slate-900 font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {div === 'ALL' ? 'All (53)' : div === 'Fail' ? 'NG / Fail (10)' : div}
                </button>
              ))}
            </div>

            <button
              onClick={() => setAttendanceOnlyRisk(!attendanceOnlyRisk)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                attendanceOnlyRisk
                  ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {attendanceOnlyRisk ? '✓ Attendance < 75%' : 'Filter Attendance < 75%'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Ledger Table */}
      <div className="overflow-x-auto max-h-[640px]">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="sticky top-0 z-10 bg-slate-100 text-slate-700 font-semibold uppercase tracking-wider border-b border-slate-300 shadow-xs">
            <tr>
              <th
                onClick={() => handleSort('sn')}
                className="py-3 px-3 cursor-pointer hover:bg-slate-200 select-none"
              >
                <div className="flex items-center gap-1">
                  <span>S.N.</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('name')}
                className="py-3 px-3 cursor-pointer hover:bg-slate-200 select-none whitespace-nowrap"
              >
                <div className="flex items-center gap-1">
                  <span>Student Name (Col C)</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('attendance')}
                className="py-3 px-3 text-right cursor-pointer hover:bg-slate-200 select-none whitespace-nowrap"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>Att % (Col F)</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
              <th className="py-3 px-2 text-right">Nepali<br /><span className="text-[10px] text-slate-400">75+25</span></th>
              <th className="py-3 px-2 text-right">English<br /><span className="text-[10px] text-slate-400">75+25</span></th>
              <th className="py-3 px-2 text-right">Soc/Mth<br /><span className="text-[10px] text-slate-400">75+25</span></th>
              <th className="py-3 px-2 text-right">Account<br /><span className="text-[10px] text-slate-400">75+25</span></th>
              <th className="py-3 px-2 text-right">Econ<br /><span className="text-[10px] text-slate-400">75+25</span></th>
              <th className="py-3 px-2 text-right bg-indigo-50/50">Comp Sc<br /><span className="text-[10px] text-indigo-500">50+50</span></th>
              <th
                onClick={() => handleSort('totalMarks')}
                className="py-3 px-3 text-right cursor-pointer hover:bg-slate-200 select-none"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>Total (Col U)</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('percentage')}
                className="py-3 px-3 text-right cursor-pointer hover:bg-slate-200 select-none"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>% (Col V)</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('firstTermGpa')}
                className="py-3 px-3 text-right cursor-pointer hover:bg-slate-200 select-none"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>GPA (Col W)</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('seeGpa')}
                className="py-3 px-3 text-right cursor-pointer hover:bg-slate-200 select-none"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>SEE (Col Z)</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
              <th
                onClick={() => handleSort('variance')}
                className="py-3 px-3 text-right cursor-pointer hover:bg-slate-200 select-none"
              >
                <div className="flex items-center justify-end gap-1">
                  <span>Variance</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </div>
              </th>
              <th className="py-3 px-3 text-center">Engagement (Col AA)</th>
              <th className="py-3 px-3">Faculty Remark (Col AB)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {processedStudents.map((s) => {
              const isNg = s.firstTermGpa === 0 || s.division === 'Fail';
              const variance = Number((s.firstTermGpa - s.seeGpa).toFixed(2));
              const hasAttRisk = s.attendancePct < 75.0;

              // Extract subject totals
              const nepaliTotal = (s.nepali.theory ?? 0) + (s.nepali.practical ?? 0);
              const englishTotal = (s.english.theory ?? 0) + (s.english.practical ?? 0);
              const socOrMathTotal = s.social.theory !== null 
                ? (s.social.theory ?? 0) + (s.social.practical ?? 0)
                : (s.math.theory ?? 0) + (s.math.practical ?? 0);
              const isSocial = s.social.theory !== null;
              const accountTotal = s.account.theory !== null ? (s.account.theory ?? 0) + (s.account.practical ?? 0) : null;
              const econTotal = s.economics.theory !== null ? (s.economics.theory ?? 0) + (s.economics.practical ?? 0) : null;
              const compTotal = (s.computer.theory ?? 0) + (s.computer.practical ?? 0);

              const isAccountFail = s.account.theory !== null && s.account.theory < 26.25;
              const isEconFail = s.economics.theory !== null && s.economics.theory < 26.25;
              const isCompFail = s.computer.theory !== null && s.computer.theory < 17.5;

              return (
                <tr
                  key={s.sn}
                  onClick={() => onSelectStudent(s)}
                  className={`cursor-pointer transition-colors ${
                    isNg
                      ? 'bg-rose-50/50 hover:bg-rose-100/70'
                      : 'hover:bg-indigo-50/40'
                  }`}
                  title="Click to view full student diagnostic profile"
                >
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-500 tabular-nums">
                    #{s.sn}
                  </td>
                  <td className="py-2.5 px-3 font-semibold text-slate-900 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md overflow-hidden bg-slate-200 shrink-0 border border-slate-300 shadow-2xs">
                        <img
                          src={s.imageUrl || getStudentAvatarUrl(s.name, s.sn)}
                          alt={s.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <span>{s.name}</span>
                      {isNg && (
                        <span className="text-[10px] px-1 py-0.2 rounded bg-rose-600 text-white font-mono font-bold">
                          NG
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono tabular-nums">
                    <span className={hasAttRisk ? 'text-amber-600 font-bold' : 'text-slate-700'}>
                      {s.attendancePct.toFixed(1)}%
                    </span>
                  </td>
                  <td className="py-2.5 px-2 text-right font-mono tabular-nums text-slate-700">
                    {nepaliTotal}
                  </td>
                  <td className="py-2.5 px-2 text-right font-mono tabular-nums text-slate-700">
                    {englishTotal}
                  </td>
                  <td className="py-2.5 px-2 text-right font-mono tabular-nums text-slate-700" title={isSocial ? 'Social Studies' : 'Mathematics'}>
                    <span>{socOrMathTotal}</span>
                    <span className="text-[9px] text-slate-400 block">{isSocial ? 'Soc' : 'Mth'}</span>
                  </td>
                  <td className={`py-2.5 px-2 text-right font-mono tabular-nums ${isAccountFail ? 'bg-rose-100 text-rose-800 font-bold' : 'text-slate-700'}`}>
                    {accountTotal !== null ? accountTotal : '—'}
                  </td>
                  <td className={`py-2.5 px-2 text-right font-mono tabular-nums ${isEconFail ? 'bg-rose-100 text-rose-800 font-bold' : 'text-slate-700'}`}>
                    {econTotal !== null ? econTotal : '—'}
                  </td>
                  <td className={`py-2.5 px-2 text-right font-mono tabular-nums bg-indigo-50/40 ${isCompFail ? 'bg-rose-100 text-rose-800 font-bold' : 'text-indigo-900 font-semibold'}`}>
                    {compTotal}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold tabular-nums text-slate-900">
                    {s.obtainedTotalMarks}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono tabular-nums text-slate-700">
                    {s.percentage.toFixed(1)}%
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold tabular-nums">
                    <span className={isNg ? 'text-rose-600' : 'text-slate-900'}>
                      {s.firstTermGpa.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono tabular-nums text-slate-600">
                    {s.seeGpa.toFixed(2)}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold tabular-nums">
                    <span className={variance > 0 ? 'text-emerald-600' : variance < 0 ? 'text-rose-600' : 'text-slate-500'}>
                      {variance > 0 ? `+${variance.toFixed(2)}` : variance.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-center">
                    <span
                      className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                        s.classroomEngagement === 'Highly Active'
                          ? 'bg-emerald-100 text-emerald-800'
                          : s.classroomEngagement === 'Attentive'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {s.classroomEngagement}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-600 max-w-xs truncate" title={s.strengthsAndWeaknesses}>
                    {s.strengthsAndWeaknesses}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
        <span>Showing {processedStudents.length} of {STUDENTS_DATA.length} records</span>
        <span>Click any row to open the complete academic diagnostic dashboard for that student</span>
      </div>
    </div>
  );
};
