export interface LessonContent {
  id: string;
  lessonNumber: number;
  chapterNumber: number;
  title: string;
  readingTimeMinutes: number;
  moodleType: string;
  // 1. Tên bài: title
  // 2. Mục tiêu bài học
  objectives: string[];
  // 3. Kiến thức cần chuẩn bị
  prerequisites: string[];
  // 4. Khởi động
  leadIn: {
    hook: string;
    question: string;
    realWorldScenario: string;
  };
  // 5. Lý thuyết
  theorySections: {
    title: string;
    content: string;
    keyPoints?: string[];
    callout?: {
      type: 'tip' | 'warning' | 'note';
      text: string;
    };
  }[];
  // 6. Ví dụ minh họa
  examples: {
    title: string;
    problem: string;
    analysis: {
      input: string;
      output: string;
      idea: string;
      algorithm: string;
    };
    code: string;
    codeExplanation: {
      lineOrBlock: string;
      explanation: string;
    }[];
    executionResult: {
      sampleInput?: string;
      sampleOutput: string;
    };
    analysisOfResult: string;
  }[];
  // 7. Thực hành
  practices: {
    level: string; // Thực hành 1: Cơ bản, 2: Củng cố, 3: Vận dụng
    title: string;
    task: string;
    hints: string[];
    starterCode?: string;
    expectedOutput?: string;
  }[];
  // 8. Lỗi thường gặp
  commonErrors: {
    name: string;
    symptom: string;
    rootCause: string;
    compilerMessage?: string;
    howToFix: string;
    badCode: string;
    goodCode: string;
  }[];
  // 9. Bài tập tự luyện
  exercises: {
    level: string; // Mức 1, 2, 3, 4
    title: string;
    description: string;
    inputSpec?: string;
    outputSpec?: string;
    sampleTestCase?: {
      input: string;
      output: string;
    };
  }[];
  // 10. Tự kiểm tra
  quiz: {
    id: number;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  // 11. Tóm tắt bài học
  summary: {
    cheatsheet: { key: string; val: string }[];
    coreTakeaway: string;
  };
  // 12. Checklist tự đánh giá
  checklist: string[];
  // 13. Bài tập mở rộng
  extendedChallenge: {
    title: string;
    scenario: string;
    challengeTask: string;
    thoughtGuidance: string;
  };
}

export interface ChapterData {
  chapterId: number;
  chapterCode: string;
  title: string;
  summary: string;
  totalLessons: number;
  lessons: LessonContent[];
}

export const CHAPTER_1_DATA: ChapterData = {
  chapterId: 1,
  chapterCode: 'CH01',
  title: 'Nhập Môn Lập Trình & Môi Trường C++',
  summary: 'Khởi đầu vững chắc cho người mới: Giải phẫu bản chất máy tính, tư duy thuật toán, so sánh mã máy vs ngôn ngữ bậc cao, cài đặt môi trường lập trình C++ chuẩn mực và hiểu sâu sắc vòng đời biên dịch qua chương trình "Hello, World!".',
  totalLessons: 3,
  lessons: [
    {
      id: 'CH01-L01',
      lessonNumber: 1,
      chapterNumber: 1,
      title: 'Bản Chất Lập Trình, Máy Tính & Ngôn Ngữ C++',
      readingTimeMinutes: 45,
      moodleType: 'Page + Video tương tác H5P',
      objectives: [
        'Trình bày được định nghĩa khoa học và bản chất của lập trình, chương trình và thuật toán.',
        'Giải thích được cách máy tính thực thi chỉ thị thông qua CPU, RAM và hệ nhị phân (0 và 1).',
        'Phân biệt được mã nguồn (Source code), ngôn ngữ bậc cao và ngôn ngữ máy (Machine code).',
        'Nhận biết được lịch sử hình thành, ưu thế vượt trội và phạm vi ứng dụng thực tế của C++.',
        'Hình thành tư duy giải quyết vấn đề bằng logic từng bước trước khi viết mã.'
      ],
      prerequisites: [
        'Kỹ năng thao tác máy tính cơ bản (tạo thư mục, quản lý tệp tin, gõ bàn phím).',
        'Kiến thức toán học phổ thông (các phép toán số học cơ bản, quy tắc suy luận logic).'
      ],
      leadIn: {
        hook: 'Bạn mua một gói mì tôm ăn liền. Phía sau gói có in: "Bước 1: Cho mì vào tô. Bước 2: Đổ 400ml nước sôi. Bước 3: Đậy nắp 3 phút. Bước 4: Trộn đều và thưởng thức". Nếu bạn làm đảo lộn: đổ nước sôi trước khi bóc gói mì vào bát, chuyện gì sẽ xảy ra?',
        question: 'Máy tính có thông minh như chúng ta nghĩ không, hay nó chỉ là một cỗ máy tuân theo mệnh lệnh một cách mù quáng?',
        realWorldScenario: 'Máy tính thực chất cực kỳ "ngây ngô" nhưng lại có tốc độ tính toán hàng tỷ phép tính mỗi giây. Nó không có cảm xúc hay trực giác. Nếu ta chỉ dẫn sai dù chỉ một dấu chấm phẩy, nó sẽ ngừng chạy hoặc cho ra kết quả sai lệch hoàn toàn. Lập trình chính là nghệ thuật đưa ra chuỗi chỉ dẫn chính xác tuyệt đối để máy tính làm việc cho con người.'
      },
      theorySections: [
        {
          title: '1. Bản chất: Chương trình, Thuật toán và Lập trình là gì?',
          content: 'Lập trình không phải là học thuộc lòng các câu lệnh kỳ bí, mà là tư duy giải quyết vấn đề (Problem Solving).\n\n- Thuật toán (Algorithm): Là một tập hợp hữu hạn các chỉ thị rõ ràng, được sắp xếp theo một trình tự logic chặt chẽ, nhằm giải quyết một bài toán cụ thể từ dữ liệu đầu vào (Input) để sinh ra kết quả mong muốn (Output).\n- Chương trình (Program): Là bản diễn đạt của thuật toán dưới dạng một ngôn ngữ mà máy tính có thể hiểu hoặc dịch ra để thi hành.\n- Lập trình (Programming): Là toàn bộ quá trình từ việc hiểu bài toán, thiết kế thuật toán, viết mã nguồn, kiểm thử (testing) và sửa lỗi (debugging).',
          keyPoints: [
            'Tính hữu hạn: Thuật toán phải dừng lại sau một số bước hữu hạn.',
            'Tính xác định: Mỗi bước chỉ có một cách hiểu duy nhất, không mập mờ.',
            'Tính khả thi: Các bước tính toán phải thực hiện được trên máy móc thực tế.'
          ]
        },
        {
          title: '2. Máy tính hiểu dữ liệu và thực thi lệnh như thế nào?',
          content: 'Bộ não của máy tính là CPU (Central Processing Unit). CPU chỉ có thể hiểu duy nhất một ngôn ngữ: Ngôn ngữ máy (Machine Code) cấu thành từ các bit 0 và 1 (tương ứng mức điện áp tắt/mở của các bóng bán dẫn bán dẫn transistor).\n\n- Nếu con người phải viết hàng triệu số 0 và 1 để điều khiển máy tính, ta sẽ không thể tạo ra các phần mềm lớn vì quá khó đọc và cực kỳ dễ sai sót.\n- Vì vậy, các nhà khoa học đã sáng tạo ra Ngôn ngữ lập trình bậc cao (như C, C++, Java, Python) với từ ngữ gần gũi với tiếng Anh và toán học.\n- Trình biên dịch (Compiler) đóng vai trò như một người thông dịch viên cao cấp: nhận mã nguồn C++ do con người viết và dịch nó thành mã máy (0 và 1) để CPU thực thi.',
          callout: {
            type: 'note',
            text: '💡 Ghi nhớ: Máy tính không trực tiếp chạy file mã nguồn .cpp của bạn! File .cpp phải trải qua quá trình biên dịch (compile) thành file thực thi (.exe trên Windows hoặc binary trên Linux) thì CPU mới thi hành được.'
          }
        },
        {
          title: '3. Ngôn ngữ C++ là gì? Tại sao sinh viên CNTT nên bắt đầu bằng C++?',
          content: 'C++ được phát triển bởi Bjarne Stroustrup tại Bell Labs vào năm 1979 như một bản mở rộng nâng cấp của ngôn ngữ C ("C with Classes").\n\nƯu thế đặc biệt của C++:\n1. Tốc độ thực thi cực đại: C++ là ngôn ngữ biên dịch trực tiếp ra mã máy native, không cần máy ảo trung gian như Java hay thông dịch chậm chạp như Python.\n2. Kiểm soát sâu tài nguyên: C++ cho phép lập trình viên tiếp cận sát phần cứng, quản lý từng byte bộ nhớ RAM.\n3. Nền tảng tư duy vững chắc: Khi đã làm chủ C++, sinh viên sẽ hiểu rõ bản chất bộ nhớ, luồng dữ liệu, giúp việc tự học bất kỳ ngôn ngữ nào khác (Java, C#, JavaScript, Python, Go) sau này trở nên vô cùng dễ dàng.',
          keyPoints: [
            'Ứng dụng C++: Hệ điều hành (Windows, macOS kernel), Trình duyệt (Chromium/V8), Game Engines (Unreal Engine), Trí tuệ nhân tạo (TensorFlow, PyTorch core backend), Hệ thống tài chính giao dịch tần suất cao (HFT).'
          ]
        }
      ],
      examples: [
        {
          title: 'Ví dụ thuật toán đời sống: Thuật toán pha một tách trà chanh',
          problem: 'Hãy mô tả thuật toán chi tiết để hướng dẫn một người máy pha một cốc trà chanh ngon từ nguyên liệu có sẵn.',
          analysis: {
            input: 'Gói trà, nước nóng 90°C, 1 quả chanh tươi, đường cát, cốc và thìa.',
            output: '1 cốc trà chanh thơm ngon, hòa tan đều.',
            idea: 'Tuân thủ nghiêm ngặt trình tự: Hãm trà -> Hòa đường khi nước còn ấm -> Vắt chanh sau cùng (tránh chanh bị đắng do nước quá sôi).',
            algorithm: 'Bước 1: Cho túi trà vào cốc.\nBước 2: Rót 150ml nước nóng vào cốc, đợi 3 phút cho trà ngấm rồi vớt bỏ túi trà.\nBước 3: Cho 2 thìa đường vào cốc, dùng thìa khuấy đều cho đến khi đường tan hết.\nBước 4: Đợi nước trà nguội bớt (ấm khoảng 40°C), vắt nửa quả chanh (loại bỏ hạt) vào cốc.\nBước 5: Khuấy nhẹ lần cuối và hoàn thành sản phẩm.'
          },
          code: `// Minh họa cách diễn đạt thuật toán trên bằng mã giả (Pseudocode)
BEGIN
    Input: Tra, NuocNong, Duong, Chanh
    Coc = DatTuiTra()
    RotNuocNong(Coc, 150)
    Doi(3_Phut)
    BoTuiTra()
    ThemDuong(Coc, 2)
    KhuayTan()
    DoiNguoiBot()
    VatChanh(Coc, 1/2)
    Output: CocTraChanh
END`,
          codeExplanation: [
            {
              lineOrBlock: 'BEGIN ... END',
              explanation: 'Đánh dấu điểm bắt đầu và điểm kết thúc của một khối thuật toán hoàn chỉnh.'
            },
            {
              lineOrBlock: 'Input / Output',
              explanation: 'Xác định rõ ràng nguyên liệu đầu vào và sản phẩm đầu ra mong đợi.'
            },
            {
              lineOrBlock: 'Các bước lệnh',
              explanation: 'Được viết tuần tự từ trên xuống dưới, không được nhảy cóc bước nào.'
            }
          ],
          executionResult: {
            sampleOutput: 'Hoàn thành 1 cốc trà chanh chuẩn vị, không bị đắng.'
          },
          analysisOfResult: 'Nếu đổi Bước 4 lên trước Bước 2 (vắt chanh vào nước sôi 100°C), tinh dầu vỏ chanh sẽ làm cốc trà bị đắng ngắt. Trong lập trình, thứ tự thực thi câu lệnh quyết định sự sống còn của phần mềm.'
        }
      ],
      practices: [
        {
          level: 'Thực hành 1 (Cơ bản)',
          title: 'Mô tả thuật toán tính diện tích hình chữ nhật',
          task: 'Hãy viết ra giấy 4 bước tuần tự để tính diện tích một mảnh đất hình chữ nhật khi biết chiều dài d và chiều rộng r.',
          hints: ['Input là gì?', 'Công thức diện tích là gì?', 'Output cần in ra là gì?']
        },
        {
          level: 'Thực hành 2 (Củng cố)',
          title: 'Phân tích trình tự luồng xử lý của cây ATM',
          task: 'Mô tả các bước khi người dùng cắm thẻ ngân hàng vào cây ATM để rút tiền mặt (xét cả trường hợp nhập sai mã PIN).',
          hints: ['Bước kiểm tra mã PIN: Nếu đúng thì làm gì? Nếu sai quá 3 lần thì làm gì?']
        },
        {
          level: 'Thực hành 3 (Vận dụng)',
          title: 'Tìm số lớn nhất trong 3 số',
          task: 'Cho 3 số a, b, c bất kỳ. Hãy mô tả thuật toán bằng lời để tìm ra số có giá trị lớn nhất (Max).',
          hints: ['Giả sử ban đầu Max = a. Sau đó so sánh Max với b, rồi tiếp tục so sánh với c.']
        }
      ],
      commonErrors: [
        {
          name: 'Nhầm lẫn giữa "Ngôn ngữ lập trình" và "Thuật toán"',
          symptom: 'Sinh viên lao ngay vào gõ code C++ khi chưa hiểu rõ bài toán cần giải quyết theo từng bước nào.',
          rootCause: 'Nghĩ rằng học lập trình là học cú pháp gõ phím, quên mất tư duy logic thuật toán mới là cốt lõi.',
          howToFix: 'Luôn luôn lấy bút nháp: xác định Input -> xác định Output -> viết ra các bước giải bằng tiếng Việt/mã giả trước khi mở phần mềm gõ mã C++.',
          badCode: '// Gõ code lung tung hy vọng máy đoán được ý mình',
          goodCode: '// Bước 1: Nhập a, b\n// Bước 2: Tinh tong S = a + b\n// Bước 3: In S ra man hinh'
        }
      ],
      exercises: [
        {
          level: 'Mức 1 (Nhận biết)',
          title: 'Định nghĩa trình biên dịch (Compiler)',
          description: 'Trình biên dịch trong C++ có nhiệm vụ gì? Chọn câu trả lời chính xác nhất: A. Soạn thảo văn bản; B. Dịch mã nguồn sang mã máy; C. Sửa lỗi logic; D. Tăng tốc độ máy tính.'
        },
        {
          level: 'Mức 2 (Thông hiểu)',
          title: 'Phân biệt mã nguồn và mã máy',
          description: 'Tại sao con người không trực tiếp viết mã máy bằng số 0 và 1 mà phải sử dụng ngôn ngữ C++? Nêu 3 lý do chính.'
        },
        {
          level: 'Mức 3 (Vận dụng)',
          title: 'Xây dựng thuật toán đổi tiền lẻ',
          description: 'Viết các bước thuật toán để từ một số tiền N đồng (N là bội số của 10.000đ), máy ATM tính ra số lượng tờ tiền 500.000đ, 200.000đ, 100.000đ và 50.000đ sao cho tổng số tờ tiền đưa ra là ít nhất.'
        },
        {
          level: 'Mức 4 (Vận dụng cao)',
          title: 'Thuật toán tìm đường đi an toàn trong mê cung',
          description: 'Mô tả thuật toán bám tường (Wall-following / Right-hand rule) để một robot tự động tìm đường thoát khỏi một mê cung kín.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Bộ phận nào trong máy tính trực tiếp thực thi các chỉ thị của chương trình?',
          options: ['Ổ cứng SSD/HDD', 'Bộ nhớ RAM', 'Bộ xử lý trung tâm (CPU)', 'Card đồ họa (GPU)'],
          correctIndex: 2,
          explanation: 'CPU (Central Processing Unit) là bộ não xử lý, trực tiếp nạp và thi hành các chỉ thị mã máy nhị phân.'
        },
        {
          id: 2,
          question: 'Tập tin chứa mã nguồn C++ do con người viết thường có phần mở rộng là gì?',
          options: ['.exe', '.cpp', '.obj', '.class'],
          correctIndex: 1,
          explanation: 'File mã nguồn C++ có đuôi .cpp (viết tắt của C Plus Plus).'
        },
        {
          id: 3,
          question: 'Ai là tác giả sáng tạo ra ngôn ngữ lập trình C++ vào năm 1979?',
          options: ['Dennis Ritchie', 'Bjarne Stroustrup', 'James Gosling', 'Guido van Rossum'],
          correctIndex: 1,
          explanation: 'Bjarne Stroustrup đã phát triển C++ tại phòng thí nghiệm Bell Labs nhằm bổ sung tính năng hướng đối tượng cho ngôn ngữ C.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'Thuật toán', val: 'Chuỗi chỉ thị hữu hạn, rõ ràng, tuần tự giải quyết một bài toán' },
          { key: 'Mã nguồn (.cpp)', val: 'Chương trình do con người viết bằng ngôn ngữ C++' },
          { key: 'Compiler', val: 'Phần mềm dịch từ mã nguồn C++ sang mã máy 0 và 1' },
          { key: 'Mã máy (.exe)', val: 'Tập hợp các số 0 và 1 mà CPU có thể thi hành trực tiếp' }
        ],
        coreTakeaway: 'Lập trình viên giỏi là người tư duy thuật toán thông suốt trước khi đặt tay lên bàn phím. C++ là công cụ cực mạnh giúp bạn hiểu sâu sắc nguyên lý hoạt động của máy tính.'
      },
      checklist: [
        'Tôi phân biệt được thuật toán, chương trình và ngôn ngữ lập trình.',
        'Tôi hiểu được vai trò của trình biên dịch (Compiler) trong việc chuyển đổi .cpp thành .exe.',
        'Tôi biết vì sao C++ được lựa chọn làm ngôn ngữ nhập môn cho kỹ sư CNTT.'
      ],
      extendedChallenge: {
        title: 'Thử thách: Tìm hiểu quy tắc cờ bàn cờ vua của Claude Shannon',
        scenario: 'Năm 1950, nhà toán học Claude Shannon đã đề xuất thuật toán đầu tiên để máy tính chơi cờ vua với con người.',
        challengeTask: 'Hãy tìm đọc và trình bày ngắn gọn xem máy tính đánh giá một nước cờ vua bằng con số (Input - Thuật toán tính điểm - Output) như thế nào.',
        thoughtGuidance: 'Máy gán điểm cho mỗi quân: Tốt = 1, Mã/Tượng = 3, Xe = 5, Hậu = 9, Vua = vô cực. Sau đó duyệt các khả năng nước đi tiếp theo để chọn nước có tổng điểm cao nhất.'
      }
    },
    {
      id: 'CH01-L02',
      lessonNumber: 2,
      chapterNumber: 1,
      title: 'Cài Đặt Môi Trường Lập Trình & Công Cụ Thực Hành C++',
      readingTimeMinutes: 45,
      moodleType: 'Lesson tương tác từng bước + Ảnh hướng dẫn',
      objectives: [
        'Phân biệt được giữa Trình biên dịch (Compiler như GCC/MinGW, Clang, MSVC) và Môi trường phát triển tích hợp (IDE/Editor như VS Code, Code::Blocks).',
        'Tải, cài đặt và cấu hình biến môi trường PATH cho bộ biên dịch MinGW-w64 trên máy tính cá nhân.',
        'Kiểm tra thành công lệnh g++ trên Terminal / Command Prompt.',
        'Cài đặt và cấu hình Visual Studio Code (hoặc Code::Blocks / Dev-C++) kèm tiện ích mở rộng C/C++.',
        'Tự khắc phục các lỗi thường gặp trong quá trình cài đặt môi trường.'
      ],
      prerequisites: [
        'Đã học Bài 1 (Hiểu vai trò của Compiler).',
        'Có máy tính cá nhân chạy Windows, macOS hoặc Linux có kết nối Internet.'
      ],
      leadIn: {
        hook: 'Bạn có thể viết một bài luận bằng phần mềm Notepad đơn giản. Nhưng tại sao khi viết luận chuyên nghiệp người ta lại dùng Microsoft Word (có kiểm tra chính tả, định dạng trang, đếm từ)?',
        question: 'Ta có thể viết code C++ bằng Notepad được không? Và tại sao lập trình viên lại cần IDE chuyên nghiệp?',
        realWorldScenario: 'Bạn hoàn toàn có thể viết code C++ trong Notepad! Nhưng Notepad không biết tô màu từ khóa, không chỉ ra bạn quên dấu chấm phẩy ở dòng nào, và không có nút "Run" để chạy. Để làm việc hiệu quả, lập trình viên sử dụng IDE (Integrated Development Environment) - ngôi nhà tích hợp sẵn bộ gõ mã, trình tìm kiếm lỗi và nút bấm biên dịch chỉ trong một cú nhấp chuột.'
      },
      theorySections: [
        {
          title: '1. Phân biệt Compiler (Trình biên dịch) và IDE / Editor',
          content: 'Đây là hiểu lầm phổ biến nhất của sinh viên năm nhất:\n\n- Compiler (ví dụ GCC/g++, Clang): Là "động cơ ngầm". Nó là chương trình dòng lệnh nhận tệp .cpp và chuyển hóa thành tệp .exe. Nó không có giao diện đồ họa cửa sổ đẹp đẽ.\n- Text Editor / IDE (ví dụ VS Code, Code::Blocks, CLion, Dev-C++): Là "vỏ xe và vô lăng". Nó cung cấp giao diện người dùng để bạn gõ văn bản, tự động thụt lề, tô màu cú pháp (Syntax Highlighting) và gợi ý mã.\n\nChú ý: VS Code là một trình soạn thảo mã nguồn (Code Editor). Để VS Code chạy được C++, ta BẮT BUỘC phải cài đặt thêm bộ biên dịch (Compiler) bên ngoài như MinGW-w64.',
          keyPoints: [
            'Compiler = Động cơ xử lý mã lệnh (bắt buộc phải có).',
            'IDE/Editor = Môi trường làm việc trực quan giúp viết mã nhanh và tiện lợi.'
          ]
        },
        {
          title: '2. Lựa chọn công cụ phù hợp cho sinh viên năm nhất',
          content: 'Hiện nay có 2 phương án phổ biến:\n\nPhương án 1 (Tiêu chuẩn công nghiệp hiện đại - Khuyên dùng):\n- Trình biên dịch: MinGW-w64 (chứa g++).\n- Trình soạn thảo: Visual Studio Code kèm extension "C/C++" của Microsoft và "Code Runner".\n\nPhương án 2 (Cài đặt trọn gói trong 1 bước - Nhẹ, phù hợp máy yếu):\n- Code::Blocks (chọn bản "codeblocks-XX.XXmingw-setup.exe" có tích hợp sẵn MinGW).\n- Hoặc Dev-C++ 6.3 (Embarcadero Dev-C++).\n\nTrong giáo trình này, chúng tôi hướng dẫn sinh viên làm chủ cả hai phương án.',
          callout: {
            type: 'tip',
            text: '💡 Lời khuyên của giảng viên: Trong 1-2 tuần đầu, nếu bạn gặp trục trặc khi cài đặt VS Code, hãy cài ngay Code::Blocks hoặc Dev-C++ để có thể thực hành code ngay mà không làm gián đoạn việc học.'
          }
        },
        {
          title: '3. Quy trình 4 bước cài đặt chuẩn VS Code + MinGW trên Windows',
          content: 'Bước 1: Tải bộ cài MinGW-w64 (thông qua MSYS2 hoặc bản đóng gói WinLibs độc lập).\nBước 2: Giải nén vào thư mục cố định không có dấu tiếng Việt (ví dụ: C:\\mingw64\\bin).\nBước 3: Đưa đường dẫn C:\\mingw64\\bin vào biến môi trường hệ thống (System Environment Variables PATH).\nBước 4: Mở Terminal (cmd hoặc powershell), gõ: g++ --version. Nếu màn hình hiện ra phiên bản (ví dụ: g++ (x86_64-posix-seh-rev0...) 13.x.x thì bạn đã cài đặt thành công 100%!',
          keyPoints: [
            'Tuyệt đối không đặt tên thư mục chứa dấu cách hoặc tiếng Việt có dấu (ví dụ: D:\\Bai Tap C++\\ -> SAI, phải đặt là D:\\BaiTapCPP\\).'
          ]
        }
      ],
      examples: [
        {
          title: 'Kiểm tra trình biên dịch g++ từ cửa sổ dòng lệnh Terminal',
          problem: 'Kiểm tra xem máy tính của bạn đã nhận diện được trình biên dịch C++ hay chưa.',
          analysis: {
            input: 'Lệnh hệ thống: g++ --version',
            output: 'Thông tin phiên bản trình biên dịch g++ của tổ chức GNU.',
            idea: 'Hệ điều hành sẽ tìm kiếm tệp g++.exe trong các đường dẫn được khai báo trong biến PATH.',
            algorithm: 'Bước 1: Nhấn tổ hợp phím Windows + R, gõ cmd rồi nhấn Enter.\nBước 2: Gõ lệnh: g++ --version và nhấn Enter.'
          },
          code: `# Lệnh gõ trong Terminal / Command Prompt:
g++ --version`,
          codeExplanation: [
            {
              lineOrBlock: 'g++',
              explanation: 'Tên của trình biên dịch GNU C++.'
            },
            {
              lineOrBlock: '--version',
              explanation: 'Tham số yêu cầu in ra phiên bản hiện hành của phần mềm.'
            }
          ],
          executionResult: {
            sampleOutput: `g++ (Rev10, Built by MSYS2 project) 13.2.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.`
          },
          analysisOfResult: 'Nếu màn hình in ra kết quả như trên, máy bạn đã sẵn sàng dịch mã C++. Nếu hiện "g++ is not recognized...", nghĩa là bạn chưa cấu hình biến môi trường PATH chính xác.'
        }
      ],
      practices: [
        {
          level: 'Thực hành 1 (Cơ bản)',
          title: 'Kiểm tra môi trường dòng lệnh',
          task: 'Mở cửa sổ Command Prompt trên máy tính của bạn và kiểm tra hai lệnh: gcc --version và g++ --version. Chụp lại màn hình kết quả.',
          hints: ['Xem kỹ bài hướng dẫn cấu hình biến môi trường PATH nếu lệnh báo lỗi.']
        },
        {
          level: 'Thực hành 2 (Củng cố)',
          title: 'Cài đặt Extension trên VS Code',
          task: 'Mở VS Code, nhấn Ctrl+Shift+X, tìm kiếm và cài đặt 2 extension sau: 1. C/C++ (của Microsoft); 2. Code Runner (của Jun Han).',
          hints: ['Khởi động lại VS Code sau khi cài đặt extension để đảm bảo các thiết lập được áp dụng.']
        },
        {
          level: 'Thực hành 3 (Vận dụng)',
          title: 'Tạo thư mục học tập chuyên nghiệp',
          task: 'Tạo cây thư mục học tập tại ổ đĩa D hoặc C: D:\\CPP_Projects\\Chapter01. Mở thư mục này bằng VS Code và tạo sẵn một tệp rỗng tên là main.cpp.',
          hints: ['Nhớ nguyên tắc: Không dùng dấu tiếng Việt, không dùng khoảng trắng trong tên thư mục.']
        }
      ],
      commonErrors: [
        {
          name: 'Lỗi "g++ is not recognized as an internal or external command"',
          symptom: 'Khi gõ g++ trong cmd, máy báo lỗi không nhận diện được lệnh.',
          rootCause: 'Thư mục chứa file g++.exe (ví dụ C:\\mingw64\\bin) chưa được thêm vào biến môi trường PATH của hệ điều hành Windows, hoặc chưa khởi động lại terminal.',
          howToFix: 'Vào Start -> Gõ "Edit the system environment variables" -> Chọn Environment Variables -> Tìm biến Path trong mục System variables -> Chọn Edit -> Thêm đường dẫn C:\\mingw64\\bin -> Nhấn OK hết các cửa sổ và mở cửa sổ cmd mới.',
          badCode: '// Terminal: g++ main.cpp -> "g++: command not found"',
          goodCode: '// Terminal: Path đã chuẩn -> g++ biên dịch mượt mà không lỗi'
        },
        {
          name: 'Lỗi đường dẫn chứa ký tự tiếng Việt hoặc khoảng trắng',
          symptom: 'Code không biên dịch được, báo lỗi "No such file or directory" hoặc crash khi chạy.',
          rootCause: 'Tên người dùng Windows hoặc tên thư mục chứa dấu (ví dụ: C:\\Users\\Nguyễn Văn A\\Lập trình C++\\).',
          howToFix: 'Tạo thư mục làm việc ngay tại gốc ổ đĩa như C:\\Dev\\ hoặc D:\\CPP\\.',
          badCode: 'D:\\Mon Hoc Ky 1\\Lap Trinh C++\\bai1.cpp',
          goodCode: 'D:\\MonHocKy1\\LapTrinhCPP\\bai1.cpp'
        }
      ],
      exercises: [
        {
          level: 'Mức 1 (Nhận biết)',
          title: 'Phân loại công cụ',
          description: 'Trong các công cụ sau, đâu là Trình biên dịch (Compiler) và đâu là Môi trường soạn thảo (Editor/IDE): GCC, Visual Studio Code, Clang, Code::Blocks, Dev-C++?'
        },
        {
          level: 'Mức 2 (Thông hiểu)',
          title: 'Tại sao cần biến môi trường PATH?',
          description: 'Giải thích bằng ngôn ngữ của bạn: Biến môi trường PATH trong hệ điều hành có tác dụng gì? Nếu không có biến PATH, bạn phải làm thế nào để chạy file g++.exe?'
        },
        {
          level: 'Mức 3 (Vận dụng)',
          title: 'Cấu hình phím tắt biên dịch',
          description: 'Tìm hiểu cách cấu hình file tasks.json trong VS Code để khi nhấn tổ hợp phím Ctrl+Shift+B, chương trình sẽ tự động biên dịch file .cpp đang mở.'
        },
        {
          level: 'Mức 4 (Vận dụng cao)',
          title: 'Biên dịch đa nền tảng',
          description: 'Tìm hiểu cách cài đặt trình biên dịch GCC trên hệ điều hành Linux (Ubuntu bằng apt install build-essential) hoặc macOS (bằng clang thông qua Xcode Command Line Tools).'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Visual Studio Code (VS Code) có tích hợp sẵn trình biên dịch C++ bên trong bộ cài mặc định hay không?',
          options: [
            'Có, cài VS Code là tự động có g++ chạy ngay.',
            'Không, VS Code chỉ là Code Editor, bạn phải cài thêm Compiler như MinGW bên ngoài.',
            'Chỉ có trên bản Windows 64-bit.',
            'Chỉ có nếu bạn đăng nhập tài khoản Microsoft.'
          ],
          correctIndex: 1,
          explanation: 'VS Code là một text editor siêu nhẹ và mạnh mẽ, nhưng nó không chứa compiler C++. Bạn bắt buộc phải cài MinGW/GCC và trỏ đường dẫn biến PATH cho nó.'
        },
        {
          id: 2,
          question: 'Đường dẫn thư mục nào sau đây KHÔNG NÊN dùng để lưu trữ các bài tập lập trình C++?',
          options: [
            'D:\\LapTrinhCPlusPlus\\Bai01\\',
            'C:\\Projects\\cpp\\',
            'C:\\Users\\User\\Desktop\\Bài tập lập trình C++ năm nhất\\',
            'D:\\dev\\cpp_fundamentals\\'
          ],
          correctIndex: 2,
          explanation: 'Đường dẫn có chứa tiếng Việt có dấu và khoảng trắng ("Bài tập lập trình C++ năm nhất") rất dễ gây lỗi trình biên dịch dòng lệnh GCC.'
        },
        {
          id: 3,
          question: 'Để kiểm tra phiên bản của trình biên dịch C++ trên Terminal, ta dùng lệnh nào?',
          options: ['cpp --check', 'g++ --version', 'run c++', 'compile -v'],
          correctIndex: 1,
          explanation: 'Lệnh chuẩn xác là "g++ --version" (hoặc "gcc --version").'
        }
      ],
      summary: {
        cheatsheet: [
          { key: 'MinGW-w64', val: 'Bộ công cụ chứa trình biên dịch g++ cho Windows' },
          { key: 'Biến PATH', val: 'Danh sách thư mục để hệ điều hành tìm kiếm các lệnh thực thi' },
          { key: 'VS Code', val: 'Trình biên tập mã nguồn phổ biến hàng đầu thế giới' },
          { key: 'C/C++ Extension', val: 'Gói mở rộng của Microsoft giúp gợi ý code và debug' }
        ],
        coreTakeaway: 'Môi trường lập trình là chiếc cần câu của người kỹ sư. Cấu hình chuẩn xác một lần sẽ giúp bạn yên tâm học tập trong suốt nhiều năm đại học.'
      },
      checklist: [
        'Máy tính của tôi đã gõ được lệnh g++ --version thành công trên terminal.',
        'Tôi đã cài đặt xong IDE (VS Code hoặc Code::Blocks / Dev-C++).',
        'Tôi đã tạo một thư mục học tập chuẩn chỉ không dấu trên máy tính.'
      ],
      extendedChallenge: {
        title: 'Thử thách: Khám phá trình biên dịch trực tuyến (Online Compiler)',
        scenario: 'Khi bạn phải sử dụng máy tính ở thư viện hoặc quán net mà không có quyền Administrator để cài đặt phần mềm.',
        challengeTask: 'Tìm và chạy thử một đoạn code C++ trên trang web https://godbolt.org/ (Compiler Explorer) hoặc https://www.onlinegdb.com/.',
        thoughtGuidance: 'Các công cụ Online Compiler giúp bạn có thể code C++ trên mọi thiết bị (kể cả máy tính bảng, điện thoại) chỉ với một trình duyệt web.'
      }
    },
    {
      id: 'CH01-L03',
      lessonNumber: 3,
      chapterNumber: 1,
      title: 'Chương Trình C++ Đầu Tiên & Vòng Đời Biên Dịch',
      readingTimeMinutes: 50,
      moodleType: 'VPL (Viết và chạy code) + Quiz đánh giá',
      objectives: [
        'Viết, biên dịch và chạy thành công chương trình C++ kinh điển in dòng chữ "Hello, World!".',
        'Giải thích cặn kẽ ý nghĩa cú pháp từng dòng: #include <iostream>, using namespace std, int main(), cout, return 0.',
        'Phân biệt được 4 giai đoạn trong quy trình tạo tệp thực thi: Tiền xử lý (Preprocessing) -> Biên dịch (Compiling) -> Liên kết (Linking) -> Thực thi (Executing).',
        'Sử dụng đúng các ký tự đặc biệt: cặp ngoặc nhọn {}, dấu chấm phẩy ;, toán tử chèn << và ký tự xuống dòng "\\n" hoặc endl.',
        'Nhận biết và sửa được các lỗi cú pháp cơ bản thường gặp ở bài học đầu tiên.'
      ],
      prerequisites: [
        'Đã hoàn thành Bài 2 (Máy tính đã có môi trường g++ và IDE sẵn sàng).'
      ],
      leadIn: {
        hook: 'Năm 1978, cuốn sách lập trình huyền thoại "The C Programming Language" của Brian Kernighan và Dennis Ritchie đã giới thiệu một chương trình chỉ vỏn vẹn vài dòng để in ra lời chào: "hello, world". Kể từ đó, "Hello, World!" trở thành nghi thức nhập môn thiêng liêng của mọi thế hệ lập trình viên trên toàn thế giới.',
        question: 'Tại sao chỉ để in ra một dòng chữ đơn giản mà chương trình C++ lại cần tới 6-7 dòng code với nhiều từ khóa lạ lẫm như vậy?',
        realWorldScenario: 'Mỗi dòng code trong C++ đều có sứ mệnh riêng biệt: dòng xin phép mượn công cụ in ấn từ hệ thống, dòng xác định không gian tên, dòng đánh dấu cửa chính cho máy tính bước vào làm việc. Hiểu sâu từng chữ ở bài này sẽ giúp bạn không bao giờ phải "học vẹt" cú pháp.'
      },
      theorySections: [
        {
          title: '1. Giải phẫu cấu trúc chương trình C++ chuẩn mực',
          content: 'Dưới đây là một chương trình C++ hoàn chỉnh đơn giản nhất:\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}\n```\n\nPhân tích chi tiết từng viên gạch:\n\n1. `#include <iostream>`: Chỉ thị tiền xử lý (Preprocessor Directive). Nó yêu cầu trình biên dịch nhúng thư viện chuẩn tên là "iostream" (Input/Output Stream - Dòng nhập xuất) vào chương trình trước khi dịch. Nhờ có thư viện này, máy tính mới biết `cout` là gì.\n\n2. `using namespace std;`: Báo cho trình biên dịch biết ta sử dụng không gian tên chuẩn (Standard Namespace). Nếu không có dòng này, mỗi lần in ra màn hình ta sẽ phải viết dài dòng là `std::cout << ...` thay vì viết ngắn gọn là `cout`.\n\n3. `int main()`: Hàm chính (Main function). Đây là ĐIỂM BẮT ĐẦU (Entry Point) của mọi chương trình C++. Khi bạn nhấn chạy, hệ điều hành sẽ tìm đến hàm `main()` đầu tiên và thực thi các lệnh bên trong nó từ trên xuống dưới.\n\n4. Cặp dấu ngoặc nhọn `{ }`: Bao bọc phần thân (Body) của hàm `main()`. Tất cả câu lệnh cần thực hiện phải nằm giữa cặp ngoặc này.\n\n5. `cout << "Hello, World!" << endl;`:\n   - `cout` (viết tắt của Character Output): Dòng xuất chuẩn đưa dữ liệu ra màn hình.\n   - `<<`: Toán tử chèn (Insertion operator), đẩy nội dung bên phải vào luồng xuất bên trái.\n   - `"Hello, World!"`: Chuỗi ký tự (String literal) cần in ra, phải được đặt trong cặp dấu nháy kép `""`.\n   - `endl` (End Line): Lệnh xuống dòng mới và đẩy bộ đệm (flush buffer).\n   - Dấu chấm phẩy `;`: Dấu hiệu kết thúc một câu lệnh. Đây là điều bắt buộc trong C++!\n\n6. `return 0;`: Báo cáo cho hệ điều hành biết rằng: "Chương trình của tôi đã chạy thành công trọn vẹn và kết thúc không có lỗi!" (Mã 0 đại diện cho trạng thái bình thường).',
          callout: {
            type: 'warning',
            text: '⚠️ Bẫy cho người mới: Trong C++, chữ hoa và chữ thường là HOÀN TOÀN KHÁC NHAU (Case-sensitive)! Viết "Main()" hay "Cout" sẽ bị báo lỗi ngay lập tức.'
          }
        },
        {
          title: '2. Vòng đời 4 bước từ Mã nguồn (.cpp) đến Chương trình chạy (.exe)',
          content: 'Khi bạn nhấn nút "Compile & Run", cỗ máy C++ diễn ra 4 bước thần tốc sau hậu trường:\n\n1. Pha Tiền xử lý (Preprocessing): Bộ tiền xử lý quét qua các dòng bắt đầu bằng dấu `#` (như `#include`). Nó sẽ copy nguyên văn mã của tệp thư viện `iostream` dán vào đầu tệp của bạn, đồng thời loại bỏ các chú thích (comment).\n\n2. Pha Biên dịch (Compilation): Trình biên dịch (Compiler) kiểm tra cú pháp mã nguồn C++. Nếu đúng cú pháp, nó dịch mã nguồn thành mã hợp ngữ (Assembly) rồi thành mã đối tượng máy (Object file: `.obj` hoặc `.o`).\n\n3. Pha Liên kết (Linking): Trình liên kết (Linker) gom tệp `.obj` của bạn cùng với mã nhị phân của các thư viện hệ thống (mã thực thi thực sự của hàm in ấn màn hình) để tạo thành tệp thực thi duy nhất: `.exe` (trên Windows) hoặc tệp binary không đuôi (trên Linux/macOS).\n\n4. Pha Thực thi (Execution): Hệ điều hành tải tệp `.exe` vào bộ nhớ RAM, phân phối CPU và chạy các chỉ thị. Màn hình console mở ra và hiển thị kết quả!',
          keyPoints: [
            '.cpp (Mã nguồn) -> Preprocessor -> .cpp đã mở rộng -> Compiler -> .obj (Mã máy thô) -> Linker -> .exe (Chương trình hoàn chỉnh).'
          ]
        },
        {
          title: '3. Chú thích trong code (Comments) & Văn hóa viết mã sạch',
          content: 'Chú thích là những dòng ghi chú dành cho con người đọc, trình biên dịch sẽ hoàn toàn bỏ qua chúng khi dịch:\n\n- Chú thích 1 dòng: Dùng hai dấu gạch chéo `// Nội dung chú thích`\n- Chú thích nhiều dòng: Đặt giữa `/* Nội dung chú thích */`\n\nTập thói quen viết chú thích mục đích của chương trình và tên tác giả ngay từ bài học đầu tiên.',
          callout: {
            type: 'tip',
            text: '💡 Phong cách lập trình: Thụt lề các dòng lệnh bên trong cặp ngoặc nhọn thụt vào 4 khoảng trắng (Tab) để code sáng sủa, dễ đọc.'
          }
        }
      ],
      examples: [
        {
          title: 'Chương trình C++ in thông tin giới thiệu bản thân sinh viên',
          problem: 'Viết chương trình in ra màn hình 3 dòng thông tin: Tên của bạn, Mã số sinh viên, và Lời cam kết học tập.',
          analysis: {
            input: 'Không có dữ liệu nhập vào từ bàn phím.',
            output: 'Hiển thị 3 dòng văn bản trên cửa sổ Console.',
            idea: 'Sử dụng đối tượng cout và toán tử << cùng với endl để in từng dòng.',
            algorithm: 'Bước 1: Khai báo thư viện nhập xuất <iostream>.\nBước 2: Bắt đầu hàm main().\nBước 3: Dùng cout in dòng 1 và xuống dòng.\nBước 4: Dùng cout in dòng 2 và xuống dòng.\nBước 5: Dùng cout in dòng 3 và xuống dòng.\nBước 6: Trả về giá trị 0 và kết thúc.'
          },
          code: `#include <iostream>
using namespace std;

int main() {
    // In loi chao va thong tin sinh vien
    cout << "Ho va ten: Nguyen Van A" << endl;
    cout << "MSSV: 24020001 - Nganh: Cong nghe Thong tin" << endl;
    cout << "Loi hua: Toi quyet tam hoc lap trinh C++ that gioi!" << endl;

    return 0;
}`,
          codeExplanation: [
            {
              lineOrBlock: '#include <iostream>',
              explanation: 'Nạp thư viện chuẩn hỗ trợ luồng xuất cout và đối tượng endl.'
            },
            {
              lineOrBlock: 'using namespace std;',
              explanation: 'Sử dụng không gian tên tiêu chuẩn của C++.'
            },
            {
              lineOrBlock: 'cout << "..." << endl;',
              explanation: 'In chuỗi văn bản nằm trong nháy kép và chuyển con trỏ chuột xuống đầu dòng kế tiếp.'
            },
            {
              lineOrBlock: 'return 0;',
              explanation: 'Kết thúc chương trình bình thường, trả tín hiệu 0 về cho Windows.'
            }
          ],
          executionResult: {
            sampleOutput: `Ho va ten: Nguyen Van A
MSSV: 24020001 - Nganh: Cong nghe Thong tin
Loi hua: Toi quyet tam hoc lap trinh C++ that gioi!`
          },
          analysisOfResult: 'Chương trình thực hiện 3 lệnh cout một cách tuần tự từ trên xuống dưới, tạo thành 3 dòng chữ ngay ngắn trên màn hình giao diện Console đen trắng.'
        }
      ],
      practices: [
        {
          level: 'Thực hành 1 (Cơ bản)',
          title: 'Chạy chương trình Hello World đầu tiên',
          task: 'Tự gõ lại toàn bộ đoạn code Hello World vào VS Code (hoặc IDE của bạn). Nhấn Compile & Run để xem kết quả xuất hiện trên màn hình Console.',
          hints: ['Gõ từng chữ bằng tay, tuyệt đối KHÔNG copy-paste để các đầu ngón tay làm quen với từng dấu phẩy, dấu chấm.'],
          starterCode: `#include <iostream>
using namespace std;

int main() {
    // Go code cua ban o day
    
    return 0;
}`,
          expectedOutput: 'Hello, World!'
        },
        {
          level: 'Thực hành 2 (Củng cố)',
          title: 'Vẽ hộp hoa văn đơn giản bằng ký tự sao (*)',
          task: 'Sử dụng nhiều lệnh cout để in ra màn hình một hình chữ nhật rỗng kích thước 4 dòng x 6 cột bằng các dấu sao (*).',
          hints: ['Dòng đầu và dòng cuối in 6 dấu sao: "******".', 'Hai dòng giữa in: "*    *".'],
          expectedOutput: `******
*    *
*    *
******`
        },
        {
          level: 'Thực hành 3 (Vận dụng)',
          title: 'Sử dụng ký tự thoát đặc biệt (Escape Sequences)',
          task: 'Tìm hiểu ký tự tab "\\t" và ký tự xuống dòng "\\n". Hãy viết 1 câu lệnh cout DUY NHẤT để in ra một bảng thời khóa biểu 2 cột: Môn học và Thứ.',
          hints: ['Ví dụ: cout << "Mon\\tThu\\nC++\\tThu 2\\n";']
        }
      ],
      commonErrors: [
        {
          name: 'Quên dấu chấm phẩy (;) ở cuối câu lệnh',
          symptom: 'Compiler báo lỗi: "error: expected \';\' before \'return\'" hoặc tương tự.',
          rootCause: 'Trong C++, dấu chấm phẩy là ký tự kết thúc câu lệnh bắt buộc. Trình biên dịch không dùng dấu xuống dòng để ngắt câu lệnh.',
          compilerMessage: 'error: expected \';\' before \'return\'',
          howToFix: 'Rà soát lại dòng lệnh ngay phía trước dòng báo lỗi và bổ sung dấu chấm phẩy ; vào cuối.',
          badCode: 'cout << "Hello World" << endl\nreturn 0;',
          goodCode: 'cout << "Hello World" << endl;\nreturn 0;'
        },
        {
          name: 'Nhầm lẫn giữa chữ hoa và chữ thường (Case Sensitivity)',
          symptom: 'Compiler báo: "error: \'Main\' was not declared in this scope" hoặc "\'Cout\' was not declared".',
          rootCause: 'C++ phân biệt hoa thường cực kỳ nghiêm ngặt. Hàm main phải viết thường toàn bộ.',
          compilerMessage: 'error: \'Main\' was not declared in this scope',
          howToFix: 'Viết thường toàn bộ từ khóa: int main(), cout, return, using namespace std.',
          badCode: 'int Main() {\n    Cout << "Hello";\n}',
          goodCode: 'int main() {\n    cout << "Hello";\n}'
        },
        {
          name: 'Quên đóng hoặc mở dấu ngoặc kép (" ")',
          symptom: 'Compiler báo: "error: missing terminating \'"\' character".',
          rootCause: 'Một chuỗi chữ bắt đầu bằng dấu " nhưng lại quên không kết thúc bằng dấu " tương ứng.',
          compilerMessage: 'error: missing terminating \'"\' character',
          howToFix: 'Kiểm tra xem mọi dấu nháy kép đều đi thành từng cặp mở và đóng đối xứng.',
          badCode: 'cout << "Xin chao cac ban << endl;',
          goodCode: 'cout << "Xin chao cac ban" << endl;'
        }
      ],
      exercises: [
        {
          level: 'Mức 1 (Nhận biết)',
          title: 'Nhận diện lỗi cú pháp',
          description: 'Đoạn mã sau có bao nhiêu lỗi cú pháp? Liệt kê từng lỗi:\n```cpp\n#include <iostream>\nusing namespace std\nint main() {\n    cout << Hello World! << endl\n    return 0;\n}\n```'
        },
        {
          level: 'Mức 2 (Thông hiểu)',
          title: 'So sánh endl và "\\n"',
          description: 'Cả `endl` và ký tự `\'\\n\'` đều có tác dụng xuống dòng. Tuy nhiên điểm khác nhau về mặt cơ chế bộ đệm (buffer flush) giữa chúng là gì? Khi nào nên dùng `\'\\n\'`?'
        },
        {
          level: 'Mức 3 (Vận dụng)',
          title: 'In bài thơ 4 câu với căn lề',
          description: 'Viết chương trình C++ in ra 4 câu thơ lục bát yêu thích của bạn, sử dụng các ký tự "\\t" để các câu thơ được thụt đầu dòng đồng đều đẹp mắt.'
        },
        {
          level: 'Mức 4 (Vận dụng cao)',
          title: 'Biên dịch C++ thủ công bằng Terminal không cần IDE',
          description: 'Mở Notepad, gõ chương trình Hello World, lưu tệp thành `bai1.cpp`. Sau đó mở cmd, dùng lệnh `g++ bai1.cpp -o chuongtrinh1.exe` để tự tay biên dịch và chạy file `chuongtrinh1.exe`. Ghi lại nhật ký trải nghiệm.'
        }
      ],
      quiz: [
        {
          id: 1,
          question: 'Hàm nào là điểm khởi đầu (Entry Point) bắt buộc phải có trong mọi chương trình C++?',
          options: ['start()', 'init()', 'main()', 'run()'],
          correctIndex: 2,
          explanation: 'Hàm main() là hàm chính được hệ điều hành triệu gọi đầu tiên khi thực thi một chương trình C++.'
        },
        {
          id: 2,
          question: 'Ký tự nào được dùng để kết thúc một câu lệnh đơn trong ngôn ngữ C++?',
          options: ['Dấu hai chấm (:)', 'Dấu chấm phẩy (;)', 'Dấu chấm (.)', 'Phím Enter xuống dòng'],
          correctIndex: 1,
          explanation: 'Trong C++, dấu chấm phẩy (;) là bắt buộc để thông báo kết thúc một câu lệnh.'
        },
        {
          id: 3,
          question: 'Lệnh #include <iostream> thuộc giai đoạn xử lý nào trong quy trình dịch mã?',
          options: ['Biên dịch (Compilation)', 'Tiền xử lý (Preprocessing)', 'Liên kết (Linking)', 'Thực thi (Execution)'],
          correctIndex: 1,
          explanation: 'Các lệnh bắt đầu bằng dấu thăng (#) là chỉ thị tiền xử lý (Preprocessor Directive), được xử lý ở giai đoạn 1 trước khi biên dịch.'
        }
      ],
      summary: {
        cheatsheet: [
          { key: '#include <iostream>', val: 'Nạp thư viện hỗ trợ nhập xuất cout/cin' },
          { key: 'using namespace std;', val: 'Khai báo sử dụng không gian tên chuẩn' },
          { key: 'int main() { ... }', val: 'Hàm chính bắt đầu chương trình' },
          { key: 'cout << "..." << endl;', val: 'In dòng chữ ra màn hình và xuống dòng' },
          { key: 'return 0;', val: 'Báo hiệu kết thúc thành công với hệ điều hành' }
        ],
        coreTakeaway: 'Chương trình Hello World là bước chân đầu tiên của người kỹ sư phần mềm. Nắm vững từng dòng cú pháp của nó sẽ khai sáng toàn bộ hành trình lập trình phía trước.'
      },
      checklist: [
        'Tôi đã tự tay gõ và chạy thành công chương trình Hello World trên máy của mình.',
        'Tôi hiểu ý nghĩa của từng dòng lệnh trong cấu trúc chương trình C++ chuẩn.',
        'Tôi biết cách khắc phục khi quên dấu chấm phẩy hoặc gõ nhầm chữ hoa/chữ thường.'
      ],
      extendedChallenge: {
        title: 'Thử thách: Khám phá mã màu ANSI Escape Codes trong Console',
        scenario: 'Màn hình console C++ mặc định chỉ có chữ trắng trên nền đen nhàm chán.',
        challengeTask: 'Tìm hiểu cách sử dụng mã thoát ANSI (ví dụ: `\\033[1;31m` để in chữ màu đỏ rực rỡ, `\\033[1;32m` để in chữ màu xanh lá cây) và viết một lời chào sắc màu trên màn hình terminal.',
        thoughtGuidance: 'Thử lệnh: `cout << "\\033[1;32mHello, Green World!\\033[0m" << endl;` trên Windows 10/11 Terminal.'
      }
    }
  ]
};
