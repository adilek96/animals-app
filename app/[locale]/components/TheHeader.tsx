"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaPlus,
  FaChevronDown,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import { burgerActiveState } from "../../../store/burgerActiveState";
import { motion } from "framer-motion";
import { logInModalActive } from "../../../store/logInModalActive";
import { postAddingState } from "../../../store/postAddingState";
import { useTranslations } from "next-intl";
import { useSession, signOut } from "next-auth/react";

export function TheHeader() {
  const t = useTranslations("TheHeader");

  const pathname = usePathname();
  const session = useSession();

  // стейт вызова дроп-меню постов
  const [postsSubActive, setPostsSubActive] = useState(false);
  // стэйт вызова бургер меню
  const burger = burgerActiveState((state) => state.burger);
  const setBurgerActive = burgerActiveState((state) => state.setBurgerActive);
  // стэйт вызова окна входа
  const loginModal = logInModalActive((state) => state.loginModal);
  const setLoginModalActive = logInModalActive(
    (state) => state.setLoginModalActive
  );
  // стэйт вызова окна добавления товара
  const isOpen = postAddingState((state) => state.isOpen);
  const setIsOpen = postAddingState((state) => state.setIsOpen);

  const showPostsSubMenu = () => {
    setPostsSubActive(true);
  };
  const hidePostsSubMenu = () => {
    setPostsSubActive(false);
  };
  const onMouseInPostsSub = () => {
    setPostsSubActive(true);
  };
  const onMouseOutPostsSub = () => {
    setPostsSubActive(false);
  };
  // ----------------------------------
  // const showArticleSubMenu = () => {
  //   setArticleSubActive(true)
  // }
  // const hideArticleSubMenu = () => {
  //   setArticleSubActive(false)
  // }
  // const onMouseInArticleSub = () => {
  //   setArticleSubActive(true)
  // }
  // const onMouseOutArticleSub = () => {
  //   setArticleSubActive(false)
  // }

  return (
    <header className="  bg-white dark:bg-inherit    dark:text-white overflow-hidden shadow-md shadow-primary-900 box-content  h-[100px] text-gray-800  items-center flex justify-between  px-12 border-b-[5px] border-primary-500 border-solid">
      <div className="w-[100px] ">
        <Link href="/" onClick={() => (burger ? setBurgerActive(!burger) : "")}>
          <Image src="/logo/logo.png" width={60} height={60} alt="logo" />
        </Link>
      </div>
      <div className=" flex items-center flex-nowrap">
        {/* ------------------------------ Desktop varint -------------------------- */}
        <div className="lg:flex flex-nowrap   md:hidden sm:hidden">
          <nav className="inline-block">
            <ul className=" box-content text-[16px] font-bold antialiased flex flex-none h-[100px] gap-[3px]   items-center     ">
              <li>
                <Link
                  href="/"
                  className={` box-border h-[100px] px-3 flex items-center hover:text-primary-500 duration-300 ${
                    pathname === "/"
                      ? " text-primary-500 border-t-[2px] border-t-primary-500 border-solid"
                      : ""
                  }`}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/posts"
                  // onMouseEnter={showPostsSubMenu}
                  // onMouseLeave={hidePostsSubMenu}
                  className={` box-border relative h-[100px]  px-3 flex items-center  hover:text-primary-500 duration-500 ${
                    pathname === "/posts"
                      ? " text-primary-500 border-t-[2px] border-t-primary-500 border-solid"
                      : ""
                  }`}
                >
                  {t("ads")}
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className={`transition-1000 box-content relative   px-3 flex items-center    hover:text-primary-500 duration-500 ${
                    pathname === "/posts"
                      ? " text-primary-500 dark:bg-gray-500  bg-primary-100  h-[70px]"
                      : "h-[50px]"
                  }`}
                >
                  Магазины
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className={`transition-1000 box-content relative   px-3 flex items-center    hover:text-primary-500 duration-500 ${
                    pathname === "/posts"
                      ? " text-primary-500 dark:bg-gray-500  bg-primary-100  h-[70px]"
                      : "h-[50px]"
                  }`}
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  href="/clinic"
                  className={`box-border h-[100px] px-3 flex items-center  hover:text-primary-500 duration-300 ${
                    pathname === "/clinic"
                      ? " text-primary-500 border-t-[2px] border-t-primary-500 border-solid"
                      : ""
                  }`}
                >
                  {t("clinics")}
                </Link>
              </li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 2 }}
              >
                {session?.data && (
                  <Link
                    href="/profile"
                    className={`box-border h-[100px] px-3 flex items-center  hover:text-primary-500 duration-300 ${
                      pathname === "/profile"
                        ? " text-primary-500 border-t-[2px] border-t-primary-500 border-solid"
                        : ""
                    }`}
                  >
                    Profile
                  </Link>
                )}
              </motion.li>
            </ul>
          </nav>

          {/* ------------------------------------ Log In button ------------------------------- */}

          {session?.data ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className={`flex h-[100px] px-5  items-center   hover:text-primary-500 duration-300`}
            >
              <FaSignOutAlt className="text-2xl mr-2 text-gray-300  font-extrabold" />
              Выйти
            </button>
          ) : (
            <button
              onClick={() => setLoginModalActive(!loginModal)}
              className={`flex h-[100px] px-5  items-center   hover:text-primary-500 duration-300`}
            >
              <FaSignInAlt className="text-2xl mr-2 text-gray-300  font-extrabold" />
              {t("loginButton")}
            </button>
          )}
        </div>

        {/* ---------------------------- Mobile varint burger menu ---------------------------- */}
        <button
          onClick={() => setBurgerActive(!burger)}
          className="relative 2xl:hidden xl:hidden lg:hidden flex flex-col  items-center justify-center gap-1 bg-primary-300 shadow-md rounded-full shadow-primary-800  w-[40px] h-[40px] mr-2"
        >
          <motion.span
            initial={{
              rotate: 0,
              x: 0,
            }}
            animate={{
              y: burger ? 7 : 0,
              rotate: burger ? 45 : 0,
            }}
            transition={{ duration: 0.7 }}
            className="w-[20px] h-[3px] bg-white "
          ></motion.span>
          <motion.span
            initial={{ opacity: 1, x: 0 }}
            animate={{
              opacity: !burger ? 1 : 0,
            }}
            transition={{ duration: 0.7 }}
            className="w-[20px] h-[3px] bg-white "
          ></motion.span>
          <motion.span
            initial={{
              rotate: 0,
            }}
            animate={{
              y: burger ? -7 : 0,
              rotate: burger ? -45 : 0,
            }}
            transition={{ duration: 0.7 }}
            className="w-[20px] h-[3px] bg-white "
          ></motion.span>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" focus:outline-none active:outline-none shadow-md shadow-green-800  md:w-[250px] sm:w-[40px] sm:hidden  md:flex items-center justify-center text-center text-white  h-[40px] bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700 "
        >
          <span className="font-extrabold text-3xl  md:mr-3 text-center">
            <FaPlus />
          </span>
          <span className="sm:hidden md:block">{t("addButton")}</span>
        </button>
      </div>
    </header>
  );
}
