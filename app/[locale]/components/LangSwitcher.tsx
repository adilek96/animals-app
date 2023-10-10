import React,{useState} from 'react'
import { IoLanguageSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import Link from 'next/link';


export  function LangSwitcher() {
     // стейт вызова дроп-меню языка
  const [languageSubActive, setLanguageSubActive] = useState(false)
  // стэйт выбраного языка
  const [choisingLanguage, setChoisingLanguage] = useState("RU")
  return (
    <>
    {/* ----------------------------------- Language change buttons ---------------------------- */}
    <IoLanguageSharp className="text-2xl mr-1 text-gray-400  font-extrabold" />
              <ul>
                <li className="bg-gradient-to-b from-white via-blue-500 to-red-500 text-primary-200 font-bold">
              <button onMouseEnter={() => setLanguageSubActive(true)} onMouseLeave={() => setLanguageSubActive(false)}   className={`box-content relative  px-1 flex items-center  hover:text-primary-500 duration-500`}>{choisingLanguage}<FaChevronDown  className="text-xl ml-1 text-gray-200 pt-1 font-extrabold"/></button>
              {languageSubActive ? 
                <ul onMouseEnter={() => setLanguageSubActive(true)} onMouseLeave={() => setLanguageSubActive(false)}  className="absolute shadow-lg shadow-orange-900 h-[150px] w-[100px] bg-white rounded-b-md z-10 text-gray-700 " >
                  <li onClick={() => setChoisingLanguage("AZ")} className={`h-[50px] px-5 flex items-center  hover:text-primary-500 cursor-pointer`}>AZ</li>
                  <li onClick={() => setChoisingLanguage("RU")} className={`h-[50px] px-5 flex items-center  hover:text-primary-500 cursor-pointer`}><Link href="/" locale="ru">RU</Link></li>
                  <li onClick={() => setChoisingLanguage("EN")} className={`h-[50px] px-5 flex items-center  hover:text-primary-500 cursor-pointer`}><Link href="/" locale="en">EN</Link></li>
                </ul> : ""}
            </li>
          
            </ul>
    </>
  )
}


// ${pathname === '/articles' ? ' text-orange-500 border-t-[5px] border-t-orange-500 border-solid' : ''}