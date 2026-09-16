import { LessonContent, ChapterData } from './chapter1Data.ts';

export const CHAPTER_5_DATA: ChapterData = {
  chapterId: 5,
  chapterCode: 'CH05',
  title: 'Chuỗi Ký Tự Trong C++ (std::string)',
  summary: 'Làm chủ xử lý dữ liệu văn bản hiện đại với std::string: Khái niệm chuỗi động an toàn, nhập xuất chuẩn với getline() và cơ chế xử lý dứt điểm trôi lệnh bằng cin.ignore(); truy cập ký tự qua chỉ số 0-based [i] và s.at(), đo độ dài với length()/size(), kiểm tra rỗng với empty(); phân loại và chuyển đổi ký tự với <cctype> (toupper, tolower, isalpha, isdigit); các thao tác nâng cao cắt ghép với substr(), tìm kiếm với find() và hằng số vô hiệu string::npos; giải quyết trọn vẹn bài toán kinh điển kiểm tra xâu đối xứng (Palindrome) và bài toán thực tế chuẩn hóa chuỗi họ tên người Việt.',
  totalLessons: 3,
  lessons: [
    // -------------------------------------------------------------
    // BÀI 1: KHÁI NIỆM CHUỖI & NHẬP XUẤT AN TOÀN VỚI getline() (L15)
    // -------------------------------------------------------------
    {
      id: 'CH05-L01',
      lessonNumber: 1,
      chapterNumber: 5,
      title: 'Khái Niệm Chuỗi & Nhập Xuất An Toàn với getline()',
      readingTimeMinutes: 45,
      moodleType: 'Page tương tác + Mô phỏng bẫy trôi lệnh buffer bàn phím + Quiz',
      objectives: [
        'Hiểu rõ bản chất của chuỗi ký tự trong lập trình và lý do nên sử dụng std::string của C++ hiện đại thay vì mảng ký tự thô kiểu C (char[]).',
        'Nắm vững cách khai báo, khởi tạo chuỗi với thư viện chuẩn #include <string>.',
        'Phân biệt rõ sự khác nhau cơ bản giữa toán tử nhập cin >> (dừng lại khi gặp khoảng trắng) và hàm std::getline(cin, s) (đọc trọn vẹn cả dòng).',
        'Giải thích tường tận cơ chế gây ra "hiện tượng trôi lệnh" (Input Buffer Leaking) do ký tự newline \\n còn sót lại sau cin >> số.',
        'Sử dụng thành thạo kỹ thuật dọn dẹp bộ đệm bàn phím với cin.ignore() để đảm bảo chương trình nhập xuất an toàn tuyệt đối.'
      ],
      prerequisites: [
        'Đã học xong Chương 4 (Cấu trúc vòng lặp) và Chương 2 (Toán tử và nhập xuất cơ bản).'
      ],
      leadIn: {
        hook: 'Tại sao khi bạn viết chương trình nhập mã sinh viên, tuổi rồi nhập họ tên, màn hình lại "nhảy cóc" qua bước nhập họ tên và kết thúc luôn mà bạn chưa kịp gõ một chữ nào?',
        question: 'Tại sao lệnh cin >> lại bỏ rơi các chữ cái sau dấu cách khi bạn gõ "Nguyen Van A"? Làm thế nào để đọc trọn vẹn một câu văn dài có chứa nhiều dấu cách?',
        realWorldScenario: 'Điền form thông tin cá nhân: Họ và tên, địa chỉ nhà (có số nhà, tên đường, khoảng trắng), hay nhập một dòng trạng thái trên mạng xã hội. Tất cả đều là văn bản có khoảng trắng và bắt buộc phải xử lý an toàn bằng getline() kết hợp cin.ignore().'
      },
      theorySections: [
        {
          title: '1. std::string - Giải pháp chuỗi ký tự an toàn của C++ hiện đại',
          content: 'Trong ngôn ngữ C cổ điển, chuỗi được biểu diễn bằng mảng các ký tự (`char str[100]`) kết thúc bằng ký tự null `\\0`. Cách làm này rất nguy hiểm vì dễ gây tràn bộ nhớ (*Buffer Overflow*) nếu người dùng nhập vượt quá kích thước mảng.\n\nTrong C++ hiện đại, thư viện `<string>` cung cấp kiểu dữ liệu `std::string` với nhiều ưu điểm vượt trội:\n- **Tự động co giãn kích thước:** Không cần khai báo trước độ dài tối đa.\n- **An toàn bộ nhớ:** Trình quản lý bộ nhớ tự động cấp phát và giải phóng.\n- **Hỗ trợ toán tử trực quan:** Dễ dàng gán (`s1 = s2`), nối chuỗi (`s1 + s2`), so sánh (`s1 == s2`, `s1 < s2`).\n\nKhai báo và khởi tạo:\n```cpp\n#include <string>\nusing namespace std;\n\nstring s1;                   // Chuỗi rỗng \"\"\nstring s2 = \"Xin chao C++\";  // Khởi tạo trực tiếp\nstring s3(5, \'A\');           // Chuỗi gồm 5 ký tự \'A\': \"AAAAA\"\n```'
        },
        {
          title: '2. Phân biệt toán tử cin >> và hàm getline(cin, s)',
          content: 'Sự khác biệt cốt lõi giữa hai phương thức đọc chuỗi:\n\n- **Toán tử `cin >> s` (Đọc từ đơn):**\n  - Bỏ qua các khoảng trắng, tab, xuống dòng ở đầu luồng.\n  - Đọc liên tục cho đến khi **gặp ký tự khoảng trắng đầu tiên** (Space, Tab, Enter) thì dừng lại.\n  - Ký tự khoảng trắng đó vẫn nằm lại trong bộ đệm (*Input Buffer*).\n  - *Ứng dụng:* Phù hợp nhập mã số sinh viên, tên đăng nhập không dấu cách, mật khẩu từ đơn.\n\n- **Hàm `getline(cin, s)` (Đọc cả dòng):**\n  - Đọc tất cả các ký tự trên dòng (bao gồm cả dấu cách) cho đến khi **gặp ký tự xuống dòng `\\n` (phím Enter)**.\n  - Đọc và loại bỏ ký tự `\\n` ra khỏi bộ đệm, lưu toàn bộ nội dung trước đó vào chuỗi `s`.\n  - *Ứng dụng:* Bắt buộc dùng khi nhập Họ và tên đầy đủ, địa chỉ, bài văn, câu thoại.',
          callout: {
            type: 'warning',
            text: '⚠️ Không dùng cin >> để nhập họ tên người! Nếu bạn nhập "Nguyen Van A", cin >> chỉ nhận được duy nhất chữ "Nguyen", hai chữ "Van" và "A" sẽ trôi sang các lệnh nhập phía sau!'
          }
        },
        {
          title: '3. Bản chất Hiện tượng trôi lệnh và giải pháp triệt để với cin.ignore()',
          content: 'Khi bạn nhập dữ liệu số (int, double) bằng `cin >> n`, người dùng gõ số và nhấn Enter. Ví dụ gõ `20` rồi bấm Enter:\n- Trong bộ đệm bàn phím sẽ chứa 3 ký tự: `\'2\'`, `\'0\'`, `\'\\n\'`.\n- Lệnh `cin >> n` rút 2 ký tự `\'2\'` và `\'0\'` chuyển thành số nguyên 20 gán cho `n`.\n- Ký tự `\'\\n\'` **vẫn bị bỏ rơi lại trong bộ đệm bàn phím**!\n\nNếu ngay phía sau đó bạn gọi lệnh `getline(cin, fullName)`:\n- `getline` đọc từ bộ đệm, thấy ngay ký tự `\'\\n\'` còn sót lại.\n- Nó tưởng rằng người dùng vừa nhấn Enter kết thúc một dòng rỗng!\n- Kết quả: `fullName` nhận chuỗi rỗng `\"\"`, chương trình lướt qua luôn mà người dùng không hề có cơ hội gõ họ tên $\\rightarrow$ Đây gọi là **Hiện tượng trôi lệnh (Input Buffer Leaking)**.\n\n**Giải pháp triệt để:**\nGọi lệnh `cin.ignore()` ngay sau khi dùng `cin >>` để xóa ký tự `\'\\n\'` còn thừa trong bộ đệm trước khi gọi `getline`:\n```cpp\nint age;\ncout << \"Nhap tuoi: \";\ncin >> age;\n\ncin.ignore(); // Xoa sach ky tu \'\\n\' con sot lai trong bo dem!\n\nstring fullName;\ncout << \"Nhap ho ten: \";\ngetline(cin, fullName); // Gio day chay an toan 100%\n```',
          callout: {
            type: 'tip',
            text: '💡 Chuẩn lập trình công nghiệp: Để xóa sạch toàn bộ các ký tự rác còn sót lại trên dòng (ngay cả khi người dùng gõ thừa dấu cách sau số), hãy dùng: cin.ignore(1000, \'\\n\'); hoặc cin.ignore(numeric_limits<streamsize>::max(), \'\\n\'); trong thư viện <limits>.'
          }
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Nhập xuất hồ sơ sinh viên an toàn không bị trôi lệnh',
          problem: 'Viết chương trình nhập hồ sơ lý lịch sinh viên gồm: Mã sinh viên (string không cách), Tuổi (int), Điểm tích lũy CPA (double), Họ và tên đầy đủ (string có cách), Địa chỉ thường trú (string có cách). In phiếu thông tin đã được định dạng ngay ngắn.',
          analysis: {
            input: 'Mã SV (cin >>), Tuổi (cin >>), CPA (cin >>), Họ tên (getline sau ignore), Địa chỉ (getline).',
            output: 'Phiếu thông tin sinh viên in ra màn hình dạng bảng căn lề.',
            idea: 'Sử dụng cin >> cho các trường số và mã từ đơn. Sau trường số cuối cùng (CPA), bắt buộc gọi cin.ignore() trước khi nhập Họ tên và Địa chỉ bằng getline().',
            algorithm: 'Bước 1: cin >> studentId\nBước 2: cin >> age >> cpa\nBước 3: cin.ignore() dọn sạch bộ đệm\nBước 4: getline(cin, fullName)\nBước 5: getline(cin, address)\nBước 6: In phiếu lý lịch ra màn hình.'
          },
          code: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main() {
    string studentId;
    int age = 0;
    double cpa = 0.0;
    string fullName;
    string address;

    cout << "=== HE THONG NHAP HO SO SINH VIEN (C++ STRING) ===" << endl;

    // 1. Nhap ma sinh vien (khong chua dau cach -> dung cin >>)
    cout << "Nhap Ma Sinh Vien (VD: B23DCCN001): ";
    cin >> studentId;

    // 2. Nhap tuoi va diem tich luy
    cout << "Nhap tuoi: ";
    cin >> age;
    cout << "Nhap diem CPA (0.0 - 4.0): ";
    cin >> cpa;

    // 3. XU LY TROI LENH: Don dep bo dem ban phim
    // Sau khi cin >> cpa, phim Enter tao ra '\\n' con sot lai trong bo dem!
    cin.ignore(); 

    // 4. Nhap ho ten day du (co chua dau cach -> bat buoc dung getline)
    cout << "Nhap Ho va Ten day du: ";
    getline(cin, fullName);

    // 5. Nhap dia chi (co chua dau cach -> tiep tuc dung getline)
    // Chu y: Giua hai lenh getline lien tiep thi KHONG CAN cin.ignore()!
    cout << "Nhap Dia chi thuong tru: ";
    getline(cin, address);

    // 6. In phieu thong tin sinh vien da nhap
    cout << "\n==================================================" << endl;
    cout << "              PHIEU THONG TIN SINH VIEN           " << endl;
    cout << "==================================================" << endl;
    cout << left << setw(20) << "Ma sinh vien:" << studentId << endl;
    cout << left << setw(20) << "Ho va Ten:" << fullName << endl;
    cout << left << setw(20) << "Tuoi:" << age << endl;
    cout << left << setw(20) << "Diem CPA:" << fixed << setprecision(2) << cpa << "/4.0" << endl;
    cout << left << setw(20) << "Dia chi:" << address << endl;
    cout << "==================================================" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: '#include <string>',
              explanation: 'Bắt buộc phải nạp thư viện <string> để sử dụng kiểu dữ liệu std::string và hàm getline().'
            },
            {
              lineOrBlock: 'cin >> studentId; ... cin >> cpa;',
              explanation: 'Nhập dữ liệu từ đơn và dữ liệu số. Dừng lại khi gặp khoảng trắng hoặc dấu xuống dòng.'
            },
            {
              lineOrBlock: 'cin.ignore();',
              explanation: 'Lệnh sống còn để loại bỏ ký tự newline \'\\n\' thừa, ngăn chặn triệt để lỗi trôi lệnh cho getline phía dưới.'
            },
            {
              lineOrBlock: 'getline(cin, fullName);',
              explanation: 'Đọc nguyên cả dòng văn bản bao gồm cả các dấu cách của họ tên cho đến khi người dùng bấm phím Enter.'
            }
          ],
          executionResult: {
            sampleInput: `B23DCCN123
19
3.65
Nguyen Tran Trung Kien
123 Nguyen Trai, Thanh Xuan, Ha Noi`,
            sampleOutput: `=== HE THONG NHAP HO SO SINH VIEN (C++ STRING) ===
Nhap Ma Sinh Vien (VD: B23DCCN001): B23DCCN123
Nhap tuoi: 19
Nhap diem CPA (0.0 - 4.0): 3.65
Nhap Ho va Ten day du: Nguyen Tran Trung Kien
Nhap Dia chi thuong tru: 123 Nguyen Trai, Thanh Xuan, Ha Noi

==================================================
              PHIEU THONG TIN SINH VIEN           
==================================================
Ma sinh vien:       B23DCCN123
Ho va Ten:          Nguyen Tran Trung Kien
Tuoi:               19
Diem CPA:           3.65/4.0
Dia chi:            123 Nguyen Trai, Thanh Xuan, Ha Noi
==================================================`
          },
          analysisOfResult: 'Nhờ có cin.ignore() đặt chính xác sau cin >> cpa, chương trình không bị trôi lệnh. Họ tên và địa chỉ có dấu cách đều được lưu trọn vẹn.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Nhập xuất câu danh ngôn yêu thích',
          task: 'Viết chương trình cho phép người dùng nhập vào một câu danh ngôn bất kỳ (có khoảng trắng và dấu câu) bằng getline() rồi in lại câu đó trong cặp dấu ngoặc kép.',
          hints: ['Dùng string quote; getline(cin, quote); cout << "\\"" << quote << "\\"";'],
          expectedOutput: 'Nhap: Co cong mai sat co ngay nen kim -> "Co cong mai sat co ngay nen kim"'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Nhập danh sách N dòng văn bản',
          task: 'Nhập số nguyên N (1 <= N <= 10). Sử dụng vòng lặp for kết hợp getline() để nhập đúng N dòng văn bản và in lại ra màn hình kèm số thứ tự [1], [2], ...',
          hints: ['Nhớ gọi cin.ignore() ngay sau cin >> n trước khi bước vào vòng lặp for chứa getline.'],
          expectedOutput: 'Nhap N: 2 -> Nhap dong 1 -> Nhap dong 2 -> In [1] ... [2] ...'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Hóa đơn đặt hàng trực tuyến',
          task: 'Viết chương trình nhập thông tin đơn hàng gồm: Mã đơn hàng (string không dấu cách), Số lượng sản phẩm (int), Đơn giá (double), Tên người nhận (string có dấu cách), Địa chỉ nhận hàng (string có dấu cách). Tính tổng tiền thanh toán và in phiếu hóa đơn.',
          hints: ['Cấu trúc: cin >> maDon >> soLuong >> donGia; cin.ignore(); getline(cin, ten); getline(cin, diaChi);'],
          expectedOutput: 'In ra bảng kê chi tiết hóa đơn thanh toán chuẩn hóa.'
        }
      ],
      commonErrors: [
        {
          name: 'Hiện tượng trôi lệnh (Input Buffer Leaking)',
          symptom: 'Chương trình bỏ qua bước nhập chuỗi bằng getline(), không cho người dùng gõ ký tự nào mà nhảy sang lệnh tiếp theo.',
          rootCause: 'Lệnh cin >> trước đó để lại ký tự xuống dòng \'\\n\' trong bộ đệm. Khi gặp getline(), nó lập tức đọc \'\\n\' và coi là dòng rỗng kết thúc.',
          howToFix: 'Thêm lệnh cin.ignore() ngay sau lệnh cin >> trước khi gọi getline().',
          badCode: `int age;
cin >> age;
string name;
getline(cin, name); // BỊ TRÔI LỆNH!`,
          goodCode: `int age;
cin >> age;
cin.ignore(); // XÓA BỘ ĐỆM
string name;
getline(cin, name); // CHẠY AN TOÀN`
        },
        {
          name: 'Lạm dụng cin.ignore() giữa hai lệnh getline liên tiếp',
          symptom: 'Khi nhập chuỗi thứ hai bằng getline, người dùng bị mất mất chữ cái đầu tiên (ví dụ gõ "Hà Nội" thì chuỗi chỉ nhận "à Nội").',
          rootCause: 'Bản thân getline() ĐÃ TỰ ĐỘNG ĐỌC VÀ XÓA ký tự \'\\n\' ra khỏi bộ đệm rồi. Nếu đặt cin.ignore() giữa hai lệnh getline, nó sẽ nuốt nhầm ký tự đầu tiên của dòng thứ hai.',
          howToFix: 'Chỉ dùng cin.ignore() sau cin >>. Giữa hai lệnh getline LIÊN TIẾP thì TUYỆT ĐỐI KHÔNG dùng cin.ignore().',
          badCode: `getline(cin, name);
cin.ignore(); // THỪA! Gây mất ký tự đầu của địa chỉ!
getline(cin, address);`,
          goodCode: `getline(cin, name);
getline(cin, address); // Đúng chuẩn, không cần ignore`
        },
        {
          name: 'Dùng cin >> để đọc chuỗi có khoảng trắng',
          symptom: 'Người dùng nhập "Le Van An" nhưng in ra chỉ thấy chữ "Le", các chữ sau bị đẩy sang biến khác gây sai lệch dữ liệu toàn bộ chương trình.',
          rootCause: 'Toán tử cin >> chỉ đọc từ đơn, nó tự động ngắt khi gặp dấu cách đầu tiên.',
          howToFix: 'Dùng hàm getline(cin, s) bất cứ khi nào chuỗi có khả năng chứa khoảng trắng.',
          badCode: `string fullName;
cin >> fullName; // Chỉ đọc được 1 từ!`,
          goodCode: `string fullName;
getline(cin, fullName); // Đọc trọn vẹn cả dòng`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Phân biệt cin >> và getline()',
          description: 'Nêu sự khác biệt cốt lõi giữa hai lệnh `cin >> s;` và `getline(cin, s);` khi người dùng nhập chuỗi `"Cong nghe thong tin"` từ bàn phím.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Giải thích hiện tượng trôi lệnh',
          description: 'Vẽ sơ đồ hoặc mô tả trạng thái của bộ đệm bàn phím (Input Buffer) trước và sau khi thực thi đoạn mã: `int x; cin >> x; string s; getline(cin, s);`. Giải thích tại sao `s` lại nhận giá trị rỗng.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Quản lý điểm danh môn học',
          description: 'Viết chương trình nhập số lượng sinh viên N (1 <= N <= 30). Sau đó dùng vòng lặp nhập Mã SV và Họ tên của N sinh viên. In ra danh sách điểm danh theo dạng cột: [STT] - [Mã SV] - [Họ và Tên].'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Nhập dữ liệu đa dòng với dòng kết thúc Sentinel',
          description: 'Viết chương trình cho phép người dùng nhập liên tục các đoạn văn bản (mỗi đoạn một dòng) cho đến khi người dùng nhập dòng chữ "END" thì dừng lại. In ra tổng số dòng đã nhập và dòng có độ dài dài nhất.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Nguyên nhân chính gây ra "hiện tượng trôi lệnh" khi dùng getline() sau cin >> là gì?',
          options: [
            'Do chuỗi string không đủ bộ nhớ để chứa dữ liệu',
            'Do ký tự newline \'\\n\' (phím Enter) sau lệnh cin >> vẫn còn nằm lại trong bộ đệm bàn phím',
            'Do thư viện <string> chưa được nạp',
            'Do biến số và biến chuỗi có kiểu dữ liệu xung đột nhau'
          ],
          correctIndex: 1,
          explanation: 'Toán tử cin >> chỉ trích xuất dữ liệu số và để lại ký tự Enter \'\\n\' trong luồng đệm. Lệnh getline() tiếp theo đọc ngay \'\\n\' và lầm tưởng là dòng rỗng.'
        },
        {
          id: 2,
          question: 'Trong trường hợp nào sau đây bạn KHÔNG CẦN gọi lệnh cin.ignore()?',
          options: [
            'Sau khi gọi cin >> age rồi chuẩn bị gọi getline(cin, name)',
            'Sau khi gọi cin >> price rồi chuẩn bị gọi getline(cin, address)',
            'Giữa hai lệnh getline(cin, s1) và getline(cin, s2) liên tiếp nhau',
            'Sau khi gọi cin >> char rồi chuẩn bị gọi getline(cin, comment)'
          ],
          correctIndex: 2,
          explanation: 'Hàm getline() tự động trích xuất và hủy bỏ ký tự newline \'\\n\' ra khỏi bộ đệm, do đó giữa hai lệnh getline liên tiếp nhau bộ đệm đã sạch, không cần và không được gọi cin.ignore().'
        },
        {
          id: 3,
          question: 'Để nhập một chuỗi có chứa nhiều khoảng trắng (ví dụ: \"Ha Noi mua thu\"), lệnh nào sau đây là chính xác?',
          options: [
            'cin >> s;',
            'cin.get(s);',
            'getline(cin, s);',
            'scanf(\"%s\", s);'
          ],
          correctIndex: 2,
          explanation: 'Hàm getline(cin, s) là phương thức chuẩn của C++ để đọc trọn vẹn một dòng văn bản chứa các khoảng trắng cho tới ký tự Enter.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'std::string', val: 'Lớp chuỗi an toàn, tự động co giãn kích thước của C++ STL' },
          { key: 'cin >> s', val: 'Chỉ đọc 1 từ đơn, dừng ở khoảng trắng đầu tiên' },
          { key: 'getline(cin, s)', val: 'Đọc trọn vẹn cả dòng gồm cả dấu cách đến khi gặp phím Enter' },
          { key: 'cin.ignore()', val: 'Cứu cánh dọn sạch ký tự Enter \'\\n\' trong bộ đệm sau cin >>' },
          { key: 'Quy tắc vàng', val: 'Sau cin >> số thì PHẢI ignore() trước khi getline(). Hai getline liên tiếp thì KHÔNG ignore().' }
        ],
        coreTakeaway: 'Luôn luôn dùng getline(cin, s) để nhập chuỗi có khoảng trắng và luôn nhớ dọn dẹp bộ đệm bằng cin.ignore() ngay sau khi nhập dữ liệu số.'
      },
      checklist: [
        'Tôi hiểu rõ vì sao std::string ưu việt và an toàn hơn mảng ký tự char[] kiểu C.',
        'Tôi phân biệt được khi nào dùng cin >> và khi nào bắt buộc dùng getline().',
        'Tôi giải thích được bản chất hiện tượng trôi lệnh trong bộ đệm bàn phím.',
        'Tôi thành thạo việc đặt cin.ignore() đúng vị trí để chương trình nhập xuất an toàn 100%.'
      ],
      extendedChallenge: {
        title: 'Xây dựng module tiếp nhận hồ sơ đăng ký dự thi trực tuyến',
        scenario: 'Một cổng thông tin tuyển sinh yêu cầu thí sinh nhập lần lượt: Số báo danh (không cách), Năm sinh (int), Điểm thi 3 môn Toán - Lý - Hóa (3 số thực), Họ và tên (có cách), Tên trường THPT (có cách), Nguyện vọng xét tuyển (có cách).',
        challengeTask: 'Viết chương trình nhập toàn bộ hồ sơ trên, đảm bảo kiểm soát hoàn toàn bộ đệm không bị trôi lệnh bất kỳ trường thông tin nào. Tính điểm tổng và in giấy báo dự thi.',
        thoughtGuidance: 'Tách biệt rõ các nhóm lệnh cin >> và các nhóm lệnh getline(), xác định chính xác các điểm giao thoa cần dọn dẹp bộ đệm.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 2: TRUY CẬP KÝ TỰ, DUYỆT CHUỖI & CÁC THAO TÁC CỐT LÕI (L16)
    // -------------------------------------------------------------
    {
      id: 'CH05-L02',
      lessonNumber: 2,
      chapterNumber: 5,
      title: 'Truy Cập Ký Tự, Duyệt Chuỗi & Các Thao Tác Cốt Lõi',
      readingTimeMinutes: 50,
      moodleType: 'VPL Đếm số nguyên âm, phụ âm, chữ số và ký tự đặc biệt',
      objectives: [
        'Hiểu cơ chế biểu diễn chuỗi như một mảng tập hợp các ký tự được đánh chỉ số từ 0 (0-based indexing).',
        'Phân biệt cách truy cập ký tự qua toán tử chỉ số s[i] và phương thức an toàn s.at(i) (có kiểm tra biên và ném ngoại lệ out_of_range).',
        'Sử dụng thành thạo các phương thức đo kích thước s.length(), s.size() và kiểm tra chuỗi rỗng s.empty().',
        'Vận dụng thành thạo 2 phương pháp duyệt chuỗi: Vòng lặp for theo chỉ số và vòng lặp for (char c : s) (Range-based for loop).',
        'Sử dụng thành thạo thư viện <cctype> để kiểm tra loại ký tự (isalpha, isdigit, isupper, islower, isspace) và chuyển đổi hoa/thường (toupper, tolower).'
      ],
      prerequisites: [
        'Đã học xong Bài 1 Chương 5 (Khái niệm string, getline) và Bài 1 Chương 4 (Vòng lặp for).'
      ],
      leadIn: {
        hook: 'Mật khẩu của bạn có đủ an toàn không? Một hệ thống đánh giá mật khẩu cần kiểm tra: Ít nhất 8 ký tự, có ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số và 1 ký tự đặc biệt. Làm sao để máy tính "soi" từng ký tự trong chuỗi để chấm điểm mật khẩu?',
        question: 'Chuỗi ký tự có giống như một đoàn tàu gồm nhiều toa, mỗi toa chở một ký tự? Làm cách nào để chúng ta bước lên từng toa tàu đó để kiểm tra vé?',
        realWorldScenario: 'Bộ đếm từ và ký tự của Microsoft Word, công cụ kiểm tra độ mạnh mật khẩu khi đăng ký tài khoản Google, hay thuật toán đếm số lần xuất hiện của từ khóa trong văn bản. Tất cả đều dựa trên kỹ thuật duyệt chuỗi và thao tác trên từng ký tự.'
      },
      theorySections: [
        {
          title: '1. Chỉ số chuỗi (0-based Index) & Kỹ thuật truy cập ký tự',
          content: 'Trong C++, chuỗi có độ dài $N$ thì các ký tự được đánh chỉ số (*Index*) liên tục từ `0` đến `N - 1`:\n- Ký tự đầu tiên: `s[0]`\n- Ký tự cuối cùng: `s[s.length() - 1]`\n\nHai cách truy cập ký tự:\n- **Cách 1: Toán tử chỉ số `s[i]`:** Truy cập trực tiếp cực nhanh, tuy nhiên **không kiểm tra biên**. Nếu bạn truy cập `s[100]` khi chuỗi chỉ dài 5 ký tự, chương trình sẽ đọc rác bộ nhớ hoặc bị văng lỗi (*Crash*) một cách khó đoán (Undefined Behavior).\n- **Cách 2: Phương thức an toàn `s.at(i)`:** Tự động kiểm tra nếu chỉ số `i` nằm ngoài đoạn $[0, N-1]$, nó sẽ ném ra ngoại lệ `std::out_of_range`, giúp lập trình viên phát hiện lỗi ngay lập tức.'
        },
        {
          title: '2. Các phương thức kích thước và toán tử trên chuỗi',
          content: '- **Đo độ dài:** `s.length()` hoặc `s.size()`: Trả về số lượng ký tự hiện có trong chuỗi (kiểu số nguyên không dấu `size_t`). Cả hai hàm này hoàn toàn tương đương nhau.\n- **Kiểm tra rỗng:** `s.empty()`: Trả về `true` nếu chuỗi rỗng (`""`, độ dài bằng 0), ngược lại trả về `false`. Ưu tiên dùng `s.empty()` thay vì `s.length() == 0` vì nó thể hiện rõ ý đồ và tối ưu hơn.\n- **Nối chuỗi (+ và +=):**\n  ```cpp\n  string s1 = \"Hello\";\n  string s2 = \"World\";\n  string s3 = s1 + \" \" + s2; // \"Hello World\"\n  s1 += \"!\";                 // \"Hello!\"\n  ```\n- **So sánh thứ tự từ điển (Lexicographical Order):**\n  C++ hỗ trợ các toán tử `==`, `!=`, `<`, `>`, `<=`, `>=`. Chuỗi được so sánh theo mã ASCII của từng ký tự từ trái qua phải (tương tự như cách tra từ điển):\n  Ví dụ: `\"Apple\" < \"Banana\"` (vì \'A\' có mã ASCII 65 nhỏ hơn \'B\' có mã 66).'
        },
        {
          title: '3. Duyệt chuỗi và Sức mạnh của thư viện kiểm tra ký tự <cctype>',
          content: 'Có hai cách chuẩn mực để duyệt qua từng ký tự của chuỗi:\n- **Cách 1: Duyệt bằng chỉ số qua for truyền thống:**\n  ```cpp\n  for (size_t i = 0; i < s.length(); ++i) {\n      cout << s[i] << \" \";\n  }\n  ```\n- **Cách 2: Duyệt bằng vòng lặp Range-based for (C++11 trở lên):**\n  ```cpp\n  for (char c : s) { // c là bản sao của từng ký tự\n      cout << c << \" \";\n  }\n  // Nếu muốn sửa đổi trực tiếp ký tự trong chuỗi, dùng tham chiếu:\n  for (char &c : s) {\n      c = toupper(c); // Chuyển thành chữ in hoa\n  }\n  ```\n\n**Các hàm phân loại và chuyển đổi ký tự cực mạnh trong `#include <cctype>`:**\n- `isalpha(c)`: Trả về khác 0 nếu `c` là chữ cái (A-Z, a-z).\n- `isdigit(c)`: Trả về khác 0 nếu `c` là chữ số (0-9).\n- `isalnum(c)`: Trả về khác 0 nếu `c` là chữ cái hoặc chữ số.\n- `isspace(c)`: Trả về khác 0 nếu `c` là khoảng trắng, tab, xuống dòng.\n- `isupper(c)` / `islower(c)`: Kiểm tra chữ hoa / chữ thường.\n- `toupper(c)` / `tolower(c)`: Trả về ký tự in hoa / in thường tương ứng.'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Phân tích cấu trúc văn bản và đếm số loại ký tự',
          problem: 'Nhập vào một chuỗi văn bản bất kỳ (có khoảng trắng). Viết chương trình duyệt chuỗi để thống kê: 1. Tổng số ký tự; 2. Số chữ cái in hoa; 3. Số chữ cái in thường; 4. Số ký tự chữ số; 5. Số ký tự khoảng trắng; 6. Số ký tự đặc biệt (dấu câu, ký hiệu); 7. Chuyển toàn bộ chuỗi sang chữ in hoa và in ra màn hình.',
          analysis: {
            input: 's (string có thể chứa khoảng trắng)',
            output: 'Bảng thống kê 6 loại số lượng ký tự và chuỗi in hoa.',
            idea: 'Dùng getline() nhập chuỗi. Dùng vòng lặp for duyệt từng ký tự c, áp dụng các hàm trong <cctype> để phân loại vào các biến đếm tương ứng.',
            algorithm: 'Bước 1: getline(cin, s)\nBước 2: Khởi tạo cntUpper = cntLower = cntDigit = cntSpace = cntSpecial = 0\nBước 3: for (char c : s):\n  - if (isupper(c)) cntUpper++\n  - else if (islower(c)) cntLower++\n  - else if (isdigit(c)) cntDigit++\n  - else if (isspace(c)) cntSpace++\n  - else cntSpecial++\nBước 4: Duyệt chuỗi lần 2 để chuyển ký tự thành chữ hoa: c = toupper(c)\nBước 5: In kết quả thống kê.'
          },
          code: `#include <iostream>
#include <string>
#include <cctype> // Thu vien kiem tra va bien doi ky tu
#include <iomanip>
using namespace std;

int main() {
    string text;
    cout << "=== CHUONG TRINH PHAN TICH VAN BAN (C++ STRING) ===" << endl;
    cout << "Nhap mot doan van ban bat ky: ";
    getline(cin, text);

    if (text.empty()) {
        cout << "[Thong bao]: Chuoi ban vua nhap la chuoi rong!" << endl;
        return 0;
    }

    // Cac bien dem thong ke
    int countUpper = 0;
    int countLower = 0;
    int countDigit = 0;
    int countSpace = 0;
    int countSpecial = 0;

    // Duyet qua tung ky tu bang Range-based for loop
    for (char c : text) {
        if (isupper(c)) {
            countUpper++;
        } else if (islower(c)) {
            countLower++;
        } else if (isdigit(c)) {
            countDigit++;
        } else if (isspace(c)) {
            countSpace++;
        } else {
            countSpecial++; // Ky tu dac biet nhu @, #, $, !, dau cham, phay
        }
    }

    // In ket qua thong ke
    cout << "\n--------------------------------------------------" << endl;
    cout << "KET QUA PHAN TICH CHUOI (Do dai = " << text.length() << " ky tu):" << endl;
    cout << "- So chu cai in hoa   : " << countUpper << endl;
    cout << "- So chu cai in thuong : " << countLower << endl;
    cout << "- So chu so (0 - 9)   : " << countDigit << endl;
    cout << "- So khoang trang      : " << countSpace << endl;
    cout << "- So ky tu dac biet    : " << countSpecial << endl;

    // Bien doi toan bo chuoi sang chu in hoa bang tham chieu char &c
    string upperText = text;
    for (char &c : upperText) {
        c = toupper(c); // Thay doi truc tiep ky tu trong chuoi
    }

    cout << "--------------------------------------------------" << endl;
    cout << "Van ban sau khi IN HOA toan bo:" << endl;
    cout << upperText << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: '#include <cctype>',
              explanation: 'Nạp thư viện chứa các hàm kiểm tra phân loại ký tự (isupper, islower, isdigit, isspace) và hàm toupper, tolower.'
            },
            {
              lineOrBlock: 'for (char c : text)',
              explanation: 'Duyệt an toàn không cần chỉ số, c lần lượt nhận bản sao của từng ký tự trong chuỗi từ đầu đến cuối.'
            },
            {
              lineOrBlock: 'for (char &c : upperText) { c = toupper(c); }',
              explanation: 'Sử dụng tham chiếu char &c để cho phép gán trực tiếp ký tự mới vào chuỗi, biến đổi chuỗi gốc thành chữ in hoa.'
            }
          ],
          executionResult: {
            sampleInput: 'Lap Trinh C++ Nam 2026: Rat Vui & Bo Ich!',
            sampleOutput: `=== CHUONG TRINH PHAN TICH VAN BAN (C++ STRING) ===
Nhap mot doan van ban bat ky: Lap Trinh C++ Nam 2026: Rat Vui & Bo Ich!

--------------------------------------------------
KET QUA PHAN TICH CHUOI (Do dai = 40 ky tu):
- So chu cai in hoa   : 7
- So chu cai in thuong : 19
- So chu so (0 - 9)   : 4
- So khoang trang      : 7
- So ky tu dac biet    : 3
--------------------------------------------------
Van ban sau khi IN HOA toan bo:
LAP TRINH C++ NAM 2026: RAT VUI & BO ICH!`
          },
          analysisOfResult: 'Chuỗi dài 40 ký tự. Các chữ hoa L, T, C, N, R, V, B, I được đếm chính xác; số 2026 gồm 4 chữ số; các ký tự đặc biệt gồm :, &, ! được phân loại chuẩn xác.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'In ký tự kèm chỉ số',
          task: 'Nhập một từ đơn (ví dụ: "HELLO"). In ra từng ký tự kèm theo chỉ số của nó trên từng dòng: Index 0: H, Index 1: E...',
          hints: ['Dùng vòng for với i từ 0 đến s.length() - 1, in ra i và s[i].'],
          expectedOutput: 'Index 0: H ... Index 4: O'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Đếm số lượng nguyên âm tiếng Anh',
          task: 'Nhập vào một câu tiếng Anh. Đếm xem trong câu có bao nhiêu nguyên âm (a, e, i, o, u, bất kể hoa hay thường).',
          hints: ['Chuyển ký tự về tolower(c) rồi so sánh: c == \'a\' || c == \'e\' || c == \'i\' || c == \'o\' || c == \'u\'.'],
          expectedOutput: 'Nhap: "Hello World" -> So nguyen am: 3 (e, o, o)'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Mật mã Caesar dịch chuyển ký tự (+3)',
          task: 'Viết chương trình mã hóa một thông điệp bằng cách dịch chuyển mỗi chữ cái tiếng Anh đi 3 vị trí (A -> D, B -> E, ..., X -> A, Y -> B, Z -> C). Giữ nguyên khoảng trắng và chữ số.',
          hints: ['Với chữ hoa: c = \'A\' + (c - \'A\' + 3) % 26; Tương tự với chữ thường dùng \'a\'.'],
          expectedOutput: 'Nhap: "HELLO ABC" -> Ma hoa: "KHOOR DEF"'
        }
      ],
      commonErrors: [
        {
          name: 'Lỗi truy cập vượt biên chuỗi (Out of Bounds)',
          symptom: 'Chương trình in ra ký tự lạ rác hoặc bị văng lỗi Crash (Segmentation Fault).',
          rootCause: 'Chuỗi dài N ký tự thì chỉ số cao nhất là N - 1. Dùng vòng for i <= s.length() sẽ truy cập vào phần tử s[N] không tồn tại.',
          howToFix: 'Luôn dùng điều kiện i < s.length() (dấu nhỏ hơn nghiêm ngặt, không dùng <=).',
          badCode: `for (size_t i = 0; i <= s.length(); ++i) { // LỖI LỆCH 1: s[s.length()] bị vượt biên!
    cout << s[i];
}`,
          goodCode: `for (size_t i = 0; i < s.length(); ++i) { // ĐÚNG CHUẨN
    cout << s[i];
}`
        },
        {
          name: 'Lầm tưởng hàm toupper() tự thay đổi ký tự',
          symptom: 'Gọi toupper(c) nhưng chuỗi in ra vẫn là chữ thường nguyên vẹn.',
          rootCause: 'Hàm toupper(c) là hàm trả về giá trị ký tự hoa mới, nó KHÔNG tự biến đổi biến c nếu bạn không gán ngược lại.',
          howToFix: 'Bắt buộc phải gán lại kết quả: c = toupper(c);',
          badCode: `for (char &c : s) {
    toupper(c); // Vô ích! Không gán lại!
}`,
          goodCode: `for (char &c : s) {
    c = toupper(c); // Gán ngược lại vào ký tự
}`
        },
        {
          name: 'Cảnh báo ép kiểu Signed / Unsigned Comparison',
          symptom: 'Trình biên dịch cảnh báo: comparison between signed and unsigned integer expressions.',
          rootCause: 'Biến int i là số nguyên có dấu, trong khi s.length() trả về kiểu size_t (số nguyên không dấu).',
          howToFix: 'Khai báo biến đếm i với kiểu size_t: for (size_t i = 0; i < s.length(); ++i).',
          badCode: `for (int i = 0; i < s.length(); ++i) // Cảnh báo trình biên dịch`,
          goodCode: `for (size_t i = 0; i < s.length(); ++i) // Chuẩn sạch sẽ không warning`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Xác định chỉ số đầu và cuối',
          description: 'Cho chuỗi `string s = "Computer";`. Xác định độ dài `s.length()`, ký tự tại `s[0]` và ký tự tại `s[s.length() - 1]`.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Đảo ngược chuỗi bằng vòng lặp',
          description: 'Viết chương trình nhập vào một chuỗi, sử dụng vòng lặp duyệt ngược từ cuối về đầu để in ra chuỗi đảo ngược của chuỗi đó.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Kiểm tra độ mạnh mật khẩu',
          description: 'Viết chương trình nhập mật khẩu dạng chuỗi. Đánh giá mật khẩu là "MANH" nếu thỏa mãn: Độ dài >= 8, có ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số và 1 ký tự đặc biệt. Ngược lại in "YEU" kèm lý do vi phạm.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Đếm tần suất xuất hiện của các chữ cái (Histogram)',
          description: 'Nhập một đoạn văn tiếng Anh. Đếm số lần xuất hiện của từng chữ cái từ A đến Z (không phân biệt hoa thường) và in ra các chữ cái có số lần xuất hiện lớn hơn 0.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Nếu chuỗi s có độ dài là 10 (s.length() == 10), thì chỉ số của ký tự cuối cùng trong chuỗi là bao nhiêu?',
          options: [
            '10',
            '9',
            '11',
            '0'
          ],
          correctIndex: 1,
          explanation: 'Vì chuỗi trong C++ được đánh chỉ số từ 0 (0-based indexing), chuỗi có 10 ký tự sẽ có chỉ số chạy từ 0 đến 9. Ký tự cuối cùng nằm ở vị trí s[9].'
        },
        {
          id: 2,
          question: 'Hàm nào trong thư viện <cctype> dùng để kiểm tra xem một ký tự có phải là chữ số (từ \'0\' đến \'9\') hay không?',
          options: [
            'isnumber()',
            'isalpha()',
            'isdigit()',
            'isalnum()'
          ],
          correctIndex: 2,
          explanation: 'Hàm isdigit(c) trong thư viện <cctype> trả về giá trị khác 0 nếu ký tự c là một chữ số thập phân (\'0\' đến \'9\').'
        },
        {
          id: 3,
          question: 'Điểm khác biệt chính giữa toán tử s[i] và phương thức s.at(i) là gì?',
          options: [
            's[i] dùng cho số nguyên, s.at(i) dùng cho ký tự',
            's.at(i) có kiểm tra biên an toàn và ném ngoại lệ out_of_range nếu vượt biên, trong khi s[i] không kiểm tra',
            's[i] chạy chậm hơn s.at(i)',
            'Không có điểm khác biệt nào'
          ],
          correctIndex: 1,
          explanation: 'Phương thức s.at(i) thực hiện bounds-checking (kiểm tra giới hạn chỉ số) an toàn và sẽ ném ngoại lệ std::out_of_range nếu i không hợp lệ, giúp chương trình tránh đọc ô nhớ rác bất định.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 's[0] & s[len - 1]', val: 'Ký tự đầu tiên và ký tự cuối cùng của chuỗi' },
          { key: 's.length() / s.size()', val: 'Trả về độ dài chuỗi kiểu size_t' },
          { key: 's.empty()', val: 'Kiểm tra chuỗi rỗng nhanh và tối ưu' },
          { key: 'for (char c : s)', val: 'Duyệt từng ký tự dạng Range-based tiện lợi' },
          { key: '<cctype>', val: 'Bộ công cụ: isupper, islower, isdigit, isalpha, toupper, tolower' }
        ],
        coreTakeaway: 'Xem chuỗi như một dãy ký tự có chỉ số từ 0 đến length - 1. Kết hợp vòng lặp duyệt ký tự với thư viện <cctype> là chìa khóa giải quyết mọi bài toán phân tích văn bản.'
      },
      checklist: [
        'Tôi nắm vững nguyên tắc chỉ số 0-based và luôn duyệt với điều kiện i < s.length().',
        'Tôi phân biệt được sự an toàn của s.at(i) so với s[i].',
        'Tôi biết cách dùng Range-based for với tham chiếu char &c để thay đổi nội dung chuỗi.',
        'Tôi vận dụng thành thạo các hàm trong thư viện <cctype> để phân loại và chuyển đổi ký tự.'
      ],
      extendedChallenge: {
        title: 'Bộ nén chuỗi theo thuật toán RLE (Run-Length Encoding)',
        scenario: 'Thuật toán nén chuỗi RLE nén các ký tự liên tiếp lặp lại thành ký tự kèm số lần xuất hiện. Ví dụ chuỗi "AAAAABBBCCDAA" được nén thành "A5B3C2D1A2".',
        challengeTask: 'Viết chương trình nhập chuỗi bất kỳ, sử dụng vòng lặp duyệt ký tự để nén chuỗi theo định dạng RLE. Sau đó viết thuật toán giải nén từ chuỗi mã hóa quay về chuỗi gốc.',
        thoughtGuidance: 'Dùng biến đếm count = 1. Khi s[i] == s[i+1] thì tăng count. Khi khác nhau thì nối ký tự và số count vào chuỗi kết quả.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 3: TÌM KIẾM, CẮT GHÉP & BÀI TOÁN CHUẨN HÓA CHUỖI CƠ BẢN (L17)
    // -------------------------------------------------------------
    {
      id: 'CH05-L03',
      lessonNumber: 3,
      chapterNumber: 5,
      title: 'Tìm Kiếm, Cắt Ghép & Bài Toán Chuẩn Hóa Chuỗi Cơ Bản',
      readingTimeMinutes: 55,
      moodleType: 'VPL Bài tập chuẩn hóa xâu họ tên sinh viên và kiểm tra Palindrome',
      objectives: [
        'Sử dụng thành thạo phương thức tìm kiếm chuỗi con s.find(sub) và hiểu rõ giá trị hằng số đặc biệt std::string::npos.',
        'Nắm vững cú pháp và cơ chế trích xuất chuỗi con với phương thức s.substr(pos, count).',
        'Vận dụng thành thạo các thao tác biến đổi chuỗi nâng cao: s.insert(), s.erase(), s.replace().',
        'Giải quyết trọn vẹn thuật toán kiểm tra chuỗi đối xứng (Palindrome) bằng kỹ thuật hai con trỏ (Two Pointers) hoặc đảo ngược chuỗi.',
        'Xây dựng thuật toán thực tế: Chuẩn hóa chuỗi họ tên người Việt Nam (xóa khoảng trắng thừa ở đầu, cuối và giữa các từ; viết hoa chữ cái đầu và viết thường các chữ còn lại).'
      ],
      prerequisites: [
        'Đã học xong Bài 1 và Bài 2 của Chương 5.'
      ],
      leadIn: {
        hook: 'Khi người dùng đăng ký tài khoản và vô tình gõ tên là "   ngUyen    vAn   a   ", làm thế nào hệ thống ngân hàng có thể tự động biến đổi thành "Nguyen Van A" trang trọng và chính xác để in lên thẻ ATM?',
        question: 'Làm sao để máy tính tự động tìm và thay thế tất cả các từ thô tục, từ cấm trong một bài viết trên diễn đàn mạng xã hội?',
        realWorldScenario: 'Chức năng Tìm kiếm và Thay thế (Ctrl + F / Ctrl + H) trong Word, công cụ kiểm duyệt nội dung tự động (Content Moderation), và bước tiền xử lý làm sạch dữ liệu (Data Cleaning) trong mọi hệ thống phần mềm quản lý.'
      },
      theorySections: [
        {
          title: '1. Tìm kiếm chuỗi con với find() và hằng số string::npos',
          content: 'Phương thức `s.find(sub, start_pos)` dùng để tìm vị trí xuất hiện của chuỗi con `sub` bên trong chuỗi `s` (bắt đầu tìm từ vị trí `start_pos`, mặc định là 0):\n- **Nếu tìm thấy:** Trả về chỉ số vị trí xuất hiện đầu tiên (kiểu `size_t`, bắt đầu từ 0).\n- **Nếu KHÔNG tìm thấy:** Trả về hằng số tĩnh đặc biệt `std::string::npos` (viết tắt của *no-position* - một số nguyên không dấu có giá trị cực đại biểu thị vị trí không hợp lệ).\n\nCú pháp kiểm tra tìm thấy chuẩn mực:\n```cpp\nsize_t pos = s.find(\"abc\");\nif (pos != string::npos) {\n    cout << \"Tim thay tai vi tri: \" << pos << endl;\n} else {\n    cout << \"Khong tim thay!\" << endl;\n}\n```\n*Lưu ý:* Tuyệt đối không so sánh `pos == -1` vì `pos` là kiểu số không dấu (`size_t`), so sánh với `string::npos` mới là chuẩn mực C++ an toàn.'
        },
        {
          title: '2. Cắt chuỗi với substr() và các thao tác insert(), erase(), replace()',
          content: '- **Cắt chuỗi con `s.substr(pos, count)`:**\n  - Trích xuất ra một chuỗi con bắt đầu từ chỉ số `pos`, lấy tối đa `count` ký tự.\n  - Nếu bỏ qua tham số `count` (ví dụ: `s.substr(pos)`), hàm sẽ tự động cắt từ `pos` cho đến tận ký tự cuối cùng của chuỗi.\n  - *Ví dụ:* `string s = \"LapTrinh\"; s.substr(3, 5);` $\\rightarrow$ kết quả là `\"Trinh\"`.\n\n- **Xóa ký tự `s.erase(pos, count)`:** Xóa `count` ký tự bắt đầu từ chỉ số `pos`.\n- **Chèn chuỗi `s.insert(pos, str)`:** Chèn chuỗi `str` vào trước chỉ số `pos`.\n- **Thay thế chuỗi `s.replace(pos, count, new_str)`:** Thay thế đoạn ký tự có độ dài `count` bắt đầu từ `pos` bằng chuỗi `new_str`.'
        },
        {
          title: '3. Thuật toán chuẩn hóa xâu họ tên tiếng Việt (Name Normalization)',
          content: 'Đây là bài toán kinh điển trong kỳ thi kết thúc học phần và phỏng vấn lập trình. Quy trình 4 bước chuẩn hóa:\n- **Bước 1 (Xóa khoảng trắng ở đầu chuỗi - Trim Left):** Chừng nào ký tự đầu tiên còn là dấu cách (`s[0] == \' \'`), gọi `s.erase(0, 1)`.\n- **Bước 2 (Xóa khoảng trắng ở cuối chuỗi - Trim Right):** Chừng nào ký tự cuối cùng còn là dấu cách (`s[s.length() - 1] == \' \'`), gọi `s.erase(s.length() - 1, 1)`.\n- **Bước 3 (Thu gọn khoảng trắng ở giữa):** Duyệt chuỗi, nếu phát hiện hai dấu cách đứng liền kề nhau (`s[i] == \' \' && s[i + 1] == \' \'`), gọi `s.erase(i, 1)` và giảm biến đếm `i--` để không bị nhảy cóc ký tự.\n- **Bước 4 (Viết hoa chữ cái đầu từ, viết thường chữ sau):** Duyệt chuỗi, chữ cái đầu tiên luôn in hoa (`s[0] = toupper(s[0])`). Ký tự đứng ngay sau dấu cách là chữ cái đầu từ $\\rightarrow$ in hoa (`toupper`), các ký tự còn lại đổi thành chữ thường (`tolower`).'
        }
      ],
      examples: [
        {
          title: 'Ví dụ: Chương trình chuẩn hóa họ tên và tách Họ - Tên chính thức',
          problem: 'Nhập vào một chuỗi họ tên bất kỳ bị nhập lỗi (có khoảng trắng thừa ở đầu, cuối, giữa và viết hoa thường lộn xộn, ví dụ: "   ngUYen   vAn   aN   "). Viết chương trình: 1. Chuẩn hóa chuỗi họ tên về dạng chuẩn ("Nguyen Van An"); 2. Tách và in riêng: Họ (Họ đầu tiên) và Tên (Từ cuối cùng của tên).',
          analysis: {
            input: 'rawName (string có khoảng trắng thừa và chữ hoa thường lộn xộn)',
            output: 'Họ tên đã chuẩn hóa, Họ riêng, Tên riêng.',
            idea: 'Áp dụng quy trình chuẩn hóa 4 bước dùng erase() và toupper()/tolower(). Sau khi có chuỗi chuẩn, dùng s.find(\' \') lấy Họ và s.rfind(\' \') lấy Tên.',
            algorithm: 'Bước 1: getline(cin, s)\nBước 2: Xóa cách đầu (while s.length() > 0 && s[0] == \' \') -> s.erase(0, 1)\nBước 3: Xóa cách cuối (while s.length() > 0 && s[s.length()-1] == \' \') -> s.erase(s.length()-1, 1)\nBước 4: Xóa cách giữa: for i: if (s[i] == \' \' && s[i+1] == \' \') { s.erase(i, 1); i--; }\nBước 5: Chuyển toàn bộ về chữ thường, sau đó viết hoa chữ cái đầu chuỗi và sau dấu cách.\nBước 6: Tách họ: s.substr(0, firstSpace); Tách tên: s.substr(lastSpace + 1).'
          },
          code: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

// Ham chuan hoa chuoi ho ten
void normalizeName(string &s) {
    if (s.empty()) return;

    // 1. Xoa khoang trang o dau chuoi (Trim Left)
    while (!s.empty() && s[0] == ' ') {
        s.erase(0, 1);
    }

    // 2. Xoa khoang trang o cuoi chuoi (Trim Right)
    while (!s.empty() && s[s.length() - 1] == ' ') {
        s.erase(s.length() - 1, 1);
    }

    // 3. Xoa khoang trang thua o giua (Chi giu lai 1 dau cach giua cac tu)
    for (size_t i = 0; i < s.length(); ++i) {
        if (s[i] == ' ' && i + 1 < s.length() && s[i + 1] == ' ') {
            s.erase(i, 1);
            i--; // Lui bien dem de kiem tra tiep vi tri vua bi xoa
        }
    }

    if (s.empty()) return;

    // 4. Chuyen toan bo chuoi thanh chu thuong truoc
    for (char &c : s) {
        c = tolower(c);
    }

    // 5. Viet hoa chu cai dau tien cua moi tu
    s[0] = toupper(s[0]);
    for (size_t i = 0; i < s.length(); ++i) {
        if (s[i] == ' ' && i + 1 < s.length()) {
            s[i + 1] = toupper(s[i + 1]);
        }
    }
}

int main() {
    string fullName;
    cout << "=== UNG DUNG CHUAN HOA HO TEN SINH VIEN ===" << endl;
    cout << "Nhap ho va ten can chuan hoa: ";
    getline(cin, fullName);

    cout << "------------------------------------------" << endl;
    cout << "Chuoi ban dau     : \"" << fullName << "\"" << endl;

    // Goi ham chuan hoa
    normalizeName(fullName);
    cout << "Chuoi sau chuan hoa: \"" << fullName << "\"" << endl;

    if (fullName.empty()) {
        cout << "[Loi]: Chuoi khong co noi dung hop le!" << endl;
        return 0;
    }

    // Tach Ho va Ten chinh thuc
    size_t firstSpace = fullName.find(' ');
    size_t lastSpace = fullName.rfind(' '); // Tim dau cach cuoi cung tu phai sang

    if (firstSpace == string::npos) {
        // Truong hop ten chi co 1 tu duy nhat (khong co dau cach)
        cout << "Ho va Ten chi co 1 tu duy nhat: " << fullName << endl;
    } else {
        string ho = fullName.substr(0, firstSpace);
        string ten = fullName.substr(lastSpace + 1);
        string tenDem = fullName.substr(firstSpace + 1, lastSpace - firstSpace - 1);

        cout << "------------------------------------------" << endl;
        cout << "Phan tich thanh phan ten:" << endl;
        cout << "- Ho              : " << ho << endl;
        if (!tenDem.empty()) {
            cout << "- Ten dem         : " << tenDem << endl;
        }
        cout << "- Ten chinh       : " << ten << endl;
    }

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 's.erase(0, 1);',
              explanation: 'Xóa 1 ký tự bắt đầu từ chỉ số 0, giúp loại bỏ các dấu cách vô nghĩa ở đầu chuỗi.'
            },
            {
              lineOrBlock: 's.erase(i, 1); i--;',
              explanation: 'Khi xóa 1 ký tự, các ký tự phía sau bị trượt sang trái. Bắt buộc phải giảm i-- để lượt lặp tiếp theo không bỏ sót ký tự vừa bị trượt.'
            },
            {
              lineOrBlock: 's.find(\' \') vs s.rfind(\' \')',
              explanation: 'find tìm vị trí dấu cách đầu tiên từ trái sang để tách Họ; rfind tìm vị trí dấu cách cuối cùng từ phải sang để tách Tên.'
            },
            {
              lineOrBlock: 'fullName.substr(lastSpace + 1);',
              explanation: 'Cắt chuỗi từ vị trí ngay sau dấu cách cuối cùng đến hết chuỗi để lấy Tên chính xác.'
            }
          ],
          executionResult: {
            sampleInput: '   ngUYen    vAn    aN   ',
            sampleOutput: `=== UNG DUNG CHUAN HOA HO TEN SINH VIEN ===
Nhap ho va ten can chuan hoa:    ngUYen    vAn    aN   
------------------------------------------
Chuoi ban dau     : "   ngUYen    vAn    aN   "
Chuoi sau chuan hoa: "Nguyen Van An"
------------------------------------------
Phan tich thanh phan ten:
- Ho              : Nguyen
- Ten dem         : Van
- Ten chinh       : An`
          },
          analysisOfResult: 'Các khoảng trắng dư thừa ở đầu, cuối và giữa các từ đều bị loại bỏ sạch sẽ. Các chữ cái đầu từ được viết hoa chuẩn mực; Họ ("Nguyen"), Tên đệm ("Van") và Tên chính ("An") được bóc tách hoàn hảo.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Trích xuất tên miền website',
          task: 'Cho chuỗi URL trang web dạng "https://google.com/search". Hãy dùng find() và substr() để trích xuất ra chuỗi con "google.com".',
          hints: ['Tìm vị trí "//", cộng thêm 2 để lấy vị trí bắt đầu; tìm dấu "/" tiếp theo để tính độ dài cần cắt.'],
          expectedOutput: 'Domain: google.com'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Kiểm tra chuỗi đối xứng (Palindrome)',
          task: 'Nhập một chuỗi ký tự không dấu cách (ví dụ: "radar", "level", "madam"). Viết chương trình kiểm tra xem chuỗi có đối xứng hay không (đọc xuôi đọc ngược đều giống nhau).',
          hints: ['Dùng 2 con trỏ: left = 0, right = s.length() - 1. Lặp while (left < right): nếu s[left] != s[right] thì kết luận không đối xứng; left++, right--.'],
          expectedOutput: 'Nhap: "radar" -> Day la chuoi doi xung (Palindrome)'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Bộ lọc từ cấm và thay thế ký tự sao (*)',
          task: 'Viết chương trình tìm tất cả các lần xuất hiện của từ cấm "spam" trong một đoạn văn và thay thế từ đó bằng chuỗi "***" sử dụng vòng lặp kết hợp s.find() và s.replace().',
          hints: ['while ((pos = s.find("spam")) != string::npos) { s.replace(pos, 4, "***"); }'],
          expectedOutput: 'Nhap: "No spam here, do not spam" -> "No *** here, do not ***"'
        }
      ],
      commonErrors: [
        {
          name: 'So sánh pos == -1 khi dùng s.find()',
          symptom: 'Biên dịch có cảnh báo hoặc điều kiện if bị chạy sai trên một số hệ thống 64-bit.',
          rootCause: 'Phương thức find() trả về kiểu size_t (số nguyên không dấu 64-bit). So sánh số không dấu với số có dấu -1 là lỗi nghiêm trọng.',
          howToFix: 'Luôn luôn so sánh với hằng số chuẩn: pos == string::npos hoặc pos != string::npos.',
          badCode: `if (s.find("abc") == -1) // SAI CHUẨN NGUY HIỂM`,
          goodCode: `if (s.find("abc") == string::npos) // ĐÚNG CHUẨN C++`
        },
        {
          name: 'Nhầm lẫn tham số thứ hai của hàm s.substr()',
          symptom: 'Chuỗi con cắt ra bị dài quá mức hoặc gây lỗi vượt biên bộ nhớ.',
          rootCause: 'Nghĩ rằng substr(pos, end) nhận chỉ số kết thúc (như một số ngôn ngữ khác như Java, Python), nhưng trong C++, tham số thứ hai là ĐỘ DÀI SỐ KÝ TỰ CẦN CẮT (count).',
          howToFix: 'Ghi nhớ công thức: s.substr(vị_trí_bắt_đầu, số_lượng_ký_tự_cần_lấy).',
          badCode: `// Muốn cắt từ vị trí 2 đến vị trí 5 (3 ký tự) nhưng lại truyền 5:
string sub = s.substr(2, 5); // Cắt tới 5 ký tự (từ 2 đến 6)!`,
          goodCode: `string sub = s.substr(2, 3); // Lấy đúng 3 ký tự từ vị trí 2`
        },
        {
          name: 'Quên giảm i-- khi gọi erase() trong vòng lặp',
          symptom: 'Chương trình không xóa sạch được hai dấu cách đứng liền kề (vẫn còn sót lại dấu cách thừa).',
          rootCause: 'Khi xóa một phần tử ở vị trí i, phần tử tiếp theo trượt về vị trí i. Vòng lặp tự động ++i ở cuối lượt làm bỏ qua phần tử vừa trượt tới.',
          howToFix: 'Ngay sau khi gọi s.erase(i, 1), bắt buộc phải gọi i--;',
          badCode: `if (s[i] == ' ' && s[i+1] == ' ') {
    s.erase(i, 1); // Quên i-- -> Bỏ sót dấu cách thứ 3, thứ 4!
}`,
          goodCode: `if (s[i] == ' ' && s[i+1] == ' ') {
    s.erase(i, 1);
    i--; // Đảm bảo kiểm tra lại vị trí vừa trượt đến
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Ý nghĩa của string::npos',
          description: 'Nêu ý nghĩa của hằng số `std::string::npos` trong C++. Khi nào phương thức `s.find()` trả về giá trị này?'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Dự đoán kết quả của s.substr()',
          description: 'Cho chuỗi `string s = "LapTrinhNgonNguCPP";`. Cho biết kết quả của `s.substr(0, 8)` và `s.substr(15)`.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Đếm số từ trong một câu văn',
          description: 'Viết chương trình nhập vào một câu văn bất kỳ (có thể có nhiều khoảng trắng thừa). Chuẩn hóa câu văn và đếm chính xác xem câu văn đó có bao nhiêu từ.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Kiểm tra Palindrome nâng cao (Bỏ qua ký tự đặc biệt)',
          description: 'Một chuỗi được coi là đối xứng nếu đọc xuôi đọc ngược giống nhau khi đã loại bỏ toàn bộ khoảng trắng, dấu câu và không phân biệt hoa thường. Ví dụ: "A man, a plan, a canal: Panama" là chuỗi đối xứng. Viết chương trình kiểm tra tính chất này.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Giá trị trả về của phương thức s.find(sub) khi KHÔNG tìm thấy chuỗi con sub trong chuỗi s là gì?',
          options: [
            '-1',
            '0',
            'false',
            'std::string::npos'
          ],
          correctIndex: 3,
          explanation: 'Phương thức s.find() trả về hằng số tĩnh đặc biệt std::string::npos khi không tìm thấy chuỗi con cần tìm.'
        },
        {
          id: 2,
          question: 'Lệnh s.substr(3, 4) trên chuỗi s = \"ABCDEFGHI\" sẽ trả về chuỗi con nào?',
          options: [
            '\"DEFG\"',
            '\"CDEF\"',
            '\"DEF\"',
            '\"CDE\"'
          ],
          correctIndex: 0,
          explanation: 'Chỉ số 3 là ký tự \'D\' (0:A, 1:B, 2:C, 3:D). Lấy 4 ký tự tính từ vị trí 3 sẽ được các ký tự \'D\', \'E\', \'F\', \'G\', do đó kết quả là \"DEFG\".'
        },
        {
          id: 3,
          question: 'Khi sử dụng s.erase(i, 1) để xóa các phần tử liên tiếp thỏa mãn điều kiện bên trong vòng lặp for, tại sao ta cần gọi i-- ngay sau đó?',
          options: [
            'Để vòng lặp chạy nhanh hơn',
            'Vì khi xóa một phần tử, các phần tử phía sau bị dồn sang trái một vị trí; nếu không giảm i thì phần tử vừa dồn tới sẽ bị bỏ sót ở lượt lặp tiếp theo',
            'Để đưa chuỗi về chuỗi rỗng',
            'Vì cú pháp C++ bắt buộc phải có i-- sau erase'
          ],
          correctIndex: 1,
          explanation: 'Phép xóa phần tử làm giảm độ dài chuỗi và kéo toàn bộ các phần tử phía sau dồn sang trái. Việc lùi i-- giúp vòng lặp kiểm tra lại đúng vị trí chỉ số i vừa nhận phần tử mới trượt sang.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 's.find(sub)', val: 'Tìm chuỗi con, trả về vị trí hoặc string::npos' },
          { key: 's.substr(pos, count)', val: 'Cắt chuỗi con từ pos lấy count ký tự' },
          { key: 's.erase(pos, count)', val: 'Xóa ký tự ra khỏi chuỗi' },
          { key: 's.replace(pos, len, new)', val: 'Thay thế đoạn ký tự bằng chuỗi mới' },
          { key: 'Chuẩn hóa họ tên', val: 'Xóa cách đầu -> Xóa cách cuối -> Xóa cách đôi -> Viết hoa đầu từ' }
        ],
        coreTakeaway: 'Làm chủ find(), substr() và erase() cho phép bạn xử lý và tái cấu trúc bất kỳ dạng dữ liệu văn bản nào, từ chuẩn hóa họ tên đến lọc văn bản tự động.'
      },
      checklist: [
        'Tôi biết cách dùng s.find() và luôn so sánh kết quả với string::npos.',
        'Tôi hiểu rõ tham số thứ hai của s.substr() là số lượng ký tự cần lấy.',
        'Tôi hiểu cơ chế trượt phần tử khi dùng s.erase() và biết cách điều chỉnh biến đếm i--.',
        'Tôi tự tin lập trình giải thuật chuẩn hóa họ tên tiếng Việt chuẩn mực.'
      ],
      extendedChallenge: {
        title: 'Bộ phân tích và trích xuất địa chỉ Email (Email Address Parser)',
        scenario: 'Một bức thư điện tử chứa nhiều địa chỉ email thô, ví dụ: "Lien he voi chung toi qua: hotro.khachhang@congty.com.vn hoac tuyendung@fpt.edu.vn".',
        challengeTask: 'Viết chương trình tìm tất cả các địa chỉ email trong văn bản. Với mỗi email tìm được, hãy bóc tách và in ra: Tên người dùng (phần trước @) và Tên miền dịch vụ (phần sau @).',
        thoughtGuidance: 'Dùng vòng lặp tìm ký tự \'@\', sau đó quét sang trái tìm điểm bắt đầu username và quét sang phải tìm điểm kết thúc domain.'
      }
    }
  ]
};
