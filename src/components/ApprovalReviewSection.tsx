import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, FileCheck, Send, Download, Sparkles, CheckSquare } from 'lucide-react';

interface ApprovalProps {
  onExportMarkdown: () => void;
  onExportAllMarkdown?: () => void;
}

export const ApprovalReviewSection: React.FC<ApprovalProps> = ({ onExportMarkdown, onExportAllMarkdown }) => {
  const [checklist, setChecklist] = useState({
    itemA: true,
    itemB: true,
    itemC: true,
    itemD: true,
    itemE: true,
    itemF: true,
    itemG: true,
    itemH: true,
    itemI: true,
    itemJ: true,
    phase2Chapters: true,
    itemQuizBank: true,
  });

  const [feedback, setFeedback] = useState('');
  const [approvedStatus, setApprovedStatus] = useState<boolean>(true);

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(checklist).every(Boolean);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-emerald-600 tracking-wider uppercase">Nghiệm Thu Toàn Khóa</span>
            <h2 className="text-lg font-bold text-slate-900">Bảng Kiểm Tra & Nghiệm Thu Toàn Diện Học Phần (10/10 Chương - 32 Bài Học)</h2>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed max-w-4xl">
          Học phần <strong>Lập trình Căn bản C++ (IT1001)</strong> đã hoàn tất 100% cả <strong>Giai đoạn 1</strong> (Khung đề cương, chuẩn đầu ra, ma trận, cấu trúc Moodle, ngân hàng bài tập 4 cấp độ) và <strong>Giai đoạn 2</strong> (Nội dung chi tiết từng bài học chuẩn sư phạm 13 bước cho toàn bộ 10 chương từ CH01 đến CH10).
        </p>
      </div>

      {/* Checklist Grid */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center justify-between">
          <span>Bảng kiểm định 12 Tiêu chí chất lượng & Học liệu:</span>
          <span className="text-xs font-semibold text-emerald-600">
            Đạt chuẩn ({Object.values(checklist).filter(Boolean).length}/12)
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.itemA}
              onChange={() => toggleCheck('itemA')}
              className="mt-1 rounded text-blue-600 cursor-pointer"
            />
            <div>
              <strong className="text-slate-900 block">A. Mô tả tổng quan học phần</strong>
              <span className="text-slate-500 text-xs">Mục tiêu xóa bỏ rào cản cho sinh viên năm nhất, định vị 3 tín chỉ, nguyên tắc sư phạm.</span>
            </div>
          </label>

          <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.itemB}
              onChange={() => toggleCheck('itemB')}
              className="mt-1 rounded text-blue-600 cursor-pointer"
            />
            <div>
              <strong className="text-slate-900 block">B. Mục tiêu học phần (GO1 - GO6)</strong>
              <span className="text-slate-500 text-xs">Bao quát từ tư duy, cú pháp, dữ liệu, hàm, gỡ lỗi đến văn hóa viết mã sạch.</span>
            </div>
          </label>

          <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.itemC}
              onChange={() => toggleCheck('itemC')}
              className="mt-1 rounded text-blue-600 cursor-pointer"
            />
            <div>
              <strong className="text-slate-900 block">C. Chuẩn đầu ra (CLO1 - CLO8)</strong>
              <span className="text-slate-500 text-xs">Gắn với thang đo nhận thức Bloom (L2-L5) và phương pháp đánh giá định lượng.</span>
            </div>
          </label>

          <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.itemD}
              onChange={() => toggleCheck('itemD')}
              className="mt-1 rounded text-blue-600 cursor-pointer"
            />
            <div>
              <strong className="text-slate-900 block">D. Đề cương chi tiết 10 Chương</strong>
              <span className="text-slate-500 text-xs">Bảng chuẩn xác: 32 bài học, 30 tiết LT, 30 tiết TH, 30 tiết BT/Tự học.</span>
            </div>
          </label>

          <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.itemE}
              onChange={() => toggleCheck('itemE')}
              className="mt-1 rounded text-blue-600 cursor-pointer"
            />
            <div>
              <strong className="text-slate-900 block">E. Ma trận CĐR – Nội dung</strong>
              <span className="text-slate-500 text-xs">Bảng 8 CLOs x 10 Chương phân định 3 cấp độ I - T - U tường minh.</span>
            </div>
          </label>

          <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.itemF}
              onChange={() => toggleCheck('itemF')}
              className="mt-1 rounded text-blue-600 cursor-pointer"
            />
            <div>
              <strong className="text-slate-900 block">F. Lộ trình học tập 10 bước</strong>
              <span className="text-slate-500 text-xs">Nhập môn → Cú pháp → Điều kiện → Vòng lặp → Chuỗi → Mảng → Hàm → Debug → Tổng hợp.</span>
            </div>
          </label>

          <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.itemG}
              onChange={() => toggleCheck('itemG')}
              className="mt-1 rounded text-blue-600 cursor-pointer"
            />
            <div>
              <strong className="text-slate-900 block">G. Cấu trúc bài học mẫu (13 mục)</strong>
              <span className="text-slate-500 text-xs">Kèm bài mẫu hoàn chỉnh có code C++, bug radar và câu hỏi tương tác.</span>
            </div>
          </label>

          <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.itemH}
              onChange={() => toggleCheck('itemH')}
              className="mt-1 rounded text-blue-600 cursor-pointer"
            />
            <div>
              <strong className="text-slate-900 block">H. Cấu trúc khóa học Moodle</strong>
              <span className="text-slate-500 text-xs">Section, Book, H5P, Quiz, Assignment, VPL tự động chấm và Forum Q&A.</span>
            </div>
          </label>

          <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.itemI}
              onChange={() => toggleCheck('itemI')}
              className="mt-1 rounded text-blue-600 cursor-pointer"
            />
            <div>
              <strong className="text-slate-900 block">I. Hệ thống bài tập 4 mức độ</strong>
              <span className="text-slate-500 text-xs">Nhận biết (30%), Thông hiểu (30%), Vận dụng (25%), Vận dụng cao (15%).</span>
            </div>
          </label>

          <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.itemJ}
              onChange={() => toggleCheck('itemJ')}
              className="mt-1 rounded text-blue-600 cursor-pointer"
            />
            <div>
              <strong className="text-slate-900 block">J. Đề xuất tiến độ học tập</strong>
              <span className="text-slate-500 text-xs">Kế hoạch 15 tuần chi tiết, phương án Blended Learning và Tự học.</span>
            </div>
          </label>

          <label className="flex items-start gap-2.5 p-3 rounded-lg border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50 cursor-pointer md:col-span-2">
            <input
              type="checkbox"
              checked={checklist.phase2Chapters}
              onChange={() => toggleCheck('phase2Chapters')}
              className="mt-1 rounded text-emerald-600 cursor-pointer"
            />
            <div>
              <strong className="text-emerald-950 block">K. Hoàn thiện Toàn bộ 10 Chương Giai đoạn 2 (32 Bài học chuẩn 13 bước)</strong>
              <span className="text-emerald-700 text-xs">Từ CH01 (Nhập môn) đến CH10 (Đồ án Console Quản lý Sinh viên & Chiến lược thi A+). Mỗi bài đều có Bug Radar, Code minh họa, Bài tập 4 cấp độ và Checklist.</span>
            </div>
          </label>

          <label className="flex items-start gap-2.5 p-3 rounded-lg border border-blue-200 bg-blue-50/40 hover:bg-blue-50 cursor-pointer md:col-span-2">
            <input
              type="checkbox"
              checked={checklist.itemQuizBank}
              onChange={() => toggleCheck('itemQuizBank')}
              className="mt-1 rounded text-blue-600 cursor-pointer"
            />
            <div>
              <strong className="text-blue-950 block">L. Ngân hàng 120 Câu hỏi Trắc nghiệm khách quan chuẩn LMS Moodle (10/10 Chương)</strong>
              <span className="text-blue-700 text-xs">Phân bổ 4 cấp độ tư duy (Bloom), có đầy đủ đáp án A-D, code snippet, giải thích chi tiết cơ chế sâu và tích hợp bộ công cụ xuất khẩu chuẩn Moodle XML, Aiken, GIFT.</span>
            </div>
          </label>
        </div>
      </div>

      {/* Action and feedback box */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">
          Góp ý bổ sung / Yêu cầu hiệu chỉnh của Giảng viên:
        </h3>
        <textarea
          rows={3}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Nhập nhận xét hoặc chỉ đạo thêm (nếu có) để tiếp tục cập nhật và hoàn thiện..."
          className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onExportMarkdown}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-blue-600" />
              Tải Đề Cương Khung (.md)
            </button>
            {onExportAllMarkdown && (
              <button
                onClick={onExportAllMarkdown}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-blue-600" />
                Tải Toàn Bộ Học Liệu 10 Chương (.md)
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {approvedStatus ? (
              <div className="px-4 py-2 bg-emerald-100 text-emerald-800 font-bold text-xs sm:text-sm rounded-lg flex items-center gap-2 border border-emerald-300 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ĐÃ NGHIỆM THU HOÀN TẤT 100% TOÀN KHÓA HỌC
              </div>
            ) : (
              <button
                onClick={() => setApprovedStatus(true)}
                disabled={!allChecked}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white rounded-lg shadow-sm transition-all cursor-pointer ${
                  allChecked
                    ? 'bg-emerald-600 hover:bg-emerald-500'
                    : 'bg-slate-400 cursor-not-allowed'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                Phê duyệt & Nghiệm thu Học liệu
              </button>
            )}
          </div>
        </div>

        {approvedStatus && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-950 mt-3 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Học phần đã hoàn thành xuất sắc toàn diện!</strong> Cả GIAI ĐOẠN 1 (Khung chuẩn kiểm định) và GIAI ĐOẠN 2 (Toàn bộ 10 Chương gồm 32 bài học chi tiết theo mô hình sư phạm 13 bước) đều đã sẵn sàng đưa vào giảng dạy trực tiếp và số hóa lên hệ thống Moodle LMS của Nhà trường.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
