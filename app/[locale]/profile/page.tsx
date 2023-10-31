import React from "react";
import { ProfileFhotoSection } from "../components/forProfile/ProfileFhotoSection";
import { ProfileInfo } from "../components/forProfile/ProfileInfo";

export default function Profile() {
  return (
    <section className=" backdrop:blur-lg bg-white/50 dark:bg-gray-200 dark:shadow-gray-800 w-full h-[600px] mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl flex  justify-center items-center ">
      <div className=" w-full flex justify-around  sm:flex-col-reverse md:flex-row">
        <ProfileInfo />
        <ProfileFhotoSection />
      </div>
    </section>
  );
}
