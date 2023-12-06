"use client";
import React, { useEffect, useState } from "react";
import { StoreCard } from "../components/forStore/StoreCard";
import axios from "axios";
import { ShowMoreButton } from "../components/buttons/ShowMoreButton";
import Loading from "../loading";
import { SortButton } from "../components/buttons/SortButton";

interface Store {
  store_id: number;
  name: string;
  location: string;
  raiting: number;
  shipping: boolean;
  info: string;
  phone: number;
  logo_url: string;
  city: string;
}

export default function Store() {
  const [stores, setStores] = useState<Store[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [sortIsOpen, setSortIsOpen] = useState<boolean>(false);

  // стэйт сортировки
  const [raitingSort, setRaitingSort] = useState<string>("up");
  const [sortDelivered, setSortDelivered] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `/api/store?p=${page}&dls=${sortDelivered}&rsrt=${raitingSort}`
        );
        setStores(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, sortDelivered, raitingSort]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full  grid justify-items-stretch  ">
            <SortButton onClick={() => setSortIsOpen(!sortIsOpen)} />
            {sortIsOpen && "gg"}
          </div>
          <div className="flex justify-around md:gap-3 flex-wrap h-fit py-5">
            {stores.length > 0 &&
              stores.map((store, index) => (
                <StoreCard key={index} stores={store} />
              ))}
          </div>
          <div className="w-full h-[50px]">
            <ShowMoreButton onClick={() => setPage(page + 1)} />
          </div>
        </>
      )}
    </>
  );
}
