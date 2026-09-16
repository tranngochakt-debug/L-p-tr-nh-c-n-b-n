import { LessonContent, ChapterData } from './chapter1Data.ts';

export const CHAPTER_9_DATA: ChapterData = {
  chapterId: 9,
  chapterCode: 'CH09',
  title: 'Phương Pháp Phân Tích, Giải Quyết Bài Toán & Kỹ Năng Debug',
  summary: 'Hình thành tư duy kỹ sư phần mềm chuyên nghiệp: Chuyển đổi từ thói quen lập trình mò mẫm \"gõ code ngay lập tức\" sang quy trình 5 bước kỹ thuật có hệ thống: Xác định tường minh Input/Output/Ràng buộc dữ liệu; Phác thảo thuật toán độc lập ngôn ngữ bằng Mã giả (Pseudocode) và Lưu đồ khối (Flowchart); Thiết kế bộ ca kiểm thử (Testcases) bao phủ các trường hợp biên (Edge cases) và dữ liệu bất thường; Phân loại chính xác 3 loại lỗi kinh điển (Syntax Errors, Runtime Errors, Logic Errors); và Làm chủ kỹ thuật gỡ lỗi thực chiến (Debugging Mastery): kỹ thuật in vết (Print Debugging), phân tích thông báo lỗi biên dịch compiler diagnostics, và sử dụng Debugger chuyên nghiệp với Điểm dừng (Breakpoint), Step Over, Step Into và Cửa sổ theo dõi biến (Watch).',
  totalLessons: 2,
  lessons: [
    // -------------------------------------------------------------
    // BÀI 1: PHƯƠNG PHÁP LUẬN PHÂN TÍCH BÀI TOÁN & THIẾT KẾ THUẬT TOÁN (L29)
    // -------------------------------------------------------------
    {
      id: 'CH09-L01',
      lessonNumber: 1,
      chapterNumber: 9,
      title: 'Phương Pháp Luận Phân Tích Bài Toán: Từ Ngôn Ngữ Tự Nhiên Đến Mã Giả & Lưu Đồ Khối',
      readingTimeMinutes: 50,
      moodleType: 'Bài tập phân tích ca thực tế: Hệ thống tính cước taxi lũy tiến & Xây dựng bảng Testcases',
      objectives: [
        'Hiểu và từ bỏ thói quen sai lầm nguy hiểm nhất của người mới học lập trình: Vừa đọc đề đã mở IDE gõ code ngay.',
        'Nắm vững Quy trình 5 bước kỹ thuật giải quyết bài toán: 1. Làm rõ Input/Output/Ràng buộc; 2. Thiết kế Testcases (Normal, Edge, Invalid); 3. Xây dựng thuật toán (Mã giả / Lưu đồ); 4. Cài đặt C++; 5. Kiểm thử và Tối ưu.',
        'Thành thạo kỹ thuật viết Mã giả (Pseudocode) chuẩn hóa, độc lập với cú pháp của bất kỳ ngôn ngữ lập trình cụ thể nào.',
        'Hiểu và vẽ đúng các ký hiệu chuẩn mực của Lưu đồ khối (Flowchart): Bắt đầu/Kết thúc (Oval), Xử lý tính toán (Hình chữ nhật), Điều kiện rẽ nhánh (Hình thoi), Nhập/Xuất dữ liệu (Hình bình hành).',
        'Tư duy chủ động phát hiện các ca biên (Edge Cases) nguy hiểm: Số âm, giá trị 0, giới hạn kiểu dữ liệu, mảng rỗng, chuỗi trống.'
      ],
      prerequisites: [
        'Đã học xong toàn bộ kiến thức nền tảng: Biến, Điều kiện if/switch, Vòng lặp for/while, Chuỗi, Mảng và Hàm (CH01 - CH08).'
      ],
      leadIn: {
        hook: 'Bạn có bao giờ bắt tay xây một ngôi nhà nhiều tầng mà không cần bản vẽ thiết kế kiến trúc, vừa đổ móng vừa nghĩ xem phòng ngủ đặt ở đâu? Nếu làm như vậy, ngôi nhà chắc chắn sẽ sập! Lập trình cũng hệt như vậy: 1 giờ suy nghĩ và phác thảo thuật toán trên giấy sẽ giúp bạn tiết kiệm 10 giờ sửa bug trong nước mắt.',
        question: 'Tại sao khi đi phỏng vấn tuyển dụng tại các tập đoàn công nghệ lớn (Google, Meta, VNG, FPT), ứng viên luôn được yêu cầu giải thích giải thuật trên bảng trắng (Whiteboard Coding) và viết mã giả trước khi được chạm tay vào bàn phím gõ code thật?',
        realWorldScenario: 'Hệ thống tính cước xe công nghệ (Grab, Be) hoặc cước điện thoại viễn thông: Bảng giá lũy tiến phức tạp thay đổi theo giờ cao điểm, cự ly km đầu tiên, các km tiếp theo và phụ phí mưa bão. Nếu lập trình viên không vẽ bảng phân tích I/O và rẽ nhánh lưu đồ rõ ràng, công ty có thể thất thoát hàng tỷ đồng hoặc bị khách hàng kiện cáo vì tính sai tiền cước.'
      },
      theorySections: [
        {
          title: '1. Quy trình 5 bước Kỹ thuật Giải quyết Bài toán Lập trình',
          content: 'Một kỹ sư phần mềm thực thụ luôn tuân thủ nghiêm ngặt **Quy trình 5 bước** sau trước khi viết bất kỳ dòng mã nguồn nào:\n\n1. **Bước 1 - Phân tích yêu cầu (Requirements Analysis):**\n   - **Input (Đầu vào):** Dữ liệu cần nhập gồm những gì? Kiểu dữ liệu nào phù hợp (`int`, `long long`, `double`, `string`)?\n   - **Output (Đầu ra):** Kết quả cần in ra là gì? Định dạng hiển thị cụ thể ra sao (lấy mấy chữ số thập phân, in hoa hay in thường)?\n   - **Ràng buộc (Constraints):** Giới hạn của dữ liệu $N \\le 10^5$ hay $N \\le 10^9$? Thời gian chạy cho phép ($1.0$ giây)? Có số âm hay không?\n\n2. **Bước 2 - Thiết kế Bộ Ca kiểm thử (Testcases Design):**\n   - Ca thông thường (Standard Case): Dữ liệu điển hình thông dụng.\n   - Ca biên ngoại lệ (Edge Case): Giá trị cực tiểu, cực đại, $N = 0$, $N = 1$, chuỗi rỗng.\n   - Ca dữ liệu không hợp lệ (Invalid Case): Số âm khi yêu cầu số dương, chia cho 0.\n\n3. **Bước 3 - Thiết kế Thuật toán (Algorithm Design):**\n   - Diễn đạt giải thuật bằng ngôn ngữ tự nhiên, Mã giả (Pseudocode) hoặc Lưu đồ khối (Flowchart).\n\n4. **Bước 4 - Cài đặt Mã nguồn (Coding Implementation):**\n   - Chuyển đổi mã giả sang cú pháp C++ chuẩn mực, đặt tên biến có ý nghĩa (CamelCase), phân tách hàm theo nguyên lý DRY.\n\n5. **Bước 5 - Kiểm thử, Rà soát & Tối ưu (Verification & Refactoring):**\n   - Chạy thử toàn bộ bộ Testcases đã xây dựng ở Bước 2. Kiểm tra rò rỉ bộ nhớ và độ phức tạp thuật toán.'
        },
        {
          title: '2. Kỹ thuật viết Mã giả (Pseudocode)',
          content: '**Mã giả (Pseudocode)** là phương pháp mô tả thuật toán bằng sự kết hợp giữa ngôn ngữ tự nhiên và các cấu trúc điều khiển lập trình cơ bản, giúp con người dễ dàng đọc hiểu giải thuật mà không bị phân tâm bởi các quy tắc cú pháp khắt khe (dấu chấm phẩy, thư viện include, kiểu dữ liệu chi tiết):\n\n*Quy ước viết Mã giả thông dụng:*\n- Nhập/Xuất: `NHẬP (INPUT)`, `XUẤT (OUTPUT / PRINT)`\n- Điều kiện: `NẾU (IF) ... THÌ (THEN) ... NGƯỢC LẠI (ELSE)`\n- Lặp: `LẶP VỚI (FOR) ... TỪ ... ĐẾN ...`, `TRONG KHI (WHILE) ... LÀM ...`\n- Gán giá trị: Dùng mũi tên `<-` hoặc từ khóa `GÁN (SET)`\n- Hàm: `HÀM (FUNCTION)`, `TRẢ VỀ (RETURN)`\n\n*Ví dụ mã giả tìm số lớn nhất của 3 số a, b, c:*\n```text\nTHUẬT TOÁN TimSoLonNhat(a, b, c):\n    maxVal <- a\n    NẾU b > maxVal THÌ\n        maxVal <- b\n    NẾU c > maxVal THÌ\n        maxVal <- c\n    TRẢ VỀ maxVal\n```'
        },
        {
          title: '3. Lưu đồ khối (Flowchart) & Kỹ thuật nhận diện Ca biên (Edge Cases)',
          content: '**Lưu đồ khối (Flowchart)** trực quan hóa luồng đi của dữ liệu và các quyết định logic qua các hình khối hình học chuẩn ISO:\n- **Hình Oval (Terminator):** Bắt đầu (`Start`) hoặc Kết thúc (`End`) chương trình.\n- **Hình Bình hành (Input/Output):** Thao tác đọc dữ liệu vào hoặc in ra màn hình.\n- **Hình Chữ nhật (Process):** Thao tác tính toán, gán giá trị, xử lý nội bộ.\n- **Hình Thoi (Decision):** Đưa ra điều kiện so sánh (luôn có 2 nhánh thoát: `True / Đúng` và `False / Sai`).\n\n**Tư duy săn lùng Ca biên (Edge Cases):**\n- **Biên số học:** Số $0$, số âm, số vượt quá $2 \\times 10^9$ gây tràn số `int` (cần dùng `long long`), số thực chia cho $0$.\n- **Biên cấu trúc:** Mảng có kích thước $N = 0$ hoặc $N = 1$; tìm kiếm phần tử nằm ngay vị trí đầu tiên $a[0]$ hoặc vị trí cuối cùng $a[N-1]$; chuỗi ký tự chỉ chứa toàn dấu cách.'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Thiết kế hệ thống tính cước Taxi lũy tiến đa nấc theo quy trình 5 bước',
          problem: 'Một hãng taxi áp dụng biểu giá cước như sau:\n- 1 km đầu tiên (Giá mở cửa): 14.000 VNĐ.\n- Từ km thứ 2 đến km thứ 10: 12.500 VNĐ/km.\n- Từ km thứ 11 trở đi: 10.000 VNĐ/km.\n- Nếu tổng quãng đường đi vượt quá 30 km, hành khách được giảm giá 10% trên tổng số tiền cước.\nViết chương trình hoàn chỉnh theo quy trình 5 bước kỹ sư phần mềm, kiểm soát dữ liệu đầu vào hợp lệ.',
          analysis: {
            input: 'Quãng đường di chuyển distance (số thực, đơn vị km). Ràng buộc: distance > 0.',
            output: 'Bảng chi tiết tính cước và tổng số tiền phải trả (làm tròn số nguyên hoặc 2 chữ số thập phân).',
            idea: 'Phân tích các nấc cước: Nấc 1 (1 km đầu), Nấc 2 (km 2 -> 10, tối đa 9 km), Nấc 3 (từ km 11 trở đi). Sau đó áp dụng chiết khấu nếu distance > 30.',
            algorithm: 'Bước 1: Kiểm tra distance <= 0 -> Báo lỗi dữ liệu không hợp lệ.\nBước 2: Nếu distance <= 1 -> fare = distance * 14000.\nBước 3: Nếu distance <= 10 -> fare = 14000 + (distance - 1) * 12500.\nBước 4: Nếu distance > 10 -> fare = 14000 + 9 * 12500 + (distance - 10) * 10000.\nBước 5: Nếu distance > 30 -> fare = fare * 0.90.\nBước 6: In kết quả chi tiết.'
          },
          code: `#include <iostream>
#include <iomanip>
using namespace std;

// =======================================================
// BẢNG TESTCASES THIẾT KẾ TRƯỚC KHI CODE:
// TC1 (Biên lỗi)   : distance = -5.0  -> Báo lỗi không hợp lệ
// TC2 (Biên mở cửa): distance = 0.8   -> 0.8 * 14000 = 11.200 VNĐ
// TC3 (Biên nấc 1) : distance = 1.0   -> 14.000 VNĐ
// TC4 (Nấc 2)      : distance = 5.0   -> 14000 + 4 * 12500 = 64.000 VNĐ
// TC5 (Biên nấc 2) : distance = 10.0  -> 14000 + 9 * 12500 = 126.500 VNĐ
// TC6 (Nấc 3)      : distance = 15.0  -> 126500 + 5 * 10000 = 176.500 VNĐ
// TC7 (Biên giảm giá): distance = 30.0 -> 126500 + 20 * 10000 = 326.500 VNĐ (chưa giảm)
// TC8 (Giảm 10%)   : distance = 40.0  -> (126500 + 30 * 10000) * 0.9 = 383.850 VNĐ
// =======================================================

// Hàm tính cước taxi theo các nấc lũy tiến
double calculateTaxiFare(double distance) {
    if (distance <= 0.0) {
        return -1.0; // Báo hiệu dữ liệu quãng đường không hợp lệ
    }

    double fare = 0.0;

    if (distance <= 1.0) {
        fare = distance * 14000.0;
    } else if (distance <= 10.0) {
        fare = 14000.0 + (distance - 1.0) * 12500.0;
    } else {
        // Vượt quá 10 km: 1 km đầu + 9 km nấc 2 + các km còn lại ở nấc 3
        fare = 14000.0 + (9.0 * 12500.0) + (distance - 10.0) * 10000.0;
    }

    // Xét chính sách giảm giá cho quãng đường dài (> 30 km)
    if (distance > 30.0) {
        fare = fare * 0.90; // Giảm 10%
    }

    return fare;
}

int main() {
    double distance = 0.0;

    cout << "========================================" << endl;
    cout << "  HE THONG TINH CUOC TAXI CONG NGHE    " << endl;
    cout << "========================================" << endl;
    cout << "Nhap quang duong da di chuyen (km): ";
    
    if (!(cin >> distance)) {
        cout << "[Loi]: Du lieu nhap vao phai la mot con so!\n";
        return 1;
    }

    double totalFare = calculateTaxiFare(distance);

    if (totalFare < 0.0) {
        cout << "[Loi]: Quang duong phai lon hon 0 km (Edge case invalid)!\n";
    } else {
        cout << fixed << setprecision(0);
        cout << "\n----------- HOA DON CHI TIET -----------" << endl;
        cout << "- Quang duong: " << fixed << setprecision(1) << distance << " km" << endl;
        cout << "- Gia mo cua (1 km dau)    : 14.000 VND" << endl;
        cout << "- Gia km 2 -> 10           : 12.500 VND/km" << endl;
        cout << "- Gia tu km 11 tro di      : 10.000 VND/km" << endl;
        
        if (distance > 30.0) {
            cout << "* UU DAI: Giam 10% tong hoa don (> 30 km) da duoc ap dung!" << endl;
        }

        cout << "----------------------------------------" << endl;
        cout << "=> TONG TIEN THANH TOAN: " << fixed << setprecision(0) 
             << totalFare << " VND" << endl;
        cout << "========================================" << endl;
    }

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'double calculateTaxiFare(double distance)',
              explanation: 'Đóng gói toàn bộ giải thuật tính toán vào một hàm độc lập, kiểm tra ràng buộc đầu vào ngay dòng đầu tiên.'
            },
            {
              lineOrBlock: '14000.0 + (9.0 * 12500.0) + (distance - 10.0) * 10000.0',
              explanation: 'Cách tính lũy tiến chuẩn xác từng nấc: nấc 1 là 1 km (14k), nấc 2 là 9 km tiếp theo (9 * 12.5k), phần dư ra nhân đơn giá 10k.'
            },
            {
              lineOrBlock: 'if (distance > 30.0) fare = fare * 0.90;',
              explanation: 'Áp dụng chiết khấu thương mại toàn đơn khi thỏa mãn điều kiện cự ly lớn.'
            }
          ],
          executionResult: {
            sampleInput: `35.5`,
            sampleOutput: `========================================
  HE THONG TINH CUOC TAXI CONG NGHE    
========================================
Nhap quang duong da di chuyen (km): 35.5

----------- HOA DON CHI TIET -----------
- Quang duong: 35.5 km
- Gia mo cua (1 km dau)    : 14.000 VND
- Gia km 2 -> 10           : 12.500 VND/km
- Gia tu km 11 tro di      : 10.000 VND/km
* UU DAI: Giam 10% tong hoa don (> 30 km) da duoc ap dung!
----------------------------------------
=> TONG TIEN THANH TOAN: 343350 VND
========================================`
          },
          analysisOfResult: 'Với 35.5 km: fare ban đầu = 14000 + 9*12500 + 25.5*10000 = 126500 + 255000 = 381500 VND. Sau khi giảm 10%: 381500 * 0.9 = 343350 VND. Khớp 100% với phân tích lý thuyết.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Xác định I/O và Ca biên cho bài toán tính điểm trung bình',
          task: 'Cho đề bài: \"Tính điểm trung bình học kỳ từ điểm Toán, Văn, Anh (thang điểm 10) và in ra xếp loại\". Hãy liệt kê đầy đủ Input, Output, Ràng buộc và 3 ca kiểm thử biên (Edge cases).',
          hints: ['Điểm âm < 0 hoặc > 10 là dữ liệu không hợp lệ. Điểm chạm đúng ngưỡng 5.0, 8.0 là ca biên xếp loại.'],
          expectedOutput: 'Bảng đặc tả I/O và danh sách Testcases hoàn chỉnh.'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Viết mã giả (Pseudocode) cho thuật toán tìm phần tử chẵn lớn nhất',
          task: 'Viết mã giả chi tiết cho bài toán: Cho mảng số nguyên A gồm N phần tử, tìm số chẵn lớn nhất trong mảng. Nếu mảng không có số chẵn nào thì thông báo không tìm thấy.',
          hints: ['Dùng cờ hiệu (flag) hoặc khởi tạo maxEven = giá trị âm vô cùng.'],
          expectedOutput: 'Mã giả chuẩn mực, thụt lề rõ ràng, độc lập cú pháp C++.'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Vẽ bảng ma trận Testcases cho thuật toán kiểm tra năm nhuận',
          task: 'Xây dựng bộ Testcases gồm ít nhất 6 trường hợp kiểm tra tính đúng đắn của thuật toán kiểm tra năm nhuận (bao gồm năm chia hết cho 4 nhưng không chia hết cho 100, năm chia hết cho 400, năm chia hết cho 100 nhưng không chia hết cho 400, và năm âm).',
          hints: ['Các năm kinh điển: 2000 (nhuận), 1900 (không nhuận), 2024 (nhuận), 2023 (không nhuận), -4 (không hợp lệ).'],
          expectedOutput: 'Bảng Testcases với cột Input, Expected Output và Lý do chọn ca đó.'
        }
      ],
      commonErrors: [
        {
          name: 'Nhầm lẫn giữa cự ly di chuyển và số km của từng nấc (Lỗi bậc thang)',
          symptom: 'Tính tiền cước taxi cho 15 km bằng cách lấy luôn 15 * 10000 thay vì bóc tách từng chặng.',
          rootCause: 'Không vẽ bảng phân rã khoảng giá trị dẫn đến tính sai công thức lũy tiến.',
          howToFix: 'Luôn trừ đi cự ly của các nấc trước đó (ví dụ: quãng đường nấc 3 = total - 10).',
          badCode: `if (distance > 10) {
    fare = distance * 10000; // SAI HOÀN TOÀN! Khách đi 10 km mất 126k, đi 11 km lại rẻ hơn chỉ mất 110k!
}`,
          goodCode: `if (distance > 10) {
    fare = 14000 + 9 * 12500 + (distance - 10) * 10000; // ĐÚNG LŨY TIẾN
}`
        },
        {
          name: 'Bỏ qua ca kiểm thử biên (Ignoring Edge Cases)',
          symptom: 'Chương trình chạy thử với vài ví dụ thông thường thì đúng, nhưng khi nộp bài lên hệ thống chấm tự động (Moodle/VPL/LeetCode) thì nhận kết quả Wrong Answer (WA) ở test ẩn.',
          rootCause: 'Chỉ test với số dương đẹp, không bao giờ test với số 0, số âm, hoặc giới hạn mảng rỗng.',
          howToFix: 'Luôn tạo sẵn danh sách Edge Cases và tự kiểm tra bằng tay trước khi nộp mã nguồn.',
          badCode: `double average(int a[], int n) {
    int sum = 0;
    for (int i = 0; i < n; ++i) sum += a[i];
    return (double)sum / n; // Crash sập chương trình chia cho 0 nếu N == 0!
}`,
          goodCode: `double average(int a[], int n) {
    if (n <= 0) return 0.0; // Bắt gọn Edge Case mảng rỗng N == 0
    int sum = 0;
    for (int i = 0; i < n; ++i) sum += a[i];
    return (double)sum / n;
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Các hình khối trong Lưu đồ chuẩn ISO',
          description: 'Hình bình hành, hình chữ nhật và hình thoi trong biểu đồ lưu đồ khối (Flowchart) đại diện cho các hành động xử lý nào trong chương trình?'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Tại sao cần viết Mã giả trước khi code?',
          description: 'Trình bày 3 lý do vì sao kỹ sư phần mềm chuyên nghiệp luôn phác thảo mã giả (Pseudocode) trên giấy hoặc tài liệu thiết kế trước khi bắt đầu gõ code trên IDE.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Thiết kế thuật toán tính tiền điện sinh hoạt bậc thang EVN',
          description: 'Viết mã giả và xây dựng bộ 5 Testcases kiểm thử cho hệ thống tính tiền điện sinh hoạt bậc thang (Bậc 1: 0-50 kWh giá 1.806đ; Bậc 2: 51-100 kWh giá 1.866đ; Bậc 3: 101-200 kWh giá 2.167đ; Bậc 4: từ 201 kWh trở lên giá 2.729đ. Thuế VAT 8%).'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Thiết kế thuật toán rút tiền ATM tối ưu số tờ tiền',
          description: 'Viết mã giả và vẽ lưu đồ khối cho máy ATM thực hiện giao dịch rút số tiền S (S chia hết cho 50.000). Máy có các mệnh giá 500k, 200k, 100k, 50k với số lượng tờ không giới hạn. Yêu cầu chi trả sao cho tổng số tờ tiền rút ra là ít nhất (Thuật toán Tham lam - Greedy).'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Ký hiệu hình thoi (Diamond) trong sơ đồ lưu đồ khối (Flowchart) đại diện cho thao tác nào?',
          options: [
            'Nhập hoặc xuất dữ liệu (Input/Output)',
            'Điểm bắt đầu hoặc kết thúc chương trình',
            'Đưa ra quyết định điều kiện rẽ nhánh (Decision: Đúng hoặc Sai)',
            'Thực hiện một phép tính gán biến'
          ],
          correctIndex: 2,
          explanation: 'Hình thoi dùng để kiểm tra điều kiện logic (như if/else), luôn có ít nhất 2 mũi tên rẽ nhánh đi ra: Đúng (True/Yes) và Sai (False/No).'
        },
        {
          id: 2,
          question: 'Thuật ngữ \"Edge Case\" (Ca kiểm thử biên) trong kỹ thuật phần mềm có nghĩa là gì?',
          options: [
            'Một lỗi sai cú pháp do người lập trình gõ nhầm',
            'Một trường hợp dữ liệu đầu vào nằm ở ranh giới cực hạn (cực tiểu, cực đại, số 0, rỗng) nơi lỗi logic dễ phát sinh nhất',
            'Một thuật toán chạy trên viền cạnh của đồ thị',
            'Trường hợp người dùng tắt máy tính đột ngột'
          ],
          correctIndex: 1,
          explanation: 'Edge Case là các ca thử thách hệ thống ở những điểm ranh giới nhạy cảm (như N = 0, mảng 1 phần tử, giá trị âm, tràn số), nơi các thuật toán non nớt hay bị sập nhất.'
        },
        {
          id: 3,
          question: 'Mã giả (Pseudocode) có bắt buộc phải tuân theo các quy tắc cú pháp như dấu chấm phẩy, thư viện include của C++ không?',
          options: [
            'Có, nếu không trình biên dịch sẽ báo lỗi',
            'Không, mã giả được viết để con người đọc hiểu giải thuật, hoàn toàn độc lập với ngôn ngữ lập trình cụ thể',
            'Chỉ bắt buộc đối với các bài toán có vòng lặp',
            'Bắt buộc phải viết bằng tiếng Anh'
          ],
          correctIndex: 1,
          explanation: 'Mã giả tập trung thể hiện bản chất tư duy và logic của thuật toán cho con người trao đổi và đánh giá, không chịu sự ràng buộc cú pháp của compiler.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Quy trình 5 bước', val: '1. Hiểu I/O -> 2. Testcases -> 3. Thuật toán/Mã giả -> 4. Code C++ -> 5. Kiểm thử' },
          { key: 'Mã giả (Pseudocode)', val: 'Ngôn ngữ mô tả thuật toán tự nhiên, cấu trúc hóa, độc lập cú pháp' },
          { key: 'Lưu đồ (Flowchart)', val: 'Oval (Bắt đầu/Kết thúc), Hình chữ nhật (Tính toán), Hình thoi (Rẽ nhánh)' },
          { key: 'Ca biên (Edge Case)', val: 'Dữ liệu tại ranh giới cực hạn: 0, số âm, rỗng, giới hạn kiểu' },
          { key: 'Tư duy kỹ sư', val: 'Phác thảo và suy nghĩ thông suốt trên giấy trước khi chạm vào bàn phím' }
        ],
        coreTakeaway: 'Lập trình viên nghiệp dư viết code rồi mới nghĩ; Kỹ sư phần mềm chuyên nghiệp phân tích kỹ càng, vẽ lưu đồ, thiết kế Testcases xong mới viết code.'
      },
      checklist: [
        'Tôi hiểu và tuân thủ Quy trình 5 bước giải quyết bài toán.',
        'Tôi biết cách viết Mã giả (Pseudocode) sáng sủa, độc lập ngôn ngữ.',
        'Tôi nhận biết và vẽ đúng các khối hình của Lưu đồ Flowchart.',
        'Tôi luôn chủ động liệt kê các Ca kiểm thử biên (Edge Cases) trước khi code.'
      ],
      extendedChallenge: {
        title: 'Thiết kế thuật toán điều khiển đèn tín hiệu giao thông thông minh',
        scenario: 'Tại một ngã tư phức tạp, hệ thống đèn giao thông cần tự động điều chỉnh thời gian đèn xanh dựa trên mật độ xe đo được từ camera.',
        challengeTask: 'Thiết kế bảng phân tích I/O, viết mã giả và vẽ lưu đồ cho thuật toán điều khiển đèn giao thông: Tự động ưu tiên làn xe có xe cứu thương hoặc mật độ xe ùn ứ vượt quá 80%.',
        thoughtGuidance: 'Xác định rõ các biến trạng thái và điều kiện ưu tiên ngắt khẩn cấp.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 2: KỸ THUẬT KIỂM THỬ & GỠ LỖI (DEBUGGING MASTERY) (L30)
    // -------------------------------------------------------------
    {
      id: 'CH09-L02',
      lessonNumber: 2,
      chapterNumber: 9,
      title: 'Kỹ Thuật Kiểm Thử & Gỡ Lỗi Chuyên Nghiệp (Debugging Mastery)',
      readingTimeMinutes: 55,
      moodleType: 'Thử thách Bug Hunt: Truy tìm và sửa chữa 5 lỗi kinh điển trong chương trình cho trước',
      objectives: [
        'Phân biệt bản chất và triệu chứng của 3 nhóm lỗi lập trình cơ bản: Lỗi biên dịch (Syntax/Compile Errors), Lỗi khi chạy (Runtime Errors) và Lỗi logic (Semantic/Logic Errors).',
        'Làm chủ kỹ năng đọc hiểu thông báo lỗi của trình biên dịch (Compiler Diagnostics): Phân biệt Error vs Warning, định vị chính xác dòng code và cột gây lỗi.',
        'Áp dụng thành thạo kỹ thuật in vết (Print Debugging / Trace Logging) với std::cout để theo dõi trạng thái biến và dòng điều khiển chương trình.',
        'Hiểu và sử dụng công cụ Debugger chuyên nghiệp: Khái niệm Điểm dừng (Breakpoint), Step Over (F10), Step Into (F11), Step Out (Shift+F11) và Cửa sổ theo dõi biến (Watch / Locals).',
        'Xây dựng tâm lý kiên nhẫn, tư duy phản biện khoa học khi đối mặt với Bug phần mềm: Giả thuyết, Thử nghiệm, Xác nhận và Sửa chữa triệt để.'
      ],
      prerequisites: [
        'Đã học xong Bài 1 Chương 9 (Phương pháp phân tích bài toán và ca kiểm thử).'
      ],
      leadIn: {
        hook: 'Từ \"Bug\" (con bọ) ra đời vào năm 1947 khi nhà khoa học Grace Hopper tìm thấy một con bướm đêm thật bị kẹt trong rơ-le của máy tính Mark II gây chập mạch! Ngày nay, hơn 50% thời gian làm việc của một lập trình viên chuyên nghiệp là dành cho việc ĐỌC VÀ GỠ LỖI (Debugging) chứ không phải viết code mới.',
        question: 'Tại sao chương trình của bạn biên dịch không có một lỗi đỏ nào, bấm chạy vẫn mượt mà, nhưng kết quả in ra màn hình lại sai hoàn toàn hoặc cửa sổ ứng dụng đột ngột biến mất không dấu vết?',
        realWorldScenario: 'Năm 1996, tên lửa Ariane 5 trị giá 370 triệu USD của châu Âu đã phát nổ chỉ 37 giây sau khi phóng chỉ vì một lỗi Runtime Error kinh điển: tràn số khi chuyển đổi một số thực 64-bit sang số nguyên có dấu 16-bit mà không có cơ chế bắt lỗi an toàn.'
      },
      theorySections: [
        {
          title: '1. Phân loại 3 Nhóm Lỗi Lập trình Kinh điển',
          content: 'Mọi lỗi trong lập trình C++ đều thuộc về một trong ba nhóm bản chất sau:\n\n1. **Lỗi cú pháp / Biên dịch (Syntax / Compile-time Errors):**\n   - *Bản chất:* Vi phạm ngữ pháp của C++ khiến trình biên dịch không thể dịch ra mã máy.\n   - *Triệu chứng:* Không tạo ra được file chạy `.exe`, IDE báo dấu gạch đỏ.\n   - *Ví dụ:* Quên dấu chấm phẩy `;`, dùng biến chưa khai báo, gọi sai tên hàm, gán kiểu không tương thích.\n   - *Độ nguy hiểm:* Thấp nhất, vì compiler sẽ bắt ngay và chỉ rõ dòng bị lỗi.\n\n2. **Lỗi khi chạy (Runtime Errors / Crashes):**\n   - *Bản chất:* Chương trình đã dịch thành công sang mã máy, nhưng khi đang thực thi thì thực hiện một thao tác bất hợp pháp với hệ điều hành hoặc phần cứng.\n   - *Triệu chứng:* Chương trình đột ngột bị sập (Crash), văng thông báo \"Segmentation Fault\", \"Aborted (core dumped)\", hoặc đóng cửa sổ ngay lập tức.\n   - *Ví dụ:* Chia cho số $0$ (`x / 0`), truy cập chỉ số mảng vượt biên (`a[100]` trong mảng 10 phần tử), tràn bộ nhớ ngăn xếp do đệ quy vô hạn (Stack Overflow).\n\n3. **Lỗi logic (Semantic / Logic Errors):**\n   - *Bản chất:* Chương trình dịch bình thường, chạy không sập, nhưng **KẾT QUẢ IN RA SAI** so với yêu cầu của bài toán.\n   - *Triệu chứng:* Nhập $2 + 2$ in ra $5$, hoặc tính điểm trung bình ra $75.0$ thay vì $7.5$.\n   - *Ví dụ:* Lẫn lộn giữa phép gán `=` và so sánh `==` trong `if (x = 5)`, dùng nhầm biến, lỗi lặp vô hạn không tăng biến đếm, lỗi sai một đơn vị (Off-by-one error).\n   - *Độ nguy hiểm:* Cao nhất, vì compiler hoàn toàn \"im lặng\" và tin rằng bạn đang viết đúng ý muốn.'
        },
        {
          title: '2. Kỹ thuật Đọc hiểu Thông báo Lỗi Trình biên dịch (Compiler Diagnostics)',
          content: 'Thông báo lỗi của GCC/Clang luôn tuân theo cấu trúc chuẩn mực:\n```text\nmain.cpp:18:25: error: expected \';\' before \'return\'\n   18 |     int total = sum + 10\n      |                         ^\n      |                         ;\n   19 |     return total;\n```\n- `main.cpp`: Tên tệp tin xảy ra lỗi.\n- `18:25`: Dòng 18, cột thứ 25.\n- `error`: Mức độ lỗi nghiêm trọng (phải sửa mới chạy được). Phân biệt với `warning` (cảnh báo nguy cơ tiềm ẩn nhưng vẫn sinh file chạy được).\n- `expected \';\' before \'return\'`: Mô tả chi tiết nguyên nhân (thiếu dấu ; ngay trước chữ return).\n\n**Quy tắc vàng:** Luôn sửa từ lỗi ĐẦU TIÊN (trên cùng) xuống dưới. Rất nhiều khi 10 lỗi đỏ bên dưới chỉ là hệ quả kéo theo của 1 lỗi duy nhất ở dòng trên cùng!'
        },
        {
          title: '3. Bộ Kỹ thuật Debugging Thực chiến: Print Debugging & Visual Debugger',
          content: '**Phương pháp 1: In vết (Print Debugging / Log Tracing)**\n- Đặt các câu lệnh `cout` tạm thời vào các vị trí then chốt để in ra:\n  1. Mốc thời gian/vị trí: `cout << \"[DEBUG]: Da vao den nhanh if\\n\";`\n  2. Giá trị biến tức thời: `cout << \"[DEBUG]: i = \" << i << \", sum = \" << sum << \"\\n\";`\n- Ưu điểm: Đơn giản, dùng được trên mọi môi trường và nền tảng chấm online (nhớ xóa bỏ dòng debug trước khi nộp bài!).\n\n**Phương pháp 2: Sử dụng Debugger chuyên nghiệp (GDB / VS Code / Visual Studio)**\n- **Điểm dừng (Breakpoint):** Đặt một chấm đỏ tại dòng mã bạn nghi ngờ. Khi bấm Debug (F5), chương trình sẽ chạy đến đúng dòng đó và **TẠM DỪNG THỜI GIAN LẠI** để bạn quan sát.\n- **Step Over (F10):** Chạy thực thi dòng hiện tại và nhảy sang dòng kế tiếp.\n- **Step Into (F11):** Nếu dòng hiện tại là một lời gọi hàm, nhảy đi sâu vào bên trong thân hàm đó để xem chi tiết.\n- **Cửa sổ Watch / Locals:** Liệt kê giá trị của tất cả các biến đang lưu trong RAM tại thời khắc tạm dừng.'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Ca lâm sàng Bug Hunt - Bắt và tiêu diệt 3 lỗi kinh điển trong một chương trình tính lương',
          problem: 'Cho một đoạn chương trình bị lỗi nghiêm trọng: vừa có lỗi biên dịch, lỗi chạy sập (runtime) và lỗi logic. Hãy phân tích triệu chứng, chỉ ra nguyên nhân gốc rễ và sửa lại đoạn mã để chương trình hoạt động hoàn hảo.',
          analysis: {
            input: 'Số lượng nhân viên và danh sách lương của từng người.',
            output: 'Lương trung bình và nhân viên có lương cao nhất.',
            idea: 'Lần lượt tìm và khắc phục: 1. Lỗi chia cho 0 khi số nhân viên = 0; 2. Lỗi truy cập ngoài biên mảng a[N]; 3. Lỗi so sánh if (isBonus = true) gán nhầm giá trị.',
            algorithm: 'Bước 1: Validate input N > 0 tránh chia cho 0.\nBước 2: Sửa vòng lặp duyệt mảng từ 0 đến N - 1.\nBước 3: Sửa phép so sánh thành ==.'
          },
          code: `#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

// ========================================================
// PHIÊN BẢN ĐÃ ĐƯỢC DEBUG VÀ SỬA LỖI HOÀN TOÀN CHUẨN XÁC
// ========================================================

int main() {
    int n = 0;

    cout << "=== HE THONG QUAN LY LUONG NHAN VIEN (DEBUGGED) ===" << endl;
    cout << "Nhap so luong nhan vien: ";
    cin >> n;

    // FIX LỖI RUNTIME 1: Kiểm tra biên N <= 0 để tránh lỗi Crash chia cho 0!
    if (n <= 0) {
        cout << "[Thong bao]: So luong nhan vien phai > 0. Chuong trinh ket thuc an toan!\n";
        return 0;
    }

    const int MAX_EMP = 100;
    if (n > MAX_EMP) {
        cout << "[Loi]: He thong chi ho tro toi da " << MAX_EMP << " nhan vien!\n";
        return 1;
    }

    double salaries[MAX_EMP];
    double totalSalary = 0.0;

    // Nhập danh sách lương
    for (int i = 0; i < n; ++i) { // FIX LỖI LOGIC/RUNTIME 2: Duyệt từ 0 đến n - 1 (tránh i <= n)
        cout << "Nhap luong nhan vien #" << (i + 1) << ": ";
        cin >> salaries[i];
        totalSalary += salaries[i];
    }

    // Tính lương trung bình an toàn tuyệt đối
    double avgSalary = totalSalary / n;

    // Tìm lương cao nhất
    double maxSalary = salaries[0];
    int bestEmpIndex = 0;

    for (int i = 1; i < n; ++i) {
        if (salaries[i] > maxSalary) {
            maxSalary = salaries[i];
            bestEmpIndex = i;
        }
    }

    // FIX LỖI LOGIC 3: Kiểm tra cờ thưởng dùng '==' chứ không dùng '='
    bool hasSpecialBonus = false;
    if (maxSalary >= 30000000.0) {
        hasSpecialBonus = true;
    }

    cout << fixed << setprecision(0);
    cout << "\n----------- KET QUA PHAN TICH -----------" << endl;
    cout << "- Tong quy luong       : " << totalSalary << " VND" << endl;
    cout << "- Luong trung binh     : " << avgSalary << " VND" << endl;
    cout << "- Nhan vien xuat sac nhat: #" << (bestEmpIndex + 1) 
         << " voi muc luong: " << maxSalary << " VND" << endl;

    if (hasSpecialBonus == true) { // Sử dụng == chuẩn xác
        cout << "* THUONG DAC BIET: Nhan vien xuat sac duoc thuong them 1 thang luong!" << endl;
    }
    cout << "=========================================" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'if (n <= 0) return 0;',
              explanation: 'Phòng ngừa lỗi Runtime Error kinh điển: Floating-point exception / Division by zero khi totalSalary / n.'
            },
            {
              lineOrBlock: 'for (int i = 0; i < n; ++i)',
              explanation: 'Khắc phục lỗi Off-by-one kinh điển (viết i <= n dẫn tới salaries[n] gây tràn vùng nhớ mảng Out of bounds).'
            },
            {
              lineOrBlock: 'if (hasSpecialBonus == true)',
              explanation: 'Tránh lỗi Semantic Bug: nếu viết if (hasSpecialBonus = true) thì biểu thức luôn gán true và nhánh if luôn luôn chạy.'
            }
          ],
          executionResult: {
            sampleInput: `3
15000000
35000000
20000000`,
            sampleOutput: `=== HE THONG QUAN LY LUONG NHAN VIEN (DEBUGGED) ===
Nhap so luong nhan vien: 3
Nhap luong nhan vien #1: 15000000
Nhap luong nhan vien #2: 35000000
Nhap luong nhan vien #3: 20000000

----------- KET QUA PHAN TICH -----------
- Tong quy luong       : 70000000 VND
- Luong trung binh     : 23333333 VND
- Nhan vien xuat sac nhat: #2 voi muc luong: 35000000 VND
* THUONG DAC BIET: Nhan vien xuat sac duoc thuong them 1 thang luong!
=========================================`
          },
          analysisOfResult: 'Sau khi bóc tách và sửa hết 3 loại lỗi (Runtime crash khi chia cho 0, Vượt biên mảng và Lỗi gán trong điều kiện if), chương trình đã vận hành trơn tru và chính xác 100%.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Phát hiện và sửa lỗi Syntax trong mã nguồn',
          task: 'Cho đoạn mã sau, tìm 3 lỗi cú pháp khiến compiler từ chối dịch:\n`int main() {\n  cout << "Xin chao"\n  int x = 10\n  int y = x * 2;\n  return "0";\n}`',
          hints: ['Thiếu dấu chấm phẩy ở dòng cout và dòng gán x; hàm main trả về int chứ không trả về chuỗi "0".'],
          expectedOutput: 'Mã nguồn biên dịch thành công 0 lỗi.'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Kỹ thuật Print Debugging tìm vòng lặp vô hạn',
          task: 'Chương trình sau bị treo đơ màn hình khi chạy:\n`int i = 10;\nwhile (i > 0) {\n    cout << i << " ";\n    i += 2;\n}`\nHãy giải thích vì sao bị treo và sửa lại điều kiện/bước nhảy để vòng lặp đếm lùi từ 10 về 1.',
          hints: ['i ban đầu bằng 10, mỗi bước lại cộng thêm 2 (i += 2) thì i luôn luôn > 0, không bao giờ dừng. Cần sửa thành i--.'],
          expectedOutput: 'Màn hình in: 10 9 8 7 6 5 4 3 2 1.'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Sử dụng Breakpoint và Watch giải mã thuật toán bị sai',
          task: 'Viết một chương trình tính tổng nghịch đảo $S = 1 + 1/2 + 1/3 + ... + 1/n$. Người lập trình viết `sum += 1 / i;` với `int i;` và kết quả luôn ra 1 với mọi n. Sử dụng kỹ thuật debug để chỉ ra lỗi ép kiểu số nguyên (Integer Division) và sửa lại thành `1.0 / i`.',
          hints: ['1 / i với i >= 2 luôn cho kết quả 0 trong C++ vì cả 1 và i đều là số nguyên.'],
          expectedOutput: 'Với n = 4, S = 2.08333.'
        }
      ],
      commonErrors: [
        {
          name: 'Lỗi chia số nguyên (Integer Division Bug)',
          symptom: 'Tính tỷ lệ phần trăm hoặc công thức vật lý/toán học kết quả luôn ra 0.00000.',
          rootCause: 'Trong C++, phép chia giữa hai số nguyên `int / int` luôn bị chặt cụt phần thập phân lấy phần nguyên.',
          howToFix: 'Ép kiểu ít nhất một toán hạng sang kiểu số thực (`double`) hoặc viết `1.0 / x`.',
          badCode: `double percent = (passedStudents / totalStudents) * 100; // Ra 0 vì passed < total!`,
          goodCode: `double percent = ((double)passedStudents / totalStudents) * 100.0; // Chính xác`
        },
        {
          name: 'Lỗi gán nhầm trong điều kiện if (Assignment in Condition)',
          symptom: 'Nhánh `if` luôn luôn chạy bất kể dữ liệu nhập vào là gì.',
          rootCause: 'Gõ một dấu bằng `=` (toán tử gán) thay vì hai dấu bằng `==` (toán tử so sánh).',
          howToFix: 'Luôn kiểm tra kỹ các câu lệnh if. Trong C++, nhiều lập trình viên áp dụng quy ước Yoda notation: `if (5 == x)` để nếu lỡ gõ `if (5 = x)` compiler sẽ báo lỗi ngay.',
          badCode: `if (isLoggedIn = false) { ... } // Biểu thức trả về false, không bao giờ chạy!`,
          goodCode: `if (isLoggedIn == false) { ... } // Hoặc if (!isLoggedIn)`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Phân loại lỗi phần mềm',
          description: 'Cho 3 tình huống sau, hãy xác định tình huống nào là Syntax Error, Runtime Error và Logic Error:\n1. Quên khai báo thư viện `<cmath>` khi dùng hàm `sqrt()`.\n2. Người dùng nhập mẫu số bằng 0 khiến ứng dụng sập.\n3. Viết thuật toán tính diện tích tam giác nhưng công thức lại dùng `a * b` thay vì `0.5 * a * h`.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Cơ chế hoạt động của Breakpoint',
          description: 'Trình bày nguyên lý hoạt động của Điểm dừng (Breakpoint) trong các công cụ Debugger. Tại sao việc tạm dừng luồng thực thi của CPU lại có giá trị to lớn đối với việc phát hiện lỗi?'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Phân tích thông báo lỗi Segmentation Fault',
          description: 'Một sinh viên viết chương trình mảng và nhận thông báo lỗi \"Segmentation fault (core dumped)\". Hãy trình bày ít nhất 3 nguyên nhân phổ biến nhất trong C++ dẫn tới lỗi này và phương pháp phòng ngừa.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Thiết kế chiến lược Debug một bài toán lớn',
          description: 'Giả sử bạn đang viết một đồ án quản lý điểm gồm 500 dòng code chia làm 8 hàm. Khi bấm chạy, chương trình in ra dữ liệu sai mà không báo lỗi gì. Hãy trình bày chiến lược từng bước (Step-by-step strategy) để cô lập hàm bị lỗi trong thời gian ngắn nhất.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Lỗi nào sau đây thuộc nhóm Logic Error (Semantic Error)?',
          options: [
            'Quên dấu chấm phẩy ở cuối dòng lệnh',
            'Chương trình bị sập khi thực hiện phép chia cho số 0',
            'Thuật toán tính chu vi hình tròn viết công thức: C = 2 * r (quên nhân số PI) khiến kết quả in ra bị sai',
            'Gọi một hàm chưa được khai báo trước đó'
          ],
          correctIndex: 2,
          explanation: 'Lỗi logic là khi chương trình biên dịch tốt, chạy không bị sập nhưng kết quả tính toán sai lệch so với logic toán học mong đợi.'
        },
        {
          id: 2,
          question: 'Trong công cụ Debugger của IDE, phím tắt / chức năng \"Step Over\" có tác dụng gì?',
          options: [
            'Thoát ngay lập tức khỏi chương trình',
            'Thực thi toàn bộ dòng lệnh hiện tại và dừng lại ở dòng lệnh tiếp theo mà không nhảy sâu vào chi tiết của hàm được gọi',
            'Nhảy vào từng dòng code bên trong hàm đang gọi',
            'Xóa bỏ toàn bộ các điểm dừng Breakpoint'
          ],
          correctIndex: 1,
          explanation: 'Step Over (thường là F10) sẽ chạy trọn vẹn câu lệnh ở dòng hiện tại và nhảy sang dòng kế tiếp, phù hợp khi bạn tin tưởng hàm đó đã đúng và không muốn tốn thời gian duyệt từng dòng bên trong nó.'
        },
        {
          id: 3,
          question: 'Tại sao trong danh sách thông báo lỗi của Compiler, ta luôn phải ưu tiên đọc và sửa lỗi ĐẦU TIÊN (trên cùng) trước?',
          options: [
            'Vì các lỗi bên dưới chỉ xuất hiện vào ngày hôm sau',
            'Vì lỗi đầu tiên luôn là lỗi dễ nhất',
            'Vì trình biên dịch có thể bị mất đồng bộ cú pháp sau lỗi đầu tiên, dẫn đến hàng loạt các thông báo lỗi giả (cascade errors) ở phía dưới',
            'Quy định bắt buộc của ngôn ngữ C++'
          ],
          correctIndex: 2,
          explanation: 'Sau một lỗi cú pháp đầu tiên (ví dụ mở ngoặc nhọn quên đóng), compiler sẽ đoán sai ngữ cảnh của toàn bộ các dòng còn lại, sinh ra hàng chục thông báo lỗi ảo. Sửa lỗi đầu tiên thường làm biến mất các lỗi kéo theo bên dưới.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Syntax Error', val: 'Lỗi vi phạm cú pháp ngữ pháp, compiler chặn ngay từ đầu' },
          { key: 'Runtime Error', val: 'Lỗi khi chạy sập ứng dụng (chia cho 0, truy cập mảng ngoài biên)' },
          { key: 'Logic Error', val: 'Lỗi kết quả sai, compiler im lặng, nguy hiểm và khó tìm nhất' },
          { key: 'Print Debugging', val: 'Chèn std::cout để theo dõi giá trị biến và vị trí luồng chạy' },
          { key: 'Debugger Tools', val: 'Breakpoint (Dừng lại), Step Over (Lướt qua), Step Into (Đi sâu), Watch (Soi biến)' }
        ],
        coreTakeaway: 'Kỹ năng Debugging là thước đo bản lĩnh của một kỹ sư phần mềm. Hãy giữ bình tĩnh, đọc kỹ thông báo lỗi của compiler từ trên xuống dưới, và sử dụng công cụ gỡ lỗi khoa học thay vì đoán mò.'
      },
      checklist: [
        'Tôi phân biệt rõ 3 nhóm lỗi: Syntax, Runtime và Logic Error.',
        'Tôi biết cách đọc dòng và cột trong thông báo lỗi của compiler.',
        'Tôi thành thạo kỹ thuật Print Debugging để theo dõi biến.',
        'Tôi hiểu cách đặt Breakpoint và sử dụng Step Over / Step Into.'
      ],
      extendedChallenge: {
        title: 'Xây dựng bộ thư viện Logger hỗ trợ Debug chuyên nghiệp',
        scenario: 'Trong các dự án phần mềm lớn, việc dùng `std::cout` bừa bãi sẽ làm rác console và không thể tắt bật khi đưa lên môi trường Production.',
        challengeTask: 'Viết một macro hoặc hàm tiện ích `LOG_DEBUG(message, variable)`: Chỉ in ra màn hình thông tin kèm số dòng `__LINE__` và tên tệp `__FILE__` khi cờ `#define DEBUG_MODE` được bật. Khi tắt cờ này, chương trình tự động biến mất toàn bộ các dòng log mà không cần xóa code thủ công.',
        thoughtGuidance: 'Sử dụng tiền xử lý `#ifdef DEBUG_MODE` và macro chuẩn của C++.'
      }
    }
  ]
};
