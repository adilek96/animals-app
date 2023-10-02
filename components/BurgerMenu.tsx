'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import {  FaChevronDown, FaSignInAlt,FaWindowClose } from "react-icons/fa";

export function BurgerMenu() {
    const [postsSubActive, setPostsSubActive] = useState(false)
    const [articleSubActive, setArticleSubActive] = useState(false)
    const pathname = usePathname()


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
        <div className="absolute left-0 top-0 shadow-xl shadow-orange-900 h-[100%] md:w-[200px] sm:w-[100vw] bg-white  rounded-md z-100 overflow-hidden ">
            <div className="relative">
                <button className="shadow-xl shadow-primary-800 absolute right-1 top-1 w-[30px] h-[30px]"><FaWindowClose className="absolute right-0 top-1  text-primary-300 w-[30px] h-[30px]"/></button>
                <button className={`flex h-[100px] px-5  items-center text-md  hover:text-primary-500 duration-300`}><FaSignInAlt className="text-xl mr-2 text-gray-500  font-extrabold"/>Войти</button>
            </div>
          <ul>
            <li><Link href="/"   className={` box-content  px-3 flex items-center hover:text-primary-500 duration-300 ${pathname === '/' ? ' text-primary-500 bg-primary-100 h-[70px]' : 'h-[50px]'}`} >Главная</Link></li>
            <li>
                <Link href="/posts" onMouseEnter ={showPostsSubMenu} onMouseLeave={hidePostsSubMenu} className={` box-content relative   px-3 flex items-center  hover:text-primary-500 duration-500 ${pathname === '/posts' ? ' text-primary-500  bg-primary-100  h-[70px]' : 'h-[50px]'}`} >Обьявления <FaChevronDown  className="text-2xl ml-1 text-gray-400 pt-2 font-extrabold"/> </Link>
                {postsSubActive ? 
                <ul onMouseEnter={onMouseInPostsSub}  onMouseLeave={onMouseOutPostsSub} className="sticky shadow-xl shadow-orange-900 h-[40px] w-[200px] bg-white  rounded-b-md z-10  ">
                  <li><Link href="/" className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Продавцы</Link></li>
                </ul> : ""}
            </li>

            <li>
                <Link href="/articles" onMouseEnter ={showArticleSubMenu} onMouseLeave={hideArticleSubMenu} className={`box-content relative  px-3 flex items-center  hover:text-primary-500 duration-500 ${pathname === '/articles' ? ' text-primary-500 bg-primary-100 h-[70px]' : 'h-[50px]'}`}>Статьи <FaChevronDown  className="text-2xl ml-1 text-gray-400 pt-2 font-extrabold"/></Link>
                {articleSubActive ? 
                <ul onMouseEnter ={onMouseInArticleSub} onMouseLeave={onMouseOutArticleSub} className="sticky shadow-xl shadow-orange-900 h-[200px] w-[200px] bg-white rounded-b-md z-10 ">
                  <li><Link href="/" className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Новости</Link></li>
                  <li><Link href="/" className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Собаки</Link></li>
                  <li><Link href="/" className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Кошки</Link></li>
                  <li><Link href="/" className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Птицы</Link></li>
                  <li><Link href="/" className={`h-[40px] px-7 flex items-center  hover:text-primary-500 `}>Рыбки</Link></li>
                </ul> : ""}
              </li>

            <li><Link href="/clinic" className={`box-content  px-3 flex items-center  hover:text-primary-500 duration-300 ${pathname === '/clinic' ? ' text-primary-500 bg-primary-100 h-[70px]' : 'h-[50px]'}`}>Ветклиники</Link></li>
          </ul>
        </div>
  )
}

