import Image from "next/image";
import Link from "next/link";

import { HiOutlineChatAlt, HiOutlineEye, HiOutlineHeart, HiOutlineShare } from 'react-icons/hi';

interface Props {
  avatarURL: string;
  title:string;
  label:string;
  content:string;
}

function ForumTab({avatarURL,title,label,content}:Props) {
  return (
    <div className="flex mb-2 py-4 px-2 shadow-md">
      <div className="p-2 min-w-20">
        <Image
          src={avatarURL}
          alt="avatar"
          width={64}
          height={64}
          className="rounded-full object-contain"
        />
      </div>

      <div className="flex flex-col justify-center grow">
        <div className="flex gap-3">
          <h1 className="text-black font-bold text-[16px]">{title}</h1>
          <div className="text-white bg-blue-600 px-4 py-1 rounded-full text-[12px] font-semibold">
            {label}
          </div>
        </div>

        <div className="mt-2">
          <p className="text-[14px] text-gray-800">{content}</p>
        </div>

        <div className="flex mt-2 gap-5">
          <Link href="/" className="flex gap-1 items-center">
            <HiOutlineHeart className="w-5 h-5" />
            <span className="text-sm">70k</span>
          </Link>

          <Link href="/" className="flex gap-1 items-center">
            <HiOutlineEye className="w-5 h-5" />
            <span className="text-sm">90k</span>
          </Link>

          <Link href="/" className="flex gap-1 items-center">
            <HiOutlineChatAlt className="w-5 h-5" />
            <span className="text-sm">1k</span>
          </Link>

          <Link href="/" className="flex gap-1 items-center">
            <HiOutlineShare className="w-5 h-5" />
            <span className="text-sm">1.2k</span>
          </Link>
        </div>
      </div>

      <div className="min-w-28">
        <p className="text-sm text-blue-800 font-semibold px-1 pt-0 mt-0">
          2 min ago
        </p>
      </div>
    </div>
  );
}

export default ForumTab;
