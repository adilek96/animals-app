"use client";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { motion } from "framer-motion";

export function SearchButton() {
  // стейт вызова меню поиска
  const [searchMenuActive, setSearchMenuActive] = useState(false);
  return (
    <button
      onClick={() => setSearchMenuActive(!searchMenuActive)}
      className="absolute right-2.5 bottom-2.5  flex flex-col  items-center justify-center gap-1 bg-gradient-to-r from-green-500 to-green-400  hover:contrast-125 duration-700 shadow-md rounded-full shadow-gray-800  w-[40px] h-[40px] text-white "
    >
      <motion.span
        initial={{
          x: 0,
          y: 0,
          scale: 1.5,
        }}
        animate={{
          y: searchMenuActive ? [-4, 4, 0] : 0,
          x: searchMenuActive ? [3, 5, -5, 4, -4, 3, 0] : 0,

          // rotate: searchMenuActive ? 260: 0,
          scale: searchMenuActive ? [1.5, 1, 2, 1.5] : 1.5,
        }}
        transition={{ duration: 3, times: [0, 0.2, 1] }}
        className=" "
      >
        <BiSearchAlt />
      </motion.span>
    </button>
  );
}
