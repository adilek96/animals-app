"use client";
import React from "react";
import { BiCategoryAlt, BiHome, BiMessageRoundedDots } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { FaPlus, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { mobileFooterState } from "../../../store/mobileFooterState";
import { postAddingState } from "../../../store/postAddingState";
import Link from "next/link";

export function TheBottomMenu() {
  const setFooterHide = mobileFooterState((state) => state.setFooterHide);
  const footerHide = mobileFooterState((state) => state.footerHide);
  const setCallCategory = mobileFooterState((state) => state.setCallCategory);
  const callCategory = mobileFooterState((state) => state.callCategory);

  const isOpen = postAddingState((state) => state.isOpen);
  const setIsOpen = postAddingState((state) => state.setIsOpen);

  return (
    <div
      className={`  relative   bg-white dark:bg-gray-800  dark:text-white  overflow-hidden shadow-md-revers shadow-primary-900 box-content  h-[70px]  text-gray-800 text-[35px]  items-center sm:flex md:hidden  sm:justify-around content-center   px-6 border-t-[5px] border-primary-500 border-solid `}
    >
      <div className="flex flex-col justify-center items-center  hover:text-primary-500">
        <Link href="/">
          <BiHome />
          <p className="text-[10px] text-center">Home</p>
        </Link>
      </div>
      <div
        onClick={() => setCallCategory(!callCategory)}
        className="flex flex-col justify-center items-center  hover:text-primary-500"
      >
        <BiCategoryAlt />
        <p className="text-[10px] self-center">Categories</p>
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

      <div className="flex flex-col justify-center items-center  hover:text-primary-500">
        <BiMessageRoundedDots />
        <p className="text-[10px] self-center">Messages</p>
      </div>
      <div className="flex flex-col justify-center items-center  hover:text-primary-500">
        <VscAccount />
        <p className="text-[10px] self-center">Account</p>
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
