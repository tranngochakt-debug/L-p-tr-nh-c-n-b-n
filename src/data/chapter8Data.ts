import { LessonContent, ChapterData } from './chapter1Data.ts';

export const CHAPTER_8_DATA: ChapterData = {
  chapterId: 8,
  chapterCode: 'CH08',
  title: 'Kỹ Thuật Hàm (Functions) & Mô-đun Hóa Chương Trình',
  summary: 'Làm chủ tư duy thiết kế hàm và mô-đun hóa phần mềm trong C++: Nguyên lý DRY (Don\'t Repeat Yourself), cấu trúc chuẩn của hàm gồm kiểu trả về, tên hàm, danh sách tham số và câu lệnh return; bản chất bộ nhớ Call Stack và cơ chế truyền tham trị (Pass by Value); đột phá tư duy với cơ chế truyền tham chiếu (Pass by Reference với dấu &), bí danh ô nhớ (Alias) giải quyết bài toán hoán vị biến ngoài và kỹ thuật trả về nhiều giá trị qua tham số; quy tắc phạm vi biến (Scope) toàn cục vs cục bộ; kỹ thuật truyền mảng vào hàm kèm kích thước N; và nhập môn tư duy đệ quy (Recursion) với điều kiện dừng (Base Case).',
  totalLessons: 4,
  lessons: [
    // -------------------------------------------------------------
    // BÀI 1: TẠI SAO CẦN HÀM? CÚ PHÁP KHAI BÁO & ĐỊNH NGHĨA (L25)
    // -------------------------------------------------------------
    {
      id: 'CH08-L01',
      lessonNumber: 1,
      chapterNumber: 8,
      title: 'Tại Sao Cần Hàm? Nguyên Lý DRY, Cú Pháp Khai Báo & Định Nghĩa Hàm',
      readingTimeMinutes: 45,
      moodleType: 'Page nguyên lý DRY + Trắc nghiệm nhận diện hàm hợp lệ + VPL Viết hàm tính lũy thừa',
      objectives: [
        'Hiểu sâu sắc lý do cần phân rã chương trình thành các hàm con: Nguyên lý DRY (Don\'t Repeat Yourself) và khả năng tái sử dụng mã nguồn.',
        'Nắm vững 4 thành phần bắt buộc của một hàm: Kiểu dữ liệu trả về, Tên hàm, Danh sách tham số hình thức (Parameters) và Thân hàm.',
        'Phân biệt rõ ràng giữa Hàm có giá trị trả về (Non-void function với lệnh return) và Hàm thủ tục hành động (void function).',
        'Hiểu và áp dụng kỹ thuật Khai báo nguyên mẫu hàm (Function Prototype / Forward Declaration) đặt trước hàm main().',
        'Biết cách gọi hàm và truyền đối số thực tế (Arguments) một cách chính xác theo thứ tự và kiểu dữ liệu.'
      ],
      prerequisites: [
        'Đã học xong các cấu trúc cơ bản C++: Rẽ nhánh if/else, Vòng lặp for/while và kiểu dữ liệu cơ sở.'
      ],
      leadIn: {
        hook: 'Nếu bạn cần kiểm tra số nguyên tố cho 10 số khác nhau ở 10 vị trí khác nhau trong phần mềm, bạn sẽ copy-paste đoạn code 15 dòng đó 10 lần thành 150 dòng lộn xộn? Điều gì xảy ra khi bạn phát hiện ra một lỗi sai trong thuật toán đó?',
        question: 'Tại sao trình biên dịch C++ lại báo lỗi \"Identifier not found\" nếu bạn đặt định nghĩa hàm ở phía dưới hàm main() mà không có dòng khai báo nguyên mẫu ở trên đầu?',
        realWorldScenario: 'Động cơ ô tô được lắp ráp từ các bộ phận độc lập: bộ chế hòa khí, hệ thống phanh, hộp số. Mỗi bộ phận đảm nhiệm đúng một nhiệm vụ và có thể bảo dưỡng, thay thế độc lập mà không cần đập vỡ toàn bộ chiếc xe.'
      },
      theorySections: [
        {
          title: '1. Nguyên lý DRY và Động lực ra đời của Hàm',
          content: '**DRY (Don\'t Repeat Yourself - Đừng lặp lại chính mình)** là quy tắc vàng số 1 của kỹ nghệ phần mềm: Bất kỳ một logic nghiệp vụ hoặc thuật toán nào chỉ nên được định nghĩa duy nhất một lần trong toàn bộ mã nguồn.\n\n**Hàm (Function)** là một khối mã độc lập thực hiện một nhiệm vụ cụ thể được đặt tên. Lợi ích vượt trội:\n- **Tái sử dụng (Reusability):** Viết một lần, gọi dùng ở hàng trăm nơi.\n- **Dễ bảo trì (Maintainability):** Khi cần sửa logic, chỉ cần sửa tại 1 vị trí duy nhất trong hàm.\n- **Trừu tượng hóa (Abstraction):** Người gọi hàm chỉ cần biết hàm *làm cái gì* (Input/Output) chứ không cần bận tâm *bên trong nó làm như thế nào*.'
        },
        {
          title: '2. Cấu trúc chuẩn & Cú pháp Khai báo/Định nghĩa Hàm',
          content: 'Cú pháp định nghĩa một hàm trong C++:\n```cpp\nKiểuTrảVề TênHàm(Kiểu1 ThamSố1, Kiểu2 ThamSố2, ...) {\n    // Thân hàm: các câu lệnh thực thi\n    return GiáTrịTrảVề; // Bắt buộc nếu KiểuTrảVề khác void\n}\n```\n\n**Phân loại hàm theo kiểu trả về:**\n1. **Hàm trả về giá trị:** Có kiểu cụ thể (`int`, `double`, `bool`, `string`). Bắt buộc phải có câu lệnh `return` trả về giá trị cùng kiểu.\n2. **Hàm không trả về giá trị (`void`):** Dùng để thực hiện một chuỗi thao tác hành động (như in ấn menu, ghi file). Có thể dùng `return;` rỗng để thoát sớm khỏi hàm.'
        },
        {
          title: '3. Khai báo nguyên mẫu hàm (Function Prototype)',
          content: 'Trình biên dịch C++ đọc file mã nguồn tuần tự từ trên xuống dưới. Nếu một hàm được gọi trước khi nó được định nghĩa, compiler sẽ báo lỗi không tìm thấy.\n\n**Giải pháp chuẩn công nghiệp:** Đặt **Nguyên mẫu hàm (Function Prototype)** ở phía trên `main()`, và viết phần cài đặt chi tiết ở phía dưới `main()`:\n\n```cpp\n// 1. NGUYÊN MẪU HÀM (Chỉ có phần đầu, kết thúc bằng dấu chấm phẩy)\ndouble calculatePower(double base, int exp);\nbool isPrime(int n);\n\nint main() {\n    cout << calculatePower(2.0, 10); // Hợp lệ hoàn toàn!\n    return 0;\n}\n\n// 2. ĐỊNH NGHĨA CHI TIẾT THÂN HÀM\ndouble calculatePower(double base, int exp) {\n    double result = 1.0;\n    for (int i = 0; i < exp; ++i) result *= base;\n    return result;\n}\n```'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Xây dựng thư viện hàm số học (Lũy thừa & Số nguyên tố)',
          problem: 'Viết chương trình có cấu trúc tách hàm chuẩn mực: 1. Hàm isPrime(n) kiểm tra số nguyên tố trả về true/false; 2. Hàm calculatePower(base, exp) tính lũy thừa x^y trả về số thực; 3. Hàm printMenu() kiểu void in giao diện menu người dùng. Sử dụng Function Prototype trước hàm main().',
          analysis: {
            input: 'Lựa chọn menu và các đối số số học từ người dùng.',
            output: 'Kết quả kiểm tra nguyên tố và kết quả tính lũy thừa tương ứng.',
            idea: 'Phân tách bài toán thành các hàm con chuyên biệt, main() chỉ đóng vai trò điều phối luồng.',
            algorithm: 'Bước 1: Khai báo Prototype\nBước 2: Viết main() với cấu trúc vòng lặp điều khiển menu\nBước 3: Cài đặt thân hàm isPrime, calculatePower, printMenu'
          },
          code: `#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

// ==========================================
// 1. KHAI BÁO NGUYÊN MẪU HÀM (PROTOTYPES)
// ==========================================
void printMenu();
bool isPrime(int n);
double calculatePower(double base, int exp);

// ==========================================
// 2. HÀM ĐIỀU PHỐI CHÍNH (MAIN FUNCTION)
// ==========================================
int main() {
    int choice = 0;

    do {
        printMenu();
        cout << ">> Nhap lua chon cua ban (1-3): ";
        cin >> choice;

        switch (choice) {
            case 1: {
                int num = 0;
                cout << "Nhap so nguyen n can kiem tra: ";
                cin >> num;
                if (isPrime(num)) {
                    cout << "=> KET QUA: " << num << " LA so nguyen to!" << endl;
                } else {
                    cout << "=> KET QUA: " << num << " KHONG PHAI la so nguyen to." << endl;
                }
                break;
            }
            case 2: {
                double base = 0.0;
                int exp = 0;
                cout << "Nhap co so x: ";
                cin >> base;
                cout << "Nhap so mu y (nguyen khong am): ";
                cin >> exp;
                if (exp < 0) {
                    cout << "[Loi]: So mu phai >= 0 trong chuong trinh nay!\n";
                } else {
                    double ans = calculatePower(base, exp);
                    cout << "=> KET QUA: " << base << "^" << exp << " = " 
                         << fixed << setprecision(2) << ans << endl;
                }
                break;
            }
            case 3:
                cout << "Cam on ban da su dung chuong trinh. Tam biet!\n";
                break;
            default:
                cout << "[Loi]: Lua chon khong hop le. Vui long chon lai!\n";
        }
    } while (choice != 3);

    return 0;
}

// ==========================================
// 3. ĐỊNH NGHĨA CHI TIẾT CÁC HÀM (DEFINITIONS)
// ==========================================

// In menu giao dien nguoi dung (Kieu void)
void printMenu() {
    cout << "\n========================================" << endl;
    cout << "     CHUONG TRINH TIEN ICH TOAN HOC     " << endl;
    cout << "========================================" << endl;
    cout << "1. Kiem tra so nguyen to" << endl;
    cout << "2. Tinh luy thua x^y" << endl;
    cout << "3. Thoat chuong trinh" << endl;
    cout << "----------------------------------------" << endl;
}

// Kiem tra so nguyen to (Kieu bool)
bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i <= sqrt(n); ++i) {
        if (n % i == 0) return false; // Gap uoc so -> khong phai SNT
    }
    return true; // Khong co uoc nao ngoai 1 va n
}

// Tinh luy thua x^y (Kieu double)
double calculatePower(double base, int exp) {
    double result = 1.0;
    for (int i = 0; i < exp; ++i) {
        result *= base;
    }
    return result;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'bool isPrime(int n);',
              explanation: 'Function Prototype báo cho compiler biết hàm này tồn tại, nhận vào 1 số nguyên int và trả về bool.'
            },
            {
              lineOrBlock: 'return false; ... return true;',
              explanation: 'Câu lệnh return lập tức chấm dứt thực thi hàm và trả giá trị về cho nơi gọi hàm.'
            },
            {
              lineOrBlock: 'void printMenu()',
              explanation: 'Hàm kiểu void không trả về giá trị, chỉ thực hiện nhiệm vụ in ấn giao diện menu.'
            }
          ],
          executionResult: {
            sampleInput: `1
17
2
2.5
3
3`,
            sampleOutput: `========================================
     CHUONG TRINH TIEN ICH TOAN HOC     
========================================
1. Kiem tra so nguyen to
2. Tinh luy thua x^y
3. Thoat chuong trinh
----------------------------------------
>> Nhap lua chon cua ban (1-3): 1
Nhap so nguyen n can kiem tra: 17
=> KET QUA: 17 LA so nguyen to!

========================================
     CHUONG TRINH TIEN ICH TOAN HOC     
========================================
1. Kiem tra so nguyen to
2. Tinh luy thua x^y
3. Thoat chuong trinh
----------------------------------------
>> Nhap lua chon cua ban (1-3): 2
Nhap co so x: 2.5
Nhap so mu y (nguyen khong am): 3
=> KET QUA: 2.50^3 = 15.62

========================================
     CHUONG TRINH TIEN ICH TOAN HOC     
========================================
1. Kiem tra so nguyen to
2. Tinh luy thua x^y
3. Thoat chuong trinh
----------------------------------------
>> Nhap lua chon cua ban (1-3): 3
Cam on ban da su dung chuong trinh. Tam biet!`
          },
          analysisOfResult: 'Các hàm isPrime và calculatePower hoạt động độc lập, chính xác, giúp hàm main() cực kỳ trong sáng và dễ đọc.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Hàm tính giai thừa N!',
          task: 'Viết hàm `long long factorial(int n)` nhận vào số nguyên n (0 <= n <= 20) và trả về giá trị giai thừa n!. Kiểm tra hàm trong main().',
          hints: ['Khởi tạo ans = 1, chạy vòng lặp nhân dồn từ 1 đến n.'],
          expectedOutput: 'factorial(5) -> 120'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Hàm kiểm tra số hoàn hảo (Perfect Number)',
          task: 'Viết hàm `bool isPerfect(int n)` trả về true nếu n bằng tổng các ước số thực sự của nó (ví dụ 6 = 1 + 2 + 3). Tìm tất cả số hoàn hảo nhỏ hơn 1000.',
          hints: ['Tính tổng ước từ 1 đến n/2 rồi so sánh với n.'],
          expectedOutput: 'Các số hoàn hảo nhỏ hơn 1000: 6, 28, 496.'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Hàm tính tổ hợp chập K của N (nCr)',
          task: 'Viết hàm tính $C(n, k) = \\frac{n!}{k!(n-k)!}$ bằng cách tái sử dụng hàm `factorial()` đã viết ở cấp độ 1.',
          hints: ['Gọi factorial(n) / (factorial(k) * factorial(n - k)).'],
          expectedOutput: 'C(5, 2) = 10'
        }
      ],
      commonErrors: [
        {
          name: 'Quên câu lệnh return trong hàm có kiểu trả về',
          symptom: 'Compiler đưa ra cảnh báo \"control reaches end of non-void function\", khi chạy hàm trả về giá trị rác ngẫu nhiên.',
          rootCause: 'Hàm được khai báo trả về int/double nhưng trong thân hàm không có lệnh return giá trị, hoặc câu lệnh return chỉ nằm trong nhánh if mà nhánh else không có.',
          howToFix: 'Đảm bảo mọi nhánh rẽ thực thi của hàm đều kết thúc bằng câu lệnh return hợp lệ.',
          badCode: `int findSign(int x) {
    if (x > 0) return 1;
    if (x < 0) return -1;
    // Quên return khi x == 0! Trả về giá trị rác!
}`,
          goodCode: `int findSign(int x) {
    if (x > 0) return 1;
    if (x < 0) return -1;
    return 0; // Luôn đảm bảo có return cuối cùng
}`
        },
        {
          name: 'Đặt dấu chấm phẩy ngay sau định nghĩa tiêu đề hàm',
          symptom: 'Lỗi biên dịch \"expected unqualified-id before { token\".',
          rootCause: 'Nhầm lẫn giữa Prototype (có dấu ;) và Thân hàm (dùng ngoặc nhọn {}).',
          howToFix: 'Không bao giờ đặt dấu chấm phẩy ngay sau tên hàm khi đang viết thân hàm.',
          badCode: `int sum(int a, int b); { // LỖI DẤU CHẤM PHẨY THỪA!
    return a + b;
}`,
          goodCode: `int sum(int a, int b) { // ĐÚNG CHUẨN
    return a + b;
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Xác định thành phần của hàm',
          description: 'Cho dòng tiêu đề hàm: `double calculateInterest(double principal, float rate, int months);`. Hãy chỉ ra: Kiểu trả về, Tên hàm, số lượng tham số và kiểu dữ liệu của từng tham số.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Phân biệt Tham số và Đối số',
          description: 'Trình bày sự khác nhau giữa Tham số hình thức (Parameters) trong khai báo hàm và Đối số thực tế (Arguments) khi gọi hàm. Cho ví dụ minh họa.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Hàm tìm Ước chung lớn nhất (GCD)',
          description: 'Viết hàm `int gcd(int a, int b)` tìm ước chung lớn nhất của 2 số nguyên dương theo thuật toán Euclid (chia lấy dư). Tái sử dụng hàm gcd để viết hàm tìm Bội chung nhỏ nhất `lcm(a, b)`.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Hàm vẽ hình chữ nhật rỗng bằng ký tự',
          description: 'Viết hàm `void drawHollowBox(int width, int height, char borderChar)` để in ra màn hình một hình chữ nhật rỗng kích thước width x height với đường viền là ký tự borderChar.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Nguyên lý thiết kế phần mềm DRY là viết tắt của cụm từ nào?',
          options: [
            'Do Right Yourself',
            'Don\'t Repeat Yourself',
            'Data Representation Yearly',
            'Direct Return Yield'
          ],
          correctIndex: 1,
          explanation: 'DRY là viết tắt của Don\'t Repeat Yourself - khuyến khích lập trình viên đóng gói logic lặp lại vào hàm để dễ tái sử dụng và bảo trì.'
        },
        {
          id: 2,
          question: 'Tại sao cần phải khai báo Nguyên mẫu hàm (Function Prototype) ở đầu chương trình?',
          options: [
            'Để chương trình chiếm ít dung lượng RAM hơn',
            'Để thông báo trước cho trình biên dịch biết cấu trúc của hàm khi hàm được định nghĩa bên dưới main()',
            'Bắt buộc đối với mọi chương trình C++ nếu không sẽ không thể chạy',
            'Để tự động tạo giao diện người dùng'
          ],
          correctIndex: 1,
          explanation: 'Trình biên dịch đọc code từ trên xuống, Prototype giúp compiler xác thực cú pháp gọi hàm trong main() trước khi đọc đến phần thân hàm ở bên dưới.'
        },
        {
          id: 3,
          question: 'Một hàm có kiểu trả về là void có thể chứa câu lệnh nào sau đây?',
          options: [
            'return 0;',
            'return 100;',
            'return;',
            'return false;'
          ],
          correctIndex: 2,
          explanation: 'Hàm void không có giá trị trả về, nhưng câu lệnh return; (không kèm giá trị) hoàn toàn hợp lệ để dừng và thoát sớm khỏi hàm.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Cú pháp hàm', val: 'ReturnType functionName(type1 param1, ...) { ... return val; }' },
          { key: 'Hàm void', val: 'Không trả về giá trị, chỉ thực thi chuỗi hành động' },
          { key: 'Prototype', val: 'Khai báo trước main() kết thúc bằng dấu chấm phẩy ;' },
          { key: 'Nguyên lý DRY', val: 'Don\'t Repeat Yourself - Triệt tiêu mã nguồn trùng lặp' },
          { key: 'Lệnh return', val: 'Trả về giá trị và lập tức thoát khỏi hàm' }
        ],
        coreTakeaway: 'Hàm là viên gạch nền tảng của kỹ nghệ phần mềm. Luôn khai báo Function Prototype và phân tách chương trình thành các hàm nhỏ làm một nhiệm vụ duy nhất (Single Responsibility).'
      },
      checklist: [
        'Tôi hiểu rõ nguyên lý DRY và lợi ích của hàm.',
        'Tôi nắm vững cú pháp định nghĩa hàm và cách dùng lệnh return.',
        'Tôi biết cách viết Function Prototype trước hàm main().',
        'Tôi phân biệt được hàm trả về giá trị và hàm void.'
      ],
      extendedChallenge: {
        title: 'Xây dựng thư viện chuyển đổi hệ cơ số',
        scenario: 'Trong hệ thống vi xử lý, việc chuyển đổi giữa nhị phân, bát phân và thập lục phân diễn ra liên tục.',
        challengeTask: 'Viết một bộ hàm gồm: decToBin(int n) trả về chuỗi nhị phân, binToDec(string bin) trả về số thập phân, và decToHex(int n) trả về chuỗi Hex. Kết nối các hàm này trong menu tương tác.',
        thoughtGuidance: 'Sử dụng toán tử chia lấy dư và ghép chuỗi.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 2: TRUYỀN THAM TRỊ & NGĂN XẾP CALL STACK (L26)
    // -------------------------------------------------------------
    {
      id: 'CH08-L02',
      lessonNumber: 2,
      chapterNumber: 8,
      title: 'Cơ Chế Truyền Tham Trị (Pass by Value) & Ngăn Xếp Call Stack',
      readingTimeMinutes: 50,
      moodleType: 'Mô phỏng bộ nhớ Stack trực quan + Quiz giải thích kết quả in ra',
      objectives: [
        'Hiểu bản chất cơ chế truyền tham trị mặc định (Pass by Value) trong C++: Tạo một bản sao độc lập (Clone/Copy) trong ô nhớ mới.',
        'Nắm vững nguyên lý hoạt động của ngăn xếp cuộc gọi (Call Stack): Khung ngăn xếp (Stack Frame), cấp phát khi gọi hàm và giải phóng khi thoát hàm.',
        'Giải thích cặn kẽ tại sao hàm swap truyền tham trị lại THẤT BẠI hoàn toàn trong việc hoán vị hai biến bên ngoài.',
        'Hiểu vòng đời (Lifetime) và phạm vi hiệu lực của các biến cục bộ trong thân hàm.',
        'Tránh lỗi ngộ nhận biến ngoài hàm tự động thay đổi sau khi gọi hàm.'
      ],
      prerequisites: [
        'Đã học xong Bài 1 Chương 8 (Khai báo và gọi hàm cơ bản).'
      ],
      leadIn: {
        hook: 'Nếu bạn photo một bản sao bài làm của mình cho bạn cùng bàn mượn, bạn đó vẽ bậy hoặc sửa chữa nội dung trên tờ giấy photo đó, thì tờ giấy gốc của bạn ở trong cặp có bị biến dạng theo không? Chắc chắn là không! Đó chính xác là cơ chế Truyền tham trị (Pass by Value).',
        question: 'Tại sao bạn đã viết hàm swap(a, b) rất cẩn thận với biến tạm temp, nhưng sau khi gọi hàm xong trong main(), in ra thì hai số a và b vẫn y nguyên giá trị ban đầu?',
        realWorldScenario: 'Gửi bản copy tài liệu PDF cho đồng nghiệp qua email: đồng nghiệp có thể chỉnh sửa, ghi chú tùy thích trên file tải về của họ mà không làm thay đổi file tài liệu gốc nằm trên máy tính của bạn.'
      },
      theorySections: [
        {
          title: '1. Bản chất của Cơ chế Truyền tham trị (Pass by Value)',
          content: 'Trong C++, khi một tham số được truyền vào hàm mà không có ký tự `&`, cơ chế mặc định là **Truyền tham trị (Pass by Value)**:\n- Trình biên dịch sẽ **sao chép (copy)** giá trị của đối số thực tế sang một ô nhớ hoàn toàn mới dành cho tham số hình thức.\n- Tham số trong hàm và biến gốc bên ngoài là **hai thực thể độc lập ở hai địa chỉ RAM khác nhau**.\n- Mọi thay đổi giá trị thực hiện trên tham số bên trong hàm chỉ tác động lên bản sao, **hoàn toàn không ảnh hưởng đến biến gốc**.'
        },
        {
          title: '2. Ngăn xếp cuộc gọi (Call Stack) và Khung ngăn xếp (Stack Frame)',
          content: 'Bộ nhớ RAM dành cho chương trình có một phân vùng gọi là **Stack** hoạt động theo cơ chế LIFO (Vào sau ra trước):\n1. Khi `main()` chạy, một khung nhớ (**Stack Frame**) được tạo ra chứa các biến cục bộ của `main()`.\n2. Khi gọi một hàm `foo()`, một Stack Frame mới của `foo()` được đẩy (push) chồng lên trên đỉnh Stack, chứa các tham số sao chép và biến cục bộ của `foo()`.\n3. Khi `foo()` thực hiện xong và gặp lệnh `return`, toàn bộ Stack Frame của `foo()` bị **thu hồi (pop/hủy bỏ)** lập tức khỏi RAM. Quyền điều khiển quay về `main()`.\n\n*Minh chứng:* Các biến tạo trong hàm chỉ tồn tại trong thời gian hàm chạy (Local Lifetime).'
        },
        {
          title: '3. Phân tích nguyên nhân thất bại của Hàm Swap kinh điển',
          content: 'Xem xét đoạn code hàm swap truyền tham trị:\n```cpp\nvoid wrongSwap(int x, int y) {\n    int temp = x;\n    x = y;\n    y = temp;\n    // x và y đã hoán vị trong Stack Frame của wrongSwap\n}\n\nint main() {\n    int a = 5, b = 10;\n    wrongSwap(a, b); // Truyền giá trị 5 và 10\n    cout << a << \" \" << b; // VẪN IN RA: 5 10!\n}\n```\n*Giải thích:* Biến `x` và `y` nhận bản sao của `a` và `b`. Bên trong `wrongSwap`, `x` và `y` quả thật đã tráo đổi giá trị cho nhau, nhưng khi hàm kết thúc, `x` và `y` bị giải phóng khỏi Stack. Biến `a` và `b` trong `main()` vẫn nằm nguyên vẹn ở ô nhớ cũ!'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Minh chứng trực quan địa chỉ RAM của Truyền tham trị',
          problem: 'Viết chương trình gồm hàm doubleValue(int x) nhân đôi giá trị của x. Trong cả main() và doubleValue(), in ra giá trị của biến và ĐỊA CHỈ Ô NHỚ (& biến) để chứng minh rằng tham số hình thức và biến gốc nằm ở hai vùng nhớ hoàn toàn khác nhau.',
          analysis: {
            input: 'Biến n khởi tạo bằng 50 trong hàm main().',
            output: 'Giá trị và địa chỉ của biến trong main() trước, trong khi chạy hàm và sau khi gọi hàm.',
            idea: 'Sử dụng toán tử & để in địa chỉ hex. So sánh địa chỉ &n trong main và &x trong doubleValue.',
            algorithm: 'Bước 1: main khởi tạo n = 50, in giá trị và &n\nBước 2: Gọi doubleValue(n)\nBước 3: Bên trong doubleValue: in giá trị x, in &x, nhân đôi x = x * 2, in lại x\nBước 4: Trở về main: in lại giá trị n và &n'
          },
          code: `#include <iostream>
using namespace std;

// Ham truyen tham tri (Pass by Value)
void doubleValue(int x) {
    cout << "\n   [Trong ham doubleValue]:" << endl;
    cout << "   - Gia tri x ban dau  : " << x << endl;
    cout << "   - Dia chi o nho cua x: " << &x << " (Vung nho Stack moi)" << endl;

    x = x * 2; // Nhan doi ban sao

    cout << "   - Gia tri x sau nhan : " << x << endl;
    cout << "   [Thoat khoi ham doubleValue, x bi huy!]" << endl;
}

int main() {
    int n = 50;

    cout << "=== THI NGHIEM CO CHE TRUYEN THAM TRI (PASS BY VALUE) ===" << endl;
    cout << "[1. Truoc khi goi ham trong main]:" << endl;
    cout << "- Gia tri cua n      : " << n << endl;
    cout << "- Dia chi o nho cua n: " << &n << endl;

    // Goi ham truyen bien n vao
    doubleValue(n);

    cout << "\n[2. Sau khi goi ham xong tro ve main]:" << endl;
    cout << "- Gia tri cua n      : " << n << " (VAN NGUYEN VEN 50!)" << endl;
    cout << "- Dia chi o nho cua n: " << &n << endl;
    cout << "==========================================================" << endl;
    cout << "* KET LUAN: n va x co 2 dia chi hoan toan khac nhau!" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'void doubleValue(int x)',
              explanation: 'Tham số x không có dấu &, đây là truyền tham trị. Compiler cấp phát một ô nhớ mới trên Stack Frame của hàm để chứa bản sao.'
            },
            {
              lineOrBlock: '&n và &x',
              explanation: 'Kết quả in ra cho thấy địa chỉ của &n trong main và &x trong hàm khác biệt nhau, chứng minh chúng là 2 biến độc lập.'
            },
            {
              lineOrBlock: 'x = x * 2;',
              explanation: 'Chỉ làm thay đổi giá trị trong ô nhớ của x, ô nhớ của n hoàn toàn không bị chạm tới.'
            }
          ],
          executionResult: {
            sampleInput: '(Không có input bàn phím, khởi tạo n = 50)',
            sampleOutput: `=== THI NGHIEM CO CHE TRUYEN THAM TRI (PASS BY VALUE) ===
[1. Truoc khi goi ham trong main]:
- Gia tri cua n      : 50
- Dia chi o nho cua n: 0x7ffee4b20a3c

   [Trong ham doubleValue]:
   - Gia tri x ban dau  : 50
   - Dia chi o nho cua x: 0x7ffee4b20a1c (Vung nho Stack moi)
   - Gia tri x sau nhan : 100
   [Thoat khoi ham doubleValue, x bi huy!]

[2. Sau khi goi ham xong tro ve main]:
- Gia tri cua n      : 50 (VAN NGUYEN VEN 50!)
- Dia chi o nho cua n: 0x7ffee4b20a3c
==========================================================
* KET LUAN: n va x co 2 dia chi hoan toan khac nhau!`
          },
          analysisOfResult: 'Địa chỉ ô nhớ &n là ...a3c, còn &x là ...a1c (khác nhau 32 byte trên Stack). Sau khi hàm chạy xong, n trong main vẫn giữ nguyên giá trị 50.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Dự đoán kết quả thực thi của biến tích lũy',
          task: 'Cho đoạn mã sau, không chạy máy tính, hãy phân tích bằng tay và dự đoán màn hình sẽ in ra những số nào:\n`void addTen(int a) { a += 10; cout << a << " "; }`\n`int main() { int x = 5; addTen(x); cout << x; }`',
          hints: ['addTen in ra giá trị của bản sao, main in ra giá trị của biến gốc.'],
          expectedOutput: 'Màn hình in ra: 15 5'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Viết hàm tăng lương truyền tham trị',
          task: 'Viết hàm `void applyBonus(double salary, double bonus)` cộng thêm tiền thưởng vào salary. Chứng minh trong main() rằng sau khi gọi hàm này, mức lương gốc của nhân viên không hề tăng nếu dùng truyền tham trị.',
          hints: ['In lương trước và sau khi gọi hàm trong main.'],
          expectedOutput: 'Lương gốc trong main không thay đổi.'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Sửa đổi hàm để trả về giá trị mới qua return',
          task: 'Vì truyền tham trị không thể thay đổi trực tiếp biến gốc, hãy sửa đổi hàm `applyBonus` thành hàm có kiểu trả về `double` để cập nhật lại biến lương trong main theo cú pháp: `salary = applyBonus(salary, bonus);`.',
          hints: ['Hàm trả về salary + bonus và gán lại ở main.'],
          expectedOutput: 'Lương gốc được cập nhật thành công qua phép gán return.'
        }
      ],
      commonErrors: [
        {
          name: 'Tin rằng truyền tham trị có thể sửa đổi biến gốc bên ngoài',
          symptom: 'Viết hàm chuẩn hóa chuỗi, hàm cộng tiền, hàm đổi dấu... nhưng biến bên ngoài hàm sau khi gọi xong vẫn giữ nguyên giá trị cũ.',
          rootCause: 'Không hiểu rằng truyền tham trị chỉ thao tác trên bản sao tạm thời trong Stack Frame.',
          howToFix: 'Nếu muốn thay đổi biến gốc, bắt buộc phải dùng Truyền tham chiếu (Pass by Reference với dấu &) hoặc trả về giá trị qua lệnh return.',
          badCode: `void reset(int x) {
    x = 0; // Vô ích! Chỉ gán 0 cho bản sao!
}
int main() {
    int score = 100;
    reset(score);
    // score vẫn bằng 100!
}`,
          goodCode: `// Cách 1: Dùng return
int reset() { return 0; }
// Trong main: score = reset();

// Cách 2: Dùng tham chiếu & (học ở bài tiếp theo)
void reset(int &x) { x = 0; }`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Khái niệm Stack Frame',
          description: 'Stack Frame là gì? Nó được tạo ra khi nào và bị hủy khi nào trong vòng đời của một hàm?'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Giải thích nguyên lý Swap thất bại',
          description: 'Vẽ sơ đồ ô nhớ minh họa từng bước các câu lệnh trong hàm `wrongSwap(int a, int b)` để giải thích cho một học sinh mới học hiểu vì sao hai số không đổi chỗ cho nhau được.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Theo dõi giá trị biến (Variable Tracing)',
          description: 'Lần vết bằng tay giá trị của các biến trong ngăn xếp khi thực hiện lời gọi hàm lồng nhau: `int f(int x) { return x * 2; }` và `int g(int x) { return f(x) + 3; }` với `g(5)`.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Tràn bộ nhớ ngăn xếp (Stack Overflow)',
          description: 'Viết một chương trình gọi hàm vô hạn (đệ quy không có điểm dừng) để cố tình tạo ra lỗi Stack Overflow. Giải thích cơ chế vì sao máy tính bị cạn kiệt bộ nhớ Stack.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Trong cơ chế Truyền tham trị (Pass by Value), mối quan hệ giữa tham số hình thức và đối số thực tế là gì?',
          options: [
            'Chúng chia sẻ chung cùng một ô nhớ trong RAM',
            'Tham số hình thức là một bản sao độc lập, nằm tại ô nhớ khác hoàn toàn với đối số thực tế',
            'Tham số hình thức là con trỏ trỏ tới đối số thực tế',
            'Chúng tự động đồng bộ hóa giá trị với nhau khi một trong hai thay đổi'
          ],
          correctIndex: 1,
          explanation: 'Pass by value tạo một ô nhớ mới trên Stack và sao chép giá trị sang. Mọi biến đổi trong hàm chỉ ảnh hưởng bản sao đó.'
        },
        {
          id: 2,
          question: 'Điều gì xảy ra với các biến cục bộ được khai báo bên trong một hàm khi hàm đó thực thi xong câu lệnh return?',
          options: [
            'Chúng tiếp tục tồn tại mãi mãi trong RAM cho đến khi tắt máy tính',
            'Chúng được chuyển vào ổ cứng HDD/SSD',
            'Stack Frame của hàm bị hủy, các ô nhớ của biến cục bộ bị giải phóng ngay lập tức',
            'Chúng tự động trở thành biến toàn cục'
          ],
          correctIndex: 2,
          explanation: 'Bộ nhớ Stack hoạt động theo cơ chế giải phóng tức thì khi thoát hàm: Stack Frame bị pop và toàn bộ biến cục bộ bị hủy.'
        },
        {
          id: 3,
          question: 'Để cập nhật giá trị mới cho một biến trong main() khi sử dụng hàm truyền tham trị, ta phải làm như thế nào?',
          options: [
            'Không có cách nào làm được',
            'Hàm phải trả về giá trị mới qua lệnh return và trong main() dùng phép gán: x = func(x);',
            'Chỉ cần khai báo biến trong main() là static',
            'Đổi tên tham số trùng với tên biến trong main()'
          ],
          correctIndex: 1,
          explanation: 'Khi truyền tham trị, cách duy nhất để cập nhật biến ngoài là nhận giá trị trả về từ lệnh return và gán đè lại vào biến đó.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Bản chất tham trị', val: 'Sao chép giá trị sang ô nhớ mới độc lập' },
          { key: 'Biến gốc bên ngoài', val: 'Không bao giờ bị thay đổi bởi hàm' },
          { key: 'Call Stack', val: 'Ngăn xếp LIFO lưu trữ các Stack Frame của hàm' },
          { key: 'Hủy biến cục bộ', val: 'Giải phóng bộ nhớ lập tức khi return khỏi hàm' },
          { key: 'Cập nhật giá trị', val: 'Dùng lệnh return: val = func(val);' }
        ],
        coreTakeaway: 'Truyền tham trị bảo vệ an toàn cho biến gốc không bị hàm sửa đổi ngoài ý muốn, nhưng không thể dùng trực tiếp để thay đổi biến ngoài.'
      },
      checklist: [
        'Tôi hiểu rõ nguyên lý tạo bản sao độc lập của Truyền tham trị.',
        'Tôi giải thích được vì sao hàm swap tham trị không thể hoán vị 2 biến.',
        'Tôi hiểu vòng đời của biến cục bộ trên Call Stack.',
        'Tôi biết cách dùng lệnh return để cập nhật lại biến ngoài hàm.'
      ],
      extendedChallenge: {
        title: 'Mô phỏng cơ chế cấp phát Stack Frame bằng cấu trúc dữ liệu',
        scenario: 'Trình thông dịch (Interpreter) của các ngôn ngữ như Python hoặc Java cần quản lý Call Stack thủ công.',
        challengeTask: 'Viết chương trình mô phỏng một Call Stack đơn giản sử dụng mảng struct StackFrame: mỗi khi gọi hàm thì push frame mới (lưu tên hàm và danh sách biến), khi return thì pop frame và in nhật ký hoạt động của RAM.',
        thoughtGuidance: 'Lưu trữ top pointer để quản lý đỉnh ngăn xếp.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 3: TRUYỀN THAM CHIẾU (PASS BY REFERENCE) (L27)
    // -------------------------------------------------------------
    {
      id: 'CH08-L03',
      lessonNumber: 3,
      chapterNumber: 8,
      title: 'Cơ Chế Truyền Tham Chiếu (Pass by Reference Với Dấu &) & Giải Quyết Bài Toán Hoán Vị',
      readingTimeMinutes: 55,
      moodleType: 'VPL Hoán vị 2 số thực và giải phương trình bậc hai bằng hàm nhận nghiệm tham chiếu',
      objectives: [
        'Hiểu bản chất đột phá của Truyền tham chiếu (Pass by Reference): Tham số trở thành Bí danh (Alias) dùng chung chính xác cùng một ô nhớ RAM với biến gốc.',
        'Cài đặt thành công hàm hoán vị chuẩn xác swap(int &a, int &b) làm thay đổi trực tiếp giá trị 2 biến bên ngoài hàm.',
        'Vận dụng tham chiếu để giải quyết bài toán: Hàm trả về nhiều hơn một giá trị (Multiple Return Values) cùng lúc.',
        'Hiểu và phân biệt kỹ thuật Truyền tham chiếu hằng (const Reference: const Type &x) để tối ưu hóa hiệu năng khi truyền dữ liệu lớn.',
        'Phân biệt rõ ràng sự khác biệt giữa toán tử lấy địa chỉ &x và cú pháp tham chiếu Type &x.'
      ],
      prerequisites: [
        'Đã học xong Bài 2 Chương 8 (Truyền tham trị và Call Stack).'
      ],
      leadIn: {
        hook: 'Ở nhà bố mẹ gọi bạn là \"Tí\", ở trường thầy cô gọi bạn là \"Nguyễn Văn A\". Dù gọi bằng tên nào thì cũng chỉ có DUY NHẤT MỘT con người bạn! Đó chính là khái niệm Tham chiếu (Reference - Bí danh) trong C++.',
        question: 'Một hàm trong C++ chỉ có thể trả về duy nhất MỘT giá trị qua câu lệnh return. Vậy nếu bạn cần viết một hàm giải phương trình bậc hai ax^2 + bx + c = 0 cần trả về cả hai nghiệm x1 và x2, bạn sẽ làm thế nào?',
        realWorldScenario: 'Chia sẻ liên kết Google Docs (chế độ chỉnh sửa): Bất kỳ người nào được cấp quyền chỉnh sửa trực tiếp trên tài liệu thì mọi thay đổi sẽ xuất hiện ngay lập tức trên file gốc duy nhất đó.'
      },
      theorySections: [
        {
          title: '1. Khái niệm Tham chiếu & Cú pháp Pass by Reference',
          content: '**Tham chiếu (Reference)** trong C++ là một **tên gọi khác (Bí danh - Alias)** của một biến đã tồn tại. Nó KHÔNG tạo ra ô nhớ mới mà dùng chung chính xác ô nhớ của biến ban đầu.\n\n**Cú pháp khai báo tham chiếu trong hàm:**\nThêm ký tự `&` vào sau kiểu dữ liệu của tham số:\n```cpp\nvoid modifyValue(int &x) { // x là tham chiếu tới biến truyền vào\n    x = 100; // Thay đổi trực tiếp biến gốc bên ngoài!\n}\n```\n*Khi gọi hàm:* Ta truyền biến bình thường mà không cần thêm ký tự gì: `modifyValue(a);`.'
        },
        {
          title: '2. Giải quyết dứt điểm Bài toán Hoán vị (Swap)',
          content: 'Nhờ có tham chiếu `&`, hàm `swap` có thể chạm trực tiếp vào ô nhớ của 2 biến bên ngoài để hoán vị giá trị của chúng:\n\n```cpp\nvoid realSwap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 10, y = 99;\n    realSwap(x, y); // x và y được truyền tham chiếu\n    cout << x << \" \" << y; // IN RA CHÍNH XÁC: 99 10!\n}\n```\n*Cơ chế:* `a` là bí danh của `x`, `b` là bí danh của `y`. Mọi phép gán trên `a, b` đều là phép gán trực tiếp lên `x, y`!'
        },
        {
          title: '3. Kỹ thuật trả về nhiều giá trị & Tham chiếu hằng (const &)',
          content: '- **Kỹ thuật trả về nhiều giá trị:** Lệnh `return` chỉ trả về được 1 giá trị. Nếu muốn hàm trả về 2, 3 kết quả (ví dụ: vừa tìm Min vừa tìm Max), ta truyền các biến kết quả dưới dạng tham chiếu `&`:\n```cpp\nvoid findMinMax(int a, int b, int &minOut, int &maxOut) {\n    minOut = (a < b) ? a : b;\n    maxOut = (a > b) ? a : b;\n}\n```\n\n- **Tham chiếu hằng (`const Type &`):** Khi truyền các đối tượng dữ liệu kích thước lớn (như `string` dài hoặc mảng đối tượng), việc sao chép (tham trị) làm tốn nhiều RAM và CPU. Dùng `const string &s` giúp:\n  1. Truyền cực nhanh vì không tốn bộ nhớ sao chép.\n  2. Bảo vệ dữ liệu: từ khóa `const` ngăn cản hàm vô tình sửa đổi dữ liệu gốc.'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Hàm giải phương trình bậc hai trả về 2 nghiệm qua tham chiếu',
          problem: 'Viết hàm solveQuadratic(double a, double b, double c, double &x1, double &x2) giải phương trình ax^2 + bx + c = 0. Hàm trả về số lượng nghiệm (0, 1, 2 hoặc -1 nếu vô số nghiệm) qua lệnh return, đồng thời truyền giá trị các nghiệm x1, x2 ra ngoài cho hàm main() thông qua tham số tham chiếu.',
          analysis: {
            input: 'Các hệ số a, b, c nhập từ bàn phím.',
            output: 'Số lượng nghiệm và giá trị x1, x2 tương ứng.',
            idea: 'Sử dụng return để báo trạng thái số nghiệm. Dùng tham chiếu &x1, &x2 để mang giá trị nghiệm thực tế về cho main.',
            algorithm: 'Bước 1: Tính delta = b*b - 4*a*c\nBước 2: Nếu delta < 0 return 0\nBước 3: Nếu delta == 0: x1 = x2 = -b / (2*a); return 1\nBước 4: Nếu delta > 0: x1 = (-b + sqrt(delta)) / (2*a); x2 = (-b - sqrt(delta)) / (2*a); return 2'
          },
          code: `#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

// Ham giai phuong trinh bac hai su dung tham chieu de tra ve 2 nghiem
// Gia tri tra ve (return): So luong nghiem (0: vo nghiem, 1: nghiem kep, 2: 2 nghiem phan biet, -1: vo so nghiem)
int solveQuadratic(double a, double b, double c, double &x1, double &x2) {
    if (a == 0) {
        if (b == 0) {
            return (c == 0) ? -1 : 0; // -1: vo so nghiem, 0: vo nghiem
        } else {
            x1 = x2 = -c / b;
            return 1; // 1 nghiem duy nhat
        }
    }

    double delta = b * b - 4 * a * c;

    if (delta < 0) {
        return 0; // Phuong trinh vo nghiem thuc
    } else if (delta == 0) {
        x1 = x2 = -b / (2 * a);
        return 1; // Nghiem kep
    } else {
        x1 = (-b + sqrt(delta)) / (2 * a);
        x2 = (-b - sqrt(delta)) / (2 * a);
        return 2; // 2 nghiem phan biet
    }
}

int main() {
    double a, b, c;
    double root1 = 0.0, root2 = 0.0; // Cac bien se nhan gia tri nghiem

    cout << "=== GIAI PHUONG TRINH BAC HAI BANG HAM THAM CHIEU C++ ===" << endl;
    cout << "Nhap cac he so a, b, c (ax^2 + bx + c = 0): ";
    cin >> a >> b >> c;

    // Goi ham: root1 va root2 duoc truyen bang tham chieu (&)
    int numRoots = solveQuadratic(a, b, c, root1, root2);

    cout << fixed << setprecision(2);
    cout << "\n--- KET QUA GIAI PHUONG TRINH ---" << endl;
    switch (numRoots) {
        case -1:
            cout << "=> Phuong trinh co VO SO NGHIEM." << endl;
            break;
        case 0:
            cout << "=> Phuong trinh VO NGHIEM (Delta < 0)." << endl;
            break;
        case 1:
            cout << "=> Phuong trinh co NGHIEM KEP:" << endl;
            cout << "   x1 = x2 = " << root1 << endl;
            break;
        case 2:
            cout << "=> Phuong trinh co 2 NGHIEM PHAN BIET:" << endl;
            cout << "   x1 = " << root1 << endl;
            cout << "   x2 = " << root2 << endl;
            break;
    }
    cout << "=================================" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'double &x1, double &x2',
              explanation: 'Khai báo tham chiếu với dấu &: x1 và x2 không chiếm ô nhớ mới mà đóng vai trò là bí danh trực tiếp của root1 và root2 trong main().'
            },
            {
              lineOrBlock: 'solveQuadratic(a, b, c, root1, root2);',
              explanation: 'Khi gọi hàm, chỉ cần truyền tên biến root1, root2 bình thường. Bên trong hàm, việc gán x1 = ... sẽ tự động cập nhật root1.'
            },
            {
              lineOrBlock: 'int solveQuadratic(...) { return ...; }',
              explanation: 'Kết hợp hài hòa giữa return (trả về trạng thái số nghiệm) và tham chiếu (trả về nhiều dữ liệu chi tiết).'
            }
          ],
          executionResult: {
            sampleInput: `1 -5 6`,
            sampleOutput: `=== GIAI PHUONG TRINH BAC HAI BANG HAM THAM CHIEU C++ ===
Nhap cac he so a, b, c (ax^2 + bx + c = 0): 1 -5 6

--- KET QUA GIAI PHUONG TRINH ---
=> Phuong trinh co 2 NGHIEM PHAN BIET:
   x1 = 3.00
   x2 = 2.00
=================================`
          },
          analysisOfResult: 'Phương trình x^2 - 5x + 6 = 0 có delta = 1 > 0. Hàm trả về 2 qua return và truyền thành công 2 nghiệm x1 = 3.00, x2 = 2.00 về biến root1, root2 trong main.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Hàm hoán vị hai số thực',
          task: 'Viết hàm `void swapReal(double &a, double &b)` để hoán vị 2 số thực. Nhập a = 3.14, b = 9.81 và chứng minh kết quả hoán vị thành công trong main().',
          hints: ['Dùng biến tạm double temp = a; a = b; b = temp;'],
          expectedOutput: 'Sau hoán vị: a = 9.81, b = 3.14'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Hàm quy đổi giây ra Giờ : Phút : Giây',
          task: 'Viết hàm `void convertTime(int totalSeconds, int &hours, int &minutes, int &seconds)` để phân rã tổng số giây thành 3 biến giờ, phút, giây qua tham chiếu.',
          hints: ['hours = totalSeconds / 3600; minutes = (totalSeconds % 3600) / 60; seconds = totalSeconds % 60;'],
          expectedOutput: '3665 giây -> 1 giờ, 1 phút, 5 giây.'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Hàm tìm phần tử lớn nhất và nhỏ nhất của 3 số',
          task: 'Viết hàm `void minMaxOfThree(int a, int b, int c, int &minVal, int &maxVal)` tìm cả Min và Max của 3 số nguyên và lưu vào 2 tham số tham chiếu.',
          hints: ['minVal = min({a, b, c}); maxVal = max({a, b, c});'],
          expectedOutput: 'Trả về đồng thời Min và Max chính xác.'
        }
      ],
      commonErrors: [
        {
          name: 'Truyền hằng số hoặc biểu thức vào tham số tham chiếu không hằng',
          symptom: 'Lỗi biên dịch \"cannot bind non-const lvalue reference to an rvalue\".',
          rootCause: 'Tham chiếu không hằng (non-const reference) bắt buộc phải gắn với một biến có địa chỉ bộ nhớ cụ thể (lvalue). Bạn không thể truyền số cố định như swap(5, 10) hay swap(a + 1, b).',
          howToFix: 'Chỉ truyền biến vào tham chiếu không hằng; hoặc nếu hàm chỉ đọc dữ liệu thì khai báo tham số là const Type &.',
          badCode: `void increment(int &x) { x++; }
int main() {
    increment(10); // LỖI BIÊN DỊCH! 10 là hằng số rvalue!
}`,
          goodCode: `void increment(int &x) { x++; }
int main() {
    int val = 10;
    increment(val); // HỢP LỆ HOÀN TOÀN
}`
        },
        {
          name: 'Nhầm lẫn giữa toán tử lấy địa chỉ và cú pháp tham chiếu',
          symptom: 'Cố tình gõ dấu & khi gọi hàm: `swap(&a, &b);` (Đây là cú pháp của con trỏ trong C chứ không phải tham chiếu C++).',
          rootCause: 'Dấu & trong khai báo hàm `void swap(int &a, int &b)` là ký hiệu kiểu tham chiếu. Khi gọi hàm trong C++, bạn chỉ cần truyền biến bình thường.',
          howToFix: 'Khi gọi hàm tham chiếu, chỉ truyền `swap(a, b);`.',
          badCode: `swap(&a, &b); // SAI trong ngữ cảnh hàm tham chiếu C++!`,
          goodCode: `swap(a, b);   // ĐÚNG CÚ PHÁP C++!`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Khái niệm Bí danh (Alias)',
          description: 'Giải thích bằng lời và sơ đồ ô nhớ: Tại sao nói biến tham chiếu không được cấp phát ô nhớ mới mà chỉ là một cái tên khác của biến ban đầu?'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'So sánh Truyền tham trị và Truyền tham chiếu',
          description: 'Lập bảng so sánh chi tiết giữa Pass by Value và Pass by Reference theo các tiêu chí: Cú pháp, Cấp phát bộ nhớ RAM, Khả năng sửa đổi biến gốc, Hiệu năng khi truyền dữ liệu lớn.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Hàm rút gọn phân số',
          description: 'Viết hàm `void simplifyFraction(int &num, int &den)` nhận vào tử số và mẫu số bằng tham chiếu, tìm ước chung lớn nhất và rút gọn trực tiếp tử số, mẫu số đó.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Tại sao cần const Reference?',
          description: 'Giải thích tại sao trong C++ hiện đại, khi truyền một chuỗi `string` hoặc đối tượng lớn vào hàm mà hàm chỉ đọc dữ liệu (không sửa đổi), người ta luôn dùng `const string &s` thay vì `string s`.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Ký tự nào được đặt sau tên kiểu dữ liệu trong danh sách tham số để khai báo cơ chế Truyền tham chiếu trong C++?',
          options: [
            '*',
            '&',
            '%',
            '#'
          ],
          correctIndex: 1,
          explanation: 'Ký tự & (ví dụ: int &x) biến tham số trở thành tham chiếu, đại diện cho cùng một ô nhớ với biến đối số truyền vào.'
        },
        {
          id: 2,
          question: 'Khi gọi hàm void update(int &n), câu lệnh gọi nào dưới đây là HỢP LỆ?',
          options: [
            'update(100);',
            'update(x + 5);',
            'int x = 10; update(x);',
            'update(&x);'
          ],
          correctIndex: 2,
          explanation: 'Tham chiếu không hằng chỉ có thể liên kết với một biến thực tế (lvalue). Không thể truyền hằng số (100) hay biểu thức (x + 5).'
        },
        {
          id: 3,
          question: 'Lợi ích chính của việc sử dụng tham chiếu hằng (const Type &x) là gì?',
          options: [
            'Để hàm có thể tự do thay đổi giá trị biến gốc',
            'Tránh tốn bộ nhớ và thời gian sao chép dữ liệu lớn mà vẫn đảm bảo dữ liệu gốc không bị chỉnh sửa',
            'Làm cho chương trình tự động chạy đa luồng',
            'Tự động giải phóng biến toàn cục'
          ],
          correctIndex: 1,
          explanation: 'const & truyền trực tiếp địa chỉ mà không tạo bản sao (rất nhanh với dữ liệu lớn) kết hợp từ khóa const ngăn chặn hoàn toàn việc sửa đổi dữ liệu gốc.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Cú pháp tham chiếu', val: 'void func(Type &param);' },
          { key: 'Bản chất', val: 'Bí danh (Alias) - Dùng chung 100% ô nhớ với biến gốc' },
          { key: 'Thay đổi biến ngoài', val: 'Sửa param là biến ngoài tự động đổi theo' },
          { key: 'Trả về nhiều giá trị', val: 'Dùng nhiều tham chiếu để lấy kết quả ra main' },
          { key: 'const &', val: 'Truyền cực nhanh cho dữ liệu lớn, chống chỉnh sửa' }
        ],
        coreTakeaway: 'Truyền tham chiếu (&) là chìa khóa để hàm tương tác và thay đổi dữ liệu bên ngoài, đồng thời là phương pháp kinh điển để trả về nhiều kết quả cùng lúc.'
      },
      checklist: [
        'Tôi hiểu rõ cơ chế bí danh ô nhớ của Truyền tham chiếu.',
        'Tôi cài đặt thành công hàm swap hoán vị 2 biến.',
        'Tôi biết cách dùng tham chiếu để trả về nhiều giá trị.',
        'Tôi phân biệt được khi nào dùng tham chiếu thường và khi nào dùng const Reference.'
      ],
      extendedChallenge: {
        title: 'Xây dựng cấu trúc ngăn xếp hoàn chỉnh bằng tham chiếu mảng',
        scenario: 'Trong hệ thống nhúng, tài nguyên hạn chế đòi hỏi các thao tác cấu trúc dữ liệu phải tác động trực tiếp lên mảng gốc.',
        challengeTask: 'Viết các hàm push(int a[], int &n, int val) và pop(int a[], int &n, int &poppedVal) để quản lý ngăn xếp với n được cập nhật liên tục qua tham chiếu.',
        thoughtGuidance: 'Truyền tham chiếu &n để cập nhật số lượng phần tử thực tế.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 4: PHẠM VI BIẾN, TRUYỀN MẢNG & ĐỆ QUY SƠ CẤP (L28)
    // -------------------------------------------------------------
    {
      id: 'CH08-L04',
      lessonNumber: 4,
      chapterNumber: 8,
      title: 'Phạm Vi Biến (Scope), Kỹ Thuật Truyền Mảng Vào Hàm & Nhập Môn Đệ Quy',
      readingTimeMinutes: 55,
      moodleType: 'Bài thực hành Lab 04: Viết thư viện hàm xử lý mảng chuẩn chỉnh + Đệ quy',
      objectives: [
        'Phân biệt rõ ràng Phạm vi biến cục bộ (Local Scope) và biến toàn cục (Global Scope); hiểu hiện tượng che khuất biến (Variable Shadowing).',
        'Nắm vững quy tắc vàng khi truyền mảng một chiều vào hàm trong C++: Bản chất luôn là truyền địa chỉ con trỏ ngầm định, bắt buộc phải truyền kèm số lượng phần tử `int n`.',
        'Viết bộ thư viện các hàm chuẩn mực thao tác trên mảng: Nhập mảng, Xuất mảng, Tìm Max/Min, Sắp xếp mảng tách biệt hoàn toàn khỏi main().',
        'Hiểu bản chất tư duy Đệ quy (Recursion): Một hàm tự gọi lại chính nó để giải quyết bài toán con có kích thước nhỏ hơn.',
        'Xác định 2 thành phần bắt buộc của hàm đệ quy: Điều kiện dừng (Base Case) và Bước đệ quy (Recursive Step); cài đặt hàm tính Giai thừa và dãy Fibonacci.'
      ],
      prerequisites: [
        'Đã học xong Bài 1, 2, 3 Chương 8 và Chương 6 (Mảng một chiều).'
      ],
      leadIn: {
        hook: 'Búp bê Nga Matryoshka: Mở con búp bê lớn ra, bên trong là con búp bê y hệt nhưng nhỏ hơn một chút; mở tiếp ra lại thấy con búp bê nhỏ hơn nữa, cho đến khi chạm tới con búp bê nhỏ nhất không thể mở được nữa. Đó chính là hình ảnh trực quan tuyệt đẹp của Thuật toán Đệ quy!',
        question: 'Tại sao khi bạn truyền một mảng `int a[]` vào hàm, mọi sự thay đổi trên mảng bên trong hàm đều làm biến đổi mảng gốc bên ngoài, mặc dù bạn KHÔNG hề viết dấu `&` ở tham số mảng?',
        realWorldScenario: 'Hệ thống cây thư mục trong máy tính (một thư mục chứa các thư mục con, trong mỗi thư mục con lại chứa các thư mục nhỏ hơn), thuật toán phân loại tài liệu theo nhánh và cấu trúc dữ liệu JSON/XML.'
      },
      theorySections: [
        {
          title: '1. Phạm vi biến (Scope): Biến Cục bộ vs Toàn cục',
          content: '- **Biến cục bộ (Local Variable):** Khai báo bên trong một khối lệnh `{}` (như thân hàm, thân vòng for). Chỉ có thể truy cập bên trong khối đó và bị hủy khi ra khỏi khối.\n- **Biến toàn cục (Global Variable):** Khai báo bên ngoài tất cả các hàm. Có thể được truy cập và sửa đổi bởi mọi hàm trong file. *Lưu ý:* Hạn chế tối đa dùng biến toàn cục vì dễ gây lỗi phụ (Side effects) khó kiểm soát.\n- **Che khuất biến (Shadowing):** Nếu biến cục bộ trùng tên với biến toàn cục, biến cục bộ sẽ được ưu tiên sử dụng bên trong khối của nó.'
        },
        {
          title: '2. Quy tắc vàng khi Truyền Mảng vào Hàm',
          content: 'Trong C++, khi truyền mảng một chiều vào hàm:\n- Tên mảng thực chất đóng vai trò là **địa chỉ của phần tử đầu tiên (`&a[0]`)**.\n- Do đó, mảng **luôn luôn được truyền theo địa chỉ (ngầm định giống như tham chiếu)**: Mọi thay đổi trên phần tử `a[i]` trong hàm sẽ làm thay đổi trực tiếp mảng gốc!\n- Hàm không thể tự biết mảng có bao nhiêu phần tử, vì vậy **bắt buộc phải truyền kèm biến kích thước $N$**:\n\n```cpp\nvoid inputArray(int a[], int n);   // Nhập mảng\nvoid printArray(const int a[], int n); // Xuất mảng (dùng const để bảo vệ dữ liệu)\n```'
        },
        {
          title: '3. Nhập môn Tư duy Đệ quy (Recursion)',
          content: '**Hàm đệ quy** là hàm tự gọi lại chính nó. Để không bị lặp vô tận gây tràn bộ nhớ Stack (Stack Overflow), một hàm đệ quy **bắt buộc phải có 2 phần**:\n\n1. **Điều kiện dừng (Base Case):** Trường hợp đơn giản nhất có thể trả về kết quả ngay lập tức mà không cần đệ quy tiếp.\n2. **Bước đệ quy (Recursive Step):** Gọi lại hàm với tham số nhỏ hơn, hướng dần về Base Case.\n\n*Ví dụ kinh điển tính Giai thừa $N!$ ($N! = N \\times (N - 1)!$):\n```cpp\nlong long factorial(int n) {\n    if (n <= 1) return 1;          // 1. Base Case: 0! = 1! = 1\n    return n * factorial(n - 1);  // 2. Recursive Step\n}\n```'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Thư viện xử lý mảng toàn diện kết hợp Đệ quy Fibonacci',
          problem: 'Xây dựng chương trình C++ cấu trúc mô-đun hóa hoàn chỉnh: 1. Hàm inputArray(a, n) nhập mảng; 2. Hàm printArray(const a, n) in mảng; 3. Hàm sortAscending(a, n) sắp xếp mảng tăng dần; 4. Hàm đệ quy fibonacci(n) tìm số Fibonacci thứ N (với F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)).',
          analysis: {
            input: 'Kích thước N, các phần tử mảng và chỉ số k cần tính số Fibonacci.',
            output: 'Mảng trước và sau khi sắp xếp, giá trị Fibonacci thứ k.',
            idea: 'Phân tách 100% logic vào các hàm con. Main chỉ khai báo biến và gọi hàm.',
            algorithm: 'Hàm main lần lượt gọi: inputArray -> printArray -> sortAscending -> printArray -> fibonacci(k)'
          },
          code: `#include <iostream>
#include <utility> // Cho std::swap
using namespace std;

const int MAX_SIZE = 100;

// =======================================================
// 1. BỘ THƯ VIỆN HÀM THAO TÁC TRÊN MẢNG
// =======================================================

// Ham nhap mang: a[] se bi thay doi truc tiep ben ngoai
void inputArray(int a[], int n) {
    cout << "Nhap " << n << " phan tu cua mang:" << endl;
    for (int i = 0; i < n; ++i) {
        cout << "a[" << i << "] = ";
        cin >> a[i];
    }
}

// Ham xuat mang: Su dung const int a[] de dam bao ham chi doc, khong lam sua doi mang
void printArray(const int a[], int n, const string &msg) {
    cout << "\n--- " << msg << " (N = " << n << ") ---" << endl;
    for (int i = 0; i < n; ++i) {
        cout << a[i] << " ";
    }
    cout << endl;
}

// Ham sap xep mang tang dan (Selection Sort)
void sortAscending(int a[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        int minIdx = i;
        for (int j = i + 1; j < n; ++j) {
            if (a[j] < a[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx != i) {
            swap(a[i], a[minIdx]);
        }
    }
}

// =======================================================
// 2. HÀM ĐỆ QUY TÍNH SỐ FIBONACCI
// =======================================================
long long fibonacci(int n) {
    // 1. Dieu kien dung (Base Cases)
    if (n <= 0) return 0;
    if (n == 1) return 1;

    // 2. Buoc de quy (Recursive Step)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// =======================================================
// 3. HÀM ĐIỀU PHỐI CHÍNH
// =======================================================
int main() {
    int arr[MAX_SIZE];
    int n = 0;

    cout << "=== THU VIEN MODUL MO-DUN HOA & DE QUY C++ ===" << endl;
    cout << "Nhap so luong phan tu cua mang N (1 <= N <= 20): ";
    cin >> n;

    // 1. Thao tac tren mang bang cach truyen vao ham
    inputArray(arr, n);
    printArray(arr, n, "Mang vua nhap ban dau");

    sortAscending(arr, n);
    printArray(arr, n, "Mang sau khi sap xep tang dan");

    // 2. Thao tac de quy Fibonacci
    int k = 0;
    cout << "\n--- TINH SO FIBONACCI BANG DE QUY ---" << endl;
    cout << "Nhap chi so k can tim so Fibonacci F(k) (0 <= k <= 30): ";
    cin >> k;

    long long fibVal = fibonacci(k);
    cout << "=> So Fibonacci F(" << k << ") = " << fibVal << endl;
    cout << "=============================================" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'void inputArray(int a[], int n)',
              explanation: 'Mảng được truyền dưới dạng con trỏ ngầm định, do đó khi nhập cin >> a[i] trong hàm thì mảng arr trong main() được cập nhật dữ liệu trực tiếp.'
            },
            {
              lineOrBlock: 'void printArray(const int a[], int n, ...)',
              explanation: 'Từ khóa const bảo vệ mảng: nếu vô tình viết lệnh gán a[i] = 0 trong hàm này, trình biên dịch sẽ chặn đứng và báo lỗi ngay.'
            },
            {
              lineOrBlock: 'return fibonacci(n - 1) + fibonacci(n - 2);',
              explanation: 'Đệ quy nhị phân: hàm tự gọi chính nó 2 lần để phân rã bài toán tìm F(n) thành 2 bài toán con nhỏ hơn F(n-1) và F(n-2).'
            }
          ],
          executionResult: {
            sampleInput: `5
64 25 12 22 11
7`,
            sampleOutput: `=== THU VIEN MODUL MO-DUN HOA & DE QUY C++ ===
Nhap so luong phan tu cua mang N (1 <= N <= 20): 5
Nhap 5 phan tu cua mang:
a[0] = 64
a[1] = 25
a[2] = 12
a[3] = 22
a[4] = 11

--- Mang vua nhap ban dau (N = 5) ---
64 25 12 22 11 

--- Mang sau khi sap xep tang dan (N = 5) ---
11 12 22 25 64 

--- TINH SO FIBONACCI BANG DE QUY ---
Nhap chi so k can tim so Fibonacci F(k) (0 <= k <= 30): 7
=> So Fibonacci F(7) = 13
=============================================`
          },
          analysisOfResult: 'Mảng arr trong main() được hàm inputArray nạp dữ liệu và hàm sortAscending sắp xếp thành công từ [64, 25, 12, 22, 11] thành [11, 12, 22, 25, 64]. Hàm đệ quy tính chính xác F(7) = 13 (dãy: 0, 1, 1, 2, 3, 5, 8, 13).'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Hàm đệ quy tính tổng từ 1 đến N',
          task: 'Viết hàm đệ quy `long long sumRecursive(int n)` tính tổng $S(n) = 1 + 2 + ... + n$. Xác định rõ Base Case và Recursive Step.',
          hints: ['Base case: if (n <= 1) return n; Step: return n + sumRecursive(n - 1);'],
          expectedOutput: 'sumRecursive(5) -> 15'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Hàm tìm kiếm tuyến tính trên mảng tách rời',
          task: 'Viết hàm `int linearSearch(const int a[], int n, int x)` nhận vào mảng, kích thước n và số cần tìm x. Trả về chỉ số tìm thấy đầu tiên hoặc -1 nếu không tìm thấy.',
          hints: ['Duyệt từ 0 đến n - 1, if (a[i] == x) return i; kết thúc vòng lặp return -1;'],
          expectedOutput: 'Tìm thấy trả về chỉ số i, không thấy trả về -1.'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Hàm đệ quy tính ước chung lớn nhất (Euclid)',
          task: 'Cài đặt thuật toán Euclid tìm ước chung lớn nhất bằng đệ quy: `gcd(a, b)`: Nếu `b == 0` thì trả về `a`, ngược lại trả về `gcd(b, a % b)`.',
          hints: ['Chỉ cần đúng 2 dòng lệnh!'],
          expectedOutput: 'gcd(48, 18) -> 6'
        }
      ],
      commonErrors: [
        {
          name: 'Quên hoặc viết sai Điều kiện dừng (Base Case) trong Đệ quy',
          symptom: 'Chương trình bị dừng đột ngột, văng lỗi Crash với thông báo \"Segmentation fault\" hoặc \"Stack overflow\".',
          rootCause: 'Hàm gọi lại chính nó vô hạn lần, các Stack Frame tích tụ liên tục làm đầy bộ nhớ ngăn xếp Call Stack của hệ điều hành.',
          howToFix: 'Luôn viết điều kiện dừng (Base Case) đầu tiên ngay dòng đầu của thân hàm đệ quy.',
          badCode: `int factorial(int n) {
    // Quên if (n <= 1) return 1;
    return n * factorial(n - 1); // ĐỆ QUY VÔ HẠN DẪN TỚI CRASH!
}`,
          goodCode: `int factorial(int n) {
    if (n <= 1) return 1; // BASE CASE BẢO VỆ CHẮC CHẮN!
    return n * factorial(n - 1);
}`
        },
        {
          name: 'Cố tình tính kích thước mảng bên trong hàm bằng sizeof(a)',
          symptom: 'Tính số phần tử bằng `sizeof(a) / sizeof(a[0])` trong hàm luôn trả về 1 hoặc 2 thay vì số lượng thực tế N.',
          rootCause: 'Khi truyền mảng vào hàm, mảng bị suy biến thành con trỏ (Pointer Decay). `sizeof(a)` bên trong hàm chỉ là kích thước của con trỏ (8 byte trên máy 64-bit), không phải kích thước của toàn mảng.',
          howToFix: 'Luôn luôn truyền kèm biến kích thước n từ bên ngoài: `void foo(int a[], int n);`.',
          badCode: `void print(int a[]) {
    int n = sizeof(a) / sizeof(a[0]); // SAI HOÀN TOÀN! Trả về kích thước con trỏ!
}`,
          goodCode: `void print(int a[], int n) { // ĐÚNG CHUẨN: Truyền n vào
    for (int i = 0; i < n; ++i) ...
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Quy tắc Pointer Decay của mảng',
          description: 'Giải thích hiện tượng suy biến mảng (Pointer Decay) khi truyền mảng vào hàm trong C++. Tại sao hàm không thể tự xác định độ dài mảng nếu không có tham số n?'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Cơ chế hoạt động của Đệ quy trên Stack',
          description: 'Vẽ sơ đồ ngăn xếp Call Stack khi máy tính thực thi lời gọi hàm `factorial(3)`. Chỉ rõ giai đoạn đệ quy đi xuống (Wind) và giai đoạn trả về giá trị đi lên (Unwind).'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Hàm đệ quy in chuỗi đảo ngược',
          description: 'Viết hàm đệ quy `void printReverse(string s, int idx)` in ra các ký tự của chuỗi s từ vị trí cuối cùng về đầu mà không dùng bất kỳ vòng lặp for/while nào.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Bài toán Tháp Hà Nội (Tower of Hanoi)',
          description: 'Cài đặt thuật toán đệ quy kinh điển giải bài toán Tháp Hà Nội với N đĩa: `void hanoi(int n, char fromRod, char toRod, char auxRod)`. In ra từng bước di chuyển đĩa.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Khi truyền một mảng một chiều int a[] vào hàm trong C++, tại sao các thay đổi phần tử mảng bên trong hàm lại làm biến đổi mảng gốc bên ngoài?',
          options: [
            'Vì C++ tự động tạo bản sao toàn bộ mảng',
            'Vì tên mảng thực chất là địa chỉ của phần tử đầu tiên, mảng ngầm định được truyền theo địa chỉ (tương tự tham chiếu)',
            'Vì mảng tự động biến thành biến toàn cục',
            'Vì từ khóa const tự động bị vô hiệu hóa'
          ],
          correctIndex: 1,
          explanation: 'Khi truyền mảng vào hàm, nó bị suy biến thành con trỏ trỏ tới phần tử đầu tiên (&a[0]). Mọi thao tác truy cập a[i] đều ghi trực tiếp vào ô nhớ gốc.'
        },
        {
          id: 2,
          question: 'Hai thành phần bắt buộc phải có trong bất kỳ một hàm đệ quy chuẩn mực nào là gì?',
          options: [
            'Vòng lặp for và vòng lặp while',
            'Biến toàn cục và biến cục bộ',
            'Điều kiện dừng (Base Case) và Bước đệ quy (Recursive Step)',
            'Khai báo prototype và câu lệnh switch-case'
          ],
          correctIndex: 2,
          explanation: 'Base Case giúp hàm có điểm kết thúc không gọi tiếp, còn Recursive Step phân rã bài toán lớn thành bài toán nhỏ hơn cùng loại.'
        },
        {
          id: 3,
          question: 'Để đảm bảo một hàm chỉ duyệt đọc mảng mà không thể vô tình sửa đổi dữ liệu các phần tử của mảng, ta nên khai báo tham số mảng như thế nào?',
          options: [
            'void display(int a[], int n)',
            'void display(const int a[], int n)',
            'void display(static int a[], int n)',
            'void display(int &a[], int n)'
          ],
          correctIndex: 1,
          explanation: 'Khai báo const int a[] biến các phần tử mảng thành chỉ đọc (read-only), trình biên dịch sẽ chặn mọi câu lệnh cố tình gán a[i] = ... trong hàm.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Scope biến', val: 'Cục bộ trong khối {} vs Toàn cục ngoài file' },
          { key: 'Truyền mảng', val: 'void func(int a[], int n) - Truyền địa chỉ ngầm định' },
          { key: 'Bảo vệ mảng', val: 'const int a[] ngăn chặn sửa đổi dữ liệu' },
          { key: 'Đệ quy', val: 'Hàm tự gọi lại chính nó' },
          { key: 'Quy tắc đệ quy', val: 'Bắt buộc phải có Base Case để tránh Stack Overflow' }
        ],
        coreTakeaway: 'Mô-đun hóa bằng hàm giúp phân tách rành mạch nhiệm vụ. Mảng luôn truyền theo địa chỉ kèm N, và Đệ quy là tư duy giải thuật thanh lịch phân rã bài toán dựa trên Base Case.'
      },
      checklist: [
        'Tôi hiểu phạm vi biến cục bộ và hạn chế dùng biến toàn cục.',
        'Tôi luôn truyền kèm kích thước n khi truyền mảng vào hàm.',
        'Tôi biết dùng const int a[] để bảo vệ dữ liệu mảng khi chỉ đọc.',
        'Tôi xác định được Base Case và Recursive Step khi viết hàm đệ quy.'
      ],
      extendedChallenge: {
        title: 'Cài đặt thuật toán Tìm kiếm nhị phân bằng Đệ quy',
        scenario: 'Tìm kiếm nhị phân trên mảng đã sắp xếp có bản chất đệ quy cực kỳ tự nhiên.',
        challengeTask: 'Viết hàm đệ quy binarySearchRecursive(const int a[], int left, int right, int x) trả về chỉ số tìm thấy x hoặc -1 nếu không tìm thấy trong đoạn [left, right].',
        thoughtGuidance: 'Base case: if (left > right) return -1; if (a[mid] == x) return mid; Recursive step gọi trên nửa trái hoặc nửa phải.'
      }
    }
  ]
};
