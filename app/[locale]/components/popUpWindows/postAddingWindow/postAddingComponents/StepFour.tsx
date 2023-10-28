import React from "react";

export function StepFour() {
  return (
    <div className="  w-72  h-[100px] ">
      <label className="block mb-2 text-sm font-bold text-green-600 dark:text-green-300">
        Загрузите фотографии:
      </label>
      <form className="flex justify-center items-center flex-col">
        <input
          className="w-full rounded-lg  py-2 pl-3 pr-10 text-left shadow-m sm:text-sm border border-gray-300  bg-gray-100 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring dark:focus:ring-primary-500 dark:focus:border-primary-500"
          type="file"
          name="photo"
          accept="image/*"
        />
        <input
          className="mt-4 cursor-pointer  focus:outline-none active:outline-none  bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-lg shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[150px]"
          type="submit"
          value="Загрузить"
        />
      </form>
    </div>
  );
}
