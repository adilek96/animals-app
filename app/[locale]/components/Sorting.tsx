"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiUpArrow, BiDownArrow, BiCircle } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

interface SortingProps {
  sortIsOpen: boolean;
}

export const Sorting: React.FC<SortingProps> = ({ sortIsOpen }) => {
  const [priceSort, setPriceSort] = useState<string>("none");
  const [dateSort, setDateSort] = useState<string>("up");
  const [sorDelivered, setSortDelivered] = useState<boolean>(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: sortIsOpen ? 1 : 0,
      }}
      transition={{ duration: 0.9 }}
      className="justify-self-center flex justify-around items-center flex-wrap w-[90%] h-fit rounded-2xl bg-slate-400/50 "
    >
      <div className="w-[150px]   h-[50px] text-sm  flex justify-center  items-center">
        <button
          onClick={() => setPriceSort("up")}
          className={` w-[60px] h-[35px] rounded-l-lg bg-gradient-to-r ${
            priceSort === "up"
              ? "from-primary-500 to-primary-400"
              : "from-green-500 to-green-400"
          }   hover:contrast-125 duration-600 flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white`}
        >
          <span>Цена:</span>
          <BiUpArrow />
        </button>
        <button
          onClick={() => setPriceSort("none")}
          className={` w-[30px] h-[35px]  bg-gradient-to-r ${
            priceSort === "none"
              ? "from-primary-500 to-primary-400"
              : "from-green-500 to-green-400"
          }  hover:contrast-125 duration-600 flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white`}
        >
          <BiCircle />
        </button>
        <button
          onClick={() => setPriceSort("down")}
          className={` w-[60px] h-[35px] rounded-r-lg bg-gradient-to-r ${
            priceSort === "down"
              ? "from-primary-500 to-primary-400"
              : "from-green-500 to-green-400"
          }  hover:contrast-125 duration-600 flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white`}
        >
          <span>Цена:</span>
          <BiDownArrow />
        </button>
      </div>
      <div className="w-[160px]   h-[50px] text-sm  flex justify-center  items-center">
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
      <div className="w-[120px]   h-[50px] text-sm  flex justify-center  items-center">
        <button
          onClick={() => setDateSort("up")}
          className={` w-[60px] h-[35px] rounded-l-lg bg-gradient-to-r ${
            dateSort === "up"
              ? "from-primary-500 to-primary-400"
              : "from-green-500 to-green-400"
          }   hover:contrast-125 duration-600 flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white`}
        >
          <span>Дата:</span>
          <BiUpArrow />
        </button>
        <button
          onClick={() => setDateSort("down")}
          className={` w-[60px] h-[35px] rounded-r-lg bg-gradient-to-r ${
            dateSort === "down"
              ? "from-primary-500 to-primary-400"
              : "from-green-500 to-green-400"
          }   hover:contrast-125 duration-600 flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white`}
        >
          <span>Дата:</span>
          <BiDownArrow />
        </button>
      </div>
      <div className=" w-[60px]   h-[50px] flex justify-center items-center">
        <button
          onClick={() => setSortDelivered(!sorDelivered)}
          className={`w-[60px] h-[35px] text-2xl text-white bg-gradient-to-r ${
            sorDelivered
              ? "from-primary-500 to-primary-400"
              : "from-green-500 to-green-400"
          } hover:contrast-125 duration-600 rounded-lg flex justify-center items-center shadow-sm  shadow-gray-800 `}
        >
          <TbTruckDelivery />
        </button>
      </div>
    </motion.div>
  );
};
