"use client";
import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { postAddingState } from "../../../../../../store/postAddingState";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import animations from "../../../../../../public/animations/dogAnimate.json";
import { useTranslations } from "next-intl";
import { newPostState } from "@/store/newPostState";

interface Category {
  name: string;
  type: string | undefined;
  saveType: string;
}

export function StepOne() {
  const c = useTranslations("Categories");
  const categories: Category[] = [
    { name: c("cats"), type: "cats", saveType: "cats" },
    { name: c("dogs"), type: "dogs", saveType: "dogs" },
    { name: c("birds"), type: undefined, saveType: "birds" },
    { name: c("fishs"), type: undefined, saveType: "fishs" },
    { name: c("rodents"), type: undefined, saveType: "rodents" },
    { name: c("food"), type: undefined, saveType: "food" },
    { name: c("acsesories"), type: undefined, saveType: "acsesories" },
    { name: c("farmAnimals"), type: undefined, saveType: "farmAnimals" },
  ];

  // стэйт категорий
  const category = newPostState((state) => state.category);
  const setCategory = newPostState((state) => state.setCategory);
  //стэйт прививок
  const [vacSelected, setVacSelected] = useState<boolean>(false);
  const vaccinations = newPostState((state) => state.vaccinations);
  const setVaccinations = newPostState((state) => state.setVaccinations);
  //стэйт паспорта
  const [pasSelected, setPasSelected] = useState<boolean>(false);
  const passport = newPostState((state) => state.passport);
  const setPassport = newPostState((state) => state.setPassport);
  //стэйт родословной
  const [pedSelected, setPedSelected] = useState<boolean>(false);
  const pedigree = newPostState((state) => state.pedigree);
  const setPedigree = newPostState((state) => state.setPedigree);

  const t = useTranslations("PostAdding");

  useEffect(() => {
    if (category.name === "") setCategory(categories[0]);
  }, []);

  const vacHandler = (e: any) => {
    if (e.target.id === "vac") {
      if (vaccinations === false) {
        setVaccinations(true);
      } else {
        setVaccinations(false);
      }
      setVacSelected(!vacSelected);
    } else if (e.target.id === "passport") {
      if (passport === false) {
        setPassport(true);
      } else {
        setPassport(false);
      }
      setPasSelected(!pasSelected);
    } else if (e.target.id === "pedigree") {
      if (pedigree === false) {
        setPedigree(true);
      } else {
        setPedigree(false);
      }
      setPedSelected(!pedSelected);
    }
  };

  return (
    <div className="  w-72  h-[130px] ">
      <label className="block mb-2 text-sm font-bold text-green-600 dark:text-green-300">
        {t("selectCategory")}
      </label>
      <Listbox value={category} onChange={setCategory}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg  py-2 pl-3 pr-10 text-left shadow-m sm:text-sm border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <span className="block truncate">{category.name}</span>
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
                        {el.name}
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

      <div
        className={`${
          category.type === "cats" || category.type === "dogs" ? "" : "hidden"
        }`}
      >
        <div>
          <label
            htmlFor="vac"
            className="flex justify-between items-center mt-4 mb-2 text-sm font-bold text-green-600 dark:text-green-300"
          >
            {t("vaccinations")}
            <input
              id="vac"
              type="checkbox"
              checked={vacSelected}
              onChange={vacHandler}
              className=" w-[20px] h-[20px] shadow-m  border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500"
            ></input>
          </label>
        </div>
        <div>
          <label
            htmlFor="passport"
            className="flex justify-between items-center mt-4 mb-2 text-sm font-bold text-green-600 dark:text-green-300"
          >
            {t("passport")}
            <input
              id="passport"
              type="checkbox"
              checked={pasSelected}
              onChange={vacHandler}
              className=" w-[20px] h-[20px] shadow-m  border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500"
            ></input>
          </label>
        </div>
        <div>
          <label
            htmlFor="rod"
            className="flex justify-between items-center mt-4 mb-2 text-sm font-bold text-green-600 dark:text-green-300"
          >
            {t("pedigree")}
            <input
              id="pedigree"
              type="checkbox"
              checked={pedSelected}
              onChange={vacHandler}
              className=" w-[20px] h-[20px] shadow-m  border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500"
            ></input>
          </label>
        </div>
      </div>
    </div>
  );
}

export function StepOneAnimate() {
  const check = postAddingState((state) => state.check);
  const setCheck = postAddingState((state) => state.setCheck);
  const t = useTranslations("PostAdding");
  const text = t("step1AnimateDesc");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: check === "stepOne" ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      className={`w-[90%] h-[50px] flex justify-center items-center my-6 `}
    >
      <motion.p className="w-[50%] bg-gray-200 dark:bg-gray-400 shadow-inner font-bold  p-2 rounded-lg  md:text-[16px] sm:text-[12px] ">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.05, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
      <div>
        <Lottie
          loop
          animationData={animations}
          play
          style={{ width: 150, height: 150 }}
        />
      </div>
    </motion.div>
  );
}
