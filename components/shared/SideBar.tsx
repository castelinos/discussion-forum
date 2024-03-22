"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBell, HiMiniUserCircle } from "react-icons/hi2";

function SideBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`z-[2] absolute sidebar bg-blue-900 text-white md:relative transition-all ease-in-out duration-700 ${
        expanded ? "ml-0" : " -ml-[200px]"
      }`}
    >
      <div className="flex py-4 gap-2 items-center justify-start">
        <HiMiniUserCircle className="w-10 h-10" />
        <div>Hello, User</div>
        <HiBell className="w-6 h-6 ml-4" />
      </div>

      <div className="flex flex-col px-1">
        {sidebarLinks.map((item, index) => {
          return (
            <div key={index} className="flex gap-2 my-2 items-center">
              {item?.icon ? (
                item.icon
              ) : (
                <span className="w-4 h-4"></span>
              )}
              <Link key={index} href={item.url}>
                {item.text}
              </Link>
            </div>
          );
        })}
      </div>
      <button
        className="bg-blue-900 w-4 h-24 absolute top-[50%] -right-4 rounded-xs"
        onClick={() => {
          setExpanded((prev) => !prev);
        }}
      >
        {expanded ? "<" : ">"}
      </button>
    </div>
  );
}

export default SideBar;
