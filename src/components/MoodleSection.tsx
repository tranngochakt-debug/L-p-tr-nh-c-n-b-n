import React from 'react';
import { Layout, CheckCircle, Award, Terminal, FileCode, Layers, MessageSquare, HelpCircle, Sparkles } from 'lucide-react';
import { MOODLE_BLUEPRINT } from '../data/curriculumData.ts';

export const MoodleSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-orange-100 text-orange-700 rounded-lg">
            <Layout className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-orange-600 tracking-wider uppercase">Phần H</span>
            <h2 className="text-lg font-bold text-slate-900">Kiến Trúc Triển Khai Khóa Học Trên LMS / Moodle</h2>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed max-w-4xl">
          Đề xuất cấu trúc thiết kế học phần trên hệ thống quản lý học tập Moodle chuẩn quốc tế, tích hợp công nghệ chấm mã nguồn tự động <strong>VPL (Virtual Programming Lab)</strong> và các tương tác học liệu số <strong>H5P</strong>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-2 border-t border-slate-100 text-xs">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="text-slate-500 font-medium block">Định dạng khóa học (Format):</span>
            <strong className="text-slate-900 font-semibold">{MOODLE_BLUEPRINT.courseFormat}</strong>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="text-slate-500 font-medium block">Theo dõi tiến độ:</span>
            <strong className="text-slate-900 font-semibold">{MOODLE_BLUEPRINT.completionTracking}</strong>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="text-slate-500 font-medium block">Game hóa học tập (Gamification):</span>
            <strong className="text-slate-900 font-semibold">10 Huy hiệu chương (Badges)</strong>
          </div>
        </div>
      </div>

      {/* Grid of Moodle Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MOODLE_BLUEPRINT.components.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-orange-300 transition-all space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 text-xs font-bold bg-orange-50 text-orange-800 border border-orange-200 rounded-md">
                {item.type}
              </span>
              <span className="text-xs text-slate-400">Thành phần #{idx + 1}</span>
            </div>
            <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Automated grading flow */}
      <div className="bg-slate-900 text-white rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="font-bold text-base text-white flex items-center gap-2">
          <Terminal className="w-5 h-5 text-orange-400" />
          <span>Quy Trình Tự Động Hóa Với VPL & Testcases Tự Chấm</span>
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Mỗi bài thực hành trên Moodle đều được gắn liền với một hoạt động VPL. Khi sinh viên nhấn "Kiểm tra", hệ thống sẽ thực hiện theo 4 pha khép kín:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2 text-xs">
          <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
            <span className="text-blue-400 font-bold block mb-1">Pha 1: Biên dịch</span>
            <span className="text-slate-300">Trình biên dịch GCC biên dịch với cờ -Wall. Báo lỗi cú pháp nếu có.</span>
          </div>
          <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
            <span className="text-emerald-400 font-bold block mb-1">Pha 2: Test công khai</span>
            <span className="text-slate-300">Chạy 2-3 ca test mẫu để sinh viên so sánh trực tiếp kết quả với đề bài.</span>
          </div>
          <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
            <span className="text-amber-400 font-bold block mb-1">Pha 3: Test ẩn (Biên)</span>
            <span className="text-slate-300">Chạy 5-7 ca test ẩn kiểm tra số âm, số 0, giá trị cực đại, xâu rỗng.</span>
          </div>
          <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
            <span className="text-purple-400 font-bold block mb-1">Pha 4: Cấp điểm & Badge</span>
            <span className="text-slate-300">Tính điểm theo tỷ lệ phần trăm testcase pass và mở khóa bài học tiếp theo.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
