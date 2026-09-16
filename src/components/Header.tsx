import React from 'react';
import { BookOpen, GraduationCap, CheckCircle2, Download, Layers } from 'lucide-react';
import { COURSE_INFO } from '../data/curriculumData.ts';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onExportMarkdown: () => void;
  onExportAllMarkdown?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onExportMarkdown,
  onExportAllMarkdown
}) => {
  const tabs = [
    { id: 'chapter10', label: '⭐ CHƯƠNG 10: Đồ Án & Tổng Kết (2 bài)' },
    { id: 'chapter9', label: 'CHƯƠNG 9: Phân Tích & Debug (2 bài)' },
    { id: 'chapter8', label: 'CHƯƠNG 8: Kỹ Thuật Hàm (Functions) (4 bài)' },
    { id: 'chapter7', label: 'CHƯƠNG 7: Mảng 2 Chiều (Ma Trận) (3 bài)' },
    { id: 'chapter6', label: 'CHƯƠNG 6: Mảng 1 Chiều (4 bài)' },
    { id: 'chapter5', label: 'CHƯƠNG 5: Chuỗi std::string (3 bài)' },
    { id: 'chapter4', label: 'CHƯƠNG 4: Vòng lặp for/while (4 bài)' },
    { id: 'chapter3', label: 'CHƯƠNG 3: Rẽ nhánh if/switch (3 bài)' },
    { id: 'chapter2', label: 'CHƯƠNG 2: Cơ sở C++ (4 bài)' },
    { id: 'chapter1', label: 'CHƯƠNG 1: Nhập môn C++ (3 bài)' },
    { id: 'overview', label: 'A-B-C. Tổng quan & CĐR' },
    { id: 'syllabus', label: 'D. Đề cương 10 Chương' },
    { id: 'matrix', label: 'E. Ma trận CĐR' },
    { id: 'roadmap', label: 'F. Lộ trình học tập' },
    { id: 'template', label: 'G. Mẫu bài học chuẩn' },
    { id: 'moodle', label: 'H. Khóa học Moodle' },
    { id: 'exercises', label: 'I. Hệ thống bài tập' },
    { id: 'schedule', label: 'J. Tiến độ 15 Tuần' },
    { id: 'quizbank', label: '🔥 Ngân Hàng Trắc Nghiệm Moodle (120 câu)' },
    { id: 'approval', label: 'Bảng kiểm Phê duyệt' },
  ];

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start space-x-3">
            <div className="p-2.5 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30 shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-emerald-900/90 text-emerald-300 border border-emerald-700/50 rounded-full">
                  Giai đoạn 2: Chi tiết Toàn bộ 10 Chương (CH01 - CH10)
                </span>
                <span className="px-2.5 py-0.5 text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-700/40 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> 10/10 Chương (32 Bài học) Hoàn thành 100%
                </span>
                <span className="text-xs text-slate-400">
                  Mã học phần: <strong className="text-slate-200">{COURSE_INFO.courseCode}</strong>
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                Học Liệu Tự Học: Lập Trình Căn Bản C++
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Dành cho sinh viên năm nhất ngành Công nghệ Thông tin • Tiếp cận Learning by Doing & Problem Solving
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {onExportAllMarkdown && (
              <button
                onClick={onExportAllMarkdown}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium bg-emerald-700/80 hover:bg-emerald-600 text-white border border-emerald-500/50 rounded-lg transition-colors cursor-pointer shadow-sm"
                title="Tải xuống toàn bộ học liệu 10 Chương (32 bài học chi tiết)"
              >
                <Download className="w-4 h-4 text-emerald-200" />
                <span>Xuất 10 Chương (.md)</span>
              </button>
            )}
            <button
              onClick={onExportMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Xuất văn bản khung đề cương A-J"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Xuất Đề cương</span>
            </button>
            <button
              onClick={() => setActiveTab('approval')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Nghiệm Thu Toàn Khóa</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="mt-4 pt-2 border-t border-slate-800 flex overflow-x-auto space-x-1 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
