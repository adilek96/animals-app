import React from "react";
import { GoodsCategory } from "../../components/forStore/GoodsCategory";

export default function Goods() {
  return (
    <>
      <section className="mt-9 w-full flex justify-center">
        <GoodsCategory />
      </section>
      <section className="  dark:bg-gray-700 dark:shadow-gray-800 bg-slate-50 md:w-[80%] sm:w-[95%] h-fit mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        quasi distinctio deserunt illum in tempore, at cupiditate fuga eius
        nobis eveniet non, ut impedit beatae necessitatibus aspernatur sequi
        quidem quia?
      </section>
    </>
  );
}
