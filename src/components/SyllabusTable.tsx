import React, { useState } from 'react';
import { Table, ChevronDown, ChevronRight, Clock, BookOpen, Layers, CheckCircle2, Search } from 'lucide-react';
import { CHAPTERS_DATA } from '../data/curriculumData.ts';

export const SyllabusTable: React.FC = () => {
  const [expandedChapterId, setExpandedChapterId] = useState<number | null>(1);
  const [searchKeyword, setSearchKeyword] = useState('');

  const toggleExpand = (id: number) => {
    setExpandedChapterId(expandedChapterId === id ? null : id);
  };

  const totalTheory = CHAPTERS_DATA.reduce((acc, c) => acc + c.theoryHours, 0);
  const totalPractice = CHAPTERS_DATA.reduce((acc, c) => acc + c.practiceHours, 0);
  const totalAssignment = CHAPTERS_DATA.reduce((acc, c) => acc + c.assignmentHours, 0);
  const totalLessons = CHAPTERS_DATA.reduce((acc, c) => acc + c.lessonCount, 0);

  const filteredChapters = CHAPTERS_DATA.filter((ch) => {
    const q = searchKeyword.toLowerCase();
    return (
      ch.title.toLowerCase().includes(q) ||
      ch.summary.toLowerCase().includes(q) ||
      ch.lessons.some((l) => l.title.toLowerCase().includes(q) || l.keyConcepts.some((k) => k.toLowerCase().includes(q)))
    );
  });

  return (
    <div className="space-y-6">
      {/* Overview stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Tổng số chương</div>
          <div className="text-2xl font-bold text-slate-900 mt-1">10 Chương</div>
          <div className="text-xs text-blue-600 mt-0.5">{totalLessons} bài học chuẩn hóa</div>
        </div>
        <div className="p-4 bg-white rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Lý thuyết (tiết)</div>
          <div className="text-2xl font-bold text-slate-900 mt-1">{totalTheory} tiết</div>
          <div className="text-xs text-slate-500 mt-0.5">Giảng giải bản chất & minh họa</div>
        </div>
        <div className="p-4 bg-white rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Thực hành Lab (tiết)</div>
          <div className="text-2xl font-bold text-slate-900 mt-1">{totalPractice} tiết</div>
          <div className="text-xs text-emerald-600 mt-0.5">Code trực tiếp tại phòng máy</div>
        </div>
        <div className="p-4 bg-white rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Bài tập / Tự học LMS</div>
          <div className="text-2xl font-bold text-slate-900 mt-1">{totalAssignment} tiết</div>
          <div className="text-xs text-purple-600 mt-0.5">VPL tự động chấm testcase</div>
        </div>
      </div>

      {/* Search and Instruction */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2 w-full sm:w-80 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3" />
          <input
            type="text"
            placeholder="Tìm kiếm chương, bài, từ khóa (mảng, hàm, if...)"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <p className="text-xs text-slate-500 text-right">
          Nhấp vào mỗi hàng để mở rộng chi tiết các bài học, hoạt động LMS và khái niệm cốt lõi.
        </p>
      </div>

      {/* Table according to exact format requested in master prompt */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">Phần D</span>
            <h2 className="text-lg font-bold text-slate-900">Đề Cương Chi Tiết Môn Học</h2>
          </div>
          <span className="text-xs text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
            Tổng cộng: 30 LT + 30 TH + 30 BT
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 text-xs uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold text-center w-12">#</th>
                <th className="py-3 px-3 font-semibold w-20">Chương</th>
                <th className="py-3 px-4 font-semibold w-56">Tên chương</th>
                <th className="py-3 px-4 font-semibold">Nội dung chính</th>
                <th className="py-3 px-3 font-semibold text-center w-20">Số bài</th>
                <th className="py-3 px-3 font-semibold text-center w-24">Lý thuyết</th>
                <th className="py-3 px-3 font-semibold text-center w-24">Thực hành</th>
                <th className="py-3 px-3 font-semibold text-center w-24">Bài tập</th>
                <th className="py-3 px-3 font-semibold text-center w-16">Chi tiết</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredChapters.map((ch) => {
                const isExpanded = expandedChapterId === ch.id;
                return (
                  <React.Fragment key={ch.id}>
                    <tr
                      onClick={() => toggleExpand(ch.id)}
                      className={`hover:bg-blue-50/50 cursor-pointer transition-colors ${
                        isExpanded ? 'bg-blue-50/30 font-medium' : ''
                      }`}
                    >
                      <td className="py-3.5 px-3 text-center text-xs text-slate-400">{ch.id}</td>
                      <td className="py-3.5 px-3 font-bold text-blue-700">
                        <span className="px-2 py-0.5 bg-blue-50 border border-blue-200 rounded text-xs">
                          {ch.code}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">{ch.title}</td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">{ch.summary}</td>
                      <td className="py-3.5 px-3 text-center font-bold text-slate-800">{ch.lessonCount}</td>
                      <td className="py-3.5 px-3 text-center text-slate-700">{ch.theoryHours} tiết</td>
                      <td className="py-3.5 px-3 text-center text-emerald-700 font-medium">{ch.practiceHours} tiết</td>
                      <td className="py-3.5 px-3 text-center text-purple-700">{ch.assignmentHours} tiết</td>
                      <td className="py-3.5 px-3 text-center">
                        <button
                          type="button"
                          className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
                          aria-label="Mở rộng chi tiết chương"
                        >
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-blue-600" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                    </tr>

                    {/* Expandable sub-lessons row */}
                    {isExpanded && (
                      <tr className="bg-slate-50/80">
                        <td colSpan={9} className="p-4 sm:p-6">
                          <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-4 shadow-inner">
                            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100 text-xs">
                              <span className="text-slate-500">
                                <strong>Điều kiện tiên quyết:</strong> {ch.prerequisites}
                              </span>
                              <span className="text-slate-500">
                                <strong>Chuẩn đầu ra phụ trách:</strong>{' '}
                                {ch.clos.map((c) => (
                                  <span key={c} className="ml-1 px-1.5 py-0.5 bg-slate-100 font-mono rounded text-slate-700">
                                    {c}
                                  </span>
                                ))}
                              </span>
                            </div>

                            <div className="space-y-3">
                              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Danh sách {ch.lessons.length} bài học chuẩn hóa thuộc {ch.code}:
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {ch.lessons.map((lesson) => (
                                  <div
                                    key={lesson.id}
                                    className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 transition-all text-xs space-y-2"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="font-bold text-blue-700">
                                        Bài {lesson.lessonNumber}: {lesson.title}
                                      </span>
                                      <span className="text-slate-400 flex items-center gap-1 font-mono">
                                        <Clock className="w-3 h-3" /> {lesson.durationMinutes} phút
                                      </span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                      {lesson.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1 pt-1">
                                      {lesson.keyConcepts.map((kw, i) => (
                                        <span
                                          key={i}
                                          className="px-2 py-0.5 bg-white border border-slate-200 text-slate-600 rounded text-[11px]"
                                        >
                                          {kw}
                                        </span>
                                      ))}
                                    </div>
                                    <div className="pt-1 text-[11px] text-indigo-700 font-medium">
                                      Hoạt động LMS đề xuất: {lesson.moodleActivity}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="bg-slate-100/80 font-bold text-slate-900 border-t-2 border-slate-300 text-xs">
                <td colSpan={4} className="py-3.5 px-4 text-right">
                  TỔNG CỘNG TOÀN KHÓA HỌC:
                </td>
                <td className="py-3.5 px-3 text-center">{totalLessons} bài</td>
                <td className="py-3.5 px-3 text-center">{totalTheory} tiết</td>
                <td className="py-3.5 px-3 text-center text-emerald-700">{totalPractice} tiết</td>
                <td className="py-3.5 px-3 text-center text-purple-700">{totalAssignment} tiết</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
