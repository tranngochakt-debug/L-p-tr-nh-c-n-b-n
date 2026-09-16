import { LessonContent, ChapterData } from './chapter1Data.ts';

export const CHAPTER_10_DATA: ChapterData = {
  chapterId: 10,
  chapterCode: 'CH10',
  title: 'Bài Tập Tổng Hợp & Đồ Án Thực Hành Nhập Môn',
  summary: 'Chương đỉnh cao kết thúc học phần: Tích hợp toàn diện 100% kiến thức nền tảng đã tích lũy (Biến, Kiểu dữ liệu, Điều kiện rẽ nhánh if/switch, Cấu trúc lặp for/while/do-while, Chuỗi ký tự std::string, Mảng 1 chiều và 2 chiều, Kỹ thuật chia để trị với Hàm & Tham chiếu) để thiết kế và cài đặt một Đồ án phần mềm Mini hoàn chỉnh: Hệ thống Quản lý Sinh viên & Học bạ dạng Console Chuyên nghiệp. Tổng kết học phần, phân tích chiến lược vượt qua kỳ thi thực hành lập trình cuối kỳ (Final Coding Exam) đạt điểm A+, và vạch lộ trình phát triển kỹ sư phần mềm vững chắc với các môn học kế tiếp (Kỹ thuật Lập trình nâng cao, Cấu trúc dữ liệu & Giải thuật, Lập trình hướng đối tượng OOP).',
  totalLessons: 2,
  lessons: [
    // -------------------------------------------------------------
    // BÀI 1: XÂY DỰNG ỨNG DỤNG HOÀN CHỈNH: QUẢN LÝ SINH VIÊN DẠNG CONSOLE (L31)
    // -------------------------------------------------------------
    {
      id: 'CH10-L01',
      lessonNumber: 1,
      chapterNumber: 10,
      title: 'Đồ Án Nhập Môn: Xây Dựng Ứng Dụng Quản Lý Sinh Viên Dạng Console Chuyên Nghiệp',
      readingTimeMinutes: 60,
      moodleType: 'Đồ án VPL Capstone Project: Xây dựng hệ thống Console Menu Quản lý Điểm & Xếp loại Sinh viên (Bộ Testcases nâng cao)',
      objectives: [
        'Vận dụng tích hợp toàn diện mọi kiến thức đã học từ CH01 đến CH09 vào một bài toán thực tế có độ phức tạp cao.',
        'Thiết kế giao diện người dùng dòng lệnh (Console UX) chuyên nghiệp với Menu lặp điều khiển vô tận bằng do-while và switch-case.',
        'Thành thạo kỹ thuật quản lý dữ liệu đối tượng liên đới thông qua Mảng song song (Parallel Arrays) hoặc Struct cơ bản: Mã SV, Họ tên, Điểm số, Xếp loại.',
        'Tổ chức kiến trúc mã nguồn mô-đun hóa 100% bằng Hàm (Modular Functional Architecture): Mỗi tính năng trong Menu ứng với một hàm nghiệp vụ độc lập, truyền tham chiếu an toàn.',
        'Xử lý triệt để các vấn đề trôi lệnh `cin.ignore()`, chống nhập sai kiểu dữ liệu (Input Validation), và định dạng xuất bảng kết quả cân đối, thẩm mỹ với `std::setw` và `std::left`.'
      ],
      prerequisites: [
        'Đã hoàn thành xuất sắc toàn bộ 9 chương học phần (CH01 -> CH09).'
      ],
      leadIn: {
        hook: 'Bạn đã đi qua một hành trình dài: từ dòng mã đầu tiên ngập ngừng in ra màn hình \"Hello, World!\", vật lộn với các dấu chấm phẩy, cho đến lúc làm chủ vòng lặp, ma trận và kỹ thuật gỡ lỗi. Bây giờ là thời khắc chứng minh năng lực của bạn: Hãy gộp tất cả vũ khí lại để tạo ra một sản phẩm phần mềm thực thụ đầu tiên trong sự nghiệp lập trình!',
        question: 'Làm thế nào để một chương trình có hàng trăm dòng code không bị biến thành một \"mớ bòng bong\" rối rắm mà vẫn vận hành trơn tru, dễ đọc, dễ bảo trì và mở rộng thêm tính năng mới mà không phá vỡ logic cũ?',
        realWorldScenario: 'Hệ thống quản trị cơ sở dữ liệu nội bộ của ngân hàng, trường học, hay bệnh viện ở giai đoạn sơ khai đều bắt đầu từ các công cụ quản lý dòng lệnh (CLI tools). Sự chính xác tuyệt đối trong việc nhập, tính điểm trung bình, xếp loại học bổng và sắp xếp thứ hạng là xương sống của mọi hệ thống thông tin quản lý (MIS).'
      },
      theorySections: [
        {
          title: '1. Kiến trúc Hệ thống Console Menu Tương tác (Console UX Architecture)',
          content: 'Một ứng dụng dòng lệnh chuyên nghiệp luôn được tổ chức theo cấu trúc **Vòng lặp sự kiện (Event Loop)** với các thành phần:\n\n1. **Giao diện Menu trực quan:** In ra danh sách các lựa chọn được đánh số rõ ràng (1, 2, 3... 0: Thoát).\n2. **Vòng lặp điều khiển chính (Control Loop):** Sử dụng vòng lặp `do-while` để giữ chương trình luôn chạy cho đến khi người dùng chủ động chọn chức năng Thoát (`choice == 0`).\n3. **Bộ điều phối rẽ nhánh (Dispatcher):** Sử dụng `switch (choice)` để chuyển giao nhiệm vụ cho hàm chức năng tương ứng.\n4. **Cơ chế dừng xem kết quả:** Tạm dừng màn hình để người dùng đọc thông tin trước khi quay lại menu chính.\n5. **Xử lý trôi lệnh đệm bàn phím:** Dọn sạch `cin.ignore(10000, \'\\n\')` sau khi đọc số để các lệnh `getline()` đọc chuỗi họ tên tiếp theo không bị nuốt dòng.'
        },
        {
          title: '2. Kỹ thuật Mảng song song (Parallel Arrays) & Tính toàn vẹn Dữ liệu',
          content: 'Khi chưa học Lập trình hướng đối tượng (OOP Class) hoặc Cấu trúc dữ liệu nâng cao, kỹ thuật **Mảng song song (Parallel Arrays)** là giải pháp kinh điển để lưu trữ các thuộc tính của một tập đối tượng:\n\n- Mảng 1: `string ids[MAX_SV]` - Lưu Mã sinh viên.\n- Mảng 2: `string names[MAX_SV]` - Lưu Họ và tên sinh viên.\n- Mảng 3: `double scores[MAX_SV]` - Lưu Điểm số trung bình.\n- Biến quản lý: `int currentCount` - Lưu số lượng sinh viên hiện có trong danh sách.\n\n**Quy tắc bất biến (Invariant Rule):** Một phần tử ở chỉ số `i` đại diện cho MỘT sinh viên duy nhất (`ids[i]`, `names[i]`, `scores[i]`). Bất kỳ thao tác hoán vị sắp xếp nào trên mảng điểm `scores` BẮT BUỘC phải hoán vị đồng thời cả `ids` và `names` ở cùng chỉ số `i` để tránh tình trạng râu ông nọ cắm cằm bà kia!'
        },
        {
          title: '3. Nguyên tắc Thiết kế Mã nguồn Sạch (Clean Code Principles)',
          content: 'Để đồ án đạt chuẩn kỹ sư phần mềm:\n- **Nguyên lý Đơn trách nhiệm (Single Responsibility Principle):** Mỗi hàm chỉ làm duy nhất một việc (Hàm in bảng chỉ in bảng, hàm tính xếp loại chỉ trả về chuỗi xếp loại, không làm lẫn lộn).\n- **Hạn chế biến toàn cục (Avoid Global Variables):** Dữ liệu mảng và số lượng sinh viên phải được khai báo trong `main()` và truyền vào các hàm dưới dạng tham số (dùng tham chiếu `int &count` khi hàm có quyền thêm bớt sinh viên, dùng `const` khi chỉ đọc).\n- **Định dạng bảng biểu chuẩn mực:** Sử dụng `<iomanip>` với `setw()`, `left`, `right`, `fixed`, `setprecision()` để các cột ngay ngắn thẳng hàng.'
        }
      ],
      examples: [
        {
          title: 'Đồ án mẫu hoàn chỉnh: Hệ thống Quản lý Sinh viên & Học bạ (Console Mini Project)',
          problem: 'Xây dựng chương trình Console quản lý sinh viên với các tính năng:\n1. Nhập thêm danh sách sinh viên mới (Mã SV, Họ tên, Điểm trung bình từ 0 đến 10).\n2. Xuất bảng danh sách sinh viên chuẩn form kèm Xếp loại học lực.\n3. Tìm kiếm sinh viên theo Mã sinh viên (chính xác).\n4. Sắp xếp danh sách sinh viên giảm dần theo Điểm trung bình (thuật toán Bubble Sort / Selection Sort trên mảng song song).\n5. Thống kê số lượng sinh viên Giỏi, Khá, Trung bình, Yếu.\n0. Thoát chương trình.',
          analysis: {
            input: 'Các lựa chọn Menu và dữ liệu sinh viên nhập từ bàn phím.',
            output: 'Bảng biểu thông tin sinh viên được căn lề chuẩn xác, thông báo tìm kiếm và báo cáo thống kê.',
            idea: 'Chia nhỏ bài toán thành 7 hàm độc lập: showMenu(), addStudent(), printStudentTable(), getRank(), searchById(), sortByScoreDescending(), showStatistics().',
            algorithm: 'Dùng do-while lặp menu. Dùng mảng song song ids[], names[], scores[]. Khi sort, hoán vị đồng thời cả 3 mảng.'
          },
          code: `#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

const int MAX_STUDENTS = 100;

// ========================================================
// CÁC HÀM TIỆN ÍCH NGHIỆP VỤ (HELPER FUNCTIONS)
// ========================================================

// Hàm xác định xếp loại học lực dựa trên thang điểm 10
string getRank(double score) {
    if (score >= 8.5) return "Xuat sac";
    if (score >= 8.0) return "Gioi";
    if (score >= 6.5) return "Kha";
    if (score >= 5.0) return "Trung binh";
    return "Yeu";
}

// In menu điều khiển chính
void showMenu() {
    cout << "\n==================================================" << endl;
    cout << "     HE THONG QUAN LY DIEM SINH VIEN (C++)       " << endl;
    cout << "==================================================" << endl;
    cout << " 1. Nhap them sinh vien moi                       " << endl;
    cout << " 2. Hien thi danh sach sinh vien va bang diem     " << endl;
    cout << " 3. Tim kiem sinh vien theo Ma So (MSSV)          " << endl;
    cout << " 4. Sap xep danh sach giam dan theo Diem (Top)   " << endl;
    cout << " 5. Thong ke ty le hoc luc toan khoa             " << endl;
    cout << " 0. Thoat chuong trinh                            " << endl;
    cout << "==================================================" << endl;
    cout << "=> Nhap lua chon cua ban [0-5]: ";
}

// 1. Chức năng nhập thêm sinh viên (Truyền tham chiếu count để cập nhật số lượng)
void addStudent(string ids[], string names[], double scores[], int &count) {
    if (count >= MAX_STUDENTS) {
        cout << "[Loi]: Bo nho da day! Khong the them sinh vien moi.\n";
        return;
    }

    cout << "\n--- NHAP THONG TIN SINH VIEN MOI (#" << (count + 1) << ") ---" << endl;
    
    // Nhập Mã số sinh viên
    cout << "Nhap Ma So Sinh Vien (MSSV): ";
    cin >> ids[count];
    
    // Xóa bộ đệm bàn phím để tránh trôi dòng khi dùng getline tiếp theo
    cin.ignore(10000, '\\n');

    // Nhập Họ và tên (có dấu cách)
    cout << "Nhap Ho va Ten: ";
    getline(cin, names[count]);

    // Nhập Điểm trung bình có kiểm tra tính hợp lệ (0 <= score <= 10)
    while (true) {
        cout << "Nhap Diem trung binh (0.0 -> 10.0): ";
        if (cin >> scores[count] && scores[count] >= 0.0 && scores[count] <= 10.0) {
            break;
        }
        cout << "[Canh bao]: Diem khong hop le! Vui long nhap lai so thuc tu 0.0 den 10.0.\\n";
        cin.clear();
        cin.ignore(10000, '\\n');
    }

    count++; // Tăng số lượng sinh viên hiện có
    cout << "[Thanh cong]: Da them sinh vien vao he thong!\n";
}

// 2. Chức năng in danh sách sinh viên dưới dạng bảng chuẩn
void printStudentTable(const string ids[], const string names[], const double scores[], int count) {
    if (count == 0) {
        cout << "\n[Thong bao]: Danh sach sinh vien hien dang trong!\n";
        return;
    }

    cout << "\n" << string(70, '=') << endl;
    cout << "                     DANH SACH SINH VIEN                         " << endl;
    cout << string(70, '=') << endl;
    cout << left << setw(6)  << "STT"
         << left << setw(12) << "MSSV"
         << left << setw(28) << "HO VA TEN"
         << right << setw(8) << "DIEM TB"
         << right << setw(16) << "XEP LOAI" << endl;
    cout << string(70, '-') << endl;

    for (int i = 0; i < count; ++i) {
        cout << left << setw(6)  << (i + 1)
             << left << setw(12) << ids[i]
             << left << setw(28) << names[i]
             << right << setw(8) << fixed << setprecision(1) << scores[i]
             << right << setw(16) << getRank(scores[i]) << endl;
    }
    cout << string(70, '=') << endl;
    cout << "Tong so: " << count << " sinh vien.\n";
}

// 3. Chức năng tìm kiếm sinh viên theo MSSV
void searchById(const string ids[], const string names[], const double scores[], int count) {
    if (count == 0) {
        cout << "\n[Thong bao]: Danh sach trong, khong co du lieu de tim kiem!\n";
        return;
    }

    string targetId;
    cout << "\nNhap MSSV can tim kiem: ";
    cin >> targetId;

    int foundIndex = -1;
    for (int i = 0; i < count; ++i) {
        if (ids[i] == targetId) {
            foundIndex = i;
            break; // Tìm thấy dừng ngay
        }
    }

    if (foundIndex != -1) {
        cout << "\n[KET QUA TIM THAY]:" << endl;
        cout << "- MSSV       : " << ids[foundIndex] << endl;
        cout << "- Ho va Ten  : " << names[foundIndex] << endl;
        cout << "- Diem TB    : " << fixed << setprecision(1) << scores[foundIndex] << endl;
        cout << "- Xep loai   : " << getRank(scores[foundIndex]) << endl;
    } else {
        cout << "\n[Loi]: Khong tim thay sinh vien nao co MSSV la '" << targetId << "'!\n";
    }
}

// 4. Chức năng sắp xếp giảm dần theo điểm (Mảng song song - Hoán vị đồng thời)
void sortByScoreDescending(string ids[], string names[], double scores[], int count) {
    if (count < 2) {
        cout << "\n[Thong bao]: Danh sach it hon 2 sinh vien, khong can sap xep!\n";
        return;
    }

    // Thuật toán Selection Sort trên mảng song song
    for (int i = 0; i < count - 1; ++i) {
        int maxIdx = i;
        for (int j = i + 1; j < count; ++j) {
            if (scores[j] > scores[maxIdx]) {
                maxIdx = j;
            }
        }
        if (maxIdx != i) {
            // Hoán vị đồng thời cả 3 mảng song song
            swap(scores[i], scores[maxIdx]);
            swap(ids[i], ids[maxIdx]);
            swap(names[i], names[maxIdx]);
        }
    }

    cout << "\n[Thanh cong]: Da sap xep danh sach giam dan theo diem trung binh!\n";
    printStudentTable(ids, names, scores, count);
}

// 5. Chức năng thống kê phân loại học lực
void showStatistics(const double scores[], int count) {
    if (count == 0) {
        cout << "\n[Thong bao]: Danh sach trong, chua co du lieu thong ke!\n";
        return;
    }

    int countXuatSac = 0, countGioi = 0, countKha = 0, countTB = 0, countYeu = 0;
    double sumScore = 0.0;

    for (int i = 0; i < count; ++i) {
        sumScore += scores[i];
        if (scores[i] >= 8.5) countXuatSac++;
        else if (scores[i] >= 8.0) countGioi++;
        else if (scores[i] >= 6.5) countKha++;
        else if (scores[i] >= 5.0) countTB++;
        else countYeu++;
    }

    cout << "\n================= BAO CAO THONG KE =================" << endl;
    cout << "- Tong so sinh vien        : " << count << endl;
    cout << "- Diem trung binh toan khoa: " << fixed << setprecision(2) << (sumScore / count) << endl;
    cout << "---------------------------------------------------" << endl;
    cout << "- Xuat sac (>= 8.5)        : " << countXuatSac << " SV (" << (countXuatSac * 100.0 / count) << "%)" << endl;
    cout << "- Gioi (8.0 -> 8.4)        : " << countGioi    << " SV (" << (countGioi * 100.0 / count) << "%)" << endl;
    cout << "- Kha (6.5 -> 7.9)         : " << countKha     << " SV (" << (countKha * 100.0 / count) << "%)" << endl;
    cout << "- Trung binh (5.0 -> 6.4)  : " << countTB      << " SV (" << (countTB * 100.0 / count) << "%)" << endl;
    cout << "- Yeu (< 5.0)              : " << countYeu     << " SV (" << (countYeu * 100.0 / count) << "%)" << endl;
    cout << "===================================================" << endl;
}

// ========================================================
// HÀM MAIN: TRUNG TÂM ĐIỀU PHỐI CHƯƠNG TRÌNH
// ========================================================
int main() {
    string ids[MAX_STUDENTS];
    string names[MAX_STUDENTS];
    double scores[MAX_STUDENTS];
    int currentCount = 0;

    // Nạp sẵn 3 sinh viên mẫu để thuận tiện chạy thử nghiệm
    ids[0] = "SV001"; names[0] = "Nguyen Van An";     scores[0] = 8.8;
    ids[1] = "SV002"; names[1] = "Tran Thi Bich";     scores[1] = 6.2;
    ids[2] = "SV003"; names[2] = "Le Hoang Cuong";    scores[2] = 9.4;
    currentCount = 3;

    int choice = -1;

    do {
        showMenu();
        if (!(cin >> choice)) {
            cout << "[Loi]: Vui long chi nhap chu so tu 0 den 5!\n";
            cin.clear();
            cin.ignore(10000, '\\n');
            continue;
        }

        switch (choice) {
            case 1:
                addStudent(ids, names, scores, currentCount);
                break;
            case 2:
                printStudentTable(ids, names, scores, currentCount);
                break;
            case 3:
                searchById(ids, names, scores, currentCount);
                break;
            case 4:
                sortByScoreDescending(ids, names, scores, currentCount);
                break;
            case 5:
                showStatistics(scores, currentCount);
                break;
            case 0:
                cout << "\nCam on ban da su dung phan mem! Tam biet va hen gap lai.\n";
                break;
            default:
                cout << "\n[Canh bao]: Lua chon khong hop le! Vui long chon tu 0 den 5.\n";
                break;
        }
    } while (choice != 0);

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'cin.ignore(10000, \'\\n\'); sau khi cin >> ids[count]',
              explanation: 'Xóa toàn bộ ký tự enter hoặc dấu cách còn đọng trong stdin, giúp hàm getline(cin, names[count]) tiếp theo đọc trọn vẹn họ tên mà không bị trôi.'
            },
            {
              lineOrBlock: 'swap(scores[i], scores[maxIdx]); swap(ids[i], ...); swap(names[i], ...);',
              explanation: 'Nguyên tắc bất biến của Mảng song song: khi đổi vị trí điểm số, bắt buộc phải hoán vị cả mã sinh viên và họ tên ở cùng chỉ mục.'
            },
            {
              lineOrBlock: 'int &count trong addStudent',
              explanation: 'Truyền tham chiếu để biến đếm currentCount trong hàm main thực sự tăng lên sau khi thêm thành công một sinh viên.'
            }
          ],
          executionResult: {
            sampleInput: `2
4
0`,
            sampleOutput: `==================================================
     HE THONG QUAN LY DIEM SINH VIEN (C++)       
==================================================
 1. Nhap them sinh vien moi                       
 2. Hien thi danh sach sinh vien va bang diem     
 3. Tim kiem sinh vien theo Ma So (MSSV)          
 4. Sap xep danh sach giam dan theo Diem (Top)   
 5. Thong ke ty le hoc luc toan khoa             
 0. Thoat chuong trinh                            
==================================================
=> Nhap lua chon cua ban [0-5]: 2

======================================================================
                     DANH SACH SINH VIEN                         
======================================================================
STT   MSSV        HO VA TEN                       DIEM TB        XEP LOAI
----------------------------------------------------------------------
1     SV001       Nguyen Van An                       8.8        Xuat sac
2     SV002       Tran Thi Bich                       6.2      Trung binh
3     SV003       Le Hoang Cuong                      9.4        Xuat sac
======================================================================
Tong so: 3 sinh vien.

=> Nhap lua chon cua ban [0-5]: 4

[Thanh cong]: Da sap xep danh sach giam dan theo diem trung binh!

======================================================================
                     DANH SACH SINH VIEN                         
======================================================================
STT   MSSV        HO VA TEN                       DIEM TB        XEP LOAI
----------------------------------------------------------------------
1     SV003       Le Hoang Cuong                      9.4        Xuat sac
2     SV001       Nguyen Van An                       8.8        Xuat sac
3     SV002       Tran Thi Bich                       6.2      Trung binh
======================================================================
Tong so: 3 sinh vien.

=> Nhap lua chon cua ban [0-5]: 0

Cam on ban da su dung phan mem! Tam biet va hen gap lai.`
          },
          analysisOfResult: 'Sau khi chọn chức năng 4 (Sắp xếp), sinh viên Lê Hoàng Cường (9.4) đã được đưa lên vị trí số 1, tiếp đến là Nguyễn Văn An (8.8) và Trần Thị Bích (6.2). Toàn bộ dữ liệu MSSV, Họ tên và Điểm đi cùng nhau không bị sai lệch.'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Thêm chức năng Tìm kiếm sinh viên có Điểm cao nhất',
          task: 'Viết thêm hàm `findTopStudent(const string names[], const double scores[], int count)` tìm và in ra thông tin của sinh viên có điểm trung bình cao nhất lớp.',
          hints: ['Tìm maxScore trước, sau đó duyệt in tất cả các bạn có điểm bằng maxScore (đề phòng có nhiều bạn đồng thủ khoa).'],
          expectedOutput: 'In ra tên và điểm số thủ khoa của lớp.'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Bổ sung tính năng Xóa sinh viên theo MSSV',
          task: 'Xây dựng hàm `deleteStudentById(string ids[], string names[], double scores[], int &count)`: Tìm vị trí có MSSV trùng khớp, dồn các phần tử phía sau lên trước 1 vị trí và giảm `count--`.',
          hints: ['Duyệt từ vị trí index tìm thấy đến count - 2, gán a[k] = a[k+1].'],
          expectedOutput: 'Xóa thành công và giảm số lượng sinh viên đi 1.'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Bổ sung tính năng Cập nhật/Sửa điểm sinh viên',
          task: 'Xây dựng hàm `updateScoreById(const string ids[], double scores[], int count)`: Nhập MSSV, nếu tìm thấy cho phép nhập điểm mới (có kiểm tra hợp lệ 0-10) và cập nhật lại điểm.',
          hints: ['Dùng tìm kiếm tuyến tính tìm vị trí phần tử, sau đó gán đè scores[pos] = newScore.'],
          expectedOutput: 'Cập nhật thành công điểm mới cho sinh viên.'
        }
      ],
      commonErrors: [
        {
          name: 'Lỗi sắp xếp không đồng bộ mảng song song (Dangling Data)',
          symptom: 'Sau khi sắp xếp điểm từ cao xuống thấp, điểm thì giảm dần thật nhưng tên của sinh viên giỏi lại bị gán cho người khác!',
          rootCause: 'Chỉ hoán vị mảng `scores` mà quên không hoán vị đồng thời mảng `names` và `ids`.',
          howToFix: 'Bất cứ khi nào thực hiện `swap(scores[i], scores[j])`, bắt buộc phải gọi kèm `swap(names[i], names[j])` và `swap(ids[i], ids[j])`.',
          badCode: `if (scores[j] > scores[i]) {
    swap(scores[i], scores[j]); // QUÊN ĐỔI TÊN VÀ MSSV!
}`,
          goodCode: `if (scores[j] > scores[i]) {
    swap(scores[i], scores[j]);
    swap(names[i], names[j]);
    swap(ids[i], ids[j]); // ĐỒNG BỘ 100%
}`
        },
        {
          name: 'Lỗi treo lặp vô hạn khi người dùng nhập chữ cái vào lựa chọn Menu',
          symptom: 'Người dùng lỡ tay gõ chữ cái \'a\' thay vì số 1, console bắn ra hàng triệu dòng menu không ngừng nghỉ.',
          rootCause: '`cin >> choice` thất bại khi đọc ký tự không phải số, cờ `failbit` bật và ký tự rác vẫn kẹt trong luồng `cin`.',
          howToFix: 'Kiểm tra `if (!(cin >> choice))` rồi gọi `cin.clear()` và `cin.ignore(10000, \'\\n\')`.',
          badCode: `cin >> choice; // Nếu nhập chữ 'x', biến choice không nhận, vòng lặp do-while chạy vô hạn!`,
          goodCode: `if (!(cin >> choice)) {
    cout << "Vui long chi nhap so!\\n";
    cin.clear();
    cin.ignore(10000, '\\n');
    continue;
}`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Vòng lặp sự kiện trong Console App',
          description: 'Tại sao vòng lặp `do-while` lại là cấu trúc điều khiển lý tưởng nhất để xây dựng Menu điều khiển ứng dụng dòng lệnh?'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Bản chất của Mảng song song (Parallel Arrays)',
          description: 'Phân tích ưu điểm và nhược điểm lớn nhất của kỹ thuật Mảng song song khi quản lý danh sách gồm nhiều thuộc tính của đối tượng trong C++ nhập môn.'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Xây dựng phân hệ Lọc danh sách học bổng',
          description: 'Viết thêm hàm in danh sách các sinh viên đủ điều kiện nhận học bổng (Điểm TB >= 8.0 và không có môn nào dưới 5.0) được định dạng theo bảng ngay ngắn.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Chống trùng lặp Mã số sinh viên (Unique Key Validation)',
          description: 'Cải tiến hàm `addStudent`: Khi người dùng nhập MSSV mới, hệ thống tự động kiểm tra xem MSSV này đã tồn tại trong mảng `ids` hay chưa. Nếu đã có, bắt buộc người dùng nhập lại MSSV khác.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Khi sử dụng kỹ thuật Mảng song song (Parallel Arrays) để quản lý thông tin sinh viên, điều gì bắt buộc phải tuân thủ khi thực hiện thuật toán sắp xếp?',
          options: [
            'Chỉ cần sắp xếp mảng điểm là đủ',
            'Phải hoán vị đồng thời các phần tử ở cùng chỉ số trên tất cả các mảng thuộc tính liên quan',
            'Phải gộp tất cả các mảng thành mảng 2 chiều trước khi sắp xếp',
            'Không được phép sắp xếp mảng song song'
          ],
          correctIndex: 1,
          explanation: 'Vì dữ liệu của 1 sinh viên nằm phân tán ở cùng chỉ số index trên nhiều mảng, nên việc hoán vị phải thực hiện đồng bộ trên mọi mảng để bảo toàn tính toàn vẹn dữ liệu.'
        },
        {
          id: 2,
          question: 'Lệnh `cin.ignore(10000, \'\\n\')` đóng vai trò gì sau câu lệnh `cin >> ids[count]`?',
          options: [
            'Xóa bộ nhớ RAM của máy tính',
            'Xóa sạch các ký tự còn sót lại trong bộ đệm bàn phím cho đến khi gặp dấu xuống dòng, ngăn ngừa hiện tượng trôi lệnh ở lần gọi `getline()` kế tiếp',
            'Làm dừng chương trình 10000 mili-giây',
            'Tăng tốc độ xử lý của CPU'
          ],
          correctIndex: 1,
          explanation: 'Toán tử >> để lại ký tự xuống dòng \'\\n\' trong bộ đệm. Nếu không dọn sạch, lệnh getline() tiếp theo sẽ đọc ngay ký tự \'\\n\' này và bị trôi qua mà không đợi người dùng nhập họ tên.'
        },
        {
          id: 3,
          question: 'Tại sao tham số `int &count` trong hàm `addStudent` phải được truyền theo kiểu Tham chiếu (Reference)?',
          options: [
            'Để tiết kiệm bộ nhớ cho biến số nguyên',
            'Để giá trị tăng lên của số lượng sinh viên sau khi nhập mới được cập nhật thực sự về biến `currentCount` trong hàm `main`',
            'Quy định bắt buộc của thư viện <iostream>',
            'Để biến count không thể bị sửa đổi giá trị'
          ],
          correctIndex: 1,
          explanation: 'Nếu truyền tham trị (int count), hàm chỉ thao tác trên bản sao cục bộ, khi hàm kết thúc số lượng sinh viên trong main() vẫn giữ nguyên con số cũ!'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Console Menu', val: 'Vòng lặp do-while + switch-case + validate input' },
          { key: 'Mảng song song', val: 'Lưu nhiều thuộc tính tại cùng chỉ số i; swap phải đồng bộ' },
          { key: 'Trôi lệnh', val: 'Luôn gọi cin.ignore() sau khi cin >> số trước khi dùng getline()' },
          { key: 'Mô-đun hóa', val: 'Mỗi chức năng menu là 1 hàm độc lập, truyền tham chiếu khi cần ghi' },
          { key: 'Thẩm mỹ xuất bảng', val: 'Kết hợp setw(), left, right, setprecision() từ <iomanip>' }
        ],
        coreTakeaway: 'Một ứng dụng hoàn chỉnh là sự kết tinh của tư duy kiến trúc: Chia bài toán lớn thành các hàm nhỏ, kiểm soát chặt chẽ luồng dữ liệu và mang lại trải nghiệm tiện dụng cho người dùng.'
      },
      checklist: [
        'Tôi biết cách xây dựng Console Menu tương tác chuyên nghiệp bằng do-while và switch-case.',
        'Tôi thành thạo kỹ thuật Mảng song song và bảo đảm tính toàn vẹn dữ liệu khi sắp xếp.',
        'Tôi xử lý triệt để lỗi trôi lệnh bằng cin.ignore().',
        'Tôi định dạng bảng biểu báo cáo đẹp mắt bằng <iomanip>.'
      ],
      extendedChallenge: {
        title: 'Bổ sung tính năng Đọc và Ghi tệp văn bản (File I/O)',
        scenario: 'Chương trình hiện tại bị mất toàn bộ dữ liệu sinh viên sau khi đóng cửa sổ console.',
        challengeTask: 'Tìm hiểu thư viện `<fstream>` của C++: Bổ sung 2 hàm `saveToFile(\"students.txt\")` và `loadFromFile(\"students.txt\")` để lưu và tự động nạp lại danh sách sinh viên khi khởi động ứng dụng.',
        thoughtGuidance: 'Sử dụng `ifstream` để đọc từng dòng và `ofstream` để ghi dữ liệu.'
      }
    },

    // -------------------------------------------------------------
    // BÀI 2: TỔNG KẾT HỌC PHẦN, ĐÁNH GIÁ NĂNG LỰC & HƯỚNG PHÁT TRIỂN (L32)
    // -------------------------------------------------------------
    {
      id: 'CH10-L02',
      lessonNumber: 2,
      chapterNumber: 10,
      title: 'Tổng Kết Học Phần, Chiến Lược Thi Thực Hành Điểm A+ & Lộ Trình Phát Triển',
      readingTimeMinutes: 50,
      moodleType: 'Đề thi thử thực hành cuối kỳ tổng hợp (Comprehensive Final Coding Exam) 90 phút',
      objectives: [
        'Hệ thống hóa toàn bộ bức tranh kiến thức Lập trình Căn bản C++ từ Chương 1 đến Chương 10 thành bản đồ tư duy logic vững chắc.',
        'Nắm vững ma trận kỹ năng thi thực hành lập trình cuối kỳ (Final Exam Matrix) và chiến lược quản lý thời gian thi 90 phút tối ưu.',
        'Làm chủ bộ kỹ năng sinh tồn trong phòng thi: Chiến thuật làm bài từ dễ đến khó, kỹ thuật đọc đề bài, xử lý biên testcase ẩn, và cách ăn trọn điểm thành phần.',
        'Định vị chính xác vị trí của học phần C++ Căn bản trong chương trình đào tạo Kỹ sư Công nghệ Thông tin / Khoa học Máy tính.',
        'Xác lập lộ trình học tập tiếp theo (Next Steps): Chuyển tiếp tự tin sang Kỹ thuật Lập trình (Con trỏ, Cấp phát động, Struct), Lập trình Hướng đối tượng (OOP), và Cấu trúc Dữ liệu & Giải thuật (DSA).'
      ],
      prerequisites: [
        'Đã học xong toàn bộ các bài học của học phần (CH01 -> CH10-L01).'
      ],
      leadIn: {
        hook: 'Chúc mừng bạn! Bạn đã hoàn thành trọn vẹn 32 bài học của học phần Lập trình Căn bản C++. Từ một người chưa từng biết câu lệnh `#include <iostream>` là gì, giờ đây bạn đã có thể viết hàng trăm dòng mã nguồn giải quyết các bài toán thực tế phức tạp. Nhưng cánh cửa này khép lại cũng là lúc cánh cửa của thế giới công nghệ phần mềm thực thụ mở ra!',
        question: 'Kỳ thi thực hành cuối kỳ đang đến rất gần, làm thế nào để bạn phát huy 100% phong độ, không bị mất điểm oan bởi các lỗi biên ngớ ngẩn và bước ra khỏi phòng thi với điểm A+ trên tay?',
        realWorldScenario: 'Hàng ngàn sinh viên mỗi kỳ thi lập trình đều mắc chung một bi kịch: Ôm một bài khó suốt 60 phút đầu tiên mà không làm được, đến 30 phút cuối hoảng loạn làm các bài dễ thì gõ nhầm cú pháp hoặc dính lỗi runtime crash và nhận điểm dưới trung bình. Chiến lược làm bài thi quan trọng không kém gì năng lực viết code!'
      },
      theorySections: [
        {
          title: '1. Bản đồ Tư duy Hệ thống hóa Toàn diện Học phần C++ Căn bản',
          content: 'Toàn bộ 10 chương học phần được liên kết chặt chẽ theo 4 trụ cột kiến trúc:\n\n1. **Trụ cột 1: Nền tảng Xử lý Dữ liệu (CH01 - CH02):**\n   - Hiểu bản chất máy tính (CPU, RAM, Binary), biến, kiểu dữ liệu (`int`, `double`, `char`, `bool`), toán tử số học, logic và độ ưu tiên toán tử.\n\n2. **Trụ cột 2: Cấu trúc Điều khiển Luồng (CH03 - CH04):**\n   - Rẽ nhánh thông minh với `if / else if / else` và `switch-case`.\n   - Lặp xử lý tập dữ liệu lớn với `for` (biết trước số lần), `while` (lặp theo điều kiện) và `do-while` (lặp ít nhất 1 lần).\n\n3. **Trụ cột 3: Cấu trúc Dữ liệu Tập hợp (CH05 - CH07):**\n   - Xử lý văn bản với chuỗi ký tự chuẩn `std::string`.\n   - Xử lý dãy số tuyến tính với Mảng 1 chiều (Array 1D): Tìm kiếm, Max/Min, Sắp xếp.\n   - Xử lý bảng biểu và hình học với Mảng 2 chiều (Ma trận 2D): Hàng, cột, đường chéo chính/phụ.\n\n4. **Trụ cột 4: Kỹ thuật Kỹ sư Phần mềm (CH08 - CH10):**\n   - Hàm và nguyên lý chia để trị (DRY, Scope, Tham trị vs Tham chiếu).\n   - Phương pháp phân tích bài toán, thiết kế Testcases và kỹ năng Debug chuyên nghiệp.\n   - Xây dựng đồ án hoàn chỉnh kết nối đa thành phần.'
        },
        {
          title: '2. Chiến thuật Vàng Làm Bài Thi Thực Hành Cuối Kỳ (90 Phút Đạt Điểm A+)',
          content: 'Một bài thi thực hành chuẩn gồm 3 - 4 câu hỏi phân tầng Bloom. Hãy áp dụng **Quy tắc Phân bổ Thời gian 15 - 45 - 20 - 10**:\n\n- **15 phút đầu: Đọc lướt toàn bộ đề và Xếp hàng ưu tiên:**\n  - Đọc từ câu đầu đến câu cuối. Đánh dấu câu DỄ NHẤT (thường là câu tính toán số học hoặc mảng 1D đơn giản).\n  - Lập tức làm và nộp ngay câu dễ nhất để cầm chắc 3 - 4 điểm trong tay, tạo tâm lý hưng phấn.\n\n- **45 phút tiếp theo: Giải quyết các câu trung bình và mảng 2 chiều:**\n  - Tách hàm rõ ràng: Viết hàm nhập, hàm xử lý riêng. Ngay cả khi chưa làm xong hàm xử lý, bạn vẫn được điểm phần nhập xuất!\n\n- **20 phút sau: Xử lý bài phân loại (Vận dụng cao):**\n  - Tập trung suy nghĩ thuật toán, vẽ nháp trước khi code. Nếu không giải được cách tối ưu, hãy viết cách \"vét cạn\" (Brute-force) để lấy điểm từng phần.\n\n- **10 phút cuối: Săn lùng Ca biên (Edge Cases Check):**\n  - Thử nghiệm với các ca nguy hiểm: $N = 0$, số âm, dữ liệu cực lớn xem có bị tràn số `int` hay không (thay bằng `long long`).\n  - Xóa bỏ mọi câu lệnh `cout << \"[DEBUG]\"` thừa thãi trước khi nộp bài.'
        },
        {
          title: '3. Lộ trình Chuyển tiếp Vững chắc (What\'s Next?)',
          content: 'Sau khi hoàn thành học phần này, hành trình trở thành Kỹ sư phần mềm của bạn sẽ bước sang các nấc thang tiếp theo:\n\n1. **Kỹ thuật Lập trình (Advanced Programming Techniques):**\n   - Con trỏ (Pointers) và Địa chỉ ô nhớ RAM (`*`, `&`).\n   - Cấp phát bộ nhớ động trên Heap (`new`, `delete`) thay thế mảng tĩnh.\n   - Kiểu cấu trúc `struct` đóng gói dữ liệu và Đọc/Ghi tệp tin (`fstream`).\n   - Đệ quy (Recursion) và giải thuật quay lui.\n\n2. **Lập trình Hướng đối tượng (Object-Oriented Programming - OOP):**\n   - Chuyển đổi tư duy từ \"Lập trình hướng thủ tục\" sang 4 tính chất OOP: Đóng gói (Encapsulation), Kế thừa (Inheritance), Đa hình (Polymorphism) và Trừu tượng (Abstraction).\n\n3. **Cấu trúc Dữ liệu & Giải thuật (Data Structures & Algorithms - DSA):**\n   - Danh sách liên kết (Linked List), Ngăn xếp (Stack), Hàng đợi (Queue), Cây nhị phân (Binary Tree).\n   - Đánh giá độ phức tạp thuật toán Big-O ($O(N)$, $O(N \\log N)$, $O(N^2)$).\n   - Thuật toán tìm kiếm nhị phân, quy hoạch động, đồ thị.'
        }
      ],
      examples: [
        {
          title: 'Đề thi thực hành thử nghiệm tổng hợp: 4 Câu hỏi chuẩn đề thi cuối kỳ',
          problem: 'Cho cấu trúc đề thi gồm 4 câu:\n- Câu 1 (2 điểm): Kiểm tra số nguyên tố và tính tổng các ước số.\n- Câu 2 (3 điểm): Xử lý mảng 1D: Chèn phần tử X vào vị trí K mà không làm mất thứ tự.\n- Câu 3 (3 điểm): Xử lý chuỗi ký tự: Chuẩn hóa họ tên (xóa dấu cách thừa, viết hoa chữ cái đầu).\n- Câu 4 (2 điểm): Ma trận 2D: Tìm điểm yên ngựa (Saddle Point) trong ma trận chữ nhật.\nTriển khai mã nguồn hoàn chỉnh câu 3 (Chuẩn hóa chuỗi) - Dạng bài kinh điển thường xuyên xuất hiện trong đề thi.',
          analysis: {
            input: 'Chuỗi họ tên người dùng nhập lộn xộn có nhiều dấu cách thừa ở đầu, cuối và giữa các từ.',
            output: 'Chuỗi đã chuẩn hóa theo đúng quy tắc danh xưng tiếng Việt.',
            idea: 'Bước 1: Xóa khoảng trắng đầu và cuối. Bước 2: Rút gọn các khoảng trắng liên tiếp ở giữa thành 1 dấu cách duy nhất. Bước 3: Chuyển toàn bộ ký tự thành chữ thường, sau đó viết hoa chữ cái đầu mỗi từ.',
            algorithm: 'Duyệt chuỗi bằng std::string kết hợp các hàm tolower(), toupper().'
          },
          code: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

// ========================================================
// BÀI GIẢI MẪU CÂU THI CHUẨN: CHUẨN HÓA HỌ VÀ TÊN
// ========================================================

// Hàm chuẩn hóa họ tên đầy đủ theo quy tắc văn bản chuẩn
string normalizeFullName(string s) {
    // 1. Xóa khoảng trắng thừa ở đầu chuỗi (Leading spaces)
    while (!s.empty() && s.front() == ' ') {
        s.erase(s.begin());
    }

    // 2. Xóa khoảng trắng thừa ở cuối chuỗi (Trailing spaces)
    while (!s.empty() && s.back() == ' ') {
        s.pop_back();
    }

    if (s.empty()) return "";

    // 3. Rút gọn khoảng trắng thừa ở giữa và chuẩn hóa viết hoa/thường
    string result = "";
    bool newWord = true; // Cờ hiệu đánh dấu bắt đầu từ mới

    for (size_t i = 0; i < s.length(); ++i) {
        if (s[i] == ' ') {
            // Nếu ký tự hiện tại là dấu cách và ký tự trước đó chưa phải dấu cách
            if (!result.empty() && result.back() != ' ') {
                result += ' ';
                newWord = true; // Sau dấu cách sẽ là chữ cái đầu của từ tiếp theo
            }
        } else {
            // Ký tự chữ cái
            if (newWord) {
                result += (char)toupper(s[i]); // Chữ cái đầu từ viết HOA
                newWord = false;
            } else {
                result += (char)tolower(s[i]); // Các chữ cái còn lại viết THƯỜNG
            }
        }
    }

    return result;
}

int main() {
    cout << "=== CHUONG TRINH CHUAN HOA HO TEN CHUAN DE THI ===" << endl;
    
    string rawName;
    cout << "Nhap ho va ten can chuan hoa: ";
    getline(cin, rawName);

    string cleanedName = normalizeFullName(rawName);

    cout << "\n[KET QUA SAU CHUAN HOA]:" << endl;
    cout << "Chuoi ban dau : \\"" << rawName << "\\"" << endl;
    cout << "Chuoi chuan hoa: \\"" << cleanedName << "\\"" << endl;
    cout << "Do dai hop le  : " << cleanedName.length() << " ky tu." << endl;
    cout << "==================================================" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: 'while (!s.empty() && s.front() == \' \') s.erase(s.begin());',
              explanation: 'Xử lý triệt để trường hợp biên (Edge Case) người dùng gõ hàng chục dấu cách ở đầu chuỗi.'
            },
            {
              lineOrBlock: 'bool newWord = true; if (newWord) toupper() else tolower()',
              explanation: 'Kỹ thuật máy trạng thái đơn giản (State Machine): Bật cờ khi gặp dấu cách để biết chữ cái tiếp theo phải in hoa.'
            },
            {
              lineOrBlock: 'if (!result.empty() && result.back() != \' \') result += \' \';',
              explanation: 'Ngăn chặn hiện tượng 2 dấu cách liên tiếp nằm cạnh nhau trong kết quả cuối cùng.'
            }
          ],
          executionResult: {
            sampleInput: `   ngUYen    vAN    aN   `,
            sampleOutput: `=== CHUONG TRINH CHUAN HOA HO TEN CHUAN DE THI ===
Nhap ho va ten can chuan hoa:    ngUYen    vAN    aN   

[KET QUA SAU CHUAN HOA]:
Chuoi ban dau : "   ngUYen    vAN    aN   "
Chuoi chuan hoa: "Nguyen Van An"
Do dai hop le  : 13 ky tu.
==================================================`
          },
          analysisOfResult: 'Chuỗi đầu vào rất lộn xộn với chữ hoa chữ thường lẫn lộn và khoảng trắng thừa ở mọi vị trí đã được chuẩn hóa hoàn hảo thành "Nguyen Van An".'
        }
      ],
      practices: [
        {
          level: 'Cấp độ 1: Cơ bản',
          title: 'Đề thi Câu 1: Kiểm tra số nguyên tố và số hoàn hảo',
          task: 'Viết 2 hàm độc lập `bool isPrime(long long n)` và `bool isPerfect(long long n)` kiểm tra tính nguyên tố và số hoàn hảo. Áp dụng tối ưu căn bậc hai $O(\\sqrt{N})$.',
          hints: ['Chạy vòng lặp kiểm tra ước từ 2 đến sqrt(n). Chú ý số âm, 0 và 1 không phải là số nguyên tố.'],
          expectedOutput: 'Kiểm tra chính xác với các số lớn đến 10^12.'
        },
        {
          level: 'Cấp độ 2: Củng cố',
          title: 'Đề thi Câu 2: Chèn phần tử vào mảng đã sắp xếp',
          task: 'Cho mảng số nguyên A đã được sắp xếp tăng dần. Viết hàm chèn số X vào mảng sao cho mảng vẫn giữ nguyên thứ tự tăng dần mà không cần gọi lại thuật toán sắp xếp.',
          hints: ['Tìm vị trí pos đầu tiên có a[pos] > X, dịch các phần tử từ pos về sau sang phải 1 ô, sau đó gán a[pos] = X.'],
          expectedOutput: 'Mảng mới tăng kích thước lên 1 và vẫn tăng dần.'
        },
        {
          level: 'Cấp độ 3: Vận dụng',
          title: 'Đề thi Câu 4: Tìm Điểm yên ngựa trong Ma trận',
          task: 'Điểm yên ngựa (Saddle point) của ma trận là phần tử nhỏ nhất trên hàng của nó nhưng đồng thời là lớn nhất trên cột của nó. Hãy viết chương trình tìm tất cả các điểm yên ngựa trong ma trận A kích thước M x N.',
          hints: ['Với mỗi hàng i, tìm giá trị min trên hàng đó. Sau đó kiểm tra xem giá trị này có phải là max trên cột tương ứng hay không.'],
          expectedOutput: 'In ra tọa độ (hàng, cột) và giá trị của các điểm yên ngựa.'
        }
      ],
      commonErrors: [
        {
          name: 'Sai lầm chiến lược: Mắc kẹt vào bài khó nhất trong 45 phút đầu',
          symptom: 'Hết 2/3 thời gian thi mà chưa có câu nào chạy hoàn chỉnh, dẫn đến tâm lý hoảng loạn và trượt môn.',
          rootCause: 'Cái tôi quá cao hoặc không đọc lướt toàn bộ đề thi để chọn câu dễ làm trước.',
          howToFix: 'Luôn làm câu dễ nhất trước để chắc chắn có điểm. Nếu một câu bị kẹt quá 20 phút, hãy tạm thời bỏ qua làm câu khác!',
          badCode: `// Ngồi code thuật toán ma trận 50 dòng phức tạp ngay phút thứ 5 của giờ thi...`,
          goodCode: `// Hoàn thành câu 1 (2 điểm) và câu 2 (3 điểm) trong 30 phút đầu -> Chắc chắn đạt 5 điểm qua môn!`
        },
        {
          name: 'Quên xóa các câu lệnh cout rác debug trước khi nộp bài',
          symptom: 'Hệ thống chấm thi tự động (VPL / Moodle) báo lỗi Wrong Answer (WA) 0 điểm dù giải thuật hoàn toàn đúng.',
          rootCause: 'Để sót lệnh `cout << "Gia tri bien x la: " << x;` khiến chuỗi output thực tế sai khác với Output mẫu của hệ thống.',
          howToFix: 'Luôn rà soát lại toàn bộ file mã nguồn, xóa bỏ mọi câu in rác chỉ để lại đúng định dạng đề bài yêu cầu.',
          badCode: `cout << "Debug: i = " << i << endl; // Khien he thong cham tu dong cham 0 diem!
cout << result << endl;`,
          goodCode: `// cout << "Debug: i = " << i << endl; // Da comment hoac xoa bo
cout << result << endl; // Chi in ket qua yeu cau`
        }
      ],
      exercises: [
        {
          level: 'Nhận biết (Bloom L1)',
          title: 'Các trụ cột kiến thức C++ Căn bản',
          description: 'Liệt kê 4 trụ cột kiến thức chính của học phần Lập trình Căn bản C++ và giải thích mối quan hệ tương hỗ giữa chúng.'
        },
        {
          level: 'Thông hiểu (Bloom L2)',
          title: 'Chiến thuật phòng thi 15 - 45 - 20 - 10',
          description: 'Tại sao việc đọc lướt toàn bộ đề thi trong 15 phút đầu tiên lại mang tính sống còn đối với kết quả của một kỳ thi thực hành lập trình 90 phút?'
        },
        {
          level: 'Vận dụng (Bloom L3)',
          title: 'Xây dựng kế hoạch ôn tập 7 ngày trước kỳ thi',
          description: 'Lập thời gian biểu chi tiết trong 7 ngày trước kỳ thi: Ngày nào ôn mảng 1D, ngày nào ôn chuỗi, ngày nào ôn ma trận và giải bao nhiêu bài tập mỗi ngày.'
        },
        {
          level: 'Vận dụng cao (Bloom L4)',
          title: 'Phác thảo mục tiêu cho học phần Kỹ thuật Lập trình và OOP',
          description: 'Dựa trên lộ trình phát triển đã học, hãy tự viết bản kế hoạch mục tiêu học tập (Personal Learning Goals) cho học phần tiếp theo, bao gồm việc làm chủ con trỏ, bộ nhớ heap và xây dựng một game đơn giản bằng C++.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Trong phòng thi thực hành lập trình, chiến thuật phân bổ thứ tự làm bài nào sau đây là thông minh và an toàn nhất?',
          options: [
            'Làm từ bài khó nhất có điểm số cao nhất trước để lấy điểm tuyệt đối',
            'Làm tuần tự từ câu 1 đến câu cuối bất kể độ khó dễ',
            'Đọc toàn bộ đề, chọn câu dễ nhất và quen thuộc nhất làm trước để lấy trọn điểm và tạo tâm lý tự tin, sau đó mới làm đến các câu phân loại',
            'Chờ xem bạn bên cạnh làm câu nào thì làm theo câu đó'
          ],
          correctIndex: 2,
          explanation: 'Chiến thuật \"dễ trước khó sau\" đảm bảo bạn nắm chắc điểm sàn qua môn trong thời gian ngắn nhất và giữ được sự bình tĩnh tỉnh táo cho các câu phức tạp hơn.'
        },
        {
          id: 2,
          question: 'Tại sao các hệ thống chấm điểm tự động (VPL / LeetCode / Codeforces) thường chấm 0 điểm (Wrong Answer) cho bài làm dù thuật toán của bạn hoàn toàn chính xác?',
          options: [
            'Do máy chủ chấm bài bị lỗi phần cứng',
            'Do bài làm in thêm các dòng chữ phụ họa không yêu cầu (như \"Nhap n: \", \"Ket qua la: \", hoặc các dòng cout debug rác)',
            'Do bạn đặt tên biến bằng tiếng Việt không dấu',
            'Do trình biên dịch trên máy chủ không hỗ trợ C++'
          ],
          correctIndex: 1,
          explanation: 'Hệ thống chấm tự động so sánh chính xác từng ký tự (Exact match) giữa stdout và Output mẫu. Mọi ký tự thừa thãi, khoảng trắng hay dòng chữ dẫn dắt đều bị coi là sai lệch kết quả.'
        },
        {
          id: 3,
          question: 'Khái niệm Con trỏ (Pointers) và Cấp phát động (Dynamic Memory Allocation) sẽ được học sâu trong môn học nào tiếp theo?',
          options: [
            'Học phần Toán rời rạc',
            'Học phần Mạng máy tính',
            'Học phần Kỹ thuật Lập trình / Lập trình Nâng cao',
            'Học phần Thiết kế đồ họa'
          ],
          correctIndex: 2,
          explanation: 'Con trỏ, quản lý bộ nhớ heap (new/delete) và kiểu dữ liệu struct là nội dung trọng tâm của học phần Kỹ thuật Lập trình, kế thừa trực tiếp từ nền tảng C++ căn bản.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Chiến lược 15-45-20-10', val: '15p chọn câu dễ -> 45p làm câu trung bình -> 20p câu phân loại -> 10p check biên' },
          { key: 'Vào phòng thi', val: 'Làm câu dễ nhất trước, ăn chắc điểm thành phần, giữ bình tĩnh tuyệt đối' },
          { key: 'Quy chuẩn Output', val: 'Xóa sạch mọi cout debug và chuỗi dẫn dắt khi nộp bài cho hệ thống tự động' },
          { key: 'Lộ trình tiếp theo', val: 'Kỹ thuật lập trình (Con trỏ/Heap) -> OOP (Class) -> DSA (Cấu trúc dữ liệu)' },
          { key: 'Tâm thế kỹ sư', val: 'Kiên trì, viết code sạch, kiểm thử cẩn thận và không ngừng học hỏi' }
        ],
        coreTakeaway: 'Học lập trình không phải là học thuộc lòng cú pháp, mà là rèn luyện tư duy logic và kỹ năng giải quyết vấn đề. Nắm vững nền tảng C++ Căn bản là bạn đã cầm trong tay chiếc chìa khóa vạn năng để tự tin bước vào mọi lĩnh vực công nghệ cao.'
      },
      checklist: [
        'Tôi đã hệ thống hóa được toàn bộ 10 chương học phần thành sơ đồ tư duy liên kết.',
        'Tôi nắm vững chiến thuật làm bài thi thực hành 15-45-20-10 để đạt điểm A+.',
        'Tôi hiểu rõ nguyên tắc chấm thi tự động và không để sót cout rác.',
        'Tôi xác lập rõ lộ trình học tập các môn chuyên ngành tiếp theo.'
      ],
      extendedChallenge: {
        title: 'Thực chiến 90 phút: Bộ Đề thi Thử Toàn diện Cuối kỳ',
        scenario: 'Tự tạo môi trường phòng thi độc lập: Tắt mạng internet, hẹn giờ đếm ngược 90 phút và giải trọn vẹn 4 câu hỏi trong bộ đề thi thử.',
        challengeTask: 'Cài đặt hoàn chỉnh 4 câu: 1. Đếm số ước nguyên tố; 2. Sắp xếp mảng chẵn tăng dần lẻ giảm dần; 3. Đảo ngược các từ trong câu; 4. Tính định thức ma trận vuông cấp 3.',
        thoughtGuidance: 'Tuân thủ nghiêm ngặt quy tắc quản lý thời gian và tự viết bộ testcases kiểm tra chéo.'
      }
    }
  ]
};
