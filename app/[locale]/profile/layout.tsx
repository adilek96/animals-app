import type { Metadata } from "next";
import { ProfileTabs } from "../components/forProfile/ProfileTabs";

export const metadata: Metadata = {
  title: "Animals.Al",
  description: "Animals marketplace",
};

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProfileTabs />
      <section className=" bg-white dark:bg-gray-700 dark:shadow-gray-800 w-[95%] h-fit mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl">
        {children}
      </section>
    </>
  );
}
