import React, { useState, useMemo } from 'react';
import {
  FileQuestion,
  Download,
  Filter,
  CheckCircle2,
  HelpCircle,
  Code,
  Sparkles,
  Layers,
  BookOpen,
  Search,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ALL_QUIZ_QUESTIONS, QUIZ_METRICS } from '../data/quizBankData.ts';
import { CHAPTERS_DATA } from '../data/curriculumData.ts';
import { exportToMoodleXML, exportToMoodleAiken, exportToMoodleGIFT } from '../utils/exportMoodleQuiz.ts';
import { downloadMarkdownFile } from '../utils/exportMarkdown.ts';

export const QuizBankSection: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  const toggleExplanation = (id: string) => {
    setShowExplanation((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredQuestions = useMemo(() => {
    return ALL_QUIZ_QUESTIONS.filter((q) => {
      const matchChapter = selectedChapter === 'all' || q.chapterId === selectedChapter;
      const matchDiff = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      const matchSearch =
        searchKeyword.trim() === '' ||
        q.questionText.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        q.topic.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        (q.codeSnippet && q.codeSnippet.toLowerCase().includes(searchKeyword.toLowerCase()));
      return matchChapter && matchDiff && matchSearch;
    });
  }, [selectedChapter, selectedDifficulty, searchKeyword]);

  const handleDownloadXML = () => {
    const xml = exportToMoodleXML(filteredQuestions);
    const filename =
      selectedChapter === 'all'
        ? 'Ngan_Hang_120_Cau_Trac_Nghiem_CPlusPlus_Moodle.xml'
        : `Ngan_Hang_Trac_Nghiem_CH0${selectedChapter}_Moodle.xml`;
    const blob = new Blob([xml], { type: 'application/xml;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadAiken = () => {
    const aiken = exportToMoodleAiken(filteredQuestions);
    const filename =
      selectedChapter === 'all'
        ? 'Ngan_Hang_120_Cau_Trac_Nghiem_CPlusPlus_Aiken.txt'
        : `Ngan_Hang_Trac_Nghiem_CH0${selectedChapter}_Aiken.txt`;
    downloadMarkdownFile(aiken, filename);
  };

  const handleDownloadGIFT = () => {
    const gift = exportToMoodleGIFT(filteredQuestions);
    const filename =
      selectedChapter === 'all'
        ? 'Ngan_Hang_120_Cau_Trac_Nghiem_CPlusPlus_GIFT.txt'
        : `Ngan_Hang_Trac_Nghiem_CH0${selectedChapter}_GIFT.txt`;
    downloadMarkdownFile(gift, filename);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-start space-x-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-200 shrink-0">
              <FileQuestion className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
                  Chuẩn LMS Moodle
                </span>
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full border border-blue-200">
                  {QUIZ_METRICS.totalQuestions} Câu hỏi trắc nghiệm khách quan
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Đầy đủ 10/10 Chương • Phân tầng 4 Cấp độ
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Ngân Hàng Câu Hỏi Trắc Nghiệm Mở Rộng Chuẩn Moodle LMS
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                Bộ câu hỏi trắc nghiệm gồm 120 câu chuẩn mực được ánh xạ theo chuẩn đầu ra (CLO), đầy đủ đáp án, lời giải thích cơ chế sâu và đoạn mã minh họa. Xuất khẩu trực tiếp sang các định dạng chuẩn <strong>Moodle XML</strong>, <strong>Aiken</strong> hoặc <strong>GIFT</strong> để nhập khẩu vào ngân hàng câu hỏi (Question Bank) trên Moodle LMS của Nhà trường.
              </p>
            </div>
          </div>

          {/* Export action buttons */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-center shrink-0">
            <button
              onClick={handleDownloadXML}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg shadow-sm transition-colors cursor-pointer"
              title="Tải tệp định dạng Moodle XML (đầy đủ định dạng code và giải thích)"
            >
              <Download className="w-4 h-4" />
              <span>Tải Moodle XML</span>
            </button>
            <button
              onClick={handleDownloadAiken}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors cursor-pointer"
              title="Tải tệp dạng văn bản đơn giản Aiken format"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Tải Aiken (.txt)</span>
            </button>
            <button
              onClick={handleDownloadGIFT}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 rounded-lg transition-colors cursor-pointer"
              title="Tải tệp định dạng Moodle GIFT"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Tải GIFT (.txt)</span>
            </button>
          </div>
        </div>

        {/* Statistical overview chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-100 text-xs">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
            <span className="text-slate-500 block">Nhận biết (30%):</span>
            <span className="text-base font-bold text-slate-900">{QUIZ_METRICS.difficultyDistribution.nhanBiet} câu</span>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
            <span className="text-slate-500 block">Thông hiểu (30%):</span>
            <span className="text-base font-bold text-blue-700">{QUIZ_METRICS.difficultyDistribution.thongHieu} câu</span>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
            <span className="text-slate-500 block">Vận dụng (25%):</span>
            <span className="text-base font-bold text-amber-700">{QUIZ_METRICS.difficultyDistribution.vanDung} câu</span>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
            <span className="text-slate-500 block">Vận dụng cao (15%):</span>
            <span className="text-base font-bold text-rose-700">{QUIZ_METRICS.difficultyDistribution.vanDungCao} câu</span>
          </div>
        </div>
      </div>

      {/* Guide for importing to Moodle */}
      <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 text-xs sm:text-sm text-blue-950">
        <h4 className="font-bold flex items-center gap-2 text-blue-900 mb-1">
          <Sparkles className="w-4 h-4 text-blue-600" />
          Hướng dẫn 3 bước nhập nhanh vào Moodle LMS của Nhà trường:
        </h4>
        <ol className="list-decimal list-inside space-y-1 text-slate-700">
          <li>Bấm nút <strong>"Tải Moodle XML"</strong> để tải tệp XML hoàn chỉnh chứa đầy đủ định dạng mã nguồn và lời giải thích.</li>
          <li>Đăng nhập khóa học trên <strong>Moodle &gt; Course Management &gt; Question bank &gt; Import</strong>.</li>
          <li>Chọn File format là <strong>Moodle XML format</strong>, kéo thả tệp vừa tải vào ô nộp và bấm <strong>Import</strong>. Hệ thống sẽ tự động tạo danh mục câu hỏi theo từng chương.</li>
        </ol>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm câu hỏi, từ khóa, code..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {/* Chapter filter */}
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tất cả 10 Chương (120 câu)</option>
              {CHAPTERS_DATA.map((ch) => (
                <option key={ch.id} value={ch.id}>
                  {ch.code}: {ch.title} (12 câu)
                </option>
              ))}
            </select>

            {/* Difficulty filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tất cả Cấp độ</option>
              <option value="Nhận biết">Nhận biết</option>
              <option value="Thông hiểu">Thông hiểu</option>
              <option value="Vận dụng">Vận dụng</option>
              <option value="Vận dụng cao">Vận dụng cao</option>
            </select>

            <span className="text-xs text-slate-500 font-medium px-2 py-1 bg-slate-100 rounded-lg">
              Hiển thị: <strong>{filteredQuestions.length}</strong> / 120 câu
            </span>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-slate-500">
            Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại.
          </div>
        ) : (
          filteredQuestions.map((q, idx) => {
            const isExpanded = showExplanation[q.id] ?? false;
            return (
              <div
                key={q.id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:border-slate-300 transition-colors"
              >
                {/* Question metadata badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-xs font-bold bg-slate-900 text-white rounded-md">
                      {q.id}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800 rounded">
                      {q.chapterCode}
                    </span>
                    <span className="text-xs font-medium text-slate-600">
                      Chủ đề: <strong>{q.topic}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                        q.difficulty === 'Nhận biết'
                          ? 'bg-slate-100 text-slate-700'
                          : q.difficulty === 'Thông hiểu'
                          ? 'bg-blue-50 text-blue-700'
                          : q.difficulty === 'Vận dụng'
                          ? 'bg-amber-50 text-amber-800'
                          : 'bg-rose-50 text-rose-800'
                      }`}
                    >
                      {q.difficulty}
                    </span>
                    {q.cloId && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                        {q.cloId}
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Content */}
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed mb-3">
                  <span className="text-slate-400 mr-1.5">Câu {idx + 1}:</span>
                  {q.questionText}
                </h3>

                {/* Code Snippet if exists */}
                {q.codeSnippet && (
                  <div className="mb-4 bg-slate-900 text-slate-100 p-3.5 rounded-lg font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner">
                    <div className="flex items-center justify-between text-slate-400 text-2xs mb-1.5 pb-1 border-b border-slate-800">
                      <span className="flex items-center gap-1">
                        <Code className="w-3.5 h-3.5 text-blue-400" /> C++ Code Snippet
                      </span>
                    </div>
                    <pre className="whitespace-pre leading-relaxed">{q.codeSnippet}</pre>
                  </div>
                )}

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                  {q.options.map((opt) => {
                    const isCorrect = opt.key === q.correctAnswer;
                    return (
                      <div
                        key={opt.key}
                        className={`p-3 rounded-lg border text-xs sm:text-sm flex items-start gap-2.5 transition-colors ${
                          isCorrect && isExpanded
                            ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-medium'
                            : 'bg-slate-50/60 border-slate-200 text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                            isCorrect && isExpanded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {opt.key}
                        </span>
                        <span className="leading-snug pt-0.5">{opt.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Toggle Explanation Button */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => toggleExplanation(q.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" /> Ẩn đáp án & giải thích
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" /> Xem đáp án chuẩn & giải thích chi tiết
                      </>
                    )}
                  </button>

                  <span className="text-2xs text-slate-400">
                    Định dạng Moodle XML CDATA Ready
                  </span>
                </div>

                {/* Expanded Explanation Box */}
                {isExpanded && (
                  <div className="mt-3 p-3.5 bg-emerald-50/50 border border-emerald-200 rounded-lg text-xs sm:text-sm text-emerald-950 space-y-1.5 animate-fadeIn">
                    <div className="flex items-center gap-2 font-bold text-emerald-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Đáp án đúng: {q.correctAnswer}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Cơ chế giải thích:</strong> {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
