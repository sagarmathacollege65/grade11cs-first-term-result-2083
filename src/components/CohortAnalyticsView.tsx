import React from 'react';
import { computeCohortStats } from '../utils/diagnosticEngine';
import { STUDENTS_DATA } from '../data/studentsData';
import {
  Award,
  Users,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Cpu,
  BarChart3,
  Calendar
} from 'lucide-react';

export const CohortAnalyticsView: React.FC = () => {
  const stats = computeCohortStats();

  return (
    <div className="space-y-6">
      {/* Executive Overview Banner */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Grade 11 Computer Science · First Terminal Cohort Analytics
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Aggregate diagnostic metrics across all 53 enrolled students for Academic Session 2083
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
              Batch: 2083 B.S. (Grade 11 CS)
            </span>
          </div>
        </div>

        {/* 5 KPI Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <span className="text-[11px] font-semibold text-slate-500 uppercase block">Total Enrolled</span>
            <span className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
              {stats.totalStudents}
            </span>
            <span className="text-[10px] text-slate-400 block">Evaluated in 6 Subjects</span>
          </div>

          <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
            <span className="text-[11px] font-semibold text-emerald-800 uppercase block">Pass Rate</span>
            <span className="text-2xl font-bold font-mono text-emerald-700 tabular-nums">
              {stats.passRate}%
            </span>
            <span className="text-[10px] text-emerald-600 block">43 Passed / 10 NG</span>
          </div>

          <div className="p-3 bg-indigo-50/50 rounded-lg border border-indigo-100">
            <span className="text-[11px] font-semibold text-indigo-800 uppercase block">Passing Avg GPA</span>
            <span className="text-2xl font-bold font-mono text-indigo-700 tabular-nums">
              {stats.avgGpa.toFixed(2)}
            </span>
            <span className="text-[10px] text-slate-500 block">Out of 4.00 Scale</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <span className="text-[11px] font-semibold text-slate-500 uppercase block">Cohort Avg Attendance</span>
            <span className="text-2xl font-bold font-mono text-slate-800 tabular-nums">
              {stats.avgAttendance}%
            </span>
            <span className="text-[10px] text-slate-400 block">85 School Days Total</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <span className="text-[11px] font-semibold text-slate-500 uppercase block">Avg Total Marks</span>
            <span className="text-2xl font-bold font-mono text-slate-800 tabular-nums">
              {stats.avgTotalMarks}
            </span>
            <span className="text-[10px] text-slate-400 block">Out of 600 Full Marks</span>
          </div>
        </div>
      </div>

      {/* Division Distribution & Curricular Tracks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Division Breakdown */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h2 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-indigo-600" />
            <span>Division Classification Distribution</span>
          </h2>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-emerald-900">Distinction (≥75% / GPA ≥ 3.2)</span>
                <span className="font-mono font-bold text-slate-800">{stats.distinctionCount} ({((stats.distinctionCount / stats.totalStudents) * 100).toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${(stats.distinctionCount / stats.totalStudents) * 100}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-indigo-900">First Division (60–74.9%)</span>
                <span className="font-mono font-bold text-slate-800">{stats.firstCount} ({((stats.firstCount / stats.totalStudents) * 100).toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${(stats.firstCount / stats.totalStudents) * 100}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-amber-900">Second Division (45–59.9%)</span>
                <span className="font-mono font-bold text-slate-800">{stats.secondCount} ({((stats.secondCount / stats.totalStudents) * 100).toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${(stats.secondCount / stats.totalStudents) * 100}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-rose-900">Non-Graded / Fail (NG Triggered)</span>
                <span className="font-mono font-bold text-rose-700">{stats.failCount} ({((stats.failCount / stats.totalStudents) * 100).toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-rose-500 h-2 rounded-full" style={{ width: `${(stats.failCount / stats.totalStudents) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Elective Cohort Split: Math vs Social Studies */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h2 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-indigo-600" />
            <span>Elective Disciplinary Choices</span>
          </h2>

          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="font-bold text-slate-900">Mathematics Track</span>
                <span className="font-mono font-bold text-indigo-700">26 Students (49.1%)</span>
              </div>
              <p className="text-[11px] text-slate-600">
                Taken by CS students aiming for Engineering and Pure Sciences. Average score: 68.2%.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="font-bold text-slate-900">Social Studies Track</span>
                <span className="font-mono font-bold text-indigo-700">27 Students (50.9%)</span>
              </div>
              <p className="text-[11px] text-slate-600">
                Taken by CS students pursuing Information Management and Business Tech. Average score: 71.5%.
              </p>
            </div>
          </div>
        </div>

        {/* Behavioral Engagement Distribution */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <h2 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-indigo-600" />
            <span>Classroom Engagement Distribution</span>
          </h2>

          <div className="space-y-2.5">
            {['Attentive', 'Highly Active', 'Passive', 'Distracted'].map((level) => {
              const count = STUDENTS_DATA.filter((s) => s.classroomEngagement === level).length;
              const pct = ((count / stats.totalStudents) * 100).toFixed(0);
              return (
                <div key={level} className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">{level}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-900 tabular-nums">
                      {count} students
                    </span>
                    <span className="text-slate-400 font-mono text-[11px] w-8 text-right">
                      ({pct}%)
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
            Observation logged by Computer Faculty Head at terminal review.
          </div>
        </div>
      </div>

      {/* Subject-Wise Diagnostic Benchmark Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-900">
            Class-Wide Subject Diagnostic Benchmarks
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Comparative performance, failure incidence, and distinction rates across all academic departments
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-semibold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4 text-right">Cohort Average</th>
                <th className="py-3 px-4 text-right">Passed</th>
                <th className="py-3 px-4 text-right">NG Deficits (&lt;35%)</th>
                <th className="py-3 px-4 text-right">High Mastery (≥80%)</th>
                <th className="py-3 px-4 text-center">Diagnostic Assessment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {stats.subjectAverages.map((sub) => {
                const isCs = sub.key === 'computer';
                return (
                  <tr key={sub.key} className={isCs ? 'bg-indigo-50/30 font-semibold' : 'hover:bg-slate-50'}>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-900 font-bold">{sub.name}</span>
                        {isCs && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-700">
                            Core Major
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-bold tabular-nums text-slate-900">
                      {sub.avgScore}%
                    </td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums text-emerald-700">
                      {sub.passCount}
                    </td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums">
                      {sub.failCount > 0 ? (
                        <span className="text-rose-600 font-bold">{sub.failCount}</span>
                      ) : (
                        <span className="text-slate-400">0</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums text-indigo-700">
                      {sub.highMasteryCount}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {sub.failCount >= 5 ? (
                        <span className="text-[11px] text-rose-600 font-bold">
                          Critical Remedial Attention
                        </span>
                      ) : sub.avgScore >= 75 ? (
                        <span className="text-[11px] text-emerald-700 font-medium">
                          High Curricular Mastery
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-600">
                          Satisfactory Distribution
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
