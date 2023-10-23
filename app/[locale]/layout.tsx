import { TheHeader } from "@/app/[locale]/components/TheHeader";
import "../globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { TheFooter } from "@/app/[locale]/components/TheFooter";
import { BurgerMenu } from "@/app/[locale]/components/BurgerMenu";
import { LogInWindow } from "@/app/[locale]/components/popUpWindows/loginWindow/LogInWindow";
import { Settings } from "@/app/[locale]/components/Settings";
import { NextIntlClientProvider } from "next-intl";
import {notFound} from 'next/navigation';
import Providers from "./providers";
import { CategoryWindow } from "@/app/[locale]/components/popUpWindows/categoryWindow/CategoryWindow";



const openSans = Open_Sans({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ru'}, {locale: 'az'}];
}


export const metadata: Metadata = {
  title: "Animals.Al",
  description: "Animals marketplace",
};

export default async function RootLayout({children, params}: {children: React.ReactNode; params: {locale:string}}) {
 



  let messages;
  
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }


  return (
    <html lang={params.locale} className={` h-full flex justify-center  ${openSans.className}`}>
     
      <body className="max-w-7xl h-full relative overflow-x-hidden bg-gray-200 dark:bg-gray-800 scroll-smooth">
        <NextIntlClientProvider locale={params.locale} messages={messages}>
        <Providers>
            <TheHeader />
            <BurgerMenu/>
            <LogInWindow />
            <CategoryWindow />
            <Settings/>
            <main>{children}</main>
            {/* <TheBottomMenu/> */}
            <TheFooter />
            </Providers>
        </NextIntlClientProvider>
      </body>
      
    </html>
  );
}
