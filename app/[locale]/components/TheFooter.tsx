import Image from "next/image";
import animalsLogo from "../../../public/logo/logo.png";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa6";

export function TheFooter() {
  const contact = "+994556263262";
  const email = "info@animals.al";
  return (
    <footer className="bg-white  overflow-hidden shadow-[12px_12px_50px_25px_rgb(0,0,0,0.25)] shadow-primary-900 box-border w-[100%] h-[350px] text-gray-800   border-t-[5px] border-primary-500 border-solid">
      <div className="flex justify-center items-center h-[80%] ">
        <div className="flex ">
          <Link href="/">
            <Image
              className="hidden md:block xl:w-[120%] lg:w-[100%] md:w-[80%] sm:w-[60%]"
              src={animalsLogo}
              width={150}
              height={150}
              alt="animalsLogo"
            ></Image>
          </Link>

          <p className="w-[15%] pt-2 xl:text-[120%] lg:text-[100%]  md:text-[80%] sm:text-[60%]">
            Animals.AL — Первая доска объявлений по поиску, продаже и покупке
            домашних животных в Азербайджане
          </p>
          <div className="mt-2">
            <p className=" xl:text-[120%] lg:text-[100%]  md:text-[80%] sm:text-[60%] font-semibold">
              Контакты:
            </p>
            <ul className="list-none pt-4 space-y-1">
              <li className=" hover:text-primary-500 xl:text-[120%] lg:text-[100%]  md:text-[80%] sm:text-[60%]">
                <Link href="/about">О нас</Link>
              </li>
              <li className=" hover:text-primary-500 xl:text-[120%] lg:text-[100%]  md:text-[80%] sm:text-[60%]">
                <a href={`tel:${contact}`}>{contact}</a>
              </li>
              <li className=" hover:text-primary-500 xl:text-[120%] lg:text-[100%]  md:text-[80%] sm:text-[60%]">
                <a href="{`mailto:${email}`}">{email}</a>
              </li>
              <li className="xl:text-[120%] lg:text-[100%]  md:text-[80%] sm:text-[60%]">
                Баку, Азербайджан
              </li>
            </ul>
          </div>
        </div> 

       <div className="ml-[-40%]">
          <p className="xl:text-[120%] lg:text-[100%]  md:text-[80%] sm:text-[60%] font-semibold mb-7 mr-3">
            Найди нас в социальных сетях:
          </p>
          <div className="flex gap-3">
            <Link href="https://t.me/zooazerbaijan">
              <span className="xl:text-[180%] lg:text-[160%]  md:text-[140%] sm:text-[120%] hover:text-primary-500">
                <FaTelegram />
              </span>
            </Link>
            <Link href="https://www.facebook.com/groups/zooazerbaijan">
              <span className="xl:text-[180%] lg:text-[160%]  md:text-[140%] sm:text-[120%] hover:text-primary-500">
                <FaFacebook />
              </span>
            </Link>
            <Link href="https://wa.me/994556263262">
              <span className="xl:text-[180%] lg:text-[160%]  md:text-[140%] sm:text-[120%] hover:text-primary-500">
                <FaWhatsapp />
              </span>
            </Link>
          </div>
        </div>
      </div>
   
        <hr className="text-center mx-auto border-t-[3px] w-[60vw]"/>
      <div className="flex  justify-center items-center     md:text-[80%] sm:text-[60%]">
        Created with honor by &copy;
        <a
          className=" hover:text-primary-500  font-bold"
          href="https://www.tabs.me"
        >
          Tabs.me
        </a>
        &nbsp; and &nbsp; &copy;
        <a
          className=" hover:text-primary-500 font-bold"
          href="https://www.kemikable.com"
        >
          kemikable.com
        </a>
      </div>
      
    </footer>
  );
}