"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import animalsLogo from "../../../public/logo/logo.png";
import Link from "next/link";
import { postAddingState } from "../../../store/postAddingState";
import {
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaPhone,
  FaMapPin,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { mobileFooterState } from "../../../store/mobileFooterState";
import { TheBottomMenu } from "./TheBottomMenu";
import { FaPlus } from "react-icons/fa";
import { useTranslations } from "next-intl";

export function TheFooter() {
  const t = useTranslations("Footer");
  const footerHide = mobileFooterState((state) => state.footerHide);
  const isOpen = postAddingState((state) => state.isOpen);
  const setIsOpen = postAddingState((state) => state.setIsOpen);
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        // Прокрутка вниз: скрыть элемент
        setIsHidden(true);
      } else {
        // Прокрутка вверх: показать элемент
        setIsHidden(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const contact = "+994556263262";
  const email = "info@animals.al";
  return (
    <footer
      className={` z-30  md:static  sm:fixed  ${
        !isHidden
          ? "sm:opacity-100 sm:bottom-0 "
          : "  sm:bottom-[-80vh] sm:opacity-0 "
      } md:bottom-0 left-0 right-0 md:opacity-100  ${
        !footerHide ? "sm:h-[75px]" : "sm:h-[80vh]"
      } md:h-fit transition-all duration-500 
      } `}
    >
      <TheBottomMenu />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={` sm:absolute md:hidden z-20 top-[-30px] left-[calc(50%-35px)] flex justify-center items-center  w-[70px] h-[70px] bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700`}
      >
        <FaPlus className="font-extrabold text-5xl  text-white text-center" />
      </button>

      <div
        className={`  sm:overflow-y-auto no-scrollbar sm:overflow-x-hidden bg-white dark:bg-gray-800 dark:inset-0 dark:text-white  md:overflow-hidden  shadow-md-revers shadow-primary-900      text-gray-800  items-center sm:flex md:justify-between sm:justify-center content-center md:flex-row sm:flex-col px-12 md:border-t-[5px] border-primary-500 border-solid   `}
      >
        <div className="  w-[100vw] flex flex-col">
          <div className="sm:h-[500px] md:h-min flex gap-3 items-center   md:flex-row sm:flex-col  mt-[30px] mb-[30px]">
            <Link href="/">
              <Image
                className=""
                src={animalsLogo}
                width={130}
                height={130}
                alt="animalsLogo"
              ></Image>
            </Link>

            <p className="w-[300px]  md:text-left sm:text-center">
              <b>Animals.AL</b> — {t("about")}
            </p>

            <div className=" flex justify-center flex-col mt-8 ">
              <p className="md:text-left sm:text-center">
                <b>{t("contacts")}</b>
              </p>

              <ul className="list-none  pt-4 space-y-1">
                <li className=" hover:text-primary-500 ">
                  <FaPhone className="inline text-2xl ml-1 text-gray-400 pt-1 font-extrabold" />
                  <a href={`tel:${contact}`}>{contact}</a>
                </li>
                <li className=" hover:text-primary-500 ">
                  <MdEmail className="inline text-2xl ml-1 text-gray-400 pt-1 font-extrabold" />
                  <a href="{`mailto:${email}`}">{email}</a>
                </li>
                <li>
                  <FaMapPin className="inline text-2xl ml-1 text-gray-400 pt-1 font-extrabold" />
                  {t("location")}
                </li>
              </ul>
              <div className="sm:h-[400px] md:h-min flex md:justify-start sm:justify-center gap-3 pt-4 pl-1 pb-8">
                <Link href="https://t.me/zooazerbaijan">
                  <span className=" hover:text-primary-500 text-2xl  text-gray-400  font-extrabold  ">
                    <FaTelegram />
                  </span>
                </Link>
                <Link href="https://www.facebook.com/groups/zooazerbaijan">
                  <span className=" hover:text-primary-500 text-2xl  text-gray-400  font-extrabold">
                    <FaFacebook />
                  </span>
                </Link>
                <Link href="https://wa.me/994556263262">
                  <span className=" hover:text-primary-500 text-2xl  text-gray-400  font-extrabold">
                    <FaWhatsapp />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <hr className="mx-auto text-center h-[2px] bg-gray-400 w-[80%] rounded-full" />
          <div className="flex justify-center items-center  text-[12px] h-[40px]">
            <p className="text-center ">
              Created with honor by &copy;
              <a
                className=" hover:text-primary-500  font-bold"
                href="https://www.tabs.me"
              >
                Tabs.me
              </a>
              &nbsp; and &nbsp; &copy;
              <a
                className=" hover:text-primary-500 font-bold"
                href="https://www.kemikable.com"
              >
                kemikable.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
