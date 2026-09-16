import {
  COURSE_INFO,
  COURSE_DESCRIPTION,
  COURSE_OBJECTIVES,
  LEARNING_OUTCOMES,
  CHAPTERS_DATA,
  CLO_MATRIX,
  LEARNING_PATHWAY,
  EXERCISE_TAXONOMY,
  MOODLE_BLUEPRINT,
  STUDY_SCHEDULE_15WEEKS,
} from '../data/curriculumData.ts';
import { CHAPTER_1_DATA, ChapterData } from '../data/chapter1Data.ts';
import { CHAPTER_2_DATA } from '../data/chapter2Data.ts';
import { CHAPTER_3_DATA } from '../data/chapter3Data.ts';
import { CHAPTER_4_DATA } from '../data/chapter4Data.ts';
import { CHAPTER_5_DATA } from '../data/chapter5Data.ts';
import { CHAPTER_6_DATA } from '../data/chapter6Data.ts';
import { CHAPTER_7_DATA } from '../data/chapter7Data.ts';
import { CHAPTER_8_DATA } from '../data/chapter8Data.ts';
import { CHAPTER_9_DATA } from '../data/chapter9Data.ts';
import { CHAPTER_10_DATA } from '../data/chapter10Data.ts';

export function generateCurriculumMarkdown(): string {
  let md = `# ĐỀ CƯƠNG VÀ KHUNG HỌC LIỆU TỰ HỌC: LẬP TRÌNH CĂN BẢN C++
**Dành cho sinh viên năm nhất ngành Công nghệ thông tin**
*Mã học phần:* ${COURSE_INFO.courseCode} | *Số tín chỉ:* ${COURSE_INFO.credits} | *Định mức:* ${COURSE_INFO.totalHours}

---

## A. MÔ TẢ TỔNG QUAN HỌC PHẦN
${COURSE_DESCRIPTION}

- **Đối tượng:** ${COURSE_INFO.targetAudience}
- **Điều kiện tiên quyết:** ${COURSE_INFO.prerequisites}
- **Triết lý sư phạm:** ${COURSE_INFO.teachingPhilosophy}
- **Nền tảng hỗ trợ:** ${COURSE_INFO.platformSupport}

---

## B. MỤC TIÊU HỌC PHẦN (GOs)
${COURSE_OBJECTIVES.map((o) => `- **${o.id}: ${o.title}** - ${o.description}`).join('\n')}

---

## C. CHUẨN ĐẦU RA HỌC PHẦN (CLOs)
| Mã CĐR | Phân loại | Thang đo Bloom | Mô tả Chuẩn đầu ra | Phương pháp đánh giá |
|---|---|---|---|---|
${LEARNING_OUTCOMES.map(
  (c) => `| **${c.id}** | ${c.category} | ${c.bloomLevel} | ${c.description} | ${c.assessmentMethod} |`
).join('\n')}

---

## D. ĐỀ CƯƠNG CHI TIẾT 10 CHƯƠNG HỌC
| Chương | Tên chương | Nội dung chính | Số bài | Lý thuyết | Thực hành | Bài tập |
|---|---|---|---:|---:|---:|---:|
${CHAPTERS_DATA.map(
  (ch) =>
    `| **${ch.code}** | ${ch.title} | ${ch.summary} | ${ch.lessonCount} | ${ch.theoryHours} | ${ch.practiceHours} | ${ch.assignmentHours} |`
).join('\n')}
| **TỔNG** | **Toàn bộ học phần** | **Bao quát từ Nhập môn đến Ứng dụng Console hoàn chỉnh** | **32 bài** | **30 tiết** | **30 tiết** | **30 tiết** |

---

## E. MA TRẬN CHUẨN ĐẦU RA – NỘI DUNG
*Quy ước:* **I** = Introduce (Giới thiệu), **T** = Teach/Practice (Giảng dạy & Luyện tập), **U** = Utilize/Assess (Vận dụng & Đánh giá).

| Chuẩn đầu ra | CH01 | CH02 | CH03 | CH04 | CH05 | CH06 | CH07 | CH08 | CH09 | CH10 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
${LEARNING_OUTCOMES.map((clo) => {
  const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map((cId) => {
      const cell = CLO_MATRIX.find((m) => m.cloId === clo.id && m.chapterId === cId);
      return cell ? `**${cell.level}**` : '-';
    })
    .join(' | ');
  return `| **${clo.id}** | ${row} |`;
}).join('\n')}

---

## F. LỘ TRÌNH HỌC TẬP (LEARNING PATHWAY)
**Nhập môn (CH01)** → **Cú pháp cơ bản (CH02)** → **Điều kiện (CH03)** → **Vòng lặp (CH04)** → **Chuỗi (CH05)** → **Mảng (CH06, CH07)** → **Hàm (CH08)** → **Phân tích bài toán (CH09)** → **Bài tập tổng hợp (CH10)**

- **Tuần 1 (CH01):** Nhập môn & Môi trường C++, Chạy code Hello World.
- **Tuần 2-3 (CH02):** Cơ sở: Biến, Kiểu dữ liệu, Toán tử, Nhập xuất an toàn.
- **Tuần 4 (CH03):** Rẽ nhánh if, switch-case, bắt lỗi logic.
- **Tuần 5-6 (CH04):** Vòng lặp for, while, do-while, vẽ hình sao, kiểm tra số nguyên tố.
- **Tuần 7 (CH05):** Chuỗi ký tự std::string, cắt ghép, chuẩn hóa xâu họ tên.
- **Tuần 8:** Ôn tập & Kiểm tra Giữa kỳ (Thực hành máy).
- **Tuần 9-10 (CH06):** Mảng 1 chiều, tìm kiếm, cực trị, chèn xóa, Bubble Sort.
- **Tuần 11 (CH07):** Mảng 2 chiều (Ma trận số học, đường chéo chính/phụ).
- **Tuần 12-13 (CH08):** Kỹ thuật Hàm, truyền tham trị vs tham chiếu (&), scope biến.
- **Tuần 14 (CH09):** Phương pháp phân tích I/O, lưu đồ giải thuật, kỹ năng Debug (Breakpoint).
- **Tuần 15 (CH10):** Mini-project Console Quản lý Điểm Sinh viên, Thi thử & Tổng kết.

---

## G. CẤU TRÚC MỘT BÀI HỌC MẪU (13 MỤC CHUẨN HÓA)
1. **Tên bài:** Ngắn gọn, nêu bật kiến thức trọng tâm.
2. **Mục tiêu bài học:** 5-7 mục tiêu đo lường được theo động từ Bloom (Trình bày, Phân biệt, Sử dụng, Viết, Phân tích, Vận dụng).
3. **Kiến thức cần chuẩn bị:** Nêu rõ các tiền đề cần nắm vững.
4. **Khởi động:** Đặt tình huống thực tế hoặc nghịch lý tạo nhu cầu học.
5. **Lý thuyết:** Giải thích bản chất, cú pháp, ý nghĩa thành phần, lưu ý.
6. **Ví dụ minh họa:** Bài toán → Phân tích I/O & ý tưởng → Code C++ hoàn chỉnh → Giải thích chi tiết → Kết quả chạy → Phân tích cơ chế.
7. **Thực hành:** 3 mức (Cơ bản → Củng cố → Vận dụng).
8. **Lỗi thường gặp (Bug Radar):** Lỗi → Nguyên nhân → Cách phát hiện → Cách khắc phục.
9. **Bài tập tự luyện:** Phân bổ 4 mức độ nhận thức (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao).
10. **Tự kiểm tra:** 3-5 câu trắc nghiệm / dự đoán output / tìm bug.
11. **Tóm tắt bài học:** Bảng cú pháp hoặc cheatsheet ghi nhớ.
12. **Checklist tự đánh giá:** Bảng kiểm năng lực người học tự tích lũy.
13. **Bài tập mở rộng:** Bài toán thực tế thử thách mở rộng tư duy.

---

## H. CẤU TRÚC KHÓA HỌC MOODLE LMS
- **Section / Topic:** Chia theo 10 Chương học với tiêu đề, banner và thanh đo tiến độ.
- **Page / Book:** Bài giảng số hóa theo 13 bước, tích hợp tô màu cú pháp và hộp mẹo/cảnh báo.
- **H5P Interactive:** Flashcards ghi nhớ cú pháp, Interactive Video có điểm dừng câu hỏi.
- **Quiz:** Trắc nghiệm tự động chấm, giải thích đáp án ngay sau khi nộp bài.
- **VPL (Virtual Programming Lab):** Trình biên dịch C++ trực tiếp trên web, tự động chấm điểm qua bộ Testcase (công khai và ẩn).
- **Assignment:** Nộp source code, sơ đồ thuật toán đồ án mini cuối kỳ.
- **Forum:** Diễn đàn trao đổi học thuật, trợ giảng hỗ trợ gỡ lỗi code 24/7.
- **Final Assessment:** Bài thi thực hành tổng hợp 90 phút.

---

## I. HỆ THỐNG BÀI TẬP THEO 4 MỨC ĐỘ
- **Mức 1: Nhận biết (30%):** Nhận diện cú pháp, tìm lỗi cú pháp, dự đoán output đoạn code ngắn.
- **Mức 2: Thông hiểu (30%):** Viết chương trình áp dụng đơn lẻ 1 cấu trúc lệnh để giải quyết yêu cầu đơn.
- **Mức 3: Vận dụng (25%):** Kết hợp 2-3 cấu trúc lệnh (vòng lặp + mảng + hàm), xử lý các trường hợp biên.
- **Mức 4: Vận dụng cao (15%):** Bài toán thực tế, quản lý dữ liệu, chuẩn hóa văn bản, thiết kế menu tương tác console hoàn chỉnh.

---

## J. ĐỀ XUẤT TIẾN ĐỘ HỌC TẬP (15 TUẦN)
| Tuần | Chương | Nội dung trọng tâm | LT | TH | Tự học | Sản phẩm đầu ra | Nhiệm vụ LMS |
|:---:|:---:|---|:---:|:---:|:---:|---|---|
${STUDY_SCHEDULE_15WEEKS.map(
  (w) =>
    `| T${w.week} | ${w.chapters} | ${w.topics} | ${w.theoryHours}t | ${w.labHours}t | ${w.selfStudyHours}t | ${w.deliverables} | ${w.moodleTasks} |`
).join('\n')}

---
*Hoàn thành GIAI ĐOẠN 1: Thiết kế khung và đề cương học phần. Dừng lại chờ phê duyệt trước khi phát triển Chương 1.*
`;

  return md;
}

