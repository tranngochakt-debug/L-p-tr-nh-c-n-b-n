import React from 'react';
import { ArrowRight, CheckCircle2, Flag, Award, Compass } from 'lucide-react';
import { LEARNING_PATHWAY } from '../data/curriculumData.ts';

export const RoadmapSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">Phần F</span>
            <h2 className="text-lg font-bold text-slate-900">Lộ Trình Học Tập Chuẩn Hóa 10 Bước (Learning Pathway)</h2>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed max-w-4xl">
          Lộ trình được thiết kế tuần tự theo nguyên tắc <strong>Incremental Learning</strong> (Học tăng dần độ khó), đảm bảo sinh viên năm nhất nắm chắc từng mắt xích trước khi chuyển sang kiến trúc phức tạp hơn. Trình tự cốt lõi:
        </p>

        {/* Quick summary chain */}
        <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-xl overflow-x-auto">
          <div className="flex items-center space-x-2 text-xs font-semibold whitespace-nowrap">
            <span className="px-2.5 py-1 bg-blue-600 text-white rounded-md">1. Nhập môn</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="px-2.5 py-1 bg-blue-100 text-blue-900 rounded-md">2. Cú pháp cơ bản</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="px-2.5 py-1 bg-blue-100 text-blue-900 rounded-md">3. Điều kiện</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="px-2.5 py-1 bg-blue-100 text-blue-900 rounded-md">4. Vòng lặp</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="px-2.5 py-1 bg-indigo-100 text-indigo-900 rounded-md">5. Chuỗi</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="px-2.5 py-1 bg-indigo-100 text-indigo-900 rounded-md">6. Mảng 1D & 2D</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="px-2.5 py-1 bg-purple-100 text-purple-900 rounded-md">7. Hàm</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="px-2.5 py-1 bg-amber-100 text-amber-900 rounded-md">8. Phân tích & Debug</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="px-2.5 py-1 bg-emerald-600 text-white rounded-md">9. Bài tập tổng hợp</span>
          </div>
        </div>
      </div>

      {/* Visual Pathway Cards */}
      <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-6">
        {LEARNING_PATHWAY.map((step, idx) => {
          const isExamCheckpoint = step.step === 4 || step.step === 8 || step.step === 10;

          return (
            <div key={step.step} className="relative group">
              {/* Dot marker */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center font-bold text-xs text-blue-700 shadow-xs">
                {step.step}
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-400 transition-all shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs font-mono font-bold bg-slate-100 text-slate-700 rounded">
                      {step.code}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base">
                      {step.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                      {step.duration}
                    </span>
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                      {step.tag}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 mt-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Cột mốc năng lực (Milestone):</strong> {step.milestone}
                  </div>
                </div>

                {isExamCheckpoint && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-800">
                    <Flag className="w-3.5 h-3.5 text-amber-600" />
                    <span>
                      {step.step === 4 && 'Cột mốc 1: Đánh giá tư duy điều khiển & vòng lặp qua Quiz tổng hợp'}
                      {step.step === 8 && 'Cột mốc 2: Kỳ thi Giữa kỳ thực hành máy (Kiểm tra mảng, chuỗi & hàm)'}
                      {step.step === 10 && 'Cột mốc 3: Nộp đồ án Mini-project Console + Thi kết thúc học phần'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
