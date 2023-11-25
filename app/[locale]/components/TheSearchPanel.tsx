"use client";
import React, { useEffect, useState } from "react";
import { FaCat, FaDog, FaFish, FaCow, FaKiwiBird } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { searchState } from "@/store/seachState";
import { useRouter } from "next/navigation";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";

interface Title {
  title: string;
}

export function TheSearchPanel() {
  const t = useTranslations("Search");
  const router = useRouter();
  const [isFocus, setIsFocus] = useState(false);
  const [searchMenuActive, setSearchMenuActive] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const isSearch = searchState((state) => state.isSearch);
  const setIsSearch = searchState((state) => state.setIsSearch);
  const search = searchState((state) => state.search);
  const setSearch = searchState((state) => state.setSearch);
  const [title, setTitle] = useState<Title[]>([]);

  const icons = [
    <FaCat key={1} size={20} />,
    <FaDog key={2} size={20} />,
    <FaFish key={3} size={20} />,
    <FaCow key={4} size={20} />,
    <FaKiwiBird key={5} size={20} />,
  ];

  const [currentIcon, setCurrentIcon] = useState(0);

  const nextIcon = () => {
    setCurrentIcon((prev) => (prev + 1) % icons.length);
  };

  useEffect(() => {
    const interval = setInterval(nextIcon, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/search/titlesearch?input=${inputValue}`
        );
        setTitle(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // finally {
      //   setIsLoading(false);
      // }
    };

    if (inputValue.length > 0) {
      fetchData();
    }
  }, [inputValue]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isSearch) {
      router.push("/search");
    }
    setSearch(inputValue);
    setIsFocus(false);
  };

  return (
    <div className=" relative flex flex-col justify-center h-[50px] w-full rounded-lg items-center bg-white dark:bg-gray-400 shadow-md ">
      <form onSubmit={(e) => handleSubmit(e)} className="w-full ">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            {icons[currentIcon]}
          </motion.div>
          <input
            onFocus={() => setIsFocus(true)}
            type="search"
            id="default-search"
            autoComplete="off"
            value={inputValue}
            onChange={(e) => {
              setIsSearch(!isSearch), setInputValue(e.target.value);
            }}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500 rounded-lg"
            placeholder={t("search")}
            required
          />

          <button
            type="submit"
            onClick={() => setSearchMenuActive(!searchMenuActive)}
            className="absolute right-2.5 bottom-2.5  flex flex-col  items-center justify-center gap-1 bg-gradient-to-r from-green-500 to-green-400  hover:contrast-125 duration-700 shadow-md rounded-full shadow-gray-800  w-[40px] h-[40px] text-white "
          >
            <motion.span
              initial={{
                x: 0,
                y: 0,
                scale: 1.5,
              }}
              animate={{
                y: searchMenuActive ? [-4, 4, 0] : 0,
                x: searchMenuActive ? [3, 5, -5, 4, -4, 3, 0] : 0,
                scale: searchMenuActive ? [1.5, 1, 2, 1.5] : 1.5,
              }}
              transition={{ duration: 3, times: [0, 0.2, 1] }}
              className=" "
            >
              <BiSearchAlt />
            </motion.span>
          </button>
        </div>
      </form>
      {inputValue.length > 0 && isFocus && (
        <div className=" absolute top-[55px] w-full h-fit px-5 py-2 rounded-lg bg-gray-50 dark:bg-gray-700/60 shadow-md">
          {title.length > 0 ? (
            title.map((el, index) => (
              <p
                className="pb-2 cursor-pointer"
                onClick={() => {
                  setSearch(el.title);
                  setInputValue(el.title);
                  setIsFocus(false);
                }}
                key={index}
              >
                {el.title}
              </p>
            ))
          ) : (
            <p>Ничего не найдено</p>
          )}
        </div>
      )}
    </div>
  );
}
