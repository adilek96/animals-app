"use client";
import React, { useState, useEffect } from "react";
import { searchState } from "@/store/seachState";
import { Card } from "../components/Card";
import axios from "axios";
import { ShowMoreButton } from "../components/buttons/ShowMoreButton";
import Loading from "./loading";
import { SortButton } from "../components/buttons/SortButton";
import { Sorting } from "../components/Sorting";

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

export default function Search() {
  const [posts, setPosts] = useState<Post[]>([]);
  const isSearch = searchState((state) => state.isSearch);
  const setIsSearch = searchState((state) => state.setIsSearch);
  const [isLoading, setIsLoading] = useState(true);
  const [sortIsOpen, setSortIsOpen] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  // стэйт искомого слова
  const search = searchState((state) => state.search);
  const setSearch = searchState((state) => state.setSearch);

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
          `/api/search?p=${page}&ps=${priceSort}&ds=${dateSort}&dls=${sortDelivered}&pmin=${min}&pmax=${max}&input=${search}`
        );
        setPosts(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, priceSort, dateSort, sortDelivered, min, max, search]);

  return (
    <section className="dark:bg-gray-700 dark:shadow-gray-800 bg-slate-50 md:w-[80%] sm:w-[95%] h-fit mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full  grid justify-items-stretch  ">
            <SortButton onClick={() => setSortIsOpen(!sortIsOpen)} />
            {sortIsOpen && (
              <Sorting
                sortIsOpen={sortIsOpen}
                priceSort={priceSort}
                dateSort={dateSort}
                sortDelivered={sortDelivered}
                min={min}
                max={max}
                minChange={minChange}
                maxChange={maxChange}
                setPriceSort={setPriceSort}
                setDateSort={setDateSort}
                setSortDelivered={setSortDelivered}
                setMin={setMin}
                setMax={setMax}
                setMinChange={setMinChange}
                setMaxChange={setMaxChange}
              />
            )}
          </div>
          <div className="flex justify-around md:gap-3 flex-wrap h-fit py-5">
            {posts.length > 0 ? (
              posts.map((post, index) => <Card key={index} post={post} />)
            ) : (
              <p>Ничего не найдено</p>
            )}
          </div>
          <div className="w-full h-[50px]">
            <ShowMoreButton onClick={() => setPage(page + 1)} />
          </div>
        </>
      )}
    </section>
  );
}
