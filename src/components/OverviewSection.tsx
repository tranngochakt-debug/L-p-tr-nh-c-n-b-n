import React from 'react';
import { BookOpen, Target, Award, CheckCircle, Lightbulb, Users, Clock, ShieldCheck } from 'lucide-react';
import { COURSE_INFO, COURSE_DESCRIPTION, COURSE_OBJECTIVES, LEARNING_OUTCOMES } from '../data/curriculumData.ts';

export const OverviewSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* SECTION A */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
          <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">Phần A</span>
            <h2 className="text-lg font-bold text-slate-900">Mô Tả Tổng Quan Học Phần</h2>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-slate-700 leading-relaxed text-base">
            {COURSE_DESCRIPTION}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm mb-1">
                <Clock className="w-4 h-4" /> Số tín chỉ & Thời lượng
              </div>
              <div className="text-slate-900 font-medium text-sm">{COURSE_INFO.credits}</div>
              <div className="text-slate-500 text-xs mt-1">{COURSE_INFO.totalHours}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-indigo-700 font-semibold text-sm mb-1">
                <Users className="w-4 h-4" /> Đối tượng sinh viên
              </div>
              <div className="text-slate-900 font-medium text-sm">Sinh viên năm thứ nhất CNTT</div>
              <div className="text-slate-500 text-xs mt-1">Được giải thích từ bản chất máy tính, không giả định đã biết code</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm mb-1">
                <Lightbulb className="w-4 h-4" /> Triết lý sư phạm
              </div>
              <div className="text-slate-900 font-medium text-sm">Learning by Doing</div>
              <div className="text-slate-500 text-xs mt-1">Lý thuyết tối giản → Ví dụ chạy được → Thực hành ngay → Bẻ khóa lỗi</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-sm flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-amber-950">Nguyên tắc tiếp cận cho người mới:</strong> Không giới thiệu quá sớm các khái niệm phức tạp (con trỏ thô, template, STL nâng cao, class/OOP hay con trỏ thông minh). Tập trung thuần thục tư duy giải thuật, cấu trúc điều khiển, mảng, chuỗi và hàm.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
          <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">Phần B</span>
            <h2 className="text-lg font-bold text-slate-900">Mục Tiêu Học Phần (General Objectives - GOs)</h2>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COURSE_OBJECTIVES.map((obj) => (
              <div key={obj.id} className="p-5 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 text-xs font-bold bg-indigo-100 text-indigo-800 rounded-md">
                    {obj.id}
                  </span>
                  <h3 className="font-semibold text-slate-900 text-sm">{obj.title}</h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-emerald-600 tracking-wider uppercase">Phần C</span>
            <h2 className="text-lg font-bold text-slate-900">Chuẩn Đầu Ra Học Phần (Course Learning Outcomes - CLOs)</h2>
          </div>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                  <th className="py-3 px-4 font-semibold w-20">Mã CĐR</th>
                  <th className="py-3 px-4 font-semibold w-32">Phân loại</th>
                  <th className="py-3 px-4 font-semibold w-36">Thang đo Bloom</th>
                  <th className="py-3 px-4 font-semibold">Nội dung Chuẩn đầu ra (Mô tả hành vi có thể đo lường)</th>
                  <th className="py-3 px-4 font-semibold w-56">Phương pháp đánh giá</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {LEARNING_OUTCOMES.map((clo) => {
                  const categoryBadgeColor =
                    clo.category === 'Kiến thức'
                      ? 'bg-blue-50 text-blue-700 border-blue-200'
                      : clo.category === 'Kỹ năng'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-purple-50 text-purple-700 border-purple-200';

                  return (
                    <tr key={clo.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900 align-top">
                        <span className="px-2 py-1 bg-slate-100 rounded text-xs font-mono">
                          {clo.id}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 align-top">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium border ${categoryBadgeColor}`}>
                          {clo.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs font-medium text-slate-600 align-top">
                        <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">
                          {clo.bloomLevel}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 leading-relaxed align-top">
                        {clo.description}
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-600 align-top">
                        {clo.assessmentMethod}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
