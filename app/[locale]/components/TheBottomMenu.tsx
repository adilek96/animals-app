"use client";
import React from "react";
import { BiCategoryAlt, BiHome, BiMessageRoundedDots } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { mobileFooterState } from "../../../store/mobileFooterState";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function TheBottomMenu() {
  const t = useTranslations("BottomMenu");
  const setFooterHide = mobileFooterState((state) => state.setFooterHide);
  const footerHide = mobileFooterState((state) => state.footerHide);
  const setCallCategory = mobileFooterState((state) => state.setCallCategory);
  const callCategory = mobileFooterState((state) => state.callCategory);

  return (
    <div
      className={`  relative   bg-white dark:bg-gray-800  dark:text-white  overflow-hidden shadow-md-revers shadow-primary-900 box-content  h-[70px]  text-gray-800 text-[35px]  items-center sm:flex md:hidden  sm:justify-around content-center   px-6 border-t-[5px] border-primary-500 border-solid `}
    >
      <div className="w-[60px] flex flex-col justify-center items-center text-center hover:text-primary-500">
        <BiHome />
        <p className="text-[10px]  self-center text-center">{t("home")}</p>
      </div>
      <div
        onClick={() => setCallCategory(!callCategory)}
        className="w-[60px] flex flex-col justify-center items-center  hover:text-primary-500"
      >
        <BiCategoryAlt />
        <p className="text-[10px] self-center text-center">{t("categories")}</p>
      </div>

      {/* <div className={` fixed z-20 bottom-[30px] left-[calc(50%-35px)] flex justify-center items-center  w-[70px] h-[70px] bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700`}><FaPlus className="font-extrabold text-5xl  text-white text-center"/></div> */}

      <div onClick={() => setFooterHide(!footerHide)}>
        {" "}
        {footerHide ? (
          <FaChevronDown
            className={`text-[20px] mt-8  hover:text-primary-500`}
          />
        ) : (
          <FaChevronUp className={`text-[20px] mt-8  hover:text-primary-500`} />
        )}
      </div>

      <div className="w-[60px] flex flex-col justify-center items-center  hover:text-primary-500">
        <BiMessageRoundedDots />
        <p className="text-[10px] self-center text-center">{t("messages")}</p>
      </div>
      <div className="w-[60px] flex flex-col justify-center items-center  hover:text-primary-500">
        <VscAccount />
        <p className="text-[10px] self-center text-center">{t("account")}</p>
      </div>
    </div>
  );
}
//${!footerHide ? 'sm:fixed': 'relative'}

// BiCategoryAlt
// VscAccount
// BiHome
// BiMessageRoundedDots
// border-r-[5px] border-l-[5px]

/* <div className=' w-[30vw]  flex justify-around'>
            <BiHome/>
            <BiCategoryAlt/>
        </div>
        <div className='fixed bottom-[20px] left-[calc(50%-40px)] flex justify-center items-center  w-[80px] h-[80px] bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  '><FaPlus className="font-extrabold text-5xl  text-white text-center"/></div>
        <div className=' w-[30vw]  flex justify-around'> 
            <BiMessageRoundedDots/>
            <VscAccount/>
        </div> */
