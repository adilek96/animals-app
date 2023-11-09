"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import animalsLogo from "../../../public/logo/logo.png";
import Link from "next/link";

export default function Posts() {
  interface Post {
    title: string;
    category: string;
    image_url: string | null;
    added_date: number;
    formatted_added_date: number;
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
    <div className="flex justify-evenly gap-10 flex-wrap h-fit py-5">
      {posts.length > 0 &&
        posts.map((post, index) => (
          <div
            key={index}
            className="w-[300px] h-[500px] bg-slate-100 flex flex-col items-center gap-5 rounded-lg shadow-md  shadow-gray-400 dark:bg-gray-700 dark:shadow-gray-800"
          >
            <div className="bg-red-300 w-full h-[180px] flex justify-center items-center rounded-t-lg shadow-md  shadow-gray-400  dark:shadow-gray-800">
              {/* <Image
                className=""
                src={post.image_url === null ? animalsLogo : post.image_url}
                width={130}
                height={80}
                alt="animalsLogo"
              ></Image> */}
            </div>
            <div className="mt-3 ml-6 w-full grid justify-items-start ">
              <button className="text-primary-500 bg-gray-300 w-[100px] h-[30px] font-bold text-lg rounded-full flex justify-center items-center shadow-md  shadow-gray-400  dark:shadow-gray-800">
                <p className="text-center align-middle">{post.category}</p>
              </button>
              <Link href="#">
                <h2 className="mt-5 text-2xl">{post.title}</h2>
              </Link>
              <p className="mt-6 text-[12px]">
                Добавлено: {post.formatted_added_date}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
