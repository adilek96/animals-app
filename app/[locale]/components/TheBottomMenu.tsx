"use client";
import React, { useEffect, useState } from "react";
import { BiCategoryAlt, BiHome, BiMessageRoundedDots } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { mobileFooterState } from "../../../store/mobileFooterState";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function TheBottomMenu() {
  const t = useTranslations("BottomMenu");
  const setFooterHide = mobileFooterState((state) => state.setFooterHide);
  const footerHide = mobileFooterState((state) => state.footerHide);
  const setCallCategory = mobileFooterState((state) => state.setCallCategory);
  const callCategory = mobileFooterState((state) => state.callCategory);
  const [isHidden, setIsHidden] = useState(false);

  // useEffect(() => {

  //   const handleScroll = () => {
  //     // Определите, в какую сторону происходит скролл
  //     const isScrollingDown =
  //       window.scrollY > (window.scrollY || document.documentElement.scrollTop);

  //     setIsHidden(isScrollingDown);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={` relative   bg-white dark:bg-gray-800  dark:text-white  overflow-hidden shadow-md-revers shadow-primary-900 box-content  h-[70px]  text-gray-800 text-[35px]  items-center sm:flex md:hidden  sm:justify-between content-center   px-6 border-t-[5px] border-primary-500 border-solid   `}
    >
      <Link href="/">
        <div className="w-[60px] cursor-pointer flex flex-col justify-center items-center text-center hover:text-primary-500">
          <BiHome />
          <p className="text-[10px]  self-center text-center">{t("home")}</p>
        </div>
      </Link>

      <div
        onClick={() => setCallCategory(!callCategory)}
        className="w-[60px] cursor-pointer flex flex-col justify-center items-center  hover:text-primary-500"
      >
        <BiCategoryAlt />
        <p className="text-[10px] self-center text-center">{t("categories")}</p>
      </div>

      <div onClick={() => setFooterHide(!footerHide)}>
        {footerHide ? (
          <FaChevronDown
            className={`text-[20px] mt-8  hover:text-primary-500`}
          />
        ) : (
          <FaChevronUp className={`text-[20px] mt-8  hover:text-primary-500`} />
        )}
      </div>

      <Link href="/profile/messages">
        <div className="w-[60px] cursor-pointer flex flex-col justify-center items-center  hover:text-primary-500">
          <BiMessageRoundedDots />
          <p className="text-[10px] self-center text-center">{t("messages")}</p>
        </div>
      </Link>

      <Link href="/profile">
        <div className="w-[60px] cursor-pointer flex flex-col justify-center items-center  hover:text-primary-500">
          <VscAccount />
          <p className="text-[10px] self-center text-center">{t("account")}</p>
        </div>
      </Link>
    </motion.div>
  );
}
