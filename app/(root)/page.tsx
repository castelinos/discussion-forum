"use client";
import ForumTab from "@/components/shared/ForumTab";
import StoryCard from "@/components/shared/StoryCard";
import { cardList, discussionList } from "@/constants/index.js";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  function setTab(index: number) {
    console.log(index);
    setActiveTab(index);
  }

  return (
    <main className="flex">
      {/* Toggle button for uptil md devices */}
      <div className="absolute z-[1] grid grid-cols-2 w-full sm:hidden text-white h-12">
        <div
          onClick={() => setTab(0)}
          className={`${
            0 === activeTab
              ? "bg-blue-600 border-b-4 border-red-500"
              : "bg-blue-900"
          } flex items-center justify-center cursor-pointer`}
        >
          Discussion forum
        </div>
        <div
          onClick={() => setTab(1)}
          className={`${
            1 === activeTab
              ? "bg-blue-600 border-b-4 border-red-500"
              : "bg-blue-900"
          } flex items-center justify-center cursor-pointer`}
        >
          Market Stories
        </div>
      </div>

      {/* Discussion forum */}
      <div className={0 === activeTab ? "grow" : "hidden sm:block"}>
        <div className="bg-gray-200 text-red-500 font-semibold text-[22px] uppercase p-2.5 hidden sm:inline-block mt-2 mx-2">
          Discussions forum
        </div>

        <div className="mt-16 sm:mt-4">
          {discussionList.map((item, index) => {
            return (
              <ForumTab
                key={index}
                avatarURL={item.avatar}
                title={item.title}
                content={item.text}
                label={item.label}
              />
            );
          })}
        </div>
      </div>

      {/* Market discussion */}
      <div className={1 === activeTab ? "grow" : "hidden sm:block"}>
        <div className="bg-gray-200 text-red-500 font-semibold text-[18px] uppercase p-2.5 hidden sm:inline-block mt-2 mx-2">
          Marketing discussion
        </div>

        <div className="flex flex-col items-center gap-6 mt-16 sm:mt-6">
          {cardList.map((item, index) => {
            return (
              <StoryCard
                key={index}
                imageUrl={item.imageUrl}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
