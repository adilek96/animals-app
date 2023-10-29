import React from "react";
import Link from "next/link";

import { postAddingState } from "../../../../../../store/postAddingState";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import animations from "../../../../../../public/animations/owlAnimate.json";
import { useTranslations } from "next-intl";

export function StepTwo() {
  const t = useTranslations("PostAdding");
  const text2 = t("step2Desc");

  return (
    <div className="  w-72  h-[120px] mt-6 ">
      <label className="block mb-2 text-sm font-bold text-green-600 dark:text-green-300">
        {t("aName")}
      </label>
      <input
        type="text"
        className="w-full rounded-lg  py-2 pl-3 pr-10 text-left shadow-m sm:text-sm border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={t("nameDesc")}
      />
      <motion.p className="cursor-default w-[100%] mt-3 bg-gray-200 dark:bg-gray-400 shadow-inner font-bold  p-2 rounded-lg text-red-800 md:text-[12px] sm:text-[10px] ">
        {text2}
      </motion.p>
    </div>
  );
}

export function StepTwoAnimate() {
  const check = postAddingState((state) => state.check);

  const t = useTranslations("PostAdding");
  const text = t("step2AnimateDesc");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: check === "stepTwo" ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      className={`w-[80%] h-[50px] flex justify-center items-center my-6 `}
    >
      <div>
        <Lottie
          loop
          animationData={animations}
          play
          style={{ width: 150, height: 150 }}
        />
      </div>

      <motion.p className="w-[65%] bg-gray-200 dark:bg-gray-400 shadow-inner font-bold  p-2 rounded-lg  md:text-[16px] sm:text-[12px] ">
        <Link href="#">
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
        </Link>
      </motion.p>
    </motion.div>
  );
}
