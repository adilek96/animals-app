"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/Card";
import { ShowMoreButton } from "../../components/buttons/ShowMoreButton";
import Loading from "../loading";
import { SortButton } from "../../components/buttons/SortButton";
import { motion } from "framer-motion";
import { BiUpArrow, BiDownArrow, BiCircle } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

export default function Rodents() {
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
  const [sortIsOpen, setSortIsOpen] = useState<boolean>(false);

  // стэйт сортировки
  const [priceSort, setPriceSort] = useState<string>("none");
  const [dateSort, setDateSort] = useState<string>("desc");
  const [sortDelivered, setSortDelivered] = useState<boolean>(false);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(999999);
  const [minChange, setMinChange] = useState("");
  const [maxChange, setMaxChange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `/api/posts/inGoodHands?p=${page}&dls=${sortDelivered}`
        );
        setPosts(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, priceSort, dateSort, sortDelivered, min, max]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full  grid justify-items-stretch  ">
            <SortButton onClick={() => setSortIsOpen(!sortIsOpen)} />
            {sortIsOpen && (
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
                <div className="w-[120px]   h-[50px] text-sm  flex justify-center  items-center">
                  <button
                    onClick={() => setDateSort("asc")}
                    className={` w-[60px] h-[35px] rounded-l-lg bg-gradient-to-r ${
                      dateSort === "asc"
                        ? "from-primary-500 to-primary-400"
                        : "from-green-500 to-green-400"
                    }   hover:contrast-125 duration-600 flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white`}
                  >
                    <span>Дата:</span>
                    <BiUpArrow />
                  </button>
                  <button
                    onClick={() => setDateSort("desc")}
                    className={` w-[60px] h-[35px] rounded-r-lg bg-gradient-to-r ${
                      dateSort === "desc"
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
                    onClick={() => setSortDelivered(!sortDelivered)}
                    className={`w-[60px] h-[35px] text-2xl text-white bg-gradient-to-r ${
                      sortDelivered
                        ? "from-primary-500 to-primary-400"
                        : "from-green-500 to-green-400"
                    } hover:contrast-125 duration-600 rounded-lg flex justify-center items-center shadow-sm  shadow-gray-800 `}
                  >
                    <TbTruckDelivery />
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
