import { db } from "@vercel/postgres";
import { Suspense } from "react";
import { Metadata } from "next";
import Loading from "../../loading";
import Link from "next/link";
import Image from "next/image";
import { UserConnection } from "../../components/UserConnection";
import { StarRaiting } from "../../components/forStore/StartRaiting";
import { FaLocationDot } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { FcCancel, FcCheckmark } from "react-icons/fc";
import { RiSecurePaymentFill } from "react-icons/ri";

interface Store {
  store_id: number;
  user_id: number;
  name: string;
  location: string;
  raiting: number;
  shipping: boolean;
  info: string;
  phone: number;
  logo_url: string;
  city: string;
  isvip: boolean;
  whatsapp: boolean;
  cashless: boolean;
  taxsit: boolean;
}

export async function generateMetadata({
  params,
}: {
  params: { storePage: number };
}): Promise<Metadata> {
  const store: Store | null = await getData(+params.storePage);
  if (!store) {
    return {
      title: "Zoo.Do",
      description: "Animals marketplace",
    };
  }

  return {
    title: store.name,
    description: "Animals marketplace",
  };
}

async function getData(store: number): Promise<Store | null> {
  const client = await db.connect();
  try {
    let query: string = "SELECT * FROM stores WHERE stores.store_id = $1";

    const result = await client.query(query, [store]);

    return result.rows[0] || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  } finally {
    client.release();
  }
}

export default async function Store({
  params,
}: {
  params: { storePage: number };
}) {
  const store = await getData(+params.storePage);

  if (!store) {
    return <div>Not Found</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <section className=" cursor-default dark:bg-gray-700 dark:shadow-gray-800 bg-slate-100 p-[3%] h-fit mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl">
        <div className="dark:bg-gray-600 dark:shadow-gray-700 bg-slate-200 p-[3%] h-fit mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl  flex flex-col gap-4 items-center">
          {/* Лого и имя */}
          <div className="flex md:flex-row justify-center gap-5 items-center  sm:flex-col">
            <div className="relative w-[150px] h-[150px]">
              <Image
                className="rounded-lg"
                src={store.logo_url}
                fill={true}
                objectFit="fill"
                alt="logo"
              />
            </div>
            <div>
              <h1 className="text-2xl">{store.name}</h1>
              <div className="w-[90%] h-[20px] flex text-lg gap-1 text-yellow-400 mt-5">
                <StarRaiting raiting={store.raiting} />
              </div>
              <Link
                href={`https://www.openstreetmap.org/search?query=${store.location}`}
              >
                <p className="md:text-[14px] sm:text-[12px] text-gray-400 mt-2">
                  <FaLocationDot className="inline" />
                  {store.city},<span>{store.location}</span>
                </p>
              </Link>
            </div>
          </div>

          {/* Контакты */}
          <div className="flex md:flex-row justify-center gap-5 items-center  sm:flex-col">
            <UserConnection phone_number={[store.phone, store.whatsapp]} />
          </div>

          {/* Описание */}
          <div className="w-[80%]  dark:bg-gray-500 dark:shadow-gray-600 bg-slate-300 p-5 rounded-lg flex md:flex-row justify-center gap-5 items-center  sm:flex-col">
            <p>{store.info}</p>
          </div>

          {/* Дополнительня информация  */}
          <div className="w-[80%]  dark:bg-gray-500 dark:shadow-gray-600 bg-slate-300 p-5 rounded-lg flex md:flex-row justify-center gap-5 items-center  sm:flex-col">
            <ul className="w-full">
              <li className="w-[90%] h-[20px] flex justify-between">
                <span>
                  <TbTruckDelivery className="inline text-xl text-gray-900 mr-1" />
                  Доставка:
                </span>
                <span>
                  {store.shipping ? (
                    <FcCheckmark className="inline text-lg " />
                  ) : (
                    <FcCancel className="inline text-lg " />
                  )}
                </span>
              </li>
              <li className="w-[90%] h-[20px] flex justify-between">
                <span>
                  <RiSecurePaymentFill className="inline text-xl text-gray-900 mr-1" />
                  Безналичный рассчет:
                </span>
                <span>
                  {store.cashless ? (
                    <FcCheckmark className="inline text-lg " />
                  ) : (
                    <FcCancel className="inline text-lg " />
                  )}
                </span>
              </li>
              <li className="w-[90%] h-[20px] flex justify-between">
                <span>
                  <GiMoneyStack className="inline text-xl text-gray-900 mr-1" />
                  Оплата в рассрочку:
                </span>
                <span>
                  {store.taxsit ? (
                    <FcCheckmark className="inline text-lg " />
                  ) : (
                    <FcCancel className="inline text-lg " />
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
