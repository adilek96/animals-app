import { db } from "@vercel/postgres";
import { Suspense } from "react";
import { Metadata } from "next";
import Loading from "../loading";
import { Swiper } from "../../components/Swiper";
import { FaManatSign, FaPassport, FaLocationDot } from "react-icons/fa6";
import { TbVaccine, TbTruckDelivery } from "react-icons/tb";
import { MdPets, MdOutlineWavingHand } from "react-icons/md";
import { FcCancel, FcCheckmark } from "react-icons/fc";

interface Post {
  title: string;
  category: string;
  image_url: string | null;
  added_date: number;
  formatted_added_date: number;
  passport: string;
  vaccinations: string | null;
  pedigree: string;
  price: number;
  in_good_hands: string;
  city: string;
  isdelevery: boolean;
  isnew: boolean;
  ad_id: number;
}

export async function generateMetadata({
  params,
}: {
  params: { post: number };
}): Promise<Metadata> {
  const posts: Post | null = await getData(params.post);
  if (!posts) {
    return {
      title: "Zoo.Do",
      description: "Animals marketplace",
    };
  }

  return {
    title: posts.title,
    description: "Animals marketplace",
  };
}

async function getData(post: number): Promise<Post | null> {
  const client = await db.connect();
  try {
    const query =
      "SELECT * FROM ads  LEFT JOIN ads_images ON ads.ad_id = ads_images.ad_id WHERE ads.ad_id = $1";

    const result = await client.query(query, [+post]);

    return result.rows[0] || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  } finally {
    client.release();
  }
}

export default async function Post({ params }: { params: { post: number } }) {
  const posts = await getData(params.post);
  if (!posts) {
    return <div>Not Found</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <section className="dark:bg-gray-700 dark:shadow-gray-800 bg-slate-50 p-[3%] h-fit mx-auto my-[30px]  shadow-md  shadow-gray-400 rounded-2xl">
        <button className="  bg-gradient-to-r from-green-500 to-green-400 hover:contrast-125 duration-600 w-[100px] h-[25px]  text-[16px] rounded-lg flex justify-center items-center shadow-sm  shadow-gray-800  dark:shadow-gray-800 text-white">
          <p className="text-center align-middle">{posts.category}</p>
        </button>
        <div className="flex md:flex-row sm:flex-col items-center ">
          <div className="md:w-[70%] sm:w-[100%] mb-4 ">
            <div className="flex md:flex-col sm:flex-col-reverse mt-5 ">
              <h1 className="text-[26px]  my-3">{posts.title}</h1>
              <div className=" w-[100%] flex justify-center items-center">
                <Swiper />
              </div>
            </div>

            {posts.in_good_hands ? (
              <p className="text-primary-500 mt-3 text-[24px]">В добрые руки</p>
            ) : (
              <button className="mt-3 bg-gradient-to-r from-primary-500 to-primary-400 hover:contrast-125 duration-600 w-[150px] h-[35px]  text-lg rounded-full flex justify-center items-center shadow-md  shadow-gray-400  dark:shadow-gray-800 text-white">
                {posts.price}
                <FaManatSign />
              </button>
            )}
          </div>
          {/* здесь начинается секция дополнений */}
          <div className="md:w-[30%] sm:w-[100%] ">
            <div className=" p-5 h-fit  bg-gray-600 rounded-lg my-5">
              <div className="w-[90%] text-[12px] h-[15px] flex justify-between">
                <span>Добавлено:</span>
                <span>{posts.formatted_added_date}</span>
              </div>
            </div>
            {/* --------------------- */}
            <div className=" p-5 h-fit  bg-gray-600 rounded-lg my-5">
              <div className="w-[90%] h-[20px] flex justify-between">
                <span>
                  <TbTruckDelivery className="inline mr-1 text-gray-400" />
                  Доставка:
                </span>
                <span>
                  {posts.isdelevery ? (
                    <>
                      <FcCheckmark className="inline " />
                    </>
                  ) : (
                    <>
                      <FcCancel className="inline " />
                    </>
                  )}
                </span>
              </div>
              <div className="w-[90%] h-[20px] flex justify-between">
                <span>
                  <MdOutlineWavingHand className="inline mr-1 text-gray-400" />
                  Новый:
                </span>
                <span>
                  {posts.isnew ? (
                    <>
                      <FcCheckmark className="inline " />
                    </>
                  ) : (
                    <>
                      <FcCancel className="inline " />
                    </>
                  )}
                </span>
              </div>

              {posts.category === "cats" || posts.category === "dogs" ? (
                <>
                  <div className="w-[90%] h-[20px] flex justify-between">
                    <span>
                      <TbVaccine className="inline mr-1 text-gray-400" />
                      Прививка:
                    </span>
                    <span>
                      {posts.vaccinations ? (
                        <FcCheckmark className="inline " />
                      ) : (
                        <>
                          <FcCancel className="inline " />
                        </>
                      )}
                    </span>
                  </div>
                  <div className="w-[90%] h-[20px] flex justify-between">
                    <span>
                      <FaPassport className="inline mr-1 text-gray-400" />
                      Паспорт:
                    </span>
                    <span>
                      {posts.passport ? (
                        <FcCheckmark className="inline " />
                      ) : (
                        <>
                          <FcCancel className="inline " />
                        </>
                      )}
                    </span>
                  </div>
                  <div className="w-[90%] h-[20px] flex justify-between">
                    <span>
                      <MdPets className="inline mr-1 text-gray-400" />
                      Родословная:
                    </span>
                    <span>
                      {posts.pedigree ? (
                        <>
                          {/* <span>{p("true")}</span> */}
                          <FcCheckmark className="inline " />
                        </>
                      ) : (
                        <>
                          {/* <span className="mr-1">{p("false")}</span> */}
                          <FcCancel className="inline " />
                        </>
                      )}
                    </span>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
