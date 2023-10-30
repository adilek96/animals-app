"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiUserSettingsLine } from "react-icons/ri";
import { BiMessageRoundedDots, BiSpreadsheet } from "react-icons/bi";

export function ProfileTabs() {
  const pathname = usePathname();
  return (
    <div className="w-full h-[100px] flex justify-center items-center">
      <ul className="md:w-[620px] sm:w-[310px] md:h-[60px] sm:h-[45px] backdrop-blur-lg bg-gradient-to-r from-green-500 to-green-400 dark:bg-gray-300/10  rounded-xl flex justify-around items-center text-white font-bold shadow-md shadow-green-800 md:text-[16px] sm:text-[8px]">
        <Link href="/profile">
          <li
            className={`md:w-[200px] md:h-[50px] sm:w-[100px] sm:h-[40px] rounded-xl flex justify-around items-center    ${
              pathname === "/profile"
                ? " bg-green-600/80 "
                : "hover:bg-white/40"
            }`}
          >
            <p className="flex justify-center items-center">
              <RiUserSettingsLine className="text-2xl text-white md:hidden" />
              Настройки
            </p>
          </li>
        </Link>
        <Link href="/profile/messages">
          <li
            className={`md:w-[200px] md:h-[50px] sm:w-[100px] sm:h-[40px] rounded-xl flex justify-around items-center    ${
              pathname === "/profile/messages"
                ? "bg-green-600/80  "
                : "hover:bg-white/40"
            }`}
          >
            <p className="flex justify-center items-center">
              <BiMessageRoundedDots className="text-2xl text-white md:hidden" />
              Сообщения
            </p>
          </li>
        </Link>
        <Link href="/profile/myAds">
          <li
            className={`md:w-[200px] md:h-[50px] sm:w-[100px] sm:h-[40px] rounded-xl flex justify-around items-center   ${
              pathname === "/profile/myAds"
                ? "bg-green-600/80  "
                : "hover:bg-white/40"
            }`}
          >
            <p className="flex justify-center items-center">
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
