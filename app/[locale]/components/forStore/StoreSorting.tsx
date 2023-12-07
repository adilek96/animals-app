"use client";
import React from "react";
import { Fragment, useState, ChangeEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { cities } from "../files/cities";
import { useTranslations } from "next-intl";

interface Cities {
  name: string;
  type: string;
}

interface StoreSort {
  sortIsOpen: boolean;
  sortDelivered: boolean;
  raitingSort: string;
  city: Cities;
  setSortDelivered: React.Dispatch<React.SetStateAction<boolean>>;
  setRaitingSort: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<Cities>>;
}

export function StoreSorting({
  sortIsOpen,
  sortDelivered,
  raitingSort,
  city,
  setSortDelivered,
  setRaitingSort,
  setCity,
}: StoreSort) {
  const c = useTranslations("Cities");

  const [selected, setSelected] = useState<any>(city);

  useEffect(() => {
    setCity(selected);
  }, [selected]);

  //   useEffect(() => {
  //     setCity(selected.type);
  //   }, [selected]);

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
      {/* Сортировка по рейтингу */}
      <div className="w-[160px]   h-[50px] text-sm  flex justify-center  items-center">
        <button
          onClick={() => setRaitingSort("up")}
          className={` w-[80px] h-[35px] rounded-l-lg bg-gradient-to-r ${
            raitingSort === "up"
              ? "from-primary-500 to-primary-400"
              : "from-green-500 to-green-400"
          }   hover:contrast-125 duration-600 flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white`}
        >
          <span>Рейтинг:</span>
          <BiUpArrow />
        </button>

        <button
          onClick={() => setRaitingSort("down")}
          className={` w-[80px] h-[35px] rounded-r-lg bg-gradient-to-r ${
            raitingSort === "down"
              ? "from-primary-500 to-primary-400"
              : "from-green-500 to-green-400"
          }  hover:contrast-125 duration-600 flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white`}
        >
          <span>Рейтинг:</span>
          <BiDownArrow />
        </button>
      </div>
      {/* Сортировка по городу */}
      <div className="w-[160px]   h-[50px] text-sm  flex justify-center  items-center">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-[170px] cursor-default rounded-lg  py-2 pl-3 pr-10 text-left shadow-m sm:text-sm border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <span className="block truncate">
                {selected.name === "all" ? "Город" : c(selected.name)}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <FaChevronDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-20 mt-1 max-h-[150px] w-full overflow-auto rounded-md bg-gray-50 dark:bg-gray-200 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {cities.map((el, elIdx) => (
                  <Listbox.Option
                    key={elIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={el}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {c(el.name)}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <FaCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      {/* Сортировка по доставке */}
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
  );
}
