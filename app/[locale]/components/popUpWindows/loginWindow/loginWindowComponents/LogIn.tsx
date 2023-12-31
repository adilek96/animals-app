import React from "react";
import { FcGoogle } from "react-icons/fc";
import { logInModalActive } from "../../../../../../store/logInModalActive";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export function LogIn() {
  const toggle = logInModalActive((state) => state.toggle);
  const setToggle = logInModalActive((state) => state.setToggle);

  const t = useTranslations("LogInForms");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <>
      <button
        onClick={() => signIn("google", { callbackUrl })}
        className="focus:outline-none active:outline-none  bg-gradient-to-r from-primary-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[200px] "
      >
        <FcGoogle className="text-[80px]" />
        {t("googleButton")}
      </button>
      <p className="font-bold mt-3">{t("or")}</p>
      <form className="space-y-3 w-[300px] " action="#">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-700 dark:text-white"
          >
            {t("email")}
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 dark:text-white px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
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
            <div className="text-sm">
              <button
                type="button"
                onClick={() => setToggle("forgot")}
                className="font-semibold text-green-500 hover:text-green-700 "
              >
                {t("passRestore")}
              </button>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 dark:text-white px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex  justify-center">
          <button
            type="submit"
            className="mt-6 focus:outline-none active:outline-none  bg-gradient-to-r from-green-500 to-green-400 rounded-full hover:contrast-125 duration-700  shadow-xl shadow-green-800    flex items-center justify-center text-center text-white  h-[40px] w-[200px] "
          >
            {t("loginButton")}
          </button>
        </div>
      </form>
    </>
  );
}
