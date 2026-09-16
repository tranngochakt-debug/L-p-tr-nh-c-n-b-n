import React, { useState } from 'react';
import { FileText, Code2, AlertTriangle, Lightbulb, CheckSquare, Sparkles, HelpCircle, Terminal } from 'lucide-react';

export const LessonTemplateSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'specification' | 'sampleLesson'>('sampleLesson');

  const templateComponents = [
    { num: 1, name: 'Tên bài', desc: 'Ngắn gọn, rõ ràng, phản ánh chính xác nội dung học.' },
    { num: 2, name: 'Mục tiêu bài học', desc: '5-7 mục tiêu đo lường được bằng động từ Bloom: Trình bày, Phân biệt, Sử dụng, Viết, Phân tích, Gỡ lỗi.' },
    { num: 3, name: 'Kiến thức cần chuẩn bị', desc: 'Nêu cụ thể sinh viên cần nắm kiến thức gì trước khi bắt đầu bài này (Tránh lỗ hổng).' },
    { num: 4, name: 'Khởi động (Lead-in)', desc: 'Tình huống thực tế hoặc mâu thuẫn nhận thức tạo động lực và nhu cầu cần kiến thức mới.' },
    { num: 5, name: 'Lý thuyết cốt lõi', desc: 'Bản chất khái niệm, cú pháp chuẩn, ý nghĩa từng thành phần cú pháp và lưu ý quan trọng.' },
    { num: 6, name: 'Ví dụ minh họa đầy đủ', desc: 'Bài toán → Phân tích I/O → Ý tưởng giải → Code C++ chuẩn → Giải thích từng dòng → Kết quả Output → Phân tích cơ chế.' },
    { num: 7, name: 'Thực hành (3 Cấp độ)', desc: 'Thực hành 1: Cơ bản (Code theo mẫu) → Thực hành 2: Củng cố (Biến đổi nhẹ) → Thực hành 3: Vận dụng (Tự giải quyết bài toán mới).' },
    { num: 8, name: 'Lỗi thường gặp (Bug Radar)', desc: 'Mô hình 4 bước: Lỗi biểu hiện → Nguyên nhân gốc rễ → Cách compiler cảnh báo → Cách sửa triệt để.' },
    { num: 9, name: 'Bài tập tự luyện', desc: 'Phân loại bài tập 4 mức: Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao.' },
    { num: 10, name: 'Tự kiểm tra (Self-Quiz)', desc: '3-5 câu hỏi trắc nghiệm, dự đoán kết quả in ra màn hình hoặc phát hiện dòng code sai.' },
    { num: 11, name: 'Tóm tắt bài học', desc: 'Bảng tổng hợp cú pháp, sơ đồ tư duy hoặc cheatsheet ghi nhớ nhanh.' },
    { num: 12, name: 'Checklist tự đánh giá', desc: 'Bảng kiểm năng lực (Tôi hiểu..., Tôi viết được..., Tôi debug được...).' },
    { num: 13, name: 'Bài tập mở rộng / Thử thách', desc: 'Bài toán thực tế kích thích đào sâu và tư duy thuật toán nâng cao.' },
  ];

  return (
    <div className="space-y-6">
      {/* Header and Toggle */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">Phần G</span>
            <span className="px-2 py-0.5 text-xs bg-emerald-100 text-emerald-800 rounded font-medium">13 Bước Chuẩn Hóa</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 mt-1">Cấu Trúc Một Bài Học Mẫu (Standard Lesson Framework)</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Áp dụng thống nhất cho toàn bộ 32 bài học trong bộ học liệu C++
          </p>
        </div>

        <div className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200 self-start sm:self-auto">
          <button
            onClick={() => setActiveView('sampleLesson')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeView === 'sampleLesson'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Xem Bài học mẫu trực quan (Bài 8)
          </button>
          <button
            onClick={() => setActiveView('specification')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeView === 'specification'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Xem Quy chuẩn 13 Mục
          </button>
        </div>
      </div>

      {activeView === 'specification' ? (
        /* SPECIFICATION VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templateComponents.map((item) => (
            <div
              key={item.num}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold flex items-center justify-center text-xs border border-blue-200">
                  {item.num}
                </span>
                <h3 className="font-bold text-slate-900 text-sm">{item.name}</h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-9">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* SAMPLE CONCRETE LESSON VIEW */
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-200">
          {/* Top Banner of Sample Lesson */}
          <div className="p-6 bg-slate-900 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2 text-xs text-blue-300">
              <span className="px-2 py-0.5 bg-blue-800/80 rounded font-mono">CHƯƠNG 3 • BÀI 8</span>
              <span>Thời lượng tự học: 50 phút</span>
              <span>Tương thích Moodle VPL</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Bài 8: Biểu Thức Quan Hệ, Toán Tử Logic & Cấu Trúc Rẽ Nhánh if...else
            </h1>
          </div>

          {/* 1. Mục tiêu */}
          <div className="p-6 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded flex items-center justify-center text-xs">1</span>
              Mục tiêu bài học (Sau bài này, sinh viên có thể:)
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 pl-7 list-disc">
              <li><strong>Giải thích</strong> được khái niệm mệnh đề chân lý đúng (true/1) và sai (false/0) trong C++.</li>
              <li><strong>Sử dụng</strong> thành thạo các toán tử quan hệ (==, !=, &gt;, &lt;) và logic (&amp;&amp;, ||, !).</li>
              <li><strong>Viết</strong> đúng cú pháp câu lệnh if đơn và if...else có khối ngoặc nhọn {}.</li>
              <li><strong>Phát hiện và sửa</strong> lỗi kinh điển: nhầm lẫn toán tử gán (=) với so sánh bằng (==).</li>
              <li><strong>Vận dụng</strong> giải quyết các bài toán phân loại số học và xét điều kiện vào đời sống.</li>
            </ul>
          </div>

          {/* 2. Kiến thức cần chuẩn bị */}
          <div className="p-6 bg-slate-50/60 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 bg-slate-200 text-slate-700 rounded flex items-center justify-center text-xs">2</span>
              Kiến thức cần chuẩn bị
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 pl-7">
              Biết khai báo biến kiểu <code>int</code>, <code>float</code>, <code>bool</code>; biết dùng <code>cin</code> để nhập dữ liệu và <code>cout</code> để in dữ liệu (Bài 4 - 7).
            </p>
          </div>

          {/* 3. Khởi động */}
          <div className="p-6 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 bg-amber-100 text-amber-700 rounded flex items-center justify-center text-xs">3</span>
              Khởi động: Tình huống thực tế
            </h3>
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-950 leading-relaxed ml-7">
              <p>
                <strong>Tình huống:</strong> Giả sử bạn đang viết phần mềm cho máy ATM. Khách hàng muốn rút <code>soTienRut</code> từ tài khoản có <code>soDu</code>. Nếu <code>soTienRut &lt;= soDu</code>, máy sẽ nhả tiền và trừ tài khoản; ngược lại nếu không đủ tiền, máy phải thông báo "Giao dịch không thành công!".
              </p>
              <p className="mt-1 text-amber-800">
                👉 <em>Câu hỏi: Làm thế nào để máy tính biết tự "ra quyết định" rẽ theo một trong hai ngả đường tùy thuộc vào điều kiện? Đó là nhiệm vụ của câu lệnh điều kiện <code>if...else</code>.</em>
              </p>
            </div>
          </div>

          {/* 4. Lý thuyết */}
          <div className="p-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded flex items-center justify-center text-xs">4</span>
              Lý thuyết cốt lõi
            </h3>
            <div className="pl-7 space-y-3 text-xs sm:text-sm text-slate-700">
              <p>
                Trong C++, điều kiện là một biểu thức có giá trị <strong>đúng (true / khác 0)</strong> hoặc <strong>sai (false / bằng 0)</strong>.
              </p>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
                <div className="text-slate-400">// Cú pháp if...else chuẩn</div>
                <div>if (dieu_kien) &#123;</div>
                <div className="pl-4 text-emerald-400">// Khối lệnh thực thi khi dieu_kien ĐÚNG (true)</div>
                <div>&#125; else &#123;</div>
                <div className="pl-4 text-amber-400">// Khối lệnh thực thi khi dieu_kien SAI (false)</div>
                <div>&#125;</div>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2 text-xs text-blue-900">
                <Lightbulb className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Quy tắc vàng:</strong> Luôn luôn bao bọc khối lệnh bên trong cặp ngoặc nhọn <code>&#123; &#125;</code>, kể cả khi khối lệnh chỉ có 1 câu lệnh duy nhất để tránh lỗi ngầm!
                </span>
              </div>
            </div>
          </div>

          {/* 5. Ví dụ minh họa */}
          <div className="p-6 space-y-4 bg-slate-50/60">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 bg-emerald-100 text-emerald-700 rounded flex items-center justify-center text-xs">5</span>
              Ví dụ minh họa chi tiết: Kiểm tra số chẵn hay số lẻ
            </h3>
            <div className="pl-7 space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <strong className="text-slate-900 block mb-1">1. Phân tích bài toán:</strong>
                <ul className="list-disc pl-5 text-slate-600 space-y-0.5">
                  <li><strong>Input:</strong> Một số nguyên <code>n</code> nhập từ bàn phím.</li>
                  <li><strong>Output:</strong> In ra "n la so chan" hoặc "n la so le".</li>
                  <li><strong>Ý tưởng:</strong> Một số là số chẵn nếu chia hết cho 2, tức phép chia dư <code>n % 2 == 0</code>.</li>
                </ul>
              </div>

              <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
                <pre>{`#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Nhap mot so nguyen n: ";
    cin >> n;

    // Kiem tra dieu kien chia het cho 2
    if (n % 2 == 0) {
        cout << n << " la so chan." << endl;
    } else {
        cout << n << " la so le." << endl;
    }

    return 0;
}`}</pre>
              </div>

              <div className="p-3 bg-slate-900/90 text-emerald-400 font-mono text-xs rounded-lg">
                <div className="text-slate-400">// Kết quả chạy thử:</div>
                <div>Nhap mot so nguyen n: 14</div>
                <div>14 la so chan.</div>
              </div>
            </div>
          </div>

          {/* 6. Lỗi thường gặp */}
          <div className="p-6 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 bg-rose-100 text-rose-700 rounded flex items-center justify-center text-xs">6</span>
              Lỗi thường gặp & Cách khắc phục (Bug Radar)
            </h3>
            <div className="pl-7 space-y-3">
              <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl text-xs sm:text-sm text-rose-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-rose-900">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Bẫy số 1: Nhầm lẫn giữa dấu = (gán) và dấu == (so sánh)</span>
                </div>
                <div className="font-mono text-xs bg-white/80 p-2 rounded border border-rose-200 text-slate-800">
                  <span className="text-rose-600">// ❌ SAI NGUY HIỂM:</span> if (n = 0) &#123; ... &#125; <span className="text-slate-400">// Luôn gán n bằng 0 và trả về false!</span><br />
                  <span className="text-emerald-600">//  ĐÚNG:</span> if (n == 0) &#123; ... &#125; <span className="text-slate-400">// So sánh bằng</span>
                </div>
                <p className="text-slate-700 text-xs">
                  <strong>Cách phòng ngừa:</strong> Bật cảnh báo trình biên dịch <code>-Wall</code>, compiler sẽ cảnh báo ngay khi bạn gán giá trị bên trong ngoặc điều kiện <code>if</code>.
                </p>
              </div>
            </div>
          </div>

          {/* 7. Thực hành & Bài tập */}
          <div className="p-6 bg-slate-50/60 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 bg-indigo-100 text-indigo-700 rounded flex items-center justify-center text-xs">7</span>
              Nhiệm vụ thực hành & Bài tập 4 mức độ
            </h3>
            <div className="pl-7 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-blue-700 block mb-1">Mức 1 (Nhận biết):</span>
                Cho <code>int x = 5; if (x &gt; 3 &amp;&amp; x &lt; 10)</code>. Biểu thức điều kiện có giá trị gì?
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-emerald-700 block mb-1">Mức 2 (Thông hiểu):</span>
                Viết chương trình nhập vào 2 số thực a, b. In ra số lớn hơn (Max).
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-amber-700 block mb-1">Mức 3 (Vận dụng):</span>
                Giải phương trình bậc nhất ax + b = 0, xét đầy đủ 3 trường hợp: vô nghiệm, vô số nghiệm và nghiệm duy nhất.
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-purple-700 block mb-1">Mức 4 (Vận dụng cao):</span>
                Tính tiền cước taxi theo km bậc thang: 1km đầu 12.000đ, từ km 2-10 giá 10.000đ/km, từ km 11 trở đi giá 8.000đ/km.
              </div>
            </div>
          </div>

          {/* 8. Tự đánh giá */}
          <div className="p-6 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 bg-emerald-100 text-emerald-700 rounded flex items-center justify-center text-xs">8</span>
              Checklist tự đánh giá năng lực cá nhân
            </h3>
            <div className="pl-7 space-y-1.5 text-xs text-slate-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                <span>Tôi giải thích được khi nào cần dùng lệnh rẽ nhánh if...else.</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                <span>Tôi phân biệt được toán tử logic &amp;&amp; (VÀ) và || (HOẶC).</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <span>Tôi tự tin không bao giờ bị nhầm giữa dấu = và ==.</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <span>Tôi tự viết được chương trình giải phương trình bậc nhất hoàn chỉnh có kiểm thử.</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
