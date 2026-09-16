import React, { useState } from 'react';
import {
  BookOpen,
  Code2,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Terminal,
  HelpCircle,
  Copy,
  Check,
  ChevronRight,
  Sparkles,
  Download,
  Flame,
  ArrowRight,
  Clock,
  Layers,
  FileCheck
} from 'lucide-react';
import { CHAPTER_1_DATA, LessonContent } from '../data/chapter1Data.ts';

interface Chapter1ViewProps {
  onExportChapter1Markdown?: () => void;
}

export const Chapter1View: React.FC<Chapter1ViewProps> = ({ onExportChapter1Markdown }) => {
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(0);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [checkedChecklist, setCheckedChecklist] = useState<Record<string, boolean>>({});

  const currentLesson: LessonContent = CHAPTER_1_DATA.lessons[selectedLessonIndex];

  const handleCopyCode = (codeText: string, id: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  const handleSelectAnswer = (quizId: number, optionIndex: number) => {
    const key = `${currentLesson.id}-q${quizId}`;
    setSelectedAnswers((prev) => ({ ...prev, [key]: optionIndex }));
  };

  const toggleChecklist = (itemIdx: number) => {
    const key = `${currentLesson.id}-check-${itemIdx}`;
    setCheckedChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Chapter 1 Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white border border-blue-800/40 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 text-xs font-bold bg-blue-600/80 text-white rounded-full uppercase tracking-wider">
                Giai đoạn 2: Phát triển chi tiết chương học
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-emerald-950 text-emerald-300 border border-emerald-700/50 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Chuẩn 13 bước sư phạm
              </span>
              <span className="text-xs text-blue-200">
                Chương 1 / 10 • 3 bài học chuẩn hóa
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {CHAPTER_1_DATA.chapterCode}: {CHAPTER_1_DATA.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {CHAPTER_1_DATA.summary}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
            {onExportChapter1Markdown && (
              <button
                onClick={onExportChapter1Markdown}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Tải Markdown Chương 1</span>
              </button>
            )}
            <div className="text-xs text-blue-200/80 bg-blue-950/60 border border-blue-800/50 px-3 py-2 rounded-xl text-center">
              ⏱ Tổng thời lượng: <strong>140 phút tự học</strong>
            </div>
          </div>
        </div>

        {/* Lesson Navigation Tabs */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-3">
          {CHAPTER_1_DATA.lessons.map((lesson, idx) => {
            const isSelected = idx === selectedLessonIndex;
            return (
              <button
                key={lesson.id}
                onClick={() => setSelectedLessonIndex(idx)}
                className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-400 shadow-lg scale-[1.01]'
                    : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 border-slate-700/60'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                    isSelected ? 'bg-white text-blue-700' : 'bg-slate-800 text-blue-400'
                  }`}
                >
                  0{lesson.lessonNumber}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider opacity-80 flex items-center gap-1.5">
                    Bài {lesson.lessonNumber} • {lesson.readingTimeMinutes} phút
                  </div>
                  <div className="text-sm font-bold truncate mt-0.5">{lesson.title}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Lesson Content Body */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-10">
        {/* 1. Tiêu đề & Metadata */}
        <div className="border-b border-slate-100 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-1 text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 rounded-md">
              {currentLesson.id}
            </span>
            <span className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" /> {currentLesson.readingTimeMinutes} phút
            </span>
            <span className="px-2.5 py-1 text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200 rounded-md">
              Moodle format: {currentLesson.moodleType}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Bài {currentLesson.lessonNumber}: {currentLesson.title}
          </h3>
        </div>

        {/* 2. Mục tiêu bài học (Bloom's Taxonomy) */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-blue-700 font-bold text-base">
            <CheckCircle2 className="w-5 h-5" />
            <h4>2. MỤC TIÊU BÀI HỌC (Đo lường theo thang đo Bloom)</h4>
          </div>
          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 sm:p-5">
            <p className="text-xs text-blue-800 font-semibold mb-2.5 uppercase tracking-wide">
              Sau khi học xong bài này, sinh viên có thể:
            </p>
            <ul className="space-y-2">
              {currentLesson.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Kiến thức cần chuẩn bị */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-base">
            <Layers className="w-5 h-5 text-indigo-600" />
            <h4>3. KIẾN THỨC CẦN CHUẨN BỊ</h4>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700">
              {currentLesson.prerequisites.map((pre, i) => (
                <li key={i}>{pre}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Khởi động (Lead-in) */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-amber-700 font-bold text-base">
            <Flame className="w-5 h-5" />
            <h4>4. KHỞI ĐỘNG (Tạo nhu cầu nhận thức)</h4>
          </div>
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-5 space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-slate-800 italic leading-relaxed font-medium">
                  "{currentLesson.leadIn.hook}"
                </p>
                <div className="text-sm font-bold text-amber-900">
                  ❓ Câu hỏi suy ngẫm: {currentLesson.leadIn.question}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {currentLesson.leadIn.realWorldScenario}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Lý thuyết cốt lõi */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h4>5. LÝ THUYẾT NỀN TẢNG</h4>
          </div>
          <div className="space-y-5">
            {currentLesson.theorySections.map((sec, i) => (
              <div key={i} className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 space-y-3">
                <h5 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  {sec.title}
                </h5>
                <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                  {sec.content}
                </p>
                {sec.keyPoints && sec.keyPoints.length > 0 && (
                  <div className="bg-white border border-slate-200 rounded-lg p-3.5">
                    <div className="text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wide">
                      Điểm mấu chốt cần ghi nhớ:
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700">
                      {sec.keyPoints.map((kp, kIdx) => (
                        <li key={kIdx}>{kp}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {sec.callout && (
                  <div
                    className={`rounded-lg p-3.5 text-xs sm:text-sm flex items-start gap-2.5 ${
                      sec.callout.type === 'warning'
                        ? 'bg-rose-50 border border-rose-200 text-rose-900'
                        : sec.callout.type === 'tip'
                        ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                        : 'bg-blue-50 border border-blue-200 text-blue-900'
                    }`}
                  >
                    {sec.callout.type === 'warning' && <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />}
                    {sec.callout.type === 'tip' && <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />}
                    {sec.callout.type === 'note' && <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />}
                    <div className="leading-relaxed">{sec.callout.text}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 6. Ví dụ minh họa (Quy trình 6 bước) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-900 font-bold text-base">
            <Code2 className="w-5 h-5 text-indigo-600" />
            <h4>6. VÍ DỤ MINH HỌA (Mô hình 6 bước chuẩn khoa học)</h4>
          </div>
          {currentLesson.examples.map((ex, exIdx) => (
            <div key={exIdx} className="border border-indigo-200 rounded-xl overflow-hidden bg-slate-900 text-slate-100 shadow-md">
              <div className="bg-slate-800/90 px-5 py-3 border-b border-slate-700 flex items-center justify-between">
                <div className="font-bold text-sm text-indigo-300 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  {ex.title}
                </div>
                <button
                  onClick={() => handleCopyCode(ex.code, `ex-${exIdx}`)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  {copiedCodeId === `ex-${exIdx}` ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Đã sao chép!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép code</span>
                    </>
                  )}
                </button>
              </div>

              {/* Analysis Box */}
              <div className="bg-slate-800/40 p-5 border-b border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <div className="text-slate-400 font-semibold uppercase tracking-wider">Bài toán:</div>
                  <div className="text-slate-200 font-medium">{ex.problem}</div>
                  <div className="text-slate-400 font-semibold uppercase tracking-wider mt-2">Ý tưởng:</div>
                  <div className="text-slate-300">{ex.analysis.idea}</div>
                </div>
                <div className="space-y-2 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Input:</span>
                    <span className="text-emerald-300 font-mono">{ex.analysis.input}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Output:</span>
                    <span className="text-emerald-300 font-mono">{ex.analysis.output}</span>
                  </div>
                  <div className="mt-2 text-slate-400 font-semibold uppercase tracking-wider">Thuật toán:</div>
                  <div className="text-slate-300 whitespace-pre-line font-mono text-[11px] leading-relaxed">
                    {ex.analysis.algorithm}
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-5 overflow-x-auto bg-slate-950 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed border-b border-slate-800">
                <pre>{ex.code}</pre>
              </div>

              {/* Code Explanation & Output */}
              <div className="p-5 space-y-4 bg-slate-900 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-slate-300 mb-2 uppercase tracking-wide text-xs">
                    Giải thích chi tiết từng câu lệnh:
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {ex.codeExplanation.map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 bg-slate-800/60 p-2.5 rounded-lg border border-slate-800">
                        <code className="text-blue-300 font-mono shrink-0 sm:w-48 bg-slate-950 px-2 py-0.5 rounded text-xs">
                          {item.lineOrBlock}
                        </code>
                        <span className="text-slate-300 text-xs sm:text-sm">{item.explanation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-emerald-400 font-semibold text-xs flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" /> Kết quả hiển thị trên Terminal khi chạy:
                  </div>
                  <pre className="font-mono text-xs text-slate-300 bg-slate-900 p-2.5 rounded border border-slate-800 whitespace-pre-wrap">
                    {ex.executionResult.sampleOutput}
                  </pre>
                  <p className="text-xs text-slate-400 italic">
                    💡 Phân tích: {ex.analysisOfResult}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 7. Thực hành (3 cấp độ) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h4>7. THỰC HÀNH TẠI CHỖ (3 Cấp độ tăng dần)</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentLesson.practices.map((prac, pIdx) => (
              <div key={pIdx} className="bg-emerald-50/40 border border-emerald-200 rounded-xl p-4 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <span className="px-2 py-0.5 text-xs font-bold bg-emerald-100 text-emerald-800 rounded">
                    {prac.level}
                  </span>
                  <h6 className="font-bold text-slate-900 text-sm">{prac.title}</h6>
                  <p className="text-xs text-slate-700 leading-relaxed">{prac.task}</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-emerald-100 text-xs space-y-1.5">
                  <div className="font-semibold text-emerald-800">Gợi ý:</div>
                  <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                    {prac.hints.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                  {prac.expectedOutput && (
                    <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-700">
                      <strong>Kỳ vọng:</strong>
                      <pre className="bg-slate-50 p-1.5 rounded mt-1 overflow-x-auto">{prac.expectedOutput}</pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Lỗi thường gặp (Bug Radar) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-rose-800 font-bold text-base">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            <h4>8. RADAR TẦM SOÁT LỖI (BUG RADAR CHO NGƯỜI MỚI)</h4>
          </div>
          <div className="space-y-4">
            {currentLesson.commonErrors.map((err, eIdx) => (
              <div key={eIdx} className="bg-rose-50/40 border border-rose-200 rounded-xl p-5 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h6 className="font-bold text-rose-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                    {err.name}
                  </h6>
                  {err.compilerMessage && (
                    <code className="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-mono shrink-0">
                      {err.compilerMessage}
                    </code>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="space-y-1.5">
                    <p className="text-slate-700">
                      <strong>Hiện tượng / Triệu chứng:</strong> {err.symptom}
                    </p>
                    <p className="text-slate-700">
                      <strong>Nguyên nhân gốc rễ:</strong> {err.rootCause}
                    </p>
                    <p className="text-emerald-800 font-medium">
                      <strong>Cách khắc phục:</strong> {err.howToFix}
                    </p>
                  </div>
                  <div className="space-y-2 bg-white p-3 rounded-lg border border-rose-200 text-xs font-mono">
                    <div className="text-rose-600 font-bold">❌ Code SAI:</div>
                    <pre className="bg-rose-50 text-rose-900 p-2 rounded overflow-x-auto">{err.badCode}</pre>
                    <div className="text-emerald-600 font-bold mt-1">✅ Code ĐÚNG:</div>
                    <pre className="bg-emerald-50 text-emerald-900 p-2 rounded overflow-x-auto">{err.goodCode}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Bài tập tự luyện (4 mức độ nhận thức) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <Layers className="w-5 h-5 text-blue-600" />
            <h4>9. BÀI TẬP TỰ LUYỆN (Theo 4 mức độ nhận thức Bloom)</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentLesson.exercises.map((exItem, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                    {exItem.level}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Bài 0{idx + 1}</span>
                </div>
                <h6 className="font-bold text-slate-900 text-sm">{exItem.title}</h6>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {exItem.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Tự kiểm tra (Interactive Self-Quiz) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-900 font-bold text-base">
              <HelpCircle className="w-5 h-5 text-purple-600" />
              <h4>10. TỰ KIỂM TRA TƯ DUY (Trắc nghiệm nhanh có phản hồi)</h4>
            </div>
            <span className="text-xs font-medium text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
              Chọn đáp án để xem giải thích
            </span>
          </div>

          <div className="space-y-4">
            {currentLesson.quiz.map((q) => {
              const quizKey = `${currentLesson.id}-q${q.id}`;
              const userAns = selectedAnswers[quizKey];
              const isAnswered = userAns !== undefined;
              const isCorrect = userAns === q.correctIndex;

              return (
                <div key={q.id} className="bg-purple-50/40 border border-purple-200 rounded-xl p-5 space-y-3">
                  <div className="font-bold text-slate-900 text-sm sm:text-base">
                    Câu {q.id}: {q.question}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, optIdx) => {
                      let btnStyle = 'bg-white hover:bg-purple-50 border-slate-200 text-slate-700';
                      if (isAnswered) {
                        if (optIdx === q.correctIndex) {
                          btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                        } else if (optIdx === userAns) {
                          btnStyle = 'bg-rose-100 border-rose-400 text-rose-900 line-through';
                        } else {
                          btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                        }
                      }
                      return (
                        <button
                          key={optIdx}
                          disabled={isAnswered}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          className={`p-3 text-left text-xs sm:text-sm rounded-lg border transition-all cursor-pointer ${btnStyle}`}
                        >
                          <span className="font-bold mr-2 text-slate-500">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div
                      className={`p-3 rounded-lg text-xs leading-relaxed ${
                        isCorrect
                          ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                          : 'bg-rose-50 border border-rose-200 text-rose-900'
                      }`}
                    >
                      <div className="font-bold mb-0.5">
                        {isCorrect ? '🎉 Chính xác!' : '❌ Chưa chính xác!'}
                      </div>
                      <div>{q.explanation}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 11. Tóm tắt bài học (Cheatsheet) */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h4>11. TÓM TẮT BÀI HỌC (CHEATSHEET GHI NHỚ NHANH)</h4>
          </div>
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <tbody>
                  {currentLesson.summary.cheatsheet.map((row, rIdx) => (
                    <tr key={rIdx} className="border-b border-slate-800 last:border-0">
                      <td className="py-2.5 px-3 font-mono font-bold text-blue-300 shrink-0 w-44">
                        {row.key}
                      </td>
                      <td className="py-2.5 px-3 text-slate-300">{row.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-950/70 border border-blue-800 p-3.5 rounded-lg text-xs sm:text-sm text-blue-200 italic flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                <strong>Thông điệp cốt lõi:</strong> {currentLesson.summary.coreTakeaway}
              </span>
            </div>
          </div>
        </section>

        {/* 12. Checklist tự đánh giá */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
            <FileCheck className="w-5 h-5 text-emerald-600" />
            <h4>12. CHECKLIST TỰ ĐÁNH GIÁ NĂNG LỰC (Bảng kiểm tự giác)</h4>
          </div>
          <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-5 space-y-2.5">
            <p className="text-xs text-slate-600 mb-2">
              Hãy đánh dấu tích vào những kỹ năng bạn đã tự tin nắm vững trước khi chuyển sang bài học kế tiếp:
            </p>
            {currentLesson.checklist.map((item, cIdx) => {
              const checkKey = `${currentLesson.id}-check-${cIdx}`;
              const isChecked = !!checkedChecklist[checkKey];
              return (
                <label
                  key={cIdx}
                  onClick={() => toggleChecklist(cIdx)}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-emerald-100 hover:bg-emerald-50/50 transition-colors cursor-pointer text-xs sm:text-sm text-slate-800 select-none"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}}
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 cursor-pointer"
                  />
                  <span className={isChecked ? 'line-through text-slate-400 font-medium' : 'font-medium'}>
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        </section>

        {/* 13. Bài tập mở rộng */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-indigo-900 font-bold text-base">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <h4>13. BÀI TẬP MỞ RỘNG / THỬ THÁCH THỰC TẾ</h4>
          </div>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-5 space-y-2.5">
            <h6 className="font-bold text-indigo-950 text-sm sm:text-base">
              🎯 {currentLesson.extendedChallenge.title}
            </h6>
            <p className="text-xs sm:text-sm text-slate-700">
              <strong>Bối cảnh:</strong> {currentLesson.extendedChallenge.scenario}
            </p>
            <p className="text-xs sm:text-sm text-indigo-900 font-medium bg-white/80 p-3 rounded-lg border border-indigo-100">
              <strong>Thử thách:</strong> {currentLesson.extendedChallenge.challengeTask}
            </p>
            <p className="text-xs text-slate-500 italic">
              💡 Gợi ý tư duy: {currentLesson.extendedChallenge.thoughtGuidance}
            </p>
          </div>
        </section>

        {/* Bottom Pagination */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            disabled={selectedLessonIndex === 0}
            onClick={() => setSelectedLessonIndex((prev) => Math.max(0, prev - 1))}
            className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            ← Bài trước
          </button>

          <div className="text-xs text-slate-500 font-medium">
            Bài {selectedLessonIndex + 1} / {CHAPTER_1_DATA.totalLessons} của Chương 1
          </div>

          <button
            disabled={selectedLessonIndex === CHAPTER_1_DATA.totalLessons - 1}
            onClick={() => setSelectedLessonIndex((prev) => Math.min(CHAPTER_1_DATA.totalLessons - 1, prev + 1))}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <span>Bài tiếp theo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
