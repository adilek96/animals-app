import { TheHeader } from "@/app/[locale]/components/TheHeader";
import "../globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { TheFooter } from "@/app/[locale]/components/TheFooter";
import { BurgerMenu } from "@/app/[locale]/components/BurgerMenu";
import { LogInWindow } from "@/app/[locale]/components/popUpWindows/LogInWindow";
import { NextIntlClientProvider } from "next-intl";

import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';


const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animals.Al",
  description: "Animals marketplace",
};

export default async function RootLayout({children, params}: {children: React.ReactNode; params: {locale:string}}) {
 

  const locale = useLocale();

  let messages;
  
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  if(params.locale !== locale){
    notFound();
  }
  return (
    <html lang={locale} className={` h-full ${openSans.className}`}>
      <body className=" h-full overflow-x-hidden bg-gray-200">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TheHeader />
          <BurgerMenu/>
          <LogInWindow />
          <main >{children}</main>
          <TheFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
