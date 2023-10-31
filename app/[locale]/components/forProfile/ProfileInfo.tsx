import React from "react";

export function ProfileInfo() {
  return (
    <div className="w-[50vw] h-[500px] bg-white dark:bg-gray-700 shadow-md  shadow-gray-400 rounded-2xl flex flex-col items-center justify-center">
      <form className="w-[35vw]" action="#">
        <div>
          <label
            htmlFor="email"
            className="block text-md font-medium leading-6 text-gray-700 dark:text-white"
          >
            Моя электронная почта:
          </label>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full h-[40px]  rounded-md border-0 py-1.5 dark:text-white px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-md font-medium leading-6 text-gray-700 dark:text-white"
          >
            Моё имя:
          </label>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="text"
              required
              className="block w-full h-[40px] rounded-md border-0 py-1.5  text-gray-900 dark:text-white px-2 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-md font-medium leading-6 text-gray-700 dark:text-white"
          >
            Мой телефон:
          </label>
          <div className="">
            <input
              id="phone"
              name="phone"
              type="phone"
              autoComplete="phone"
              required
              className="block w-full h-[40px] rounded-md border-0 py-1.5 dark:text-white px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
