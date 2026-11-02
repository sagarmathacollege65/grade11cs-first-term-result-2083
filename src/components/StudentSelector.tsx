import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';
import { StudentRecord } from '../data/studentsData';
import { getStudentAvatarUrl } from '../utils/studentAvatar';

interface StudentSelectorProps {
  students: StudentRecord[];
  selectedStudent: StudentRecord;
  onSelectStudent: (student: StudentRecord) => void;
}

export const StudentSelector: React.FC<StudentSelectorProps> = ({
  students,
  selectedStudent,
  onSelectStudent,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [divisionFilter, setDivisionFilter] = useState<'ALL' | 'DISTINCTION' | 'First' | 'Second' | 'Fail'>('ALL');

  // Filter students based on search and division filter
  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.sn.toString().includes(searchQuery.trim());
      const matchesDivision =
        divisionFilter === 'ALL' ? true : s.division === divisionFilter;
      return matchesSearch && matchesDivision;
    });
  }, [students, searchQuery, divisionFilter]);

  const currentIndex = students.findIndex((s) => s.sn === selectedStudent.sn);
  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectStudent(students[currentIndex - 1]);
    }
  };
  const handleNext = () => {
    if (currentIndex < students.length - 1) {
      onSelectStudent(students[currentIndex + 1]);
    }
  };

  const selectedAvatar = selectedStudent.imageUrl || getStudentAvatarUrl(selectedStudent.name, selectedStudent.sn);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs mb-6 no-print">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Dynamic Selector Dropdown (Driven strictly by Col C: Student Name) */}
        <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-slate-300 bg-slate-100 shrink-0 shadow-xs">
              <img
                src={selectedAvatar}
                alt={selectedStudent.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <label htmlFor="student-select" className="text-xs font-semibold text-slate-700 whitespace-nowrap">
              Student:
            </label>
          </div>
          <div className="relative flex-1">
            <select
              id="student-select"
              value={selectedStudent.sn}
              onChange={(e) => {
                const found = students.find((s) => s.sn === parseInt(e.target.value));
                if (found) onSelectStudent(found);
              }}
              className="w-full appearance-none bg-slate-50 border border-slate-300 hover:border-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-900 transition-colors pr-10 cursor-pointer"
            >
              {students.map((student) => (
                <option key={student.sn} value={student.sn}>
                  #{student.sn} — {student.name} ({student.division} · {student.firstTermGpa > 0 ? `GPA ${student.firstTermGpa.toFixed(2)}` : 'NG / Fail'})
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>

          {/* Quick Prev / Next Navigator */}
          <div className="flex items-center gap-1 shrink-0 self-end sm:self-auto">
            <button
              onClick={handlePrev}
              disabled={currentIndex <= 0}
              className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Previous Student"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-500 px-2 tabular-nums">
              {currentIndex + 1} / {students.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIndex >= students.length - 1}
              className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Next Student"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Search and Quick Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search student or roll #..."
              className="w-full sm:w-48 pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600"
            />
          </div>

          {/* Segmented Filter Buttons (Compliant interactive controls with active/inactive states) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto">
            <button
              onClick={() => setDivisionFilter('ALL')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                divisionFilter === 'ALL'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All (53)
            </button>
            <button
              onClick={() => setDivisionFilter('DISTINCTION')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                divisionFilter === 'DISTINCTION'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Distinction (18)
            </button>
            <button
              onClick={() => setDivisionFilter('First')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                divisionFilter === 'First'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              First (21)
            </button>
            <button
              onClick={() => setDivisionFilter('Fail')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                divisionFilter === 'Fail'
                  ? 'bg-white text-rose-700 shadow-xs font-semibold'
                  : 'text-rose-600 hover:text-rose-900'
              }`}
            >
              NG / Fail (10)
            </button>
          </div>
        </div>
      </div>

      {/* Quick jump suggestions if searching */}
      {searchQuery && (
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-500">Matching results ({filteredStudents.length}):</span>
          {filteredStudents.slice(0, 6).map((student) => (
            <button
              key={student.sn}
              onClick={() => {
                onSelectStudent(student);
                setSearchQuery('');
              }}
              className="text-xs px-2 py-0.5 rounded bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 transition-colors cursor-pointer"
            >
              #{student.sn} {student.name}
            </button>
          ))}
          {filteredStudents.length === 0 && (
            <span className="text-xs text-slate-400 italic">No student found matching "{searchQuery}"</span>
          )}
        </div>
      )}
    </div>
  );
};
