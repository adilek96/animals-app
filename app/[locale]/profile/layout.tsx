import type { Metadata } from "next";
import { ProfileTabs } from "../components/forProfile/ProfileTabs";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Animals.Al",
  description: "Animals marketplace",
};

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <ProfileTabs />
      <section className="  dark:bg-gray-700 dark:shadow-gray-800 w-[95%] h-fit mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl">
        {children}
      </section>
    </>
  );
}
