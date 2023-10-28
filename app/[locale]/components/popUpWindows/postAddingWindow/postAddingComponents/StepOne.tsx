import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { postAddingState } from "../../../../../../store/postAddingState";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import animations from "../../../../../../public/animations/dogAnimate.json";

const text = "Добавьте обьявлениe выполнив несколько простых шагов";

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

export function StepOne() {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <div className="  w-72  h-[100px] ">
      <label className="block mb-2 text-sm font-bold text-green-600 dark:text-green-300">
        Выберите категорию:
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
  );
}

export function StepOneAnimate() {
  const check = postAddingState((state) => state.check);
  const setCheck = postAddingState((state) => state.setCheck);
  return (
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
  );
}
