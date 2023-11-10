"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import animalsLogo from "../../../public/logo/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaManatSign, FaPassport, FaLocationDot } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";
import { MdPets } from "react-icons/md";
import { FcCancel, FcCheckmark } from "react-icons/fc";

export default function Posts() {
  const t = useTranslations("Categories");
  const p = useTranslations("Ads");

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
  }
  const [posts, setPosts] = useState<Post[]>([]);
  // const [img, setImg] = useState<string>(animalsLogo);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((response) => {
        setPosts(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex justify-around gap-3 flex-wrap h-fit py-5">
      {posts.length > 0 &&
        posts.map((post, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            key={index}
            className="w-[200px] h-[420px] bg-white flex flex-col items-center mb-5 rounded-lg shadow-md  shadow-gray-400 dark:bg-gray-700 dark:shadow-gray-800 hover:scale-103 transition-all duration-600"
          >
            <div
              className={`relative bg-primary-500 w-full h-[180px] flex justify-center items-center rounded-t-lg shadow-md  shadow-gray-400  dark:shadow-gray-800`}
            >
              <Image
                className="w-full h-[180px] rounded-t-lg"
                src={post.image_url === null ? animalsLogo : post.image_url}
                width={130}
                height={80}
                alt="animalsLogo"
              ></Image>

              <button className=" absolute top-1 left-2 bg-gradient-to-r from-green-500 to-green-400 hover:contrast-125 duration-600 w-[80px] h-[25px]  text-[14px] rounded-lg flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white">
                <p className="text-center align-middle">{t(post.category)}</p>
              </button>
            </div>

            <div className="mt-2 ml-6 w-full grid justify-items-start ">
              <Link href="#">
                <h2 className="mt-2 text-2xl h-[20px]">{post.title}</h2>
              </Link>
              <p className="mt-4 text-[12px] text-gray-400">
                Добавлено: {post.formatted_added_date}
              </p>
              <p className=" text-[12px] text-gray-400">
                <FaLocationDot className="inline" />
                {post.city}
              </p>
            </div>

            {post.category === "cats" || post.category === "dogs" ? (
              <div className="w-full h-[80px] text-[14px] mt-1 flex flex-col justify-center items-center">
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
              </div>
            ) : (
              <div className="w-full h-[80px]  mt-1"></div>
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
        ))}
    </div>
  );
}
