import Image from "next/image";
import animalsLogo from "../public/logo/logo.png";
import fb from "../public/apps/fb.png";
import Link from "next/link";

export function TheFooter() {
  const contact = "+994556263262";
  const email = "info@animals.al";
  return (
    // <footer className="h-[30%] p-[5%]">
    //   Created with honor by &copy;<a href="tabs.me">Tabs.me</a> and &copy;
    //   <a href="kemikable.com">kemikable.com</a>
    // </footer>
    <footer>
      <div className="flex justify-center  mt-[3%]">
        <div className="flex gap-[5%]">
          <Link href="/">
            <Image
              src={animalsLogo}
              width={150}
              height={150}
              alt="animalsLogo"
            ></Image>
          </Link>

          <p className="w-[15%] pt-2  text-[17px]">
            Animals.AL — Первая доска объявлений по поиску, продаже и покупке
            домашних животных в Азербайджане
          </p>
          <div className="mt-2">
            <p className=" text-[22px] font-semibold">Контакты:</p>
            <ul className="list-none pt-4 space-y-1">
              <li className=" hover:text-yellow-300">
                <Link href="/about">О нас</Link>
              </li>
              <li className=" hover:text-yellow-300">
                <a href={`tel:${contact}`}>{contact}</a>
              </li>
              <li className=" hover:text-yellow-300">
                <a href="{`mailto:${email}`}">{email}</a>
              </li>
              <li>Баку, Азербайджан</li>
            </ul>
          </div>
        </div>

        <div className="ml-[-15%]">
          <p className="text-[24px] font-semibold mb-7">
            Найди нас в социальных сетях:
          </p>
          <Link href="/">
            <Image src={fb} width={50} height={50} alt="fb"></Image>
          </Link>
        </div>
      </div>
      <div className="flex mt-[3%] justify-center">
        Created with honor by &copy;{" "}
        <a
          className=" hover:text-yellow-300 font-bold"
          href="https://www.tabs.me"
        >
          Tabs.me{" "}
        </a>
        &nbsp; and &nbsp; &copy;
        <a
          className=" hover:text-yellow-300 font-bold"
          href="https://www.kemikable.com"
        >
          kemikable.com
        </a>
      </div>
    </footer>
  );
}
