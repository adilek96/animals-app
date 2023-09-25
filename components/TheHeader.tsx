'use client'
import {  useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaChevronDown,  FaSignInAlt } from "react-icons/fa";
import { usePathname } from 'next/navigation'


export  function TheHeader() {
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
  const onMouseInPArticleSub = () => {
    setArticleSubActive(true)
  }
  const onMouseOutArticleSub = () => {
    setArticleSubActive(false)
  }
  return (
    <header className="text-2xl w-screen h-[150px] text-gray-700  items-center flex justify-between  px-12 border-b-[5px] border-yellow-300 border-solid">
      <div className="w-[100px] h-[100px] ">
        <Link href="/" >
        <Image src="/logo/logo.png" 
          width={100}
          height={100} 
          alt="logo" 
        />
        </Link>
       
      </div>
       <div className="flex items-center">
        <div className=" 2xl:flex flex-nowrap xl:hidden md:hidden sm:hidden   ">
          <nav>
            <ul className=" 2xl:flex flex-none h-[150px]    items-center   gap-[40px] ">
              <li><Link href="/"   className={`h-[150px] px-5 flex items-center hover:text-yellow-300 duration-300 ${pathname === '/' ? ' text-yellow-300 border-t-[5px] border-t-yellow-300 border-solid' : ''}`} >Главная</Link></li>
              <li>
                <Link href="/posts" onMouseEnter ={showPostsSubMenu} onMouseLeave={hidePostsSubMenu} className={`relative h-[150px] px-5 flex items-center  hover:text-yellow-300 duration-300 ${pathname === '/posts' ? ' text-yellow-300 border-t-[5px] border-t-yellow-300 border-solid' : ''}`} >Обьявления <FaChevronDown  className="text-3xl ml-3 text-gray-300 pt-2 font-extrabold"/> </Link>
                {postsSubActive ? 
                <ul onMouseEnter={onMouseInPostsSub}  onMouseLeave={onMouseOutPostsSub} className="absolute h-[100px] w-[250px] bg-blue-400 rounded-b-md z-10  ">
                  <li><Link href="/" className={`h-[100px] px-5 flex items-center  hover:text-yellow-300 `}>Продавцы</Link></li>
                </ul> : ""}
              </li>
              <li>
                <Link href="/articles" onMouseEnter ={showArticleSubMenu} onMouseLeave={hideArticleSubMenu} className={`relative h-[150px] px-5 flex items-center  hover:text-yellow-300 duration-300 ${pathname === '/articles' ? ' text-yellow-300 border-t-[5px] border-t-yellow-300 border-solid' : ''}`}>Статьи <FaChevronDown  className="text-3xl ml-3 text-gray-300 pt-2 font-extrabold"/></Link>
                {articleSubActive ? 
                <ul onMouseEnter ={onMouseInPArticleSub} onMouseLeave={onMouseOutArticleSub} className="absolute  h-[325px] w-[250px] bg-blue-400 rounded-b-md z-10 ">
                  <li><Link href="/" className={`h-[65px] px-5 flex items-center  hover:text-yellow-300 `}>Новости</Link></li>
                  <li><Link href="/" className={`h-[65px] px-5 flex items-center  hover:text-yellow-300 `}>Собаки</Link></li>
                  <li><Link href="/" className={`h-[65px] px-5 flex items-center  hover:text-yellow-300 `}>Кошки</Link></li>
                  <li><Link href="/" className={`h-[65px] px-5 flex items-center  hover:text-yellow-300 `}>Птицы</Link></li>
                  <li><Link href="/" className={`h-[65px] px-5 flex items-center  hover:text-yellow-300 `}>Рыбки</Link></li>
                </ul> : ""}

              </li>
              <li><Link href="/clinic" className={`h-[150px] px-5 flex items-center  hover:text-yellow-300 duration-300 ${pathname === '/clinic' ? ' text-yellow-300 border-t-[5px] border-t-yellow-300 border-solid' : ''}`}>Ветклиники</Link></li>
            </ul>
          </nav>
          <button className={`h-[150px] px-5 flex items-center  hover:text-yellow-300 duration-300`}><FaSignInAlt className="text-2xl mr-2 text-gray-300  font-extrabold"/>Войти</button>
        </div>
        <button className="  w-[350px]  flex items-center justify-center text-center text-white  h-[60px] bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700 ">
          <span className="font-extrabold text-3xl  mr-5 text-center"><FaPlus/> </span>  Добавить обьявления
        </button>
      </div>
      

      
     
    </header>
  )
}
