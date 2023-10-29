import React from "react";
import { useTranslations } from "next-intl";

export function SignIn() {
  const t = useTranslations("LogInForms");

  return (
    <form className="space-y-1 w-[300px]  " action="#">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-700 dark:text-white"
        >
          {t("email")}
        </label>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-700 dark:text-white"
        >
          {t("name")}
        </label>
        <div>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium leading-6 text-gray-700 dark:text-white"
        >
          {t("phone")}
        </label>
        <div className="">
          <input
            id="phone"
            name="phone"
            type="phone"
            autoComplete="phone"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between ">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-700 dark:text-white"
          >
            {t("password")}
          </label>
        </div>

        <div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between ">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-700 dark:text-white"
          >
            {t("passRetry")}
          </label>
        </div>

        <div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="flex  justify-center ">
        <button
          type="submit"
          className=" mt-6 focus:outline-none active:outline-none  bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[200px]  "
        >
          {t("registrButton")}
        </button>
      </div>
    </form>
  );
}
