import type { Metadata } from "next";
import { TheCategories } from "../components/TheCategories";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { StoreTabs } from "../components/forStore/StoreTabs";

export const metadata: Metadata = {
  title: "Zoo.Do - Магазины",
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
        <StoreTabs />
      </section>

      <section>{children}</section>
    </>
  );
}
