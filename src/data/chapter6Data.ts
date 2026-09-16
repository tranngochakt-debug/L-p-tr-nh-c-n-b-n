import { LessonContent, ChapterData } from './chapter1Data.ts';

export const CHAPTER_6_DATA: ChapterData = {
  chapterId: 6,
  chapterCode: 'CH06',
  title: 'Mảng Một Chiều & Thuật Toán Tìm Kiếm, Sắp Xếp Cơ Bản',
  summary: 'Làm chủ cấu trúc dữ liệu mảng một chiều trong C++: Bản chất vùng nhớ liên tục trong RAM, chỉ số 0-based, kích thước tĩnh và hiểm họa tràn mảng (Out-of-bounds); kỹ thuật nhập xuất N phần tử chuẩn mực; thuật toán duyệt mảng tính tổng, trung bình cộng, kỹ thuật lính canh tìm Min/Max kèm lưu vết chỉ số; thuật toán tìm kiếm tuần tự (Linear Search) và kỹ thuật thoát sớm (Early Exit); các thao tác biến đổi cấu trúc mảng bằng kỹ thuật dồn dịch (chèn/xóa phần tử tại vị trí K); và thuật toán sắp xếp kinh điển Nổi bọt (Bubble Sort) sử dụng hoán vị std::swap.',
  totalLessons: 4,
  lessons: [
    // -------------------------------------------------------------
    // BÀI 1: KHÁI NIỆM MẢNG, CẤP PHÁT BỘ NHỚ & NHẬP XUẤT (L18)
    // -------------------------------------------------------------
    {
      id: 'CH06-L01',
      lessonNumber: 1,
      chapterNumber: 6,
      title: 'Khái Niệm Mảng, Cấp Phát Bộ Nhớ Liên Tục & Nhập/Xuất Chuẩn',
      readingTimeMinutes: 50,
      moodleType: 'Page mô phỏng mảng trong ô nhớ RAM + VPL Nhập xuất mảng',
      objectives: [
        'Hiểu rõ sự cần thiết của mảng khi xử lý tập hợp nhiều phần tử cùng kiểu thay vì khai báo hàng chục biến rời rạc.',
        'Nắm vững bản chất tổ chức dữ liệu của mảng một chiều: Vùng nhớ liên tục (Contiguous Memory) trong RAM.',
        'Hiểu sâu nguyên tắc chỉ số 0-based (0 đến N - 1) và tính toán địa chỉ phần tử a[i] = Base_Address + i * sizeof(T).',
        'Nhận diện và tránh triệt để lỗi kinh hoàng "Tràn mảng" (Buffer Overflow / Out-of-bounds access) khi truy cập a[N].',
        'Cài đặt thành thạo kỹ thuật khai báo mảng tĩnh an toàn với hằng số hằng MAX_SIZE và nhập xuất N phần tử hợp lệ.'
      ],
      prerequisites: [
        'Đã học xong Chương 4 (Vòng lặp for) và Chương 2 (Toán tử và kiểu dữ liệu nguyên thủy).'
      ],
      leadIn: {
        hook: 'Nếu lớp học có 50 sinh viên cần lưu điểm, bạn sẽ khai báo `double d1, d2, ..., d50;`? Rồi nếu trường có 10.000 sinh viên thì sao? Làm cách nào để quản lý hàng nghìn phần tử cùng lúc chỉ với một tên biến duy nhất?',
        question: 'Tại sao trong lập trình, số thứ tự của phần tử đầu tiên luôn luôn là số 0 chứ không phải số 1? Điều gì sẽ xảy ra với máy tính nếu bạn vô tình đọc hay ghi vào một chỉ số vượt quá kích thước đã khai báo?',
        realWorldScenario: 'Dãy tủ gửi đồ tại siêu thị, các toa tàu hỏa nối đuôi nhau trên đường ray, hay danh sách giá cổ phiếu biến động từng giây trong phiên giao dịch. Mọi hệ thống đều cần sắp xếp các dữ liệu cùng loại liên tiếp nhau để truy cập tức thời theo số thứ tự.'
      },
      theorySections: [
        {
          title: '1. Khái niệm Mảng một chiều và Bản chất vùng nhớ liên tục',
          content: '**Mảng một chiều (1D Array)** là một tập hợp hữu hạn các phần tử có **cùng kiểu dữ liệu**, được lưu trữ tại các **ô nhớ liên tiếp nhau** trong bộ nhớ RAM.\n\n**Cú pháp khai báo:**\n```cpp\nKiểuDữLiệu TênMảng[KíchThướcTốiĐa];\n```\n*Ví dụ:*\n```cpp\nconst int MAX = 100;\nint a[MAX]; // Khai bao mang a co the chua toi da 100 so nguyen int\n```\n\n**Khởi tạo giá trị ban đầu:**\n```cpp\nint arr1[5] = {10, 20, 30, 40, 50}; // Gan du 5 phan tu\nint arr2[5] = {1, 2};               // 3 phan tu con lai tu dong bang 0\nint arr3[5] = {0};                  // Khoi tao toan bo 5 phan tu deu bang 0\nint arr4[] = {5, 10, 15};           // Trinh bien dich tu dong cap phat kich thuoc la 3\n```'
        },
        {
          title: '2. Nguyên tắc chỉ số 0-based và Công thức tính địa chỉ vật lý',
          content: 'Trong C++, các phần tử của mảng có kích thước $N$ được đánh chỉ số từ `0` đến `N - 1`:\n- Phần tử đầu tiên: `a[0]`\n- Phần tử thứ hai: `a[1]`\n- Phần tử cuối cùng: `a[N - 1]`\n\n**Tại sao lại bắt đầu từ 0?**\nChỉ số `i` thực chất là **độ dịch chuyển (offset)** tính từ địa chỉ gốc của mảng. Trình biên dịch tính toán địa chỉ của ô nhớ chứa phần tử `a[i]` bằng công thức:\n$$\\text{Địa chỉ của } a[i] = \\text{Địa chỉ cơ sở (Base Address)} + i \\times \\text{sizeof}(\\text{KiểuDữLiệu})$$\n- Phần tử đầu tiên dịch 0 byte $\\rightarrow$ vị trí `0`.\n- Vì vậy, phép truy xuất phần tử `a[i]` diễn ra với độ phức tạp $O(1)$ - **tức thời**, không phụ thuộc mảng dài bao nhiêu!'
        },
        {
          title: '3. Quy tắc nhập xuất N phần tử & Hiểm họa tràn mảng (Out of Bounds)',
          content: 'Vì mảng tĩnh yêu cầu kích thước cố định lúc biên dịch, trong thực tế ta thường khai báo một mảng có kích thước tối đa (ví dụ 100 hoặc 1000), sau đó nhập số lượng phần tử thực tế $N$ ($1 \\le N \\le \\text{MAX}$):\n\n```cpp\nconst int MAX = 100;\nint a[MAX];\nint n;\n// Kiem tra hop le n\ndo {\n    cout << \"Nhap N (1 <= N <= \" << MAX << \"): \";\n    cin >> n;\n} while (n < 1 || n > MAX);\n\n// Nhap mang\nfor (int i = 0; i < n; ++i) {\n    cin >> a[i];\n}\n```\n\n**Hiểm họa vượt biên (Out of Bounds):**\nC++ **không** tự động kiểm tra giới hạn mảng khi chạy. Nếu bạn gán `a[n] = 99` hay `a[105] = 1`: bạn đang cố tình ghi đè lên ô nhớ của biến khác hoặc vùng nhớ của hệ điều hành! Điều này dẫn đến lỗi nghiêm trọng: kết quả bị sai lệch bí ẩn, hoặc chương trình văng lỗi lập tức (**Segmentation Fault**).'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Nhập xuất mảng điểm thi kèm địa chỉ ô nhớ RAM',
          problem: 'Viết chương trình nhập số lượng sinh viên N (1 <= N <= 10). Nhập điểm thi môn Lập trình (số thực) của N sinh viên. In lại danh sách điểm kèm chỉ số mảng [i] và in cả địa chỉ ô nhớ trong RAM (&a[i]) để chứng minh tính liên tục của mảng.',
          analysis: {
            input: 'N (số nguyên) và N số thực điểm thi a[0] .. a[n-1]',
            output: 'Bảng danh sách điểm thi gồm: Chỉ số, Điểm số, Địa chỉ Hexadecimal trong RAM, Độ lệch byte so với phần tử trước.',
            idea: 'Sử dụng mảng tĩnh double scores[100]. Dùng vòng lặp for (int i = 0; i < n; ++i) để nhập và xuất. Dùng toán tử &scores[i] để lấy địa chỉ vùng nhớ.',
            algorithm: 'Bước 1: Nhập N, validate 1 <= N <= 10\nBước 2: Duyệt for i từ 0 đến n - 1 để cin >> scores[i]\nBước 3: In tiêu đề bảng\nBước 4: Duyệt for i để in i, scores[i], &scores[i]'
          },
          code: `#include <iostream>
#include <iomanip>
using namespace std;

const int MAX_STUDENTS = 100;

int main() {
    double scores[MAX_STUDENTS];
    int n = 0;

    cout << "=== CHUONG TRINH QUAN LY DIEM THI (MANG 1 CHIEU C++) ===" << endl;

    // 1. Nhap so luong sinh vien co kiem tra tinh hop le
    do {
        cout << "Nhap so luong sinh vien N (1 <= N <= 10): ";
        cin >> n;
        if (n < 1 || n > 10) {
            cout << "[Loi]: So luong N khong hop le! Vui long nhap lai.\n";
        }
    } while (n < 1 || n > 10);

    // 2. Nhap diem thi cho tung sinh vien
    cout << "\n--- NHAP DIEM THI (" << n << " SINH VIEN) ---" << endl;
    for (int i = 0; i < n; ++i) {
        cout << "Nhap diem cho sinh vien thu [" << i << "]: ";
        cin >> scores[i];
    }

    // 3. Xuat danh sach va chung minh vung nho lien tuc
    cout << "\n==============================================================" << endl;
    cout << "                 DANH SACH DIEM THI & O NHO RAM               " << endl;
    cout << "==============================================================" << endl;
    cout << left << setw(10) << "Chi so" 
         << setw(16) << "Diem so" 
         << setw(20) << "Dia chi o nho RAM" 
         << "Kich thuoc byte" << endl;
    cout << "--------------------------------------------------------------" << endl;

    for (int i = 0; i < n; ++i) {
        cout << left << "[" << i << "]" << setw(7) << " "
             << fixed << setprecision(2) << setw(16) << scores[i]
             << setw(20) << &scores[i]
             << sizeof(scores[i]) << " bytes" << endl;
    }
    cout << "==============================================================" << endl;
    cout << "* Nhan xet: Moi dia chi chenh nhau dung 8 bytes (sizeof(double))!" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'const int MAX_STUDENTS = 100;',
              explanation: 'Sử dụng hằng số const để khai báo kích thước mảng tĩnh, giúp dễ dàng bảo trì và sửa đổi kích thước toàn chương trình.'
            },
            {
              lineOrBlock: 'for (int i = 0; i < n; ++i)',
              explanation: 'Quy tắc vàng duyệt mảng: biến đếm bắt đầu từ 0 và kết thúc nghiêm ngặt khi i < n (phần tử cuối là n - 1).'
            },
            {
              lineOrBlock: '&scores[i]',
              explanation: 'Toán tử & dùng để lấy địa chỉ ô nhớ thực tế trong RAM. Quan sát địa chỉ hexadecimal ta sẽ thấy các ô nhớ kế tiếp nhau đúng 8 byte (kích thước của kiểu double).'
            }
          ],
          executionResult: {
            sampleInput: `4
8.5
7.0
9.25
6.75`,
            sampleOutput: `=== CHUONG TRINH QUAN LY DIEM THI (MANG 1 CHIEU C++) ===
Nhap so luong sinh vien N (1 <= N <= 10): 4

--- NHAP DIEM THI (4 SINH VIEN) ---
Nhap diem cho sinh vien thu [0]: 8.5
Nhap diem cho sinh vien thu [1]: 7.0
Nhap diem cho sinh vien thu [2]: 9.25
Nhap diem cho sinh vien thu [3]: 6.75

==============================================================
                 DANH SACH DIEM THI & O NHO RAM               
==============================================================
Chi so    Diem so         Dia chi o nho RAM   Kich thuoc byte
--------------------------------------------------------------
[0]       8.50            0x7ffee4b20a20      8 bytes
[1]       7.00            0x7ffee4b20a28      8 bytes
[2]       9.25            0x7ffee4b20a30      8 bytes
[3]       6.75            0x7ffee4b20a38      8 bytes
==============================================================
* Nhan xet: Moi dia chi chenh nhau dung 8 bytes (sizeof(double))!`
          },
          analysisOfResult: 'Các địa chỉ hexa kết thúc bằng ...20, ...28, ...30, ...38 chênh nhau đúng 8 đơn vị. Minh chứng trực quan cho bản chất vùng nhớ liên tục trong RAM của mảng.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Nhập và in mảng đảo ngược',
          task: 'Nhập mảng gồm N số nguyên (1 <= N <= 20). In ra màn hình các phần tử của mảng theo thứ tự đảo ngược từ phần tử cuối cùng a[n-1] về phần tử đầu tiên a[0].',
          hints: ['Dùng vòng for duyệt ngược: for (int i = n - 1; i >= 0; --i) cout << a[i] << " ";'],
          expectedOutput: 'Nhap: 10 20 30 40 -> In ra: 40 30 20 10'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'In phần tử tại các vị trí chỉ số chẵn',
          task: 'Nhập mảng N số nguyên. In ra các phần tử nằm ở vị trí có chỉ số chẵn (a[0], a[2], a[4], ...).',
          hints: ['Vòng lặp có thể bước nhảy i += 2: for (int i = 0; i < n; i += 2).'],
          expectedOutput: 'Mang: [12, 5, 8, 9, 14] -> Chi so chan: 12 (i=0), 8 (i=2), 14 (i=4)'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Tách mảng âm và mảng dương',
          task: 'Nhập mảng A gồm N số nguyên. Tạo ra hai mảng mới: mảng B chỉ chứa các số dương (>0) và mảng C chỉ chứa các số âm (<0). In ra kích thước và phần tử của cả hai mảng B, C.',
          hints: ['Duyệt từng phần tử A[i], nếu A[i] > 0 thì B[nB++] = A[i]; nếu A[i] < 0 thì C[nC++] = A[i].'],
          expectedOutput: 'Tách thành công mảng âm và dương rõ ràng.'
        }
      ],
      commonErrors: [
        {
          name: 'Lỗi truy cập vượt biên mảng (Off-by-one / Out-of-bounds)',
          symptom: 'Chương trình chạy ra kết quả kỳ lạ, in số rác khổng lồ, hoặc bị dừng đột ngột (Crash / Segfault).',
          rootCause: 'Mảng có N phần tử thì chỉ số chỉ chạy từ 0 đến N - 1. Viết vòng lặp i <= n sẽ truy cập tới phần tử a[n] nằm ngoài biên mảng.',
          howToFix: 'Luôn luôn sử dụng dấu nhỏ hơn nghiêm ngặt: i < n trong vòng lặp.',
          badCode: `int a[10];
for (int i = 0; i <= 10; ++i) { // SAI! Khi i = 10 se vuot bien mang
    cin >> a[i];
}`,
          goodCode: `int a[10];
for (int i = 0; i < 10; ++i) { // DUNG: i chay tu 0 den 9
    cin >> a[i];
}`
        },
        {
          name: 'Khai báo kích thước mảng bằng biến số không cố định (VLA)',
          symptom: 'Chương trình có thể biên dịch được trên GCC nhưng báo lỗi compile error trên MSVC (Visual Studio) hoặc gây tràn bộ nhớ Stack nếu n lớn.',
          rootCause: 'Mảng kích thước biến thiên (Variable Length Array - VLA) không thuộc chuẩn C++ chính thức.',
          howToFix: 'Luôn khai báo kích thước mảng với hằng số const MAX_SIZE cố định đủ lớn.',
          badCode: `int n;
cin >> n;
int a[n]; // Nguy hiem! Khong phai chuan C++ tieu chuan`,
          goodCode: `const int MAX = 1000;
int a[MAX]; // Khai bao tinh an toan tuyet doi
int n;
cin >> n;`
        },
        {
          name: 'Quên khởi tạo mảng dẫn đến đọc giá trị rác',
          symptom: 'In mảng ra thấy xuất hiện các số ngẫu nhiên kỳ quái như -858993460.',
          rootCause: 'Biến cục bộ trong C++ không tự động gán giá trị 0. Nếu chưa nhập mà đã xuất, ô nhớ chứa giá trị rác.',
          howToFix: 'Khởi tạo mảng bằng {0} hoặc luôn đảm bảo nhập đầy đủ dữ liệu trước khi xử lý.',
          badCode: `int a[5];
cout << a[0]; // In ra gia tri rac vo nghia!`,
          goodCode: `int a[5] = {0}; // Khoi tao tat ca phan tu bang 0
cout << a[0]; // In ra 0`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Xác định chỉ số đầu và cuối',
          description: 'Một mảng số nguyên được khai báo: `int arr[25];`. Xác định chỉ số của phần tử đầu tiên, phần tử cuối cùng và tổng dung lượng bộ nhớ (tính theo byte) mà mảng này chiếm dụng trong RAM.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Giải thích tính toán địa chỉ',
          description: 'Cho mảng số nguyên `int a[10];`. Giả sử địa chỉ của phần tử đầu tiên `&a[0]` là `0x1000`. Biết mỗi số nguyên `int` chiếm 4 byte, hãy xác định địa chỉ chính xác của `&a[3]` và `&a[7]`.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Tính tích lũy mảng tiền tố (Prefix Sum)',
          description: 'Nhập mảng A gồm N số nguyên. Xây dựng mảng tiền tố P trong đó `P[i] = A[0] + A[1] + ... + A[i]`. In mảng P ra màn hình.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Mảng xoay vòng sang phải K vị trí',
          description: 'Cho mảng A có N phần tử. Viết chương trình xoay mảng sang phải K vị trí mà không dùng thêm mảng phụ lớn. (Ví dụ: [1, 2, 3, 4, 5] xoay 2 vị trí thành [4, 5, 1, 2, 3]).'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Trong ngôn ngữ C++, nếu một mảng có N phần tử, dải chỉ số hợp lệ để truy cập là:',
          options: [
            'Từ 1 đến N',
            'Từ 0 đến N - 1',
            'Từ 0 đến N',
            'Từ 1 đến N + 1'
          ],
          correctIndex: 1,
          explanation: 'C++ sử dụng cơ chế đánh chỉ số 0-based, do đó mảng có N phần tử sẽ có các chỉ số hợp lệ chạy từ 0 đến N - 1. Phần tử thứ N (a[N]) nằm ngoài biên mảng.'
        },
        {
          id: 2,
          question: 'Điều gì xảy ra khi chương trình thực hiện lệnh gán a[100] = 5 khi mảng a chỉ được khai báo là int a[10]?',
          options: [
            'Trình biên dịch tự động mở rộng kích thước mảng a lên 101 phần tử',
            'Xảy ra lỗi Undefined Behavior: Ghi đè vào vùng nhớ không thuộc quyền quản lý, có thể gây crash chương trình',
            'Chương trình tự động bỏ qua lệnh gán đó mà không làm gì',
            'Hệ điều hành sẽ thông báo lỗi bằng hộp thoại popup'
          ],
          correctIndex: 1,
          explanation: 'C++ không có cơ chế bounds-checking tự động cho mảng tĩnh. Truy cập chỉ số vượt biên dẫn đến hành vi không xác định (Undefined Behavior), có thể gây sai lệch bộ nhớ hoặc lỗi Segmentation Fault.'
        },
        {
          id: 3,
          question: 'Nếu mảng kiểu double (chiếm 8 byte) bắt đầu tại địa chỉ 0x2000, thì địa chỉ của a[4] trong RAM là bao nhiêu?',
          options: [
            '0x2004',
            '0x2008',
            '0x2020 (chênh 32 byte)',
            '0x2016'
          ],
          correctIndex: 2,
          explanation: 'Công thức địa chỉ: Base + i * sizeof(T) = 0x2000 + 4 * 8 = 0x2000 + 32 (trong hệ thập lục phân 32 là 0x20) => 0x2020.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Cú pháp', val: 'Type arrayName[MAX_SIZE];' },
          { key: 'Chỉ số', val: 'Chạy từ 0 đến N - 1 (Quy tắc 0-based)' },
          { key: 'Duyệt mảng', val: 'for (int i = 0; i < n; ++i)' },
          { key: 'Hiểm họa', val: 'Truy cập a[N] là lỗi vượt biên nghiêm trọng' },
          { key: 'Bộ nhớ RAM', val: 'Các phần tử nằm tại các ô nhớ liên tiếp nhau' }
        ],
        coreTakeaway: 'Mảng là tập hợp ô nhớ liên tiếp có cùng kiểu. Luôn kiểm soát chặt chẽ chỉ số trong đoạn [0, N - 1] để tránh lỗi tràn mảng chết người.'
      },
      checklist: [
        'Tôi hiểu rõ vì sao chỉ số mảng bắt đầu từ 0 và công thức tính địa chỉ vật lý.',
        'Tôi luôn khai báo mảng với hằng số const MAX_SIZE an toàn.',
        'Tôi kiểm soát điều kiện dừng vòng lặp với i < n chứ không dùng i <= n.',
        'Tôi có thể lấy địa chỉ ô nhớ của các phần tử mảng bằng toán tử &.'
      ],
      extendedChallenge: {
        title: 'Mô phỏng ngăn xếp phần cứng bằng mảng (Array-based Stack)',
        scenario: 'Trong vi xử lý, ngăn xếp (Stack) lưu trữ dữ liệu theo nguyên tắc LIFO (Vào sau ra trước).',
        challengeTask: 'Viết chương trình mô phỏng một Stack với mảng 1 chiều có sức chứa 5 phần tử: Hỗ trợ các thao tác Push (thêm phần tử, báo lỗi tràn Stack Overflow nếu mảng đầy), Pop (lấy phần tử ra, báo lỗi Stack Underflow nếu mảng rỗng), và PrintStack (in trạng thái hiện tại).',
        thoughtGuidance: 'Sử dụng biến top = -1 để chỉ định vị trí đỉnh ngăn xếp.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 2: DUYỆT MẢNG, TÍNH TOÁN & KỸ THUẬT LÍNH CANH MIN/MAX (L19)
    // -------------------------------------------------------------
    {
      id: 'CH06-L02',
      lessonNumber: 2,
      chapterNumber: 6,
      title: 'Duyệt Mảng, Tính Toán & Kỹ Thuật Lính Canh Min/Max',
      readingTimeMinutes: 50,
      moodleType: 'VPL Tìm giá trị lớn nhất, nhỏ nhất và vị trí đầu tiên/cuối cùng',
      objectives: [
        'Làm chủ mẫu hình duyệt mảng 1 lượt (Single-pass traversal) với độ phức tạp thời gian tối ưu O(N).',
        'Vận dụng biến tích lũy (Accumulator) để tính tổng, tích, đếm số lượng và tính trung bình cộng có điều kiện.',
        'Hiểu bản chất và cài đặt thành thạo Thuật toán Lính canh (Sentinel technique) tìm phần tử lớn nhất (Max) và nhỏ nhất (Min).',
        'Nắm vững kỹ thuật lưu vết chỉ số (Index Tracking) để biết chính xác phần tử Max/Min nằm ở vị trí nào trong mảng.',
        'Xử lý trọn vẹn các trường hợp biên: Mảng toàn số âm, mảng có nhiều phần tử Min/Max bằng nhau.'
      ],
      prerequisites: [
        'Đã học xong Bài 1 Chương 6 (Khái niệm mảng và nhập xuất).'
      ],
      leadIn: {
        hook: 'Nếu bạn có một danh sách 1 triệu cổ phiếu, làm cách nào để tìm ra mã cổ phiếu có giá cao nhất mà chỉ cần lướt mắt qua danh sách đúng MỘT lần duy nhất?',
        question: 'Tại sao việc khởi tạo `int max = 0;` trước khi tìm số lớn nhất lại là một sai lầm chết người trong lập trình khi mảng của bạn chứa toàn các số âm?',
        realWorldScenario: 'Tìm thủ khoa đầu vào của một trường đại học, thống kê lượng mưa trung bình trong tháng, hay phát hiện mức biến động nhiệt độ cao nhất trong ngày của trạm khí tượng thủy văn.'
      },
      theorySections: [
        {
          title: '1. Mẫu hình duyệt mảng tích lũy (Accumulator Pattern)',
          content: 'Khi cần tính toán các giá trị tổng hợp từ mảng (như tổng, trung bình, đếm phần tử chẵn), ta sử dụng một biến tích lũy bên ngoài vòng lặp:\n\n```cpp\n// Tinh tong va trung binh cong cac so chan\nlong long sumEven = 0;\nint countEven = 0;\n\nfor (int i = 0; i < n; ++i) {\n    if (a[i] % 2 == 0) {\n        sumEven += a[i];\n        countEven++;\n    }\n}\n\ndouble avg = (countEven > 0) ? (double)sumEven / countEven : 0.0;\n```\n*Lưu ý cốt tử:*\n- Luôn khởi tạo `sum = 0` (đối với phép nhân thì `product = 1`).\n- Kiểm tra chia cho 0 (`count > 0`) trước khi tính trung bình cộng.\n- Ép kiểu `(double)sum / count` để tránh phép chia nguyên mất phần thập phân.'
        },
        {
          title: '2. Thuật toán Lính canh (Sentinel Technique) tìm Min/Max',
          content: 'Tư tưởng của thuật toán lính canh: Ban đầu chọn ngay phần tử đầu tiên của mảng `a[0]` làm \"lính canh\" (tạm coi nó là lớn nhất/nhỏ nhất). Sau đó duyệt qua các phần tử còn lại từ `1` đến `n - 1`. Nếu gặp ai \"mạnh hơn\" lính canh, ta thay thế vị trí lính canh bằng kẻ đó:\n\n```cpp\n// Thuat toan tim Max chuan muc\nint maxVal = a[0]; // Dung phan tu a[0] lam linh canh ban dau\nint maxIndex = 0;  // Luu vet vi tri cua Max\n\nfor (int i = 1; i < n; ++i) {\n    if (a[i] > maxVal) {\n        maxVal = a[i];   // Cap nhat gia tri ky luc moi\n        maxIndex = i;    // Cap nhat vi tri ghi ban\n    }\n}\n```\n\n**Tại sao KHÔNG ĐƯỢC gán `maxVal = 0`?**\nNếu mảng chứa các số âm: `{-10, -5, -20, -8}`. Nếu bạn gán `maxVal = 0`, thì sau vòng lặp số 0 vẫn lớn hơn mọi số âm trong mảng! Kết quả thuật toán sẽ trả về số 0 - một con số hoàn toàn không hề có trong mảng! Gán `maxVal = a[0]` luôn đảm bảo đúng đắn trong mọi trường hợp.'
        },
        {
          title: '3. Xử lý nhiều phần tử cực trị và lưu vết vị trí',
          content: '- **Lấy vị trí ĐẦU TIÊN của Max:** Dùng dấu `>` nghiêm ngặt:\n  `if (a[i] > maxVal)`: Khi gặp phần tử bằng với max cũ, nó không cập nhật, giữ lại vị trí đầu tiên.\n- **Lấy vị trí CUỐI CÙNG của Max:** Dùng dấu `>=`:\n  `if (a[i] >= maxVal)`: Khi gặp phần tử bằng max cũ, nó cập nhật vị trí mới nhất.\n- **Tìm TẤT CẢ các vị trí có giá trị bằng Max:**\n  - Bước 1: Tìm ra `maxVal` qua 1 lượt duyệt.\n  - Bước 2: Duyệt lại mảng lần thứ hai, nếu `a[i] == maxVal` thì in ra chỉ số `i`.'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Phân tích toàn diện nhiệt độ trạm khí tượng trong tuần',
          problem: 'Nhập nhiệt độ trung bình của N ngày (1 <= N <= 31). Viết chương trình: 1. Tính nhiệt độ trung bình cả đợt; 2. Đếm số ngày có nhiệt độ cao hơn nhiệt độ trung bình; 3. Tìm nhiệt độ cao nhất (Max), nhiệt độ thấp nhất (Min) kèm theo ngày xuất hiện đầu tiên và ngày xuất hiện cuối cùng.',
          analysis: {
            input: 'N (số ngày) và N số thực nhiệt độ temp[0] .. temp[n-1]',
            output: 'Nhiệt độ TB, số ngày trên TB, Max kèm vị trí đầu/cuối, Min kèm vị trí đầu/cuối.',
            idea: 'Duyệt 1 lượt tính tổng và tìm Min/Max lính canh. Duyệt lượt 2 đếm số ngày trên trung bình và tìm vị trí cuối cùng.',
            algorithm: 'Bước 1: Nhập N và mảng nhiệt độ temp[]\nBước 2: sum = temp[0], maxVal = temp[0], minVal = temp[0], firstMax = 0, firstMin = 0\nBước 3: for i = 1 -> n - 1:\n  sum += temp[i]\n  if (temp[i] > maxVal) { maxVal = temp[i]; firstMax = i; }\n  if (temp[i] < minVal) { minVal = temp[i]; firstMin = i; }\nBước 4: avg = sum / n\nBước 5: Duyệt đếm ngày > avg và tìm lastMax, lastMin'
          },
          code: `#include <iostream>
#include <iomanip>
using namespace std;

const int MAX_DAYS = 31;

int main() {
    double temp[MAX_DAYS];
    int n = 0;

    cout << "=== HE THONG PHAN TICH KHI TUONG THUY VAN ===" << endl;
    do {
        cout << "Nhap so ngay quan trac N (1 <= N <= 31): ";
        cin >> n;
    } while (n < 1 || n > 31);

    cout << "Nhap nhiet do cho " << n << " ngay (do C):" << endl;
    for (int i = 0; i < n; ++i) {
        cout << "Ngay [" << i + 1 << "]: ";
        cin >> temp[i];
    }

    // 1. Tinh tong va tim Min/Max vi tri dau tien
    double sum = temp[0];
    double maxVal = temp[0];
    int firstMaxIdx = 0;
    double minVal = temp[0];
    int firstMinIdx = 0;

    for (int i = 1; i < n; ++i) {
        sum += temp[i];
        if (temp[i] > maxVal) {
            maxVal = temp[i];
            firstMaxIdx = i;
        }
        if (temp[i] < minVal) {
            minVal = temp[i];
            firstMinIdx = i;
        }
    }

    double avgTemp = sum / n;

    // 2. Dem ngay co nhiet do tren trung binh & tim vi tri cuoi cung
    int countAboveAvg = 0;
    int lastMaxIdx = firstMaxIdx;
    int lastMinIdx = firstMinIdx;

    for (int i = 0; i < n; ++i) {
        if (temp[i] > avgTemp) {
            countAboveAvg++;
        }
        if (temp[i] == maxVal) {
            lastMaxIdx = i;
        }
        if (temp[i] == minVal) {
            lastMinIdx = i;
        }
    }

    // 3. In bao cao thong ke
    cout << "\n==================================================" << endl;
    cout << "           BAO CAO THONG KE KHI HAU               " << endl;
    cout << "==================================================" << endl;
    cout << fixed << setprecision(2);
    cout << "- Nhiet do trung binh : " << avgTemp << " do C" << endl;
    cout << "- So ngay tren muc TB  : " << countAboveAvg << " ngay" << endl;
    cout << "--------------------------------------------------" << endl;
    cout << "- Nhiet do CAO NHAT   : " << maxVal << " do C" << endl;
    cout << "  + Xuat hien dau tien vao ngay: " << firstMaxIdx + 1 << endl;
    cout << "  + Xuat hien lan cuoi vao ngay : " << lastMaxIdx + 1 << endl;
    cout << "--------------------------------------------------" << endl;
    cout << "- Nhiet do THAP NHAT  : " << minVal << " do C" << endl;
    cout << "  + Xuat hien dau tien vao ngay: " << firstMinIdx + 1 << endl;
    cout << "  + Xuat hien lan cuoi vao ngay : " << lastMinIdx + 1 << endl;
    cout << "==================================================" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'double maxVal = temp[0]; double minVal = temp[0];',
              explanation: 'Khởi tạo lính canh an toàn tuyệt đối bằng chính phần tử đầu tiên của mảng, giải quyết hoàn hảo trường hợp dữ liệu âm.'
            },
            {
              lineOrBlock: 'for (int i = 1; i < n; ++i)',
              explanation: 'Vì phần tử temp[0] đã được dùng làm lính canh nên vòng lặp so sánh chỉ cần bắt đầu từ i = 1, tiết kiệm 1 phép so sánh thừa.'
            },
            {
              lineOrBlock: 'if (temp[i] == maxVal) lastMaxIdx = i;',
              explanation: 'Kỹ thuật lưu vết chỉ số xuất hiện lần cuối cùng của giá trị cực trị trong mảng.'
            }
          ],
          executionResult: {
            sampleInput: `7
28.5
32.0
25.5
32.0
27.0
24.0
30.5`,
            sampleOutput: `=== HE THONG PHAN TICH KHI TUONG THUY VAN ===
Nhap so ngay quan trac N (1 <= N <= 31): 7
Nhap nhiet do cho 7 ngay (do C):
Ngay [1]: 28.5
Ngay [2]: 32.0
Ngay [3]: 25.5
Ngay [4]: 32.0
Ngay [5]: 27.0
Ngay [6]: 24.0
Ngay [7]: 30.5

==================================================
           BAO CAO THONG KE KHI HAU               
==================================================
- Nhiet do trung binh : 28.50 do C
- So ngay tren muc TB  : 3 ngay
--------------------------------------------------
- Nhiet do CAO NHAT   : 32.00 do C
  + Xuat hien dau tien vao ngay: 2
  + Xuat hien lan cuoi vao ngay : 4
--------------------------------------------------
- Nhiet do THAP NHAT  : 24.00 do C
  + Xuat hien dau tien vao ngay: 6
  + Xuat hien lan cuoi vao ngay : 6
==================================================`
          },
          analysisOfResult: 'Thuật toán xác định chính xác giá trị Max 32.0 xuất hiện 2 lần (ngày 2 và ngày 4) và Min 24.0 xuất hiện ngày 6; tính đúng nhiệt độ TB 28.50 và 3 ngày vượt ngưỡng TB.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Tính tổng số nguyên tố trong mảng',
          task: 'Nhập mảng N số nguyên. Viết hàm kiểm tra số nguyên tố và tính tổng tất cả các số nguyên tố có mặt trong mảng.',
          hints: ['Duyệt qua mảng, if (isPrime(a[i])) sum += a[i];'],
          expectedOutput: 'Mang: [2, 3, 4, 5, 6] -> Tong SNT: 2 + 3 + 5 = 10'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Tìm số dương nhỏ nhất trong mảng',
          task: 'Nhập mảng gồm cả số âm, 0 và số dương. Tìm giá trị dương nhỏ nhất trong mảng. Nếu mảng không có số dương nào, in ra thông báo "Khong co so duong".',
          hints: ['Không thể gán min = a[0] ngay nếu a[0] <= 0. Phải tìm số dương đầu tiên làm lính canh, nếu không tìm thấy thì kết luận.'],
          expectedOutput: 'Mang: [-5, 8, -2, 3, 10] -> So duong nho nhat: 3'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Tìm phần tử lớn thứ nhì trong mảng (Second Max)',
          task: 'Tìm giá trị lớn thứ nhì (khác với giá trị lớn nhất) trong mảng N phần tử chỉ bằng 1 lượt duyệt duy nhất O(N).',
          hints: ['Dùng hai biến max1 và max2. Khi a[i] > max1 thì max2 = max1; max1 = a[i]. Nếu max1 > a[i] > max2 thì max2 = a[i].'],
          expectedOutput: 'Mang: [10, 20, 20, 15, 8] -> Max 1: 20, Max 2: 15'
        }
      ],
      commonErrors: [
        {
          name: 'Khởi tạo lính canh maxVal = 0 khi mảng toàn số âm',
          symptom: 'Mảng nhập vào là {-10, -5, -20}, nhưng chương trình kết luận Max = 0!',
          rootCause: 'Số 0 lớn hơn mọi số âm trong mảng. Không có phần tử nào thỏa mãn a[i] > 0 nên maxVal giữ nguyên bằng 0.',
          howToFix: 'Luôn khởi tạo maxVal = a[0] (hoặc dùng INT_MIN trong thư viện <climits>).',
          badCode: `int maxVal = 0; // NGUY HIEM khi mang toan so am!
for (int i = 0; i < n; ++i) {
    if (a[i] > maxVal) maxVal = a[i];
}`,
          goodCode: `int maxVal = a[0]; // AN TOAN 100%
for (int i = 1; i < n; ++i) {
    if (a[i] > maxVal) maxVal = a[i];
}`
        },
        {
          name: 'Lỗi chia cho 0 (Divide by Zero) khi tính trung bình cộng có điều kiện',
          symptom: 'Chương trình in ra "nan" (Not a Number) hoặc bị Crash văng lỗi.',
          rootCause: 'Khi mảng không có phần tử nào thỏa mãn điều kiện (ví dụ không có số chẵn), biến đếm count = 0. Phép chia sum / count là chia cho 0.',
          howToFix: 'Luôn kiểm tra if (count > 0) trước khi thực hiện phép chia tính trung bình.',
          badCode: `double avg = (double)sumEven / countEven; // Crash neu countEven == 0!`,
          goodCode: `double avg = (countEven > 0) ? (double)sumEven / countEven : 0.0;`
        },
        {
          name: 'Quên ép kiểu khi chia hai số nguyên',
          symptom: 'Tổng 15 chia cho 4 phần tử nhưng kết quả ra 3.00 thay vì 3.75.',
          rootCause: 'sum và count đều là kiểu int nên phép toán sum / count là phép chia nguyên lấy phần nguyên.',
          howToFix: 'Ép kiểu một trong hai toán hạng sang double: (double)sum / count.',
          badCode: `double avg = sum / count; // Mat phan thap phan!`,
          goodCode: `double avg = (double)sum / count; // Chinh xac 3.75`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Khởi tạo lính canh chuẩn',
          description: 'Giải thích tại sao trong thuật toán tìm giá trị nhỏ nhất của mảng, việc gán `min = a[0]` và cho vòng lặp chạy từ `i = 1` lại tối ưu và an toàn hơn việc gán `min = 999999`.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Đếm số lượng phần tử đạt cực đại',
          description: 'Viết chương trình tìm giá trị lớn nhất của mảng và đếm xem trong mảng có bao nhiêu phần tử có giá trị đúng bằng giá trị lớn nhất đó.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Khoảng cách giữa hai phần tử xa nhất',
          description: 'Cho mảng N số thực. Hãy tìm hiệu số lớn nhất giữa hai phần tử bất kỳ trong mảng: `diff = Max - Min`.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Cặp phần tử có tổng gần 0 nhất',
          description: 'Cho mảng N số nguyên gồm cả âm và dương. Hãy tìm một cặp phần tử `(a[i], a[j])` với `i != j` sao cho tổng của chúng `|a[i] + a[j]|` đạt giá trị nhỏ nhất có thể.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Tại sao khi tìm phần tử lớn nhất trong mảng số nguyên, ta nên khởi tạo max = a[0] thay vì max = 0?',
          options: [
            'Vì max = a[0] giúp chương trình chạy nhanh hơn gấp đôi',
            'Vì nếu mảng chứa toàn các số nguyên âm, gán max = 0 sẽ dẫn đến kết quả sai (trả về 0)',
            'Vì chuẩn C++ bắt buộc biến max phải lấy giá trị từ mảng',
            'Vì gán max = 0 sẽ làm tràn bộ nhớ stack'
          ],
          correctIndex: 1,
          explanation: 'Nếu mảng chứa toàn số âm (ví dụ: -5, -12, -3), mọi phần tử đều nhỏ hơn 0, do đó nếu khởi tạo max = 0 thì không có phần tử nào vượt qua được 0, thuật toán kết luận sai rằng Max là 0.'
        },
        {
          id: 2,
          question: 'Đoạn mã: for (int i = 0; i < n; ++i) if (a[i] >= maxVal) { maxVal = a[i]; maxIndex = i; } sẽ lưu lại vị trí nào của phần tử Max nếu có nhiều phần tử bằng nhau?',
          options: [
            'Vị trí xuất hiện đầu tiên',
            'Vị trí xuất hiện cuối cùng',
            'Vị trí ở chính giữa mảng',
            'Không xác định'
          ],
          correctIndex: 1,
          explanation: 'Vì sử dụng dấu lớn hơn hoặc bằng (>=), mỗi khi gặp một phần tử bằng với maxVal hiện tại, điều kiện vẫn đúng và maxIndex sẽ được cập nhật lại, do đó nó sẽ lưu vết vị trí xuất hiện cuối cùng trong mảng.'
        },
        {
          id: 3,
          question: 'Biến sum có kiểu int, biến count có kiểu int. Để tính trung bình cộng ra số thực chính xác, biểu thức nào sau đây là ĐÚNG?',
          options: [
            'double avg = sum / count;',
            'double avg = (double)(sum / count);',
            'double avg = (double)sum / count;',
            'double avg = double(sum / count);'
          ],
          correctIndex: 2,
          explanation: 'Phải ép kiểu (double)sum trước phép chia để biến sum trở thành số thực, khi đó phép toán chia sẽ là phép chia số thực, cho kết quả có phần thập phân.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Accumulator', val: 'Khởi tạo sum = 0, product = 1 trước vòng lặp' },
          { key: 'Sentinel (Lính canh)', val: 'maxVal = a[0]; minVal = a[0]; lặp từ i = 1' },
          { key: 'Lưu vết chỉ số', val: 'Cập nhật maxIndex = i đồng thời khi maxVal thay đổi' },
          { key: 'Vị trí đầu vs cuối', val: 'Dấu > lấy vị trí đầu tiên; Dấu >= lấy vị trí cuối cùng' },
          { key: 'Ép kiểu trung bình', val: '(double)sum / count và luôn chặn chia cho 0' }
        ],
        coreTakeaway: 'Duyệt mảng 1 lượt (Single pass) là kỹ thuật nền tảng. Khởi tạo lính canh a[0] loại bỏ hoàn toàn lỗi giá trị âm và giúp thuật toán đạt chuẩn công nghiệp.'
      },
      checklist: [
        'Tôi nắm vững cách tính tổng, đếm và ép kiểu số thực khi tính trung bình.',
        'Tôi luôn chặn trường hợp chia cho 0 khi tính toán có điều kiện.',
        'Tôi hiểu rõ vì sao phải gán lính canh maxVal = a[0] thay vì gán 0.',
        'Tôi biết cách phân biệt lưu vết vị trí đầu tiên (dùng >) và vị trí cuối cùng (dùng >=).'
      ],
      extendedChallenge: {
        title: 'Thuật toán Kadane tìm dãy con liên tiếp có tổng lớn nhất',
        scenario: 'Trong phân tích chuỗi thời gian chứng khoán, tìm khoảng thời gian mua và bán để tối đa hóa lợi nhuận.',
        challengeTask: 'Cho mảng N số nguyên gồm cả âm và dương. Tìm một dãy con gồm các phần tử liên tiếp sao cho tổng các phần tử trong dãy con đó là lớn nhất (Maximum Subarray Problem) với độ phức tạp O(N).',
        thoughtGuidance: 'Sử dụng biến currentSum và maxSum. Nếu currentSum < 0 thì reset currentSum = 0.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 3: TÌM KIẾM TUẦN TỰ & CÁC BÀI TOÁN ĐẾM / THỐNG KÊ (L20)
    // -------------------------------------------------------------
    {
      id: 'CH06-L03',
      lessonNumber: 3,
      chapterNumber: 6,
      title: 'Tìm Kiếm Tuần Tự & Các Bài Toán Đếm / Thống Kê',
      readingTimeMinutes: 50,
      moodleType: 'VPL Đếm số lần xuất hiện của số X trong mảng',
      objectives: [
        'Hiểu bản chất và cài đặt thành thạo Thuật toán Tìm kiếm tuần tự (Linear Search).',
        'Vận dụng kỹ thuật Thoát sớm (Early Exit với break) để tối ưu thời gian chạy trong bài toán kiểm tra tồn tại.',
        'Phân biệt bài toán: Kiểm tra tồn tại (Boolean), Tìm vị trí đầu/cuối, Tìm tất cả các vị trí, và Đếm số lần xuất hiện.',
        'Hiểu cơ chế mảng đếm phân phối / mảng đánh dấu tần suất (Frequency Array / Counting Array) cho các giá trị số nhỏ.',
        'Đánh giá độ phức tạp thời gian: Trường hợp tốt nhất O(1), trường hợp xấu nhất và trung bình O(N).'
      ],
      prerequisites: [
        'Đã học xong Bài 1 và Bài 2 Chương 6.'
      ],
      leadIn: {
        hook: 'Khi bạn làm mất chìa khóa phòng trong một dãy 100 chiếc hộp chưa được đánh dấu, bạn sẽ tìm như thế nào? Bắt buộc phải mở từng hộp từ đầu đến cuối cho đến khi thấy chìa khóa. Đó chính là Tìm kiếm tuần tự!',
        question: 'Nếu bạn chỉ cần kiểm tra xem người dùng có ID = 12345 có nằm trong danh sách hay không, tại sao lại tiếp tục duyệt tiếp 99.000 phần tử còn lại sau khi đã tìm thấy người đó ở ngay vị trí số 2?',
        realWorldScenario: 'Quét thẻ từ tại cổng xe buýt thông minh, tìm mã số sinh viên trong danh sách cấm thi, hay thuật toán kiểm duyệt từ khóa cấm xuất hiện trong bình luận.'
      },
      theorySections: [
        {
          title: '1. Thuật toán Tìm kiếm tuần tự (Linear Search)',
          content: 'Tìm kiếm tuần tự là phương pháp đơn giản và trực quan nhất để tìm một giá trị $X$ trong mảng chưa được sắp xếp: Lần lượt so sánh $X$ với từng phần tử $a[0], a[1], \\dots, a[n-1]$.\n\n```cpp\n// Tim kiem vi tri dau tien cua X\nint foundIndex = -1; // -1 bieu thi khong tim thay\n\nfor (int i = 0; i < n; ++i) {\n    if (a[i] == x) {\n        foundIndex = i; // Tim thay!\n        break;          // THOAT SOM (Early Exit) - Khong can tim nua!\n    }\n}\n\nif (foundIndex != -1) {\n    cout << \"Tim thay X tai chi so: \" << foundIndex << endl;\n} else {\n    cout << \"Khong tim thay X trong mang!\" << endl;\n}\n```\n\n**Đánh giá độ phức tạp:**\n- *Tốt nhất ($O(1)$):* $X$ nằm ngay ở `a[0]`, vòng lặp chạy 1 lần rồi `break`.\n- *Xấu nhất ($O(N)$):* $X$ nằm ở cuối cùng hoặc không tồn tại trong mảng, phải duyệt hết cả $N$ phần tử.'
        },
        {
          title: '2. Các biến thể quan trọng của bài toán tìm kiếm',
          content: '- **Biến thể 1: Đếm số lần xuất hiện (Frequency Counting):**\n  Duyệt toàn bộ mảng (không dùng `break`), tăng biến đếm mỗi khi `a[i] == x`.\n- **Biến thể 2: Liệt kê tất cả các vị trí xuất hiện:**\n  Mỗi khi `a[i] == x`, in ra chỉ số `i`.\n- **Biến thể 3: Tìm vị trí cuối cùng:**\n  Duyệt ngược từ cuối mảng về đầu: `for (int i = n - 1; i >= 0; --i)` và `break` ngay khi thấy $X$.'
        },
        {
          title: '3. Kỹ thuật Mảng đếm phân phối (Frequency Array)',
          content: 'Khi các phần tử trong mảng là các số nguyên không âm có giá trị nhỏ (ví dụ điểm thi từ 0 đến 10, hay số sao đánh giá 1 đến 5), ta có thể dùng một **Mảng đánh dấu tần suất `count[val]`** trong đó chỉ số chính là giá trị cần đếm:\n\n```cpp\nint freq[11] = {0}; // Mang dem diem tu 0 den 10\n\nfor (int i = 0; i < n; ++i) {\n    freq[scores[i]]++; // Tang tan suat cua diem nay len 1\n}\n\n// In bang tan suat\nfor (int score = 0; score <= 10; ++score) {\n    if (freq[score] > 0) {\n        cout << \"Diem \" << score << \": xuat hien \" << freq[score] << \" lan.\\n\";\n    }\n}\n```\nKỹ thuật này cho phép tra cứu số lần xuất hiện của bất kỳ giá trị nào với tốc độ tức thời $O(1)$!'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Hệ thống tra cứu mã số vé số trúng thưởng',
          problem: 'Hệ thống lưu danh sách N mã số vé số bán ra trong ngày. Nhập mã số trúng giải đặc biệt X. Viết chương trình: 1. Kiểm tra vé X có trúng hay không (sử dụng Early Exit); 2. Đếm xem có bao nhiêu người cùng mua vé số X; 3. Liệt kê danh sách tất cả các vị trí khách hàng trúng thưởng.',
          analysis: {
            input: 'N (số lượng vé), mảng tickets[] và mã trúng thưởng X.',
            output: 'Thông báo trúng hay không, tổng số vé trúng và danh sách vị trí.',
            idea: 'Sử dụng linear search. Dùng cờ hiệu boolean hoặc đếm để báo cáo.',
            algorithm: 'Bước 1: Nhập N và tickets[]\nBước 2: Nhập số cần tìm X\nBước 3: Khởi tạo cnt = 0\nBước 4: Duyệt i từ 0 đến n - 1. Nếu tickets[i] == X thì in i và cnt++\nBước 5: Kết luận dựa trên biến cnt'
          },
          code: `#include <iostream>
using namespace std;

const int MAX_TICKETS = 1000;

int main() {
    int tickets[MAX_TICKETS];
    int n = 0;

    cout << "=== HE THONG TRA CUU VE SO TRUNG THUONG ===" << endl;
    cout << "Nhap so luong ve da ban N: ";
    cin >> n;

    cout << "Nhap ma so cua " << n << " ve (so nguyen):" << endl;
    for (int i = 0; i < n; ++i) {
        cin >> tickets[i];
    }

    int luckyNumber = 0;
    cout << "\nNhap ma so trung thuong can tra cuu X: ";
    cin >> luckyNumber;

    // 1. Kiem tra su ton tai va dem so lan xuat hien
    int matchCount = 0;
    cout << "\n--- KET QUA TRA CUU ---" << endl;

    for (int i = 0; i < n; ++i) {
        if (tickets[i] == luckyNumber) {
            matchCount++;
            cout << "-> Phat hien ve trung tai vi tri khach hang so: [" << i + 1 << "]" << endl;
        }
    }

    // 2. Tong ket thong ke
    if (matchCount > 0) {
        cout << "=> CHUC MUNG! Co tong cong " << matchCount << " ve trung giai dac biet " << luckyNumber << "!" << endl;
    } else {
        cout << "=> RAT TIEC: Khong co ve nao trung giai dac biet " << luckyNumber << " hom nay." << endl;
    }

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'int matchCount = 0;',
              explanation: 'Biến đếm tần suất xuất hiện. Nếu sau vòng lặp matchCount == 0, ta khẳng định chắc chắn phần tử X không tồn tại trong mảng.'
            },
            {
              lineOrBlock: 'if (tickets[i] == luckyNumber)',
              explanation: 'Phép so sánh tuần tự của Linear Search. Duyệt toàn bộ mảng để không bỏ sót bất kỳ khách hàng trúng thưởng nào.'
            }
          ],
          executionResult: {
            sampleInput: `6
8892 1234 5678 1234 9999 1234
1234`,
            sampleOutput: `=== HE THONG TRA CUU VE SO TRUNG THUONG ===
Nhap so luong ve da ban N: 6
Nhap ma so cua 6 ve (so nguyen):
8892 1234 5678 1234 9999 1234

Nhap ma so trung thuong can tra cuu X: 1234

--- KET QUA TRA CUU ---
-> Phat hien ve trung tai vi tri khach hang so: [2]
-> Phat hien ve trung tai vi tri khach hang so: [4]
-> Phat hien ve trung tai vi tri khach hang so: [6]
=> CHUC MUNG! Co tong cong 3 ve trung giai dac biet 1234!`
          },
          analysisOfResult: 'Thuật toán tìm kiếm tuần tự quét toàn bộ danh sách, phát hiện chính xác 3 vị trí khách hàng mua vé số 1234.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Kiểm tra phần tử âm đầu tiên',
          task: 'Nhập mảng N số nguyên. Tìm và in ra vị trí của số âm đầu tiên trong mảng. Nếu không có số âm nào thì in ra -1.',
          hints: ['Dùng for duyệt từ 0, gặp a[i] < 0 thì lưu i, break ngay.'],
          expectedOutput: 'Mang: [5, 7, -3, 8, -9] -> So am dau tien tai chi so: 2'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Tìm vị trí số chẵn cuối cùng',
          task: 'Nhập mảng N số nguyên. Tìm chỉ số của số chẵn cuối cùng xuất hiện trong mảng bằng cách duyệt ngược từ cuối mảng.',
          hints: ['Duyệt for (int i = n - 1; i >= 0; --i), nếu a[i] % 2 == 0 thì in i và break.'],
          expectedOutput: 'Mang: [3, 4, 7, 8, 9] -> So chan cuoi cung tai chi so: 3 (so 8)'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Tìm phần tử xuất hiện nhiều lần nhất (Mode)',
          task: 'Nhập mảng N số nguyên (các phần tử có giá trị từ 0 đến 100). Tìm phần tử có số lần xuất hiện nhiều nhất trong mảng bằng kỹ thuật Mảng đếm tần suất.',
          hints: ['Dùng int count[101] = {0}; sau đó tìm max của mảng count.'],
          expectedOutput: 'Mang: [5, 2, 5, 8, 5, 2] -> So xuat hien nhieu nhat la: 5 (3 lan)'
        }
      ],
      commonErrors: [
        {
          name: 'Đặt lệnh in "Không tìm thấy" bên trong vòng lặp',
          symptom: 'Màn hình in ra hàng chục dòng "Khong tim thay" lặp đi lặp lại trước khi in "Tim thay".',
          rootCause: 'Viết else { cout << "Khong tim thay"; } bên trong thân vòng lặp for. Mỗi phần tử không trùng nó đều in thông báo.',
          howToFix: 'Dùng biến cờ hiệu bool found = false hoặc kiểm tra foundIndex sau khi vòng lặp đã kết thúc hoàn toàn.',
          badCode: `for (int i = 0; i < n; ++i) {
    if (a[i] == x) cout << "Tim thay!";
    else cout << "Khong tim thay!"; // SAI TRẦM TRỌNG!
}`,
          goodCode: `bool found = false;
for (int i = 0; i < n; ++i) {
    if (a[i] == x) { found = true; break; }
}
if (!found) cout << "Khong tim thay!"; // Dung o ngoai vong lap`
        },
        {
          name: 'Quên lệnh break khi chỉ cần tìm phần tử đầu tiên',
          symptom: 'Chương trình chạy lãng phí thời gian khi mảng có 1 triệu phần tử và phần tử cần tìm nằm ngay ở vị trí đầu tiên.',
          rootCause: 'Không sử dụng kỹ thuật thoát sớm (Early Exit).',
          howToFix: 'Đặt lệnh break ngay khi tìm thấy kết quả thỏa mãn điều kiện.',
          badCode: `for (int i = 0; i < n; ++i) {
    if (a[i] == x) firstIdx = i; // Tiep tuc chay het mang!
}`,
          goodCode: `for (int i = 0; i < n; ++i) {
    if (a[i] == x) { firstIdx = i; break; } // Thoat ngay!
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Độ phức tạp của Tìm kiếm tuần tự',
          description: 'Phân tích số phép so sánh tối thiểu (Best Case) và tối đa (Worst Case) khi tìm kiếm phần tử X trong mảng có N phần tử bằng thuật toán Linear Search.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Kiểm tra mảng có chứa toàn số chẵn hay không',
          description: 'Sử dụng kỹ thuật thoát sớm (Early Exit) để kiểm tra xem một mảng có phải chứa toàn số chẵn hay không. Giải thích vì sao chỉ cần gặp một số lẻ là có thể dừng chương trình ngay.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Tìm giá trị đơn nhất (Unique Element)',
          description: 'Cho mảng trong đó mọi phần tử đều xuất hiện đúng 2 lần, chỉ duy nhất một phần tử xuất hiện 1 lần. Hãy tìm phần tử đơn nhất đó.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Liệt kê các phần tử phân biệt (Distinct Elements)',
          description: 'Nhập mảng A có N phần tử có thể trùng nhau. Hãy in ra các phần tử của mảng sao cho mỗi giá trị chỉ được in đúng 1 lần duy nhất.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Trường hợp tốt nhất (Best case) của thuật toán Tìm kiếm tuần tự xảy ra khi nào?',
          options: [
            'Khi phần tử cần tìm nằm ở vị trí cuối cùng của mảng',
            'Khi phần tử cần tìm nằm ở vị trí đầu tiên của mảng a[0]',
            'Khi phần tử cần tìm không tồn tại trong mảng',
            'Khi mảng đã được sắp xếp tăng dần'
          ],
          correctIndex: 1,
          explanation: 'Nếu phần tử cần tìm nằm ngay tại a[0], vòng lặp chỉ thực hiện đúng 1 phép so sánh rồi break thoát ra ngay, đạt độ phức tạp O(1).'
        },
        {
          id: 2,
          question: 'Làm thế nào để thông báo chính xác "Không tìm thấy X" sau khi tìm kiếm tuần tự?',
          options: [
            'Đặt câu lệnh in trong nhánh else của câu lệnh if bên trong vòng lặp for',
            'Sử dụng biến cờ hiệu bool found = false, bật lên true khi thấy X, sau vòng lặp nếu !found thì thông báo',
            'In thông báo ngay sau khi vòng lặp for kết thúc mà không cần điều kiện gì',
            'Không thể làm được nếu không dùng hàm đệ quy'
          ],
          correctIndex: 1,
          explanation: 'Chỉ sau khi duyệt qua toàn bộ các phần tử mà cờ hiệu vẫn là false thì ta mới có thể khẳng định chắc chắn 100% là X không tồn tại trong mảng.'
        },
        {
          id: 3,
          question: 'Khi các giá trị trong mảng là các số nguyên nhỏ từ 1 đến 10, kỹ thuật nào giúp kiểm tra số lần xuất hiện với tốc độ tức thời O(1)?',
          options: [
            'Mảng đếm phân phối / tần suất (Frequency Array)',
            'Sử dụng 10 vòng lặp lồng nhau',
            'Chia đôi mảng',
            'Toán tử cin >>'
          ],
          correctIndex: 0,
          explanation: 'Mảng tần suất count[val] sử dụng giá trị val làm chỉ số truy cập trực tiếp O(1), đếm nhanh chóng số lần xuất hiện của các số nhỏ.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Linear Search', val: 'So sánh lần lượt từng phần tử từ 0 đến N - 1' },
          { key: 'Early Exit', val: 'Dùng break khi đã tìm thấy để tối ưu thời gian' },
          { key: 'Cờ hiệu (Flag)', val: 'bool found = false kiểm tra tồn tại an toàn' },
          { key: 'Độ phức tạp', val: 'Best: O(1), Worst: O(N), Average: O(N)' },
          { key: 'Mảng đếm tần suất', val: 'count[val]++ tra cứu tức thời cho số nhỏ' }
        ],
        coreTakeaway: 'Tìm kiếm tuần tự là thuật toán cơ bản áp dụng cho mọi mảng chưa sắp xếp. Luôn kết hợp cờ hiệu và lệnh break để code chuẩn xác và tối ưu.'
      },
      checklist: [
        'Tôi cài đặt được thuật toán Linear Search và sử dụng break đúng lúc.',
        'Tôi biết cách dùng biến cờ hiệu để thông báo không tìm thấy ở ngoài vòng lặp.',
        'Tôi phân biệt được khi nào cần duyệt hết mảng (đếm) và khi nào dừng sớm (tìm thấy).',
        'Tôi hiểu cách hoạt động của mảng đếm tần suất count[val].'
      ],
      extendedChallenge: {
        title: 'Tìm kiếm nhị phân (Binary Search) trên mảng đã sắp xếp',
        scenario: 'Khi danh sách đã có thứ tự từ điển hoặc tăng dần (như cuốn từ điển 100.000 từ), thuật toán tìm kiếm nhị phân chỉ mất tối đa 17 lần so sánh.',
        challengeTask: 'Cài đặt thuật toán Binary Search: Cho mảng đã sắp xếp tăng dần, tìm kiếm X bằng cách liên tục chia đôi khoảng tìm kiếm [left, right].',
        thoughtGuidance: 'mid = left + (right - left) / 2. Nếu a[mid] == X trả về mid; nếu a[mid] < X tìm nửa phải left = mid + 1; ngược lại right = mid - 1.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 4: CHÈN, XÓA PHẦN TỬ & SẮP XẾP BUBBLE SORT (L21)
    // -------------------------------------------------------------
    {
      id: 'CH06-L04',
      lessonNumber: 4,
      chapterNumber: 6,
      title: 'Thao Tác Nâng Cao: Chèn, Xóa Phần Tử & Sắp Xếp Nổi Bọt (Bubble Sort)',
      readingTimeMinutes: 55,
      moodleType: 'Bài thực hành Lab 03: Xử lý danh sách điểm sinh viên toàn diện',
      objectives: [
        'Hiểu bản chất cơ chế biến đổi kích thước logic của mảng một chiều thông qua kỹ thuật Dồn dịch phần tử (Array Shifting).',
        'Cài đặt chuẩn xác thao tác Xóa phần tử tại vị trí K (dồn dịch từ trái sang phải, giảm N).',
        'Cài đặt chuẩn xác thao tác Chèn phần tử X vào vị trí K (dồn dịch từ phải sang trái, tăng N, chống tràn mảng).',
        'Hiểu nguyên lý hoạt động của Thuật toán Sắp xếp nổi bọt (Bubble Sort): Cho các phần tử lớn \"nổi\" dần về cuối mảng.',
        'Vận dụng hàm hoán vị chuẩn std::swap() và tối ưu hóa Bubble Sort bằng cờ hiệu nhận diện mảng đã có thứ tự.'
      ],
      prerequisites: [
        'Đã học xong Bài 1, 2, 3 của Chương 6 và Vòng lặp lồng nhau ở Chương 4.'
      ],
      leadIn: {
        hook: 'Khi một học sinh mới chuyển vào lớp và cần xếp vào giữa hàng theo thứ tự chiều cao, tất cả các bạn đứng sau bạn đó phải làm gì? Họ phải lùi lại một bước! Đó chính là kỹ thuật chèn phần tử vào mảng.',
        question: 'Tại sao khi xóa một phần tử ở giữa mảng, ta phải duyệt dồn dịch từ vị trí K về cuối, trong khi khi chèn một phần tử mới, ta bắt buộc phải dồn dịch ngược từ cuối về vị trí K?',
        realWorldScenario: 'Xóa một bài đăng khỏi dòng thời gian, chèn một ca cấp cứu ưu tiên vào hàng đợi khám bệnh, hay sắp xếp bảng xếp hạng giải bóng đá Ngoại hạng Anh theo điểm số.'
      },
      theorySections: [
        {
          title: '1. Kỹ thuật Xóa một phần tử tại vị trí K (Delete at K)',
          content: 'Để xóa phần tử tại chỉ số `k` ($0 \\le k < n$):\n- Các phần tử đứng sau `k` (từ `k + 1` đến `n - 1`) phải được **dồn dịch sang trái 1 vị trí** để lấp đầy chỗ trống: `a[i] = a[i + 1]`.\n- Giảm kích thước thực tế của mảng: `n--`.\n\n```cpp\nvoid deleteAt(int a[], int &n, int k) {\n    if (k < 0 || k >= n) return; // Chi so khong hop le\n    \n    // Don dich sang trai tu k den n - 2\n    for (int i = k; i < n - 1; ++i) {\n        a[i] = a[i + 1];\n    }\n    n--; // Giam so luong phan tu thuc te\n}\n```\n*Lưu ý:* Vòng lặp chỉ chạy đến `n - 2` (điều kiện `i < n - 1`) để lệnh `a[i + 1]` không bị vượt biên mảng!'
        },
        {
          title: '2. Kỹ thuật Chèn một phần tử X vào vị trí K (Insert at K)',
          content: 'Để chèn giá trị `val` vào chỉ số `k` ($0 \\le k \\le n$):\n- Kiểm tra mảng còn chỗ chứa hay không (`n < MAX`).\n- Các phần tử từ `k` đến `n - 1` phải được **dồn dịch sang phải 1 vị trí** để tạo ô trống.\n- **Bắt buộc duyệt ngược từ cuối về:** `for (int i = n; i > k; --i) a[i] = a[i - 1];`.\n  *(Nếu duyệt xuôi từ k, bạn sẽ ghi đè và làm mất sạch các phần tử phía sau!)*\n- Đặt giá trị mới: `a[k] = val`.\n- Tăng kích thước mảng: `n++`.\n\n```cpp\nvoid insertAt(int a[], int &n, int k, int val, int maxCap) {\n    if (n >= maxCap || k < 0 || k > n) return;\n    \n    // Don dich nguoc sang phai tu cuoi ve\n    for (int i = n; i > k; --i) {\n        a[i] = a[i - 1];\n    }\n    a[k] = val; // Chen gia tri moi vao cho trong\n    n++;        // Tang so luong phan tu\n}\n```'
        },
        {
          title: '3. Thuật toán Sắp xếp nổi bọt (Bubble Sort)',
          content: 'Ý tưởng cốt lõi: Liên tục so sánh hai phần tử đứng cạnh nhau `a[j]` và `a[j + 1]`. Nếu chúng đứng sai thứ tự (`a[j] > a[j + 1]`), ta tráo đổi vị trí (*swap*) của chúng. Sau mỗi lượt duyệt ngoài `i`, phần tử lớn nhất còn lại sẽ \"nổi bọt\" về đúng vị trí cuối cùng của nó.\n\n```cpp\n#include <utility> // chua std::swap\n\nvoid bubbleSort(int a[], int n) {\n    for (int i = 0; i < n - 1; ++i) {\n        bool isSwapped = false; // Co hieu toi uu hoa\n        \n        for (int j = 0; j < n - 1 - i; ++j) {\n            if (a[j] > a[j + 1]) {\n                swap(a[j], a[j + 1]);\n                isSwapped = true;\n            }\n        }\n        \n        // Neu vong lap trong khong co hoan vi nao -> mang da co thu tu!\n        if (!isSwapped) break;\n    }\n}\n```\n*Tối ưu hóa:* Nhờ cờ hiệu `isSwapped`, nếu mảng đã được sắp xếp sẵn, thuật toán chỉ chạy 1 vòng rồi dừng ngay ($O(N)$), tránh lãng phí thời gian!'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Quản lý danh sách điểm số - Chèn, Xóa và Sắp xếp hoàn chỉnh',
          problem: 'Viết chương trình hoàn chỉnh quản lý danh sách điểm của lớp học (tối đa 100 sinh viên): 1. Nhập danh sách ban đầu gồm N điểm; 2. Sắp xếp mảng tăng dần bằng Bubble Sort; 3. Chèn thêm điểm của sinh viên phúc khảo vào vị trí K; 4. Xóa điểm của sinh viên hủy môn tại vị trí K; In mảng sau mỗi thao tác.',
          analysis: {
            input: 'Mảng n phần tử điểm thi ban đầu, vị trí và giá trị cần chèn, vị trí cần xóa.',
            output: 'Danh sách mảng điểm sau mỗi bước: Sau sắp xếp, sau chèn, sau xóa.',
            idea: 'Xây dựng các hàm tách rời: printArray, bubbleSort, insertAt, deleteAt.',
            algorithm: 'Hàm main lần lượt gọi: Nhập mảng -> Xuất mảng gốc -> bubbleSort -> insertAt -> deleteAt.'
          },
          code: `#include <iostream>
#include <iomanip>
#include <utility> // Cho std::swap
using namespace std;

const int MAX_CAPACITY = 100;

void printArray(const double a[], int n, const string &msg) {
    cout << "\n--- " << msg << " (N = " << n << ") ---" << endl;
    for (int i = 0; i < n; ++i) {
        cout << fixed << setprecision(1) << a[i] << " ";
    }
    cout << endl;
}

// 1. Thuat toan Bubble Sort kem co hieu toi uu
void bubbleSort(double a[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        bool haveSwap = false;
        for (int j = 0; j < n - 1 - i; ++j) {
            if (a[j] > a[j + 1]) {
                swap(a[j], a[j + 1]);
                haveSwap = true;
            }
        }
        if (!haveSwap) break; // Mang da co thu tu, dung som!
    }
}

// 2. Thao tac Chen phan tu vao vi tri K
bool insertAt(double a[], int &n, int k, double val) {
    if (n >= MAX_CAPACITY) {
        cout << "[Loi]: Mang da day bo nho, khong the chen!\n";
        return false;
    }
    if (k < 0 || k > n) {
        cout << "[Loi]: Chi so chen k = " << k << " khong hop le!\n";
        return false;
    }
    // Don dich sang phai tu cuoi mang ve k
    for (int i = n; i > k; --i) {
        a[i] = a[i - 1];
    }
    a[k] = val;
    n++;
    return true;
}

// 3. Thao tac Xoa phan tu tai vi tri K
bool deleteAt(double a[], int &n, int k) {
    if (k < 0 || k >= n) {
        cout << "[Loi]: Chi so xoa k = " << k << " khong hop le!\n";
        return false;
    }
    // Don dich sang trai tu k den n - 2
    for (int i = k; i < n - 1; ++i) {
        a[i] = a[i + 1];
    }
    n--;
    return true;
}

int main() {
    double scores[MAX_CAPACITY] = {7.5, 4.0, 9.0, 6.5, 8.0};
    int n = 5;

    cout << "=== HE THONG XU LY DANH SACH DIEM (BUBBLE SORT & SHIFTING) ===" << endl;
    printArray(scores, n, "Danh sach ban dau");

    // Thuc hien sap xep Bubble Sort
    bubbleSort(scores, n);
    printArray(scores, n, "Sau khi sap xep Bubble Sort tang dan");

    // Chen diem 8.5 vao chi so k = 3
    cout << "\n>> Thuc hien CHEN diem 8.5 vao vi tri chi so [3]...";
    insertAt(scores, n, 3, 8.5);
    printArray(scores, n, "Sau khi chen 8.5 vao vi tri [3]");

    // Xoa phan tu tai chi so k = 0 (diem thap nhat)
    cout << "\n>> Thuc hien XOA phan tu tai vi tri chi so [0]...";
    deleteAt(scores, n, 0);
    printArray(scores, n, "Sau khi xoa phan tu dau tien [0]");

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'swap(a[j], a[j + 1]);',
              explanation: 'Hàm chuẩn std::swap trong C++ tráo đổi giá trị của 2 biến an toàn và tối ưu không cần tự viết biến tạm temp.'
            },
            {
              lineOrBlock: 'for (int i = n; i > k; --i) a[i] = a[i - 1];',
              explanation: 'Kỹ thuật dồn dịch ngược: Phải đi từ cuối mảng lùi về vị trí k để tránh ghi đè làm mất dữ liệu của phần tử đứng sau.'
            },
            {
              lineOrBlock: 'for (int i = k; i < n - 1; ++i) a[i] = a[i + 1];',
              explanation: 'Kỹ thuật dồn dịch tiến: Lấy phần tử phía sau đè lên phần tử phía trước để xóa ô trống tại vị trí k.'
            }
          ],
          executionResult: {
            sampleInput: '(Dữ liệu khởi tạo mẫu: 7.5, 4.0, 9.0, 6.5, 8.0)',
            sampleOutput: `=== HE THONG XU LY DANH SACH DIEM (BUBBLE SORT & SHIFTING) ===

--- Danh sach ban dau (N = 5) ---
7.5 4.0 9.0 6.5 8.0 

--- Sau khi sap xep Bubble Sort tang dan (N = 5) ---
4.0 6.5 7.5 8.0 9.0 

>> Thuc hien CHEN diem 8.5 vao vi tri chi so [3]...
--- Sau khi chen 8.5 vao vi tri [3] (N = 6) ---
4.0 6.5 7.5 8.5 8.0 9.0 

>> Thuc hien XOA phan tu tai vi tri chi so [0]...
--- Sau khi xoa phan tu dau tien [0] (N = 5) ---
6.5 7.5 8.5 8.0 9.0 `
          },
          analysisOfResult: 'Mảng ban đầu được sắp xếp tăng dần chính xác thành [4.0, 6.5, 7.5, 8.0, 9.0]. Sau khi chèn 8.5 vào chỉ số 3, N tăng lên 6 và các phần tử phía sau được lùi nguyên vẹn. Sau khi xóa phần tử 0 (4.0), N giảm về 5 và mảng thu gọn hoàn hảo.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Xóa tất cả các số 0 trong mảng',
          task: 'Cho mảng N số nguyên. Viết chương trình xóa toàn bộ các phần tử có giá trị bằng 0 ra khỏi mảng.',
          hints: ['Khi xóa a[i] == 0 bằng deleteAt(a, n, i), nhớ giảm i-- để không bị bỏ sót phần tử kế tiếp vừa dồn về.'],
          expectedOutput: 'Mang: [1, 0, 0, 4, 5] -> Sau xoa: [1, 4, 5]'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Chèn X vào mảng đã sắp xếp sao cho vẫn giữ thứ tự',
          task: 'Cho mảng số nguyên đã sắp xếp tăng dần. Nhập số nguyên X. Hãy tìm vị trí thích hợp và chèn X vào mảng sao cho mảng vẫn giữ nguyên tính chất tăng dần.',
          hints: ['Tìm vị trí k đầu tiên mà a[k] > X, sau đó gọi insertAt(a, n, k, X).'],
          expectedOutput: 'Mang: [10, 20, 30, 40], X = 25 -> Mang moi: [10, 20, 25, 30, 40]'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Sắp xếp mảng giảm dần và in từng bước (Step-by-step)',
          task: 'Cài đặt Bubble Sort sắp xếp mảng giảm dần. Sau mỗi lần hoán vị (swap) hoặc sau mỗi lượt vòng lặp ngoài i, in toàn bộ mảng ra màn hình để quan sát các phần tử nhỏ nổi dần về cuối.',
          hints: ['Đổi điều kiện so sánh: if (a[j] < a[j + 1]) swap(a[j], a[j + 1]);'],
          expectedOutput: 'In chi tiết từng bước tráo đổi của thuật toán.'
        }
      ],
      commonErrors: [
        {
          name: 'Dồn dịch xuôi từ trái sang phải khi Chèn phần tử',
          symptom: 'Sau khi chèn, tất cả các phần tử từ k trở về sau đều bị biến thành cùng một giá trị giống hệt a[k].',
          rootCause: 'Viết for (int i = k; i < n; ++i) a[i + 1] = a[i]; khiến giá trị a[k] copy đè liên tục sang a[k+1], a[k+2]... làm mất dữ liệu gốc.',
          howToFix: 'Bắt buộc phải duyệt ngược từ cuối mảng về: for (int i = n; i > k; --i) a[i] = a[i - 1];',
          badCode: `for (int i = k; i < n; ++i) { // SAI! Ghi đè hủy hoại dữ liệu!
    a[i + 1] = a[i];
}`,
          goodCode: `for (int i = n; i > k; --i) { // ĐÚNG: Duyệt ngược an toàn
    a[i] = a[i - 1];
}`
        },
        {
          name: 'Quên lùi chỉ số i-- khi xóa phần tử trong vòng lặp duyệt',
          symptom: 'Khi mảng có hai số cần xóa đứng liền kề nhau (ví dụ: hai số 0 đứng cạnh nhau: [5, 0, 0, 8]), chương trình chỉ xóa được một số 0, số 0 còn lại bị bỏ sót.',
          rootCause: 'Sau khi xóa, phần tử phía sau lập tức trượt về trám vào chỉ số i hiện tại. Nếu vòng lặp tự động ++i, phần tử mới trượt về sẽ không bao giờ được kiểm tra.',
          howToFix: 'Mỗi khi xóa thành công một phần tử, lập tức giảm biến đếm: i--;',
          badCode: `for (int i = 0; i < n; ++i) {
    if (a[i] == 0) deleteAt(a, n, i); // Bị bỏ sót nếu hai số 0 đứng cạnh nhau!
}`,
          goodCode: `for (int i = 0; i < n; ++i) {
    if (a[i] == 0) {
        deleteAt(a, n, i);
        i--; // Lùi chỉ số để kiểm tra phần tử vừa trượt tới!
    }
}`
        },
        {
          name: 'Vượt biên mảng khi so sánh Bubble Sort',
          symptom: 'Chương trình so sánh phần tử a[n - 1] với a[n], đọc ô nhớ rác ngoài mảng.',
          rootCause: 'Vòng lặp trong chạy tới j < n - i thay vì j < n - 1 - i.',
          howToFix: 'Giới hạn vòng lặp trong là j < n - 1 - i để a[j + 1] luôn hợp lệ.',
          badCode: `for (int j = 0; j < n - i; ++j) { // a[j + 1] sẽ vượt biên khi j = n - 1
    if (a[j] > a[j + 1]) ...
}`,
          goodCode: `for (int j = 0; j < n - 1 - i; ++j) { // Chuẩn xác 100%
    if (a[j] > a[j + 1]) ...
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Nguyên lý Bubble Sort',
          description: 'Giải thích tại sao sau lượt lặp ngoài thứ nhất (i = 0) của Bubble Sort tăng dần, phần tử lớn nhất của mảng chắc chắn đã nằm ở vị trí cuối cùng a[n - 1].'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Tối ưu hóa Bubble Sort bằng cờ hiệu',
          description: 'Trình bày cơ chế hoạt động của cờ hiệu `bool isSwapped` trong Bubble Sort. Giải thích trường hợp nào cờ hiệu giúp thuật toán đạt độ phức tạp O(N).'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Xóa phần tử trùng lặp (Remove Duplicates)',
          description: 'Cho mảng đã được sắp xếp tăng dần. Hãy viết chương trình xóa tất cả các phần tử trùng lặp sao cho mỗi giá trị chỉ xuất hiện đúng 1 lần.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Trộn hai mảng đã sắp xếp (Merge Two Sorted Arrays)',
          description: 'Cho hai mảng A (N phần tử) và B (M phần tử) đều đã được sắp xếp tăng dần. Hãy trộn hai mảng này thành mảng C (N + M phần tử) cũng có thứ tự tăng dần với độ phức tạp thời gian O(N + M) mà không dùng thuật toán sắp xếp lại từ đầu.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Khi thực hiện thao tác Chèn một phần tử mới vào vị trí K trong mảng 1 chiều, chiều dồn dịch đúng là gì?',
          options: [
            'Dồn dịch từ vị trí K xuôi về cuối mảng',
            'Dồn dịch từ cuối mảng ngược về vị trí K',
            'Không cần dồn dịch, chỉ cần gán đè vào a[K]',
            'Dồn dịch ngẫu nhiên'
          ],
          correctIndex: 1,
          explanation: 'Khi chèn phần tử, bắt buộc phải dồn dịch từ cuối mảng ngược về vị trí K (for i = n; i > k; --i a[i] = a[i-1]) để tránh việc giá trị mới ghi đè làm mất các phần tử đứng phía sau.'
        },
        {
          id: 2,
          question: 'Vai trò của biến cờ hiệu bool isSwapped trong thuật toán Bubble Sort tối ưu là gì?',
          options: [
            'Để đếm số lần hoán vị hai phần tử',
            'Để phát hiện nếu trong một lượt duyệt không có bất kỳ phép hoán vị nào xảy ra, chứng tỏ mảng đã có thứ tự và có thể dừng sớm',
            'Để đổi chiều sắp xếp từ tăng dần sang giảm dần',
            'Để tránh lỗi tràn bộ nhớ'
          ],
          correctIndex: 1,
          explanation: 'Nếu qua 1 lượt duyệt vòng lặp trong mà không có hoán vị nào xảy ra (isSwapped == false), mảng đã hoàn toàn có thứ tự, việc dừng sớm giúp đạt độ phức tạp O(N) cho trường hợp tốt nhất.'
        },
        {
          id: 3,
          question: 'Trong hàm deleteAt xóa phần tử tại vị trí K, vòng lặp dồn dịch chạy như thế nào là chính xác?',
          options: [
            'for (int i = k; i < n; ++i) a[i] = a[i + 1];',
            'for (int i = k; i < n - 1; ++i) a[i] = a[i + 1];',
            'for (int i = n; i > k; --i) a[i] = a[i - 1];',
            'for (int i = 0; i < k; ++i) a[i] = a[i + 1];'
          ],
          correctIndex: 1,
          explanation: 'Phải chạy đến i < n - 1 (tức i lớn nhất là n - 2) để phép gán a[i] = a[i + 1] lấy phần tử cuối cùng a[n - 1] đè vào a[n - 2] mà không bị truy cập vượt biên sang a[n].'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Xóa tại K', val: 'Dồn trái: for (int i = k; i < n - 1; ++i) a[i] = a[i + 1]; n--;' },
          { key: 'Chèn tại K', val: 'Dồn phải: for (int i = n; i > k; --i) a[i] = a[i - 1]; a[k] = val; n++;' },
          { key: 'Bubble Sort', val: 'So sánh cặp kề nhau a[j] > a[j + 1], đẩy max nổi về cuối' },
          { key: 'std::swap(x, y)', val: 'Hàm chuẩn hoán vị giá trị 2 biến trong thư viện <utility>' },
          { key: 'Tối ưu cờ hiệu', val: 'Dừng sớm khi mảng đã có thứ tự (O(N) best case)' }
        ],
        coreTakeaway: 'Chèn và Xóa đòi hỏi kỹ thuật dồn dịch chính xác hướng duyệt (Chèn duyệt ngược, Xóa duyệt xuôi). Bubble Sort là nền tảng trực quan cho tư duy sắp xếp dữ liệu.'
      },
      checklist: [
        'Tôi cài đặt chuẩn xác thao tác xóa tại K và luôn nhớ giảm n--.',
        'Tôi nắm vững nguyên tắc dồn dịch ngược khi chèn tại K để không làm mất dữ liệu.',
        'Tôi giải thích được cơ chế hoạt động của thuật toán Bubble Sort.',
        'Tôi biết cách dùng cờ hiệu isSwapped để tối ưu hóa thời gian chạy của Bubble Sort.'
      ],
      extendedChallenge: {
        title: 'Thuật toán Sắp xếp chèn (Insertion Sort) và Sắp xếp chọn (Selection Sort)',
        scenario: 'Ngoài Bubble Sort, hai thuật toán sắp xếp O(N^2) kinh điển khác thường được giảng dạy trong học phần Lập trình Căn bản.',
        challengeTask: 'Cài đặt Selection Sort (mỗi lượt tìm Min trong đoạn còn lại đưa về đầu) và Insertion Sort (rút từng phần tử chèn vào vị trí thích hợp trong dãy đã có thứ tự). So sánh số phép gán và số phép so sánh giữa 3 thuật toán.',
        thoughtGuidance: 'Selection Sort tối thiểu hóa số lần swap (tối đa N lần), phù hợp khi chi phí ghi bộ nhớ đắt đỏ.'
      }
    }
  ]
};
