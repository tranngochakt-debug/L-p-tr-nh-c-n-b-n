export interface LearningOutcome {
  id: string; // e.g. CLO1
  code: string;
  bloomLevel: string; // e.g. "L1-Nhận biết", "L3-Áp dụng"
  description: string;
  category: 'Kiến thức' | 'Kỹ năng' | 'Thái độ & Tư duy';
  assessmentMethod: string;
}

export interface CourseObjective {
  id: string; // e.g. GO1
  title: string;
  description: string;
}

export interface LessonDetail {
  id: string;
  lessonNumber: number;
  title: string;
  description: string;
  moodleActivity: string;
  durationMinutes: number;
  keyConcepts: string[];
}

export interface Chapter {
  id: number;
  code: string;
  title: string;
  summary: string;
  lessonCount: number;
  theoryHours: number;
  practiceHours: number;
  assignmentHours: number;
  prerequisites: string;
  clos: string[];
  lessons: LessonDetail[];
}

export interface MatrixCell {
  cloId: string;
  chapterId: number;
  level: 'I' | 'T' | 'U' | ''; // Introduce, Teach/Practice, Utilize/Assess
  note?: string;
}

export interface ExerciseLevel {
  level: string;
  name: string;
  percentage: number;
  bloomTarget: string;
  description: string;
  characteristics: string[];
  exampleProblem: {
    title: string;
    description: string;
    sampleInput?: string;
    sampleOutput?: string;
  };
}

export interface WeekPlan {
  week: number;
  chapters: string;
  topics: string;
  theoryHours: number;
  labHours: number;
  selfStudyHours: number;
  deliverables: string;
  moodleTasks: string;
}

export type QuestionDifficulty = 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';

export interface QuizQuestion {
  id: string; // e.g. Q001
  chapterId: number; // 1 to 10
  chapterCode: string; // e.g. CH01
  topic: string;
  difficulty: QuestionDifficulty;
  questionText: string;
  codeSnippet?: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
    feedback?: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  cloId?: string; // e.g. CLO1, CLO2
}

