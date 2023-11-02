"use client";
import React from "react";
import { motion } from "framer-motion";
import { logInModalActive } from "../../../store/logInModalActive";
import Lottie from "react-lottie-player";
import animations from "../../../public/animations/authAnimate.json";

export default function SignIn() {
  // стэйт вызова окна входа
  const loginModal = logInModalActive((state) => state.loginModal);
  const setLoginModalActive = logInModalActive(
    (state) => state.setLoginModalActive
  );
  return (
    <section className=" bg-white dark:bg-gray-700 dark:shadow-gray-800 md:w-[50%] sm:w-[95%] h-[300px] mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl flex justify-center flex-col items-center">
      <div className="w-[80%] mx-auto flex flex-col justify-center items-center ">
        {StepOneAnimate()}
      </div>
      <div className="flex  justify-center items-center">
        <button
          onClick={() => setLoginModalActive(!loginModal)}
          className="mt-6 focus:outline-none active:outline-none  bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-md shadow-green-800    flex items-center justify-center text-center text-white  h-[50px] w-[250px] "
        >
          {"Войти / Зарегистрироватся"}
        </button>
      </div>
    </section>
  );
}
export function StepOneAnimate() {
  // const t = useTranslations("PostAdding");
  const text =
    "Oooops... Для перехода на эту страницу вы должны быть зарегистрированы!";
  return (
    <>
      <motion.h2 className="w-[70%] bg-gray-200 dark:bg-gray-400 shadow-inner font-bold  p-2 rounded-lg  text-[18px]  ">
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
      </motion.h2>
      {/* <div>
        <Lottie
          loop
          animationData={animations}
          play
          style={{ width: 150, height: 150 }}
        />
      </div> */}
    </>
  );
}
