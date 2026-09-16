import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, CheckCircle, MonitorPlay, Users } from 'lucide-react';
import { STUDY_SCHEDULE_15WEEKS } from '../data/curriculumData.ts';

export const ScheduleSection: React.FC = () => {
  const [modelType, setModelType] = useState<'traditional' | 'blended' | 'selfPaced'>('traditional');

  return (
    <div className="space-y-6">
      {/* Header and Model selector */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">Phần J</span>
            <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded font-medium">Lộ trình triển khai</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 mt-1">Đề Xuất Tiến Độ Học Tập Cho Sinh Viên Năm Nhất</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Linh hoạt áp dụng cho 3 phương thức đào tạo: Chính quy tập trung, Kết hợp Blended Learning hoặc Tự học 100%
          </p>
        </div>

        {/* Model Tabs */}
        <div className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setModelType('traditional')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              modelType === 'traditional' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            1. Chính quy 15 Tuần
          </button>
          <button
            onClick={() => setModelType('blended')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              modelType === 'blended' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            2. Blended Learning (60/40)
          </button>
          <button
            onClick={() => setModelType('selfPaced')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              modelType === 'selfPaced' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            3. Tự học hoàn toàn (Self-Paced)
          </button>
        </div>
      </div>

      {/* Mode explanations */}
      {modelType === 'blended' && (
        <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl text-xs sm:text-sm text-indigo-950 flex items-start gap-3">
          <Users className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-indigo-950">Mô hình Đào tạo Kết hợp (Blended Learning):</strong>
            <p className="mt-1 text-slate-700 leading-relaxed">
              Sinh viên xem trước bài giảng số, làm Quiz tự đánh giá và gõ code theo ví dụ trên Moodle tại nhà (40% thời lượng). Khi đến lớp trực tiếp (60% thời lượng), giảng viên không đọc chép lại lý thuyết mà dành 100% thời gian để: giải đáp thắc mắc (Q&A), hướng dẫn gỡ lỗi trực tiếp tại phòng máy, nhận xét bài làm và tổ chức thi đua giải thuật (Coding Challenge).
            </p>
          </div>
        </div>
      )}

      {modelType === 'selfPaced' && (
        <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-950 flex items-start gap-3">
          <MonitorPlay className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-emerald-950">Mô hình Tự học Hoàn toàn trên LMS Moodle (10-12 Tuần):</strong>
            <p className="mt-1 text-slate-700 leading-relaxed">
              Hệ thống áp dụng cơ chế <em>Adaptive Conditional Release</em>: Sinh viên bắt buộc phải đạt điểm Quiz &ge; 80% và hoàn thành nộp bài thực hành VPL pass 100% testcases của bài hiện tại thì bài học tiếp theo mới được mở khóa. Có diễn đàn Q&A trợ giảng phản hồi trong 24 giờ.
            </p>
          </div>
        </div>
      )}

      {/* 15 Weeks Schedule Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-sm">
            Kế Hoạch Tiến Độ Từng Tuần (15 Tuần × 4 Tiết Trực Tiếp + 4-6 Tiết Tự Học)
          </h3>
          <span className="text-xs text-slate-500">Mã môn: INT1001</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                <th className="py-3 px-3 font-semibold text-center w-14">Tuần</th>
                <th className="py-3 px-3 font-semibold w-24">Chương</th>
                <th className="py-3 px-4 font-semibold">Chủ đề & Nội dung trọng tâm</th>
                <th className="py-3 px-3 font-semibold text-center w-16">LT (t)</th>
                <th className="py-3 px-3 font-semibold text-center w-16">TH (t)</th>
                <th className="py-3 px-3 font-semibold text-center w-16">Tự học</th>
                <th className="py-3 px-4 font-semibold">Sản phẩm đầu ra (Deliverables)</th>
                <th className="py-3 px-4 font-semibold">Nhiệm vụ trên Moodle / VPL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {STUDY_SCHEDULE_15WEEKS.map((w) => {
                const isMidterm = w.week === 8;
                const isFinal = w.week === 15;

                return (
                  <tr
                    key={w.week}
                    className={`hover:bg-slate-50/70 transition-colors ${
                      isMidterm
                        ? 'bg-amber-50/60 font-medium'
                        : isFinal
                        ? 'bg-emerald-50/60 font-medium'
                        : ''
                    }`}
                  >
                    <td className="py-3.5 px-3 text-center font-bold text-slate-900">
                      T{w.week}
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="px-1.5 py-0.5 bg-slate-100 rounded text-[11px] font-mono font-medium text-slate-700">
                        {w.chapters}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-800">
                      {w.topics}
                    </td>
                    <td className="py-3.5 px-3 text-center text-slate-600">{w.theoryHours}</td>
                    <td className="py-3.5 px-3 text-center text-emerald-700 font-semibold">{w.labHours}</td>
                    <td className="py-3.5 px-3 text-center text-purple-700">{w.selfStudyHours}</td>
                    <td className="py-3.5 px-4 text-slate-700">{w.deliverables}</td>
                    <td className="py-3.5 px-4 text-blue-700 text-[11px]">{w.moodleTasks}</td>
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
