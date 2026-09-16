import { LessonContent, ChapterData } from './chapter1Data.ts';

export const CHAPTER_2_DATA: ChapterData = {
  chapterId: 2,
  chapterCode: 'CH02',
  title: 'Cơ Sở Ngôn Ngữ C++',
  summary: 'Làm chủ các viên gạch nền móng của thế giới C++: Hiểu bản chất biến và ô nhớ RAM, quy tắc đặt tên định danh, hệ thống kiểu dữ liệu nguyên thủy (int, float, double, char, bool), nguy cơ tràn số (overflow), hằng số const, các phép toán số học & ép kiểu, cùng kỹ thuật nhập xuất an toàn với cin/cout.',
  totalLessons: 4,
  lessons: [
    {
      id: 'CH02-L01',
      lessonNumber: 1,
      chapterNumber: 2,
      title: 'Định Danh, Từ Khóa & Bản Chất Biến (Variable) Trong Ô Nhớ',
      readingTimeMinutes: 45,
      moodleType: 'Page + Sơ đồ trực quan hóa RAM + Quiz',
      objectives: [
        'Giải thích được bản chất vật lý của Biến (Variable) như một nhãn tên đại diện cho một vùng nhớ trên thanh RAM.',
        'Phân biệt được rõ ràng giữa Từ khóa (Keywords) và Tên định danh do lập trình viên tự đặt (Identifiers).',
        'Nắm vững và áp dụng chính xác 4 quy tắc bắt buộc khi đặt tên định danh trong C++.',
        'Thực hành văn hóa đặt tên biến chuyên nghiệp theo chuẩn camelCase hoặc snake_case có tính gợi nghĩa cao.',
        'Thực hiện khai báo, khởi tạo giá trị ban đầu và hiểu mối nguy hiểm của "giá trị rác" (garbage value).'
      ],
      prerequisites: [
        'Đã học xong Chương 1 (Cấu trúc chương trình C++ và hàm main).'
      ],
      leadIn: {
        hook: 'Hãy tưởng tượng bưu điện có hàng triệu hòm thư đánh số từ 0x00000000 đến 0xFFFFFFFF. Nếu bạn muốn gửi thư cho bạn mình, bạn muốn nhớ mã số hex loằng ngoằng kia hay bạn muốn dán một chiếc nhãn tên: "HòmThư_Tuấn"?',
        question: 'Biến trong lập trình sinh ra để làm gì? Điều gì xảy ra bên trong bộ nhớ RAM khi bạn gõ câu lệnh: int x = 10;?',
        realWorldScenario: 'Trong máy tính, RAM là một dải hàng tỷ ngăn kéo được đánh địa chỉ bằng các con số phức tạp. Con người không thể ghi nhớ các địa chỉ số này. Do đó, ngôn ngữ lập trình cho phép chúng ta "đặt tên cho ô nhớ". Chiếc nhãn đó được gọi là Biến (Variable). Giá trị trong ô nhớ có thể thay đổi được trong suốt thời gian chương trình vận hành.'
      },
      theorySections: [
        {
          title: '1. Bản chất Biến (Variable) và Ô nhớ RAM',
          content: 'Biến là một vùng nhớ được đặt tên trong RAM dùng để lưu trữ dữ liệu mà chương trình có thể đọc và sửa đổi khi chạy.\n\nMột biến hoàn chỉnh luôn gắn liền với 4 yếu tố cốt lõi:\n1. Tên biến (Identifier): Tên định danh để người lập trình gọi đến ô nhớ.\n2. Kiểu dữ liệu (Data Type): Quyết định ô nhớ chiếm bao nhiêu byte RAM và chứa loại dữ liệu gì (số nguyên, số thực, ký tự...).\n3. Địa chỉ bộ nhớ (Memory Address): Vị trí thực tế của ô nhớ trên RAM (ví dụ: `0x7ffde234`).\n4. Giá trị lưu trữ (Value): Dữ liệu thực tế đang nằm bên trong các bit của ô nhớ đó.',
          keyPoints: [
            'Cú pháp khai báo: <Kiểu_dữ_liệu> <Tên_biến>; (Ví dụ: int age;)',
            'Khởi tạo biến: <Kiểu_dữ_liệu> <Tên_biến> = <Giá_trị>; (Ví dụ: int age = 18;)'
          ]
        },
        {
          title: '2. Từ khóa (Keywords) trong C++',
          content: 'Từ khóa là các từ ngữ đã được ngôn ngữ C++ dành riêng cho mục đích đặc biệt của hệ thống (ví dụ: `int`, `return`, `using`, `namespace`, `if`, `for`, `while`...).\n\nQuy tắc bất biến: Lập trình viên TUYỆT ĐỐI KHÔNG được dùng từ khóa để đặt tên cho biến, hàm hay lớp.',
          callout: {
            type: 'warning',
            text: '⚠️ Không đặt tên biến trùng từ khóa: Khai báo "int return = 5;" hoặc "int float = 10;" sẽ khiến trình biên dịch báo lỗi cú pháp ngay lập tức.'
          }
        },
        {
          title: '3. Quy tắc bắt buộc & Văn hóa đặt tên định danh (Naming Convention)',
          content: '4 quy tắc bắt buộc của trình biên dịch C++:\n1. Chỉ được chứa chữ cái (a-z, A-Z), chữ số (0-9) và dấu gạch dưới (_).\n2. KÝ TỰ ĐẦU TIÊN BẮT BUỘC PHẢI LÀ CHỮ CÁI hoặc dấu gạch dưới (Không được bắt đầu bằng số!).\n3. Tuyệt đối KHÔNG chứa khoảng trắng (space) hay ký tự đặc biệt (@, #, $, %, -, +, *...).\n4. Phân biệt hoa thường (score, Score, SCORE là 3 biến hoàn toàn khác nhau).\n\nChuẩn mực viết code sạch (Clean Code):\n- Đặt tên có nghĩa: Dùng `studentAge`, `totalScore` thay vì `x`, `y`, `a`, `b` vô nghĩa.\n- Quy ước camelCase: `totalPrice`, `studentCount` (chữ cái đầu viết thường, các từ sau viết hoa chữ đầu).\n- Quy ước snake_case: `total_price`, `student_count` (ngăn cách bằng dấu gạch dưới).'
        },
        {
          title: '4. Nguy cơ "Giá trị rác" (Garbage Value) khi quên khởi tạo',
          content: 'Khi bạn chỉ khai báo `int score;` mà không gán giá trị ban đầu, C++ sẽ KHÔNG tự động gán nó bằng 0 (khác với Java hay C#). Ô nhớ đó sẽ giữ nguyên bất kỳ bit nào còn sót lại từ các phần mềm khác từng dùng ô nhớ đó trước đó. Con số này hoàn toàn ngẫu nhiên và vô nghĩa, được gọi là "Giá trị rác" (Garbage Value).',
          callout: {
            type: 'tip',
            text: '💡 Thói quen vàng của kỹ sư: Luôn luôn khởi tạo giá trị ban đầu cho biến ngay khi khai báo! (Ví dụ: int count = 0; double total = 0.0;).'
          }
        }
      ],
      examples: [
        {
          title: 'Khai báo biến, gán giá trị và quan sát sự thay đổi của ô nhớ',
          problem: 'Viết chương trình minh họa việc khai báo biến số nguyên lưu số lượng sách, thực hiện tăng số lượng khi mua thêm và in giá trị ra màn hình.',
          analysis: {
            input: 'Không có dữ liệu nhập từ bàn phím.',
            output: 'In giá trị của biến qua từng thời điểm thay đổi.',
            idea: 'Sử dụng toán tử gán = để cập nhật giá trị mới cho biến.',
            algorithm: 'Bước 1: Khai báo biến bookCount và khởi tạo bằng 5.\nBước 2: In giá trị ban đầu.\nBước 3: Mua thêm 3 quyển, cập nhật bookCount = bookCount + 3.\nBước 4: In giá trị mới sau khi cập nhật.'
          },
          code: `#include <iostream>
using namespace std;

int main() {
    // 1. Khai bao va khoi tao gia tri ban dau
    int bookCount = 5;
    cout << "So luong sach ban dau: " << bookCount << endl;

    // 2. Thay doi gia tri trong o nho (mua them 3 quyen)
    bookCount = bookCount + 3;
    cout << "So luong sach sau khi mua them: " << bookCount << endl;

    // 3. Tang them 1 quyen (toan tu ++)
    bookCount++;
    cout << "So luong sach hien tai: " << bookCount << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'int bookCount = 5;',
              explanation: 'Hệ điều hành cấp phát 4 byte trong RAM, đặt tên là bookCount và ghi giá trị 5 vào ô nhớ.'
            },
            {
              lineOrBlock: 'bookCount = bookCount + 3;',
              explanation: 'CPU lấy giá trị 5 trong ô nhớ ra, cộng thêm 3 thành 8, sau đó ghi đè giá trị 8 vào ô nhớ bookCount.'
            },
            {
              lineOrBlock: 'bookCount++;',
              explanation: 'Lệnh tăng nhanh giá trị của ô nhớ lên 1 đơn vị (8 + 1 = 9).'
            }
          ],
          executionResult: {
            sampleOutput: `So luong sach ban dau: 5
So luong sach sau khi mua them: 8
So luong sach hien tai: 9`
          },
          analysisOfResult: 'Ô nhớ bookCount liên tục được cập nhật giá trị mới. Giá trị cũ bị ghi đè hoàn toàn mà không thể phục hồi.'
        }
      ],
      practices: [
        {
          level: 'Thực hành 1 (Cơ bản)',
          title: 'Phát hiện tên biến hợp lệ và không hợp lệ',
          task: 'Trong các tên biến sau, tên nào hợp lệ và tên nào bị lỗi biên dịch: 1stPlayer, my_score, total-amount, student Name, _counter, int, doubleScore?',
          hints: ['Xem lại 4 quy tắc: không bắt đầu bằng số, không có dấu cách, không trùng từ khóa, không chứa ký tự trừ (-).']
        },
        {
          level: 'Thực hành 2 (Củng cố)',
          title: 'Chứng minh hiện tượng "Giá trị rác"',
          task: 'Viết chương trình khai báo một biến "int testGarbage;" mà KHÔNG khởi tạo giá trị. In biến đó ra màn hình bằng cout. Quan sát con số kỳ lạ xuất hiện trên màn hình console.',
          hints: ['Chạy trên máy tính cá nhân để thấy con số rác như -858993460 hoặc một số khổng lồ ngẫu nhiên.']
        },
        {
          level: 'Thực hành 3 (Vận dụng)',
          title: 'Thuật toán tráo đổi giá trị 2 biến (Swap)',
          task: 'Cho 2 biến int a = 10, b = 20. Hãy dùng thêm một biến phụ (temp) để hoán đổi giá trị của a và b sao cho sau cùng a = 20, b = 10.',
          hints: ['Tưởng tượng bạn có 2 cốc nước A (nước cam) và B (nước chanh). Muốn tráo đổi chất lỏng, bạn cần thêm cốc rỗng Temp.']
        }
      ],
      commonErrors: [
        {
          name: 'Đặt tên biến bắt đầu bằng chữ số',
          symptom: 'Compiler báo: "error: expected unqualified-id before numeric constant".',
          rootCause: 'Vi phạm quy tắc định danh: 1score, 2nd_item.',
          compilerMessage: 'error: expected unqualified-id before numeric constant',
          howToFix: 'Chuyển chữ số ra phía sau hoặc dùng chữ: score1, secondItem.',
          badCode: 'int 1studentScore = 90;',
          goodCode: 'int studentScore1 = 90;'
        },
        {
          name: 'Dùng biến khi chưa khởi tạo giá trị (Uninitialized variable)',
          symptom: 'Chương trình tính toán ra kết quả sai lệch khổng lồ hoặc âm kỳ lạ.',
          rootCause: 'Biến chứa giá trị rác ngẫu nhiên của RAM.',
          howToFix: 'Luôn gán giá trị khởi điểm = 0 hoặc một giá trị mặc định hợp lý.',
          badCode: 'int sum;\nsum = sum + 5; // sum rác + 5 = số rác vô nghĩa!',
          goodCode: 'int sum = 0;\nsum = sum + 5; // 0 + 5 = 5 chuẩn xác!'
        }
      ],
      exercises: [
        {
          level: 'Mức 1 (Nhận biết)',
          title: 'Chọn phát biểu sai về biến',
          description: 'Phát biểu nào sau đây là SAI?\nA. Biến là tên gọi đại diện cho ô nhớ.\nB. Tên biến có thể bắt đầu bằng dấu gạch dưới (_).\nC. Tên biến có thể chứa khoảng trắng nếu đặt trong dấu ngoặc kép.\nD. C++ phân biệt chữ hoa và chữ thường trong tên biến.'
        },
        {
          level: 'Mức 2 (Thông hiểu)',
          title: 'Tối ưu tên biến theo Clean Code',
          description: 'Hãy đổi các tên biến "xấu" sau đây thành tên biến chuẩn mực camelCase tiếng Anh:\n1. dtb (điểm trung bình học kỳ)\n2. sn (số lượng nhân viên)\n3. gia_tien_truoc_thue (giá tiền trước thuế)'
        },
        {
          level: 'Mức 3 (Vận dụng)',
          title: 'Hoán đổi 2 số không dùng biến phụ',
          description: 'Hãy suy nghĩ cách tráo đổi giá trị 2 biến số nguyên a và b mà KHÔNG ĐƯỢC dùng thêm bất kỳ biến phụ thứ ba nào (Gợi ý: sử dụng phép cộng và trừ).'
        },
        {
          level: 'Mức 4 (Vận dụng cao)',
          title: 'Khảo sát địa chỉ bộ nhớ thực tế của biến',
          description: 'Dùng toán tử lấy địa chỉ `&` (ví dụ: `cout << &a;`) để in địa chỉ vật lý dạng Hex của 3 biến được khai báo liên tiếp. Quan sát khoảng cách byte giữa các địa chỉ đó trên thanh RAM.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Tên định danh nào sau đây là HOÀN TOÀN HỢP LỆ trong C++?',
          options: ['2ndPlace', 'total_score', 'student-name', 'float'],
          correctIndex: 1,
          explanation: 'total_score hợp lệ vì chỉ gồm chữ cái và gạch dưới. 2ndPlace bắt đầu bằng số; student-name chứa dấu trừ; float trùng từ khóa.'
        },
        {
          id: 2,
          question: 'Điều gì xảy ra nếu bạn khai báo "int x;" rồi in "cout << x;" mà chưa từng gán giá trị cho x?',
          options: [
            'Chương trình tự động in số 0.',
            'Chương trình báo lỗi và không cho chạy.',
            'Chương trình in ra một giá trị rác ngẫu nhiên còn sót trong ô nhớ.',
            'Chương trình xóa sạch bộ nhớ máy tính.'
          ],
          correctIndex: 2,
          explanation: 'C++ không tự động dọn sạch ô nhớ; biến chưa khởi tạo sẽ giữ giá trị rác (garbage value).'
        },
        {
          id: 3,
          question: 'Quy ước đặt tên kiểu camelCase là gì?',
          options: [
            'TẤT CẢ CÁC CHỮ ĐỀU VIẾT HOA.',
            'Chữ cái đầu viết thường, các từ tiếp theo viết hoa chữ cái đầu (ví dụ: studentCount).',
            'Các từ cách nhau bằng dấu gạch dưới (ví dụ: student_count).',
            'Chữ đầu tiên viết hoa, các chữ sau viết thường.'
          ],
          correctIndex: 1,
          explanation: 'camelCase mô phỏng bướu lạc đà: từ đầu viết thường, chữ đầu các từ sau viết hoa.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Biến (Variable)', val: 'Nhãn định danh trỏ tới một vùng nhớ trong RAM' },
          { key: 'Quy tắc tên', val: 'Chỉ gồm a-z, A-Z, 0-9, _; Không bắt đầu bằng số; Không trùng từ khóa' },
          { key: 'Khởi tạo (Init)', val: 'Luôn gán giá trị ban đầu ngay khi khai báo (int x = 0;)' },
          { key: 'Case-sensitive', val: 'C++ phân biệt chữ hoa và chữ thường tuyệt đối' }
        ],
        coreTakeaway: 'Biến là chiếc hộp chứa dữ liệu có tên dán ngoài. Hãy luôn đặt tên rõ nghĩa và khởi tạo giá trị trước khi sử dụng để tránh lỗi tai hại.'
      },
      checklist: [
        'Tôi đã nắm chắc 4 quy tắc đặt tên biến trong C++.',
        'Tôi hiểu bản chất ô nhớ RAM được cấp phát khi khai báo biến.',
        'Tôi luôn hình thành phản xạ gán giá trị khởi tạo khi khai báo biến mới.'
      ],
      extendedChallenge: {
        title: 'Thử thách: Khảo sát mã Assembly của lệnh gán biến',
        scenario: 'Trên trình biên dịch Compiler Explorer (godbolt.org), gõ câu lệnh int a = 5; int b = a + 2;',
        challengeTask: 'Quan sát lệnh hợp ngữ CPU tương ứng (như mov dword ptr [rbp-4], 5) để thấy CPU trực tiếp thao tác ghi dữ liệu vào ngăn xếp Stack của RAM.',
        thoughtGuidance: 'Câu lệnh C++ cấp cao được phân rã thành các chỉ thị MOV, ADD thao tác trực tiếp với các thanh ghi CPU (Registers).'
      }
    },
    {
      id: 'CH02-L02',
      lessonNumber: 2,
      chapterNumber: 2,
      title: 'Hệ Thống Kiểu Dữ Liệu Cơ Sở & Bản Đồ Bộ Nhớ',
      readingTimeMinutes: 50,
      moodleType: 'Page + Bảng tra cứu tương tác + VPL kiểm tra kích thước sizeof',
      objectives: [
        'Trình bày được 5 kiểu dữ liệu nguyên thủy cơ bản trong C++: int, float, double, char, bool.',
        'Sử dụng thành thạo toán tử sizeof để đo chính xác số byte bộ nhớ mà từng kiểu dữ liệu chiếm dụng.',
        'Giải thích được khái niệm bit, byte và công thức tính phạm vi giá trị biểu diễn của số nguyên có dấu (signed) và không dấu (unsigned).',
        'Phân tích được hiện tượng Tràn số (Integer Overflow) và hậu quả nghiêm trọng của nó trong phần mềm.',
        'Lựa chọn chính xác kiểu dữ liệu phù hợp với bài toán thực tế (tối ưu bộ nhớ và tránh mất mát độ chính xác).'
      ],
      prerequisites: [
        'Đã học Bài 1 (Khái niệm biến và ô nhớ).'
      ],
      leadIn: {
        hook: 'Năm 1996, tên lửa đẩy Ariane 5 trị giá 370 triệu USD của Cơ quan Vũ trụ Châu Âu (ESA) đã phát nổ chỉ 37 giây sau khi phóng. Nguyên nhân là gì? Một dòng code chuyển đổi số thực 64-bit sang số nguyên 16-bit gây ra hiện tượng TRÀN SỐ (Overflow)!',
        question: 'Tại sao máy tính không thể chứa một con số to vô tận? Kiểu dữ liệu quyết định "dung tích" của chiếc hộp chứa dữ liệu như thế nào?',
        realWorldScenario: 'Bộ nhớ máy tính có giới hạn vật lý. Nếu bạn lấy một chiếc cốc 250ml để rót 1 lít nước, nước sẽ tràn ra ngoài làm hỏng sàn nhà. Trong C++, nếu bạn cố nhồi một con số vượt quá sức chứa của kiểu dữ liệu, các bit sẽ bị tràn, đảo dấu từ dương thành âm, dẫn đến những thảm họa phần mềm khôn lường.'
      },
      theorySections: [
        {
          title: '1. Bản đồ 5 kiểu dữ liệu nguyên thủy (Primitive Types)',
          content: 'C++ cung cấp các kiểu dữ liệu cơ bản để lưu trữ các dạng dữ liệu khác nhau:\n\n1. `int` (Integer - Số nguyên): Thường chiếm 4 byte (32 bit). Dùng để đếm, lưu số lượng, tuổi tác, số thứ tự. Phạm vi: từ khoảng -2 tỷ đến +2 tỷ (-2^31 đến 2^31 - 1).\n\n2. `float` (Số thực dấu phẩy động độ chính xác đơn): Chiếm 4 byte. Độ chính xác khoảng 6-7 chữ số thập phân.\n\n3. `double` (Số thực dấu phẩy động độ chính xác kép): Chiếm 8 byte. Độ chính xác cao tới 15-16 chữ số thập phân. Trong thực tế, LUÔN ƯU TIÊN DÙNG `double` cho các phép tính số thực để tránh sai số làm tròn.\n\n4. `char` (Character - Ký tự): Chiếm 1 byte (8 bit). Lưu 1 ký tự duy nhất theo bảng mã ASCII (từ \'A\', \'a\', \'0\' đến các ký tự đặc biệt). Ký tự phải đặt trong cặp nháy đơn \' \'.\n\n5. `bool` (Boolean - Logic): Chiếm 1 byte. Chỉ nhận 1 trong 2 giá trị: `true` (đúng, tương ứng số 1) hoặc `false` (sai, tương ứng số 0).',
          keyPoints: [
            'Bảng quy đổi bộ nhớ: 1 Byte = 8 Bits.',
            'Số nguyên cực lớn: Sử dụng kiểu long long (8 byte, biểu diễn tới 9x10^18).'
          ]
        },
        {
          title: '2. Đo kích thước bộ nhớ bằng toán tử sizeof',
          content: 'Toán tử `sizeof(kiểu_dữ_liệu)` hoặc `sizeof(tên_biến)` trả về số byte mà kiểu dữ liệu hoặc biến đó chiếm dụng trong bộ nhớ RAM của hệ thống hiện hành.\n\nVí dụ: `sizeof(int)` thường trả về 4, `sizeof(double)` trả về 8, `sizeof(char)` trả về 1.',
          callout: {
            type: 'note',
            text: '💡 Lưu ý hệ điều hành: Kích thước của kiểu dữ liệu có thể khác nhau tùy kiến trúc vi xử lý (32-bit vs 64-bit). Hãy luôn dùng sizeof để kiểm tra kích thước chuẩn xác.'
          }
        },
        {
          title: '3. Bản chất bảng mã ASCII & Kiểu char',
          content: 'Máy tính không hề biết chữ cái \'A\' là gì. Nó chỉ lưu trữ các con số! Bảng mã ASCII (American Standard Code for Information Interchange) quy định:\n- Ký tự \'A\' có mã số 65.\n- Ký tự \'a\' có mã số 97 (Chữ thường luôn hơn chữ hoa 32 đơn vị: \'a\' = \'A\' + 32).\n- Ký tự số \'0\' có mã số 48.\n\nDo đó, trong C++, kiểu `char` thực chất là một dạng số nguyên 1 byte nhỏ! Bạn hoàn toàn có thể lấy \'A\' + 1 để ra ký tự \'B\'.',
          callout: {
            type: 'warning',
            text: '⚠️ Phân biệt nháy đơn \' \' và nháy kép " ": \'A\' là một ký tự char (1 byte); "A" là một chuỗi string (chứa ký tự \'A\' và ký tự kết thúc chuỗi \'\\0\'). Viết char c = "A"; sẽ bị compiler báo lỗi ngay!'
          }
        },
        {
          title: '4. Hiện tượng Tràn số (Integer Overflow) & Hậu quả',
          content: 'Kiểu `int` 32-bit có giá trị lớn nhất là 2,147,483,647 (`INT_MAX`).\nNếu bạn lấy `INT_MAX + 1`, điều gì sẽ xảy ra? Chiếc đồng hồ đo km bị quay vòng: bit dấu cao nhất bị lật thành 1, kết quả lập tức biến thành số âm nhỏ nhất: -2,147,483,648!\n\nNếu lưu biến dân số thế giới (hơn 8 tỷ người) hoặc số đo khoảng cách vũ trụ bằng kiểu `int`, chương trình sẽ bị tràn số và cho ra kết quả âm kỳ quặc. Khi đó, BẮT BUỘC phải dùng kiểu `long long`.'
        }
      ],
      examples: [
        {
          title: 'Chương trình đo kích thước bộ nhớ & Thử nghiệm tràn số',
          problem: 'Viết chương trình đo kích thước byte của các kiểu dữ liệu trên máy tính của bạn và quan sát hiện tượng tràn số khi vượt quá giới hạn cực đại của int.',
          analysis: {
            input: 'Không có dữ liệu nhập.',
            output: 'Kích thước byte của int, double, char, bool và kết quả cộng quá giới hạn.',
            idea: 'Sử dụng toán tử sizeof và thư viện <climits> chứa hằng số INT_MAX.',
            algorithm: 'Bước 1: Nạp <iostream> và <climits>.\nBước 2: In kích thước sizeof của các kiểu dữ liệu.\nBước 3: Gán biến maxInt = INT_MAX (2147483647).\nBước 4: Thực hiện maxInt = maxInt + 1 và in ra kết quả để xem sự cố tràn số.'
          },
          code: `#include <iostream>
#include <climits> // Thu vien chua gioi han cua kieu du lieu

using namespace std;

int main() {
    cout << "=== KICH THUOC CAC KIEU DU LIEU ===" << endl;
    cout << "Size of char:   " << sizeof(char) << " byte" << endl;
    cout << "Size of bool:   " << sizeof(bool) << " byte" << endl;
    cout << "Size of int:    " << sizeof(int) << " bytes" << endl;
    cout << "Size of float:  " << sizeof(float) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;
    cout << "Size of long long: " << sizeof(long long) << " bytes" << endl;

    cout << "\\n=== THU NGHIEM TRAN SO (OVERFLOW) ===" << endl;
    int maxVal = INT_MAX;
    cout << "Gia tri lon nhat cua int: " << maxVal << endl;
    maxVal = maxVal + 1; // Gay tran so
    cout << "Gia tri sau khi + 1:      " << maxVal << " (Bi lat thanh so am!)" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: '#include <climits>',
              explanation: 'Thư viện định nghĩa các giá trị cực đại INT_MAX, cực tiểu INT_MIN của hệ thống.'
            },
            {
              lineOrBlock: 'sizeof(int)',
              explanation: 'Toán tử trả về kích thước 4 byte (32 bit).'
            },
            {
              lineOrBlock: 'maxVal = maxVal + 1;',
              explanation: 'Phép cộng vượt quá 31 bit biểu diễn số dương, bit dấu đảo sang 1, kết quả thành âm.'
            }
          ],
          executionResult: {
            sampleOutput: `=== KICH THUOC CAC KIEU DU LIEU ===
Size of char:   1 byte
Size of bool:   1 byte
Size of int:    4 bytes
Size of float:  4 bytes
Size of double: 8 bytes
Size of long long: 8 bytes

=== THU NGHIEM TRAN SO (OVERFLOW) ===
Gia tri lon nhat cua int: 2147483647
Gia tri sau khi + 1:      -2147483648 (Bi lat thanh so am!)`
          },
          analysisOfResult: 'Hiện tượng tràn số cực kỳ nguy hiểm. Khi tính tích của hai số $10^6 \times 10^6 = 10^{12}$, kết quả sẽ vượt quá 2 tỷ của kiểu int và biến thành một số âm vô lý nếu bạn không dùng kiểu long long.'
        }
      ],
      practices: [
        {
          level: 'Thực hành 1 (Cơ bản)',
          title: 'Khám phá mã ASCII của tên bạn',
          task: 'Khai báo biến char c1 = \'A\'; char c2 = \'N\'; char c3 = \'H\'; In ra màn hình ký tự kèm mã số ASCII tương ứng của nó bằng cách ép kiểu: (int)c1.',
          hints: ['Cú pháp in mã ASCII: cout << c1 << " co ma ASCII la: " << (int)c1 << endl;']
        },
        {
          level: 'Thực hành 2 (Củng cố)',
          title: 'Đổi chữ hoa thành chữ thường bằng số học ASCII',
          task: 'Nhập một ký tự in hoa (ví dụ \'M\'). Hãy cộng thêm 32 vào ký tự đó và in ra kết quả. Bạn thấy xuất hiện chữ gì?',
          hints: ['Trong bảng ASCII, \'a\' (97) - \'A\' (65) = 32. Do đó ký tự thường = ký tự hoa + 32.']
        },
        {
          level: 'Thực hành 3 (Vận dụng)',
          title: 'Tính diện tích hình tròn độ chính xác cao',
          task: 'Khai báo bán kính r = 5.5 (kiểu double) và hằng số số PI = 3.141592653589793. Tính và in diện tích hình tròn $S = \pi \times r^2$. So sánh kết quả nếu dùng kiểu float vs double.',
          hints: ['Dùng float sẽ bị mất các chữ số thập phân cuối cùng do chỉ có 7 chữ số chính xác.']
        }
      ],
      commonErrors: [
        {
          name: 'Tràn số khi tính tích hai số nguyên lớn',
          symptom: 'Biến kết quả lưu bằng long long nhưng giá trị in ra vẫn bị âm hoặc sai lệch.',
          rootCause: 'Viết: "long long result = a * b;" với a và b là int. C++ sẽ thực hiện phép nhân a * b trên kiểu int trước (bị tràn số ngay lúc nhân), rồi mới gán kết quả đã bị hỏng sang result!',
          howToFix: 'Ép kiểu một trong hai toán hạng sang long long trước khi nhân: "long long result = (long long)a * b;".',
          badCode: 'int a = 1000000, b = 1000000;\nlong long res = a * b; // res van bi sai vi tran so!',
          goodCode: 'int a = 1000000, b = 1000000;\nlong long res = 1LL * a * b; // 1LL ep phep toan sang long long'
        },
        {
          name: 'Nhầm lẫn giữa ký tự số và giá trị số',
          symptom: 'Cộng \'5\' + \'3\' không ra 8 mà lại ra 104!',
          rootCause: '\'5\' có mã ASCII là 53, \'3\' có mã ASCII là 51. 53 + 51 = 104.',
          howToFix: 'Để đổi ký tự số thành giá trị số nguyên thực sự, hãy trừ đi ký tự \'0\': int val = c - \'0\'; (53 - 48 = 5).',
          badCode: 'char c = \'5\';\nint num = c; // num = 53 chu khong phai 5!',
          goodCode: 'char c = \'5\';\nint num = c - \'0\'; // num = 5 chinh xac!'
        }
      ],
      exercises: [
        {
          level: 'Mức 1 (Nhận biết)',
          title: 'Ghép cặp kiểu dữ liệu và kích thước',
          description: 'Hãy ghép đúng kiểu dữ liệu với dung lượng bộ nhớ thông thường trên hệ thống 64-bit:\n1. double       | A. 1 byte\n2. int          | B. 4 bytes\n3. char         | C. 8 bytes\n4. long long    | D. 8 bytes'
        },
        {
          level: 'Mức 2 (Thông hiểu)',
          title: 'Tại sao cần phân biệt float và double?',
          description: 'Cả float và double đều dùng để lưu số thực có dấu chấm thập phân. Nêu 2 lý do tại sao các thư viện tính toán khoa học hiện đại luôn mặc định dùng double thay vì float.'
        },
        {
          level: 'Mức 3 (Vận dụng)',
          title: 'Lựa chọn kiểu dữ liệu cho dự án thực tế',
          description: 'Hãy chọn kiểu dữ liệu tối ưu nhất (tiết kiệm RAM và không lo tràn số) cho các đại lượng sau:\n1. Số lượng học sinh trong một lớp học (từ 10 đến 50 bạn).\n2. Dân số của một quốc gia (khoảng 100 triệu người).\n3. Khoảng cách từ Trái Đất đến Mặt Trời tính bằng milimét.\n4. Điểm trung bình môn học (từ 0.0 đến 10.0).'
        },
        {
          level: 'Mức 4 (Vận dụng cao)',
          title: 'Tìm hiểu nghịch lý số thực (Floating-Point Inaccuracy)',
          description: 'Chạy thử đoạn code: `double x = 0.1 + 0.2; if (x == 0.3) cout << "Bang nhau"; else cout << "KHONG BANG NHAU";`. Giải thích tại sao máy tính lại báo KHÔNG BẰNG NHAU (nguyên nhân hệ nhị phân không biểu diễn chính xác được phân số thập phân vô hạn tuần hoàn).'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Kiểu dữ liệu nào sau đây lưu trữ số nguyên có độ lớn lên đến khoảng 9 tỷ tỷ (9 x 10^18)?',
          options: ['int', 'short', 'long long', 'float'],
          correctIndex: 2,
          explanation: 'long long chiếm 8 byte (64-bit), có phạm vi từ khoảng -9x10^18 đến 9x10^18.'
        },
        {
          id: 2,
          question: 'Toán tử nào được dùng để kiểm tra kích thước bộ nhớ (tính theo byte) của một biến hoặc kiểu dữ liệu?',
          options: ['length()', 'size()', 'sizeof()', 'bytes()'],
          correctIndex: 2,
          explanation: 'sizeof là toán tử tiền xử lý trả về kích thước byte của kiểu dữ liệu hoặc biến.'
        },
        {
          id: 3,
          question: 'Biến kiểu bool có thể nhận các giá trị nào sau đây?',
          options: ['1, 2, 3', 'true hoặc false', 'Mọi chuỗi văn bản', 'Các số thực âm'],
          correctIndex: 1,
          explanation: 'Kiểu bool (boolean) chỉ lưu trữ 2 giá trị logic: true (đúng) hoặc false (sai).'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'int (4 bytes)', val: 'Số nguyên thông dụng: -2 tỷ đến +2 tỷ' },
          { key: 'long long (8 bytes)', val: 'Số nguyên cực lớn: -9 tỷ tỷ đến +9 tỷ tỷ' },
          { key: 'double (8 bytes)', val: 'Số thực chính xác cao (15 chữ số thập phân)' },
          { key: 'char (1 byte)', val: 'Ký tự đơn đặt trong nháy đơn \'a\', mã ASCII 0-255' },
          { key: 'bool (1 byte)', val: 'Giá trị logic: true (1) hoặc false (0)' }
        ],
        coreTakeaway: 'Chọn đúng kiểu dữ liệu là quyết định sống còn giúp phần mềm chạy chính xác, tránh thảm họa tràn số và tiết kiệm tài nguyên bộ nhớ.'
      },
      checklist: [
        'Tôi nắm vững dung lượng byte và phạm vi của 5 kiểu dữ liệu nguyên thủy.',
        'Tôi biết cách dùng toán tử sizeof để đo kích thước ô nhớ.',
        'Tôi hiểu hiện tượng tràn số và biết khi nào cần dùng long long thay cho int.'
      ],
      extendedChallenge: {
        title: 'Thử thách: Khảo sát tiêu chuẩn IEEE 754 về biểu diễn số thực',
        scenario: 'Tại sao 0.1 + 0.2 trong máy tính lại bằng 0.30000000000000004?',
        challengeTask: 'Tìm hiểu cách số thực được phân rã thành 3 phần: Bit dấu (Sign), Phần mũ (Exponent) và Phần định trị (Mantissa) theo chuẩn IEEE 754.',
        thoughtGuidance: 'Các phân số cơ số 10 như 1/10 khi đổi sang nhị phân sẽ thành số vô hạn tuần hoàn 0.0001100110011... máy tính buộc phải cắt cụt làm tròn gây ra sai số siêu nhỏ.'
      }
    },
    {
      id: 'CH02-L03',
      lessonNumber: 3,
      chapterNumber: 2,
      title: 'Hằng Số (const), Toán Tử Số Học & Cơ Chế Ép Kiểu',
      readingTimeMinutes: 50,
      moodleType: 'Page + Trình mô phỏng phép chia nguyên + VPL toán học',
      objectives: [
        'Sử dụng từ khóa const để định nghĩa hằng số bất biến bảo vệ dữ liệu không bị sửa đổi ngoài ý muốn.',
        'Làm chủ 5 toán tử số học cơ bản: +, -, *, /, % (đặc biệt là bẫy phép chia nguyên và toán tử chia lấy dư %).',
        'Phân biệt cặn kẽ sự khác nhau giữa tiền tố tăng (++x) và hậu tố tăng (x++).',
        'Giải thích cơ chế ép kiểu ngầm định (Implicit Type Conversion) và ép kiểu tường minh (Explicit Casting).',
        'Viết chương trình tính toán công thức hình học và đại số hoàn chỉnh không bị sai số chia nguyên.'
      ],
      prerequisites: [
        'Đã học Bài 2 (Nắm vững kiểu int, double và float).'
      ],
      leadIn: {
        hook: 'Một bạn sinh viên viết chương trình tính điểm trung bình của 2 bài kiểm tra: int a = 7, b = 8; double dtb = (a + b) / 2; Kết quả in ra lại là 7.0 thay vì 7.5! Bạn ấy thắc mắc: "Rõ ràng biến dtb của em khai báo là double mà, tại sao số 0.5 lại biến mất?"',
        question: 'Tại sao phép tính 15 / 2 trong C++ lại bằng 7 chứ không phải 7.5? Cơ chế chia số nguyên của máy tính hoạt động như thế nào?',
        realWorldScenario: 'Đây là cái "bẫy" kinh điển nhất khiến 99% người mới học lập trình bị mất điểm! Trong C++, khi bạn lấy một số nguyên chia cho một số nguyên, kết quả sinh ra BẮT BUỘC phải là số nguyên (phần thập phân bị vứt bỏ không thương tiếc). Để giải bài toán này, ta phải làm chủ cơ chế Ép kiểu (Type Casting).'
      },
      theorySections: [
        {
          title: '1. Hằng số (Constants) với từ khóa const',
          content: 'Hằng số là đại lượng có giá trị KHÔNG ĐƯỢC PHÉP THAY ĐỔI trong suốt thời gian chương trình chạy.\n\nCú pháp: `const <Kiểu_dữ_liệu> <TÊN_HẰNG> = <Giá_trị>;`\nVí dụ: `const double PI = 3.14159;`\n`const int MAX_STUDENTS = 50;`\n\nQuy ước lập trình: Tên hằng số nên được viết IN HOA TOÀN BỘ và phân cách bằng dấu gạch dưới (SCREAMING_SNAKE_CASE) để phân biệt ngay với biến thường.\nNếu bạn cố tình viết lệnh gán `PI = 3.14;`, trình biên dịch sẽ chặn đứng và báo lỗi ngay lập tức.',
          keyPoints: [
            'Lợi ích của hằng số: Tránh "Magic Numbers" (những con số vô danh rải rác trong code), giúp code dễ bảo trì và an toàn tuyệt đối.'
          ]
        },
        {
          title: '2. Các toán tử số học & Bẫy phép chia nguyên',
          content: 'C++ hỗ trợ 5 toán tử số học chính:\n- Cộng (+), Trừ (-), Nhân (*).\n- Chia (/):\n  + Nếu CẢ HAI toán hạng đều là số nguyên (int / int) $\\rightarrow$ Thực hiện PHÉP CHIA NGUYÊN (lấy phần thương, chặt bỏ hoàn toàn phần dư). Ví dụ: 7 / 2 = 3; 1 / 2 = 0.\n  + Nếu CÓ ÍT NHẤT MỘT toán hạng là số thực (double hoặc float) $\\rightarrow$ Thực hiện PHÉP CHIA THỰC. Ví dụ: 7.0 / 2 = 3.5; 7 / 2.0 = 3.5; 1.0 / 2 = 0.5.\n- Chia lấy số dư (% - Modulo):\n  + Chỉ áp dụng cho số NGUYÊN. Trả về phần dư của phép chia. Ví dụ: 7 % 2 = 1; 10 % 3 = 1; 14 % 7 = 0.\n  + Ứng dụng cực lớn: Kiểm tra số chẵn/lẻ (n % 2 == 0), tách các chữ số hàng đơn vị, hàng chục (n % 10).',
          callout: {
            type: 'warning',
            text: '⚠️ Không chia cho số 0: Phép chia cho 0 (ví dụ: x / 0 hoặc x % 0) là lỗi nghiêm trọng (Division by zero) khiến chương trình bị sập ngay lập tức khi đang chạy (Crash Runtime)!'
          }
        },
        {
          title: '3. Toán tử tăng giảm: Tiền tố (++x) vs Hậu tố (x++)',
          content: 'Cả `x++` và `++x` đều có tác dụng tăng giá trị của biến `x` lên 1 đơn vị. Tuy nhiên khi đặt trong một biểu thức phức tạp, chúng hoạt động khác nhau:\n\n- Tiền tố `++x` (Pre-increment): "TĂNG TRƯỚC RỒI MỚI DÙNG".\n  Biến `x` được tăng lên 1 trước, sau đó giá trị mới này mới được nạp vào biểu thức.\n\n- Hậu tố `x++` (Post-increment): "DÙNG XONG MỚI TĂNG".\n  Giá trị hiện tại của `x` được lấy ra để tính toán biểu thức trước, sau khi xong câu lệnh, `x` mới được tăng lên 1.',
          keyPoints: [
            'Ví dụ: int a = 5; int b = ++a; // a = 6, b = 6',
            'Ví dụ: int a = 5; int b = a++; // b = 5, sau do a moi len 6'
          ]
        },
        {
          title: '4. Cơ chế Ép kiểu (Type Casting): Ngầm định & Tường minh',
          content: 'Ép kiểu là việc chuyển đổi dữ liệu từ kiểu này sang kiểu khác:\n\n1. Ép kiểu ngầm định (Implicit conversion): Trình biên dịch tự động thực hiện từ kiểu "hẹp" sang kiểu "rộng" hơn để không mất dữ liệu (ví dụ: `int` tự động chuyển thành `double` khi cộng với `double`).\n\n2. Ép kiểu tường minh (Explicit casting): Lập trình viên chủ động ra lệnh chuyển đổi.\n- Cú pháp phong cách C: `(kiểu_mới)biến` (Ví dụ: `(double)a / b`)\n- Cú pháp chuẩn C++ hiện đại: `static_cast<kiểu_mới>(biến)` (Ví dụ: `static_cast<double>(a) / b`)'
        }
      ],
      examples: [
        {
          title: 'Tính chu vi, diện tích hình tròn & Khắc phục sai số phép chia',
          problem: 'Cho bán kính hình tròn r = 5 (số nguyên) và hai điểm số môn học a = 8, b = 9. Hãy viết chương trình tính chu vi hình tròn và tính điểm trung bình chuẩn xác có số thập phân.',
          analysis: {
            input: 'Bán kính r = 5, điểm a = 8, b = 9.',
            output: 'Chu vi, diện tích hình tròn và điểm trung bình chính xác đến chữ số thập phân.',
            idea: 'Sử dụng hằng số PI = 3.14159 và ép kiểu (double) khi chia trung bình.',
            algorithm: 'Bước 1: Khai báo const double PI = 3.14159265;\nBước 2: Tính ChuVi = 2 * PI * r; DienTich = PI * r * r;\nBước 3: Tính DTB = (double)(a + b) / 2;\nBước 4: In toàn bộ kết quả ra màn hình.'
          },
          code: `#include <iostream>
using namespace std;

int main() {
    // 1. Dinh nghia hang so
    const double PI = 3.14159265;
    int r = 5;

    double chuVi = 2 * PI * r;
    double dienTich = PI * r * r;

    cout << "Hinh tron ban kinh r = " << r << endl;
    cout << "Chu vi:    " << chuVi << endl;
    cout << "Dien tich: " << dienTich << endl;

    cout << "------------------------" << endl;
    // 2. Minh hoa phep chia sai vs dung
    int toan = 8, van = 9;
    
    // SAI: Chia nguyen (17 / 2 ra 8, roi gan vao dtbSai thanh 8.0)
    double dtbSai = (toan + van) / 2;
    cout << "Diem TB (chia sai):  " << dtbSai << endl;

    // DUNG: Ep kieu tuong minh sang double truoc khi chia (17.0 / 2 ra 8.5)
    double dtbDung = (double)(toan + van) / 2;
    cout << "Diem TB (chia dung): " << dtbDung << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'const double PI = 3.14159265;',
              explanation: 'Định nghĩa hằng số số thực không thể thay đổi giá trị.'
            },
            {
              lineOrBlock: '(toan + van) / 2',
              explanation: 'toan + van = 17 (int). 17 / 2 (int / int) bị chặt cụt thành 8.'
            },
            {
              lineOrBlock: '(double)(toan + van) / 2',
              explanation: '17 được ép thành 17.0 (double). 17.0 / 2 là phép chia thực cho ra 8.5 chính xác.'
            }
          ],
          executionResult: {
            sampleOutput: `Hinh tron ban kinh r = 5
Chu vi:    31.4159
Dien tich: 78.5398
------------------------
Diem TB (chia sai):  8
Diem TB (chia dung): 8.5`
          },
          analysisOfResult: 'Chỉ cần thêm (double) vào biểu thức, kết quả đã thay đổi từ 8 thành 8.5. Đây là bài học khắc cốt ghi tâm khi xử lý các phép toán trung bình cộng trong lập trình.'
        }
      ],
      practices: [
        {
          level: 'Thực hành 1 (Cơ bản)',
          title: 'Tách chữ số hàng chục và hàng đơn vị',
          task: 'Cho số nguyên dương n = 87. Sử dụng toán tử chia nguyên (/) và chia lấy dư (%) để tách và in ra chữ số hàng chục và chữ số hàng đơn vị của n.',
          hints: ['Hàng chục: n / 10 (87 / 10 = 8). Hàng đơn vị: n % 10 (87 % 10 = 7).']
        },
        {
          level: 'Thực hành 2 (Củng cố)',
          title: 'Dự đoán giá trị biến với toán tử ++',
          task: 'Cho đoạn code: int x = 10; int y = x++ + ++x; Hãy viết ra giấy dự đoán giá trị cuối cùng của x và y, sau đó viết chương trình chạy kiểm chứng.',
          hints: ['Gợi ý: x++ trả về 10 rồi tăng x lên 11. Tiếp đó ++x tăng x lên 12 rồi trả về 12. Tổng y = 10 + 12 = 22, x = 12.']
        },
        {
          level: 'Thực hành 3 (Vận dụng)',
          title: 'Quy đổi thời gian từ giây sang Giờ - Phút - Giây',
          task: 'Cho tổng số giây t = 3756 giây. Dùng các phép toán / và % để tính xem 3756 giây tương đương bao nhiêu giờ, bao nhiêu phút và bao nhiêu giây.',
          hints: ['1 giờ = 3600 giây -> giờ = t / 3600. Số giây còn lại = t % 3600 -> phút = còn lại / 60, giây = còn lại % 60.']
        }
      ],
      commonErrors: [
        {
          name: 'Phép chia 2 số nguyên bị mất phần thập phân',
          symptom: 'Biểu thức 1 / 2 luôn trả về 0 trong khi người học mong muốn kết quả là 0.5.',
          rootCause: 'Cả tử số và mẫu số đều là số nguyên (literal int), C++ tự động thực hiện phép chia nguyên.',
          howToFix: 'Viết thêm đuôi thập phân .0 vào một trong hai số (ví dụ: 1.0 / 2 hoặc 1 / 2.0).',
          badCode: 'double half = 1 / 2; // half = 0.0',
          goodCode: 'double half = 1.0 / 2; // half = 0.5'
        },
        {
          name: 'Dùng toán tử % với số thực (float/double)',
          symptom: 'Compiler báo lỗi: "error: invalid operands of types \'double\' and \'int\' to binary \'operator%\'".',
          rootCause: 'Toán tử chia lấy dư % CHỈ DÀNH RIÊNG cho số nguyên (int, long long).',
          howToFix: 'Nếu muốn lấy dư số thực, phải dùng hàm fmod(x, y) trong thư viện <cmath>.',
          badCode: 'double x = 7.5;\nint r = x % 2; // LOI BIEN DICH!',
          goodCode: 'int x = 7;\nint r = x % 2; // Hop le, r = 1'
        }
      ],
      exercises: [
        {
          level: 'Mức 1 (Nhận biết)',
          title: 'Xác định kết quả phép toán',
          description: 'Cho biết giá trị của các biểu thức sau trong C++:\n1. 19 / 4\n2. 19 % 4\n3. 19.0 / 4\n4. 5 + 3 * 2'
        },
        {
          level: 'Mức 2 (Thông hiểu)',
          title: 'Phân tích thứ tự ưu tiên toán tử',
          description: 'Trong biểu thức `x = 5 + 2 * 3 - 4 / 2;`, C++ sẽ thực hiện các phép toán theo thứ tự nào? Kết quả cuối cùng là bao nhiêu?'
        },
        {
          level: 'Mức 3 (Vận dụng)',
          title: 'Đổi nhiệt độ từ Fahrenheit sang Celsius',
          description: 'Công thức đổi độ F sang độ C là: $C = \\frac{5}{9} \\times (F - 32)$. Viết chương trình C++ tính độ C khi biết F = 100. Hãy chú ý cạm bẫy phép chia $5 / 9$!'
        },
        {
          level: 'Mức 4 (Vận dụng cao)',
          title: 'Thuật toán đảo ngược số nguyên 3 chữ số',
          description: 'Cho số nguyên có 3 chữ số $N = 482$. Chỉ sử dụng các phép toán số học `/` và `%` (không dùng chuỗi), hãy tạo ra số nguyên đảo ngược $M = 284$.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Biểu thức nào sau đây cho kết quả chính xác bằng 2.5?',
          options: ['5 / 2', '(double)(5 / 2)', '5.0 / 2', '5 % 2'],
          correctIndex: 2,
          explanation: '5.0 / 2 có toán hạng thực 5.0 nên thực hiện phép chia thực cho kết quả 2.5. Biểu thức (double)(5/2) thì 5/2 đã ra 2 trước rồi mới ép thành 2.0.'
        },
        {
          id: 2,
          question: 'Phép toán 17 % 5 trả về kết quả là bao nhiêu?',
          options: ['3', '2', '3.4', '0'],
          correctIndex: 1,
          explanation: '17 chia cho 5 được thương là 3 và dư 2 (17 = 5 * 3 + 2).'
        },
        {
          id: 3,
          question: 'Nếu khai báo "const int SPEED = 60;" thì câu lệnh nào sau đây sẽ bị báo lỗi biên dịch?',
          options: ['cout << SPEED;', 'int x = SPEED + 10;', 'SPEED = 80;', 'bool check = (SPEED == 60);'],
          correctIndex: 2,
          explanation: 'Biến có từ khóa const là hằng số bất biến, không thể gán lại giá trị mới (SPEED = 80 sẽ bị lỗi).'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'const', val: 'Từ khóa định nghĩa hằng số không thể bị sửa đổi' },
          { key: 'int / int', val: 'Chia nguyên (lấy thương, vứt bỏ phần thập phân)' },
          { key: 'double / int', val: 'Chia thực (cho kết quả số thực chính xác)' },
          { key: '% (Modulo)', val: 'Chia lấy số dư, chỉ áp dụng cho số nguyên' },
          { key: 'static_cast<double>(x)', val: 'Ép kiểu giá trị của biến x sang kiểu double' }
        ],
        coreTakeaway: 'Hãy luôn cảnh giác cao độ với phép chia nguyên trong C++. Khi cần kết quả có số lẻ, hãy đảm bảo ít nhất một toán hạng là số thực!'
      },
      checklist: [
        'Tôi hiểu rõ nguyên lý phép chia nguyên (int / int) và biết cách khắc phục.',
        'Tôi sử dụng thành thạo toán tử lấy dư % để giải các bài toán số học.',
        'Tôi biết cách khai báo hằng số const đúng chuẩn Clean Code.'
      ],
      extendedChallenge: {
        title: 'Thử thách: Tính tiền điện theo bậc thang lũy tiến',
        scenario: 'Công ty điện lực tính tiền: 50 kWh đầu giá 1.678đ/kWh; 50 kWh tiếp theo giá 1.734đ/kWh; trên 100 kWh giá 2.014đ/kWh.',
        challengeTask: 'Với một gia đình tiêu thụ 125 kWh, hãy sử dụng các phép toán số học và hằng số để tính ra tổng số tiền điện phải trả (chưa cần dùng câu lệnh rẽ nhánh if).',
        thoughtGuidance: 'Chia nhỏ thành các hằng số tiêu chuẩn và tính từng gói bậc thang.'
      }
    },
    {
      id: 'CH02-L04',
      lessonNumber: 4,
      chapterNumber: 2,
      title: 'Dòng Nhập Xuất Chuẩn cin/cout & Xử Lý Nhập Dữ Liệu An Toàn',
      readingTimeMinutes: 55,
      moodleType: 'VPL (Tương tác nhập xuất dữ liệu) + Video demo gỡ lỗi trôi lệnh',
      objectives: [
        'Sử dụng thành thạo luồng nhập chuẩn cin với toán tử trích xuất dữ liệu >> để nhận dữ liệu từ bàn phím.',
        'Định dạng đầu ra chuyên nghiệp bằng thư viện <iomanip>: cố định số chữ số thập phân (fixed, setprecision), căn lề và độ rộng cột (setw).',
        'Giải thích bản chất của Bàn phím đệm (Input Buffer) và cơ chế đọc dữ liệu của cin.',
        'Nhận diện và xử lý triệt để lỗi "trôi lệnh nhập chuỗi" khi kết hợp cin >> với getline() bằng phương thức cin.ignore().',
        'Xây dựng chương trình tính tiền hóa đơn mua sắm hoàn chỉnh có tương tác nhập xuất thân thiện.'
      ],
      prerequisites: [
        'Đã học Bài 1, 2, 3 (Biến, Kiểu dữ liệu và Toán tử).'
      ],
      leadIn: {
        hook: 'Bạn viết chương trình nhập tuổi: máy hỏi "Nhập tuổi của bạn:", bạn gõ 20 và nhấn Enter. Ngay sau đó, chương trình hỏi "Nhập họ tên đầy đủ:" nhưng chưa kịp để bạn gõ chữ nào thì nó đã tự động nhảy qua và kết thúc chương trình! Chiếc tên của bạn đã biến mất đi đâu?',
        question: 'Tại sao lại có hiện tượng "trôi lệnh nhập"? Phím Enter bạn vừa gõ đã đi đâu trong bộ nhớ đệm?',
        realWorldScenario: 'Khi người dùng gõ phím, các ký tự không bay thẳng vào biến mà rơi vào một khu vực chờ gọi là Bộ đệm bàn phím (Input Buffer). Lệnh `cin >>` đọc số 20 nhưng lại bỏ quên phím Enter (`\\n`) nằm lại trong bộ đệm. Lệnh đọc chuỗi tiếp theo tưởng người dùng đã gõ xong nên vội vàng thu nạp phím Enter đó và kết thúc! Đây là bài toán nhập xuất kinh điển mà mọi sinh viên CNTT bắt buộc phải vượt qua.'
      },
      theorySections: [
        {
          title: '1. Luồng nhập chuẩn cin & Toán tử trích xuất >>',
          content: 'Đối tượng `cin` (Character Input) thuộc thư viện `<iostream>`, đại diện cho luồng nhập chuẩn từ bàn phím.\n\nCú pháp nhập đơn: `cin >> ten_bien;`\nCú pháp nhập nối tiếp nhiều biến: `cin >> bien1 >> bien2 >> bien3;`\n\nQuy tắc hoạt động của `cin >>`:\n- Tự động bỏ qua các khoảng trắng (space), dấu tab (`\\t`) và dấu xuống dòng (`\\n`) ở đầu.\n- Dừng lại ngay khi gặp ký tự khoảng trắng tiếp theo hoặc ký tự không hợp lệ với kiểu dữ liệu của biến.\n- Tự động ép kiểu dữ liệu chuỗi ký tự người dùng gõ thành giá trị tương ứng của biến (ví dụ: gõ "123" sẽ chuyển thành số nguyên 123).',
          keyPoints: [
            'Nhớ quy tắc chiều mũi tên: cout << "xuat" (mũi tên đẩy ra màn hình); cin >> bien (mũi tên đổ dữ liệu vào biến).'
          ]
        },
        {
          title: '2. Định dạng đầu ra chuyên nghiệp với thư viện <iomanip>',
          content: 'Để in bảng số liệu thẳng hàng hoặc in tiền tệ/điểm số có đúng 2 chữ số thập phân sau dấu phẩy, ta nạp thư viện `#include <iomanip>` (Input/Output Manipulation):\n\n1. `fixed` và `setprecision(n)`: Khóa định dạng số thực luôn hiển thị cố định đúng `n` chữ số sau dấu phẩy thập phân.\nVí dụ: `cout << fixed << setprecision(2) << 8.5;` $\\rightarrow$ In ra `8.50` đẹp mắt.\n\n2. `setw(w)`: Thiết lập độ rộng hiển thị là `w` ký tự (rất hữu ích khi in bảng biểu căn cột thẳng hàng).',
          callout: {
            type: 'tip',
            text: '💡 Bí quyết Clean Code: Sau khi gọi cout << fixed << setprecision(2); một lần, toàn bộ các số thực in ra sau đó sẽ tự động tuân theo định dạng 2 chữ số thập phân này!'
          }
        },
        {
          title: '3. Bản chất Bộ đệm bàn phím & Cơ chế Trôi lệnh',
          content: 'Khi bạn gõ từ bàn phím: `20` rồi nhấn `[Enter]`, trong bộ đệm lưu 3 ký tự: `\'2\'`, `\'0\'`, `\'\\n\'`.\n- Lệnh `cin >> age;` đọc `\'2\'` và `\'0\'` rồi dừng lại trước `\'\\n\'`. Ký tự `\'\\n\'` vẫn còn nguyên trong bộ đệm!\n- Nếu ngay sau đó bạn gọi hàm đọc cả dòng văn bản `getline(cin, fullName);`, hàm `getline` thấy ký tự `\'\\n\'` thì tưởng là người dùng vừa gõ xong một dòng rỗng, nó lập tức kết thúc mà không đợi bạn gõ gì cả!\n\nGiải pháp xử lý triệt để: Dùng lệnh `cin.ignore();` để xóa bỏ ký tự `\'\\n\'` tồn dư trước khi gọi `getline()`.',
          callout: {
            type: 'warning',
            text: '⚠️ Quy tắc vàng: Bất cứ khi nào chuyển từ nhập số (cin >>) sang nhập chuỗi văn bản có dấu cách (getline), BẮT BUỘC phải chèn một dòng "cin.ignore();" ở giữa!'
          }
        }
      ],
      examples: [
        {
          title: 'Chương trình in Hóa đơn mua hàng định dạng chuẩn quốc tế',
          problem: 'Viết chương trình cho phép người dùng nhập vào: Tên món hàng, Số lượng mua (int), Đơn giá (double). Tính tổng tiền, thuế VAT 10% và in ra hóa đơn thanh toán căn chỉnh thẳng hàng có đúng 2 chữ số thập phân.',
          analysis: {
            input: 'Tên món hàng (chuỗi có khoảng trắng), số lượng (số nguyên), đơn giá (số thực).',
            output: 'Bảng hóa đơn đẹp mắt, căn chỉnh lề bằng setw và setprecision.',
            idea: 'Sử dụng getline để đọc tên món hàng, cin >> để đọc số lượng và đơn giá, kèm theo <iomanip>.',
            algorithm: 'Bước 1: Nhập tên món hàng bằng getline(cin, itemName).\nBước 2: Nhập số lượng và đơn giá bằng cin >> quantity >> price.\nBước 3: Tính subtotal = quantity * price; vat = subtotal * 0.1; total = subtotal + vat;\nBước 4: Dùng fixed, setprecision(2) và setw để in hóa đơn.'
          },
          code: `#include <iostream>
#include <string>
#include <iomanip> // Thu vien dinh dang nhap xuat

using namespace std;

int main() {
    string itemName;
    int quantity;
    double price;

    // 1. Nhap du lieu
    cout << "Nhap ten mon hang: ";
    getline(cin, itemName);

    cout << "Nhap so luong mua: ";
    cin >> quantity;

    cout << "Nhap don gia ($): ";
    cin >> price;

    // 2. Tinh toan tien bac
    double subtotal = quantity * price;
    double vat = subtotal * 0.10; // Thue VAT 10%
    double total = subtotal + vat;

    // 3. In hoa don chuyen nghiep
    cout << "\\n========================================" << endl;
    cout << "           HOA DON THANH TOAN           " << endl;
    cout << "========================================" << endl;
    cout << fixed << setprecision(2); // Co dinh 2 chu so thap phan

    cout << left << setw(20) << "Mon hang:" << itemName << endl;
    cout << left << setw(20) << "So luong:" << quantity << endl;
    cout << left << setw(20) << "Don gia:" << "$" << price << endl;
    cout << "----------------------------------------" << endl;
    cout << left << setw(20) << "Tien hang:" << "$" << subtotal << endl;
    cout << left << setw(20) << "Thue VAT (10%):" << "$" << vat << endl;
    cout << left << setw(20) << "TONG CONG:" << "$" << total << endl;
    cout << "========================================" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'getline(cin, itemName);',
              explanation: 'Đọc toàn bộ chuỗi văn bản kể cả khi người dùng gõ dấu cách (ví dụ: "Banh mi pate").'
            },
            {
              lineOrBlock: 'cout << fixed << setprecision(2);',
              explanation: 'Khóa định dạng số thực luôn in đúng 2 chữ số thập phân (ví dụ: 15.00 thay vì 15).'
            },
            {
              lineOrBlock: 'setw(20)',
              explanation: 'Đặt độ rộng cột là 20 ký tự; left chỉ định căn lề bên trái giúp hóa đơn thẳng hàng tăm tắp.'
            }
          ],
          executionResult: {
            sampleInput: `Banh mi cha lua\n3\n2.50`,
            sampleOutput: `Nhap ten mon hang: Banh mi cha lua
Nhap so luong mua: 3
Nhap don gia ($): 2.50

========================================
           HOA DON THANH TOAN           
========================================
Mon hang:           Banh mi cha lua
So luong:           3
Don gia:            $2.50
----------------------------------------
Tien hang:          $7.50
Thue VAT (10%):     $0.75
TONG CONG:          $8.25
========================================`
          },
          analysisOfResult: 'Nhờ có fixed, setprecision(2) và setw(20), giao diện console của chương trình trông như một phần mềm thu ngân chuyên nghiệp tại siêu thị.'
        }
      ],
      practices: [
        {
          level: 'Thực hành 1 (Cơ bản)',
          title: 'Nhập xuất thông tin cá nhân',
          task: 'Viết chương trình nhập từ bàn phím: Tuổi (int), Chiều cao (double theo mét, ví dụ 1.72). In ra màn hình thông báo: "Ban 20 tuoi va cao 1.72m".',
          hints: ['Dùng cin >> age >> height; và cout để in kết quả.']
        },
        {
          level: 'Thực hành 2 (Củng cố)',
          title: 'Khắc phục lỗi trôi lệnh với cin.ignore()',
          task: 'Viết chương trình nhập Mã số sinh viên (int), sau đó nhập Họ tên đầy đủ (string có dấu cách). Dùng cin.ignore() đúng vị trí để họ tên không bị trôi.',
          hints: ['Đặt cin.ignore(); ngay sau câu lệnh cin >> mssv;']
        },
        {
          level: 'Thực hành 3 (Vận dụng)',
          title: 'In bảng điểm chuẩn hóa 3 môn học',
          task: 'Nhập điểm Toán, Lý, Hóa (double). Dùng fixed, setprecision(1) và setw để in bảng điểm gồm 3 cột thẳng hàng: Môn - Điểm - Hệ số.',
          hints: ['Nạp thư viện <iomanip> và dùng setw(12) cho mỗi cột.']
        }
      ],
      commonErrors: [
        {
          name: 'Trôi lệnh khi dùng getline() sau cin >>',
          symptom: 'Chương trình bỏ qua bước nhập tên chuỗi văn bản.',
          rootCause: 'Phím Enter (\'\\n\') sót lại từ lệnh cin >> trước đó bị getline() đọc nhầm.',
          howToFix: 'Thêm lệnh cin.ignore() ngay phía trước getline().',
          badCode: 'int id; cin >> id;\nstring name; getline(cin, name); // BI TROI LENH!',
          goodCode: 'int id; cin >> id;\ncin.ignore(); // Xoa sach ky tu Enter thua\nstring name; getline(cin, name); // Chay hoan hao!'
        },
        {
          name: 'Nhầm lẫn toán tử >> của cin và << của cout',
          symptom: 'Compiler báo: "error: no match for \'operator<<\' in \'std::cin << x\'".',
          rootCause: 'Viết ngược chiều mũi tên nhập/xuất.',
          howToFix: 'Ghi nhớ: cin đổ dữ liệu vào biến (cin >> x); cout đẩy dữ liệu ra màn hình (cout << x).',
          badCode: 'cin << x;\ncout >> x;',
          goodCode: 'cin >> x;\ncout << x;'
        }
      ],
      exercises: [
        {
          level: 'Mức 1 (Nhận biết)',
          title: 'Phân biệt cin >> và getline()',
          description: 'Khi người dùng gõ vào chuỗi "Ha Noi", lệnh `cin >> s;` (với s là string) sẽ đọc được chuỗi gì? Muốn đọc được toàn bộ "Ha Noi" ta phải dùng lệnh nào?'
        },
        {
          level: 'Mức 2 (Thông hiểu)',
          title: 'Công dụng của cin.ignore()',
          description: 'Giải thích bằng ngôn ngữ của bạn: Bản chất cơ chế hoạt động của hàm `cin.ignore()` là gì? Nếu không có hàm này trong bộ nhớ đệm thì điều gì sẽ xảy ra?'
        },
        {
          level: 'Mức 3 (Vận dụng)',
          title: 'Chương trình tính chỉ số khối cơ thể (BMI)',
          description: 'Viết chương trình nhập Họ tên (string), Cân nặng tính bằng kg (double) và Chiều cao tính bằng mét (double). Tính chỉ số $BMI = \\frac{canNang}{chieuCao^2}$ và in ra màn hình định dạng 2 chữ số thập phân kèm lời chào tên người dùng.'
        },
        {
          level: 'Mức 4 (Vận dụng cao)',
          title: 'Kiểm tra lỗi nhập dữ liệu (Input Validation cơ bản)',
          description: 'Tìm hiểu cờ trạng thái `cin.fail()`: Nếu người dùng nhập chữ cái "abc" vào một biến số nguyên `int age;`, làm thế nào để phát hiện người dùng đã nhập sai và in ra thông báo "Vui long nhap so hop le!"?'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Để in số thực với đúng 2 chữ số thập phân sau dấu phẩy, ta kết hợp các lệnh nào trong thư viện <iomanip>?',
          options: ['setw(2)', 'fixed và setprecision(2)', 'round(2)', 'decimal(2)'],
          correctIndex: 1,
          explanation: 'Lệnh cout << fixed << setprecision(2); khóa định dạng số thực hiển thị 2 chữ số sau dấu phẩy.'
        },
        {
          id: 2,
          question: 'Lệnh nào sau đây dùng để xóa ký tự phím Enter (\'\\n\') còn sót lại trong bộ đệm bàn phím?',
          options: ['cin.clear()', 'cin.flush()', 'cin.ignore()', 'cin.clean()'],
          correctIndex: 2,
          explanation: 'cin.ignore() bỏ qua 1 ký tự kế tiếp trong luồng đệm (thường là ký tự xuống dòng \'\\n\').'
        },
        {
          id: 3,
          question: 'Phương thức nào cho phép nhập cả một dòng chuỗi ký tự chứa nhiều dấu cách (space)?',
          options: ['cin >> str', 'getline(cin, str)', 'cin.read(str)', 'cin.get(str)'],
          correctIndex: 1,
          explanation: 'getline(cin, str) đọc dữ liệu từ bàn phím cho tới khi gặp phím Enter, do đó giữ nguyên được các dấu khoảng trắng giữa các từ.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'cin >> var', val: 'Nhập dữ liệu từ bàn phím (bỏ qua khoảng trắng đầu, dừng ở dấu cách tiếp theo)' },
          { key: 'getline(cin, str)', val: 'Đọc toàn bộ dòng văn bản chứa cả khoảng trắng' },
          { key: 'cin.ignore()', val: 'Xóa ký tự tồn dư trong bộ đệm (chống trôi lệnh)' },
          { key: 'fixed << setprecision(n)', val: 'Khóa định dạng in đúng n chữ số thập phân' },
          { key: 'setw(w)', val: 'Thiết lập độ rộng hiển thị w ký tự cho cột dữ liệu' }
        ],
        coreTakeaway: 'Nhập xuất là cầu nối giữa phần mềm và con người. Làm chủ cin, getline, cin.ignore và iomanip giúp ứng dụng của bạn vận hành trơn tru, không lỗi và thẩm mỹ cao.'
      },
      checklist: [
        'Tôi phân biệt được khi nào dùng cin >> và khi nào dùng getline().',
        'Tôi nắm vững cơ chế bộ đệm bàn phím và biết cách dùng cin.ignore() chống trôi lệnh.',
        'Tôi biết cách dùng <iomanip> để in bảng số liệu và tiền tệ chuyên nghiệp.'
      ],
      extendedChallenge: {
        title: 'Thử thách: Xây dựng biểu mẫu khảo sát thông tin sinh viên hoàn chỉnh',
        scenario: 'Tạo một form nhập liệu sinh viên năm nhất: Họ tên, Lớp, MSSV, Điểm tích lũy THPT, Điểm thi ĐGNL.',
        challengeTask: 'Thiết kế chương trình phối hợp nhịp nhàng giữa cin >> và getline(), đảm bảo không một trường thông tin nào bị trôi, và in ra thẻ sinh viên dạng bảng khung hộp hoàn chỉnh.',
        thoughtGuidance: 'Đặt cin.ignore() chính xác sau mỗi lần chuyển đổi từ cin >> sang getline().'
      }
    }
  ]
};
