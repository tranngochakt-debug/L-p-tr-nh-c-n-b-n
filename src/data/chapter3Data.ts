import { LessonContent, ChapterData } from './chapter1Data.ts';

export const CHAPTER_3_DATA: ChapterData = {
  chapterId: 3,
  chapterCode: 'CH03',
  title: 'Cấu Trúc Điều Khiển Rẽ Nhánh (if, switch-case)',
  summary: 'Làm chủ tư duy đưa ra quyết định trong chương trình: Biểu thức so sánh quan hệ (==, !=, >, <, >=, <=), toán tử logic (&&, ||, !), cơ chế đoản mạch (short-circuit evaluation), cấu trúc rẽ nhánh if đơn, if...else, thang điều kiện if...else if, điều kiện lồng nhau (nested if), kỹ thuật lập trình phòng thủ (guard clauses), và cấu trúc lựa chọn đa nhánh switch...case kèm các bẫy fall-through thường gặp.',
  totalLessons: 3,
  lessons: [
    {
      id: 'CH03-L01',
      lessonNumber: 1,
      chapterNumber: 3,
      title: 'Biểu Thức Quan Hệ, Toán Tử Logic & Cấu Trúc if, if...else',
      readingTimeMinutes: 50,
      moodleType: 'Page + Đoán output logic + VPL Kiểm tra số chẵn/lẻ, âm/dương',
      objectives: [
        'Hiểu và phân biệt được 6 toán tử so sánh quan hệ (==, !=, >, <, >=, <=) và giá trị chân lý boolean (true/false).',
        'Làm chủ 3 toán tử logic (AND &&, OR ||, NOT !) và bảng chân trị tương ứng.',
        'Giải thích cơ chế đánh giá đoản mạch (Short-Circuit Evaluation) và ứng dụng tránh lỗi chia cho 0.',
        'Sử dụng thành thạo cấu trúc điều khiển if đơn và if...else với khối lệnh {}.',
        'Tránh bẫy nhầm lẫn kinh điển giữa toán tử gán (=) và toán tử so sánh bằng (==).'
      ],
      prerequisites: [
        'Đã học xong Chương 2 (Kiểu dữ liệu bool, biến, biểu thức số học và cin/cout).'
      ],
      leadIn: {
        hook: 'Tất cả các chương trình máy tính bạn đã viết ở Chương 1 và 2 đều chạy thẳng một mạch từ trên xuống dưới một cách thụ động. Nhưng cuộc sống thì luôn đối mặt với ngã rẽ: "NẾU trời mưa THÌ mang ô, NẾU KHÔNG THÌ đi bộ".',
        question: 'Làm thế nào để một cỗ máy vô tri có thể "tự suy nghĩ" và chọn lựa thực thi hành động A thay vì hành động B dựa trên hoàn cảnh?',
        realWorldScenario: 'Hệ thống rút tiền ATM chỉ cho phép nhả tiền NẾU số dư trong tài khoản lớn hơn hoặc bằng số tiền cần rút. Nếu điều kiện này sai, giao dịch bị từ chối ngay lập tức. Đây chính là cấu trúc rẽ nhánh (Branching) – linh hồn của trí tuệ máy tính.'
      },
      theorySections: [
        {
          title: '1. Biểu thức quan hệ & Giá trị chân lý Boolean',
          content: 'Biểu thức so sánh quan hệ kiểm tra mối tương quan giữa 2 giá trị và luôn trả về kết quả kiểu `bool` (`true` - 1 hoặc `false` - 0).\n\nC++ hỗ trợ 6 toán tử so sánh:\n- `==`: So sánh bằng (Ví dụ: `a == 5`)\n- `!=`: So sánh khác (Ví dụ: `a != 0`)\n- `>` : Lớn hơn\n- `<` : Nhỏ hơn\n- `>=`: Lớn hơn hoặc bằng\n- `<=`: Nhỏ hơn hoặc bằng\n\nLưu ý: Trong C++, số nguyên khác 0 bất kỳ được coi là `true`, số 0 tương đương với `false`.',
          callout: {
            type: 'warning',
            text: '⚠️ Bẫy tử huyệt: Dấu `=` là phép gán giá trị, còn dấu `==` (hai dấu bằng) mới là phép so sánh bằng! Viết "if (x = 5)" sẽ luôn đúng vì nó gán 5 cho x!'
          }
        },
        {
          title: '2. Các toán tử Logic (AND, OR, NOT)',
          content: 'Khi cần kết hợp nhiều điều kiện cùng lúc (ví dụ: "vừa có bằng lái VÀ vừa đủ 18 tuổi"), ta dùng toán tử logic:\n\n1. `&&` (AND - VÀ): Biểu thức đúng KHI VÀ CHỈ KHI cả hai vế đều đúng.\n   - `(age >= 18) && (hasLicense == true)`\n2. `||` (OR - HOẶC): Biểu thức đúng khi CÓ ÍT NHẤT MỘT vế đúng.\n   - `(isVip == true) || (billAmount > 1000)`\n3. `!` (NOT - PHỦ ĐỊNH): Đảo ngược chân trị.\n   - `!isRaining` (đúng nếu isRaining đang là false).',
          keyPoints: [
            'Bảng chân trị AND: true && true = true; còn lại đều false.',
            'Bảng chân trị OR: false || false = false; còn lại đều true.',
            'Bẫy toán học: Muốn kiểm tra x nằm trong đoạn [1, 10], KHÔNG ĐƯỢC viết "1 <= x <= 10". BẮT BUỘC viết: "(x >= 1) && (x <= 10)".'
          ]
        },
        {
          title: '3. Cơ chế đánh giá đoản mạch (Short-Circuit Evaluation)',
          content: 'C++ tối ưu hóa tính toán biểu thức logic:\n- Với `&&`: Nếu vế trái là `false`, trình biên dịch BỎ QUA không thèm tính vế phải vì kết quả chắc chắn là `false`.\n- Với `||`: Nếu vế trái là `true`, trình biên dịch BỎ QUA không tính vế phải vì kết quả chắc chắn là `true`.\n\nỨng dụng cực kỳ quan trọng: Ngăn chặn lỗi chia cho 0 hoặc truy cập bộ nhớ bất hợp pháp:\n`if (b != 0 && a / b > 2)` $\\rightarrow$ Nếu `b == 0`, vế sau `a / b` sẽ không bao giờ được thực hiện, giúp chương trình không bị sập (Crash)!'
        },
        {
          title: '4. Cấu trúc if đơn & Cấu trúc if...else',
          content: 'Cú pháp if đơn:\n```cpp\nif (dieu_kien) {\n    // Thuc hien khi dieu_kien dung (true)\n}\n```\nCú pháp if...else:\n```cpp\nif (dieu_kien) {\n    // Thuc hien khi dieu_kien DUNG\n} else {\n    // Thuc hien khi dieu_kien SAI\n}\n```\nQuy tắc chuẩn Clean Code: Luôn luôn bao bọc khối lệnh trong cặp ngoặc nhọn `{}` kể cả khi bên trong chỉ có 1 dòng lệnh duy nhất, nhằm tránh lỗi logic khó kiểm soát khi thêm code sau này.',
          callout: {
            type: 'tip',
            text: '💡 Văn hóa thụt lề: Tất cả các dòng code nằm bên trong cặp ngoặc nhọn `{}` phải được thụt vào 1 mức Tab (hoặc 4 dấu cách). Tuyệt đối không viết thẳng hàng với từ khóa if.'
          }
        }
      ],
      examples: [
        {
          title: 'Ví dụ 1: Kiểm tra tính chẵn lẻ & Điều kiện đỗ học phần an toàn',
          problem: 'Nhập vào điểm thi môn Tin học căn bản (thang điểm 10) và số buổi vắng mặt. In kết quả xem sinh viên ĐỖ hay TRƯỢT học phần.',
          analysis: {
            idea: 'Sinh viên ĐỖ nếu: Điểm >= 4.0 VÀ số buổi vắng mặt <= 3. Ngược lại là TRƯỢT.',
            input: 'score (double), absences (int)',
            output: 'Thông báo "CHUC MUNG: BAN DA DO HOC PHAN!" hoặc "RAT TIEC: BAN DA TRUOT HOC PHAN!"',
            algorithm: 'Bước 1: Nhập score và absences.\nBước 2: Dùng if ((score >= 4.0) && (absences <= 3))\nBước 3: Đúng thì in ĐỖ, sai thì in TRƯỢT.'
          },
          code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double score = 0.0;
    int absences = 0;

    cout << "Nhap diem thi tong ket (0 - 10): ";
    cin >> score;

    cout << "Nhap so buoi vang mat: ";
    cin >> absences;

    cout << "-------------------------------------" << endl;

    // Kiem tra dieu kien do mon: Diem >= 4.0 VA vang khong qua 3 buoi
    if (score >= 4.0 && absences <= 3) {
        cout << "[KET QUA]: CHUC MUNG! BAN DA DO HOC PHAN." << endl;
        cout << "Ghi chu: Du dieu kien tich luy tin chi." << endl;
    } else {
        cout << "[KET QUA]: RAT TIEC! BAN DA TRUOT HOC PHAN." << endl;
        if (score < 4.0) {
            cout << "-> Ly do: Diem duoi 4.0 (Dat: " << score << ")" << endl;
        }
        if (absences > 3) {
            cout << "-> Ly do: Vang qua so buoi quy dinh (Vang: " << absences << " buoi)" << endl;
        }
    }

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'if (score >= 4.0 && absences <= 3)',
              explanation: 'Sử dụng toán tử quan hệ >=, <= và toán tử logic && để kết hợp 2 điều kiện bắt buộc đồng thời.'
            },
            {
              lineOrBlock: '} else {',
              explanation: 'Nhánh thực thi khi một trong hai điều kiện (hoặc cả hai) bị vi phạm.'
            },
            {
              lineOrBlock: 'if (score < 4.0)',
              explanation: 'Kiểm tra bổ sung bên trong khối else để chỉ rõ nguyên nhân cụ thể dẫn đến việc trượt môn.'
            }
          ],
          executionResult: {
            sampleInput: '7.5\n2',
            sampleOutput: `Nhap diem thi tong ket (0 - 10): 7.5
Nhap so buoi vang mat: 2
-------------------------------------
[KET QUA]: CHUC MUNG! BAN DA DO HOC PHAN.
Ghi chu: Du dieu kien tich luy tin chi.`
          },
          analysisOfResult: 'Với điểm 7.5 (>= 4.0 là true) và 2 buổi vắng (<= 3 là true), true && true trả về true nên nhánh if được kích hoạt.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Kiểm tra Số Âm / Số Không Âm',
          task: 'Nhập một số nguyên n từ bàn phím. Kiểm tra xem n là số âm hay số không âm (n >= 0). In thông báo ra màn hình.',
          hints: ['Dùng if (n < 0) ... else ...'],
          expectedOutput: 'Nhap n: -5 -> Ket qua: -5 la so am'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Kiểm tra Số Chẵn / Số Lẻ',
          task: 'Nhập một số nguyên n. Dùng toán tử chia dư % để xác định n là số chẵn hay số lẻ.',
          hints: ['Số chẵn có phần dư khi chia cho 2 bằng 0 (n % 2 == 0)'],
          expectedOutput: 'Nhap n: 17 -> Ket qua: 17 la so le'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Đánh giá đoản mạch phòng ngừa chia 0',
          task: 'Nhập vào 2 số nguyên a và b. Kiểm tra xem a có chia hết cho b hay không. Bắt buộc phải áp dụng short-circuit để nếu b == 0 thì không bao giờ thực hiện phép chia.',
          hints: ['Dùng biểu thức điều kiện: if (b != 0 && a % b == 0)'],
          expectedOutput: 'Nhap a b: 12 0 -> Khong the chia vi b bang 0!'
        }
      ],
      commonErrors: [
        {
          name: 'Nhầm lẫn chết người giữa toán tử gán = và so sánh ==',
          symptom: 'Chương trình luôn nhảy vào nhánh if bất kể giá trị của biến là bao nhiêu!',
          rootCause: 'Viết if (x = 0) hoặc if (x = 5). Phép gán x = 5 trả về giá trị 5, trong C++ 5 là true nên if luôn luôn chạy nhánh đúng!',
          howToFix: 'Luôn dùng hai dấu bằng == để so sánh. Mẹo phòng ngừa (Yoda condition): Viết "if (5 == x)" – nếu bạn lỡ gõ "5 = x" trình biên dịch sẽ báo lỗi cú pháp ngay.',
          badCode: `int x = 0;
if (x = 5) { // SAI: day la phep gan!
    cout << "x bang 5";
}`,
          goodCode: `int x = 0;
if (x == 5) { // DUNG: day la phep so sanh bang
    cout << "x bang 5";
}`
        },
        {
          name: 'Viết gộp điều kiện kẹp kiểu toán học: 1 <= x <= 10',
          symptom: 'Biến x có giá trị 99 nhưng điều kiện "1 <= x <= 10" vẫn trả về ĐÚNG!',
          rootCause: 'C++ tính từ trái sang: "1 <= 99" ra true (tức là 1). Sau đó nó lấy 1 so sánh tiếp: "1 <= 10" -> luôn đúng (true)!',
          howToFix: 'Bắt buộc phải tách thành 2 mệnh đề riêng biệt nối với nhau bằng toán tử &&: (x >= 1 && x <= 10).',
          badCode: `int x = 99;
if (1 <= x <= 10) { // SAI NGIEM TRONG: luon tra ve true
    cout << "x trong doan [1, 10]";
}`,
          goodCode: `int x = 99;
if (x >= 1 && x <= 10) { // DUNG: hai bieu thuc rieng biet
    cout << "x trong doan [1, 10]";
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Bảng chân trị toán tử logic',
          description: 'Cho a = true, b = false, c = true. Xác định kết quả của:\n1. a && b\n2. a || b\n3. !b && (a || c)\n4. !(a && b)'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Lập luận kết quả rẽ nhánh',
          description: 'Cho biết màn hình sẽ in ra những gì khi chạy đoạn code sau:\nint score = 85;\nif (score >= 90) cout << "Xuat sac";\nelse if (score >= 80) cout << "Gioi";\nelse cout << "Dat";'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Kiểm tra năm nhuận (Leap Year)',
          description: 'Viết chương trình nhập vào một năm dương lịch Y (ví dụ: 2024, 1900, 2000). Kiểm tra xem Y có phải năm nhuận hay không.\nBiết rằng: Năm nhuận là năm chia hết cho 400 HOẶC (chia hết cho 4 và không chia hết cho 100).'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Kiểm tra điểm nằm trong hình chữ nhật',
          description: 'Cho một hình chữ nhật có góc trái-dưới là (x1, y1) và góc phải-trên là (x2, y2). Nhập vào tọa độ một điểm M(x, y). Xác định xem M nằm trong, nằm trên cạnh hay nằm ngoài hình chữ nhật.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Toán tử nào dùng để kiểm tra hai giá trị có bằng nhau hay không trong C++?',
          options: ['=', '==', '===', 'eq'],
          correctIndex: 1,
          explanation: 'Trong C++, toán tử == (hai dấu bằng) là toán tử so sánh bằng, còn = là toán tử gán.'
        },
        {
          id: 2,
          question: 'Với biểu thức: (5 > 3) && (2 == 4), kết quả trả về là gì?',
          options: ['true (1)', 'false (0)', 'Lỗi cú pháp', 'Không xác định'],
          correctIndex: 1,
          explanation: '(5 > 3) là true, nhưng (2 == 4) là false. Phép toán AND (&&) yêu cầu cả 2 vế đều đúng mới ra true. Do đó kết quả là false.'
        },
        {
          id: 3,
          question: 'Biểu thức kiểm tra số nguyên n nằm trong khoảng từ 10 đến 50 (bao gồm cả 10 và 50) nào viết đúng?',
          options: [
            '10 <= n <= 50',
            'n >= 10 && n <= 50',
            'n >= 10 || n <= 50',
            '10 <= n and <= 50'
          ],
          correctIndex: 1,
          explanation: 'Trong C++, bắt buộc phải tách thành hai biểu thức con kết nối bằng toán tử logic &&: (n >= 10 && n <= 50).'
        }
      ],
      summary: {
        cheatsheet: [
          { key: '==, !=, >, <, >=, <=', val: 'Các toán tử so sánh quan hệ, trả về kiểu bool' },
          { key: '&& (AND)', val: 'Đúng khi CẢ HAI vế đều đúng' },
          { key: '|| (OR)', val: 'Đúng khi CÓ ÍT NHẤT MỘT vế đúng' },
          { key: '! (NOT)', val: 'Toán tử phủ định chân lý (!true = false)' },
          { key: 'Short-circuit', val: 'C++ ngừng tính toán vế sau nếu vế trước đã đủ quyết định kết quả' },
          { key: 'Cú pháp if...else', val: 'Luôn dùng cặp ngoặc nhọn {} để bao bọc các câu lệnh bên trong' }
        ],
        coreTakeaway: 'Rẽ nhánh là chiếc vô lăng dẫn đường cho máy tính. Luôn nhớ dùng == để so sánh, tách rõ ràng các mệnh đề logic và không bao giờ viết gộp "a <= x <= b".'
      },
      checklist: [
        'Tôi phân biệt rõ ràng giữa toán tử gán (=) và toán tử so sánh bằng (==).',
        'Tôi sử dụng chính xác các toán tử logic &&, || và !.',
        'Tôi hiểu cơ chế đoản mạch short-circuit evaluation và biết ứng dụng nó để bảo vệ phép chia cho 0.',
        'Tôi luôn sử dụng cặp dấu ngoặc nhọn {} cho các khối lệnh if và else.'
      ],
      extendedChallenge: {
        title: 'Xây dựng thuật toán kiểm tra vé xem phim tự động',
        scenario: 'Một cụm rạp chiếu phim có chính sách: Giá vé gốc 100,000 VND. Trẻ em dưới 12 tuổi hoặc người cao tuổi từ 65 tuổi trở lên được giảm 50%. Học sinh/sinh viên (13-22 tuổi) có thẻ HSSV được giảm 20%. Ngày thứ Tư hàng tuần đồng giá 60,000 VND cho tất cả mọi người.',
        challengeTask: 'Thiết kế chương trình nhập: Tuổi, Có thẻ HSSV (bool), Ngày trong tuần (1-7), và tính ra giá vé chính xác nhất theo ưu đãi lớn nhất cho khách hàng.',
        thoughtGuidance: 'Áp dụng các toán tử logic kết hợp để tìm mức giảm cao nhất trước khi in hóa đơn.'
      }
    },
    {
      id: 'CH03-L02',
      lessonNumber: 2,
      chapterNumber: 3,
      title: 'Cấu Trúc if...else if Nhiều Nhánh & Kỹ Thuật Lập Trình Phòng Thủ',
      readingTimeMinutes: 55,
      moodleType: 'VPL Bài tập giải phương trình ax + b = 0, tính tiền điện bậc thang',
      objectives: [
        'Hiểu và vận dụng thành thạo cấu trúc thang rẽ nhánh if...else if...else để giải quyết bài toán đa phương án.',
        'Phân tích cơ chế hoạt động loại trừ theo thứ tự từ trên xuống dưới của cấu trúc bậc thang.',
        'Nhận diện và tránh lỗi "Dangling Else" trong cấu trúc điều kiện lồng nhau (Nested If).',
        'Áp dụng tư duy Lập trình phòng thủ (Defensive Programming) và kỹ thuật lính gác (Guard Clauses/Early Exit) để giữ code sáng sủa, tránh "Kim tự tháp lồng nhau" (Arrow Anti-pattern).',
        'Giải quyết trọn vẹn bài toán biện luận phương trình bậc nhất, phân loại tam giác và tính tiền điện bậc thang.'
      ],
      prerequisites: [
        'Đã học xong Bài 1 (Toán tử quan hệ, toán tử logic và cấu trúc if...else).'
      ],
      leadIn: {
        hook: 'Nếu chỉ có 2 ngã rẽ đúng/sai thì cuộc sống quá đơn giản. Nhưng thực tế: Học lực có Thang Xuất sắc - Giỏi - Khá - Trung bình - Yếu; Tiền điện có 6 bậc giá khác nhau. Bạn sẽ xử lý thế nào nếu có 5 hay 10 phương án loại trừ lẫn nhau?',
        question: 'Làm thế nào để viết code phân loại nhiều trường hợp mà không bị lồng chằng chịt 10 tầng if bên trong nhau khiến người đọc hoa mắt?',
        realWorldScenario: 'Hệ thống định giá cước taxi tính: 1 km đầu tiên 15,000đ; từ km thứ 2 đến km thứ 10 là 12,000đ/km; từ km thứ 11 trở đi là 10,000đ/km. Bài toán phân tầng này là ứng dụng kinh điển của cấu trúc if...else if thang.'
      },
      theorySections: [
        {
          title: '1. Cấu trúc thang điều kiện if...else if...else',
          content: 'Khi có từ 3 phương án lựa chọn trở lên và các phương án này mang tính loại trừ lẫn nhau, ta dùng thang `if...else if`:\n```cpp\nif (dieu_kien_1) {\n    // Chay khi dieu_kien_1 DUNG\n} else if (dieu_kien_2) {\n    // Chay khi dieu_kien_1 SAI va dieu_kien_2 DUNG\n} else if (dieu_kien_3) {\n    // Chay khi ca 1 va 2 SAI, con 3 DUNG\n} else {\n    // Truong hop mac dinh (chay khi tat ca dieu kien tren deu SAI)\n}\n```',
          keyPoints: [
            'Nguyên lý loại trừ: Trình biên dịch kiểm tra từ trên xuống dưới. Ngay khi bắt gặp điều kiện ĐÚNG đầu tiên, nó thực thi khối lệnh đó và NHẢY RA KHỎI TOÀN BỘ CẤU TRÚC, bỏ qua tất cả các nhánh else if còn lại.',
            'Thứ tự sắp xếp điều kiện cực kỳ quan trọng! Luôn xếp điều kiện chặt chẽ/hẹp nhất lên trước.'
          ]
        },
        {
          title: '2. Bẫy thứ tự kiểm tra trong thang if...else if',
          content: 'Xem xét bài toán xếp loại điểm số:\nNếu bạn viết:\n```cpp\nif (score >= 5.0) {\n    cout << "Trung binh";\n} else if (score >= 8.0) {\n    cout << "Gioi"; // KHONG BAO GIO CHAY TOI DAY!\n}\n```\nMột sinh viên được 9.0 điểm: Máy gặp `score >= 5.0` là đúng ngay lập tức $\\rightarrow$ In ra "Trung bình" và kết thúc! Điểm 9.0 biến thành trung bình vì thứ tự sai!',
          callout: {
            type: 'warning',
            text: '⚠️ Quy tắc sắp xếp: Luôn xếp điều kiện từ cao xuống thấp (>= 9.0 trước, rồi >= 8.0, >= 6.5, >= 5.0) hoặc từ thấp lên cao một cách nhất quán!'
          }
        },
        {
          title: '3. Điều kiện lồng nhau (Nested If) & Hiểm họa "Dangling Else"',
          content: 'Lệnh if lồng nhau là việc đặt một cấu trúc `if` bên trong phần thân của một cấu trúc `if` khác.\n\nHiểm họa Dangling Else (Else mồ côi):\nKhi viết nhiều if lồng nhau mà không có ngoặc `{}`, nhánh `else` sẽ tự động ghép đôi với lệnh `if` GẦN NÓ NHẤT, chứ không ghép với lệnh if bên ngoài như bạn tưởng tượng!',
          callout: {
            type: 'tip',
            text: '💡 Giải pháp tuyệt đối: Luôn bao bọc từng tầng if bằng cặp ngoặc nhọn `{}`. Thói quen này triệt tiêu 100% nguy cơ nhầm lẫn nhánh else.'
          }
        },
        {
          title: '4. Kỹ thuật Lập trình phòng thủ & Guard Clauses (Early Exit)',
          content: 'Khi bài toán có điều kiện kiểm tra dữ liệu đầu vào (ví dụ: điểm phải từ 0 đến 10, độ dài cạnh tam giác phải > 0), thay vì lồng code vào sâu hàng chục tầng:\n```cpp\n// Anti-pattern: Kim tu thap long nhau\nif (score >= 0 && score <= 10) {\n    if (score >= 8.5) { ... }\n}\n```\nKỹ sư chuyên nghiệp dùng Kỹ thuật Lính gác (Guard Clause):\nKiểm tra trường hợp lỗi TRƯỚC TIÊN, in thông báo lỗi và thoát ngay (`return 0;`):\n```cpp\n// Best practice: Early Exit\nif (score < 0 || score > 10) {\n    cout << "Loi: Diem khong hop le!" << endl;\n    return 0; // Thoat chuong trinh ngay lap tuc\n}\n// Toan bo code phia sau hoan toan an tam voi du lieu sach!\n```'
        }
      ],
      examples: [
        {
          title: 'Ví dụ 1: Biện luận trọn vẹn Phương trình bậc nhất ax + b = 0',
          problem: 'Viết chương trình nhập vào 2 hệ số a và b. Biện luận và giải phương trình bậc nhất ax + b = 0 một cách chặt chẽ theo tư duy lập trình phòng thủ.',
          analysis: {
            idea: 'Phương trình ax + b = 0 có các trường hợp:\n- Nếu a == 0 VÀ b == 0: Phương trình vô số nghiệm.\n- Nếu a == 0 VÀ b != 0: Phương trình vô nghiệm.\n- Nếu a != 0: Phương trình có nghiệm duy nhất x = -b / a.',
            input: 'a (double), b (double)',
            output: 'Nghiệm của phương trình hoặc thông báo vô nghiệm / vô số nghiệm.',
            algorithm: 'Bước 1: Nhập a, b.\nBước 2: Dùng if (a == 0) để xét các trường hợp suy biến trước.\nBước 3: Bên trong nhánh a == 0, nếu b == 0 in VÔ SỐ NGHIỆM, ngược lại in VÔ NGHIỆM.\nBước 4: Nhánh else (a != 0), tính nghiệm x = -b / a và in ra.'
          },
          code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double a = 0.0, b = 0.0;

    cout << "=== GIAI PHUONG TRINH BAC NHAT: ax + b = 0 ===" << endl;
    cout << "Nhap he so a: ";
    cin >> a;
    cout << "Nhap he so b: ";
    cin >> b;

    cout << fixed << setprecision(2);
    cout << "Phuong trinh: " << a << "x + " << b << " = 0" << endl;
    cout << "----------------------------------------------" << endl;

    // Bien luan cac truong hop
    if (a == 0.0) {
        if (b == 0.0) {
            cout << "=> Ket luan: Phuong trinh co VO SO NGHIEM." << endl;
        } else {
            cout << "=> Ket luan: Phuong trinh VO NGHIEM (Mau thuan: 0x + " << b << " = 0)." << endl;
        }
    } else {
        double x = -b / a;
        cout << "=> Ket luan: Phuong trinh co NGHIEM DUY NHAT: x = " << x << endl;
    }

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'if (a == 0.0)',
              explanation: 'Kiểm tra trường hợp đặc biệt a = 0 trước tiên để phòng ngừa lỗi chia cho 0 khi tính -b / a.'
            },
            {
              lineOrBlock: 'if (b == 0.0) ... else',
              explanation: 'Lồng cấu trúc if bên trong nhánh a == 0 để phân biệt rạch ròi giữa Vô số nghiệm (0x + 0 = 0) và Vô nghiệm (0x + b = 0).'
            },
            {
              lineOrBlock: 'double x = -b / a;',
              explanation: 'Tại nhánh else này, ta chắc chắn a != 0, nên phép chia đảm bảo an toàn tuyệt đối.'
            }
          ],
          executionResult: {
            sampleInput: '2.5\n-5.0',
            sampleOutput: `=== GIAI PHUONG TRINH BAC NHAT: ax + b = 0 ===
Nhap he so a: 2.5
Nhap he so b: -5
Phuong trinh: 2.50x + -5.00 = 0
----------------------------------------------
=> Ket luan: Phuong trinh co NGHIEM DUY NHAT: x = 2.00`
          },
          analysisOfResult: 'Vì a = 2.5 khác 0, chương trình nhảy thẳng vào nhánh else và tính x = -(-5.0) / 2.5 = 2.00.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Xếp loại học lực sinh viên',
          task: 'Nhập điểm trung bình hệ 10 (0.0 đến 10.0). Áp dụng kỹ thuật lính gác kiểm tra tính hợp lệ của điểm, sau đó dùng if...else if xếp loại: Xuất sắc (>= 9.0), Giỏi (>= 8.0), Khá (>= 6.5), Trung bình (>= 5.0), Yếu (< 5.0).',
          hints: ['Kiểm tra if (score < 0 || score > 10) in lỗi và kết thúc ngay.'],
          expectedOutput: 'Diem: 8.5 -> Xep loai: Gioi'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Phân loại tam giác',
          task: 'Nhập độ dài 3 cạnh a, b, c của một hình tam giác. Đầu tiên kiểm tra điều kiện tạo thành tam giác (tổng 2 cạnh bất kỳ > cạnh còn lại). Nếu hợp lệ, phân loại xem đó là tam giác Đều, Cân, Vuông (theo định lý Pytago) hay Tam giác thường.',
          hints: ['Dieu kien tam giac: a+b>c && a+c>b && b+c>a.', 'Tam giac deu: a == b && b == c.', 'Tam giac vuong: a*a + b*b == c*c (hoac cac hoan vi).'],
          expectedOutput: 'Cạnh 3 4 5 -> Day la Tam giac vuong'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Tính tiền điện sinh hoạt bậc thang',
          task: 'Viết chương trình tính tiền điện tiêu thụ theo bậc thang giá thực tế:\n- Bậc 1 (0 - 50 kWh): 1,806 đ/kWh\n- Bậc 2 (51 - 100 kWh): 1,866 đ/kWh\n- Bậc 3 (trên 100 kWh): 2,167 đ/kWh.\nIn ra chi tiết tổng tiền phải trả có cộng 8% thuế VAT.',
          hints: ['Nếu dùng 75 kWh: 50 kWh đầu tính giá bậc 1, 25 kWh tiếp theo tính giá bậc 2.'],
          expectedOutput: 'Tieu thu: 75 kWh -> Tien dien: ... VND'
        }
      ],
      commonErrors: [
        {
          name: 'Bẫy Dangling Else (Else mồ côi ghép sai cặp)',
          symptom: 'Khi biến thỏa mãn if ngoài nhưng không thỏa mãn if trong, nhánh else bất ngờ chạy ngoài ý muốn!',
          rootCause: 'Không dùng ngoặc nhọn {}, C++ luôn ghép từ khóa else với lệnh if gần nó nhất.',
          howToFix: 'Luôn luôn đóng mở ngoặc {} cho từng khối if để phân định tường minh cấp bậc lồng nhau.',
          badCode: `if (a > 0)
    if (b > 0)
        cout << "a va b deu duong";
else // NGUY HIEM: else nay bi ghep voi (b > 0) chu khong phai (a > 0)
    cout << "a am";`,
          goodCode: `if (a > 0) {
    if (b > 0) {
        cout << "a va b deu duong";
    }
} else { // AN TOAN: Ranh gioi ro rang nho cap ngoac {}
    cout << "a khong duong";
}`
        },
        {
          name: 'Thứ tự thang if...else if bị đảo ngược',
          symptom: 'Nhập điểm 9.5 nhưng hệ thống xếp loại "Trung bình" thay vì "Xuất sắc".',
          rootCause: 'Đặt điều kiện lỏng lẻo `score >= 5.0` lên trước `score >= 9.0`. Do cơ chế kiểm tra từ trên xuống dưới, nhánh đầu tiên thỏa mãn sẽ nuốt hết các nhánh phía sau.',
          howToFix: 'Sắp xếp điều kiện theo thứ tự tiêu chuẩn giảm dần (nghiêm ngặt nhất đứng đầu).',
          badCode: `if (dtb >= 5.0) {
    cout << "Trung binh";
} else if (dtb >= 9.0) { // ChET: 9.5 da bi if tren chan lai mat roi!
    cout << "Xuat sac";
}`,
          goodCode: `if (dtb >= 9.0) { // DUNG: Xep dieu kien chat che nhat len dau
    cout << "Xuat sac";
} else if (dtb >= 5.0) {
    cout << "Trung binh";
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Phát hiện lỗi logic trong thang điều kiện',
          description: 'Chỉ ra lỗi logic trong đoạn code phân loại tuổi sau:\nif (age > 0) cout << "Tre em";\nelse if (age > 18) cout << "Nguoi lon";\nelse cout << "Khong hop le";'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Biện luận nghiệm phương trình bậc 2',
          description: 'Trình bày sơ đồ rẽ nhánh biện luận phương trình bậc 2: ax^2 + bx + c = 0 (bao gồm cả trường hợp a = 0 và xét Delta = b^2 - 4ac).'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Tính cước Taxi 3 giai đoạn',
          description: 'Viết chương trình tính tiền cước Taxi theo km di chuyển:\n- Mở cửa (1 km đầu): 15,000đ\n- Từ km thứ 2 đến km thứ 10: 12,500đ/km\n- Từ km thứ 11 trở đi: 10,000đ/km\nNếu đi trên 30 km, toàn bộ hóa đơn được giảm thêm 10%.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Xác định ngày tiếp theo trong lịch (Next Date)',
          description: 'Nhập vào 3 số nguyên ngày (d), tháng (m), năm (y). Kiểm tra tính hợp lệ của ngày nhập (xét cả năm nhuận cho tháng 2). Nếu hợp lệ, in ra ngày kế tiếp (d+1, m, y) chính xác cả khi chuyển tháng hoặc chuyển giao thừa sang năm mới.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Điều gì xảy ra khi một điều kiện trong thang if...else if được đánh giá là true?',
          options: [
            'Chương trình thực hiện khối lệnh đó rồi tiếp tục kiểm tra các nhánh else if tiếp theo.',
            'Chương trình thực hiện khối lệnh đó và thoát ngay khỏi toàn bộ cấu trúc if...else if.',
            'Chương trình luôn thực hiện thêm cả khối else ở cuối cùng.',
            'Trình biên dịch báo lỗi.'
          ],
          correctIndex: 1,
          explanation: 'Nguyên tắc loại trừ của thang if...else if: Ngay khi gặp nhánh true đầu tiên, khối lệnh tương ứng được thực thi và nhảy ra khỏi toàn bộ cấu trúc.'
        },
        {
          id: 2,
          question: 'Kỹ thuật Lính gác (Guard Clauses / Early Exit) mang lại lợi ích chính nào?',
          options: [
            'Làm chương trình chạy nhanh hơn 100 lần.',
            'Xử lý sớm các trường hợp ngoại lệ hoặc dữ liệu lỗi ở đầu hàm, giúp code phẳng, dễ đọc và tránh lồng nhau quá sâu.',
            'Tự động sửa lỗi cú pháp trong chương trình.',
            'Thay thế hoàn toàn vòng lặp.'
          ],
          correctIndex: 1,
          explanation: 'Guard Clauses kiểm tra điều kiện lỗi ngay từ đầu và return sớm, loại bỏ tình trạng code bị lồng quá nhiều tầng ngoặc nhọn (Arrow anti-pattern).'
        },
        {
          id: 3,
          question: 'Trong C++, nếu không dùng ngoặc nhọn {}, nhánh else sẽ tự động ghép đôi với ai?',
          options: [
            'Lệnh if đầu tiên trong file code.',
            'Lệnh if có cùng mức thụt lề với nó.',
            'Lệnh if gần nó nhất chưa được ghép đôi.',
            'Không ghép với ai và gây lỗi cú pháp.'
          ],
          correctIndex: 2,
          explanation: 'Quy tắc ngữ pháp C++: Từ khóa else luôn ghép đôi với lệnh if gần nó nhất phía trước chưa có else (dẫn đến lỗi Dangling Else nếu lập trình viên không dùng cặp ngoặc nhọn {}).'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'if...else if ladder', val: 'Cấu trúc đa phương án, kiểm tra từ trên xuống và thoát khi gặp nhánh true đầu tiên' },
          { key: 'Thứ tự điều kiện', val: 'Bắt buộc xếp từ khắt khe nhất đến lỏng nhất (hoặc ngược lại)' },
          { key: 'Dangling Else', val: 'Luôn dùng {} để phân định rõ nhánh else thuộc về if nào' },
          { key: 'Guard Clauses', val: 'Kiểm tra dữ liệu rác trước, thoát sớm (early exit) để code trong sáng' }
        ],
        coreTakeaway: 'Khi đối mặt với bài toán đa lựa chọn, hãy giữ code sạch bằng Guard Clauses kiểm tra lỗi trước, xếp thang điều kiện theo thứ tự khắt khe giảm dần và luôn dùng ngoặc nhọn để bảo vệ cấu trúc.'
      },
      checklist: [
        'Tôi hiểu nguyên lý loại trừ của thang điều kiện if...else if.',
        'Tôi biết cách sắp xếp thứ tự các điều kiện hợp lý tránh để nhánh trước nuốt nhánh sau.',
        'Tôi áp dụng kỹ thuật lính gác (Guard Clauses) để bẫy lỗi dữ liệu đầu vào.',
        'Tôi tránh được lỗi Dangling Else bằng thói quen luôn dùng cặp ngoặc nhọn {}.'
      ],
      extendedChallenge: {
        title: 'Bộ máy tính thuế thu nhập cá nhân (TNCN) lũy tiến từng phần',
        scenario: 'Biểu thuế TNCN tại Việt Nam áp dụng lũy tiến từng phần:\n- Đến 5 triệu: 5%\n- Trên 5 tr đến 10 tr: 10%\n- Trên 10 tr đến 18 tr: 15%\n- Trên 18 tr đến 32 tr: 20%\n- Trên 32 tr: 25%.',
        challengeTask: 'Viết chương trình nhập vào thu nhập chịu thuế của một kỹ sư IT (ví dụ: 25,000,000 VND). Tính chính xác số thuế phải nộp theo từng bậc lũy tiến chứ không được nhân toàn bộ mức thu nhập với một mức thuế suất duy nhất.',
        thoughtGuidance: 'Tách từng phần thu nhập rơi vào từng khoảng bậc thang để nhân với thuế suất tương ứng rồi cộng dồn lại.'
      }
    },
    {
      id: 'CH03-L03',
      lessonNumber: 3,
      chapterNumber: 3,
      title: 'Cấu Trúc Lựa Chọn switch...case & Hiện Tượng Fall-Through',
      readingTimeMinutes: 45,
      moodleType: 'VPL Bài tập Menu chọn món / Xác định số ngày trong tháng',
      objectives: [
        'Hiểu cú pháp và cơ chế hoạt động của cấu trúc lựa chọn rẽ nhánh switch...case.',
        'Nắm vững điều kiện ràng buộc: Biểu thức kiểm tra trong switch bắt buộc phải có giá trị nguyên (int, char, enum), không dùng được cho số thực (float/double) hay chuỗi (string).',
        'Giải thích vai trò sống còn của từ khóa break và nhãn mặc định default.',
        'Phân tích hiện tượng trôi lệnh (Fall-through) khi quên từ khóa break và ứng dụng cố ý gom nhóm các case có chung xử lý.',
        'Xây dựng chương trình Menu điều khiển console chuyên nghiệp và thuật toán xác định số ngày trong tháng.'
      ],
      prerequisites: [
        'Đã học xong Bài 1 & 2 của Chương 3 (Hiểu rõ tư duy rẽ nhánh và các kiểu dữ liệu cơ bản).'
      ],
      leadIn: {
        hook: 'Khi bạn gọi điện đến tổng đài: "Nhấn phím 1 để gặp bộ phận kỹ thuật, phím 2 để thanh toán cước, phím 3 để gặp tổng đài viên...". Nếu viết bằng if...else if bạn sẽ phải gõ: if (choice == 1) ... else if (choice == 2)... lặp đi lặp lại rất mệt mỏi.',
        question: 'Có cấu trúc nào chuyên biệt, đẹp mắt và tốc độ tối ưu hơn để so sánh trực tiếp một biến với một danh sách các giá trị nguyên cố định hay không?',
        realWorldScenario: 'Đó chính là cấu trúc `switch...case`! Nó hoạt động hệt như một bảng chuyển mạch (Switchboard): biến điều khiển nhảy thẳng đến đúng nhãn `case` khớp với nó mà không cần duyệt tuần tự qua các nhánh khác.'
      },
      theorySections: [
        {
          title: '1. Cú pháp & Cơ chế hoạt động của switch...case',
          content: 'Cú pháp chuẩn:\n```cpp\nswitch (bieu_thuc_nguyen) {\n    case gia_tri_1:\n        // Cac cau lenh khi bieu_thuc == gia_tri_1\n        break; // Thoat khoi switch\n    case gia_tri_2:\n        // Cac cau lenh khi bieu_thuc == gia_tri_2\n        break;\n    default:\n        // Chay khi khong co case nao khop\n        break;\n}\n```\nĐặc điểm cơ chế:\n1. Máy tính đánh giá `bieu_thuc_nguyen`.\n2. Nhảy trực tiếp đến nhãn `case` có giá trị trùng khớp.\n3. Thực hiện các câu lệnh cho đến khi gặp từ khóa `break` thì thoát ra khỏi switch.\n4. Nếu không có case nào khớp, khối `default` sẽ được kích hoạt.',
          keyPoints: [
            'BẮT BUỘC KIỂU NGUYÊN: Biểu thức trong switch chỉ được là số nguyên (int, short, long), ký tự (char) hoặc kiểu liệt kê (enum). TUYỆT ĐỐI KHÔNG DÙNG ĐƯỢC CHO float, double hay string!',
            'Giá trị sau chữ case phải là HẰNG SỐ CỐ ĐỊNH tại thời điểm biên dịch, không thể là một biến hay một biểu thức chứa biến.'
          ]
        },
        {
          title: '2. Vai trò của từ khóa break & Hiện tượng trôi lệnh (Fall-Through)',
          content: 'Trong C++, nhãn `case` chỉ đóng vai trò như một "cột mốc đánh dấu vị trí nhảy vào" (Jump label). Sau khi nhảy vào, nó sẽ tiếp tục trượt dài chạy xuyên qua TẤT CẢ các câu lệnh của các case phía dưới cho đến khi gặp dấu ngoặc nhọn đóng `}` hoặc gặp lệnh `break`.\n\nHiện tượng này gọi là Hiện tượng trôi lệnh (Fall-through).\n- Nếu bạn vô tình quên lệnh `break`: Các case phía dưới sẽ bị thực thi oan uổng!\n- Nếu bạn cố ý tận dụng Fall-through: Ta có thể gom nhóm nhiều case có chung một hành vi xử lý (ví dụ: các tháng có 31 ngày).'
        },
        {
          title: '3. Ứng dụng gom nhóm case (Tận dụng Fall-Through có chủ đích)',
          content: 'Bài toán: Xác định tháng m có bao nhiêu ngày (năm không nhuận):\n```cpp\nswitch (month) {\n    case 1: case 3: case 5: case 7: case 8: case 10: case 12:\n        days = 31;\n        break; // Dung lai o day\n    case 4: case 6: case 9: case 11:\n        days = 30;\n        break;\n    case 2:\n        days = 28;\n        break;\n    default:\n        cout << "Thang khong hop le!";\n}\n```\nKhi `month == 1`, nó trôi từ case 1 qua 3, 5, 7, 8, 10 đến case 12, gán `days = 31` và gặp `break` để thoát. Code cực kỳ gọn gàng và tường minh!'
        },
        {
          title: '4. Khi nào dùng switch...case vs Khi nào dùng if...else if?',
          content: 'Bảng so sánh quyết định thiết kế:\n- DÙNG `switch...case`: Khi so sánh ĐẲNG THỨC (`==`) giữa MỘT biến số nguyên/char với một tập hợp các giá trị hằng số cố định đã biết trước (ví dụ: Menu lựa chọn, mã lỗi, phím bấm điều khiển, tháng trong năm).\n- DÙNG `if...else if`: Khi cần so sánh KHOẢNG giá trị (`>`, `<`, `>=`), biểu thức điều kiện phức tạp kết hợp nhiều biến (`a > 5 && b < 10`), hoặc khi làm việc với số thực `float`/`double` và chuỗi `string`.'
        }
      ],
      examples: [
        {
          title: 'Ví dụ 1: Ứng dụng Máy tính cầm tay đơn giản (Simple Calculator)',
          problem: 'Viết chương trình nhập vào 2 số thực a, b và một ký tự phép toán (+, -, *, /). Sử dụng switch...case để tính và in ra kết quả phép tính tương ứng.',
          analysis: {
            idea: 'Ký tự toán tử op là kiểu char (bản chất là số nguyên ASCII) nên dùng switch(op) rất tự nhiên. Cần kiểm tra b != 0 khi thực hiện phép chia.',
            input: 'a (double), b (double), op (char)',
            output: 'Kết quả của a op b hoặc thông báo lỗi nếu phép toán không hợp lệ hoặc chia cho 0.',
            algorithm: 'Bước 1: Nhập a, op, b.\nBước 2: switch (op) qua các case \'+\', \'-\', \'*\', \'/\'.\nBước 3: Ở case \'/\', kiểm tra b == 0 thì in lỗi, ngược lại tính a / b.\nBước 4: Nhánh default xử lý khi người dùng nhập ký tự không phải 4 phép toán trên.'
          },
          code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double a = 0.0, b = 0.0;
    char op = ' ';

    cout << "=== MAY TINH CAM TAY MINI ===" << endl;
    cout << "Nhap bieu thuc (Vi du: 15.5 + 4.5): ";
    cin >> a >> op >> b;

    cout << fixed << setprecision(2);

    switch (op) {
        case '+':
            cout << "=> Ket qua: " << a << " + " << b << " = " << (a + b) << endl;
            break;

        case '-':
            cout << "=> Ket qua: " << a << " - " << b << " = " << (a - b) << endl;
            break;

        case '*':
            cout << "=> Ket qua: " << a << " * " << b << " = " << (a * b) << endl;
            break;

        case '/':
            if (b == 0.0) {
                cout << "[LOI]: Khong the thuc hien phep chia cho 0!" << endl;
            } else {
                cout << "=> Ket qua: " << a << " / " << b << " = " << (a / b) << endl;
            }
            break;

        default:
            cout << "[LOI]: Phep toan '" << op << "' khong hop le! Chi chap nhan +, -, *, /." << endl;
            break;
    }

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'switch (op)',
              explanation: 'Biến op có kiểu dữ liệu char, được biểu diễn bằng mã số ASCII nguyên nên hoàn toàn hợp lệ trong lệnh switch.'
            },
            {
              lineOrBlock: 'case \'+\': ... break;',
              explanation: 'Các nhãn case dùng dấu nháy đơn \'+\' để chỉ định ký tự hằng số. Lệnh break đảm bảo sau khi cộng xong sẽ thoát ra ngay, không chạy tiếp xuống case \'-\'.'
            },
            {
              lineOrBlock: 'default:',
              explanation: 'Bắt tất cả các ký tự lạ nằm ngoài 4 phép toán chuẩn và in thông báo lỗi thân thiện.'
            }
          ],
          executionResult: {
            sampleInput: '10.0 / 4.0',
            sampleOutput: `=== MAY TINH CAM TAY MINI ===
Nhap bieu thuc (Vi du: 15.5 + 4.5): 10.0 / 4.0
=> Ket qua: 10.00 / 4.00 = 2.50`
          },
          analysisOfResult: 'Trình biên dịch bắt ký tự \'/\', nhảy vào case \'/\', kiểm tra b khác 0 và in kết quả 2.50, sau đó gặp break và kết thúc chương trình an toàn.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Đọc số nguyên có 1 chữ số',
          task: 'Nhập một số nguyên từ 0 đến 9. Sử dụng switch...case in ra cách đọc chữ tương ứng (Ví dụ: 0 -> "Khong", 1 -> "Mot"...). Các số ngoài phạm vi in "Khong hop le".',
          hints: ['switch(n) voi case 0, case 1, ..., case 9 va default.'],
          expectedOutput: 'Nhap so: 5 -> Ket qua: Nam'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Hệ thống Menu chọn món quán cà phê',
          task: 'In ra menu 4 món:\n1. Cà phê sữa (25k)\n2. Trà đào (30k)\n3. Nước cam (35k)\n4. Thoát.\nNgười dùng nhập số lựa chọn. Dùng switch...case in ra món đồ uống và số tiền tương ứng.',
          hints: ['Nhớ thêm lệnh break ở mỗi case để không bị in trùng món!'],
          expectedOutput: 'Chon: 2 -> Ban da chon Tra dao. Gia: 30,000 VND'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Xác định số ngày của tháng xét cả năm nhuận',
          task: 'Nhập vào tháng m (1-12) và năm y. Áp dụng kỹ thuật gom nhóm case để tính số ngày trong tháng. Đối với tháng 2, dùng if kiểm tra năm nhuận để trả về 29 ngày, ngược lại 28 ngày.',
          hints: ['Gom nhóm case 1, 3, 5, 7, 8, 10, 12 ra 31 ngày.', 'Thang 2 kiem tra: (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)).'],
          expectedOutput: 'Thang 2 nam 2024 -> Co 29 ngay (Nam nhuan)'
        }
      ],
      commonErrors: [
        {
          name: 'Quên từ khóa break gây ra lỗi trôi lệnh ngoài ý muốn',
          symptom: 'Người dùng chọn số 1 nhưng chương trình in ra cả kết quả của lựa chọn 1, lựa chọn 2 và lựa chọn 3!',
          rootCause: 'Sau khi thực hiện xong câu lệnh của case 1, do không có lệnh break, con trỏ lệnh tiếp tục rơi tự do xuống thực hiện các lệnh của case 2 và case 3.',
          howToFix: 'Luôn kết thúc mỗi khối lệnh của case bằng từ khóa break; (trừ trường hợp cố ý gom nhóm case).',
          badCode: `switch (choice) {
    case 1:
        cout << "Ban chon Huong A\\n"; // Quen break!
    case 2:
        cout << "Ban chon Huong B\\n";
        break;
}`,
          goodCode: `switch (choice) {
    case 1:
        cout << "Ban chon Huong A\\n";
        break; // AN TOAN: Ngat lenh ngay sau khi hoan thanh
    case 2:
        cout << "Ban chon Huong B\\n";
        break;
}`
        },
        {
          name: 'Dùng biến hoặc kiểu số thực float/double trong switch',
          symptom: 'Trình biên dịch báo lỗi đỏ: "switch quantity not an integer".',
          rootCause: 'C++ chỉ cho phép switch trên các kiểu dữ liệu nguyên (rời rạc). Số thực có vô hạn giá trị giữa 1.0 và 2.0 nên phần cứng máy tính không thể tạo bảng nhảy (jump table).',
          howToFix: 'Nếu cần so sánh số thực, bắt buộc phải dùng cấu trúc if...else if.',
          badCode: `double gpa = 8.5;
switch (gpa) { // LOI BIEN DICH: switch khong ho tro double!
    case 8.5: ...
}`,
          goodCode: `// Dung if...else if khi lam viec voi so thuc
if (gpa >= 8.5) {
    cout << "Gioi";
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Phát hiện kiểu dữ liệu hợp lệ trong switch',
          description: 'Trong các khai báo sau, khai báo biến nào KHÔNG THỂ dùng làm biểu thức kiểm tra trong switch?\n1. int choice = 1;\n2. char key = \'a\';\n3. double score = 7.5;\n4. bool isReady = true;\n5. string name = "An";'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Dự đoán output khi thiếu break',
          description: 'Cho biết kết quả in ra màn hình của đoạn code sau khi n = 2:\nswitch (n) {\n    case 1: cout << "One ";\n    case 2: cout << "Two ";\n    case 3: cout << "Three ";\n    default: cout << "End";\n}'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Xác định thứ trong tuần',
          description: 'Nhập một số nguyên từ 2 đến 8. In ra tên thứ trong tuần tương ứng: 2 -> "Thu Hai", 3 -> "Thu Ba", ..., 8 -> "Chu Nhat". Dùng default để báo lỗi nếu nhập số khác.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Chuyển đổi điểm số hệ 10 sang thang điểm chữ (A, B, C, D, F)',
          description: 'Nhập điểm tổng kết nguyên từ 0 đến 100. Hãy dùng switch...case để chuyển sang điểm chữ:\n- 90 - 100: A\n- 80 - 89: B\n- 70 - 79: C\n- 60 - 69: D\n- Dưới 60: F\nGợi ý: Hãy chia nguyên điểm số cho 10 (score / 10) để đưa về các giá trị rời rạc 10, 9, 8, 7, 6!'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Kiểu dữ liệu nào sau đây KHÔNG ĐƯỢC PHÉP dùng trong biểu thức switch?',
          options: ['int', 'char', 'double', 'short'],
          correctIndex: 2,
          explanation: 'Lệnh switch trong C++ chỉ chấp nhận các kiểu dữ liệu nguyên (hoặc enum). Kiểu double và float không được hỗ trợ.'
        },
        {
          id: 2,
          question: 'Điều gì xảy ra nếu quên không viết lệnh break ở cuối một case?',
          options: [
            'Chương trình báo lỗi biên dịch và không thể chạy.',
            'Chương trình tự động dừng lại và thoát khỏi switch.',
            'Hiện tượng Fall-through: Các câu lệnh của case kế tiếp sẽ tự động bị thực thi cho tới khi gặp break.',
            'Máy tính tự động khởi động lại.'
          ],
          correctIndex: 2,
          explanation: 'Nếu không có break, chương trình sẽ tiếp tục trôi xuống thực hiện các dòng lệnh của các case tiếp theo (Fall-through).'
        },
        {
          id: 3,
          question: 'Nhãn default trong switch có bắt buộc phải có không?',
          options: [
            'Bắt buộc, nếu thiếu chương trình sẽ báo lỗi cú pháp.',
            'Không bắt buộc, nhưng nên có để xử lý các trường hợp dữ liệu ngoại lệ ngoài dự tính.',
            'Chỉ được dùng tối đa 3 nhãn default trong một switch.',
            'Chỉ dùng được khi có kiểu dữ liệu char.'
          ],
          correctIndex: 1,
          explanation: 'Nhãn default là tùy chọn (optional), không bắt buộc về mặt cú pháp nhưng là thói quen lập trình tốt để xử lý ngoại lệ.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'switch(nguyen)', val: 'Chỉ nhận kiểu nguyên (int, char, enum), không dùng float/double/string' },
          { key: 'case HANG_SO:', val: 'Nhãn giá trị hằng số cố định tại thời điểm biên dịch' },
          { key: 'break;', val: 'Ngắt ngay lập tức và thoát khỏi switch' },
          { key: 'default:', val: 'Nhánh dự phòng khi không có case nào trùng khớp' },
          { key: 'Fall-through', val: 'Hiện tượng trôi lệnh khi thiếu break, có thể tận dụng để gom nhóm case' }
        ],
        coreTakeaway: 'Dùng switch...case khi so sánh bằng trên tập giá trị nguyên rời rạc; luôn kết thúc case bằng break trừ phi chủ ý gom nhóm, và dùng if...else if khi cần so sánh khoảng hay số thực.'
      },
      checklist: [
        'Tôi ghi nhớ điều kiện bắt buộc của biểu thức switch (chỉ nhận số nguyên hoặc char).',
        'Tôi hiểu rõ vai trò ngắt lệnh của từ khóa break.',
        'Tôi biết cách gom nhóm nhiều case có cùng xử lý bằng cơ chế Fall-through.',
        'Tôi biết khi nào nên chọn switch...case và khi nào nên chọn if...else if.'
      ],
      extendedChallenge: {
        title: 'Bộ giải mã lệnh giao tiếp Robot điều khiển từ xa',
        scenario: 'Một robot dò đường nhận tín hiệu điều khiển từ bàn phím dưới dạng ký tự: \'W\' hoặc \'w\' (Tiến lên), \'S\' hoặc \'s\' (Lùi lại), \'A\' hoặc \'a\' (Rẽ trái), \'D\' hoặc \'d\' (Rẽ phải), \'P\' hoặc \'p\' (Dừng khẩn cấp).',
        challengeTask: 'Dùng switch...case kết hợp gom nhóm chữ hoa và chữ thường (ví dụ: case \'W\': case \'w\':) để điều khiển tọa độ (x, y) của Robot trên lưới tọa độ và in vận tốc tương ứng. Báo còi hú (default) nếu nhận lệnh lạ.',
        thoughtGuidance: 'Gom nhóm 2 case ký tự hoa và thường liên tiếp nhau không có break ở giữa để xử lý thống nhất.'
      }
    }
  ]
};
