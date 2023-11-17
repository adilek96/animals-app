import { db } from "@vercel/postgres";
import { Suspense } from "react";
import { Metadata } from "next";
import Loading from "../loading";

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
      "SELECT * FROM ads LEFT JOIN ads_images ON ads.ad_id = ads_images.ad_id WHERE ads.ad_id = $1";

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
      <div>My Post: {posts.title}</div>
    </Suspense>
  );
}
