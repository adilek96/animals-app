"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiUserSettingsLine } from "react-icons/ri";
import { BiMessageRoundedDots, BiSpreadsheet } from "react-icons/bi";

export function ProfileTabs() {
  const pathname = usePathname();
  const [path, setPath] = useState<string>(pathname);

  return (
    <div className="w-full h-[100px] flex justify-center items-center">
      <ul className="md:w-[60vw] sm:w-[95vw] md:h-[60px] sm:h-[45px] backdrop-blur-lg bg-gradient-to-r from-green-500 to-green-400 dark:bg-gray-300/10  rounded-xl flex justify-around items-center text-white font-bold shadow-md shadow-green-800 md:text-[16px] sm:text-[8px]">
        <Link href="/profile">
          <li
            onClick={() => setPath("/profile")}
            className={`md:w-[19.5vw] md:h-[50px] sm:w-[31vw] sm:h-[40px] rounded-xl flex justify-around items-center focus:bg-green-700/80   ${
              path === "/profile" ? " bg-green-700/80 " : "hover:bg-white/40"
            }`}
          >
            <p className="flex justify-center flex-col items-center">
              <RiUserSettingsLine className="text-2xl text-white md:hidden" />
              Настройки
            </p>
          </li>
        </Link>
        <Link href="/profile/messages">
          <li
            onClick={() => setPath("/profile/messages")}
            className={`md:w-[19.5vw] md:h-[50px] sm:w-[31vw] sm:h-[40px] rounded-xl flex justify-around items-center    ${
              path === "/profile/messages"
                ? "bg-green-700/80  "
                : "hover:bg-white/40"
            }`}
          >
            <p className="flex justify-center flex-col items-center">
              <BiMessageRoundedDots className="text-2xl text-white md:hidden" />
              Сообщения
            </p>
          </li>
        </Link>
        <Link href="/profile/myAds">
          <li
            onClick={() => setPath("/profile/myAds")}
            className={`md:w-[19.5vw] md:h-[50px] sm:w-[31vw] sm:h-[40px] rounded-xl flex justify-around items-center   ${
              path === "/profile/myAds"
                ? "bg-green-700/80  "
                : "hover:bg-white/40"
            }`}
          >
            <p className="flex justify-center flex-col items-center">
              <BiSpreadsheet className="text-2xl text-white md:hidden" />
              Мои обьявления
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

// dark:bg-slate-800/50
