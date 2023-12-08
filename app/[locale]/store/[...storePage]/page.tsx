import { QueryResult, db } from "@vercel/postgres";
import { Suspense } from "react";
import { Metadata } from "next";
import Loading from "../../loading";
import Link from "next/link";
import Image from "next/image";
import { UserConnection } from "../../components/UserConnection";
import { StarRaiting } from "../../components/forStore/StartRaiting";

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
      <section className=" cursor-default dark:bg-gray-700 dark:shadow-gray-800 bg-slate-50 p-[3%] h-fit mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl">
        <div className="dark:bg-gray-600 dark:shadow-gray-700 bg-slate-100 p-[3%] h-fit mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl  flex flex-col gap-4">
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
            </div>
          </div>

          {/* Контакты */}
          <div className="flex md:flex-row justify-center gap-5 items-center  sm:flex-col">
            <UserConnection phone_number={[store.phone, store.whatsapp]} />
          </div>

          {/* Описание */}
          <div className="flex md:flex-row justify-center gap-5 items-center  sm:flex-col">
            <p>{store.info}</p>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
