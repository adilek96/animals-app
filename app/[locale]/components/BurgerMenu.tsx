"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaChevronDown,
  FaChevronUp,
  FaSignInAlt,
  FaWindowClose,
  FaSignOutAlt,
} from "react-icons/fa";
import { burgerActiveState } from "../../../store/burgerActiveState";
import { motion } from "framer-motion";
import { logInModalActive } from "../../../store/logInModalActive";
import { useTranslations } from "next-intl";
import { useSession, signOut } from "next-auth/react";

export function BurgerMenu() {
  const t = useTranslations("TheHeader");
  const session = useSession();

  const pathname = usePathname();
  // стэйт вызова бургер меню
  const burger = burgerActiveState((state) => state.burger);
  const setBurgerActive = burgerActiveState((state) => state.setBurgerActive);
  // стэйт вызова окна входа
  const loginModal = logInModalActive((state) => state.loginModal);
  const setLoginModalActive = logInModalActive(
    (state) => state.setLoginModalActive
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -3000 }}
      animate={{
        opacity: burger ? 1 : 0,
        x: burger ? 0 : -3000,
      }}
      transition={{ duration: 0.5 }}
      onClick={() => setBurgerActive(!burger)}
      className={`absolute h-[100%]  w-screen backdrop-blur-md   z-20`}
    >
      <div className=" shadow-xl shadow-orange-900 h-[100%] w-[250px]  bg-white dark:bg-gray-700  rounded-md  overflow-hidden">
        <div className=" h-[150px] relative flex justify-center items-center gap-2">
          <button
            onClick={() => setBurgerActive(!burger)}
            className="focus:outline-none active:outline-none shadow-xl shadow-primary-800 absolute right-1 top-0 w-[30px] h-[30px]"
          >
            <FaWindowClose className="absolute right-0 top-1  text-primary-300 w-[30px] h-[30px]" />
          </button>
          <div className="  w-[70px] h-[70px] flex items-center justify-center shadow-xl shadow-orange-900 bg-primary-200 rounded-full border-collapse border-[3px] border-primary-500">
            <div
              onClick={() => setLoginModalActive(!loginModal)}
              className=" relative w-[60px] h-[60px] flex items-center justify-center shadow-inner shadow-orange-900 bg-white rounded-full border-collapse border-[2px] border-primary-500"
            >
              <Image
                className="rounded-full"
                src="/logo/logo.png"
                fill={true}
                objectFit="fill"
                alt="logo"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            {!session?.data ? (
              <button
                onClick={() => setLoginModalActive(!loginModal)}
                className={`flex    items-center text-sm  hover:text-primary-500 duration-300`}
              >
                <FaSignInAlt className="text-md mr-2 text-gray-500  font-extrabold" />
                {t("loginButton")}
              </button>
            ) : (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className={`flex    items-center text-sm  hover:text-primary-500 duration-300`}
              >
                <FaSignOutAlt className="text-2xl mr-2 text-gray-300  font-extrabold" />
                Выйти
              </button>
            )}
            <button
              onClick={() => setLoginModalActive(!loginModal)}
              className="shadow-xl shadow-green-800  w-[100px] flex items-center justify-center text-sm text-center text-white  h-[30px] bg-gradient-to-r from-green-600 to-green-300 rounded-full hover:contrast-125 duration-700  "
            >
              {t("guest")}
            </button>
          </div>
        </div>

        <ul>
          <li>
            <Link
              href="/"
              onClick={() => setBurgerActive(!burger)}
              className={` box-content  px-3 flex items-center   hover:text-primary-500 duration-300 ${
                pathname === "/"
                  ? " text-primary-500 dark:bg-gray-500 bg-primary-100 h-[70px]"
                  : "h-[50px]"
              }`}
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className={`transition-1000 box-content relative   px-3 flex items-center    hover:text-primary-500 duration-500 ${
                pathname === "/posts"
                  ? " text-primary-500 dark:bg-gray-500  bg-primary-100  h-[70px]"
                  : "h-[50px]"
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
              onClick={() => setBurgerActive(!burger)}
              className={`box-content  px-3 flex items-center  hover:text-primary-500 duration-300 ${
                pathname === "/clinic"
                  ? " text-primary-500 bg-primary-100 h-[70px]"
                  : "h-[50px]"
              }`}
            >
              {t("clinics")}
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
