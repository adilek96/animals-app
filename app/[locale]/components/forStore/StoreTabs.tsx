"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function StoreTabs() {
  const pathname = usePathname();
  const [path, setPath] = useState<string>("");
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  return (
    <div className="w-full h-[100px] flex justify-center items-center">
      <ul className="md:w-[50vw] sm:w-[95vw] md:h-[60px] sm:h-[45px] backdrop-blur-lg bg-gradient-to-r from-green-500 to-green-400 dark:bg-gray-300/10  rounded-xl flex justify-around items-center text-white font-bold shadow-md shadow-green-800 md:text-[16px] sm:text-[8px]">
        <Link href="/store">
          <li
            //   onClick={() => setPath("/profile")}
            className={`md:w-[24.5vw] md:h-[50px] sm:w-[42.5vw] sm:h-[40px] rounded-xl flex justify-around items-center focus:bg-green-700/80   ${
              path === "/store" ? " bg-green-700/80 " : "hover:bg-white/40"
            }`}
          >
            <p className="flex justify-center flex-col items-center">
              Магазины
            </p>
          </li>
        </Link>
        <Link href="/store/goods">
          <li
            //   onClick={() => setPath("/profile/messages")}
            className={`md:w-[24.5vw] md:h-[50px] sm:w-[42.5vw] sm:h-[40px] rounded-xl flex justify-around items-center    ${
              path === "/store/goods"
                ? "bg-green-700/80  "
                : "hover:bg-white/40"
            }`}
          >
            <p className="flex justify-center flex-col items-center">Товары</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
