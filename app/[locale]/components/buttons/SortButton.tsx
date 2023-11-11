import React from "react";
import { BiSort } from "react-icons/bi";

interface OnClick {
  onClick: () => void;
}

export const SortButton: React.FC<OnClick> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" justify-self-end bg-gradient-to-r from-green-500 to-green-400 hover:contrast-125 duration-600 md:w-[120px] sm:w-[40px] h-[30px]  text-[14px] rounded-lg flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white mb-3 mt-2 mr-2"
    >
      <span className="sm:hidden md:block">Cортировка</span>
      <BiSort />
    </button>
  );
};
