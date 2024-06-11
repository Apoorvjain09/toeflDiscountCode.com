"use client";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import React, { Suspense, lazy } from "react";

const Section = lazy(() => import("./Section"));

const sections = [
  {
    title: "Guides",
    cards: [
      {
        title: "Official Ets Guide",
        description: "MJ Study Abroad- Official Ets Guide Vol_3.pdf",
        link: "https://drive.google.com/file/d/14OwL289o433gTSjBVTQmhqDczh0xP8is/view?usp=sharing",
      },
      {
        title: "Reading Material 2",
        description: "Description for Reading Material 2.",
        link: "#",
      },
      {
        title: "Reading Material 3",
        description: "Description for Reading Material 3.",
        link: "#",
      },
    ],
  },
  {
    title: "Listening",
    cards: [
      {
        title: "Listening Material 1",
        description: "Description for Listening Material 1.",
        link: "#",
      },
      {
        title: "Listening Material 2",
        description: "Description for Listening Material 2.",
        link: "#",
      },
      {
        title: "Listening Material 3",
        description: "Description for Listening Material 3.",
        link: "#",
      },
    ],
  },
  // Add more sections here...
];

function Page() {
  return (
    <Suspense fallback={<div><LoadingSpinner/></div>}>
      <div
        style={{
          backgroundImage: `url(/assets/background-books.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          borderRadius: "0.5rem",
        }}
      >
        <div className="container mx-auto p-4 items-center text-center flex flex-col">
          {sections.map((section, index) => (
            <Section key={index} {...section} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default Page;
