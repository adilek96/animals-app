"use client";
import React from "react";
import { motion } from "framer-motion";
import { postAddingState } from "../../../../../store/postAddingState";
import { FaWindowClose } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { StepOne, StepOneAnimate } from "./postAddingComponents/StepOne";
import { StepTwo, StepTwoAnimate } from "./postAddingComponents/StepTwo";
import { StepThree, StepThreeAnimate } from "./postAddingComponents/StepThree";
import { StepFour, StepFourAnimate } from "./postAddingComponents/StepFour";
import { StepFive, StepFiveAnimate } from "./postAddingComponents/StepFive";
import { AdsRegister } from "./postAddingComponents/AdsRegister";
import { newPostState } from "@/store/newPostState";

export function PostAddingWindow() {
  const t = useTranslations("PostAdding");

  const isOpen = postAddingState((state) => state.isOpen);
  const setIsOpen = postAddingState((state) => state.setIsOpen);

  const check = postAddingState((state) => state.check);
  const setCheck = postAddingState((state) => state.setCheck);

  // стэйт категорий
  const category = newPostState((state) => state.category);
  const setCategory = newPostState((state) => state.setCategory);
  //стэйт прививок
  const vaccinations = newPostState((state) => state.vaccinations);
  const setVaccinations = newPostState((state) => state.setVaccinations);
  //стэйт паспорта
  const passport = newPostState((state) => state.passport);
  const setPassport = newPostState((state) => state.setPassport);
  //стэйт родословной
  const pedigree = newPostState((state) => state.pedigree);
  const setPedigree = newPostState((state) => state.setPedigree);
  //стэйт названия
  const title = newPostState((state) => state.title);
  const setTitle = newPostState((state) => state.setTitle);
  //стэйт описания
  const description = newPostState((state) => state.description);
  const setDescription = newPostState((state) => state.setDescription);
  // стэйт выбора города
  const city = newPostState((state) => state.city);
  const setCity = newPostState((state) => state.setCity);
  // стэйт в добрые руки
  const isGoodHand = newPostState((state) => state.isGoodHands);
  const setGoodHands = newPostState((state) => state.setGoodHands);
  // стэйт прайса
  const price = newPostState((state) => state.price);
  const setPrice = newPostState((state) => state.setPrice);
  //стэйт завершения
  const isFinish = newPostState((state) => state.isFinish);
  const setIsFinish = newPostState((state) => state.setIsFinish);
  //cтэйт ошибки инпута
  const isError = newPostState((state) => state.isError);
  const setIsError = newPostState((state) => state.setIsError);
  //
  const isUpload = newPostState((state) => state.isUpload);
  const setIsUpload = newPostState((state) => state.setIsUpload);
  const downLoadUrl = newPostState((state) => state.downLoadUrl);
  const setDownLoadUrl = newPostState((state) => state.setDownLoadUrl);
  const selectedFiles = newPostState((state) => state.selectedFiles);
  const setSelectedFiles = newPostState((state) => state.setSelectedFiles);

  const stepHandler = () => {
    if (check === "stepOne") {
      return <StepOne />;
    } else if (check === "stepTwo") {
      return <StepTwo />;
    } else if (check === "stepThree") {
      return <StepThree />;
    } else if (check === "stepFour") {
      return <StepFour />;
    } else if (check === "stepFive") {
      return <StepFive />;
    } else if (check === "adsRegister") {
      return <AdsRegister />;
    }
  };

  const stepAnimateHandler = () => {
    if (check === "stepOne") {
      return <StepOneAnimate />;
    } else if (check === "stepTwo") {
      return <StepTwoAnimate />;
    } else if (check === "stepThree") {
      return <StepThreeAnimate />;
    } else if (check === "stepFour") {
      return <StepFourAnimate />;
    } else if (check === "stepFive") {
      return <StepFiveAnimate />;
    }
  };

  const nextHandler = () => {
    if (check === "stepOne") {
      return setCheck("stepTwo");
    } else if (check === "stepTwo") {
      if (title.length < 2) {
        setIsError(true);
      } else {
        setIsError(false);
        return setCheck("stepThree");
      }
    } else if (check === "stepThree") {
      if (description.length < 5) {
        setIsError(true);
      } else {
        setIsError(false);
        return setCheck("stepFour");
      }
    } else if (check === "stepFour") {
      return setCheck("stepFive");
    } else if (check === "stepFive") {
      return setCheck("adsRegister");
    }
  };

  const backHandler = () => {
    if (check === "stepOne") {
      return setIsOpen(!isOpen);
    } else if (check === "stepTwo") {
      return setCheck("stepOne");
    } else if (check === "stepThree") {
      return setCheck("stepTwo");
    } else if (check === "stepFour") {
      return setCheck("stepThree");
    } else if (check === "stepFive") {
      return setCheck("stepFour");
    }
  };

  const closingHandler = () => {
    setIsOpen(!isOpen);
    setCheck("stepOne");
    setTitle("");
    setVaccinations(false);
    setPassport(false);
    setPedigree(false);
    setCity("");
    setGoodHands(false);
    setPrice(0);
  };

  // const finishHandler = () => {
  //   if (isUpload && downLoadUrl.length === selectedFiles.length) {
  //     try {
  //       fetch("/api/posts", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           t: title,
  //           d: description,
  //           u: 1,
  //           c: category.saveType,
  //           v: vaccinations,
  //           pa: passport,
  //           pe: pedigree,
  //           ci: city,
  //           i: isGoodHand,
  //           pr: price,
  //         }),
  //       });
  //       setIsFinish(true);
  //     } catch (error) {
  //       setIsFinish(false);
  //     }
  //     nextHandler();
  //   }
  // };
  const finishHandler = () => {
    if (isUpload && downLoadUrl.length === selectedFiles.length) {
      fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          t: title,
          d: description,
          u: 1,
          c: category.saveType,
          v: vaccinations,
          pa: passport,
          pe: pedigree,
          ci: city,
          i: isGoodHand,
          pr: price,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json(); // Парсим JSON
        })
        .then(async (data) => {
          try {
            if (
              data &&
              data.result &&
              data.result.rows[0] &&
              data.result.rows[0].ad_id
            ) {
              const response = await fetch("/api/images", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ad_id: data.result.rows[0].ad_id,
                  image_url: downLoadUrl,
                }),
              });

              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }

              setIsFinish(true);
            } else {
              setIsFinish(false);
              console.error("Некорректный ответ от сервера");
            }
          } catch (error) {
            setIsFinish(false);
            console.error("Ошибка при отправке изображений:", error);
          }
        });

      nextHandler();
    }
  };

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
      <div className=" fixed dark:bg-gray-700 lg:w-[50vw] md:h-[90vh] sm:h-[85vh]  lg:left-[25%] top-[5%] md:w-[70vw] md:left-[15%] sm:w-[90vw] sm:left-[5%] bg-white z-50 shadow-2xl  shadow-gray-800 rounded-md border-t-[5px] border-primary-500 flex flex-col gap-3 justify-around items-center">
        <button
          onClick={closingHandler}
          className="focus:outline-none active:outline-none shadow-md shadow-primary-800 absolute right-1 top-1 w-[30px] h-[25px]"
        >
          <FaWindowClose className="absolute right-0 top-0 z-30  text-primary-300 w-[30px] h-[30px]" />
        </button>
        <div className=" absolute top-4 w-full mx-auto flex flex-col justify-center items-center">
          {stepAnimateHandler()}
          <div className="w-[95%] h-[50px]  flex justify-between items-center">
            <span className="md:w-[28%] sm:w-[25%] h-[3px]  bg-primary-500"></span>
            <span className="md:text-[24px] sm:text-[20px] text-center  font-bold ">
              {t(check)}
            </span>
            <span className="md:w-[28%] sm:w-[25%] h-[3px] bg-primary-500"></span>
          </div>
        </div>

        <div className="h-fit">{stepHandler()}</div>

        <div className="absolute bottom-7 w-[300px] flex justify-center">
          {check !== "adsRegister" ? (
            <div className=" bottom-7 w-[300px] flex flex-row-reverse justify-between">
              {check !== "stepFive" ? (
                <button
                  type="button"
                  onClick={() => nextHandler()}
                  className="focus:outline-none active:outline-none  bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-md shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[150px] "
                >
                  {t("nextStep")}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={finishHandler}
                  className="focus:outline-none active:outline-none  bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-md shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[150px] "
                >
                  {"Добавить"}
                </button>
              )}

              <button
                type="button"
                onClick={() => backHandler()}
                className={`focus:outline-none active:outline-none  bg-gradient-to-r from-primary-500 to-primary-400 rounded-full hover:contrast-125 duration-700  shadow-md shadow-primary-800 
               flex items-center justify-center text-center text-white  h-[40px] w-[100px] `}
              >
                {t("back")}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={closingHandler}
              className={`focus:outline-none active:outline-none  bg-gradient-to-r from-primary-500 to-primary-400 rounded-full hover:contrast-125 duration-700  shadow-md shadow-primary-800 
               flex items-center justify-center text-center text-white  h-[40px] w-[100px] `}
            >
              {"Завершить"}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
