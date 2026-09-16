import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { ChapterView } from './components/ChapterView.tsx';
import { CHAPTER_1_DATA } from './data/chapter1Data.ts';
import { CHAPTER_2_DATA } from './data/chapter2Data.ts';
import { CHAPTER_3_DATA } from './data/chapter3Data.ts';
import { CHAPTER_4_DATA } from './data/chapter4Data.ts';
import { CHAPTER_5_DATA } from './data/chapter5Data.ts';
import { CHAPTER_6_DATA } from './data/chapter6Data.ts';
import { CHAPTER_7_DATA } from './data/chapter7Data.ts';
import { CHAPTER_8_DATA } from './data/chapter8Data.ts';
import { CHAPTER_9_DATA } from './data/chapter9Data.ts';
import { CHAPTER_10_DATA } from './data/chapter10Data.ts';
import { OverviewSection } from './components/OverviewSection.tsx';
import { SyllabusTable } from './components/SyllabusTable.tsx';
import { MatrixSection } from './components/MatrixSection.tsx';
import { RoadmapSection } from './components/RoadmapSection.tsx';
import { LessonTemplateSection } from './components/LessonTemplateSection.tsx';
import { MoodleSection } from './components/MoodleSection.tsx';
import { ExerciseTaxonomySection } from './components/ExerciseTaxonomySection.tsx';
import { ScheduleSection } from './components/ScheduleSection.tsx';
import { ApprovalReviewSection } from './components/ApprovalReviewSection.tsx';
import { QuizBankSection } from './components/QuizBankSection.tsx';
import {
  generateCurriculumMarkdown,
  generateChapter1Markdown,
  generateChapter2Markdown,
  generateChapter3Markdown,
  generateChapter4Markdown,
  generateChapter5Markdown,
  generateChapter6Markdown,
  generateChapter7Markdown,
  generateChapter8Markdown,
  generateChapter9Markdown,
  generateChapter10Markdown,
  generateAllChaptersFullMarkdown,
  downloadMarkdownFile
} from './utils/exportMarkdown.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('chapter10');

  const handleExportMarkdown = () => {
    const mdContent = generateCurriculumMarkdown();
    downloadMarkdownFile(mdContent, 'De_Cuong_Lap_Trinh_Can_Ban_CPlusPlus_Giai_Doan_1.md');
  };

  const handleExportAllMarkdown = () => {
    const mdContent = generateAllChaptersFullMarkdown();
    downloadMarkdownFile(mdContent, 'Toan_Bo_Hoc_Lieu_Lap_Trinh_Can_Ban_CPlusPlus_10_Chuong.md');
  };

  const handleExportChapter1Markdown = () => {
    const mdContent = generateChapter1Markdown();
    downloadMarkdownFile(mdContent, 'Chuong_01_Nhap_Mon_Lap_Trinh_Va_Moi_Truong_CPP.md');
  };

  const handleExportChapter2Markdown = () => {
    const mdContent = generateChapter2Markdown();
    downloadMarkdownFile(mdContent, 'Chuong_02_Co_So_Ngon_Ngu_CPP.md');
  };

  const handleExportChapter3Markdown = () => {
    const mdContent = generateChapter3Markdown();
    downloadMarkdownFile(mdContent, 'Chuong_03_Cau_Truc_Dieu_Khien_Re_Nhanh.md');
  };

  const handleExportChapter4Markdown = () => {
    const mdContent = generateChapter4Markdown();
    downloadMarkdownFile(mdContent, 'Chuong_04_Cau_Truc_Vong_Lap.md');
  };

  const handleExportChapter5Markdown = () => {
    const mdContent = generateChapter5Markdown();
    downloadMarkdownFile(mdContent, 'Chuong_05_Chuoi_Ky_Tu_std_string.md');
  };

  const handleExportChapter6Markdown = () => {
    const mdContent = generateChapter6Markdown();
    downloadMarkdownFile(mdContent, 'Chuong_06_Mang_Mot_Chieu_Va_Thuat_Toan.md');
  };

  const handleExportChapter7Markdown = () => {
    const mdContent = generateChapter7Markdown();
    downloadMarkdownFile(mdContent, 'Chuong_07_Mang_Hai_Chieu_Ma_Tran.md');
  };

  const handleExportChapter8Markdown = () => {
    const mdContent = generateChapter8Markdown();
    downloadMarkdownFile(mdContent, 'Chuong_08_Ky_Thuat_Ham_Functions.md');
  };

  const handleExportChapter9Markdown = () => {
    const mdContent = generateChapter9Markdown();
    downloadMarkdownFile(mdContent, 'Chuong_09_Phuong_Phap_Phan_Tich_Va_Debug.md');
  };

  const handleExportChapter10Markdown = () => {
    const mdContent = generateChapter10Markdown();
    downloadMarkdownFile(mdContent, 'Chuong_10_Do_An_Va_Tong_Ket.md');
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onExportMarkdown={handleExportMarkdown}
        onExportAllMarkdown={handleExportAllMarkdown}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'chapter10' && (
          <ChapterView
            chapterData={CHAPTER_10_DATA}
            onExportMarkdown={handleExportChapter10Markdown}
            exportButtonLabel="Tải Markdown Chương 10"
          />
        )}
        {activeTab === 'chapter9' && (
          <ChapterView
            chapterData={CHAPTER_9_DATA}
            onExportMarkdown={handleExportChapter9Markdown}
            exportButtonLabel="Tải Markdown Chương 9"
          />
        )}
        {activeTab === 'chapter8' && (
          <ChapterView
            chapterData={CHAPTER_8_DATA}
            onExportMarkdown={handleExportChapter8Markdown}
            exportButtonLabel="Tải Markdown Chương 8"
          />
        )}
        {activeTab === 'chapter7' && (
          <ChapterView
            chapterData={CHAPTER_7_DATA}
            onExportMarkdown={handleExportChapter7Markdown}
            exportButtonLabel="Tải Markdown Chương 7"
          />
        )}
        {activeTab === 'chapter6' && (
          <ChapterView
            chapterData={CHAPTER_6_DATA}
            onExportMarkdown={handleExportChapter6Markdown}
            exportButtonLabel="Tải Markdown Chương 6"
          />
        )}
        {activeTab === 'chapter5' && (
          <ChapterView
            chapterData={CHAPTER_5_DATA}
            onExportMarkdown={handleExportChapter5Markdown}
            exportButtonLabel="Tải Markdown Chương 5"
          />
        )}
        {activeTab === 'chapter4' && (
          <ChapterView
            chapterData={CHAPTER_4_DATA}
            onExportMarkdown={handleExportChapter4Markdown}
            exportButtonLabel="Tải Markdown Chương 4"
          />
        )}
        {activeTab === 'chapter3' && (
          <ChapterView
            chapterData={CHAPTER_3_DATA}
            onExportMarkdown={handleExportChapter3Markdown}
            exportButtonLabel="Tải Markdown Chương 3"
          />
        )}
        {activeTab === 'chapter2' && (
          <ChapterView
            chapterData={CHAPTER_2_DATA}
            onExportMarkdown={handleExportChapter2Markdown}
            exportButtonLabel="Tải Markdown Chương 2"
          />
        )}
        {activeTab === 'chapter1' && (
          <ChapterView
            chapterData={CHAPTER_1_DATA}
            onExportMarkdown={handleExportChapter1Markdown}
            exportButtonLabel="Tải Markdown Chương 1"
          />
        )}
        {activeTab === 'overview' && <OverviewSection />}
        {activeTab === 'syllabus' && <SyllabusTable />}
        {activeTab === 'matrix' && <MatrixSection />}
        {activeTab === 'roadmap' && <RoadmapSection />}
        {activeTab === 'template' && <LessonTemplateSection />}
        {activeTab === 'moodle' && <MoodleSection />}
        {activeTab === 'exercises' && <ExerciseTaxonomySection />}
        {activeTab === 'schedule' && <ScheduleSection />}
        {activeTab === 'quizbank' && <QuizBankSection />}
        {activeTab === 'approval' && (
          <ApprovalReviewSection
            onExportMarkdown={handleExportMarkdown}
            onExportAllMarkdown={handleExportAllMarkdown}
          />
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-6 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="font-medium text-slate-300">
            Học Liệu Tự Học Môn Lập Trình Căn Bản C++ • Ngành Công Nghệ Thông Tin
          </p>
          <p>
            Thiết kế theo chuẩn Outcome-Based Education (OBE), CDIO & Mô hình Moodle LMS VPL • Giai đoạn 1: Khung đề cương
          </p>
        </div>
      </footer>
    </div>
  );
}
