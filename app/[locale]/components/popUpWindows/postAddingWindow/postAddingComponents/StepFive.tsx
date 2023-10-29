import React, { useRef, useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { postAddingState } from "../../../../../../store/postAddingState";
import Lottie from "react-lottie-player";
import animations from "../../../../../../public/animations/step5Animate.json";
import Link from "next/link";
import Image from "next/image";
import { BiCloudUpload, BiX } from "react-icons/bi";

const text = "Вы можете добавить до 5 фотографий  для вашего обьявления ";

export function StepFive() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const filePicker = useRef<HTMLInputElement>(null);

  const handlePick = () => {
    if (filePicker.current) {
      filePicker.current.click();
    }
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const updatedSelectedFiles = Array.from(files).slice(0, 5);

      setSelectedFiles((prevSelectedFiles) => {
        // Фильтруем уже существующие файлы из нового выбора
        const newFiles = updatedSelectedFiles.filter((newFile) =>
          prevSelectedFiles.every(
            (existingFile) => existingFile.name !== newFile.name
          )
        );

        // Объединяем новые файлы с существующими
        return [...prevSelectedFiles, ...newFiles].slice(0, 5);
      });
    }
  };

  const deleteHandler = (event: any) => {
    const newArray = selectedFiles.filter((el, index) => {
      return el.name !== event;
    });
    setSelectedFiles(newArray);
    console.log(newArray);
  };

  return (
    <div className="  w-72  h-[150px] ">
      <label className="block mb-2 text-sm font-bold text-green-600 dark:text-green-300">
        Загрузите фотографии:
      </label>
      <div className="flex justify-center items-center flex-col">
        <button
          onClick={handlePick}
          className="mt-4 cursor-pointer  focus:outline-none active:outline-none  bg-gradient-to-r from-gray-500 to-gray-400 rounded-full hover:contrast-125 duration-700  shadow-md shadow-gray-800    flex items-center justify-center text-center text-white   h-[40px] w-[180px]"
        >
          <BiCloudUpload className="text-2xl" />
          Выберите фото
        </button>
        <input
          className=" w-0 h-0 opacity-0 overflow-hidden "
          type="file"
          name="photo"
          ref={filePicker}
          onChange={handleFileSelect}
          accept="image/*,.jpg,.jpeg,.png"
          multiple
        />
      </div>
      {selectedFiles.length > 0 && (
        <div className="mt-2">
          <h2>Выбранные изображения:</h2>
          <div className="mt-4  w-[300px] h-[70px] bg-gray-300 dark:bg-gray-400 rounded-xl shadow-md  snap-center  overflow-y-hidden overflow-x-auto  no-scrollbar snap-x snap-mandatory scroll-smooth flex items-center gap-4">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="w-[60px] h-[60px]  flex justify-center items-center  snap-center"
              >
                <div className=" relative h-[60px] w-[60px] flex justify-center items-center">
                  <div
                    onClick={() => deleteHandler(file.name)}
                    className="absolute top-0 right-0 bg-primary-500 rounded-full  shadow-md text-red-800 text-xl font-bold"
                  >
                    <BiX />
                  </div>
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function StepFiveAnimate() {
  const check = postAddingState((state) => state.check);
  const setCheck = postAddingState((state) => state.setCheck);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: check === "stepFive" ? 1 : 0,
        // x: check === "stepOne" ? 0 : -1000,
      }}
      transition={{ duration: 0.5 }}
      className={`w-[90%] h-[50px] flex justify-center items-center my-6 `}
    >
      <motion.p className="w-[60%] bg-gray-200 dark:bg-gray-400 shadow-inner font-bold  p-2 rounded-lg  md:text-[16px] sm:text-[12px] ">
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
          style={{ width: 150, height: 150 }}
        />
      </div>
    </motion.div>
  );
}
