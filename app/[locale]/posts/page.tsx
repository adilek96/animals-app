"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import animalsLogo from "../../../public/logo/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Posts() {
  interface Post {
    title: string;
    category: string;
    image_url: string | null;
    added_date: number;
    formatted_added_date: number;
    passport: string;
    vaccinations: string;
    pedigree: string;
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
            className="w-[250px] h-[500px] bg-white flex flex-col items-center mb-5 rounded-lg shadow-md  shadow-gray-400 dark:bg-gray-700 dark:shadow-gray-800 hover:scale-103 transition-all duration-600"
          >
            <div
              className={`bg-red-300 w-full h-[180px] flex justify-center items-center rounded-t-lg shadow-md  shadow-gray-400  dark:shadow-gray-800`}
            >
              <Image
                className="w-full h-[180px] rounded-t-lg"
                src={post.image_url === null ? animalsLogo : post.image_url}
                width={130}
                height={80}
                alt="animalsLogo"
              ></Image>
            </div>

            <div className="mt-3 ml-6 w-full grid justify-items-start ">
              <button className=" bg-gradient-to-r from-green-500 to-green-400 hover:contrast-125 duration-600 w-[100px] h-[30px]  text-md rounded-full flex justify-center items-center shadow-md  shadow-gray-400  dark:shadow-gray-800 text-white">
                <p className="text-center align-middle">{post.category}</p>
              </button>
              <Link href="#">
                <h2 className="mt-5 text-2xl">{post.title}</h2>
              </Link>
              <p className="mt-6 text-[12px] text-gray-400">
                Добавлено: {post.formatted_added_date}
              </p>
            </div>

            {post.category === "cats" || post.category === "dogs" ? (
              <div className="w-full h-[70px] bg-blue-300 mt-2">
                <label htmlFor="passport">Паспорт</label>
                <input
                  id="passport"
                  type="checkbox"
                  value={post.passport}
                  disabled
                />
                <label htmlFor="vac">Прививка</label>
                <input
                  id="vac"
                  type="checkbox"
                  value={post.vaccinations}
                  disabled
                />
                <label htmlFor="pedigree">Родословная</label>
                <input
                  id="pedigree"
                  type="checkbox"
                  value={post.pedigree}
                  disabled
                />
              </div>
            ) : (
              <></>
            )}
          </motion.div>
        ))}
    </div>
  );
}
