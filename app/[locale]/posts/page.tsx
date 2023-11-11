"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import { ShowMoreButton } from "../components/buttons/ShowMoreButton";
import Loading from "./loading";
import { Sorting } from "../components/Sorting";
import { SortButton } from "../components/buttons/SortButton";

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
  const [sortIsOpen, setSortIsOpen] = useState<boolean>(false);

  // стэйт сортировки
  const [priceSort, setPriceSort] = useState<string>("none");
  const [dateSort, setDateSort] = useState<string>("desk");
  const [sortDelivered, setSortDelivered] = useState<boolean>(false);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(100000);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `/api/posts?p=${page}&ps=${priceSort}&ds=${dateSort}&dls=${sortDelivered}&pmin=${min}&pmax=${max}`
        );
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
            <SortButton onClick={() => setSortIsOpen(!sortIsOpen)} />
            {sortIsOpen && <Sorting sortIsOpen={sortIsOpen} />}
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
