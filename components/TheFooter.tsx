import Image from "next/image";
import animalsLogo from "../public/logo/logo.png";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa6";

export function TheFooter() {
  const contact = "+994556263262";
  const email = "info@animals.al";
  return (
    <footer>
      <div className="flex justify-center  mt-[3%] ml-[3%]">
        <div className="flex gap-[5%]">
          <Link href="/">
            <Image
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
            <p className=" xl:text-[140%] lg:text-[120%]  md:text-[100%] sm:text-[80%] font-semibold">
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
              <span className="xl:text-[180%] lg:text-[160%]  md:text-[140%] sm:text-[120%]">
                <FaTelegram />
              </span>
            </Link>
            <Link href="https://www.facebook.com/groups/zooazerbaijan">
              <span className="xl:text-[180%] lg:text-[160%]  md:text-[140%] sm:text-[120%]">
                <FaFacebook />
              </span>
            </Link>
            <Link href="https://wa.me/994556263262">
              <span className="xl:text-[180%] lg:text-[160%]  md:text-[140%] sm:text-[120%]">
                <FaWhatsapp />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mt-[3%] justify-center xl:text-[120%] lg:text-[100%]  md:text-[80%] sm:text-[60%]">
        Created with honor by &copy;{" "}
        <a
          className=" hover:text-primary-500 font-bold"
          href="https://www.tabs.me"
        >
          Tabs.me{" "}
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
