import { TheHeader } from "@/components/TheHeader";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { TheFooter } from "@/components/TheFooter";

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
    <html lang="en" className={openSans.className}>
      <body >
        <TheHeader />

        <main >{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
