"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaLocationDot } from "react-icons/fa6";

import { StarRaiting } from "./StartRaiting";

interface Store {
  store_id: number;
  name: string;
  location: string;
  raiting: number;
  shipping: boolean;
  info: string;
  phone: number;
  logo_url: string;
  city: string;
}

export function StoreCard({ stores }: { stores: Store }): React.JSX.Element {
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

  //звездный рейтинг

  // const starRaiting = () => {
  //   const stars = [];

  //   for (let i = 0; i < 5; i++) {
  //     // Проверяем, если текущий индекс меньше целой части рейтинга
  //     if (i < Math.floor(stores.raiting)) {
  //       stars.push(<FaStar key={i} />);
  //     } else {
  //       // Проверяем, если десятичная часть больше или равна 0.5
  //       if (i - stores.raiting < 0.5) {
  //         stars.push(<FaStarHalfStroke key={i} />);
  //       } else {
  //         stars.push(<FaRegStar key={i} />);
  //       }
  //     }
  //   }

  //   return stars;
  // };

  return (
    <Link href={`/store/${stores.store_id}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer md:w-[250px] sm:w-[170px] md:h-[430px] sm:h-[365px] bg-slate-100 flex flex-col items-center mb-5 rounded-lg shadow-md  shadow-gray-400 dark:bg-gray-700 dark:shadow-gray-800 hover:scale-103 transition-all duration-600"
      >
        <div
          className={`relative bg-primary-500 w-full md:h-[180px] sm:h-[130px] flex justify-center items-center rounded-t-lg shadow-md  shadow-gray-400  dark:shadow-gray-800`}
        >
          <Image
            className="w-full md:h-[200px] sm:h-[150px] rounded-t-lg"
            src={stores.logo_url}
            fill={true}
            objectFit="cover"
            alt="stores.name"
          ></Image>
        </div>

        <div className="mt-2  sm:ml-2 w-full grid justify-items-center ">
          <div
            id="scrollContainer"
            ref={containerRef}
            className="mt-2 mb-3 md:w-[180px] sm:w-[150px] no-scrollbar md:text-2xl sm:text-lg  whitespace-nowrap overflow-x-auto overflow-y-hidden"
          >
            <h2
              id="scrollingText"
              ref={textRef}
              className={`${shouldAnimate && "animate-marquee"}`}
            >
              {stores.name}
            </h2>
          </div>

          <p className=" md:text-[12px] sm:text-[10px] text-gray-400">
            <FaLocationDot className="inline" />
            {stores.location}
          </p>
        </div>
        <div className="w-[100%] h-[80px] md:text-[14px] sm:text-[12px] mt-1 flex flex-col justify-center items-center">
          <p className="w-[90%] max-h-[60px]  ">
            {stores.info.length < 80
              ? stores.info
              : stores.info.slice(0, 80) + " ( ... )"}
          </p>
        </div>
        <div className="w-full h-[80px] md:text-[14px] sm:text-[12px] mt-1 flex flex-col justify-center items-center">
          <div className="w-[90%] h-[20px] flex text-lg gap-1 text-yellow-400">
            {/* {starRaiting()} */}
            <StarRaiting raiting={stores.raiting} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
