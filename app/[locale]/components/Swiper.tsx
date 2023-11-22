"use client";
import React, { useState } from "react";
import Image from "next/image";
import animalsLogo from "../../../public/logo/logo.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export function Swiper({ images }: any) {
  const [imgLink, setImgLink] = useState(images[0]);
  return (
    <div className="w-[95%] bg-slate-400 md:h-[400px] sm:h-[300px]">
      <div className="w-full relative bg-slate-300 h-[300px] ">
        {images ? (
          <Image
            className="w-full"
            src={images === null ? animalsLogo : imgLink}
            alt="animalsLogo"
            fill={true}
            objectFit="contain"
          ></Image>
        ) : (
          <></>
        )}
        <div className="absolute top-[120px] left-3 cursor-pointer text-black text-[30px] w-[20px] h-[30px]">
          <FaAngleLeft />
        </div>
        <div className="absolute top-[120px] right-3 cursor-pointer text-black text-[30px] w-[20px] h-[30px]">
          <FaAngleRight />
        </div>
      </div>
      <div className=" relative shadow-md  overscroll-none  overflow-y-hidden overflow-x-auto  no-scrollbar snap-x snap-mandatory scroll-smooth  w-full bg-slate-200 h-[100px]  md:flex sm:hidden items-center gap-2 ">
        {images ? (
          images.map((el: any) => {
            return (
              <div
                key={el}
                onClick={() => setImgLink(el)}
                className="bg-slate-800 w-[90px] h-[90px] "
              >
                <Image
                  width={90}
                  height={90}
                  className="w-full"
                  src={el}
                  alt="animalsLogo"
                ></Image>
              </div>
            );
          })
        ) : (
          <></>
        )}
        <div className="absolute top-[40px] left-3 cursor-pointer text-black text-[30px] w-[20px] h-[30px]">
          <FaAngleLeft />
        </div>
        <div className="absolute top-[40px] right-3 cursor-pointer text-black text-[30px] w-[20px] h-[30px]">
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
}
