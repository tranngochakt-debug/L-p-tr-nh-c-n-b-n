import { LessonContent, ChapterData } from './chapter1Data.ts';

export const CHAPTER_4_DATA: ChapterData = {
  chapterId: 4,
  chapterCode: 'CH04',
  title: 'Cấu Trúc Vòng Lặp (for, while, do...while)',
  summary: 'Làm chủ sức mạnh tự động hóa và lặp đi lặp lại của máy tính: Vòng lặp xác định for và vòng đời 3 thành phần (khởi tạo; điều kiện; bước nhảy); vòng lặp không xác định while (tiền kiểm tra) và do...while (hậu kiểm tra); kỹ thuật kiểm tra tính hợp lệ dữ liệu nhập (Input Validation); điều khiển luồng nâng cao với break, continue và biến cờ hiệu (Flag variable); bẫy vòng lặp vô tận (Infinite loop) cùng lỗi lệch 1 (Off-by-One); tư duy vòng lặp lồng nhau (Nested Loops) đa chiều và ứng dụng vẽ ma trận ký tự, hình học nghệ thuật.',
  totalLessons: 4,
  lessons: [
    // -------------------------------------------------------------
    // BÀI 1: VÒNG LẶP XÁC ĐỊNH for (L11)
    // -------------------------------------------------------------
    {
      id: 'CH04-L01',
      lessonNumber: 1,
      chapterNumber: 4,
      title: 'Vòng Lặp Xác Định for: Cú Pháp & Cơ Chế Vận Hành',
      readingTimeMinutes: 50,
      moodleType: 'Lesson tương tác mô phỏng từng bước lặp + Quiz',
      objectives: [
        'Hiểu bản chất và sự cần thiết của cấu trúc lặp trong tư duy tự động hóa lập trình.',
        'Nắm vững cú pháp chuẩn của vòng lặp for và phân tích chính xác thứ tự thực thi 4 bước của vòng lặp.',
        'Phân biệt và sử dụng thành thạo biến đếm lặp (Loop counter), điều kiện dừng và bước nhảy (increment/decrement).',
        'Áp dụng vòng lặp for để giải quyết các bài toán kinh điển: Tính tổng tích lũy (Accumulation), tính giai thừa, đếm số lượng thỏa mãn điều kiện.',
        'Nhận diện và phòng tránh lỗi lệch một giá trị kinh điển (Off-by-One Error) cùng bẫy dấu chấm phẩy sau dấu ngoặc đơn.'
      ],
      prerequisites: [
        'Đã học xong Chương 3 (Toán tử quan hệ, biểu thức logic và cấu trúc rẽ nhánh if/else).'
      ],
      leadIn: {
        hook: 'Nếu bạn cần in ra màn hình dòng chữ "Xin chào C++" 3 lần, bạn có thể copy-paste 3 dòng cout. Nhưng nếu bài toán yêu cầu in 100.000 lần, hoặc tính tổng tài khoản của 10 triệu khách hàng ngân hàng, bạn sẽ làm thế nào?',
        question: 'Làm sao để ra lệnh cho máy tính thực hiện lại một hành động hàng triệu lần với tốc độ tính bằng nano giây mà không cần viết lại mã nguồn?',
        realWorldScenario: 'Đồng hồ đếm ngược từng giây đến Giao thừa Tết Nguyên Đán, thanh tiến trình download file hiển thị từ 1% đến 100%, hay quét từng hóa đơn trong giỏ hàng siêu thị để tính tổng tiền thanh toán. Tất cả đều vận hành trên nền tảng của Vòng lặp xác định (Definite Loop).'
      },
      theorySections: [
        {
          title: '1. Cú pháp và Vòng đời 4 bước của vòng lặp for',
          content: 'Cấu trúc `for` thường được sử dụng khi **đã biết trước số lần lặp** (hoặc xác định được khoảng giá trị của biến đếm).\n\nCú pháp chuẩn:\n```cpp\nfor (khoi_tao; dieu_kien_lap; buoc_nhay) {\n    // Khoi lenh than vong lap (Loop Body)\n}\n```\n\nCơ chế thực thi 4 bước nghiêm ngặt của C++:\n- **Bước 1 (Khởi tạo):** Thực thi duy nhất MỘT LẦN ở đầu vòng lặp (Ví dụ: `int i = 1;`).\n- **Bước 2 (Kiểm tra điều kiện):** Đánh giá biểu thức điều kiện (`i <= n`).\n  - Nếu `true`: Chuyển sang Bước 3.\n  - Nếu `false`: **Dừng vòng lặp ngay lập tức**, nhảy ra câu lệnh tiếp theo sau khối `for`.\n- **Bước 3 (Thân vòng lặp):** Thực thi toàn bộ các lệnh bên trong `{}`.\n- **Bước 4 (Bước nhảy):** Thực hiện cập nhật biến đếm (Ví dụ: `i++` hoặc `i += 2`). Sau đó **quay ngược lại Bước 2** để kiểm tra điều kiện.',
          callout: {
            type: 'warning',
            text: '⚠️ Thứ tự sống còn: Bước nhảy (i++) chỉ được thực hiện SAU KHI thân vòng lặp đã chạy xong lượt đó, chứ không phải chạy trước khi vào thân!'
          }
        },
        {
          title: '2. Phạm vi biến đếm (Scope of Loop Variable)',
          content: 'Trong chuẩn C++ hiện đại, biến đếm nên được khai báo trực tiếp bên trong phần khởi tạo của vòng lặp:\n```cpp\nfor (int i = 0; i < 10; ++i) {\n    cout << i << " ";\n}\n// Ra ngoai nay, bien i KHONG TON TAI!\n```\nViệc này giúp bảo vệ phạm vi biến (*Variable Scope*), ngăn chặn việc sử dụng nhầm biến đếm ở các đoạn mã khác phía sau.',
          keyPoints: [
            'Ưu tiên viết `++i` (tiền tố) thay vì `i++` (hậu tố) trong vòng lặp for để hình thành thói quen tối ưu hiệu năng.',
            'Bước nhảy có thể tăng (`i++`, `i += 2`) hoặc giảm (`i--`, `i -= 5`) tùy theo chiều duyệt bài toán.',
            'Có thể duyệt tiến (từ 1 đến N) hoặc duyệt lùi (từ N về 1).'
          ]
        },
        {
          title: '3. Mô hình bài toán Tích lũy (Accumulation Pattern)',
          content: 'Đây là dạng bài tập cơ bản nhất của vòng lặp: Tính tổng dãy số $S = 1 + 2 + ... + N$, hoặc tính giai thừa $N! = 1 \\times 2 \\times ... \\times N$.\n\nQuy tắc bất biến:\n1. **Khởi tạo biến tích lũy trước vòng lặp:**\n   - Tính tổng: khởi tạo `long long sum = 0;` (0 là phần tử trung hòa của phép cộng).\n   - Tính tích: khởi tạo `long long prod = 1;` (1 là phần tử trung hòa của phép nhân, tuyệt đối không gán bằng 0).\n2. **Cộng/nhân dồn trong thân lặp:** `sum += i;` hoặc `prod *= i;`.\n3. **In kết quả sau khi vòng lặp kết thúc hoàn toàn.**'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Tính tổng dãy số nguyên S(1..N) và tích phân đoạn lẻ',
          problem: 'Viết chương trình nhập vào số nguyên dương N (1 <= N <= 100.000). Sử dụng vòng lặp for để tính: 1. Tổng tất cả các số nguyên từ 1 đến N; 2. Tổng các số chẵn trong đoạn [1, N]; 3. Đếm số lượng các số chia hết cho 3 hoặc 5 trong đoạn [1, N].',
          analysis: {
            input: 'n (int) nguyên dương',
            output: 'sumAll (long long), sumEven (long long), countDiv35 (int)',
            idea: 'Chạy biến đếm i từ 1 đến n, dùng các biến tích lũy để cộng dồn hoặc đếm theo điều kiện tương ứng.',
            algorithm: 'Bước 1: Nhập n, kiểm tra n > 0 bằng guard clause.\nBước 2: Khởi tạo sumAll = 0, sumEven = 0, countDiv35 = 0.\nBước 3: Vòng for (int i = 1; i <= n; ++i):\n  - sumAll += i\n  - if (i % 2 == 0) sumEven += i\n  - if (i % 3 == 0 || i % 5 == 0) countDiv35++\nBước 4: In 3 kết quả thống kê ra màn hình.'
          },
          code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int n = 0;
    cout << "=== TINH TOAN DAY SO VOI VONG LAP FOR ===" << endl;
    cout << "Nhap so nguyen duong N (1 <= N <= 100000): ";
    cin >> n;

    // Lap trinh phong thu kiem tra dau vao
    if (n <= 0) {
        cout << "[LOI]: N phai la so nguyen duong lon hon 0!" << endl;
        return 0;
    }

    // Khoi tao cac bien tich luy
    long long sumAll = 0;
    long long sumEven = 0;
    int countDiv35 = 0;

    // Vong lap for duyet tu 1 den n
    for (int i = 1; i <= n; ++i) {
        sumAll += i; // Cong don moi phan tu

        if (i % 2 == 0) {
            sumEven += i; // Cong don cac so chan
        }

        if (i % 3 == 0 || i % 5 == 0) {
            countDiv35++; // Dem so chia het cho 3 hoac 5
        }
    }

    // In ket qua sau khi vong lap hoan tat
    cout << "------------------------------------------" << endl;
    cout << "Ket qua phan tich doan [1, " << n << "]:" << endl;
    cout << "1. Tong tat ca cac so S(1..N)        : " << sumAll << endl;
    cout << "2. Tong cac so chan                 : " << sumEven << endl;
    cout << "3. So luong so chia het cho 3 hoac 5: " << countDiv35 << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'long long sumAll = 0; long long sumEven = 0;',
              explanation: 'Sử dụng kiểu long long cho biến tổng để tránh tràn số (Integer Overflow) khi N lớn đến 100.000.'
            },
            {
              lineOrBlock: 'for (int i = 1; i <= n; ++i)',
              explanation: 'Khởi tạo i = 1, kiểm tra i <= n trước mỗi lượt lặp, tăng ++i sau khi chạy xong thân lặp.'
            },
            {
              lineOrBlock: 'if (i % 3 == 0 || i % 5 == 0) countDiv35++;',
              explanation: 'Toán tử logic OR (||) để đếm các số chia hết cho 3 HOẶC 5.'
            }
          ],
          executionResult: {
            sampleInput: '10',
            sampleOutput: `=== TINH TOAN DAY SO VOI VONG LAP FOR ===
Nhap so nguyen duong N (1 <= N <= 100000): 10
------------------------------------------
Ket qua phan tich doan [1, 10]:
1. Tong tat ca cac so S(1..N)        : 55
2. Tong cac so chan                 : 30
3. So luong so chia het cho 3 hoac 5: 5`
          },
          analysisOfResult: 'Với N = 10: Tổng 1+2+...+10 = 55; Số chẵn 2+4+6+8+10 = 30; Các số chia hết cho 3 hoặc 5: 3, 5, 6, 9, 10 (tổng cộng 5 số).'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'In bảng nhân của số N',
          task: 'Nhập số nguyên dương N từ bàn phím. In ra bảng nhân của N từ 1 đến 10 (ví dụ: N x 1 = ... N x 10 = ...).',
          hints: ['Dùng vòng for với i từ 1 đến 10, trong thân in: n << " x " << i << " = " << n * i;'],
          expectedOutput: 'Nhap N: 7 -> 7 x 1 = 7 ... 7 x 10 = 70'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Tính giai thừa N! (0 <= N <= 20)',
          task: 'Tính giai thừa N! = 1 * 2 * ... * N. Lưu ý quy ước 0! = 1 và sử dụng kiểu unsigned long long.',
          hints: ['Khởi tạo unsigned long long fact = 1; for i từ 1 đến N: fact *= i;'],
          expectedOutput: 'Nhap N: 5 -> 5! = 120'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Tính tổng chuỗi phân số điều hòa',
          task: 'Tính tổng S = 1 + 1/2 + 1/3 + ... + 1/N với N nguyên dương. Kết quả làm tròn 4 chữ số thập phân.',
          hints: ['Dùng 1.0 / i để tránh phép chia nguyên (1 / i sẽ ra 0 khi i >= 2).'],
          expectedOutput: 'Nhap N: 4 -> S = 2.0833'
        }
      ],
      commonErrors: [
        {
          name: 'Bẫy dấu chấm phẩy sau dấu ngoặc tròn for (;)',
          symptom: 'Vòng lặp không in ra gì hoặc chỉ in ra một lần duy nhất giá trị cuối cùng của biến đếm.',
          rootCause: 'Đặt dấu chấm phẩy ; ngay sau for (...) biến thân vòng lặp thành câu lệnh rỗng (Empty statement). Thân lặp thực sự bị đẩy ra ngoài và chỉ chạy 1 lần khi vòng lặp đã kết thúc.',
          howToFix: 'Tuyệt đối không đặt dấu chấm phẩy sau ngoặc tròn của lệnh for/if/while.',
          badCode: `for (int i = 1; i <= 5; ++i); // Dấu chấm phẩy chết người!
{
    cout << i << " ";
}`,
          goodCode: `for (int i = 1; i <= 5; ++i) { // Bỏ dấu chấm phẩy
    cout << i << " ";
}`
        },
        {
          name: 'Lỗi lệch một (Off-by-One Error - OBOE)',
          symptom: 'Chương trình chạy thiếu hoặc thừa đúng 1 lần lặp (ví dụ: cần lặp 10 lần nhưng chỉ chạy 9 lần).',
          rootCause: 'Nhầm lẫn giữa điều kiện < và <=, hoặc khởi tạo i = 0 thay vì i = 1.',
          howToFix: 'Quy tắc ngón tay: Nếu chạy từ 0 đến N-1 dùng "i = 0; i < N". Nếu chạy từ 1 đến N dùng "i = 1; i <= N". Cả hai cách đều lặp đúng N lần.',
          badCode: `// Muon tinh tong tu 1 den N nhung dung dau <
for (int i = 1; i < n; ++i) {
    sum += i; // Bi thieu mat so N cuoi cung!
}`,
          goodCode: `for (int i = 1; i <= n; ++i) {
    sum += i; // Chay du den tan N
}`
        },
        {
          name: 'Tràn số khi tính tích lũy giai thừa hoặc tổng lớn',
          symptom: 'Kết quả tính tổng hay tích ra số âm kỳ quái khi N lớn (ví dụ: 15! ra số âm).',
          rootCause: 'Dùng kiểu int (tối đa ~2 tỷ, chỉ chứa được đến 12!).',
          howToFix: 'Khi tính tích dồn hoặc tổng dãy số lớn, luôn dùng long long hoặc unsigned long long.',
          badCode: `int fact = 1;
for (int i = 1; i <= 15; ++i) fact *= i;`,
          goodCode: `unsigned long long fact = 1;
for (int i = 1; i <= 15; ++i) fact *= i;`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Đếm số lần lặp',
          description: 'Cho đoạn mã: `for (int i = 2; i <= 10; i += 2) cout << i;`. Xác định số lần lặp và giá trị in ra màn hình.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Duyệt ngược đếm lùi',
          description: 'Viết chương trình nhập số nguyên dương N, in ra dãy số đếm lùi từ N về 1, sau đó in ra chữ "FIRE!".',
          sampleTestCase: {
            input: '5',
            output: '5 4 3 2 1 FIRE!'
          }
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Tính tổng đan dấu Leibniz',
          description: 'Viết chương trình tính tổng N phần tử đầu tiên của chuỗi đan dấu: S = 1 - 2 + 3 - 4 + 5 - 6 + ... + ((-1)^(N-1)) * N.',
          sampleTestCase: {
            input: '5',
            output: '3 (Vi 1 - 2 + 3 - 4 + 5 = 3)'
          }
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Ước số và Số hoàn hảo',
          description: 'Một số nguyên dương N gọi là số hoàn hảo nếu tổng tất cả các ước số thực sự của nó (không kể chính nó) bằng chính nó. Ví dụ 6 có ước 1, 2, 3 và 1 + 2 + 3 = 6. Viết chương trình kiểm tra N có phải số hoàn hảo không.',
          sampleTestCase: {
            input: '28',
            output: '28 la so hoan hao (1 + 2 + 4 + 7 + 14 = 28)'
          }
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Thứ tự thực hiện chuẩn của các thành phần trong vòng lặp for (1: Khởi tạo, 2: Điều kiện lặp, 3: Thân lặp, 4: Bước nhảy) ở lượt lặp ĐẦU TIÊN là gì?',
          options: [
            '1 -> 2 -> 3 -> 4',
            '1 -> 3 -> 4 -> 2',
            '1 -> 2 -> 3',
            '2 -> 3 -> 4 -> 1'
          ],
          correctIndex: 2,
          explanation: 'Ở lượt lặp đầu tiên: 1 (Khởi tạo) chạy trước -> 2 (Kiểm tra điều kiện đúng) -> 3 (Chạy thân lặp). Bước 4 (Bước nhảy) chỉ chạy sau khi thân lặp lượt 1 hoàn thành để chuẩn bị cho lượt 2.'
        },
        {
          id: 2,
          question: 'Vòng lặp sau đây sẽ in ra màn hình bao nhiêu số: for (int i = 0; i <= 5; ++i) cout << i << " "; ?',
          options: [
            '5 số (từ 0 đến 4)',
            '6 số (từ 0 đến 5)',
            '5 số (từ 1 đến 5)',
            'Vô hạn số'
          ],
          correctIndex: 1,
          explanation: 'Biến i nhận các giá trị: 0, 1, 2, 3, 4, 5 (tổng cộng 6 giá trị thỏa mãn điều kiện i <= 5).'
        },
        {
          id: 3,
          question: 'Biến i khai báo trong for (int i = 0; i < 10; ++i) có thể được sử dụng ở đâu?',
          options: [
            'Toàn bộ hàm main',
            'Chỉ bên trong thân vòng lặp for đó',
            'Ở bất kỳ hàm nào trong file',
            'Chỉ ở phần điều kiện của vòng lặp'
          ],
          correctIndex: 1,
          explanation: 'Theo chuẩn C++, biến khai báo trong mệnh đề khởi tạo của for có phạm vi khối (Block scope), chỉ tồn tại bên trong cấu trúc vòng lặp đó.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'for (init; cond; step)', val: 'Cú pháp chuẩn cho vòng lặp biết trước số lần' },
          { key: 'Thứ tự 4 bước', val: 'Khởi tạo (1 lần) -> Kiểm tra đ/k -> Chạy thân -> Bước nhảy' },
          { key: '++i vs i++', val: 'Ưu tiên ++i để tối ưu hiệu năng lặp' },
          { key: 'Lỗi OBOE (Lệch 1)', val: 'Cẩn thận dấu < vs <= khi duyệt từ 0 hay từ 1' },
          { key: 'Tích lũy tổng / tích', val: 'sum = 0 (phần tử trung hòa cộng), fact = 1 (trung hòa nhân)' }
        ],
        coreTakeaway: 'Vòng lặp for là cỗ máy tự động hóa mạnh mẽ nhất khi biết trước phạm vi lặp. Luôn kiểm soát chặt chẽ điều kiện dừng để không bao giờ bị lệch một giá trị.'
      },
      checklist: [
        'Tôi giải thích được chính xác thứ tự vận hành 4 bước của vòng lặp for.',
        'Tôi biết cách khởi tạo biến đếm an toàn với phạm vi cục bộ của vòng lặp.',
        'Tôi thành thạo mô hình tính tổng dồn và tích dồn bằng vòng lặp for.',
        'Tôi nhận diện và tránh được lỗi lệch một (Off-by-One) và lỗi chấm phẩy thừa.'
      ],
      extendedChallenge: {
        title: 'Mô phỏng tính lãi kép gửi tiết kiệm ngân hàng định kỳ',
        scenario: 'Một khách hàng gửi tiết kiệm số tiền gốc ban đầu P triệu đồng vào ngân hàng với lãi suất r%/năm. Cứ sau mỗi năm, tiền lãi được cộng gộp vào vốn gốc để sinh lãi cho năm tiếp theo (Lãi kép). Đồng thời, vào đầu mỗi năm tiếp theo, khách hàng nộp thêm một khoản cố định M triệu đồng.',
        challengeTask: 'Viết chương trình nhập P, r, M, N (số năm gửi). Dùng vòng lặp for in ra bảng sao kê chi tiết từng năm gồm: Năm, Tiền đầu kỳ, Tiền lãi sinh ra, Tiền cuối kỳ.',
        thoughtGuidance: 'Mỗi năm: Tiền lãi = TienDauKy * (r / 100.0); TienCuoiKy = TienDauKy + TienLai; DauNamSau = TienCuoiKy + M.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 2: VÒNG LẶP KHÔNG XÁC ĐỊNH while & do...while (L12)
    // -------------------------------------------------------------
    {
      id: 'CH04-L02',
      lessonNumber: 2,
      chapterNumber: 4,
      title: 'Vòng Lặp Không Xác Định while & do...while',
      readingTimeMinutes: 50,
      moodleType: 'VPL Bài tập nhập điểm từ 0 đến 10 (bắt nhập lại nếu sai)',
      objectives: [
        'Hiểu bản chất của vòng lặp không xác định (Indefinite Loops) khi số lần lặp phụ thuộc vào điều kiện động hoặc hành vi của người dùng.',
        'Phân biệt rõ ràng sự khác nhau giữa vòng lặp while (tiền kiểm tra - Pre-test) và do...while (hậu kiểm tra - Post-test).',
        'Làm chủ kỹ thuật kiểm tra tính hợp lệ của dữ liệu đầu vào (Input Validation Pattern) bắt buộc nhập lại đến khi đúng.',
        'Thao tác thành thạo với các chữ số của một số nguyên (tách chữ số hàng đơn vị, đảo ngược số, tính tổng chữ số) bằng vòng lặp while.',
        'Nhận thức sâu sắc nguyên nhân gây ra vòng lặp vô tận (Infinite Loop) và cách kiểm soát biến điều kiện dừng.'
      ],
      prerequisites: [
        'Đã học xong Bài 1 Chương 4 (Vòng lặp for) và Chương 3 (Cấu trúc rẽ nhánh).'
      ],
      leadIn: {
        hook: 'Khi bạn nhập mật khẩu điện thoại hay mã PIN thẻ ATM, hệ thống không biết trước bạn sẽ gõ đúng ngay lần đầu hay gõ sai 2 lần. Hệ thống sẽ tiếp tục yêu cầu bạn "Nhập lại mã PIN" chừng nào bạn chưa nhập đúng!',
        question: 'Làm sao để lập trình một hành động lặp đi lặp lại khi chúng ta hoàn toàn KHÔNG THỂ BIẾT TRƯỚC số lần lặp là bao nhiêu lần?',
        realWorldScenario: 'Đăng nhập tài khoản ngân hàng, yêu cầu người dùng nhập điểm thi trong thang [0, 10] (nếu nhập -5 thì bắt nhập lại), hoặc trò chơi tiếp tục chạy chừng nào nhân vật chưa hết máu. Đây chính là vương quốc của vòng lặp while và do...while.'
      },
      theorySections: [
        {
          title: '1. Vòng lặp while (Tiền kiểm tra - Pre-test Loop)',
          content: 'Cú pháp:\n```cpp\nwhile (dieu_kien) {\n    // Than vong lap\n}\n```\n\nCơ chế hoạt động:\n- **Kiểm tra điều kiện TRƯỚC KHI thực thi thân lặp**.\n- Nếu điều kiện là `true` $\\rightarrow$ thực thi thân lặp, sau đó quay lại kiểm tra điều kiện.\n- Nếu điều kiện là `false` ngay từ đầu $\\rightarrow$ **thân lặp không được chạy dù chỉ một lần**.\n\nỨng dụng điển hình: Duyệt xử lý khi chưa biết số lần lặp, bài toán phân rã chữ số của số nguyên $n > 0$.',
          callout: {
            type: 'warning',
            text: '⚠️ Bẫy vô tận: Trong thân vòng lặp while, BẮT BUỘC phải có câu lệnh làm thay đổi giá trị của biến điều kiện (ví dụ: n /= 10 hoặc i++). Nếu quên, điều kiện sẽ luôn true mãi mãi gây treo máy!'
          }
        },
        {
          title: '2. Vòng lặp do...while (Hậu kiểm tra - Post-test Loop)',
          content: 'Cú pháp:\n```cpp\ndo {\n    // Than vong lap\n} while (dieu_kien); // Chu y dau cham phay bat buoc o cuoi!\n```\n\nCơ chế hoạt động:\n- **Thực thi thân vòng lặp TRƯỚC RỒI MỚI KIỂM TRA ĐIỀU KIỆN**.\n- Vì vậy, thân vòng lặp **LUÔN ĐƯỢC CHẠY ÍT NHẤT 1 LẦN**, bất kể điều kiện đúng hay sai!\n- Nếu điều kiện `true` $\\rightarrow$ tiếp tục lặp lại.\n- Nếu điều kiện `false` $\\rightarrow$ dừng lặp.',
          callout: {
            type: 'tip',
            text: '💡 Dấu hiệu nhận biết do...while: Bất cứ khi nào bạn cần "Làm một việc trước (như hiển thị menu hoặc nhận input của người dùng), rồi sau đó mới kiểm tra xem có cần làm lại không", do...while luôn là lựa chọn số 1.'
          }
        },
        {
          title: '3. Mô hình chuẩn: Kiểm tra dữ liệu đầu vào (Input Validation Pattern)',
          content: 'Người dùng có thể vô tình hoặc cố ý nhập dữ liệu sai (nhập điểm -2 hoặc 15). Cấu trúc `do...while` là giải pháp kinh điển để bảo vệ chương trình:\n```cpp\ndouble score;\ndo {\n    cout << "Nhap diem thi (0 - 10): ";\n    cin >> score;\n    if (score < 0 || score > 10) {\n        cout << "Diem khong hop le! Vui long nhap lai.\\n";\n    }\n} while (score < 0 || score > 10); // Lap lai KHI DU LIEU CON SAI\n```\nQuy tắc nhớ: Điều kiện trong `while (...)` là điều kiện để **TIẾP TỤC LẶP** (tức là điều kiện khi dữ liệu còn BỊ SAI).'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Tách chữ số, tính tổng các chữ số và đảo ngược số nguyên dương',
          problem: 'Nhập vào một số nguyên dương N bất kỳ (ví dụ: N = 12345). Sử dụng vòng lặp while để: 1. Tính tổng tất cả các chữ số của N; 2. Tìm số đảo ngược của N; 3. Kiểm tra xem N có phải là số đối xứng (Palindrome) hay không.',
          analysis: {
            input: 'n (long long) > 0',
            output: 'sumDigits (long long), reversedN (long long), kết luận Palindrome',
            idea: 'Lặp lấy chữ số cuối bằng phép chia dư % 10, đắp vào số đảo ngược (reversed = reversed * 10 + lastDigit), rồi bỏ chữ số cuối bằng n /= 10.',
            algorithm: 'Bước 1: do...while kiểm tra n > 0.\nBước 2: Sao lưu originalN = n, tempN = n, sumDigits = 0, reversedN = 0.\nBước 3: while (tempN > 0):\n  - lastDigit = tempN % 10\n  - sumDigits += lastDigit\n  - reversedN = reversedN * 10 + lastDigit\n  - tempN /= 10\nBước 4: So sánh reversedN == originalN.'
          },
          code: `#include <iostream>
using namespace std;

int main() {
    long long n = 0;

    // Ky thuat Input Validation: Bat buoc nhap so duong
    do {
        cout << "Nhap so nguyen duong N: ";
        cin >> n;
        if (n <= 0) {
            cout << "Du lieu khong hop le! N phai > 0. Xin thu lai.\\n";
        }
    } while (n <= 0);

    long long originalN = n;
    long long tempN = n;
    long long sumDigits = 0;
    long long reversedN = 0;

    // Vong lap while tach tung chu so tu phai qua trai
    while (tempN > 0) {
        int lastDigit = tempN % 10;             // Lay chu so hang don vi
        sumDigits += lastDigit;                 // Cong vao tong chu so
        reversedN = reversedN * 10 + lastDigit; // Day so dao nguoc sang trai
        tempN /= 10;                            // Xoa chu so hang don vi
    }

    cout << "------------------------------------------" << endl;
    cout << "So ban dau      : " << originalN << endl;
    cout << "Tong cac chu so : " << sumDigits << endl;
    cout << "So dao nguoc    : " << reversedN << endl;

    if (reversedN == originalN) {
        cout << "=> Ket luan: " << originalN << " la SO DOI XUNG (Palindrome)." << endl;
    } else {
        cout << "=> Ket luan: " << originalN << " KHONG PHAI la so doi xung." << endl;
    }

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'do { ... } while (n <= 0);',
              explanation: 'Đảm bảo người dùng phải nhập đúng số nguyên dương mới cho đi tiếp.'
            },
            {
              lineOrBlock: 'reversedN = reversedN * 10 + lastDigit;',
              explanation: 'Dịch các chữ số hiện có sang trái một hàng trong hệ thập phân rồi cộng chữ số mới vào hàng đơn vị.'
            },
            {
              lineOrBlock: 'tempN /= 10;',
              explanation: 'Phép chia nguyên cho 10 giúp cắt bỏ chữ số cuối cùng, tiến dần tới điều kiện dừng tempN == 0.'
            }
          ],
          executionResult: {
            sampleInput: '12321',
            sampleOutput: `Nhap so nguyen duong N: 12321
------------------------------------------
So ban dau      : 12321
Tong cac chu so : 9
So dao nguoc    : 12321
=> Ket luan: 12321 la SO DOI XUNG (Palindrome).`
          },
          analysisOfResult: 'Số 12321 đảo ngược lại vẫn là 12321, do đó điều kiện reversedN == originalN đúng, kết luận là số đối xứng (Palindrome).'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Nhập mã PIN với do...while',
          task: 'Viết chương trình yêu cầu nhập mã PIN bảo mật (mã đúng là 1234). Cho phép nhập lại đến khi nào đúng thì in "Dang nhap thanh cong!".',
          hints: ['Dùng biến pin; do { cin >> pin; } while (pin != 1234);'],
          expectedOutput: 'Nhap sai: Sai ma PIN! -> Nhap dung 1234: Dang nhap thanh cong!'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Đếm số lượng chữ số của số nguyên N',
          task: 'Nhập số nguyên N (xử lý được cả N = 0 và N < 0). Đếm xem N có bao nhiêu chữ số.',
          hints: ['Dùng abs(N) để chuyển số âm thành dương, sau đó dùng do...while chia n /= 10.'],
          expectedOutput: 'Nhap N: -9876 -> So co 4 chu so'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Tìm ước chung lớn nhất (UCLN) bằng thuật toán Euclid',
          task: 'Nhập 2 số nguyên dương a và b. Sử dụng vòng lặp while để tìm UCLN theo thuật toán chia dư Euclid.',
          hints: ['Trong khi b != 0: r = a % b; a = b; b = r; Khi b == 0 thì UCLN là a.'],
          expectedOutput: 'Nhap a b: 24 36 -> UCLN = 12'
        }
      ],
      commonErrors: [
        {
          name: 'Vòng lặp vô tận do quên biến đổi điều kiện dừng',
          symptom: 'Chương trình chạy mãi mãi, quạt máy tính kêu to, màn hình đứng im không phản hồi.',
          rootCause: 'Trong thân while, quên cập nhật giá trị biến điều kiện (quên ++i hoặc tempN /= 10), khiến điều kiện lặp luôn đúng.',
          howToFix: 'Ngay khi gõ xong từ khóa while (condition), việc đầu tiên cần làm là viết lệnh biến đổi biến condition ở cuối thân lặp.',
          badCode: `int i = 1;
while (i <= 5) {
    cout << i << " ";
    // Quen ++i o day! i luon bang 1 <= 5 mai mai!
}`,
          goodCode: `int i = 1;
while (i <= 5) {
    cout << i << " ";
    ++i; // Co buoc tang ro rang
}`
        },
        {
          name: 'Quên dấu chấm phẩy ở cuối lệnh do...while',
          symptom: 'Trình biên dịch báo lỗi: expected \';\' after do-while statement.',
          rootCause: 'Khác với for và while, do...while là một câu lệnh hoàn chỉnh kết thúc bằng while (...); nên bắt buộc phải có dấu chấm phẩy.',
          howToFix: 'Luôn nhớ công thức kết thúc của do...while: "};"',
          badCode: `do {
    cin >> x;
} while (x <= 0) // Thieu cham phay!`,
          goodCode: `do {
    cin >> x;
} while (x <= 0); // Dung cu phap`
        },
        {
          name: 'Nhầm lẫn điều kiện lặp lại trong Input Validation',
          symptom: 'Người dùng nhập số hợp lệ thì bị bắt nhập lại, nhập số rác thì chương trình lại cho qua!',
          rootCause: 'Viết điều kiện chấp nhận dữ liệu vào while (...) thay vì điều kiện dữ liệu BỊ SAI.',
          howToFix: 'Điều kiện trong while của do...while là điều kiện để TIẾP TỤC LẶP LẠI (tức là khi dữ liệu còn BỊ SAI).',
          badCode: `// Sai: Muon diem tu 0 den 10 nhung lai lap khi diem DUNG!
do {
    cin >> score;
} while (score >= 0 && score <= 10);`,
          goodCode: `// Dung: Lap lai KHI DIEM BI SAI
do {
    cin >> score;
} while (score < 0 || score > 10);`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'So sánh while và do...while',
          description: 'Cho biết sự khác biệt cốt lõi nhất giữa while và do...while về số lần thực thi tối thiểu của thân vòng lặp.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Menu tương tác lặp lại',
          description: 'Viết chương trình hiển thị menu 3 lựa chọn (1: Chào hỏi, 2: Xem giờ, 3: Thoát). Sử dụng do...while để lặp lại menu sau mỗi thao tác chừng nào người dùng chưa chọn phím 3.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Đoán số ngẫu nhiên (Number Guessing Game)',
          description: 'Máy tính tạo ra một số bí mật từ 1 đến 100. Người dùng đoán số, máy tính gợi ý "Lớn hơn" hoặc "Nhỏ hơn" đến khi đoán đúng. Đếm số lần đã đoán.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Dãy số Collatz (Giả thuyết 3n + 1)',
          description: 'Cho số nguyên dương n. Nếu n chẵn, n = n / 2. Nếu n lẻ, n = 3n + 1. Quá trình dừng lại khi n = 1. Viết chương trình in ra toàn bộ tiến trình biến đổi và đếm số bước biến đổi để n chạm về 1.',
          sampleTestCase: {
            input: '6',
            output: 'Day bien doi: 6 3 10 5 16 8 4 2 1 (So buoc: 8)'
          }
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Trường hợp nào sau đây khiến thân vòng lặp while không được thực thi dù chỉ một lần?',
          options: [
            'Khi điều kiện kiểm tra ban đầu trả về false',
            'Khi không có câu lệnh break',
            'Khi biến đếm bắt đầu từ 0',
            'Khi sử dụng biến kiểu double'
          ],
          correctIndex: 0,
          explanation: 'Vì vòng lặp while là cấu trúc tiền kiểm tra (Pre-test), nếu điều kiện sai ngay trước lượt chạy đầu tiên thì chương trình bỏ qua toàn bộ thân vòng lặp.'
        },
        {
          id: 2,
          question: 'Điểm khác biệt quan trọng nhất của do...while so với while là gì?',
          options: [
            'do...while chạy nhanh hơn while',
            'do...while luôn thực thi thân lặp ít nhất 1 lần',
            'do...while không bao giờ bị vòng lặp vô tận',
            'do...while chỉ áp dụng được với số nguyên'
          ],
          correctIndex: 1,
          explanation: 'do...while là cấu trúc hậu kiểm tra (Post-test), thân lặp chạy trước rồi mới kiểm tra điều kiện ở cuối nên luôn được chạy ít nhất 1 lần.'
        },
        {
          id: 3,
          question: 'Để yêu cầu người dùng nhập tuổi hợp lệ trong khoảng [18, 60] và bắt nhập lại nếu sai, điều kiện trong do { ... } while (...); phải viết là gì?',
          options: [
            'while (age >= 18 && age <= 60);',
            'while (age < 18 || age > 60);',
            'while (age < 18 && age > 60);',
            'while (age == 18 || age == 60);'
          ],
          correctIndex: 1,
          explanation: 'Vòng lặp cần tiếp tục KHI DỮ LIỆU BỊ SAI, tức là khi tuổi nhỏ hơn 18 HOẶC lớn hơn 60.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'while (cond)', val: 'Tiền kiểm tra: Kiểm tra điều kiện TRƯỚC, tối thiểu lặp 0 lần' },
          { key: 'do { ... } while (cond);', val: 'Hậu kiểm tra: Chạy thân TRƯỚC, tối thiểu lặp 1 lần, có dấu chấm phẩy' },
          { key: 'Input Validation', val: 'do { cin >> x; } while (x còn bị sai);' },
          { key: 'Tách chữ số', val: 'lastDigit = n % 10; n /= 10;' },
          { key: 'Chống treo máy', val: 'Luôn biến đổi biến điều kiện dừng trong thân lặp' }
        ],
        coreTakeaway: 'Khi biết trước số lần lặp, hãy dùng for. Khi số lần lặp phụ thuộc vào điều kiện động hoặc hành vi của người dùng, hãy dùng while hoặc do...while.'
      },
      checklist: [
        'Tôi phân biệt rõ ràng khi nào nên dùng while và khi nào dùng do...while.',
        'Tôi thành thạo kỹ thuật Input Validation với do...while.',
        'Tôi biết cách dùng vòng lặp while để tách từng chữ số của số nguyên.',
        'Tôi luôn kiểm soát biến điều kiện để tránh bẫy vòng lặp vô tận.'
      ],
      extendedChallenge: {
        title: 'Mô phỏng máy rút tiền ATM tự động (Rút tiền & Đổi mã PIN)',
        scenario: 'Xây dựng chương trình điều khiển cây ATM cho phép khách hàng thực hiện các giao dịch lặp đi lặp lại: 1. Xem số dư, 2. Rút tiền (chỉ cho phép rút bội số của 50.000đ và không vượt quá số dư), 3. Nạp tiền, 4. Đổi mã PIN, 5. Kết thúc giao dịch.',
        challengeTask: 'Dùng do...while duy trì menu cho đến khi chọn thoát. Kiểm tra mã PIN tối đa 3 lần, nếu sai quá 3 lần thì khóa thẻ.',
        thoughtGuidance: 'Vòng lặp while ngoài cùng quản lý số lần thử PIN, vòng do...while bên trong duy trì các lựa chọn chức năng ngân hàng.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 3: ĐIỀU KHIỂN VÒNG LẶP VỚI break & continue (L13)
    // -------------------------------------------------------------
    {
      id: 'CH04-L03',
      lessonNumber: 3,
      chapterNumber: 4,
      title: 'Điều Khiển Vòng Lặp Nâng Cao với break & continue',
      readingTimeMinutes: 50,
      moodleType: 'VPL Bài tập kiểm tra số nguyên tố bằng thuật toán tối ưu căn bậc 2',
      objectives: [
        'Hiểu bản chất và sự khác nhau căn bản giữa lệnh ngắt đột ngột break và lệnh nhảy cóc continue.',
        'Sử dụng thành thạo từ khóa break để thoát sớm khỏi vòng lặp ngay khi tìm thấy kết quả (Early Exit Optimization).',
        'Sử dụng thành thạo continue để bỏ qua phần còn lại của lượt lặp hiện tại và chuyển sang lượt tiếp theo.',
        'Làm chủ kỹ thuật sử dụng Biến cờ hiệu (Flag Variable / Sentinel) để đánh dấu trạng thái trong giải thuật.',
        'Xây dựng thuật toán kiểm tra số nguyên tố tối ưu với độ phức tạp O(sqrt(N)) kết hợp lệnh break.'
      ],
      prerequisites: [
        'Đã học xong Bài 1 và Bài 2 của Chương 4.'
      ],
      leadIn: {
        hook: 'Hãy tưởng tượng bạn đang tìm một quyển sách trên giá có 10.000 cuốn. Ngay khi bạn thấy cuốn sách ở vị trí thứ 15, bạn có tiếp tục đứng kiểm tra 9.985 cuốn còn lại không? Chắc chắn là không, bạn sẽ cầm sách và rời đi ngay!',
        question: 'Làm thế nào để ra lệnh cho máy tính lập tức DỪNG vòng lặp ngay khi đã tìm thấy thứ nó cần mà không lãng phí tài nguyên CPU chạy đến cuối?',
        realWorldScenario: 'Quét vân tay mở khóa cửa: Vừa khớp vân tay là mở cửa ngay lập tức; Quét virus trong máy tính: Bỏ qua các file hệ thống an toàn để nhảy cóc sang file tiếp theo. Đó chính là sức mạnh tối ưu hóa của break và continue.'
      },
      theorySections: [
        {
          title: '1. Lệnh break: Thoát khẩn cấp khỏi vòng lặp',
          content: 'Khi gặp lệnh `break` bên trong thân vòng lặp (`for`, `while`, hoặc `do...while`):\n- Chương trình **lập tức kết thúc toàn bộ vòng lặp hiện tại**.\n- Bỏ qua tất cả các câu lệnh còn lại trong thân lặp của lượt đó.\n- Nhảy thẳng ra câu lệnh đầu tiên nằm bên ngoài vòng lặp.\n\nỨng dụng tối ưu:\n- Tìm kiếm phần tử: Vừa thấy là thoát ngay (*Early Exit*).\n- Kiểm tra tính chất: Tìm thấy 1 phản ví dụ là kết luận ngay (ví dụ: tìm thấy 1 ước số thì kết luận ngay không phải số nguyên tố).',
          callout: {
            type: 'tip',
            text: '💡 Lưu ý phạm vi: Nếu có nhiều vòng lặp lồng nhau, lệnh `break` chỉ thoát ra khỏi DUY NHẤT một vòng lặp trực tiếp bao bọc nó, chứ không thoát hết tất cả các vòng lặp ngoài.'
          }
        },
        {
          title: '2. Lệnh continue: Bỏ qua lượt lặp hiện tại',
          content: 'Khi gặp lệnh `continue`:\n- Chương trình **bỏ qua toàn bộ các câu lệnh phía sau nó trong thân lặp của lượt hiện tại**.\n- Nhảy cóc ngay sang lượt lặp tiếp theo:\n  - Trong `for`: Nhảy tới bước cập nhật biến đếm (`buoc_nhay`), sau đó kiểm tra điều kiện.\n  - Trong `while` và `do...while`: Nhảy thẳng tới phần kiểm tra điều kiện lặp.\n\nỨng dụng:\n- Bỏ qua các giá trị ngoại lệ (ví dụ: bỏ qua số âm, bỏ qua học sinh bị cấm thi khi tính điểm trung bình).'
        },
        {
          title: '3. Kỹ thuật Biến cờ hiệu (Flag Variable / Sentinel Pattern)',
          content: 'Biến cờ hiệu thường là biến kiểu `bool`, dùng để ghi nhớ xem một sự kiện đặc biệt nào đó đã từng xảy ra trong suốt quá trình lặp hay chưa.\n\nKịch bản chuẩn (Giả định điều tốt đẹp):\n1. Ban đầu giả định điều kiện đúng: `bool isPrime = true;`\n2. Chạy vòng lặp kiểm tra các trường hợp vi phạm:\n   - Nếu phát hiện vi phạm: `isPrime = false; break;` (Hạ cờ và thoát sớm).\n3. Sau vòng lặp, kiểm tra trạng thái lá cờ: `if (isPrime) ... else ...`'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Thuật toán kiểm tra số nguyên tố tối ưu O(sqrt(N)) với break',
          problem: 'Nhập số nguyên dương N. Kiểm tra xem N có phải số nguyên tố hay không bằng thuật toán tối ưu (chỉ kiểm tra ước đến căn bậc hai của N) và sử dụng lệnh break.',
          analysis: {
            input: 'n (long long)',
            output: 'Kết luận N là số nguyên tố hay hợp số',
            idea: 'Nếu N có ước thì chắc chắn phải có ước nhỏ hơn hoặc bằng căn bậc 2 của N. Vừa thấy ước đầu tiên thì lập tức break dừng lặp.',
            algorithm: 'Bước 1: Nếu n < 2 -> false; Nếu n == 2 -> true; Nếu n chẵn > 2 -> false.\nBước 2: Đặt cờ isPrime = true. Lặp i = 3 với bước i += 2 đến khi i * i > n.\nBước 3: Nếu n % i == 0 -> isPrime = false; break;\nBước 4: In kết luận theo cờ isPrime.'
          },
          code: `#include <iostream>
using namespace std;

int main() {
    long long n;
    cout << "=== THUAT TOAN KIEM TRA SO NGUYEN TO TOI UU ===" << endl;
    cout << "Nhap so nguyen n: ";
    cin >> n;

    // 1. Loc truong hop n < 2
    if (n < 2) {
        cout << "=> " << n << " KHONG PHAI la so nguyen to (Phai >= 2)." << endl;
        return 0;
    }

    // 2. Xu ly so 2
    if (n == 2) {
        cout << "=> 2 la SO NGUYEN TO (So nguyen to chan duy nhat)." << endl;
        return 0;
    }

    // 3. Loc tat ca cac so chan > 2
    if (n % 2 == 0) {
        cout << "=> " << n << " KHONG PHAI la so nguyen to (Chia het cho 2)." << endl;
        return 0;
    }

    // 4. Dat co hieu va kiem tra den can bac hai (i * i <= n)
    bool isPrime = true;
    for (long long i = 3; i * i <= n; i += 2) {
        if (n % i == 0) {
            isPrime = false; // Ha co khi tim thay uoc so
            cout << "[Debug]: Tim thay uoc so nho nhat la " << i << " -> Dung lap ngay lap tuc!" << endl;
            break;           // Thoat khoi vong lap ngay, khong tinh tiep
        }
    }

    // 5. Kiem tra co hieu
    cout << "------------------------------------------" << endl;
    if (isPrime) {
        cout << "=> Ket luan: " << n << " la SO NGUYEN TO." << endl;
    } else {
        cout << "=> Ket luan: " << n << " KHONG PHAI la so nguyen to." << endl;
    }

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'for (long long i = 3; i * i <= n; i += 2)',
              explanation: 'Điều kiện i * i <= n tương đương i <= sqrt(n) nhưng không phải gọi hàm sqrt() tốn thời gian và tránh sai số số thực.'
            },
            {
              lineOrBlock: 'isPrime = false; break;',
              explanation: 'Hạ cờ hiệu và lập tức dùng break để ngắt vòng lặp, không duyệt vô ích các số tiếp theo.'
            }
          ],
          executionResult: {
            sampleInput: '1000000007',
            sampleOutput: `=== THUAT TOAN KIEM TRA SO NGUYEN TO TOI UU ===
Nhap so nguyen n: 1000000007
------------------------------------------
=> Ket luan: 1000000007 la SO NGUYEN TO.`
          },
          analysisOfResult: 'Nhờ điều kiện i * i <= n, để kiểm tra số 1 tỷ, thuật toán chỉ mất ~31.622 lượt lặp thay vì 1 tỷ lượt, tiết kiệm hơn 99.99% thời gian chạy!'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Sử dụng continue bỏ qua số chia hết cho 3',
          task: 'Sử dụng vòng lặp for và lệnh continue để in ra tất cả các số từ 1 đến 20 ngoại trừ các số chia hết cho 3.',
          hints: ['if (i % 3 == 0) continue; cout << i << " ";'],
          expectedOutput: '1 2 4 5 7 8 10 11 13 14 16 17 19 20'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Nhập liên tục đến khi gặp số 0 thì break',
          task: 'Cho người dùng nhập liên tục các số nguyên. Sử dụng while (true) kết hợp break để dừng khi nhập 0, dùng continue để bỏ qua số âm, tính tổng các số dương.',
          hints: ['while (true) { cin >> x; if (x == 0) break; if (x < 0) continue; sum += x; }'],
          expectedOutput: 'Nhap: 5 -3 10 0 -> Tong cac so duong = 15'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Tìm số nguyên tố nhỏ nhất lớn hơn N',
          task: 'Nhập số nguyên dương N. Tìm và in ra số nguyên tố kế tiếp ngay sau N.',
          hints: ['Khởi tạo candidate = N + 1; lặp while (true) kiểm tra nguyên tố, gặp là in rồi break.'],
          expectedOutput: 'Nhap N: 14 -> So nguyen to tiep theo la 17'
        }
      ],
      commonErrors: [
        {
          name: 'Bẫy vòng lặp vô tận khi dùng continue trong while',
          symptom: 'Chương trình bị treo đứng tại một số cụ thể khi chạy lệnh continue trong vòng while.',
          rootCause: 'Lệnh continue bỏ qua toàn bộ phần thân phía dưới, bao gồm cả bước tăng biến đếm ++i ở cuối thân while, khiến i không bao giờ thay đổi giá trị.',
          howToFix: 'Khi dùng continue trong vòng lặp while, hãy luôn tăng biến đếm trước khi gọi continue.',
          badCode: `int i = 1;
while (i <= 10) {
    if (i == 5) {
        continue; // NGUY HIEM: Nhay ve dau while ma quen chua tang i!
    }
    cout << i << " ";
    ++i; // Bi bo qua khi i == 5 -> Treo mai mai o i = 5!
}`,
          goodCode: `int i = 1;
while (i <= 10) {
    if (i == 5) {
        ++i;      // Tang i truoc khi continue
        continue;
    }
    cout << i << " ";
    ++i;
}`
        },
        {
          name: 'Lầm tưởng break sẽ thoát hết tất cả các vòng lặp lồng nhau',
          symptom: 'Muốn dừng toàn bộ chương trình nhưng vòng lặp ngoài cùng vẫn tiếp tục chạy.',
          rootCause: 'Lệnh break chỉ có tác dụng bẻ gãy một vòng lặp nằm gần nó nhất trực tiếp bao bọc nó.',
          howToFix: 'Để thoát nhiều tầng vòng lặp lồng nhau, hãy sử dụng biến cờ hiệu (flag) kết hợp ở điều kiện vòng lặp ngoài.',
          badCode: `for (int i = 0; i < 5; ++i) {
    for (int j = 0; j < 5; ++j) {
        if (j == 2) break; // Chi thoat vong lap j, vong i van tiep tuc!
    }
}`,
          goodCode: `bool stopAll = false;
for (int i = 0; i < 5 && !stopAll; ++i) {
    for (int j = 0; j < 5; ++j) {
        if (j == 2) {
            stopAll = true; // Bat co dung toan bo
            break;
        }
    }
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Phân biệt hành vi của break và continue',
          description: 'Nêu sự khác nhau cơ bản giữa câu lệnh break và continue khi được đặt bên trong vòng lặp for.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Dự đoán output vòng lặp có continue',
          description: 'Cho đoạn mã: `for (int i = 1; i <= 6; ++i) { if (i == 3) continue; if (i == 5) break; cout << i << " "; }`. Hãy xác định màn hình sẽ in ra những số nào.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Liệt kê K số nguyên tố đầu tiên',
          description: 'Viết chương trình nhập số nguyên dương K. In ra K số nguyên tố đầu tiên (ví dụ K = 5 thì in ra: 2 3 5 7 11).',
          sampleTestCase: {
            input: '5',
            output: '2 3 5 7 11'
          }
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Phân tích thừa số nguyên tố (Prime Factorization)',
          description: 'Nhập số nguyên dương N. Phân tích N thành tích các thừa số nguyên tố. Ví dụ: N = 60 -> 2 * 2 * 3 * 5.',
          sampleTestCase: {
            input: '60',
            output: '2 x 2 x 3 x 5'
          }
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Lệnh nào dùng để dừng và thoát vĩnh viễn khỏi toàn bộ vòng lặp hiện tại?',
          options: [
            'continue',
            'break',
            'return 0',
            'default'
          ],
          correctIndex: 1,
          explanation: 'Lệnh break có chức năng kết thúc ngay lập tức vòng lặp chứa nó và nhảy ra ngoài.'
        },
        {
          id: 2,
          question: 'Khi lệnh continue được kích hoạt trong vòng lặp for, luồng điều khiển sẽ nhảy đến đâu?',
          options: [
            'Nhảy ra ngoài vòng lặp',
            'Quay về câu lệnh đầu tiên của thân vòng lặp',
            'Nhảy đến biểu thức bước nhảy (increment/decrement) của for',
            'Dừng chương trình'
          ],
          correctIndex: 2,
          explanation: 'Trong vòng lặp for, continue sẽ bỏ qua các lệnh còn lại trong thân và chuyển ngay tới bước cập nhật biến đếm (bước nhảy) trước khi kiểm tra lại điều kiện.'
        },
        {
          id: 3,
          question: 'Thuật toán kiểm tra số nguyên tố N tối ưu dừng kiểm tra ước ở đâu?',
          options: [
            'Tại N - 1',
            'Tại N / 2',
            'Tại căn bậc hai của N (sqrt(N))',
            'Tại 100'
          ],
          correctIndex: 2,
          explanation: 'Nếu N là hợp số thì nó luôn có ít nhất một ước số nằm trong đoạn từ 2 đến sqrt(N). Do đó chỉ cần kiểm tra tới sqrt(N) là đủ kết luận.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'break;', val: 'Hủy toàn bộ vòng lặp ngay lập tức, nhảy ra ngoài' },
          { key: 'continue;', val: 'Bỏ qua phần còn lại của lượt này, nhảy sang lượt tiếp theo' },
          { key: 'Flag (Cờ hiệu)', val: 'Biến bool ghi nhớ trạng thái (true/false) qua các vòng lặp' },
          { key: 'Early Exit', val: 'Thoát sớm bằng break để tiết kiệm tối đa thời gian CPU' },
          { key: 'O(sqrt(N))', val: 'Độ phức tạp tối ưu để kiểm tra số nguyên tố' }
        ],
        coreTakeaway: 'Sử dụng break để dừng ngay khi có kết quả và continue để bỏ qua ngoại lệ là hai vũ khí tối ưu hóa hiệu năng vòng lặp quan trọng nhất.'
      },
      checklist: [
        'Tôi phân biệt rạch ròi cơ chế của break và continue.',
        'Tôi biết cách tối ưu hóa thuật toán bằng kỹ thuật thoát sớm (Early Exit).',
        'Tôi tránh được bẫy vô tận khi dùng continue trong vòng lặp while.',
        'Tôi thành thạo kỹ thuật cờ hiệu (Flag) để giải các bài toán kiểm tra tính chất số học.'
      ],
      extendedChallenge: {
        title: 'Xây dựng module kiểm tra độ mạnh mật khẩu (Password Strength Checker)',
        scenario: 'Trong hệ thống an ninh mạng, mật khẩu của người dùng được kiểm tra tuần tự từng ký tự. Một mật khẩu an toàn phải có ít nhất 8 ký tự, chứa ít nhất một chữ hoa, một chữ thường, một chữ số và một ký tự đặc biệt (@, #, $, %, !).',
        challengeTask: 'Dùng các biến cờ bool: hasUpper, hasLower, hasDigit, hasSpecial. Duyệt qua từng ký tự. Nếu cả 4 cờ đều đã bật true thì dùng break thoát sớm.',
        thoughtGuidance: 'Dùng if (hasUpper && hasLower && hasDigit && hasSpecial) break; để không cần duyệt hết chuỗi nếu đã đủ điều kiện an toàn.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 4: VÒNG LẶP LỒNG NHAU & VẼ HÌNH SAO (L14)
    // -------------------------------------------------------------
    {
      id: 'CH04-L04',
      lessonNumber: 4,
      chapterNumber: 4,
      title: 'Vòng Lặp Lồng Nhau (Nested Loops) & Nghệ Thuật Vẽ Hình Sao',
      readingTimeMinutes: 55,
      moodleType: 'Bài tập Lab 02: Thiết kế hoa văn ma trận ký tự và bảng cửu chương',
      objectives: [
        'Nắm vững tư duy không gian đa chiều với cấu trúc vòng lặp lồng nhau (Nested Loops): Vòng ngoài quản lý Hàng (Row), vòng trong quản lý Cột (Column).',
        'Phân tích được số lần thực thi tổng cộng của các câu lệnh bên trong thân vòng lặp lồng nhau (Tích số lần lặp: M x N).',
        'Làm chủ thuật toán in Bảng cửu chương từ 1 đến 10 với định dạng căn lề bảng ngay ngắn.',
        'Nắm vững phương pháp thiết lập phương trình tọa độ i - j để giải quyết các bài toán vẽ hình ký tự: Hình vuông đặc/rỗng, tam giác vuông, tam giác cân đối xứng.',
        'Nhận thức về độ phức tạp thuật toán O(N^2) và tư duy tối ưu hóa hiệu năng vòng lặp.'
      ],
      prerequisites: [
        'Đã học xong 3 bài trước của Chương 4 (for, while, break/continue).'
      ],
      leadIn: {
        hook: 'Màn hình máy tính bạn đang nhìn thực chất là một lưới ma trận điểm ảnh (Pixels) gồm hàng ngàn hàng và cột (ví dụ: 1920 cột x 1080 hàng). Để hiển thị một khung hình đồ họa game 3D, máy tính phải quét qua từng điểm ảnh một.',
        question: 'Làm thế nào để điều khiển máy tính di chuyển và thao tác trên một không gian hai chiều gồm Hàng và Cột?',
        realWorldScenario: 'In bảng điểm tổng kết cho cả lớp (mỗi sinh viên là một hàng, mỗi môn học là một cột), in vé xem phim rạp chiếu (hàng A đến H, ghế 1 đến 12), hay ma trận xoay bàn cờ vua 8x8. Cốt lõi của mọi cấu trúc dạng bảng 2D chính là Vòng lặp lồng nhau (Nested Loops).'
      },
      theorySections: [
        {
          title: '1. Cấu trúc Vòng lặp lồng nhau (Nested Loops)',
          content: 'Vòng lặp lồng nhau là cấu trúc trong đó một vòng lặp (vòng lặp con / vòng lặp trong) được đặt trọn vẹn bên trong thân của một vòng lặp khác (vòng lặp cha / vòng lặp ngoài).\n\nCú pháp chuẩn dạng 2 chiều:\n```cpp\nfor (int i = 1; i <= rows; ++i) {       // Vong ngoai: Duyet qua tung HANG\n    for (int j = 1; j <= cols; ++j) {   // Vong trong: Duyet qua tung COT tren hang do\n        cout << "* ";\n    }\n    cout << endl; // XUONG DONG sau khi da in xong het tat ca cac cot cua hang do\n}\n```',
          callout: {
            type: 'tip',
            text: '💡 Quy tắc vàng: Ứng với MỖI MỘT LẦN lặp của vòng ngoài i, vòng trong j sẽ chạy TRỌN VẸN TỪ ĐẦU ĐẾN CUỐI. Nếu vòng ngoài chạy M lần, vòng trong chạy N lần, thân trong cùng sẽ chạy M x N lần!'
          }
        },
        {
          title: '2. Phương pháp giải bài toán Vẽ hình sao (Pattern Printing Framework)',
          content: 'Mọi bài toán vẽ hình hoa văn ký tự đều được quy về **bài toán quan hệ tọa độ giữa Hàng i và Cột j**:\n- **Bước 1:** Xác định tổng số hàng $H$ $\\rightarrow$ Vòng lặp ngoài: `for (int i = 1; i <= H; ++i)`.\n- **Bước 2:** Trên mỗi hàng $i$, phân tích xem cần in bao nhiêu khoảng trắng ` ` và bao nhiêu dấu sao `*`.\n- **Bước 3:** Viết 2 vòng lặp con nối tiếp nhau bên trong thân vòng ngoài:\n  1. Vòng lặp in khoảng trắng.\n  2. Vòng lặp in dấu sao.\n- **Bước 4:** In lệnh xuống dòng `cout << endl;` ngay trước khi kết thúc một lượt của vòng lặp ngoài.'
        },
        {
          title: '3. Các dạng hình học kinh điển',
          content: '- **Tam giác vuông góc trái dưới:** Hàng $i$ có đúng $i$ dấu sao $\\rightarrow$ Vòng trong: `for (int j = 1; j <= i; ++j) cout << "* ";`\n- **Tam giác vuông góc trái trên:** Hàng $i$ có $H - i + 1$ dấu sao $\\rightarrow$ Vòng trong: `for (int j = 1; j <= H - i + 1; ++j) cout << "* ";`\n- **Hình chữ nhật rỗng:** Dấu sao chỉ xuất hiện ở biên: `i == 1 || i == H || j == 1 || j == W`. Còn lại in khoảng trắng.'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: In Bảng cửu chương toàn diện và Vẽ Tam giác cân sao đối xứng',
          problem: 'Viết chương trình thực hiện 2 nhiệm vụ đồ họa console: 1. In bảng cửu chương từ 1 đến 9 theo dạng lưới ma trận căn lề ngay ngắn bằng std::setw; 2. Nhập chiều cao H (2 <= H <= 20). Vẽ một tam giác cân rỗng ruột bằng các dấu sao *.',
          analysis: {
            input: 'Chiều cao H (int)',
            output: 'Bảng cửu chương 9x9 và Tam giác cân rỗng chiều cao H',
            idea: 'Bảng cửu chương dùng i=1..9, j=1..9 in setw(4) << i*j. Tam giác cân rỗng in H-i khoảng trắng đệm, sau đó in sao ở k=1, k=2*i-1 hoặc ở đáy i=H.',
            algorithm: 'Bước 1: Hai vòng for i, j từ 1 đến 9 in bảng cửu chương.\nBước 2: Nhập H.\nBước 3: Vòng ngoài for i = 1..H:\n  - Vòng con 1: sp = 1..(H-i) in khoảng trắng\n  - Vòng con 2: k = 1..(2*i-1): if (k == 1 || k == 2*i-1 || i == H) in sao, else in cách\n  - Xuống dòng cout << endl.'
          },
          code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    cout << "=== PHAN 1: BANG CUU CHUONG (1 -> 9) ===" << endl;
    for (int i = 1; i <= 9; ++i) {
        for (int j = 1; j <= 9; ++j) {
            // Can le moi o 4 khoang trang de thang cot dep mat
            cout << setw(4) << (i * j);
        }
        cout << endl; // Xuong dong khi in het 1 hang
    }

    cout << "\\n=== PHAN 2: VE TAM GIAC CAN RONG CHIEU CAO H ===" << endl;
    int h = 0;
    cout << "Nhap chieu cao tam giac H (2 <= H <= 20): ";
    cin >> h;

    if (h < 2 || h > 20) {
        cout << "Chieu cao ngoai pham vi quy dinh!" << endl;
        return 0;
    }

    cout << "------------------------------------------" << endl;
    for (int i = 1; i <= h; ++i) {
        // 1. In khoang trang dem o dau hang de tao hinh tam giac can
        for (int sp = 1; sp <= h - i; ++sp) {
            cout << " ";
        }

        // 2. In cac dau sao cua tam giac rong
        for (int k = 1; k <= 2 * i - 1; ++k) {
            // Chi in sao o bien dau (k == 1), bien cuoi (k == 2*i - 1) hoac hang day (i == h)
            if (k == 1 || k == 2 * i - 1 || i == h) {
                cout << "*";
            } else {
                cout << " "; // Rong o giua
            }
        }

        // 3. Xuong dong sang hang tiep theo
        cout << endl;
    }

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'cout << setw(4) << (i * j);',
              explanation: 'Hàm setw(4) trong thư viện <iomanip> dành sẵn 4 vị trí ký tự để in tích i*j, giúp bảng luôn thẳng tắp không bị lệch.'
            },
            {
              lineOrBlock: 'for (int sp = 1; sp <= h - i; ++sp)',
              explanation: 'In số lượng khoảng trắng giảm dần từ H-1 về 0 để tạo độ nghiêng đối xứng cho tam giác cân.'
            },
            {
              lineOrBlock: 'if (k == 1 || k == 2 * i - 1 || i == h)',
              explanation: 'Điều kiện biên: Chỉ in dấu sao tại cạnh trái (k=1), cạnh phải (k=2*i-1) hoặc toàn bộ đáy tam giác (i=h).'
            }
          ],
          executionResult: {
            sampleInput: '5',
            sampleOutput: `=== PHAN 1: BANG CUU CHUONG (1 -> 9) ===
   1   2   3   4   5   6   7   8   9
   2   4   6   8  10  12  14  16  18
   3   6   9  12  15  18  21  24  27
   4   8  12  16  20  24  28  32  36
   5  10  15  20  25  30  35  40  45
   6  12  18  24  30  36  42  48  54
   7  14  21  28  35  42  49  56  63
   8  16  24  32  40  48  56  64  72
   9  18  27  36  45  54  63  72  81

=== PHAN 2: VE TAM GIAC CAN RONG CHIEU CAO H ===
Nhap chieu cao tam giac H (2 <= H <= 20): 5
------------------------------------------
    *
   * *
  *   *
 *     *
*********`
          },
          analysisOfResult: 'Ở hàng thứ 3 (i = 3): Có 5 - 3 = 2 khoảng trắng đệm, tiếp đó có 2*3 - 1 = 5 ký tự: ký tự 1 là "*", ký tự 2-3-4 là khoảng trắng, ký tự 5 là "*".'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Vẽ hình vuông đặc kích thước N x N',
          task: 'Nhập số nguyên N. Sử dụng 2 vòng lặp for lồng nhau vẽ hình vuông đặc bằng các dấu sao.',
          hints: ['Vòng ngoài for i từ 1 đến N; vòng trong for j từ 1 đến N in "* "; hết vòng j in endl;'],
          expectedOutput: 'Nhap N: 3 ->\n* * *\n* * *\n* * *'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Vẽ hình chữ nhật rỗng viền sao',
          task: 'Nhập số hàng R và số cột C. Vẽ hình chữ nhật rỗng (chỉ in sao ở đường viền biên ngoài).',
          hints: ['Điều kiện in sao: if (i == 1 || i == R || j == 1 || j == C) in "* "; else in "  ";'],
          expectedOutput: 'In vien ngoai sao va rong ruot o giua'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Tam giác số Floyd',
          task: 'Nhập số hàng H. In ra tam giác số tăng dần liên tục: 1 / 2 3 / 4 5 6 / 7 8 9 10...',
          hints: ['Dùng biến count = 1 bên ngoài; hàng i lặp j từ 1 đến i in count++ << " "; hết hàng in endl;'],
          expectedOutput: '1\n2 3\n4 5 6\n7 8 9 10'
        }
      ],
      commonErrors: [
        {
          name: 'Quên lệnh xuống dòng cout << endl sau vòng lặp trong',
          symptom: 'Tất cả các ký tự sao in dồn trên một hàng ngang duy nhất dài ngoằng làm biến dạng hình.',
          rootCause: 'Quên đặt lệnh cout << endl; ở cuối thân của vòng lặp ngoài, khiến con trỏ màn hình không bao giờ nhảy xuống hàng tiếp theo.',
          howToFix: 'Cứ hết một hàng (kết thúc vòng lặp trong j) là BẮT BUỘC phải có lệnh xuống dòng cout << endl;.',
          badCode: `for (int i = 1; i <= n; ++i) {
    for (int j = 1; j <= n; ++j) {
        cout << "* ";
    }
    // Quen cout << endl o day!
}`,
          goodCode: `for (int i = 1; i <= n; ++i) {
    for (int j = 1; j <= n; ++j) {
        cout << "* ";
    }
    cout << endl; // Xuong dong khi het 1 hang
}`
        },
        {
          name: 'Trùng tên biến đếm giữa vòng lặp ngoài và vòng lặp trong',
          symptom: 'Vòng lặp chỉ chạy 1 lần hoặc bị lặp vô tận một cách khó hiểu.',
          rootCause: 'Dùng chung tên biến i cho cả vòng ngoài và vòng trong: for (int i = 0...) { for (int i = 0...) }. Biến i bên trong che mờ (Shadowing) và làm loạn giá trị của biến ngoài.',
          howToFix: 'Quy ước đặt tên biến đếm tọa độ chuẩn mực: Hàng dùng i, Cột dùng j, Chiều sâu thứ 3 dùng k.',
          badCode: `for (int i = 1; i <= 5; ++i) {
    for (int i = 1; i <= 5; ++i) { // LOI: Trung bien i!
        cout << i << " ";
    }
}`,
          goodCode: `for (int i = 1; i <= 5; ++i) {
    for (int j = 1; j <= 5; ++j) { // Dung bien j rieng biet
        cout << j << " ";
    }
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Đếm số lần thực thi trong vòng lặp lồng',
          description: 'Cho đoạn mã: `for (int i = 1; i <= 4; ++i) for (int j = 1; j <= 5; ++j) cout << "*";`. Câu lệnh `cout << "*";` được thực hiện tổng cộng bao nhiêu lần?'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Tam giác số đối xứng',
          description: 'Viết chương trình nhập N (1 <= N <= 9). In tam giác số có dạng:\n1\n1 2 1\n1 2 3 2 1\n1 2 3 4 3 2 1'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Vẽ Hình con thoi (Hình thoi sao rỗng)',
          description: 'Nhập số nguyên N (bán kính hình thoi). Vẽ hình thoi cân đối xứng gồm 2 * N - 1 hàng.',
          sampleTestCase: {
            input: '3',
            output: 'Hinh thoi rong chieu cao 5 hang'
          }
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Vẽ đồng hồ cát hoa văn ma trận',
          description: 'Vẽ hình đồng hồ cát đối xứng kích thước 2*N + 1 có các cạnh viền sao và 2 đường chéo chính/phụ giao nhau ở tâm.',
          sampleTestCase: {
            input: '3',
            output: 'Dong ho cat co duong cheo giao nhau'
          }
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Nếu vòng lặp ngoài chạy M lần và vòng lặp trong chạy N lần, thân vòng lặp trong sẽ thực hiện tổng cộng bao nhiêu lần?',
          options: [
            'M + N lần',
            'M * N lần',
            'N^M lần',
            'M^N lần'
          ],
          correctIndex: 1,
          explanation: 'Với mỗi lần chạy của vòng ngoài, vòng trong chạy trọn vẹn N lần. Do đó tổng số lần là M * N.'
        },
        {
          id: 2,
          question: 'Trong bài toán vẽ ma trận hình học hai chiều, quy ước thông thường là:',
          options: [
            'Vòng ngoài duyệt Cột, vòng trong duyệt Hàng',
            'Vòng ngoài duyệt Hàng, vòng trong duyệt Cột',
            'Cả hai vòng đều duyệt Hàng',
            'Không có quy ước cụ thể'
          ],
          correctIndex: 1,
          explanation: 'Màn hình máy tính in tuần tự từ trên xuống dưới, từ trái qua phải. Do đó bắt buộc vòng ngoài quản lý Hàng (i) và vòng trong quản lý Cột (j).'
        },
        {
          id: 3,
          question: 'Tại sao câu lệnh in xuống dòng cout << endl; phải nằm ngoài vòng lặp trong (vòng j)?',
          options: [
            'Để in nhanh hơn',
            'Vì nếu để bên trong, mỗi ký tự sẽ bị nhảy xuống một dòng riêng biệt làm vỡ hình',
            'Vì trình biên dịch bắt buộc',
            'Không quan trọng đặt ở đâu'
          ],
          correctIndex: 1,
          explanation: 'Vòng lặp trong in hết tất cả các cột trên một hàng ngang. Chỉ khi in xong toàn bộ cột của hàng đó mới được phép xuống dòng.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'for i (ngoài)', val: 'Quản lý số thứ tự Hàng (Row)' },
          { key: 'for j (trong)', val: 'Quản lý số thứ tự Cột (Column) trên hàng i' },
          { key: 'M x N', val: 'Tổng số lần thân trong cùng được thực thi' },
          { key: 'cout << endl;', val: 'Đặt ngay sau khi vòng lặp trong j kết thúc để ngắt hàng' },
          { key: 'Độc lập biến', val: 'Luôn dùng tên biến khác nhau: i cho hàng, j cho cột' }
        ],
        coreTakeaway: 'Vòng lặp lồng nhau là cánh cửa mở ra tư duy không gian đa chiều (2D, 3D). Mọi bài toán vẽ hình đều được chinh phục bằng cách thiết lập mối quan hệ toán học giữa Hàng i và Cột j.'
      },
      checklist: [
        'Tôi hiểu rõ nguyên lý phối hợp Hàng (i) và Cột (j) trong vòng lặp lồng nhau.',
        'Tôi tự tin thiết lập phương trình tọa độ để vẽ các hình tam giác, hình chữ nhật đặc/rỗng.',
        'Tôi luôn sử dụng các biến đếm độc lập (i, j, k) để tránh lỗi che mờ biến.',
        'Tôi đặt lệnh xuống dòng cout << endl đúng vị trí sau khi hoàn tất một hàng.'
      ],
      extendedChallenge: {
        title: 'Mô phỏng trò chơi Xếp hình Bàn cờ Ca-rô (Tic-Tac-Toe Grid & Checkerboard)',
        scenario: 'Trong các trò chơi cờ bàn như Cờ vua hay Cờ ca-rô, bàn cờ được biểu diễn dưới dạng ma trận lưới các ô vuông đan xen màu trắng/đen hoặc các đường kẻ tọa độ có số thứ tự hàng và chữ cái cột.',
        challengeTask: 'Nhập N (4 <= N <= 10). Vẽ bàn cờ ca-rô dạng họa tiết đan xen: Ô (i + j) chẵn in [ ], ô (i + j) lẻ in [X]. Có đánh số thứ tự hàng và cột ở biên.',
        thoughtGuidance: 'Sử dụng điều kiện chẵn lẻ của tổng tọa độ (i + j) % 2 == 0 để tạo hoa văn đan xen chuẩn mực.'
      }
    }
  ]
};
