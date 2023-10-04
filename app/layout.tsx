import { TheHeader } from "@/components/TheHeader";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { TheFooter } from "@/components/TheFooter";
import { BurgerMenu } from "@/components/BurgerMenu";
import {LogInWindow} from "@/components/popUpWindows/LogInWindow";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animals.Al",
  description: "Animals marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` h-full ${openSans.className}`}>
      <body className=" h-full overflow-x-hidden bg-gray-200">
        <TheHeader />
        <BurgerMenu/>
        <LogInWindow />
        <main >{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
