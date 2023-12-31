"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function GoodsCategory() {
  const t = useTranslations("Categories");

  return (
    <section className=" md:w-[800px] sm:w-[90%] py-2 h-fit rounded-2xl bg-gray-300 dark:bg-gray-400   text-black dark:text-white flex justify-around items-center sm:flex-wrap">
      <Link href="/store/goods">
        <div className=" snap-center flex flex-col justify-center h-[150px] w-[150px]  text-[14px] items-center ">
          <div className="h-[140px] w-[140px] rounded-lg bg-gradient-to-r from-gray-700 to-green-300  shadow-md  shadow-gray-800  flex   justify-center items-center ease-in  hover:shadow-lg hover:shadow-primary-800 transition-all duration-400  flex-col">
            <Image
              className=""
              src="/categories/all.svg"
              width={70}
              height={70}
              alt="animalsLogo"
            ></Image>
            <p className=" text-center hover:text-primary-500">{t("all")}</p>
          </div>
        </div>
      </Link>

      {/* <Link href="/store/goods/cats">
        <div className="snap-center flex flex-col justify-center h-[100px] w-[120px]  text-[14px] items-center  ">
          <div className="h-[80px] w-[80px] rounded-full bg-gradient-to-r from-secondary-500 to-secondary-400  shadow-md  shadow-gray-800  flex   justify-center items-center ease-in  hover:shadow-lg hover:shadow-primary-800 transition-all duration-400">
            <Image
              className=""
              src="/categories/cat2.svg"
              width={70}
              height={70}
              alt="animalsLogo"
            ></Image>
          </div>
          <p className=" text-center hover:text-primary-500">{t("cats")}</p>
        </div>
      </Link> */}

      {/* <Link href="/store/goods/dogs">
        <div className="snap-center flex flex-col justify-center h-[100px] w-[120px]  text-[14px] items-center  ">
          <div className="h-[80px] w-[80px] rounded-full bg-gradient-to-r from-secondary-500 to-secondary-400  shadow-md  shadow-gray-800  flex   justify-center items-center ease-in  hover:shadow-lg hover:shadow-primary-800 transition-all duration-400">
            <Image
              className=""
              src="/categories/dog2.svg"
              width={70}
              height={70}
              alt="animalsLogo"
            ></Image>
          </div>
          <p className=" text-center hover:text-primary-500">{t("dogs")}</p>
        </div>
      </Link> */}

      {/* <Link href="/store/goods/fishs">
        <div className="snap-center flex flex-col justify-center h-[100px] w-[120px]   text-[14px] items-center  ">
          <div className="h-[80px] w-[80px] rounded-full bg-gradient-to-r from-secondary-500 to-secondary-400  shadow-md  shadow-gray-800  flex   justify-center items-center ease-in  hover:shadow-lg hover:shadow-primary-800 transition-all duration-400">
            <Image
              className=""
              src="/categories/fish2.svg"
              width={65}
              height={65}
              alt="animalsLogo"
            ></Image>
          </div>
          <p className=" text-center hover:text-primary-500">{t("fishs")}</p>
        </div>
      </Link> */}

      {/* <Link href="/store/goods/birds">
        <div className="snap-center flex flex-col justify-center h-[100px] w-[120px]   text-[14px] items-center  ">
          <div className="h-[80px] w-[80px] rounded-full bg-gradient-to-r from-secondary-500 to-secondary-400  shadow-md  shadow-gray-800  flex   justify-center items-center ease-in  hover:shadow-lg hover:shadow-primary-800 transition-all duration-400">
            <Image
              className=""
              src="/categories/bird2.svg"
              width={70}
              height={70}
              alt="animalsLogo"
            ></Image>
          </div>
          <p className=" text-center hover:text-primary-500">{t("birds")}</p>
        </div>
      </Link> */}

      {/* <Link href="/store/goods/rodents">
        <div className="snap-center flex flex-col justify-center h-[100px] w-[120px]  text-[14px] items-center  ">
          <div className="h-[80px] w-[80px] rounded-full bg-gradient-to-r from-secondary-500 to-secondary-400  shadow-md  shadow-gray-800  flex   justify-center items-center ease-in  hover:shadow-lg hover:shadow-primary-800 transition-all duration-400">
            <Image
              className=""
              src="/categories/rat2.svg"
              width={70}
              height={70}
              alt="animalsLogo"
            ></Image>
          </div>
          <p className=" text-center hover:text-primary-500">{t("rodents")}</p>
        </div>
      </Link> */}

      <Link href="/store/goods/acsesories">
        <div className="snap-center flex flex-col justify-center h-[150px] w-[150px]  text-[14px] items-center  ">
          <div className="h-[140px] w-[140px] rounded-lg bg-gradient-to-r from-secondary-500 to-secondary-400  shadow-md  shadow-gray-800  flex   justify-center items-center ease-in  hover:shadow-lg hover:shadow-primary-800 transition-all duration-400 flex-col">
            <Image
              className=""
              src="/categories/acsesories2.svg"
              width={70}
              height={70}
              alt="animalsLogo"
            ></Image>
            <p className=" text-center hover:text-primary-500">
              {t("acsesories")}
            </p>
          </div>
        </div>
      </Link>

      <Link href="/store/goods/food">
        <div className="snap-center flex flex-col justify-center h-[150px] w-[150px]  text-[14px] items-center  ">
          <div className="h-[140px] w-[140px] rounded-lg bg-gradient-to-r from-secondary-500 to-secondary-400  shadow-md  shadow-gray-800  flex   justify-center items-center ease-in  hover:shadow-lg hover:shadow-primary-800 transition-all duration-400 flex-col">
            <Image
              className=""
              src="/categories/food2.svg"
              width={65}
              height={65}
              alt="animalsLogo"
            ></Image>
            <p className=" text-center hover:text-primary-500">{t("food")}</p>
          </div>
        </div>
      </Link>

      <Link href="/store/goods/other">
        <div className="snap-center flex flex-col justify-center h-[150px] w-[150px] text-[14px] items-center  ">
          <div className="h-[140px] w-[140px] rounded-lg bg-gradient-to-r from-secondary-500 to-secondary-400  shadow-md  shadow-gray-800  flex   justify-center items-center ease-in  hover:shadow-lg hover:shadow-primary-800 transition-all duration-400 flex-col">
            <Image
              className=""
              src="/categories/farm2.svg"
              width={65}
              height={65}
              alt="animalsLogo"
            ></Image>
            <p className=" text-center hover:text-primary-500">{"Другие"}</p>
          </div>
        </div>
      </Link>

      <Link href="/store/goods/other">
        <div className="snap-center flex flex-col justify-center h-[150px] w-[150px] text-[14px] items-center  ">
          <div className="h-[140px] w-[140px] rounded-lg bg-gradient-to-r from-secondary-500 to-secondary-400  shadow-md  shadow-gray-800  flex   justify-center items-center ease-in  hover:shadow-lg hover:shadow-primary-800 transition-all duration-400 flex-col">
            <Image
              className=""
              src="/categories/farm2.svg"
              width={65}
              height={65}
              alt="animalsLogo"
            ></Image>
            <p className=" text-center hover:text-primary-500">
              {"Средства ухода"}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}
