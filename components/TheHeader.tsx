'use client'
import { useState } from "react";
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
  const onMouseInArticleSub = () => {
    setArticleSubActive(true)
  }
  const onMouseOutArticleSub = () => {
    setArticleSubActive(false)
  }
  return (
    <header className=" box-content max-w-full h-[100px] text-gray-700  items-center flex justify-between  px-12 border-b-[5px] border-orange-300 border-solid">
      
      <div className="w-[100px]  ">
        <Link href="/" >
        <Image src="/logo/logo.png" 
          width={60}
          height={60} 
          alt="logo" 
        />
        </Link>
       
      </div>
       <div className=" flex items-center flex-nowrap">
        <div className="xl:flex flex-nowrap  lg:hidden md:hidden sm:hidden">
          <nav className="inline-block">
            <ul className=" box-content text-[16px] font-normal antialiased flex flex-none h-[100px] gap-[3px]   items-center     ">
              <li><Link href="/"   className={` box-content h-[100px] px-3 flex items-center hover:text-orange-300 duration-300 ${pathname === '/' ? ' text-orange-300 border-t-[5px] border-t-orange-300 border-solid' : ''}`} >Главная</Link></li>
              <li>
                <Link href="/posts" onMouseEnter ={showPostsSubMenu} onMouseLeave={hidePostsSubMenu} className={` box-content relative h-[100px]  px-3 flex items-center  hover:text-orange-300 duration-300 ${pathname === '/posts' ? ' text-orange-300 border-t-[5px] border-t-orange-300 border-solid' : ''}`} >Обьявления <FaChevronDown  className="text-2xl ml-1 text-gray-300 pt-2 font-extrabold"/> </Link>
                {postsSubActive ? 
                <ul onMouseEnter={onMouseInPostsSub}  onMouseLeave={onMouseOutPostsSub} className="absolute h-[60px] w-[200px] bg-blue-400 rounded-b-md z-10  ">
                  <li><Link href="/" className={`h-[60px] px-3 flex items-center  hover:text-orange-300 `}>Продавцы</Link></li>
                </ul> : ""}
              </li>
              <li>
                <Link href="/articles" onMouseEnter ={showArticleSubMenu} onMouseLeave={hideArticleSubMenu} className={`box-content relative h-[100px] px-3 flex items-center  hover:text-orange-300 duration-300 ${pathname === '/articles' ? ' text-orange-300 border-t-[5px] border-t-orange-300 border-solid' : ''}`}>Статьи <FaChevronDown  className="text-2xl ml-1 text-gray-300 pt-2 font-extrabold"/></Link>
                {articleSubActive ? 
                <ul onMouseEnter ={onMouseInArticleSub} onMouseLeave={onMouseOutArticleSub} className="absolute  h-[300px] w-[200px] bg-blue-400 rounded-b-md z-10 ">
                  <li><Link href="/" className={`h-[60px] px-5 flex items-center  hover:text-orange-300 `}>Новости</Link></li>
                  <li><Link href="/" className={`h-[60px] px-5 flex items-center  hover:text-orange-300 `}>Собаки</Link></li>
                  <li><Link href="/" className={`h-[60px] px-5 flex items-center  hover:text-orange-300 `}>Кошки</Link></li>
                  <li><Link href="/" className={`h-[60px] px-5 flex items-center  hover:text-orange-300 `}>Птицы</Link></li>
                  <li><Link href="/" className={`h-[60px] px-5 flex items-center  hover:text-orange-300 `}>Рыбки</Link></li>
                </ul> : ""}

              </li>
              <li><Link href="/clinic" className={`box-content h-[100px] px-3 flex items-center  hover:text-orange-300 duration-300 ${pathname === '/clinic' ? ' text-orange-300 border-t-[5px] border-t-orange-300 border-solid' : ''}`}>Ветклиники</Link></li>
            </ul>
          </nav>
          <button className={`flex h-[100px] px-5  items-center  hover:text-orange-300 duration-300`}><FaSignInAlt className="text-2xl mr-2 text-gray-300  font-extrabold"/>Войти</button>
        </div>
        <button className="  md:w-[250px] sm:w-[40px] flex items-center justify-center text-center text-white  h-[40px] bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700 ">
          <span className="font-extrabold text-3xl  md:mr-3 text-center"><FaPlus/> </span>  <span className="sm:hidden md:block">Добавить обьявления</span>
        </button>
      </div>
      

      
     
    </header>
  )
}