export function generateChapterMarkdown(chapterData: ChapterData): string {
  const totalMinutes = chapterData.lessons.reduce((acc, l) => acc + l.readingTimeMinutes, 0);
  let md = `# CHƯƠNG ${chapterData.chapterId}: ${chapterData.title.toUpperCase()}
*Học liệu tự học Lập trình Căn bản C++ cho sinh viên năm nhất CNTT*
*Mã chương:* ${chapterData.chapterCode} | *Số lượng bài học:* ${chapterData.totalLessons} bài | *Thời lượng ước tính:* ${totalMinutes} phút tự học

---

## TỔNG QUAN CHƯƠNG ${chapterData.chapterId}
${chapterData.summary}

---
`;

  chapterData.lessons.forEach((lesson) => {
    md += `\n# BÀI ${lesson.lessonNumber}: ${lesson.title.toUpperCase()}
- **Mã bài học:** ${lesson.id}
- **Thời lượng:** ${lesson.readingTimeMinutes} phút
- **Hình thức Moodle:** ${lesson.moodleType}

### 2. MỤC TIÊU BÀI HỌC (Bloom's Taxonomy)
${lesson.objectives.map((o, i) => `${i + 1}. ${o}`).join('\n')}

### 3. KIẾN THỨC CẦN CHUẨN BỊ
${lesson.prerequisites.map((p) => `- ${p}`).join('\n')}

### 4. KHỞI ĐỘNG (Tạo nhu cầu nhận thức)
> "${lesson.leadIn.hook}"

- **Câu hỏi suy ngẫm:** ${lesson.leadIn.question}
- **Bối cảnh thực tế:** ${lesson.leadIn.realWorldScenario}

### 5. LÝ THUYẾT NỀN TẢNG
${lesson.theorySections
  .map(
    (sec) => `#### ${sec.title}
${sec.content}
${sec.keyPoints ? `\n*Ghi nhớ:*\n${sec.keyPoints.map((kp) => `- ${kp}`).join('\n')}` : ''}
${sec.callout ? `\n> **[${sec.callout.type.toUpperCase()}]** ${sec.callout.text}\n` : ''}`
  )
  .join('\n\n')}

### 6. VÍ DỤ MINH HỌA
${lesson.examples
  .map(
    (ex) => `#### ${ex.title}
- **Bài toán:** ${ex.problem}
- **Input:** \`${ex.analysis.input}\`
- **Output:** \`${ex.analysis.output}\`
- **Ý tưởng:** ${ex.analysis.idea}
- **Thuật toán:**
\`\`\`
${ex.analysis.algorithm}
\`\`\`

**Mã nguồn C++ hoàn chỉnh:**
\`\`\`cpp
${ex.code}
\`\`\`

**Giải thích mã nguồn:**
${ex.codeExplanation.map((ce) => `- \`${ce.lineOrBlock}\`: ${ce.explanation}`).join('\n')}

**Kết quả chạy thử:**
\`\`\`
${ex.executionResult.sampleOutput}
\`\`\`
*Phân tích kết quả:* ${ex.analysisOfResult}
`
  )
  .join('\n\n')}

