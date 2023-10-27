"use client";
import React from "react";
import { motion } from "framer-motion";
import { postAddingState } from "../../../../../store/postAddingState";
import { FaWindowClose } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { StepOne } from "./postAddingComponents/StepOne";
// import { Fragment, useState } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import { FaChevronDown, FaCheck } from "react-icons/fa";
import Lottie from "react-lottie-player";
import animations from "../../../../../public/animation.json";
import { StepTwo } from "./postAddingComponents/StepTwo";

export function PostAddingWindow() {
  // const [selected, setSelected] = useState(categories[0]);

  const t = useTranslations("LogInForms");

  const isOpen = postAddingState((state) => state.isOpen);
  const setIsOpen = postAddingState((state) => state.setIsOpen);

  const check = postAddingState((state) => state.check);
  const setCheck = postAddingState((state) => state.setCheck);

  const text = "Добавьте обьявлениe выполнив несколько простых шагов";

  const stepHandler = () => {
    if (check === "stepOne") {
      return <StepOne />;
    } else if (check === "stepTwo") {
      return <StepTwo />;
    }
  };

  if (isOpen)
    return (
      <motion.div
        initial={{ opacity: 0, y: -1000 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -1000,
        }}
        transition={{ duration: 0.5 }}
        className=" fixed w-screen backdrop-blur-lg inset-0 z-40"
      >
        <div className=" fixed dark:bg-gray-700 lg:w-[50vw] md:h-[90vh] sm:h-[80vh]  lg:left-[25%] top-[5%] md:w-[70vw] md:left-[15%] sm:w-[90vw] sm:left-[5%] bg-white z-50 shadow-2xl  shadow-gray-800 rounded-md border-t-[5px] border-primary-500 flex flex-col gap-3 justify-around items-center">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="focus:outline-none active:outline-none shadow-md shadow-primary-800 absolute right-1 top-1 w-[30px] h-[25px]"
          >
            <FaWindowClose className="absolute right-0 top-0 z-30  text-primary-300 w-[30px] h-[30px]" />
          </button>
          <div className=" absolute top-4 mx-auto flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: check === "stepOne" ? 1 : 0,
                x: check === "stepOne" ? 0 : -1000,
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
                    transition={{ duration: 0.1, delay: index * 0.1 }}
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
            <div className="w-[90%] h-[50px]  flex justify-between items-center">
              <span className="md:w-[30%] sm:w-[25%] h-[3px] bg-primary-500"></span>
              <span className="text-[30px]  font-bold ">Step One</span>
              <span className="md:w-[30%] sm:w-[25%] h-[3px] bg-primary-500"></span>
            </div>
          </div>

          <div className="h-fit">{stepHandler()}</div>

          <div className="absolute bottom-7 w-[300px] flex flex-row-reverse justify-between">
            <button
              type="button"
              onClick={() => setCheck("stepTwo")}
              className="focus:outline-none active:outline-none  bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-lg shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[150px] "
            >
              {"Next"}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none active:outline-none  bg-gradient-to-r from-primary-500 to-primary-400 rounded-full hover:contrast-125 duration-700  shadow-lg shadow-primary-800    flex items-center justify-center text-center text-white  h-[40px] w-[100px] "
            >
              {t("back")}
            </button>
          </div>
        </div>
      </motion.div>
    );
}
