import { TheHeader } from "@/app/[locale]/components/TheHeader";
import "../globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { TheFooter } from "@/app/[locale]/components/TheFooter";
import { BurgerMenu } from "@/app/[locale]/components/BurgerMenu";
import { LogInWindow } from "@/app/[locale]/components/popUpWindows/loginWindow/LogInWindow";
import { Settings } from "@/app/[locale]/components/Settings";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Providers from "./providers";
import { CategoryWindow } from "@/app/[locale]/components/popUpWindows/categoryWindow/CategoryWindow";
import { TheSearchPanel } from "./components/TheSearchPanel";
import { PostAddingWindow } from "./components/popUpWindows/postAddingWindow/PostAddingWindow";
import { searchState } from "@/store/seachState";

const openSans = Open_Sans({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }, { locale: "az" }];
}

export const metadata: Metadata = {
  title: "Animals.Al",
  description: "Animals marketplace",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;

  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={params.locale}
      className={` h-full flex justify-center  ${openSans.className}`}
    >
      <body className="max-w-12xl w-[100vw] h-full relative overflow-x-hidden bg-gray-200 dark:bg-gray-800 scroll-smooth">
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Providers>
            <TheHeader />
            <BurgerMenu />
            <LogInWindow />
            <section className=" mt-9 mx-auto w-[95%] z-10">
              <TheSearchPanel />
            </section>
            <PostAddingWindow />
            <CategoryWindow />
            <Settings />
            <main>{children}</main>
            <TheFooter />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
