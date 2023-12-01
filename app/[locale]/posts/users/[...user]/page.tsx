import { db } from "@vercel/postgres";
import { Card } from "../../../components/Card";
import { Suspense } from "react";
import { Metadata } from "next";
import Loading from "../../loading";
import Image from "next/image";
import { UserName } from "../../../components/UserName";
import { UserConnection } from "../../../components/UserConnection";

interface User {
  username: string;
  avatar_url: string;
  whatsapp: boolean;
}

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
  user_id: number;
}

export async function generateMetadata({
  params,
}: {
  params: { user: number };
}): Promise<Metadata> {
  const user: User | null = await getUserData(params.user);
  if (!user) {
    return {
      title: "Zoo.Do",
      description: "Animals marketplace",
    };
  }

  return {
    title: "Обьявления пользователя " + user.username + " ",
    description: "Animals marketplace",
  };
}

async function getUserData(user: number): Promise<User | null> {
  const client = await db.connect();
  try {
    const query = "SELECT * FROM users WHERE user_id = $1";

    const result = await client.query(query, [+user]);

    return result.rows[0] || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  } finally {
    client.release();
  }
}

async function getUserPosts(user: number): Promise<Post[] | null> {
  const client = await db.connect();
  try {
    const query =
      "SELECT DISTINCT ON (ads.ad_id) * ,TO_CHAR(ads.added_date, 'DD.MM.YY HH24:MI') as formatted_added_date FROM ads LEFT JOIN ads_images ON ads.ad_id = ads_images.ad_id WHERE user_id = $1 ORDER BY ads.ad_id DESC ";

    const result = await client.query(query, [+user]);

    return result.rows || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  } finally {
    client.release();
  }
}

export default async function UserPosts({
  params,
}: {
  params: { user: number };
}) {
  const userData = await getUserData(params.user);
  const userPosts = await getUserPosts(params.user);

  if (!userData) {
    return <div>Not Found</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className=" p-5 h-fit  bg-gray-300 dark:bg-gray-600 rounded-lg my-5  flex justify-around items-center">
        <div className="w-[90%] h-fit flex flex-col items-center">
          <h1>Обьявления пользователя {userData.username} </h1>
          <div className="w-[70px] h-[70px] flex items-center justify-center shadow-md shadow-orange-900 bg-primary-200 rounded-full border-collapse border-[3px] border-primary-500">
            <div className="relative w-[60px] h-[60px] flex items-center justify-center shadow-inner shadow-orange-900 bg-white rounded-full border-collapse border-[2px] border-primary-500">
              <Image
                className="rounded-full"
                src={userData.avatar_url}
                fill={true}
                objectFit="fill"
                alt="logo"
              />
            </div>
          </div>
          {/* <div className="text-center">
            <UserName userName={[userData.username, userData.whatsapp]} />
          </div> */}
        </div>
      </div>
      <>
        <div className="flex justify-around md:gap-3 flex-wrap h-fit py-5">
          {userPosts != null && userPosts.length > 0 ? (
            userPosts.map((post, index) => <Card key={index} post={post} />)
          ) : (
            <div>Объявлений не найдено!</div>
          )}
        </div>
      </>
    </Suspense>
  );
}
