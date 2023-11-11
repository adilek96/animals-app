"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import { ShowMoreButton } from "../components/buttons/ShowMoreButton";
import Loading from "./loading";
import { motion } from "framer-motion";
import { BiSort, BiUpArrow, BiDownArrow } from "react-icons/bi";

export default function Posts() {
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
  }
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [sortIsOpen, setSortIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`/api/posts?p=${page}`);
        setPosts(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full  grid justify-items-stretch  ">
            <button
              onClick={() => setSortIsOpen(!sortIsOpen)}
              className=" justify-self-end bg-gradient-to-r from-green-500 to-green-400 hover:contrast-125 duration-600 md:w-[120px] sm:w-[40px] h-[30px]  text-[14px] rounded-lg flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white mb-3 mt-2 mr-2"
            >
              <span className="sm:hidden md:block">Cортировка</span>
              <BiSort />
            </button>
            {sortIsOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: sortIsOpen ? 1 : 0,
                }}
                transition={{ duration: 0.9 }}
                className="justify-self-center w-[90%] h-[200px] rounded-2xl bg-slate-400/20 "
              >
                <div className="w-[200px] bg-slate-400/50  h-[50px] text-sm  flex justify-center  items-center">
                  <button className=" w-[60px] h-[30px] rounded-l-xl bg-gradient-to-r from-green-500 to-green-400 hover:contrast-125 duration-600 flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white">
                    <span>Цена:</span>
                    <BiUpArrow />
                  </button>
                  <button className=" w-[60px] h-[30px] rounded-r-xl bg-gradient-to-r from-primary-500 to-primary-400 hover:contrast-125 duration-600 flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white">
                    <span>Цена:</span>
                    <BiDownArrow />
                  </button>
                </div>
                <div className="w-[200px] bg-slate-400/50  h-[50px] text-sm  flex justify-center  items-center">
                  <input
                    type="number"
                    min={0}
                    className=" w-[80px] rounded-l-lg  py-2 pl-3 pr-2 text-left shadow-m sm:text-sm border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="min"
                  />

                  <input
                    type="number"
                    min={0}
                    className=" w-[80px] rounded-r-lg  py-2 pl-3 pr-2 text-left shadow-m sm:text-sm border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="max"
                  />
                </div>
                <div className="w-[200px] bg-slate-400/50  h-[50px] text-sm  flex justify-center  items-center">
                  <button className=" w-[60px] h-[30px] rounded-l-xl bg-gradient-to-r from-green-500 to-green-400 hover:contrast-125 duration-600 flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white">
                    <span>Дата:</span>
                    <BiUpArrow />
                  </button>
                  <button className=" w-[60px] h-[30px] rounded-r-xl bg-gradient-to-r from-primary-500 to-primary-400 hover:contrast-125 duration-600 flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white">
                    <span>Дата:</span>
                    <BiDownArrow />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
          <div className="flex justify-around md:gap-3 flex-wrap h-fit py-5">
            {posts.length > 0 &&
              posts.map((post, index) => <Card key={index} post={post} />)}
          </div>
          <div className="w-full h-[50px]">
            <ShowMoreButton onClick={() => setPage(page + 1)} />
          </div>
        </>
      )}
    </>
  );
}
