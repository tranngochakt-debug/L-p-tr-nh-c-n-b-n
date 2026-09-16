import { QuizQuestion } from '../types.ts';

/**
 * Xuất theo định dạng MOODLE AIKEN FORMAT
 * - Dòng 1: Nội dung câu hỏi (kèm đoạn mã nếu có)
 * - Dòng 2..5: A. Option A / B. Option B / C. Option C / D. Option D
 * - Dòng 6: ANSWER: X
 * - Dòng trống phân cách giữa các câu
 */
export function exportToMoodleAiken(questions: QuizQuestion[]): string {
  let output = '';

  questions.forEach((q, index) => {
    let questionText = `${q.questionText}`;
    if (q.codeSnippet) {
      questionText += `\n[Mã nguồn]\n${q.codeSnippet}\n`;
    }

    output += `${index + 1}. [${q.chapterCode} - ${q.difficulty}] ${questionText}\n`;

    q.options.forEach((opt) => {
      output += `${opt.key}. ${opt.text}\n`;
    });

    output += `ANSWER: ${q.correctAnswer}\n\n`;
  });

  return output;
}

/**
 * Xuất theo định dạng MOODLE XML FORMAT
 * Định dạng mạnh nhất của Moodle, hỗ trợ phân loại Category, CDATA giữ nguyên định dạng code,
 * phản hồi giải thích chi tiết (generalfeedback) và gắn mã chuẩn đầu ra CLO.
 */
export function exportToMoodleXML(questions: QuizQuestion[], categoryName: string = 'Ngan_Hang_Trac_Nghiem_CPlusPlus'): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<quiz>\n`;

  // Category question
  xml += `  <question type="category">\n`;
  xml += `    <category>\n`;
  xml += `      <text>$course$/top/${categoryName}</text>\n`;
  xml += `    </category>\n`;
  xml += `  </question>\n\n`;

  questions.forEach((q) => {
    xml += `  <!-- Question ID: ${q.id} - ${q.chapterCode} -->\n`;
    xml += `  <question type="multichoice">\n`;
    xml += `    <name>\n`;
    xml += `      <text>[${q.chapterCode}] [${q.difficulty}] ${escapeXml(q.topic)} - ${q.id}</text>\n`;
    xml += `    </name>\n`;
    xml += `    <questiontext format="html">\n`;
    xml += `      <text><![CDATA[<p><strong>[${q.chapterCode}] ${q.questionText}</strong></p>`;
    if (q.codeSnippet) {
      xml += `<pre><code style="background-color: #f4f4f4; border: 1px solid #ddd; padding: 8px; display: block; border-radius: 4px; font-family: 'Courier New', monospace;">${escapeHtml(q.codeSnippet)}</code></pre>`;
    }
    xml += `]]></text>\n`;
    xml += `    </questiontext>\n`;

    // General feedback (Giải thích chi tiết)
    xml += `    <generalfeedback format="html">\n`;
    xml += `      <text><![CDATA[<p><strong>Giải thích chi tiết:</strong> ${escapeHtml(q.explanation)}</p><p><em>Chuẩn đầu ra: ${q.cloId || 'CLO'}</em></p>]]></text>\n`;
    xml += `    </generalfeedback>\n`;

    xml += `    <defaultgrade>1.0000000</defaultgrade>\n`;
    xml += `    <penalty>0.3333333</penalty>\n`;
    xml += `    <hidden>0</hidden>\n`;
    xml += `    <single>true</single>\n`;
    xml += `    <shuffleanswers>true</shuffleanswers>\n`;
    xml += `    <answernumbering>abc</answernumbering>\n`;

    // Options
    q.options.forEach((opt) => {
      const isCorrect = opt.key === q.correctAnswer;
      const fraction = isCorrect ? 100 : 0;
      xml += `    <answer fraction="${fraction}" format="html">\n`;
      xml += `      <text><![CDATA[${escapeHtml(opt.text)}]]></text>\n`;
      xml += `      <feedback format="html">\n`;
      xml += `        <text><![CDATA[${isCorrect ? 'Chính xác! ' + escapeHtml(q.explanation) : 'Chưa chính xác.'}]]></text>\n`;
      xml += `      </feedback>\n`;
      xml += `    </answer>\n`;
    });

    xml += `  </question>\n\n`;
  });

  xml += `</quiz>\n`;
  return xml;
}

/**
 * Xuất theo định dạng MOODLE GIFT FORMAT
 * Hỗ trợ đánh dấu category, phản hồi giải thích và thẻ tag
 */
export function exportToMoodleGIFT(questions: QuizQuestion[]): string {
  let gift = `// ========================================================\n`;
  gift += `// NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM C++ - ĐỊNH DẠNG MOODLE GIFT\n`;
  gift += `// Học phần: Lập trình Căn bản C++ (IT1001)\n`;
  gift += `// ========================================================\n\n`;

  let currentChapter = '';

  questions.forEach((q) => {
    if (q.chapterCode !== currentChapter) {
      currentChapter = q.chapterCode;
      gift += `$CATEGORY: $course$/top/NganHangTracNghiemCPlusPlus/${currentChapter}\n\n`;
    }

    let qText = `[${q.difficulty}] ${q.questionText}`;
    if (q.codeSnippet) {
      qText += `\\n[Mã nguồn]:\\n${q.codeSnippet.replace(/\n/g, '\\n')}`;
    }

    gift += `::${q.id} - ${q.topic}::[html]${escapeGift(qText)} {\n`;

    q.options.forEach((opt) => {
      const isCorrect = opt.key === q.correctAnswer;
      const prefix = isCorrect ? '=' : '~';
      const feedback = isCorrect ? `#Chính xác! ${escapeGift(q.explanation)}` : '#Chưa chính xác.';
      gift += `  ${prefix}${escapeGift(opt.text)} ${feedback}\n`;
    });

    gift += `}\n\n`;
  });

  return gift;
}

// Helper escape functions
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeGift(str: string): string {
  return str
    .replace(/~/g, '\\~')
    .replace(/=/g, '\\=')
    .replace(/#/g, '\\#')
    .replace(/{/g, '\\{')
    .replace(/}/g, '\\}')
    .replace(/:/g, '\\:');
}
