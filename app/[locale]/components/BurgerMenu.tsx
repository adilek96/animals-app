'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import {  FaChevronDown,FaChevronUp, FaSignInAlt,FaWindowClose } from "react-icons/fa";
import { burgerActiveState }  from "../../../store/burgerActiveState";
import { motion } from "framer-motion";
import {logInModalActive} from "../../../store/logInModalActive";
import {useTranslations} from 'next-intl';

export function BurgerMenu() {
    const [postsSubActive, setPostsSubActive] = useState(false);
    const [articleSubActive, setArticleSubActive] = useState(false);

    const t = useTranslations("TheHeader");

    const pathname = usePathname();
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
        <motion.div 
          initial={{ opacity: 0, x: -1000 }} 
          animate={{
            opacity: burger ? 1 : 0,
            x: burger ? 0 : -1000
          }}
          transition={{ duration: 0.5 }}
          className={`absolute  shadow-xl shadow-orange-900 h-[100%] w-[250px]  bg-white  rounded-md z-100 overflow-hidden  `}>

            <div className=" h-[150px] relative flex justify-center items-center gap-2">
                <button onClick={() => setBurgerActive(!burger)} className="focus:outline-none active:outline-none shadow-xl shadow-primary-800 absolute right-1 top-0 w-[30px] h-[30px]"><FaWindowClose className="absolute right-0 top-1  text-primary-300 w-[30px] h-[30px]"/></button>
                <div className="w-[70px] h-[70px] flex items-center justify-center shadow-xl shadow-orange-900 bg-primary-200 rounded-full border-collapse border-[3px] border-primary-500">
                    <div onClick={() => setLoginModalActive(!loginModal)} className="w-[60px] h-[60px] flex items-center justify-center shadow-inner shadow-orange-900 bg-white rounded-full border-collapse border-[2px] border-primary-500">
        <Image src="/logo/logo.png" 
          width={60}
          height={60} 
          alt="logo"
        />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <button onClick={() => setLoginModalActive(!loginModal)} className={`flex    items-center text-sm  hover:text-primary-500 duration-300`}><FaSignInAlt className="text-md mr-2 text-gray-500  font-extrabold"/>{t("loginButton")}</button>
                    <button onClick={() => setLoginModalActive(!loginModal)} className="shadow-xl shadow-green-800  w-[100px] flex items-center justify-center text-sm text-center text-white  h-[30px] bg-gradient-to-r from-green-600 to-green-300 rounded-full hover:contrast-125 duration-700  ">{t("guest")}</button>
                </div>
                
            </div>
            
          <ul>
            <li><Link href="/" onClick={() => setBurgerActive(!burger)}  className={` box-content  px-3 flex items-center hover:text-primary-500 duration-300 ${pathname === '/' ? ' text-primary-500 bg-primary-100 h-[70px]' : 'h-[50px]'}`} >{t("home")}</Link></li>
            <li>
                <Link  href="" onTouchStart={showPostsSubMenu} onTouchMove={hidePostsSubMenu}  onMouseEnter={showPostsSubMenu}  onMouseLeave={hidePostsSubMenu} className={`transition-1000 box-content relative   px-3 flex items-center  hover:text-primary-500 duration-500 ${pathname === '/posts' ? ' text-primary-500  bg-primary-100  h-[70px]' : 'h-[50px]'}`} >{t("ads")} {!postsSubActive ? <FaChevronDown  className="text-2xl ml-1 text-gray-400 pt-2 font-extrabold"/> : <FaChevronUp  className="text-2xl ml-1 text-gray-400 pt-2 font-extrabold"/>}</Link> 
                {postsSubActive ? 
                <ul onMouseEnter={onMouseInPostsSub}  onMouseLeave={onMouseOutPostsSub} className="sticky shadow-xl shadow-orange-900 h-[80px] w-[250px] bg-white  rounded-b-md z-10  ">
                  <li><Link href="/posts" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>{t("allAds")}</Link></li>
                  <li><Link href="/" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Продавцы</Link></li>
                </ul> : ""}
            </li>

            <li>
                <Link href="" onTouchStart={showArticleSubMenu} onTouchMove={hideArticleSubMenu} onMouseEnter ={showArticleSubMenu}  onMouseLeave={hideArticleSubMenu} className={`box-content relative  px-3 flex items-center  hover:text-primary-500 duration-500 ${pathname === '/articles' ? ' text-primary-500 bg-primary-100 h-[70px]' : 'h-[50px]'}`}>{t("articles")} {!articleSubActive ? <FaChevronDown  className="text-2xl ml-1 text-gray-400 pt-2 font-extrabold"/> : <FaChevronUp  className="text-2xl ml-1 text-gray-400 pt-2 font-extrabold"/>}</Link>
                {articleSubActive ? 
                <ul onMouseEnter ={onMouseInArticleSub} onMouseLeave={onMouseOutArticleSub} className="sticky shadow-xl shadow-orange-900 h-[200px] w-[250px] bg-white rounded-b-md z-10 ">
                  <li><Link href="/" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>{t("allArticles")}</Link></li>
                  <li><Link href="/" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>{t("dogs")}</Link></li>
                  <li><Link href="/" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>{t("cats")}</Link></li>
                  <li><Link href="/" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>{t("birds")}</Link></li>
                  <li><Link href="/" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>{t("fishs")}</Link></li>
                </ul> : ""}
              </li>

            <li><Link href="/clinic" onClick={() => setBurgerActive(!burger)} className={`box-content  px-3 flex items-center  hover:text-primary-500 duration-300 ${pathname === '/clinic' ? ' text-primary-500 bg-primary-100 h-[70px]' : 'h-[50px]'}`}>{t("clinics")}</Link></li>
          </ul>
        </motion.div>
  )
}

