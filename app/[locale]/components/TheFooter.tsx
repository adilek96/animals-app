import Image from "next/image";
import animalsLogo from "../../../public/logo/logo.png";
import Link from "next/link";
import { FaFacebook, FaTelegram, FaWhatsapp,FaPhone, FaMapPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md"

export function TheFooter() {
  const contact = "+994556263262";
  const email = "info@animals.al";
  return (
    <footer className="bg-white  overflow-hidden shadow-md-revers shadow-primary-900 box-content  h-fit  text-gray-800  items-center flex md:justify-between sm:justify-center content-center md:flex-row sm:flex-col px-12 border-t-[5px] border-primary-500 border-solid">
      <div className="w-[100vw]">
      <div className=" flex gap-3 items-center  md:flex-row sm:flex-col  mt-[30px] mb-[30px]">
  
          <Link href="/" >
            <Image
              className=""
              src={animalsLogo}
              width={130}
              height={130}
              alt="animalsLogo"
            ></Image>
          </Link>
      
          <p className="w-[300px] md:text-left sm:text-center">
            <b>Animals.AL</b> — Первая доска объявлений по поиску, продаже и покупке
            домашних животных в Азербайджане.
          </p>
          
          <div className="h-[300px]] flex justify-center flex-col mt-8 ">
          <p className="md:text-left sm:text-center">
              <b>Контакты:</b>
          </p>
         
          <ul className="list-none  pt-4 space-y-1">
         
              <li className=" hover:text-primary-500 ">
                <FaPhone className="inline text-2xl ml-1 text-gray-400 pt-1 font-extrabold"/>
                <a href={`tel:${contact}`}>{contact}</a>
              </li>
              <li className=" hover:text-primary-500 ">
                <MdEmail className="inline text-2xl ml-1 text-gray-400 pt-1 font-extrabold"/>
                <a href="{`mailto:${email}`}">{email}</a>
              </li>
              <li>
                <FaMapPin className="inline text-2xl ml-1 text-gray-400 pt-1 font-extrabold"/>
                Баку, Азербайджан
              </li>
              
          </ul>
          <div className="flex gap-3 pt-4 ">
            <Link href="https://t.me/zooazerbaijan">
              <span className=" hover:text-primary-500 text-2xl  text-gray-400  font-extrabold  ">
                <FaTelegram />
              </span>
            </Link>
            <Link href="https://www.facebook.com/groups/zooazerbaijan">
              <span className=" hover:text-primary-500 text-2xl  text-gray-400  font-extrabold">
                <FaFacebook />
              </span>
            </Link>
            <Link href="https://wa.me/994556263262">
              <span className=" hover:text-primary-500 text-2xl  text-gray-400  font-extrabold">
                <FaWhatsapp />
              </span>
            </Link>
          </div>
          </div>
      </div>
      
        <hr className="text-center mx-auto h-[2px] bg-gray-400 w-[70vw] rounded-full"/>
      <div className="flex  justify-center items-center text-sm h-[40px]">
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
      </div>
    
      
    </footer>
  );
}
