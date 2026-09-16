import { LessonContent, ChapterData } from './chapter1Data.ts';

export const CHAPTER_7_DATA: ChapterData = {
  chapterId: 7,
  chapterCode: 'CH07',
  title: 'Mảng Hai Chiều (Ma Trận - Two-dimensional Array)',
  summary: 'Làm chủ cấu trúc dữ liệu mảng hai chiều (bảng ma trận) trong C++: Bản chất vùng nhớ tuyến tính hóa theo hàng (Row-major Order) trong RAM, cú pháp khai báo a[R][C] với hằng số tĩnh; kỹ thuật lồng 2 vòng lặp (hàng và cột) để nhập/xuất đẹp mắt bằng std::setw; các thuật toán tính toán thống kê theo từng hàng và từng cột; thuật toán tìm kiếm cực trị toàn cục kèm tọa độ (row, col); ma trận vuông và các tính chất hình học đặc thù của đường chéo chính (i == j), đường chéo phụ (i + j == N - 1), tam giác trên, tam giác dưới và thuật toán kiểm tra tính đối xứng qua đường chéo.',
  totalLessons: 3,
  lessons: [
    // -------------------------------------------------------------
    // BÀI 1: KHÁI NIỆM MA TRẬN, KHAI BÁO & NHẬP XUẤT (L22)
    // -------------------------------------------------------------
    {
      id: 'CH07-L01',
      lessonNumber: 1,
      chapterNumber: 7,
      title: 'Khái Niệm Ma Trận, Bản Chất Row-Major Order & Kỹ Thuật Nhập Xuất Lưới',
      readingTimeMinutes: 50,
      moodleType: 'Page mô phỏng cấu trúc ô nhớ RAM mảng 2 chiều + VPL Nhập xuất ma trận M x N',
      objectives: [
        'Hiểu bản chất khái niệm mảng hai chiều: Một mảng chứa các mảng một chiều (bảng gồm M hàng và N cột).',
        'Nắm vững nguyên lý lưu trữ trong RAM thực tế: Tuyến tính hóa theo hàng (Row-Major Order), địa chỉ a[i][j] = Base + (i * C + j) * sizeof(T).',
        'Cài đặt thành thạo cú pháp khai báo ma trận tĩnh với hằng số MAX_ROWS và MAX_COLS an toàn.',
        'Lồng 2 vòng lặp for (vòng ngoài duyệt hàng i, vòng trong duyệt cột j) để nhập và xuất dữ liệu.',
        'Sử dụng thư viện <iomanip> và bộ định dạng std::setw() để xuất ma trận ngay ngắn, thẳng cột chuẩn thẩm mỹ công nghiệp.'
      ],
      prerequisites: [
        'Đã học xong Chương 6 (Mảng một chiều) và Chương 4 (Vòng lặp lồng nhau).'
      ],
      leadIn: {
        hook: 'Bảng tính Excel với các ô (A1, B2), ảnh số RGB với hàng triệu pixel, bàn cờ vua 8x8 hay màn hình tivi độ phân giải 4K (3840x2160 điểm ảnh)... Máy tính lưu trữ và xử lý những cấu trúc dữ liệu dạng lưới 2 chiều này như thế nào?',
        question: 'Dù trên màn hình ta thấy ma trận có hình vuông hoặc chữ nhật 2 chiều, nhưng bộ nhớ RAM của máy tính chỉ là một dải ô nhớ thẳng hàng 1 chiều duy nhất. Làm sao máy tính biến một bảng 2 chiều thành một dải 1 chiều liên tục?',
        realWorldScenario: 'Xử lý điểm thi các môn học của từng sinh viên trong lớp (hàng là sinh viên, cột là môn học), bản đồ địa hình dạng lưới (grid map) trong game chiến thuật, hoặc ma trận biến đổi tọa độ 3D trong đồ họa máy tính.'
      },
      theorySections: [
        {
          title: '1. Khái niệm Mảng 2 chiều và Cú pháp khai báo',
          content: '**Mảng hai chiều (2D Array)** trong C++ thực chất là một mảng mà mỗi phần tử của nó lại là một mảng một chiều. Ta hình dung nó như một bảng lưới gồm các **hàng (rows)** và **cột (columns)**.\n\n**Cú pháp khai báo:**\n```cpp\nKiểuDữLiệu TênMảng[SốHàngTốiĐa][SốCộtTốiĐa];\n```\n*Ví dụ chuẩn mực:*\n```cpp\nconst int MAX_R = 100;\nconst int MAX_C = 100;\nint a[MAX_R][MAX_C]; // Ma tran co toi da 100 hang va 100 cot\n```\n\n**Khởi tạo giá trị trực tiếp:**\n```cpp\nint matrix[2][3] = {\n    {10, 20, 30}, // Hang 0\n    {40, 50, 60}  // Hang 1\n};\nint zeroMatrix[3][3] = {0}; // Khoi tao tat ca 9 phan tu bang 0\n```'
        },
        {
          title: '2. Bản chất lưu trữ Row-Major Order trong bộ nhớ RAM',
          content: 'Bộ nhớ RAM vật lý là một dải địa chỉ tuyến tính một chiều. C++ quy ước lưu trữ mảng hai chiều theo thứ tự **ưu tiên hàng (Row-Major Order)**:\n- Toàn bộ hàng 0 được lưu liên tiếp trước: `a[0][0], a[0][1], ..., a[0][C-1]`\n- Tiếp theo ngay sau là toàn bộ hàng 1: `a[1][0], a[1][1], ..., a[1][C-1]`\n\n**Công thức tính địa chỉ phần tử a[i][j]:**\n$$\\text{Địa chỉ của } a[i][j] = \\text{Base} + (i \\times C + j) \\times \\text{sizeof}(\\text{Type})$$\n*(Trong đó $C$ là số cột khai báo tĩnh của mảng).*\n- Vì vậy, việc duyệt ma trận theo hàng (`for i -> for j`) luôn nhanh hơn duyệt theo cột (`for j -> for i`) do tận dụng tối đa cơ chế nạp trước dòng nhớ đệm của CPU (**CPU Cache Spatial Locality**).'
        },
        {
          title: '3. Kỹ thuật lồng 2 vòng lặp và định dạng xuất std::setw()',
          content: 'Để nhập và xuất ma trận gồm $m$ hàng và $n$ cột:\n- Vòng lặp ngoài: Biến `i` chạy từ `0` đến `m - 1` (duyệt qua từng hàng).\n- Vòng lặp trong: Biến `j` chạy từ `0` đến `n - 1` (duyệt qua từng cột trong hàng đó).\n- Sử dụng `#include <iomanip>` và `setw(width)` để căn chỉnh thẳng cột:\n\n```cpp\nfor (int i = 0; i < m; ++i) {\n    for (int j = 0; j < n; ++j) {\n        cout << setw(6) << a[i][j];\n    }\n    cout << endl; // Xuong dong khi in het 1 hang\n}\n```'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Nhập và in bảng điểm lớp học dạng ma trận căn lề đẹp mắt',
          problem: 'Viết chương trình nhập số sinh viên M (hàng) và số môn học N (cột) với 1 <= M, N <= 10. Nhập điểm thi (số thực từ 0.0 đến 10.0) của từng sinh viên cho từng môn. In bảng điểm ra màn hình dưới dạng lưới ma trận thẳng hàng, có dòng tiêu đề cột và chỉ số hàng rõ ràng.',
          analysis: {
            input: 'M (số hàng), N (số cột) và M * N số thực điểm thi.',
            output: 'Bảng ma trận dạng lưới căn lề chuẩn với setw(8) và setprecision(1).',
            idea: 'Sử dụng mảng 2 chiều double scores[MAX][MAX]. Vòng for ngoài duyệt i (sinh viên), vòng for trong duyệt j (môn học).',
            algorithm: 'Bước 1: Nhập M, N và kiểm tra 1 <= M, N <= 10\nBước 2: Lồng for i, j để nhập cin >> scores[i][j]\nBước 3: In tiêu đề các môn Mon[0], Mon[1]...\nBước 4: Lồng for i, j để in scores[i][j] với setw(8)'
          },
          code: `#include <iostream>
#include <iomanip>
using namespace std;

const int MAX_STUDENTS = 20;
const int MAX_SUBJECTS = 10;

int main() {
    double scores[MAX_STUDENTS][MAX_SUBJECTS];
    int m = 0; // So sinh vien (So hang)
    int n = 0; // So mon hoc (So cot)

    cout << "=== HE THONG QUAN LY BANG DIEM (MA TRAN 2 CHIEU C++) ===" << endl;

    // 1. Nhap kich thuoc ma tran co kiem tra hop le
    do {
        cout << "Nhap so sinh vien M (1 <= M <= 20): ";
        cin >> m;
        cout << "Nhap so mon hoc N (1 <= N <= 10): ";
        cin >> n;
        if (m < 1 || m > 20 || n < 1 || n > 10) {
            cout << "[Loi]: Kich thuoc khong hop le! Vui long nhap lai.\n";
        }
    } while (m < 1 || m > 20 || n < 1 || n > 10);

    // 2. Nhap du lieu cho ma tran bang 2 vong lap long nhau
    cout << "\n--- NHAP DIEM THI (Ma tran " << m << "x" << n << ") ---" << endl;
    for (int i = 0; i < m; ++i) {
        cout << ">> Nhap diem cho Sinh vien [" << i << "]:" << endl;
        for (int j = 0; j < n; ++j) {
            cout << "   - Mon [" << j << "]: ";
            cin >> scores[i][j];
        }
    }

    // 3. Xuat ma tran ra man hinh dang bang can le chuan muc
    cout << "\n========================================================" << endl;
    cout << "                 BANG DIEM TONG HOP (GRID VIEW)         " << endl;
    cout << "========================================================" << endl;

    // In tieu de cot
    cout << left << setw(12) << "Sinh vien";
    for (int j = 0; j < n; ++j) {
        cout << right << setw(8) << ("Mon " + to_string(j));
    }
    cout << "\n" << string(12 + n * 8, '-') << endl;

    // In du lieu tung hang
    for (int i = 0; i < m; ++i) {
        cout << left << setw(12) << ("SV [" + to_string(i) + "]");
        for (int j = 0; j < n; ++j) {
            cout << right << fixed << setprecision(1) << setw(8) << scores[i][j];
        }
        cout << "\n"; // Xuong dong khi het 1 hang!
    }
    cout << string(12 + n * 8, '=') << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'double scores[MAX_STUDENTS][MAX_SUBJECTS];',
              explanation: 'Khai báo mảng 2 chiều tĩnh với kích thước tối đa cho hàng và cột theo chuẩn C++ an toàn.'
            },
            {
              lineOrBlock: 'for (int i = 0; i < m; ++i) { for (int j = 0; j < n; ++j) ... }',
              explanation: 'Mẫu hình chuẩn duyệt ma trận: vòng ngoài lặp theo hàng (i), vòng trong lặp theo từng cột (j) trên hàng đó.'
            },
            {
              lineOrBlock: 'cout << right << setw(8) << scores[i][j];',
              explanation: 'Định dạng in số thực căn lề phải với độ rộng 8 ký tự, tạo nên các cột thẳng hàng tuyệt đối.'
            }
          ],
          executionResult: {
            sampleInput: `3 3
8.5 7.0 9.0
6.0 8.5 7.5
9.5 9.0 10.0`,
            sampleOutput: `=== HE THONG QUAN LY BANG DIEM (MA TRAN 2 CHIEU C++) ===
Nhap so sinh vien M (1 <= M <= 20): 3
Nhap so mon hoc N (1 <= N <= 10): 3

--- NHAP DIEM THI (Ma tran 3x3) ---
>> Nhap diem cho Sinh vien [0]:
   - Mon [0]: 8.5
   - Mon [1]: 7.0
   - Mon [2]: 9.0
>> Nhap diem cho Sinh vien [1]:
   - Mon [0]: 6.0
   - Mon [1]: 8.5
   - Mon [2]: 7.5
>> Nhap diem cho Sinh vien [2]:
   - Mon [0]: 9.5
   - Mon [1]: 9.0
   - Mon [2]: 10.0

========================================================
                 BANG DIEM TONG HOP (GRID VIEW)         
========================================================
Sinh vien      Mon 0   Mon 1   Mon 2
------------------------------------
SV [0]           8.5     7.0     9.0
SV [1]           6.0     8.5     7.5
SV [2]           9.5     9.0    10.0
====================================`
          },
          analysisOfResult: 'Ma trận điểm 3x3 được nhập tuần tự theo hàng và xuất ra dạng lưới ngay ngắn, rõ ràng, dễ đọc cho người dùng.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Khởi tạo ma trận đơn vị',
          task: 'Nhập số nguyên N (1 <= N <= 10). Khởi tạo và in ra ma trận vuông N x N sao cho các phần tử trên đường chéo chính (i == j) bằng 1, các phần tử còn lại bằng 0.',
          hints: ['if (i == j) a[i][j] = 1; else a[i][j] = 0;'],
          expectedOutput: 'Ma trận đơn vị I kích thước N x N.'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'In ma trận chuyển vị (Transpose Matrix)',
          task: 'Nhập ma trận A kích thước M x N. Tạo và in ma trận chuyển vị A^T kích thước N x M trong đó hàng của A trở thành cột của A^T (tức là aT[j][i] = a[i][j]).',
          hints: ['Duyệt vòng for ngoài theo j từ 0 đến n - 1, vòng trong theo i từ 0 đến m - 1.'],
          expectedOutput: 'Bảng chuyển vị N hàng, M cột.'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Cộng hai ma trận cùng kích thước',
          task: 'Nhập hai ma trận số nguyên A và B có cùng kích thước M x N. Tính và in ra ma trận tổng C = A + B với C[i][j] = A[i][j] + B[i][j].',
          hints: ['Lồng 2 vòng for để cộng từng cặp phần tử tương ứng.'],
          expectedOutput: 'Ma trận tổng C hiển thị chuẩn định dạng.'
        }
      ],
      commonErrors: [
        {
          name: 'Nhầm lẫn thứ tự chỉ số hàng và cột (a[j][i] thay vì a[i][j])',
          symptom: 'Chương trình bị crash do truy cập ngoài biên, hoặc ma trận bị xoay lệch 90 độ.',
          rootCause: 'Biến i đại diện cho hàng (0 đến M-1), biến j đại diện cho cột (0 đến N-1). Viết a[j][i] sẽ lấy chỉ số cột làm hàng.',
          howToFix: 'Quy tắc thuộc lòng: Luôn là a[hàng][cột], tương ứng a[i][j].',
          badCode: `for (int i = 0; i < m; ++i) {
    for (int j = 0; j < n; ++j) {
        cin >> a[j][i]; // SAI! Nhầm cột thành hàng
    }
}`,
          goodCode: `for (int i = 0; i < m; ++i) {
    for (int j = 0; j < n; ++j) {
        cin >> a[i][j]; // ĐÚNG CHUẨN: hàng i, cột j
    }
}`
        },
        {
          name: 'Quên in ký tự xuống dòng (endl) khi kết thúc mỗi hàng',
          symptom: 'Toàn bộ các phần tử của ma trận bị in nối đuôi nhau trên một dòng ngang dài vô tận thay vì hiển thị dạng bảng.',
          rootCause: 'Không đặt lệnh cout << endl; ở cuối thân vòng lặp for ngoài (sau khi vòng for trong hoàn thành).',
          howToFix: 'Đặt cout << endl; sau khi in hết n phần tử của một hàng.',
          badCode: `for (int i = 0; i < m; ++i) {
    for (int j = 0; j < n; ++j) {
        cout << a[i][j] << " ";
    }
} // Quên xuống dòng!`,
          goodCode: `for (int i = 0; i < m; ++i) {
    for (int j = 0; j < n; ++j) {
        cout << a[i][j] << " ";
    }
    cout << endl; // Xuống dòng chuẩn xác!
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Tính dung lượng mảng 2 chiều trong RAM',
          description: 'Cho khai báo `int table[10][20];`. Giả sử `sizeof(int) = 4` byte. Hãy tính tổng dung lượng bộ nhớ (theo byte) mà mảng `table` chiếm dụng và giải thích cách các phần tử được xếp liên tiếp trong RAM.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Công thức địa chỉ Row-Major Order',
          description: 'Mảng `double a[5][8]` bắt đầu tại địa chỉ cơ sở `0x1000`. Hãy tính địa chỉ của phần tử `&a[2][3]` biết mỗi phần tử `double` chiếm 8 byte.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'In đường viền của ma trận',
          description: 'Nhập ma trận M x N. Viết chương trình chỉ in ra các phần tử nằm trên 4 cạnh đường viền ngoài cùng của ma trận (hàng 0, hàng M-1, cột 0, cột N-1), các vị trí bên trong thay bằng dấu cách.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Ma trận xoắn ốc (Spiral Matrix)',
          description: 'Nhập số nguyên dương N (1 <= N <= 10). Khởi tạo và in ra ma trận vuông N x N chứa các số từ 1 đến N^2 điền theo chiều xoắn ốc theo chiều kim đồng hồ.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Trong ngôn ngữ C++, mảng hai chiều a[M][N] được tổ chức lưu trữ trong bộ nhớ RAM như thế nào?',
          options: [
            'Lưu trữ ngẫu nhiên ở các ô nhớ rời rạc',
            'Lưu trữ theo thứ tự ưu tiên cột (Column-Major Order)',
            'Lưu trữ theo thứ tự ưu tiên hàng liên tục (Row-Major Order)',
            'Lưu trữ dưới dạng danh sách liên kết kép'
          ],
          correctIndex: 2,
          explanation: 'C++ sử dụng cơ chế Row-Major Order: toàn bộ các phần tử của hàng 0 được lưu trước, tiếp theo là hàng 1, hàng 2... liên tục trong RAM.'
        },
        {
          id: 2,
          question: 'Khi duyệt ma trận có M hàng và N cột, cấu trúc 2 vòng lặp nào sau đây là chuẩn mực và tối ưu bộ nhớ đệm (Cache) nhất?',
          options: [
            'for (int i = 0; i < m; ++i) { for (int j = 0; j < n; ++j) { ... a[i][j] ... } }',
            'for (int j = 0; j < n; ++j) { for (int i = 0; i < m; ++i) { ... a[i][j] ... } }',
            'for (int i = 1; i <= m; ++i) { for (int j = 1; j <= n; ++j) { ... a[i][j] ... } }',
            'Chỉ cần 1 vòng lặp duy nhất'
          ],
          correctIndex: 0,
          explanation: 'Duyệt hàng i ở vòng ngoài và cột j ở vòng trong (a[i][j]) trùng khớp hoàn hảo với thứ tự Row-Major trong RAM, giúp CPU tận dụng tối đa Spatial Locality trong Cache.'
        },
        {
          id: 3,
          question: 'Hàm nào trong thư viện <iomanip> được sử dụng để căn chỉnh độ rộng hiển thị của một cột số trên màn hình console?',
          options: [
            'std::fixed',
            'std::setprecision()',
            'std::setw()',
            'std::endl'
          ],
          correctIndex: 2,
          explanation: 'std::setw(int width) thiết lập độ rộng tối thiểu cho trường xuất tiếp theo, giúp căn chỉnh ma trận thành các cột thẳng tắp.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Cú pháp khai báo', val: 'Type a[MAX_ROWS][MAX_COLS];' },
          { key: 'Quy ước chỉ số', val: 'a[row][col], row chạy 0..M-1, col chạy 0..N-1' },
          { key: 'Tổ chức bộ nhớ', val: 'Row-major order (hàng nối tiếp hàng trong RAM)' },
          { key: 'Duyệt chuẩn', val: 'for i = 0..m-1 lồng for j = 0..n-1' },
          { key: 'Căn chỉnh lưới', val: 'cout << setw(6) << a[i][j]; và cout << endl; sau mỗi hàng' }
        ],
        coreTakeaway: 'Mảng 2 chiều là bảng lưới M hàng N cột nhưng được duỗi thẳng liên tiếp theo hàng trong RAM. Luôn duyệt theo hàng i trước cột j sau để code chạy nhanh và an toàn.'
      },
      checklist: [
        'Tôi phân biệt rõ chỉ số hàng i và chỉ số cột j (a[i][j]).',
        'Tôi hiểu bản chất Row-Major Order và công thức tính địa chỉ ô nhớ.',
        'Tôi biết cách lồng 2 vòng for để nhập và xuất ma trận.',
        'Tôi biết sử dụng setw() để in bảng ma trận thẳng hàng đẹp mắt.'
      ],
      extendedChallenge: {
        title: 'Mô phỏng trò chơi Game of Life của Conway',
        scenario: 'Game of Life là một hệ thống tế bào tự động (Cellular Automaton) mô phỏng sự sống dựa trên lưới 2 chiều.',
        challengeTask: 'Cho ma trận nhị phân M x N (1 là sống, 0 là chết). Viết chương trình tính toán trạng thái tiếp theo của lưới tế bào dựa trên số lượng hàng xóm còn sống xung quanh (quy tắc: <2 chết do cô độc, 2-3 tiếp tục sống, >3 chết do quá tải, đúng 3 tế bào chết hồi sinh).',
        thoughtGuidance: 'Sử dụng một ma trận phụ nextState để ghi nhận trạng thái mới mà không ảnh hưởng đến việc tính toán các ô khác trong lượt hiện tại.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 2: TÍNH TOÁN TRÊN HÀNG/CỘT & CỰC TRỊ MA TRẬN (L23)
    // -------------------------------------------------------------
    {
      id: 'CH07-L02',
      lessonNumber: 2,
      chapterNumber: 7,
      title: 'Tính Toán Trên Hàng, Cột & Tìm Kiếm Cực Trị Toàn Cục Kèm Tọa Độ',
      readingTimeMinutes: 50,
      moodleType: 'VPL Tìm giá trị lớn nhất trong ma trận và in tọa độ (hàng, cột)',
      objectives: [
        'Làm chủ kỹ thuật duyệt cố định một hàng để tính tổng/trung bình của hàng đó.',
        'Làm chủ kỹ thuật duyệt cố định một cột để tính tổng/cực trị của cột đó.',
        'Tìm hàng hoặc cột có tổng lớn nhất / nhỏ nhất trong ma trận.',
        'Cài đặt thuật toán lính canh tìm giá trị lớn nhất (Max) và nhỏ nhất (Min) của toàn bộ ma trận kèm lưu vết tọa độ (rowIdx, colIdx).',
        'Hiểu và giải quyết bài toán Điểm yên ngựa (Saddle Point) - phần tử nhỏ nhất trên hàng nhưng lớn nhất trên cột.'
      ],
      prerequisites: [
        'Đã học xong Bài 1 Chương 7 (Khai báo và nhập xuất ma trận).'
      ],
      leadIn: {
        hook: 'Trong bảng báo cáo tài chính của một tập đoàn có 12 chi nhánh qua 4 quý: Bạn làm thế nào để tìm ra chi nhánh nào có tổng doanh thu cả năm cao nhất? Quý nào toàn tập đoàn đạt doanh thu thấp nhất? Và con số doanh thu kỷ lục đơn lẻ thuộc về chi nhánh nào, vào quý mấy?',
        question: 'Tại sao khi tính tổng theo cột, ta lại phải đảo ngược thứ tự hai vòng lặp: vòng ngoài chạy theo cột `j`, vòng trong chạy theo hàng `i`?',
        realWorldScenario: 'Xử lý ảnh số (tìm pixel sáng nhất để cân bằng trắng), phân tích nhiệt độ các vùng trên bản đồ radar, hay tính điểm trung bình môn học cho cả lớp theo từng cột.'
      },
      theorySections: [
        {
          title: '1. Kỹ thuật tính toán theo từng hàng (Row-wise Processing)',
          content: 'Khi cần xử lý độc lập từng hàng (ví dụ: tính tổng doanh thu từng chi nhánh):\n- Vòng ngoài duyệt từng hàng `i`.\n- Biến tích lũy `sumRow` **phải được reset về 0** ở đầu mỗi hàng mới.\n- Vòng trong duyệt các cột `j` của hàng đó để cộng dồn:\n\n```cpp\nfor (int i = 0; i < m; ++i) {\n    long long sumRow = 0; // RESET TỔNG CHO HÀNG MỚI!\n    for (int j = 0; j < n; ++j) {\n        sumRow += a[i][j];\n    }\n    cout << \"Tong hang \" << i << \" = \" << sumRow << endl;\n}\n```'
        },
        {
          title: '2. Kỹ thuật tính toán theo từng cột (Column-wise Processing)',
          content: 'Khi cần xử lý độc lập từng cột (ví dụ: tính điểm trung bình của môn học `j`):\n- **Đảo ngược vòng lặp:** Vòng ngoài duyệt từng cột `j` từ `0` đến `n - 1`.\n- Biến tích lũy `sumCol` được reset về 0 ở đầu mỗi cột mới.\n- Vòng trong duyệt từng hàng `i` từ `0` đến `m - 1` để lấy `a[i][j]`:\n\n```cpp\nfor (int j = 0; j < n; ++j) {\n    long long sumCol = 0; // RESET CHO CỘT MỚI!\n    for (int i = 0; i < m; ++i) {\n        sumCol += a[i][j]; // Chu y: hang i, cot j\n    }\n    cout << \"Tong cot \" << j << \" = \" << sumCol << endl;\n}\n```'
        },
        {
          title: '3. Tìm Max/Min toàn ma trận kèm lưu vết tọa độ (i, j)',
          content: 'Áp dụng kỹ thuật Lính canh: Chọn ngay phần tử đầu tiên ở góc trên bên trái `a[0][0]` làm lính canh ban đầu, đồng thời lưu tọa độ `maxR = 0, maxC = 0`:\n\n```cpp\nint maxVal = a[0][0];\nint maxRow = 0, maxCol = 0;\n\nfor (int i = 0; i < m; ++i) {\n    for (int j = 0; j < n; ++j) {\n        if (a[i][j] > maxVal) {\n            maxVal = a[i][j];\n            maxRow = i; // Luu vet chi so hang\n            maxCol = j; // Luu vet chi so cot\n        }\n    }\n}\n```\nCách làm này an toàn tuyệt đối với mọi giá trị dữ liệu, kể cả khi ma trận chứa toàn các số nguyên âm.'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Phân tích doanh số chi nhánh và tìm kỷ lục doanh thu',
          problem: 'Bảng doanh số gồm M chi nhánh (hàng) qua N tháng (cột). Viết chương trình: 1. Tính tổng doanh thu của từng chi nhánh và tìm chi nhánh có tổng doanh thu cao nhất; 2. Tính trung bình doanh thu của toàn công ty theo từng tháng; 3. Tìm mức doanh thu kỷ lục cao nhất của toàn ma trận kèm theo chi nhánh và tháng đạt kỷ lục.',
          analysis: {
            input: 'M (chi nhánh), N (tháng) và ma trận số nguyên dương doanh thu revenue[M][N].',
            output: 'Tổng doanh thu từng chi nhánh, chi nhánh xuất sắc nhất, trung bình từng tháng, kỷ lục toàn diện.',
            idea: 'Áp dụng duyệt theo hàng tính sumRow, duyệt theo cột tính sumCol, lồng 2 vòng for tìm Max toàn cục kèm (maxR, maxC).',
            algorithm: 'Bước 1: Nhập M, N và ma trận doanh thu\nBước 2: Duyệt for i -> for j tính tổng từng hàng, so sánh tìm maxRowSum\nBước 3: Duyệt for j -> for i tính trung bình từng cột\nBước 4: Duyệt toàn ma trận tìm maxVal kèm maxR, maxC'
          },
          code: `#include <iostream>
#include <iomanip>
using namespace std;

const int MAX_BRANCHES = 50;
const int MAX_MONTHS = 12;

int main() {
    long long rev[MAX_BRANCHES][MAX_MONTHS];
    int m = 0, n = 0;

    cout << "=== HE THONG PHAN TICH DOANH SO DOANH NGHIEP ===" << endl;
    cout << "Nhap so chi nhanh M va so thang quan sat N: ";
    cin >> m >> n;

    cout << "Nhap ma tran doanh thu (" << m << "x" << n << ") (trieu dong):" << endl;
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            cin >> rev[i][j];
        }
    }

    // 1. Tinh tong doanh thu tung chi nhanh & tim chi nhanh quan quan
    cout << "\n--- 1. TONG DOANH THU THEO TUNG CHI NHANH ---" << endl;
    long long bestBranchTotal = -1;
    int bestBranchIdx = 0;

    for (int i = 0; i < m; ++i) {
        long long branchSum = 0;
        for (int j = 0; j < n; ++j) {
            branchSum += rev[i][j];
        }
        cout << "Chi nhanh [" << i << "]: " << branchSum << " trieu" << endl;

        if (branchSum > bestBranchTotal) {
            bestBranchTotal = branchSum;
            bestBranchIdx = i;
        }
    }
    cout << "=> CHI NHANH XUAT SAC NHAT: Chi nhanh [" << bestBranchIdx 
         << "] voi tong doanh thu: " << bestBranchTotal << " trieu." << endl;

    // 2. Tinh doanh thu trung binh toan cong ty theo tung thang (duyet theo cot)
    cout << "\n--- 2. DOANH THU TRUNG BINH TOAN CONG TY THEO TUNG THANG ---" << endl;
    for (int j = 0; j < n; ++j) {
        long long monthSum = 0;
        for (int i = 0; i < m; ++i) {
            monthSum += rev[i][j]; // Duyet theo cot j
        }
        double avgMonth = (double)monthSum / m;
        cout << "Thang [" << j << "]: Trung binh = " << fixed << setprecision(2) 
             << avgMonth << " trieu" << endl;
    }

    // 3. Tim ky luc doanh thu don le cao nhat toan he thong
    long long maxRevRecord = rev[0][0];
    int topBranch = 0;
    int topMonth = 0;

    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (rev[i][j] > maxRevRecord) {
                maxRevRecord = rev[i][j];
                topBranch = i;
                topMonth = j;
            }
        }
    }

    cout << "\n--- 3. KY LUC DOANH THU CAO NHAT TOAN HE THONG ---" << endl;
    cout << "Gia tri ky luc : " << maxRevRecord << " trieu dong" << endl;
    cout << "Dat duoc tai   : Chi nhanh [" << topBranch << "], vao Thang [" << topMonth << "]" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'long long branchSum = 0;',
              explanation: 'Đặt biến tổng bên trong vòng for ngoài để tự động làm mới (reset về 0) khi bắt đầu tính cho một hàng mới.'
            },
            {
              lineOrBlock: 'for (int j = 0; j < n; ++j) { for (int i = 0; i < m; ++i) ... }',
              explanation: 'Cấu trúc đảo vòng lặp để duyệt theo từng cột: j cố định ở ngoài, i thay đổi ở trong để duyệt dọc từ trên xuống dưới.'
            },
            {
              lineOrBlock: 'long long maxRevRecord = rev[0][0]; topBranch = 0; topMonth = 0;',
              explanation: 'Khởi tạo lính canh bằng phần tử đầu tiên góc trái trên (0, 0), lưu đồng thời cả 2 tọa độ hàng và cột.'
            }
          ],
          executionResult: {
            sampleInput: `3 3
120 150 180
200 90 110
140 220 160`,
            sampleOutput: `=== HE THONG PHAN TICH DOANH SO DOANH NGHIEP ===
Nhap so chi nhanh M va so thang quan sat N: 3 3
Nhap ma tran doanh thu (3x3) (trieu dong):

--- 1. TONG DOANH THU THEO TUNG CHI NHANH ---
Chi nhanh [0]: 450 trieu
Chi nhanh [1]: 400 trieu
Chi nhanh [2]: 520 trieu
=> CHI NHANH XUAT SAC NHAT: Chi nhanh [2] voi tong doanh thu: 520 trieu.

--- 2. DOANH THU TRUNG BINH TOAN CONG TY THEO TUNG THANG ---
Thang [0]: Trung binh = 153.33 trieu
Thang [1]: Trung binh = 153.33 trieu
Thang [2]: Trung binh = 150.00 trieu

--- 3. KY LUC DOANH THU CAO NHAT TOAN HE THONG ---
Gia tri ky luc : 220 trieu dong
Dat duoc tai   : Chi nhanh [2], vao Thang [1]`
          },
          analysisOfResult: 'Chương trình tính chính xác tổng hàng (520 triệu lớn nhất tại chi nhánh 2), trung bình cột từng tháng và bắt đúng kỷ lục đơn lẻ 220 triệu tại tọa độ hàng 2, cột 1.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Đếm số lượng số âm trên từng cột',
          task: 'Nhập ma trận M x N gồm các số nguyên. Đếm và in ra số lượng các phần tử có giá trị âm (<0) trên mỗi cột.',
          hints: ['Duyệt vòng for ngoài theo cột j, khởi tạo countNegative = 0 ở đầu mỗi cột.'],
          expectedOutput: 'Cot 0: 2 so am, Cot 1: 0 so am...'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Tìm cột có nhiều số nguyên tố nhất',
          task: 'Cho ma trận các số nguyên dương. Hãy tìm chỉ số của cột chứa nhiều số nguyên tố nhất. Nếu có nhiều cột có cùng số lượng, in cột đầu tiên.',
          hints: ['Viết hàm isPrime(x), duyệt từng cột đếm số nguyên tố rồi so sánh với maxPrimeCount.'],
          expectedOutput: 'Cot co nhieu so nguyen to nhat la cot: K'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Tìm điểm yên ngựa (Saddle Point) của ma trận',
          task: 'Một phần tử a[i][j] được gọi là Điểm yên ngựa nếu nó đồng thời là phần tử NHỎ NHẤT trên hàng i và LỚN NHẤT trên cột j. Hãy tìm và in ra tất cả các điểm yên ngựa trong ma trận nếu có.',
          hints: ['Với mỗi hàng i, tìm Min của hàng và lấy vị trí cột colMin. Sau đó kiểm tra xem a[i][colMin] có phải là Max trên cột colMin hay không.'],
          expectedOutput: 'Diem yen ngua tai (i, j) co gia tri: X'
        }
      ],
      commonErrors: [
        {
          name: 'Quên reset biến tổng về 0 ở đầu mỗi hàng/cột',
          symptom: 'Tổng hàng sau luôn lớn gấp nhiều lần hàng trước vì nó cộng dồn luôn cả kết quả của các hàng trước đó.',
          rootCause: 'Khai báo biến long long sum = 0; ở bên ngoài cả 2 vòng lặp for thay vì đặt bên trong vòng for ngoài.',
          howToFix: 'Luôn đưa khai báo hoặc gán sum = 0 vào ngay sau vòng lặp ngoài.',
          badCode: `long long sum = 0; // ĐẶT NGOÀI SAI!
for (int i = 0; i < m; ++i) {
    for (int j = 0; j < n; ++j) sum += a[i][j];
    cout << sum << endl;
}`,
          goodCode: `for (int i = 0; i < m; ++i) {
    long long sum = 0; // ĐẶT TRONG ĐÚNG: Tự động reset mỗi hàng
    for (int j = 0; j < n; ++j) sum += a[i][j];
    cout << sum << endl;
}`
        },
        {
          name: 'Nhầm lẫn giới hạn m và n khi duyệt theo cột',
          symptom: 'Chương trình bị crash hoặc chạy sai số khi số hàng M khác số cột N.',
          rootCause: 'Khi duyệt theo cột, vòng ngoài chạy theo j từ 0 đến n-1, vòng trong chạy theo i từ 0 đến m-1. Nếu viết ngược for (int j = 0; j < m...) sẽ gây lỗi.',
          howToFix: 'Nhớ kỹ: j gắn liền với N (số cột), i gắn liền với M (số hàng).',
          badCode: `for (int j = 0; j < m; ++j) { // SAI: j là cột mà lại so với m (hàng)
    for (int i = 0; i < n; ++i) ...
}`,
          goodCode: `for (int j = 0; j < n; ++j) { // ĐÚNG: j < n (số cột)
    for (int i = 0; i < m; ++i) ... // i < m (số hàng)
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'So sánh cấu trúc duyệt hàng và duyệt cột',
          description: 'Vẽ sơ đồ và giải thích sự khác biệt giữa hai mẫu hình vòng lặp: Duyệt theo hàng (`for i -> for j`) và Duyệt theo cột (`for j -> for i`).'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Tìm hàng có nhiều số chẵn nhất',
          description: 'Viết chương trình tìm chỉ số của hàng có chứa nhiều số chẵn nhất trong ma trận M x N. Nếu có nhiều hàng bằng nhau, in ra tất cả các chỉ số hàng đó.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Hoán vị hai hàng trong ma trận',
          description: 'Nhập ma trận M x N và hai chỉ số hàng r1, r2. Viết chương trình tráo đổi toàn bộ giá trị của hàng r1 và hàng r2 với nhau bằng hàm `std::swap`.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Tìm ma trận con 2x2 có tổng lớn nhất',
          description: 'Cho ma trận M x N (M, N >= 2). Hãy tìm một hình vuông con kích thước 2x2 sao cho tổng của 4 phần tử trong hình vuông con đó đạt giá trị lớn nhất.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Để tính tổng các phần tử của từng hàng độc lập trong ma trận M x N, biến tích lũy sumRow cần được đặt ở đâu?',
          options: [
            'Bên ngoài cả hai vòng lặp for',
            'Bên trong vòng lặp for ngoài (hàng i), trước khi vòng lặp for trong (cột j) bắt đầu',
            'Bên trong vòng lặp for trong (cột j)',
            'Sau khi cả hai vòng lặp for kết thúc'
          ],
          correctIndex: 1,
          explanation: 'Đặt sumRow = 0 ngay đầu vòng for ngoài để mỗi khi chuyển sang tính một hàng mới, biến tổng được làm mới về 0, không bị cộng dồn rác từ hàng trước.'
        },
        {
          id: 2,
          question: 'Khi duyệt ma trận theo từng cột dọc từ trên xuống dưới, câu lệnh nào bên trong thân vòng lặp là chính xác?',
          options: [
            'sum += a[j][i];',
            'sum += a[i][j];',
            'sum += a[i][i];',
            'sum += a[j][j];'
          ],
          correctIndex: 1,
          explanation: 'Quy tắc vàng của C++: phần tử luôn được truy cập bằng a[hàng][cột]. Dù vòng lặp ngoài chạy theo cột j và vòng trong chạy theo hàng i thì phần tử tại ô đó vẫn luôn là a[i][j].'
        },
        {
          id: 3,
          question: 'Điểm yên ngựa (Saddle Point) trong ma trận là điểm thỏa mãn tính chất nào?',
          options: [
            'Là số lớn nhất trên cả hàng và cột chứa nó',
            'Là số nhỏ nhất trên cả hàng và cột chứa nó',
            'Là số nhỏ nhất trên hàng chứa nó nhưng đồng thời là số lớn nhất trên cột chứa nó',
            'Nằm ở chính giữa tâm của ma trận'
          ],
          correctIndex: 2,
          explanation: 'Theo định nghĩa toán học, điểm yên ngựa là điểm cực tiểu trên một chiều (hàng) và cực đại trên chiều còn lại (cột), giống như hình dáng chiếc yên ngựa.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Tính theo hàng', val: 'for i = 0..m-1 -> sumRow = 0 -> for j = 0..n-1' },
          { key: 'Tính theo cột', val: 'for j = 0..n-1 -> sumCol = 0 -> for i = 0..m-1' },
          { key: 'Max/Min ma trận', val: 'maxVal = a[0][0]; maxRow = 0; maxCol = 0;' },
          { key: 'Truy xuất ô', val: 'Luôn là a[i][j] (hàng trước, cột sau)' },
          { key: 'Tránh lỗi', val: 'Reset biến tổng ở đầu mỗi lượt duyệt hàng/cột' }
        ],
        coreTakeaway: 'Nắm vững kỹ thuật cố định một chiều (hàng hoặc cột) và cho chiều còn lại chạy. Lưu vết tọa độ (i, j) giúp xác định chính xác vị trí cực trị trong không gian 2D.'
      },
      checklist: [
        'Tôi biết cách tính tổng và trung bình theo từng hàng.',
        'Tôi nắm vững cách đảo vòng lặp để duyệt theo từng cột.',
        'Tôi luôn reset biến tích lũy về 0 ở đầu mỗi hàng/cột.',
        'Tôi tìm được phần tử lớn nhất/nhỏ nhất và lưu vết cả 2 tọa độ (row, col).'
      ],
      extendedChallenge: {
        title: 'Thuật toán nén ảnh RLE trên ma trận nhị phân',
        scenario: 'Nén dữ liệu hình ảnh đen trắng dạng lưới pixel.',
        challengeTask: 'Cho ma trận nhị phân M x N. Cài đặt thuật toán nén chuỗi theo độ dài chạy (Run-Length Encoding - RLE) duyệt theo hàng: Đếm số lượng các bit 0 hoặc 1 liên tiếp nhau và xuất ra dạng mã nén.',
        thoughtGuidance: 'Ví dụ hàng gồm 0 0 0 1 1 1 1 0 -> Nén thành: (0, 3), (1, 4), (0, 1).'
      }
    },

    // -------------------------------------------------------------
    // BÀI 3: MA TRẬN VUÔNG: ĐƯỜNG CHÉO & TÍNH ĐỐI XỨNG (L24)
    // -------------------------------------------------------------
    {
      id: 'CH07-L03',
      lessonNumber: 3,
      chapterNumber: 7,
      title: 'Ma Trận Vuông: Đường Chéo Chính, Đường Chéo Phụ & Ma Trận Đối Xứng',
      readingTimeMinutes: 55,
      moodleType: 'VPL Tính tổng 2 đường chéo và kiểm tra tính đối xứng của ma trận vuông N x N',
      objectives: [
        'Hiểu khái niệm và tính chất hình học đặc thù của Ma trận vuông (N hàng = N cột).',
        'Nắm vững quy tắc nhận diện và duyệt tối ưu O(N) của Đường chéo chính: Các phần tử thỏa mãn i == j (tức a[i][i]).',
        'Nắm vững quy tắc nhận diện và duyệt tối ưu O(N) của Đường chéo phụ: Các phần tử thỏa mãn i + j == N - 1 (tức a[i][N - 1 - i]).',
        'Phân biệt vùng Tam giác trên (i < j) và Tam giác dưới (i > j) của ma trận vuông.',
        'Cài đặt thuật toán kiểm tra Ma trận đối xứng (Symmetric Matrix: a[i][j] == a[j][i]) với kỹ thuật Early Exit.'
      ],
      prerequisites: [
        'Đã học xong Bài 1 và Bài 2 Chương 7.'
      ],
      leadIn: {
        hook: 'Bàn cờ vua 8x8, ma trận xoay trong đồ họa 3D, hay bảng khoảng cách địa lý giữa N thành phố... Tất cả đều là ma trận vuông. Tại sao đường chéo chính lại được coi là \"xương sống\" của ma trận?',
        question: 'Để tính tổng các phần tử trên đường chéo chính của ma trận N x N, bạn có cần phải lồng 2 vòng lặp chạy N^2 lần không? Hay có thể giải quyết chỉ trong 1 vòng lặp duy nhất chạy N lần?',
        realWorldScenario: 'Bảng khoảng cách đối xứng giữa các trạm xe buýt (khoảng cách từ A đến B bằng từ B đến A), ma trận hiệp phương sai trong xác suất thống kê và thuật toán đồ họa biến đổi điểm ảnh.'
      },
      theorySections: [
        {
          title: '1. Khái niệm Ma trận vuông & Hai đường chéo',
          content: '**Ma trận vuông (Square Matrix)** là ma trận có số hàng bằng số cột ($M = N$). Ma trận vuông sở hữu các tính chất hình học độc đáo:\n\n- **Đường chéo chính (Main Diagonal):** Nối từ góc trên bên trái $(0, 0)$ xuống góc dưới bên phải $(N-1, N-1)$.\n  *Đặc điểm:* Chỉ số hàng bằng chỉ số cột: **`i == j`**.\n  *Tối ưu:* Chỉ cần **1 vòng lặp duy nhất $O(N)$**: `a[i][i]`.\n\n- **Đường chéo phụ (Secondary Diagonal):** Nối từ góc trên bên phải $(0, N-1)$ xuống góc dưới bên trái $(N-1, 0)$.\n  *Đặc điểm:* Tổng chỉ số hàng và cột luôn bằng $N - 1$: **`i + j == N - 1`** $\\rightarrow$ **`j = N - 1 - i`**.\n  *Tối ưu:* Duyệt bằng **1 vòng lặp duy nhất $O(N)$**: `a[i][N - 1 - i]`.'
        },
        {
          title: '2. Tam giác trên và Tam giác dưới',
          content: 'Đường chéo chính chia ma trận vuông thành hai nửa tam giác:\n\n- **Tam giác trên (Upper Triangle):** Gồm các phần tử nằm phía trên đường chéo chính.\n  *Điều kiện:* **`i < j`**.\n  *Duyệt tối ưu:* `for (int i = 0; i < n; ++i) for (int j = i + 1; j < n; ++j)`\n\n- **Tam giác dưới (Lower Triangle):** Gồm các phần tử nằm phía dưới đường chéo chính.\n  *Điều kiện:* **`i > j`**.\n  *Duyệt tối ưu:* `for (int i = 0; i < n; ++i) for (int j = 0; j < i; ++j)`'
        },
        {
          title: '3. Thuật toán kiểm tra Ma trận đối xứng (Symmetric Matrix)',
          content: 'Ma trận vuông được gọi là **đối xứng** nếu nó bằng chính ma trận chuyển vị của nó, nghĩa là mọi cặp phần tử đối xứng qua đường chéo chính phải bằng nhau: **`a[i][j] == a[j][i]`** với mọi $i, j$.\n\n**Tối ưu hóa kiểm tra:**\nTa chỉ cần so sánh các phần tử ở tam giác trên (`j > i`) với phần tử tương ứng ở tam giác dưới. Nếu phát hiện một cặp bất kỳ khác nhau (`a[i][j] != a[j][i]`), ta kết luận ngay là KHÔNG đối xứng và `break` thoát sớm:\n\n```cpp\nbool isSymmetric = true;\nfor (int i = 0; i < n; ++i) {\n    for (int j = i + 1; j < n; ++j) { // Chỉ duyệt tam giác trên!\n        if (a[i][j] != a[j][i]) {\n            isSymmetric = false;\n            break; // Thoát sớm!\n        }\n    }\n    if (!isSymmetric) break;\n}\n```\nCách này giảm 50% số phép so sánh so với duyệt toàn bộ ma trận!'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Phân tích toàn diện ma trận vuông N x N',
          problem: 'Nhập ma trận vuông A kích thước N x N (1 <= N <= 10). Viết chương trình: 1. Tính tổng các phần tử trên đường chéo chính bằng 1 vòng for; 2. Tính tổng các phần tử trên đường chéo phụ bằng 1 vòng for; 3. Tính tổng các phần tử thuộc tam giác trên; 4. Kiểm tra xem ma trận có đối xứng qua đường chéo chính hay không.',
          analysis: {
            input: 'Kích thước N và ma trận vuông a[N][N].',
            output: 'Tổng chéo chính, tổng chéo phụ, tổng tam giác trên, kết luận đối xứng.',
            idea: 'Sử dụng các công thức i == j, i + j == N - 1, i < j và a[i][j] == a[j][i].',
            algorithm: 'Bước 1: Nhập N và a[N][N]\nBước 2: for i = 0 -> N - 1: sumMain += a[i][i]; sumSec += a[i][N - 1 - i]\nBước 3: Lồng for i = 0..N-1, j = i + 1..N-1: sumUpper += a[i][j]\nBước 4: Kiểm tra if (a[i][j] != a[j][i]) -> isSym = false'
          },
          code: `#include <iostream>
#include <iomanip>
using namespace std;

const int MAX_N = 20;

int main() {
    int a[MAX_N][MAX_N];
    int n = 0;

    cout << "=== CHUONG TRINH PHAN TICH MA TRAN VUONG N x N ===" << endl;
    do {
        cout << "Nhap kich thuoc N cua ma tran vuong (1 <= N <= 20): ";
        cin >> n;
    } while (n < 1 || n > 20);

    cout << "Nhap cac phan tu cua ma tran vuong (" << n << "x" << n << "):" << endl;
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            cin >> a[i][j];
        }
    }

    // 1. Tinh tong duong cheo chinh va duong cheo phu (Duyet toi uu O(N))
    long long sumMainDiag = 0;
    long long sumSecDiag = 0;

    for (int i = 0; i < n; ++i) {
        sumMainDiag += a[i][i];             // Cheo chinh: i == j
        sumSecDiag += a[i][n - 1 - i];       // Cheo phu: j = n - 1 - i
    }

    // 2. Tinh tong cac phan tu thuoc tam giac tren (i < j)
    long long sumUpperTriangle = 0;
    for (int i = 0; i < n; ++i) {
        for (int j = i + 1; j < n; ++j) {    // j chay tu i + 1 den n - 1
            sumUpperTriangle += a[i][j];
        }
    }

    // 3. Kiem tra tinh doi xung qua duong cheo chinh (Early Exit)
    bool isSymmetric = true;
    for (int i = 0; i < n; ++i) {
        for (int j = i + 1; j < n; ++j) {
            if (a[i][j] != a[j][i]) {
                isSymmetric = false;
                break;
            }
        }
        if (!isSymmetric) break;
    }

    // 4. In bao cao ket qua
    cout << "\n========================================================" << endl;
    cout << "               KET QUA PHAN TICH MA TRAN VUONG          " << endl;
    cout << "========================================================" << endl;
    cout << "- Tong duong cheo chinh (i == j)     : " << sumMainDiag << endl;
    cout << "- Tong duong cheo phu (i + j == N-1) : " << sumSecDiag << endl;
    cout << "- Tong vung tam giac tren (i < j)    : " << sumUpperTriangle << endl;
    cout << "--------------------------------------------------------" << endl;
    if (isSymmetric) {
        cout << "=> KET LUAN: Day la MA TRAN DOI XUNG (a[i][j] == a[j][i])!" << endl;
    } else {
        cout << "=> KET LUAN: Ma tran KHONG DOI XUNG." << endl;
    }
    cout << "========================================================" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'sumMainDiag += a[i][i];',
              explanation: 'Duyệt đường chéo chính bằng 1 vòng lặp duy nhất O(N) thay vì lồng 2 vòng lặp O(N^2), tối ưu hóa thời gian chạy tối đa.'
            },
            {
              lineOrBlock: 'sumSecDiag += a[i][n - 1 - i];',
              explanation: 'Công thức đường chéo phụ: vì i + j = n - 1 nên j = n - 1 - i, truy cập trực tiếp cực kỳ thanh lịch.'
            },
            {
              lineOrBlock: 'for (int j = i + 1; j < n; ++j)',
              explanation: 'Chỉ duyệt vùng tam giác trên nằm phía trên đường chéo chính (bắt đầu từ j = i + 1), tránh so sánh trùng lặp.'
            }
          ],
          executionResult: {
            sampleInput: `3
1 2 3
2 4 5
3 5 6`,
            sampleOutput: `=== CHUONG TRINH PHAN TICH MA TRAN VUONG N x N ===
Nhap kich thuoc N cua ma tran vuong (1 <= N <= 20): 3
Nhap cac phan tu cua ma tran vuong (3x3):

========================================================
               KET QUA PHAN TICH MA TRAN VUONG          
========================================================
- Tong duong cheo chinh (i == j)     : 11
- Tong duong cheo phu (i + j == N-1) : 10
- Tong vung tam giac tren (i < j)    : 10
--------------------------------------------------------
=> KET LUAN: Day la MA TRAN DOI XUNG (a[i][j] == a[j][i])!
========================================================`
          },
          analysisOfResult: 'Đường chéo chính: 1 + 4 + 6 = 11. Đường chéo phụ: 3 + 4 + 3 = 10. Tam giác trên: 2 + 3 + 5 = 10. Cặp đối xứng (2==2, 3==3, 5==5) nên kết luận ma trận đối xứng hoàn toàn chuẩn xác.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Đếm số lượng số chẵn trên đường chéo phụ',
          task: 'Nhập ma trận vuông N x N. Đếm xem trên đường chéo phụ có bao nhiêu phần tử là số chẵn.',
          hints: ['Duyệt 1 vòng for i từ 0 đến N - 1, kiểm tra a[i][n - 1 - i] % 2 == 0.'],
          expectedOutput: 'So luong so chan tren duong cheo phu: K'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Tìm phần tử lớn nhất thuộc tam giác dưới',
          task: 'Nhập ma trận vuông N x N. Tìm giá trị lớn nhất nằm trong vùng tam giác dưới (gồm cả đường chéo chính: i >= j).',
          hints: ['Lồng for i = 0..n-1, j = 0..i để duyệt lính canh.'],
          expectedOutput: 'Phan tu lon nhat tam giac duoi: X'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Kiểm tra ma trận phản đối xứng (Skew-symmetric)',
          task: 'Một ma trận vuông được gọi là phản đối xứng nếu a[i][j] == -a[j][i] với mọi i != j và tất cả phần tử trên đường chéo chính đều bằng 0 (a[i][i] == 0). Hãy viết chương trình kiểm tra tính chất này.',
          hints: ['Kiểm tra đường chéo chính trước, sau đó duyệt tam giác trên kiểm tra a[i][j] == -a[j][i].'],
          expectedOutput: 'Ket luan: Ma tran phan doi xung hoac khong.'
        }
      ],
      commonErrors: [
        {
          name: 'Dùng 2 vòng lặp lồng nhau O(N^2) để duyệt đường chéo',
          symptom: 'Chương trình vẫn cho kết quả đúng nhưng code rườm rà, hiệu năng kém khi N lớn.',
          rootCause: 'Viết for i -> for j { if (i == j) sum += a[i][j]; } phải duyệt qua tất cả N^2 phần tử vô nghĩa.',
          howToFix: 'Chỉ cần dùng 1 vòng lặp duy nhất O(N): for (int i = 0; i < n; ++i) sum += a[i][i];',
          badCode: `for (int i = 0; i < n; ++i) { // LÃNG PHÍ O(N^2)
    for (int j = 0; j < n; ++j) {
        if (i == j) sum += a[i][j];
    }
}`,
          goodCode: `for (int i = 0; i < n; ++i) { // TỐI ƯU O(N)
    sum += a[i][i];
}`
        },
        {
          name: 'Sai công thức chỉ số đường chéo phụ (a[i][n - i] thay vì a[i][n - 1 - i])',
          symptom: 'Khi i = 0, chương trình truy cập a[0][n] vượt biên mảng gây lỗi rác hoặc crash.',
          rootCause: 'Do chỉ số mảng bắt đầu từ 0 nên phần tử cột cuối cùng là n - 1 chứ không phải n.',
          howToFix: 'Luôn nhớ công thức chuẩn: a[i][n - 1 - i].',
          badCode: `sum += a[i][n - i]; // SAI! Vuot bien khi i = 0 (a[0][n])`,
          goodCode: `sum += a[i][n - 1 - i]; // CHUAN XAC 100%`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Đặc điểm chỉ số của các đường chéo',
          description: 'Nêu công thức toán học xác định các phần tử thuộc: 1. Đường chéo chính; 2. Đường chéo phụ; 3. Tam giác trên; 4. Tam giác dưới trong ma trận vuông kích thước N x N.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Hiệu số giữa hai đường chéo',
          description: 'Viết chương trình tính trị tuyệt đối hiệu số giữa tổng đường chéo chính và tổng đường chéo phụ: `|SumMain - SumSec|` chỉ với 1 vòng lặp O(N).'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Hoán vị hai đường chéo của ma trận vuông',
          description: 'Cho ma trận vuông N x N. Viết chương trình tráo đổi các phần tử trên đường chéo chính với các phần tử tương ứng trên đường chéo phụ (tức hoán vị `a[i][i]` và `a[i][n - 1 - i]`).'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Xoay ma trận vuông 90 độ theo chiều kim đồng hồ',
          description: 'Cho ma trận vuông N x N. Viết chương trình xoay ma trận 90 độ theo chiều kim đồng hồ tại chỗ (in-place) mà không dùng thêm ma trận phụ lớn. (Gợi ý: Lấy ma trận chuyển vị, sau đó đảo ngược từng hàng).'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Phần tử thuộc đường chéo phụ của ma trận vuông N x N thỏa mãn hệ thức nào sau đây?',
          options: [
            'i == j',
            'i + j == N',
            'i + j == N - 1',
            'i - j == 1'
          ],
          correctIndex: 2,
          explanation: 'Vì chỉ số mảng bắt đầu từ 0, phần tử đầu tiên của chéo phụ là (0, N-1) có tổng chỉ số là 0 + N - 1 = N - 1. Mọi phần tử khác trên chéo phụ đều có tổng i + j = N - 1.'
        },
        {
          id: 2,
          question: 'Để kiểm tra một ma trận vuông có đối xứng hay không, ta chỉ cần so sánh các cặp phần tử nào để tối ưu thời gian?',
          options: [
            'So sánh tất cả các cặp phần tử a[i][j] với a[j][i] với mọi i, j từ 0 đến N-1',
            'Chỉ so sánh các cặp nằm ở vùng tam giác trên (j > i) với tam giác dưới',
            'Chỉ so sánh các phần tử trên đường chéo chính',
            'So sánh hàng đầu tiên với cột cuối cùng'
          ],
          correctIndex: 1,
          explanation: 'Vì quan hệ đối xứng mang tính chất hoán vị a[i][j] == a[j][i], ta chỉ cần duyệt tam giác trên (j > i), giúp giảm 50% số phép so sánh thừa.'
        },
        {
          id: 3,
          question: 'Điều kiện nào sau đây xác định một phần tử nằm ở vùng tam giác dưới (phía dưới đường chéo chính)?',
          options: [
            'i < j',
            'i > j',
            'i == j',
            'i + j < N'
          ],
          correctIndex: 1,
          explanation: 'Vùng tam giác dưới gồm các ô có chỉ số hàng lớn hơn chỉ số cột (i > j).'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Đường chéo chính', val: 'i == j -> duyệt bằng a[i][i] với 1 vòng for O(N)' },
          { key: 'Đường chéo phụ', val: 'i + j == N - 1 -> duyệt bằng a[i][N - 1 - i] với 1 vòng for O(N)' },
          { key: 'Tam giác trên', val: 'i < j (j chạy từ i + 1 đến N - 1)' },
          { key: 'Tam giác dưới', val: 'i > j (j chạy từ 0 đến i - 1)' },
          { key: 'Ma trận đối xứng', val: 'a[i][j] == a[j][i] (kiểm tra tam giác trên với Early Exit)' }
        ],
        coreTakeaway: 'Ma trận vuông có nhiều quy luật toán học đặc thù. Nắm vững hệ thức chỉ số giúp bạn viết thuật toán đạt hiệu năng tối ưu O(N) thay vì O(N^2).'
      },
      checklist: [
        'Tôi duyệt được đường chéo chính và đường chéo phụ chỉ bằng 1 vòng for O(N).',
        'Tôi hiểu rõ công thức đường chéo phụ là a[i][N - 1 - i].',
        'Tôi phân biệt được tam giác trên (i < j) và tam giác dưới (i > j).',
        'Tôi cài đặt được thuật toán kiểm tra ma trận đối xứng có thoát sớm.'
      ],
      extendedChallenge: {
        title: 'Nhân hai ma trận kích thước M x K và K x N (Matrix Multiplication)',
        scenario: 'Phép nhân ma trận là hòn đá tảng của trí tuệ nhân tạo (Mạng nơ-ron tích chập và Transformer).',
        challengeTask: 'Cài đặt thuật toán nhân hai ma trận: Ma trận A (M x K) nhân ma trận B (K x N) tạo thành ma trận C (M x N) với công thức C[i][j] = sum(A[i][k] * B[k][j]) sử dụng 3 vòng lặp lồng nhau.',
        thoughtGuidance: 'Điều kiện nhân được: Số cột của ma trận A phải bằng đúng số hàng của ma trận B (cùng bằng K).'
      }
    }
  ]
};
