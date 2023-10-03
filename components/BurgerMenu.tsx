'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import {  FaChevronDown, FaSignInAlt,FaWindowClose } from "react-icons/fa";
import  { burgerActiveState }  from "../store/burgerActiveState";

export function BurgerMenu() {
    const [touch, setTouch] = useState(false)
    const [postsSubActive, setPostsSubActive] = useState(false);
    const [articleSubActive, setArticleSubActive] = useState(false);
    const pathname = usePathname();
    const burger = burgerActiveState(state => state.burger);
    const setBurgerActive = burgerActiveState(state => state.setBurgerActive);

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
        <div className={`absolute ${!burger ? `bottom-[1000px] hidden` : ``}  shadow-xl shadow-orange-900 h-[100%] w-[250px]  bg-white  rounded-md z-100 overflow-hidden  `}>
            <div className=" h-[150px] relative flex justify-center items-center gap-2">
                <button onClick={() => setBurgerActive(!burger)} className="shadow-xl shadow-primary-800 absolute right-1 top-0 w-[30px] h-[30px]"><FaWindowClose className="absolute right-0 top-1  text-primary-300 w-[30px] h-[30px]"/></button>
                <div className="w-[70px] h-[70px] flex items-center justify-center shadow-xl shadow-orange-900 bg-primary-200 rounded-full border-collapse border-[3px] border-primary-500">
                    <div className="w-[60px] h-[60px] flex items-center justify-center shadow-inner shadow-orange-900 bg-white rounded-full border-collapse border-[2px] border-primary-500">
        <Image src="/logo/logo.png" 
          width={60}
          height={60} 
          alt="logo"
        />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <button className={`flex    items-center text-sm  hover:text-primary-500 duration-300`}><FaSignInAlt className="text-md mr-2 text-gray-500  font-extrabold"/>Войти</button>
                    <button className="shadow-xl shadow-green-800  w-[100px] flex items-center justify-center text-sm text-center text-white  h-[30px] bg-gradient-to-r from-green-600 to-green-300 rounded-full hover:contrast-125 duration-700  z-10">Гость</button>
                </div>
                
            </div>
            
          <ul>
            <li><Link href="/" onClick={() => setBurgerActive(!burger)}  className={` box-content  px-3 flex items-center hover:text-primary-500 duration-300 ${pathname === '/' ? ' text-primary-500 bg-primary-100 h-[70px]' : 'h-[50px]'}`} >Главная</Link></li>
            <li>
                <Link href={touch ? "#" : "/posts"} onTouchEnd={() => setTouch(true)} onDoubleClick={() => setBurgerActive(!burger)}  onMouseEnter ={showPostsSubMenu} onMouseLeave={hidePostsSubMenu} className={` box-content relative   px-3 flex items-center  hover:text-primary-500 duration-500 ${pathname === '/posts' ? ' text-primary-500  bg-primary-100  h-[70px]' : 'h-[50px]'}`} >Обьявления <FaChevronDown  className="text-2xl ml-1 text-gray-400 pt-2 font-extrabold"/> </Link>
                {postsSubActive ? 
                <ul onMouseEnter={onMouseInPostsSub}  onMouseLeave={onMouseOutPostsSub} className="sticky shadow-xl shadow-orange-900 h-[40px] w-[250px] bg-white  rounded-b-md z-10  ">
                  <li><Link href="/" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Продавцы</Link></li>
                </ul> : ""}
            </li>

            <li>
                <Link href="/articles" onDoubleClick={() => setBurgerActive(!burger)} onMouseEnter ={showArticleSubMenu} onMouseLeave={hideArticleSubMenu} className={`box-content relative  px-3 flex items-center  hover:text-primary-500 duration-500 ${pathname === '/articles' ? ' text-primary-500 bg-primary-100 h-[70px]' : 'h-[50px]'}`}>Статьи <FaChevronDown  className="text-2xl ml-1 text-gray-400 pt-2 font-extrabold"/></Link>
                {articleSubActive ? 
                <ul onMouseEnter ={onMouseInArticleSub} onMouseLeave={onMouseOutArticleSub} className="sticky shadow-xl shadow-orange-900 h-[200px] w-[250px] bg-white rounded-b-md z-10 ">
                  <li><Link href="/" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Новости</Link></li>
                  <li><Link href="/" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Собаки</Link></li>
                  <li><Link href="/" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Кошки</Link></li>
                  <li><Link href="/" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Птицы</Link></li>
                  <li><Link href="/" onClick={() => setBurgerActive(!burger)} className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Рыбки</Link></li>
                </ul> : ""}
              </li>

            <li><Link href="/clinic" onClick={() => setBurgerActive(!burger)} className={`box-content  px-3 flex items-center  hover:text-primary-500 duration-300 ${pathname === '/clinic' ? ' text-primary-500 bg-primary-100 h-[70px]' : 'h-[50px]'}`}>Ветклиники</Link></li>
          </ul>
        </div>
  )
}

