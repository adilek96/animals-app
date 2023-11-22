"use client";
import React, { useState } from "react";
import Image from "next/image";
import animalsLogo from "../../../public/logo/logo.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export function Swiper({ images }: any) {
  const [imgLink, setImgLink] = useState(images[0]);
  const [imgCount, setImgCount] = useState(0);

  const countHandlerPlus = () => {
    if (images.length - 1 === imgCount) {
      setImgCount(0);
      setImgLink(images[0]);
    } else {
      setImgCount(imgCount + 1);
      setImgLink(images[imgCount + 1]);
    }
  };

  const countHandlerMinus = () => {
    if (imgCount > 0) {
      setImgCount(imgCount - 1);
      setImgLink(images[imgCount - 1]);
    } else {
      setImgCount(images.length - 1);
      setImgLink(images[images.length - 1]);
    }
  };

  return (
    <div className="w-[95%] flex flex-col gap-5 ">
      <div className="w-full relative bg-gray-300 dark:bg-gray-400  h-[300px] rounded-md ">
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
        <div
          onClick={countHandlerMinus}
          className="absolute top-[130px] left-3 cursor-pointer text-primary-500 text-[35px] w-[25px] h-[35px]"
        >
          <FaAngleLeft />
        </div>
        <div
          onClick={countHandlerPlus}
          className="absolute top-[130px] right-3 cursor-pointer text-primary-500 text-[35px] w-[25px] h-[35px]"
        >
          <FaAngleRight />
        </div>
      </div>

      {/* thumbnails */}

      <div className=" relative shadow-md rounded-2xl    w-full bg-slate-200 dark:bg-gray-600 h-[100px]  flex  items-center justify-center ">
        <div className="   overscroll-none  overflow-y-hidden overflow-x-auto  no-scrollbar snap-x snap-mandatory scroll-smooth   w-[70%] bg-slate-200/50 dark:bg-gray-600/50 h-[95px]  flex  items-center gap-2">
          {images.map((el: any, i: any) => {
            return (
              <div className="snap-center">
                <div
                  key={i}
                  onClick={() => {
                    setImgLink(el);
                    setImgCount(i);
                  }}
                  className={` relative bg-slate-800 w-[90px] h-[90px] flex  justify-center items-center ${
                    imgCount === i ? "border-[2px] border-primary-500" : ""
                  } `}
                >
                  <Image
                    src={el}
                    fill={true}
                    alt="animalsLogo"
                    objectFit="cover"
                  ></Image>
                </div>
              </div>
            );
          })}
        </div>
        <div
          onClick={countHandlerMinus}
          className="absolute top-[38px] left-3 cursor-pointer text-primary-500 text-[30px] w-[20px] h-[30px]"
        >
          <FaAngleLeft />
        </div>
        <div
          onClick={countHandlerPlus}
          className="absolute top-[38px] right-3 cursor-pointer text-primary-500 text-[30px] w-[20px] h-[30px]"
        >
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
}
