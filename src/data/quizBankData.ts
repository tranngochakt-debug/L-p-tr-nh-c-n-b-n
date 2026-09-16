import { QuizQuestion } from '../types.ts';
import { CHAPTER_1_QUESTIONS, CHAPTER_2_QUESTIONS } from './quizQuestionsPart1.ts';
import { CHAPTER_3_QUESTIONS, CHAPTER_4_QUESTIONS } from './quizQuestionsPart2.ts';
import { CHAPTER_5_QUESTIONS, CHAPTER_6_QUESTIONS } from './quizQuestionsPart3.ts';
import { CHAPTER_7_QUESTIONS, CHAPTER_8_QUESTIONS } from './quizQuestionsPart4.ts';
import { CHAPTER_9_QUESTIONS, CHAPTER_10_QUESTIONS } from './quizQuestionsPart5.ts';

// Hợp nhất toàn bộ 120 câu hỏi trắc nghiệm chuẩn hóa 10 chương
export const ALL_QUIZ_QUESTIONS: QuizQuestion[] = [
  ...CHAPTER_1_QUESTIONS,
  ...CHAPTER_2_QUESTIONS,
  ...CHAPTER_3_QUESTIONS,
  ...CHAPTER_4_QUESTIONS,
  ...CHAPTER_5_QUESTIONS,
  ...CHAPTER_6_QUESTIONS,
  ...CHAPTER_7_QUESTIONS,
  ...CHAPTER_8_QUESTIONS,
  ...CHAPTER_9_QUESTIONS,
  ...CHAPTER_10_QUESTIONS,
];

export const QUIZ_METRICS = {
  totalQuestions: ALL_QUIZ_QUESTIONS.length,
  chaptersCovered: 10,
  questionsPerChapter: 12,
  difficultyDistribution: {
    nhanBiet: ALL_QUIZ_QUESTIONS.filter((q) => q.difficulty === 'Nhận biết').length,
    thongHieu: ALL_QUIZ_QUESTIONS.filter((q) => q.difficulty === 'Thông hiểu').length,
    vanDung: ALL_QUIZ_QUESTIONS.filter((q) => q.difficulty === 'Vận dụng').length,
    vanDungCao: ALL_QUIZ_QUESTIONS.filter((q) => q.difficulty === 'Vận dụng cao').length,
  },
};
