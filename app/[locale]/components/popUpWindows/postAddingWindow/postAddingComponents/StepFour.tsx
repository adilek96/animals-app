import React from "react";
import { Fragment, useState, ChangeEvent } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { postAddingState } from "../../../../../../store/postAddingState";
import Lottie from "react-lottie-player";
import animations from "../../../../../../public/animations/starAnimate.json";
import Link from "next/link";

interface cities {
  name: string;
}

const cities: cities[] = [
  { name: "Баку" },
  { name: "Гянджа" },
  { name: "Сумгаит" },
  { name: "Мингечаур" },
  { name: "Ширван" },
  { name: "Нахичеван" },
  { name: "Ленкорань" },
  { name: "Шеки" },
  { name: "Ялама" },
  { name: "Барда" },
  { name: "Габала" },
  { name: "Мардакерт" },
  { name: "Губа" },
  { name: "Саатлы" },
  { name: "Агдам" },
  { name: "Зангелан" },
  { name: "Агдаш" },
  { name: "Северный Газах" },
  { name: "Ханкенди" },
  { name: "Гаджи Гарагойнлу" },
  { name: "Горадиз" },
  { name: "Шамкир" },
  { name: "Бейлаган" },
  { name: "Агджабеди" },
  { name: "Бильгях" },
  { name: "Хачмас" },
  { name: "Астара" },
  { name: "Бабек" },
  { name: "Зардаб" },
  { name: "Бальяси" },
  { name: "Сабирабад" },
  { name: "Худат" },
  { name: "Гаджаллы" },
  { name: "Гойчай" },
  { name: "Ордубад" },
  { name: "Имишли" },
  { name: "Губадлы" },
  { name: "Агдам" },
  { name: "Кельбаджар" },
  { name: "Джебраил" },
  { name: "Физули" },
  { name: "Агдам" },
  { name: "Кубатлы" },
  { name: "Агсу" },
  { name: "Агтюбе" },
  { name: "Белоканы" },
  { name: "Биласувар" },
  { name: "Газах" },
  { name: "Гейчай" },
  { name: "Горган" },
  { name: "Губадли" },
  { name: "Гусар" },
  { name: "Джалилабад" },
  { name: "Исмаиллы" },
  { name: "Казах" },
  { name: "Кюрдамир" },
  { name: "Масаллы" },
  { name: "Набран" },
  { name: "Огуз" },
  { name: "Самух" },
  { name: "Сарур" },
  { name: "Сиазань" },
  { name: "Тертер" },
  { name: "Уджары" },
  { name: "Хызы" },
  { name: "Чардаглар" },
  { name: "Шамахы" },
  { name: "Ярдымлы" },
];

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem enim perspiciatis repellat odit illo deserunt";

export function StepFour() {
  const [selected, setSelected] = useState(cities[0]);
  const [isGoodHand, setGoodHands] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const text =
    "Внимание! При выборе 'В добрые руки' вы не можете устанавливать цену";

  const handsHandler = () => {
    setGoodHands(!isGoodHand);
    if (!isGoodHand) {
      setInputValue("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <div className="  w-72  h-[100px] ">
      <label className="block mb-2 text-sm font-bold text-green-600 dark:text-green-300">
        Дополнительная информация:
      </label>
      <div>
        <label
          htmlFor="city"
          className="flex justify-between items-center mb-2 text-sm font-bold text-green-600 dark:text-green-300"
        >
          Город:
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-[170px] cursor-default rounded-lg  py-2 pl-3 pr-10 text-left shadow-m sm:text-sm border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500">
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
                <Listbox.Options className="absolute z-20 mt-1 max-h-[150px] w-full overflow-auto rounded-md bg-gray-50 dark:bg-gray-200 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {cities.map((el, elIdx) => (
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
        </label>
      </div>
      <div>
        <label
          htmlFor="hands"
          className="flex justify-between items-center mt-4 mb-2 text-sm font-bold text-green-600 dark:text-green-300"
        >
          В добрые руки:
          <input
            id="hands"
            type="checkbox"
            onChange={() => handsHandler()}
            className=" w-[20px] h-[20px] shadow-m  border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500"
          ></input>
        </label>
      </div>
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isGoodHand ? 1 : 0,
          height: isGoodHand ? 50 : 0,
        }}
        transition={{ duration: 0.1 }}
        className="cursor-default w-[100%] mt-3 bg-gray-200 dark:bg-gray-400 shadow-inner font-bold  p-2 rounded-lg text-red-800 md:text-[12px] sm:text-[10px] "
      >
        {text}
      </motion.p>
      <div>
        <label
          htmlFor="price"
          className={`flex justify-between items-center mt-4 mb-2 text-sm font-bold text-green-600 dark:text-green-300 ${
            isGoodHand ? "line-through decoration-black decoration-4" : ""
          }`}
        >
          Цена:
          <input
            type="number"
            min="0"
            id="price"
            disabled={isGoodHand}
            value={inputValue}
            onChange={handleInputChange}
            className="w-[80px] rounded-lg  py-2 pl-3 pr-2 text-left shadow-m sm:text-sm border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
        </label>
      </div>
    </div>
  );
}

export function StepFourAnimate() {
  const check = postAddingState((state) => state.check);
  const setCheck = postAddingState((state) => state.setCheck);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: check === "stepFour" ? 1 : 0,
        // x: check === "stepOne" ? 0 : -1000,
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
          style={{ width: 170, height: 170 }}
        />
      </div>
    </motion.div>
  );
}
