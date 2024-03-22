"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function SideBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`z-[2] absolute sidebar bg-blue-900 text-white md:relative transition-all ease-in-out duration-700 ${
        expanded ? "ml-0" : " -ml-[200px]"
      }`}
    >
      <div className="flex py-4 gap-2 items-center justify-start">
        <Image
          src="assets/avatar-default.svg"
          alt="avatar"
          width={32}
          height={32}
          className="bg-blue-900 rounded-full object-contain"
        />
        <div>Hello, User</div>
        <Image
          src="assets/bell.svg"
          alt="avatar"
          width={32}
          height={32}
          className="rounded-full object-fit ml-6"
        />
      </div>

      <div className="flex flex-col px-1">
        {sidebarLinks.map((item, index) => {
          return (
            <div key={index} className="flex gap-2 my-2">
              {item?.icon ? (
                <Image
                  src={item.icon}
                  alt="avatar"
                  width={16}
                  height={16}
                  className="rounded-full object-fit"
                />
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
        { expanded ? "<" : ">"}
      </button>
    </div>
  );
}

export default SideBar;
