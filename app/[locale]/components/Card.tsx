"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import animalsLogo from "../../../public/logo/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaManatSign, FaPassport, FaLocationDot } from "react-icons/fa6";
import { TbVaccine, TbTruckDelivery } from "react-icons/tb";
import { MdPets, MdOutlineWavingHand } from "react-icons/md";
import { FcCancel, FcCheckmark } from "react-icons/fc";

interface Post {
  title: string;
  category: string;
  image_url: string | null;
  added_date: number;
  formatted_added_date: number;
  passport: string;
  vaccinations: string | null;
  pedigree: string;
  price: number;
  in_good_hands: string;
  city: string;
  isdelevery: boolean;
  isnew: boolean;
  ad_id: number;
}

export function Card({ post }: { post: Post }): React.JSX.Element {
  const t = useTranslations("Categories");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;

    if (textElement && container) {
      setShouldAnimate(textElement.scrollWidth > container.clientWidth);
    }
  }, []);

  return (
    <Link href={`/posts/${post.ad_id}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer md:w-[200px] sm:w-[170px] md:h-[430px] sm:h-[365px] bg-white flex flex-col items-center mb-5 rounded-lg shadow-md  shadow-gray-400 dark:bg-gray-700 dark:shadow-gray-800 hover:scale-103 transition-all duration-600"
      >
        <div
          className={`relative bg-primary-500 w-full md:h-[180px] sm:h-[130px] flex justify-center items-center rounded-t-lg shadow-md  shadow-gray-400  dark:shadow-gray-800`}
        >
          <Image
            className="w-full md:h-[180px] sm:h-[130px] rounded-t-lg"
            src={post.image_url === null ? animalsLogo : post.image_url}
            width={130}
            height={80}
            alt="animalsLogo"
          ></Image>

          <button className=" absolute top-1 left-2 bg-gradient-to-r from-green-500 to-green-400 hover:contrast-125 duration-600 w-[80px] h-[25px]  text-[14px] rounded-lg flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white">
            <p className="text-center align-middle">{t(post.category)}</p>
          </button>
        </div>

        <div className="mt-2 md:ml-6 sm:ml-2 w-full grid justify-items-start ">
          <Link href="#">
            <div
              id="scrollContainer"
              ref={containerRef}
              className="mt-2 md:w-[180px] sm:w-[150px] no-scrollbar md:text-2xl sm:text-lg  whitespace-nowrap overflow-x-auto overflow-y-hidden"
            >
              <h2
                id="scrollingText"
                ref={textRef}
                className={`${shouldAnimate && "animate-marquee"}`}
              >
                {post.title}
              </h2>
            </div>
          </Link>
          <p className="md:mt-4 sm:mt-3 md:text-[12px] sm:text-[10px] text-gray-400">
            Добавлено: {post.formatted_added_date}
          </p>
          <p className=" md:text-[12px] sm:text-[10px] text-gray-400">
            <FaLocationDot className="inline" />
            {post.city}
          </p>
        </div>

        {post.category === "cats" || post.category === "dogs" ? (
          <div className="w-full h-[80px] md:text-[14px] sm:text-[12px] mt-1 flex flex-col justify-center items-center">
            <div className="w-[90%] h-[20px] flex justify-between">
              <span>
                <TbVaccine className="inline mr-1 text-gray-400" />
                Прививка:
              </span>
              <span>
                {post.vaccinations ? (
                  <FcCheckmark className="inline " />
                ) : (
                  <>
                    <FcCancel className="inline " />
                  </>
                )}
              </span>
            </div>
            <div className="w-[90%] h-[20px] flex justify-between">
              <span>
                <FaPassport className="inline mr-1 text-gray-400" />
                Паспорт:
              </span>
              <span>
                {post.passport ? (
                  <FcCheckmark className="inline " />
                ) : (
                  <>
                    <FcCancel className="inline " />
                  </>
                )}
              </span>
            </div>
            <div className="w-[90%] h-[20px] flex justify-between">
              <span>
                <MdPets className="inline mr-1 text-gray-400" />
                Родословная:
              </span>
              <span>
                {post.pedigree ? (
                  <>
                    {/* <span>{p("true")}</span> */}
                    <FcCheckmark className="inline " />
                  </>
                ) : (
                  <>
                    {/* <span className="mr-1">{p("false")}</span> */}
                    <FcCancel className="inline " />
                  </>
                )}
              </span>
            </div>
            <div className="w-[90%] h-[20px] flex justify-between">
              <span>
                <TbTruckDelivery className="inline mr-1 text-gray-400" />
                Доставка:
              </span>
              <span>
                {post.isdelevery ? (
                  <>
                    {/* <span>{p("true")}</span> */}
                    <FcCheckmark className="inline " />
                  </>
                ) : (
                  <>
                    {/* <span className="mr-1">{p("false")}</span> */}
                    <FcCancel className="inline " />
                  </>
                )}
              </span>
            </div>
          </div>
        ) : (
          <div className="w-full h-[80px] md:text-[14px] sm:text-[12px] mt-1 flex flex-col justify-center items-center">
            {post.category === "acsesories" ? (
              <>
                <div className="w-[90%] h-[20px] flex justify-between">
                  <span>
                    <TbTruckDelivery className="inline mr-1 text-gray-400" />
                    Доставка:
                  </span>
                  <span>
                    {post.isdelevery ? (
                      <>
                        {/* <span>{p("true")}</span> */}
                        <FcCheckmark className="inline " />
                      </>
                    ) : (
                      <>
                        {/* <span className="mr-1">{p("false")}</span> */}
                        <FcCancel className="inline " />
                      </>
                    )}
                  </span>
                </div>
                <div className="w-[90%] h-[20px] flex justify-between">
                  <span>
                    <MdOutlineWavingHand className="inline mr-1 text-gray-400" />
                    Новый:
                  </span>
                  <span>
                    {post.isnew ? (
                      <>
                        {/* <span>{p("true")}</span> */}
                        <FcCheckmark className="inline " />
                      </>
                    ) : (
                      <>
                        {/* <span className="mr-1">{p("false")}</span> */}
                        <FcCancel className="inline " />
                      </>
                    )}
                  </span>
                </div>
              </>
            ) : (
              <div className="w-[90%] h-[20px] flex justify-between">
                <span>
                  <TbTruckDelivery className="inline mr-1 text-gray-400" />
                  Доставка:
                </span>
                <span>
                  {post.isdelevery ? (
                    <>
                      {/* <span>{p("true")}</span> */}
                      <FcCheckmark className="inline " />
                    </>
                  ) : (
                    <>
                      {/* <span className="mr-1">{p("false")}</span> */}
                      <FcCancel className="inline " />
                    </>
                  )}
                </span>
              </div>
            )}
          </div>
        )}
        <div className="w-[80%] h-[1px] bg-gray-400 mt-3"></div>
        <div className="w-[90%] grid justify-items-end ">
          {post.in_good_hands ? (
            <p className="text-primary-500 mt-3">В добрые руки</p>
          ) : (
            <button className="mt-3 bg-gradient-to-r from-primary-500 to-primary-400 hover:contrast-125 duration-600 w-[100px] h-[30px]  text-md rounded-full flex justify-center items-center shadow-md  shadow-gray-400  dark:shadow-gray-800 text-white">
              {post.price}
              <FaManatSign />
            </button>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
