import type { Metadata } from "next";
import { TheCategories } from "../components/TheCategories";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Animals.Al",
  description: "Animals marketplace",
};

export default async function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="mt-9 mx-auto w-[98%]">
        <TheCategories />
      </section>
      <section className="  dark:bg-gray-700 dark:shadow-gray-800 bg-slate-50 w-[80%] h-fit mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl">
        {children}
      </section>
    </>
  );
}
