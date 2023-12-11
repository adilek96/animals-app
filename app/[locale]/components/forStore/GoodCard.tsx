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

interface Good {
  goods_id: number;
  store_id: number;
  name: string;
  description: string;
  added_date: Date;
  price: number;
  category: string;
  altcategory: string;
  image_url: string;
  city: string;
  formatted_added_date: string;
}

export function GoodCard({ good }: { good: Good }): React.JSX.Element {
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
    <Link href={`/goods/${good.goods_id}`}>
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
            src={good.image_url === null ? animalsLogo : good.image_url}
            // width={130}
            // height={80}
            fill={true}
            objectFit="cover"
            alt="animalsLogo"
          ></Image>

          <button className=" absolute top-1 left-2 bg-gradient-to-r from-green-500 to-green-400 hover:contrast-125 duration-600 w-[80px] h-[25px]  text-[14px] rounded-lg flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white">
            <p className="text-center align-middle">{good.category}</p>
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
                {good.name}
              </h2>
            </div>
          </Link>
          <p className="md:mt-4 sm:mt-3 md:text-[12px] sm:text-[10px] text-gray-400">
            Добавлено: {good.formatted_added_date}
          </p>
          <p className=" md:text-[12px] sm:text-[10px] text-gray-400">
            <FaLocationDot className="inline" />
            {good.city}
          </p>
        </div>

        <div className="w-[80%] h-[1px] bg-gray-400 mt-3"></div>
        <div className="w-[90%] grid justify-items-end ">
          <button className="mt-3 bg-gradient-to-r from-primary-500 to-primary-400 hover:contrast-125 duration-600 w-[100px] h-[30px]  text-md rounded-full flex justify-center items-center shadow-md  shadow-gray-400  dark:shadow-gray-800 text-white">
            {good.price}
            <FaManatSign />
          </button>
        </div>
      </motion.div>
    </Link>
  );
}
