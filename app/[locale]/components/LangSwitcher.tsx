import React,{useState} from 'react'
import { IoLanguageSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from 'next-intl/link';
import { useLocale } from 'next-intl';



export  function LangSwitcher({settings}:{settings:boolean}) {

  // стейт вызова дроп-меню языка
  const [languageSubActive, setLanguageSubActive] = useState(false)


  const locale = useLocale()
 
 const language = () => {
  if(locale === "ru"){
    return "bg-ru-flag"
  } else if ( locale === "az"){
    return "bg-az-flag"
  } else {
    return "bg-en-flag"
  }
 }

  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: settings ? 1: 0,
      }}
      transition={{ duration: 0.9, delay: 0.3}}
      
      className={`${!settings ? "hidden" : "flex"} duration-300 justify-start items-center ml-3   `}>
    {/* ----------------------------------- Language change buttons ---------------------------- */}
    
    <IoLanguageSharp className={` text-2xl mr-1 text-gray-400  font-extrabold`} />
    
              <ul>
                <li className=" w-[50px] text-black dark:text-white font-bold ">
              <button onMouseEnter={() => setLanguageSubActive(true)} onMouseLeave={() => setLanguageSubActive(false)}   className={` box-content relative   flex items-center  justify-center hover:text-primary-200 duration-500 rounded-lg`}>{locale.toUpperCase()}<FaChevronDown  className="text-xl ml-1 text-black dark:text-white pt-1 font-extrabold"/></button>
              {languageSubActive ? 
                <ul onMouseEnter={() => setLanguageSubActive(true)} onMouseLeave={() => setLanguageSubActive(false)}  className="absolute  dark:bg-gray-600 dark:text-white shadow-md shadow-orange-900 h-[120px] w-[80px] bg-white rounded-b-md z-10 text-gray-700 " >
                  <li  className={`h-[40px] px-5 flex items-center  hover:text-primary-500 cursor-pointer`}><Link href="/" locale="az">AZ</Link></li>
                  <li  className={`h-[40px] px-5 flex items-center  hover:text-primary-500 cursor-pointer`}><Link href="/" locale="ru">RU</Link></li>
                  <li  className={`h-[40px] px-5 flex items-center  hover:text-primary-500 cursor-pointer`}><Link href="/" locale="en">EN</Link></li>
                </ul> : ""}
            </li>
          
            </ul>
            <div className={`w-[30px] h-[25px] ${language()} bg-center bg-200%  box-content rounded-lg  `}></div>
    
    </motion.div>
  )
}


// ${pathname === '/articles' ? ' text-orange-500 border-t-[5px] border-t-orange-500 border-solid' : ''}