### 7. THỰC HÀNH TẠI CHỖ (3 Cấp độ)
${lesson.practices
  .map(
    (p) => `#### ${p.level}: ${p.title}
- **Nhiệm vụ:** ${p.task}
- **Gợi ý:** ${p.hints.join(' | ')}
${p.expectedOutput ? `- **Kết quả kỳ vọng:**\n\`\`\`\n${p.expectedOutput}\n\`\`\`` : ''}`
  )
  .join('\n\n')}

### 8. RADAR TẦM SOÁT LỖI (Bug Radar)
${lesson.commonErrors
  .map(
    (e) => `#### Lỗi: ${e.name}
- **Triệu chứng:** ${e.symptom}
- **Nguyên nhân:** ${e.rootCause}
${e.compilerMessage ? `- **Thông báo Compiler:** \`${e.compilerMessage}\`` : ''}
- **Cách khắc phục:** ${e.howToFix}

*Code SAI:*
\`\`\`cpp
${e.badCode}
\`\`\`

*Code ĐÚNG:*
\`\`\`cpp
${e.goodCode}
\`\`\`
`
  )
  .join('\n\n')}

### 9. BÀI TẬP TỰ LUYỆN (4 Cấp độ Bloom)
${lesson.exercises.map((exItem) => `#### [${exItem.level}] ${exItem.title}\n${exItem.description}`).join('\n\n')}

