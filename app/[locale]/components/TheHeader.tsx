'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaChevronDown,  FaSignInAlt } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import  { burgerActiveState }  from "../../../store/burgerActiveState";
import { motion } from "framer-motion";
import {logInModalActive} from "../../../store/logInModalActive";
import  {LangSwitcher}  from "./LangSwitcher"
import {useTranslations} from 'next-intl';
import { IoSettings } from "react-icons/io5";
import { ThemeSwitch } from './ThemeSwitch';




export  function TheHeader() {
  const t = useTranslations("TheHeader");

  const pathname = usePathname();

  // стейт вызова дроп-меню постов
  const [postsSubActive, setPostsSubActive] = useState(false)
  // стейт вызова дроп-меню статей
  const [articleSubActive, setArticleSubActive] = useState(false)
  // стэйт вызова анимации шестеренки
  const [settings, setSettings] = useState(false)
  // стэйт вызова бургер меню
  const burger = burgerActiveState(state => state.burger);
  const setBurgerActive = burgerActiveState(state => state.setBurgerActive);
  // стэйт вызова окна входа
  const loginModal = logInModalActive(state => state.loginModal);
  const setLoginModalActive = logInModalActive(state => state.setLoginModalActive);
 
  const showPostsSubMenu = () => {
    setPostsSubActive(true)
  }
  const hidePostsSubMenu = () => {
    setPostsSubActive(false)
  }
  const onMouseInPostsSub = () => {
    setPostsSubActive(true)
  }
  const onMouseOutPostsSub = () => {
    setPostsSubActive(false)
  }
  // ----------------------------------
  const showArticleSubMenu = () => {
    setArticleSubActive(true)
  }
  const hideArticleSubMenu = () => {
    setArticleSubActive(false)
  }
  const onMouseInArticleSub = () => {
    setArticleSubActive(true)
  }
  const onMouseOutArticleSub = () => {
    setArticleSubActive(false)
  }


  return (
    <header className=" bg-white  overflow-hidden shadow-md shadow-primary-900 box-content  h-[100px] text-gray-800  items-center flex justify-between  px-12 border-b-[5px] border-primary-500 border-solid">

      <div className="w-[100px] ">
        <Link href="/" onClick={() => burger ? setBurgerActive(!burger): ""}>
        <Image src="/logo/logo.png" 
          width={60}
          height={60} 
          alt="logo" 
          
        />
        </Link>
       
      </div>
       <div className=" flex items-center flex-nowrap">
        {/* ------------------------------ Desktop varint -------------------------- */}
        <div className="lg:flex flex-nowrap   md:hidden sm:hidden">
          <nav className="inline-block">
            <ul className=" box-content text-[16px] font-bold antialiased flex flex-none h-[100px] gap-[3px]   items-center     ">
              <li><Link href="/"   className={` box-content h-[100px] px-3 flex items-center hover:text-primary-500 duration-300 ${pathname === '/' ? ' text-primary-500 border-t-[5px] border-t-primary-500 border-solid' : ''}`} >{t("home")}</Link></li>
              <li>
                <Link href="/posts" onMouseEnter ={showPostsSubMenu} onMouseLeave={hidePostsSubMenu} className={` box-content relative h-[100px]  px-3 flex items-center  hover:text-primary-500 duration-500 ${pathname === '/posts' ? ' text-primary-500 border-t-[5px] border-t-primary-500 border-solid' : ''}`} >{t("ads")}<FaChevronDown  className="text-2xl ml-1 text-gray-400 pt-2 font-extrabold"/> </Link>
                {postsSubActive ? 
                <ul onMouseEnter={onMouseInPostsSub}  onMouseLeave={onMouseOutPostsSub} className="absolute shadow-xl shadow-orange-900 h-[60px] w-[200px] bg-white  rounded-b-md z-10  ">
                  <li><Link href="/" className={`h-[60px] px-3 flex items-center  hover:text-primary-500 `}>Продавцы</Link></li>
                </ul> : ""}
              </li>
              <li>
                <Link href="/articles" onMouseEnter ={showArticleSubMenu} onMouseLeave={hideArticleSubMenu} className={`box-content relative h-[100px] px-3 flex items-center  hover:text-primary-500 duration-500 ${pathname === '/articles' ? ' text-orange-500 border-t-[5px] border-t-orange-500 border-solid' : ''}`}>{t("articles")} <FaChevronDown  className="text-2xl ml-1 text-gray-400 pt-2 font-extrabold"/></Link>
                {articleSubActive ? 
                <ul onMouseEnter={onMouseInArticleSub} onMouseLeave={onMouseOutArticleSub} className="absolute shadow-xl shadow-orange-900 h-[240px] w-[200px] bg-white rounded-b-md z-10 ">
                  <li><Link href="/" className={`h-[60px] px-5 flex items-center  hover:text-primary-500 `}>{t("dogs")}</Link></li>
                  <li><Link href="/" className={`h-[60px] px-5 flex items-center  hover:text-primary-500 `}>{t("cats")}</Link></li>
                  <li><Link href="/" className={`h-[60px] px-5 flex items-center  hover:text-primary-500 `}>{t("birds")}</Link></li>
                  <li><Link href="/" className={`h-[60px] px-5 flex items-center  hover:text-primary-500 `}>{t("fishs")}</Link></li>
                </ul> : ""}
              </li>
              <li><Link href="/clinic" className={`box-content h-[100px] px-3 flex items-center  hover:text-primary-500 duration-300 ${pathname === '/clinic' ? ' text-primary-500 border-t-[5px] border-t-primary-500 border-solid' : ''}`}>{t("clinics")}</Link></li>
           
         </ul>
          </nav>
          
                  {/* ------------------------------------ Log In button ------------------------------- */}
          <button onClick={() =>  setLoginModalActive(!loginModal) } className={`flex h-[100px] px-5  items-center   hover:text-primary-500 duration-300`}><FaSignInAlt className="text-2xl mr-2 text-gray-300  font-extrabold"/>{t("loginButton")}</button>
        </div>
          {/* ---------------------------- Mobile varint ---------------------------- */}
        <button  onClick={() => setBurgerActive(!burger)} className="relative 2xl:hidden xl:hidden lg:hidden flex flex-col  items-center justify-center gap-1 bg-primary-300 shadow-md rounded-full shadow-primary-800  w-[40px] h-[40px] mr-2"> 
                  <motion.span 
                    initial={{
                      rotate: 0,
                      x: 0,
                    }}
                    animate={{
                      
                      y: burger ? 7: 0,
                      rotate: burger ? 45: 0,
                    }}
                    transition={{ duration: 0.7 }}
                    className="w-[20px] h-[3px] bg-white "></motion.span>
                  <motion.span 
                    initial={{ opacity: 1, x: 0 }} 
                    animate={{
                      opacity: !burger ? 1 : 0,
                      x: !burger ? 0 : -100
                    }}
                    transition={{ duration: 0.7 }}
                    className="w-[20px] h-[3px] bg-white "></motion.span>
                  <motion.span 
                    initial={{
                      rotate: 0,
                    }}
                    animate={{
                      y: burger ? -7: 0,
                      rotate: burger ? -45: 0,
                    }}
                    transition={{ duration: 0.7 }}
                    className="w-[20px] h-[3px] bg-white "></motion.span>    
                      
        </button>
        <button className=" focus:outline-none active:outline-none shadow-md shadow-green-800  md:w-[250px] sm:w-[40px]  flex items-center justify-center text-center text-white  h-[40px] bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700 ">
          <span className="font-extrabold text-3xl  md:mr-3 text-center"><FaPlus/> </span>  <span className="sm:hidden md:block">{t("addButton")}</span>
        </button>
      </div>
    
        
     
     
     
     
      <div onMouseEnter={() => setSettings(true)} onMouseLeave={() => setSettings(false)} className=" absolute top-[105px] right-[10px] w-[35px] hover:w-[230px] h-[35px] flex justify-start bg-white   rounded-full shadow-md shadow-green-800 duration-700">
               {/* ----------------------------------- Language change buttons ---------------------------- */}
              <LangSwitcher settings={settings}/>
              <ThemeSwitch settings={settings} />
              <motion.div 
                  initial={{
                    rotate: 0,
                  }}
                  animate={{
                    rotate: settings ? 180: 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute  right-0 w-[35px] h-[35px] bg-gradient-to-r from-green-500 to-green-400  rounded-full flex justify-center items-center hover:contrast-125 duration-700 ">
                <IoSettings className="text-[22px] text-white" />
              </motion.div> 
     </div>
    </header>
    
  )
}
