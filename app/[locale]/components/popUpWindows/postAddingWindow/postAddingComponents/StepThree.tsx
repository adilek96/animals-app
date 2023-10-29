import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { postAddingState } from "../../../../../../store/postAddingState";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import animations from "../../../../../../public/animations/catAnimate.json";

export function StepThree() {
  const t = useTranslations("PostAdding");

  return (
    <div className="  w-72  h-[100px] mt-6 ">
      <label className="block mb-2 text-sm font-bold text-green-600 dark:text-green-300">
        {t("description")}
      </label>
      <textarea
        className="w-full h-[100px] rounded-lg  py-2 pl-3 pr-10 text-left shadow-m sm:text-sm border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={t("descPlaceholder")}
      />
    </div>
  );
}

export function StepThreeAnimate() {
  const check = postAddingState((state) => state.check);
  const t = useTranslations("PostAdding");
  const text = t("step3AnimateDesc");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: check === "stepThree" ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      className={`w-[90%] h-[50px] flex justify-center items-center my-6 `}
    >
      <motion.p className="w-[65%] bg-gray-200 dark:bg-gray-400 shadow-inner font-bold  p-2 rounded-lg  md:text-[16px] sm:text-[12px] ">
        <Link href="#">
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
        </Link>
      </motion.p>
      <div>
        <Lottie
          loop
          animationData={animations}
          play
          style={{ width: 120, height: 120 }}
        />
      </div>
    </motion.div>
  );
}
