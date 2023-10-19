import React from 'react';
import { BiCategoryAlt,BiHome,BiMessageRoundedDots} from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";

export  function TheBottomMenu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-inherit  dark:text-white  overflow-hidden shadow-md-revers shadow-primary-900 box-content  h-[60px]  text-gray-800 text-[35px]  items-center sm:flex md:hidden  sm:justify-between content-center   px-12 border-t-[5px] border-primary-500 border-solid ">
        <div className=' w-[30vw]  flex justify-around'>
            <BiHome/>
            <BiCategoryAlt/>
        </div>
        <div className='fixed bottom-[20px] left-[calc(50%-45px)] flex justify-center items-center  w-[90px] h-[90px] bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700 border-t-[5px]  border-r-[5px] border-l-[5px]  border-primary-500 '><FaPlus className="font-extrabold text-3xl  md:mr-3 text-center"/></div>
        <div className=' w-[30vw]  flex justify-around'> 
            <BiMessageRoundedDots/>
            <VscAccount/>
        </div>
    </div>
  )
}

// BiCategoryAlt
// VscAccount
// BiHome
// BiMessageRoundedDots