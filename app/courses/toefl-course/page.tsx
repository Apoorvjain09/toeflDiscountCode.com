"use client";
import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { courseData, Lecture } from './courseData';

import Sidebar from '@/app/vocabulary-course/sidebar';

import VideoPlayer from './Videoplayer';

const initialLecture = courseData.sections[0].chapters[0].lectures[0];

const CoursePage: React.FC = () => {
  const [currentLecture, setCurrentLecture] = useState<Lecture>(initialLecture);
  const thumbnailUrl = "https://www.dropbox.com/scl/fi/myaawq2x8hl49t4vfvcez/toefl_banner_with_play.png?rlkey=rubea2fp2k881s50ob9t9mnwz&st=xta4nv44&raw=1"
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);

    // Prevent opening DevTools using F12, Ctrl+Shift+I, etc.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey && event.shiftKey && event.key === 'I') || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.key === 'J') || // Ctrl+Shift+J
        (event.ctrlKey && event.key === 'U') || // Ctrl+U
        event.key === 'F12' // F12
      ) {
        event.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex">
      <Suspense fallback={<div>Loading Sidebar...</div>}>
        <Sidebar sections={courseData.sections} setCurrentLecture={setCurrentLecture} />
      </Suspense>
      <div className="w-full p-4">
        <Suspense fallback={<div>Loading Video Player...</div>}>
          <VideoPlayer videoUrl={currentLecture.videoUrl} thumbnailUrl={thumbnailUrl} />
        </Suspense>
      </div>
    </div>
  );
};

export default CoursePage;