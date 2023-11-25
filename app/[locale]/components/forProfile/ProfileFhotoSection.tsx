"use client";
import React, { useRef, useState, ChangeEvent } from "react";
import { BiCloudUpload } from "react-icons/bi";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function ProfileFhotoSection() {
  const t = useTranslations("PostAdding");
  const [selectedFiles, setSelectedFiles] = useState<File | undefined>(
    undefined
  );

  const filePicker = useRef<HTMLInputElement>(null);

  const handlePick = () => {
    if (filePicker.current) {
      filePicker.current.click();
    }
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFiles(file);
    }
  };
  return (
    <div className="w-[25vw] h-[200px] bg-white dark:bg-gray-700 shadow-md  shadow-gray-400 rounded-2xl flex flex-col items-center justify-center">
      <div className="w-[100px] h-[100px] flex items-center justify-center shadow-md shadow-orange-900 bg-primary-200 rounded-full border-collapse border-[3px] border-primary-500">
        <div
          //   onClick={() => setLoginModalActive(!loginModal)}
          className="w-[90px] h-[90px] flex items-center justify-center shadow-inner shadow-orange-900 bg-white rounded-full border-collapse border-[2px] border-primary-500"
        >
          <Image
            src={
              selectedFiles !== undefined
                ? URL.createObjectURL(new Blob([selectedFiles]))
                : "/logo/logo.png"
            }
            width={80}
            height={80}
            alt="prifile-photo"
          />
        </div>
        {/* // upload button */}
      </div>
      <button
        onClick={handlePick}
        className="mt-4 cursor-pointer  focus:outline-none active:outline-none  bg-gradient-to-r from-gray-500 to-gray-400 rounded-full hover:contrast-125 duration-700  shadow-md shadow-gray-800    flex items-center justify-center text-center text-white   h-[40px] w-[180px]"
      >
        <BiCloudUpload className="text-2xl" />
        {t("choseFoto")}
      </button>
      <input
        className=" w-0 h-0 opacity-0 overflow-hidden "
        type="file"
        name="photo"
        ref={filePicker}
        onChange={handleFileSelect}
        accept="image/*,.jpg,.jpeg,.png"
      />
    </div>
  );
}
