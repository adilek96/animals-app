"use client";
import React, { useEffect } from "react";
import { newPostState } from "@/store/newPostState";

export function AdsRegister() {
  // стэйт категорий
  const category = newPostState((state) => state.category);
  //стэйт прививок
  const vaccinations = newPostState((state) => state.vaccinations);
  //стэйт паспорта
  const passport = newPostState((state) => state.passport);
  //стэйт родословной
  const pedigree = newPostState((state) => state.pedigree);
  //стэйт названия
  const title = newPostState((state) => state.title);
  //стэйт описания
  const description = newPostState((state) => state.description);
  // стэйт выбора города
  const city = newPostState((state) => state.city);
  // стэйт в добрые руки
  const isGoodHand = newPostState((state) => state.isGoodHands);
  // стэйт прайса
  const price = newPostState((state) => state.price);
  //стэйт завершения
  const isFinish = newPostState((state) => state.isFinish);

  return (
    <div className="flex justify-center items-center">
      {isFinish ? "ads has been added!" : "error!"}
    </div>
  );
}
