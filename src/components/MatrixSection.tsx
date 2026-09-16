import React, { useState } from 'react';
import { Grid, Info, CheckCircle, HelpCircle } from 'lucide-react';
import { LEARNING_OUTCOMES, CHAPTERS_DATA, CLO_MATRIX } from '../data/curriculumData.ts';
import { MatrixCell } from '../types.ts';

export const MatrixSection: React.FC = () => {
  const [selectedCell, setSelectedCell] = useState<MatrixCell | null>(null);

  const getCell = (cloId: string, chapterId: number): MatrixCell | undefined => {
    return CLO_MATRIX.find((m) => m.cloId === cloId && m.chapterId === chapterId);
  };

  const getBadge = (level: string) => {
    switch (level) {
      case 'I':
        return (
          <span className="w-7 h-7 flex items-center justify-center font-bold text-xs bg-amber-100 text-amber-800 border border-amber-300 rounded-md mx-auto">
            I
          </span>
        );
      case 'T':
        return (
          <span className="w-7 h-7 flex items-center justify-center font-bold text-xs bg-blue-100 text-blue-800 border border-blue-300 rounded-md mx-auto">
            T
          </span>
        );
      case 'U':
        return (
          <span className="w-7 h-7 flex items-center justify-center font-bold text-xs bg-emerald-100 text-emerald-800 border border-emerald-400 rounded-md mx-auto shadow-xs">
            U
          </span>
        );
      default:
        return <span className="text-slate-300 text-xs text-center block">-</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Legend and explanation */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
          <Info className="w-4 h-4 text-blue-600" />
          <span>Quy ước Thang đo Năng lực ITU (CDIO / OBE Framework):</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg flex items-start gap-2.5">
            <span className="w-6 h-6 shrink-0 flex items-center justify-center font-bold bg-amber-200 text-amber-900 rounded">
              I
            </span>
            <div>
              <strong className="text-amber-950 font-semibold block">Introduce (Giới thiệu):</strong>
              <span className="text-slate-600">Làm quen khái niệm nền tảng, nhận biết cú pháp và bản chất hoạt động.</span>
            </div>
          </div>
          <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg flex items-start gap-2.5">
            <span className="w-6 h-6 shrink-0 flex items-center justify-center font-bold bg-blue-200 text-blue-900 rounded">
              T
            </span>
            <div>
              <strong className="text-blue-950 font-semibold block">Teach / Practice (Giảng dạy & Rèn luyện):</strong>
              <span className="text-slate-600">Thực hành viết code, phân tích thuật toán, làm bài tập phòng máy.</span>
            </div>
          </div>
          <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg flex items-start gap-2.5">
            <span className="w-6 h-6 shrink-0 flex items-center justify-center font-bold bg-emerald-200 text-emerald-900 rounded">
              U
            </span>
            <div>
              <strong className="text-emerald-950 font-semibold block">Utilize / Assess (Vận dụng & Đánh giá):</strong>
              <span className="text-slate-600">Đạt năng lực độc lập, vận dụng tổng hợp để giải quyết vấn đề và đánh giá qua kỳ thi.</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Matrix Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">Phần E</span>
            <h2 className="text-lg font-bold text-slate-900">Ma Trận Chuẩn Đầu Ra (CLOs) – Nội Dung Các Chương</h2>
          </div>
          <span className="text-xs text-slate-500">8 Chuẩn đầu ra × 10 Chương học</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                <th className="py-3 px-3 font-bold w-16 text-center">CĐR</th>
                <th className="py-3 px-3 font-semibold min-w-[200px]">Mô tả tóm tắt chuẩn đầu ra</th>
                {CHAPTERS_DATA.map((ch) => (
                  <th key={ch.id} className="py-3 px-2 font-bold text-center w-14" title={ch.title}>
                    <div className="text-[11px] text-blue-700">{ch.code}</div>
                    <div className="text-[10px] text-slate-500 font-normal truncate max-w-[60px] mx-auto">
                      C.{ch.id}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {LEARNING_OUTCOMES.map((clo) => (
                <tr key={clo.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-3 text-center font-bold text-slate-900 bg-slate-50/50">
                    <span className="px-1.5 py-0.5 bg-slate-200 rounded font-mono">
                      {clo.id}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-700">
                    <div className="font-semibold text-slate-900">{clo.category}</div>
                    <div className="text-slate-600 leading-snug line-clamp-2">{clo.description}</div>
                  </td>
                  {CHAPTERS_DATA.map((ch) => {
                    const cell = getCell(clo.id, ch.id);
                    const isSelected = selectedCell?.cloId === clo.id && selectedCell?.chapterId === ch.id;
                    return (
                      <td
                        key={ch.id}
                        onClick={() => cell && setSelectedCell(cell)}
                        className={`py-3 px-1.5 text-center cursor-pointer transition-colors ${
                          cell ? 'hover:bg-blue-100/50' : ''
                        } ${isSelected ? 'bg-blue-200/50 ring-2 ring-blue-500 inset-0' : ''}`}
                      >
                        {cell ? getBadge(cell.level) : getBadge('')}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selected cell note inspector */}
        {selectedCell && (
          <div className="p-4 bg-blue-50/60 border-t border-blue-200 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-blue-900">
                {selectedCell.cloId} × CH0{selectedCell.chapterId} [Mức {selectedCell.level}]:
              </span>
              <span className="text-slate-700">{selectedCell.note}</span>
            </div>
            <button
              onClick={() => setSelectedCell(null)}
              className="text-blue-700 hover:text-blue-900 font-medium underline ml-4"
            >
              Đóng
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
