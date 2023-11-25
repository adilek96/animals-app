import React from "react";

interface OnClick {
  onClick: () => void;
}

export const ShowMoreButton: React.FC<OnClick> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" mx-auto  bg-gradient-to-r from-gray-500 to-gray-400 hover:contrast-125 duration-600 w-[120px] h-[30px]  text-[14px] rounded-lg flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white mb-7"
    >
      Показать еще
    </button>
  );
};
