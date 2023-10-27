"use client";
import React from "react";
import { motion } from "framer-motion";
import { postAddingState } from "../../../../../store/postAddingState";
import { FaWindowClose } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import Lottie from "react-lottie-player";
import animations from "../../../../../public/animation.json";

interface Category {
  name: string;
}

const categories: Category[] = [
  { name: "Cats" },
  { name: "Dogs" },
  { name: "Birds" },
  { name: "Fishs" },
  { name: "Rats" },
  { name: "Good Hands" },
  { name: "Food" },
  { name: "Acsesories" },
  { name: "Farm Animals" },
];

export function PostAddingWindow() {
  const [selected, setSelected] = useState(categories[0]);

  const t = useTranslations("LogInForms");

  const isOpen = postAddingState((state) => state.isOpen);
  const setIsOpen = postAddingState((state) => state.setIsOpen);

  const check = postAddingState((state) => state.check);
  const setCheck = postAddingState((state) => state.setCheck);

  return (
    <motion.div
      initial={{ opacity: 0, y: -1000 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        y: isOpen ? 0 : -1000,
      }}
      transition={{ duration: 0.5 }}
      className=" fixed w-screen backdrop-blur-lg inset-0 z-20"
    >
      <div className=" fixed dark:bg-gray-700 lg:w-[50vw] h-[90vh]  lg:left-[25%] top-[5%] md:w-[70vw] md:left-[15%] sm:w-[90vw] sm:left-[5%] bg-white z-50 shadow-2xl  shadow-gray-800 rounded-md border-t-[5px] border-primary-500 flex flex-col gap-3 justify-around items-center">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="focus:outline-none active:outline-none shadow-md shadow-primary-800 absolute right-1 top-1 w-[30px] h-[25px]"
        >
          <FaWindowClose className="absolute right-0 top-0  text-primary-300 w-[30px] h-[30px]" />
        </button>
        <div className="mx-auto flex flex-col justify-center items-center">
          <div className="w-[90%] h-[50px] flex justify-center items-center my-6">
            <p className="w-[50%] bg-gray-200 dark:bg-shadow-400 shadow-inner  p-2 rounded-lg text-[16px] ">
              Добавьте обьявлениe выполнив несколько простых шагов
            </p>
            <div>
              <Lottie
                loop
                animationData={animations}
                play
                style={{ width: 150, height: 150 }}
              />
            </div>
          </div>

          <div className="w-[90%] h-[50px] flex justify-between items-center">
            <span className="w-[30%] h-[3px] bg-primary-500"></span>
            <span className="text-[30px]">Step One</span>
            <span className="w-[30%] h-[3px] bg-primary-500"></span>
          </div>
        </div>
        <div className="h-fit">
          <div className="  w-72  h-[100px] ">
            <label className="block mb-2 text-sm font-bold text-green-600 dark:text-green-300">
              Выберите категорию вашего товара:
            </label>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg  py-2 pl-3 pr-10 text-left shadow-m sm:text-sm border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <span className="block truncate">{selected.name}</span>
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
                  <Listbox.Options className="absolute mt-1 max-h-[150px] w-full overflow-auto rounded-md bg-gray-50 dark:bg-gray-200 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {categories.map((el, elIdx) => (
                      <Listbox.Option
                        key={elIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
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
                              {el.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <FaCheck
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
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

            {/* <label htmlFor="countries" className="block mb-2 text-sm font-bold text-green-300">Выберите категорию вашего товара</label>
                    <select id="countries" className=" block w-full p-2.5 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500 rounded-lg">
                      <option value="cats" selected>Cats</option>
                      <option value="dogs">Dogs</option>
                      <option value="fish">Fishs</option>
                      <option value="rats">Rats</option>
                      <option value="birds">Birds</option>
                      <option value="hands">Good Hands</option>
                      <option value="acsesories">Acsesories</option>
                      <option value="food">Food</option>
                      <option value="farm">Farm Animals</option>
                    </select> */}
          </div>
        </div>

        <div className="w-[300px] flex flex-row-reverse justify-between">
          <button
            type="button"
            onClick={() => setCheck("stepTwo")}
            className="focus:outline-none active:outline-none  bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[150px] "
          >
            {"Next"}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none active:outline-none  bg-gradient-to-r from-primary-500 to-primary-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-primary-800    flex items-center justify-center text-center text-white  h-[40px] w-[100px] "
          >
            {t("back")}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
