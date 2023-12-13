"use client";
import React, { useEffect, useState } from "react";
import { StoreCard } from "../components/forStore/StoreCard";
import axios from "axios";
import { ShowMoreButton } from "../components/buttons/ShowMoreButton";
import Loading from "../loading";
import { SortButton } from "../components/buttons/SortButton";
import { StoreSorting } from "../components/forStore/StoreSorting";

interface Cities {
  name: string;
  type: string;
}

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
  const [city, setCity] = useState<Cities>({ name: "all", type: "all" });
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `/api/store?p=${page}&dls=${sortDelivered}&rsrt=${raitingSort}&city=${city.type}`
        );
        setStores(response.data.result);
        setNotFound(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
      console.log(stores);
    };

    fetchData();
  }, [page, sortDelivered, raitingSort, city]);
  return (
    <section className="  dark:bg-gray-700 dark:shadow-gray-800 bg-slate-50 md:w-[80%] sm:w-[95%] h-fit mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full  grid justify-items-stretch  ">
            <SortButton onClick={() => setSortIsOpen(!sortIsOpen)} />
            {sortIsOpen && (
              <StoreSorting
                sortIsOpen={sortIsOpen}
                sortDelivered={sortDelivered}
                raitingSort={raitingSort}
                city={city}
                setCity={setCity}
                setRaitingSort={setRaitingSort}
                setSortDelivered={setSortDelivered}
              />
            )}
          </div>

          {notFound || stores.length === 0 ? (
            <div className="mx-auto text-center">Не найдено</div>
          ) : (
            <div className="flex justify-around md:gap-3 flex-wrap h-fit py-5">
              {stores.length > 0 &&
                stores.map((store, index) => (
                  <StoreCard key={index} stores={store} />
                ))}
            </div>
          )}
          <div className="w-full h-[50px]">
            <ShowMoreButton onClick={() => setPage(page + 1)} />
          </div>
        </>
      )}
    </section>
  );
}
