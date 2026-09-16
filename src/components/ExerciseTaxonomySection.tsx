import React from 'react';
import { Target, CheckCircle2, Code, FileText, Layers, AlertCircle } from 'lucide-react';
import { EXERCISE_TAXONOMY } from '../data/curriculumData.ts';

export const ExerciseTaxonomySection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-purple-600 tracking-wider uppercase">Phần I</span>
            <h2 className="text-lg font-bold text-slate-900">Hệ Thống Phân Loại Bài Tập Theo 4 Mức Độ Nhận Thức</h2>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed max-w-4xl">
          Đảm bảo nguyên tắc sư phạm <strong>Incremental Learning</strong>: sinh viên năm nhất không bị "ngợp" hay sốc tâm lý. Tỷ lệ cấu trúc bài tập được phân bổ khoa học: <strong>30% Nhận biết – 30% Thông hiểu – 25% Vận dụng – 15% Vận dụng cao</strong>.
        </p>
      </div>

      {/* 4 Levels Cards */}
      <div className="space-y-5">
        {EXERCISE_TAXONOMY.map((lvl, index) => {
          const colorStyles = [
            { badge: 'bg-blue-100 text-blue-800 border-blue-200', border: 'border-blue-200', text: 'text-blue-700' },
            { badge: 'bg-emerald-100 text-emerald-800 border-emerald-200', border: 'border-emerald-200', text: 'text-emerald-700' },
            { badge: 'bg-amber-100 text-amber-800 border-amber-200', border: 'border-amber-200', text: 'text-amber-700' },
            { badge: 'bg-purple-100 text-purple-800 border-purple-200', border: 'border-purple-200', text: 'text-purple-700' },
          ][index];

          return (
            <div
              key={lvl.level}
              className={`bg-white rounded-xl border ${colorStyles.border} p-6 shadow-sm space-y-4`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-md border ${colorStyles.badge}`}>
                    {lvl.level}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">{lvl.name}</h3>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-semibold text-slate-700">Tỷ trọng trong đề thi: <strong>{lvl.percentage}%</strong></span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-600 font-mono">{lvl.bloomTarget}</span>
                </div>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {lvl.description}
              </p>

              {/* Characteristics */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Đặc điểm nhận dạng:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-600">
                  {lvl.characteristics.map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5 p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Example problem */}
              <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400 border-b border-slate-800 pb-1.5">
                  <Code className="w-3.5 h-3.5 text-blue-400" />
                  <span className="font-bold text-slate-200">Ví dụ bài tập điển hình: {lvl.exampleProblem.title}</span>
                </div>
                <div className="whitespace-pre-line text-slate-300 leading-relaxed font-sans">
                  {lvl.exampleProblem.description}
                </div>
                {lvl.exampleProblem.sampleInput && (
                  <div className="pt-1 text-blue-300 font-mono">
                    <strong>Input mẫu:</strong> {lvl.exampleProblem.sampleInput}
                  </div>
                )}
                {lvl.exampleProblem.sampleOutput && (
                  <div className="text-emerald-400 font-mono">
                    <strong>Output mẫu:</strong> {lvl.exampleProblem.sampleOutput}
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