### 10. TỰ KIỂM TRA (Self-Quiz)
${lesson.quiz
  .map(
    (q) => `**Câu ${q.id}: ${q.question}**
${q.options.map((opt, oIdx) => `- ${String.fromCharCode(65 + oIdx)}. ${opt}`).join('\n')}
*Đáp án đúng:* **${String.fromCharCode(65 + q.correctIndex)}**
*Giải thích:* ${q.explanation}
`
  )
  .join('\n')}

### 11. TÓM TẮT BÀI HỌC (Cheatsheet)
| Cú pháp / Khái niệm | Ý nghĩa cốt lõi |
|---|---|
${lesson.summary.cheatsheet.map((c) => `| \`${c.key}\` | ${c.val} |`).join('\n')}

> **Thông điệp:** ${lesson.summary.coreTakeaway}

### 12. CHECKLIST TỰ ĐÁNH GIÁ
${lesson.checklist.map((c) => `- [ ] ${c}`).join('\n')}

### 13. BÀI TẬP MỞ RỘNG / THỬ THÁCH
- **Thử thách:** ${lesson.extendedChallenge.title}
- **Bối cảnh:** ${lesson.extendedChallenge.scenario}
- **Yêu cầu:** ${lesson.extendedChallenge.challengeTask}
- **Gợi ý:** ${lesson.extendedChallenge.thoughtGuidance}

---
`;
  });

  return md;
}

export function generateChapter1Markdown(): string {
  return generateChapterMarkdown(CHAPTER_1_DATA);
}

export function generateChapter2Markdown(): string {
  return generateChapterMarkdown(CHAPTER_2_DATA);
}

export function generateChapter3Markdown(): string {
  return generateChapterMarkdown(CHAPTER_3_DATA);
}

export function generateChapter4Markdown(): string {
  return generateChapterMarkdown(CHAPTER_4_DATA);
}

export function generateChapter5Markdown(): string {
  return generateChapterMarkdown(CHAPTER_5_DATA);
}

export function generateChapter6Markdown(): string {
  return generateChapterMarkdown(CHAPTER_6_DATA);
}

export function generateChapter7Markdown(): string {
  return generateChapterMarkdown(CHAPTER_7_DATA);
}

export function generateChapter8Markdown(): string {
  return generateChapterMarkdown(CHAPTER_8_DATA);
}

export function generateChapter9Markdown(): string {
  return generateChapterMarkdown(CHAPTER_9_DATA);
}

export function generateChapter10Markdown(): string {
  return generateChapterMarkdown(CHAPTER_10_DATA);
}

export function generateAllChaptersFullMarkdown(): string {
  const curriculum = generateCurriculumMarkdown();
  const ch1 = generateChapter1Markdown();
  const ch2 = generateChapter2Markdown();
  const ch3 = generateChapter3Markdown();
  const ch4 = generateChapter4Markdown();
  const ch5 = generateChapter5Markdown();
  const ch6 = generateChapter6Markdown();
  const ch7 = generateChapter7Markdown();
  const ch8 = generateChapter8Markdown();
  const ch9 = generateChapter9Markdown();
  const ch10 = generateChapter10Markdown();

  return `${curriculum}

# ==============================================================================
# HỌC LIỆU CHI TIẾT TOÀN DIỆN 10 CHƯƠNG (32 BÀI HỌC CHUẨN SƯ PHẠM 13 BƯỚC)
# ==============================================================================

${ch1}

${ch2}

${ch3}

${ch4}

${ch5}

${ch6}

${ch7}

${ch8}

${ch9}

${ch10}
`;
}

export function downloadMarkdownFile(content: string, filename: string = 'De_Cuong_CPlusPlus_Giai_Doan_1.md') {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
