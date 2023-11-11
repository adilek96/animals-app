import { db } from '@vercel/postgres';

import { NextResponse } from 'next/server';
 

// get all ads
export async function GET(request: Request) {
  //тест пагинации
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('p') as string) || 1;
  const sortPrice = searchParams.get('ps') as string;
  const dateSort = searchParams.get('ds') as string;
  const sortDelivered = (searchParams.get('dls') as string) ;
  const date = dateSort === 'asc' ? 'ASC' : 'DESC';
  const delivery = sortDelivered === 'true' ? 'WHERE ads.isdelevery = true' : '';
 

  
  const client = await db.connect();
  try {
    const perPage = 12 * page; // Количество элементов на странице
    const offset = 0;

    let query: string = "SELECT DISTINCT ON (ads.ad_id) ads.*,TO_CHAR(ads.added_date, 'DD.MM.YY HH24:MI') as formatted_added_date, ads_images.image_url FROM ads LEFT JOIN ads_images ON ads.ad_id = ads_images.ad_id " + delivery  + " ORDER BY ads.ad_id " +  date + "  LIMIT $1 OFFSET $2"
    if(sortPrice === "none"){
      query = "SELECT DISTINCT ON (ads.ad_id) ads.*,TO_CHAR(ads.added_date, 'DD.MM.YY HH24:MI') as formatted_added_date, ads_images.image_url FROM ads LEFT JOIN ads_images ON ads.ad_id = ads_images.ad_id " + delivery  + " ORDER BY ads.ad_id " +  date + "  LIMIT $1 OFFSET $2";
    } else if(sortPrice === "up"){
      query = "SELECT DISTINCT ON (ads.price) ads.*,TO_CHAR(ads.added_date, 'DD.MM.YY HH24:MI') as formatted_added_date, ads_images.image_url FROM ads LEFT JOIN ads_images ON ads.ad_id = ads_images.ad_id " + delivery  + " ORDER BY ads.price DESC  LIMIT $1 OFFSET $2";
    } else if(sortPrice === "down"){
      query ="SELECT DISTINCT ON (ads.price) ads.*,TO_CHAR(ads.added_date, 'DD.MM.YY HH24:MI') as formatted_added_date, ads_images.image_url FROM ads LEFT JOIN ads_images ON ads.ad_id = ads_images.ad_id " + delivery  + " ORDER BY ads.price ASC  LIMIT $1 OFFSET $2";
    }
    
    const result = await client.query(query, [perPage, offset]);
  
    return NextResponse.json({ result: result.rows, currentPage: page }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    client.release(); 
  }
}

// post new ads
export async function POST(request: Request ) {
  const client = await db.connect()
  const body = await request.json()
 



  if(body !== null)
    try {
     
      const result =
        await client.sql`INSERT INTO ads (title, description, user_id, category, vaccinations, passport, pedigree, city, in_good_hands, price, isnew, isdelevery) VALUES (${body.t}, ${body.d}, ${body.u}, ${body.c},${body.v}, ${body.pa},${body.pe},${body.ci}, ${body.i}, ${body.pr}, ${body.new}, ${body.delivery}) RETURNING ad_id`
       
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    } finally {
      client.release(); 
    }
  
  }



  // try {
  //   fetch("/api/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: "b.dsasaru",
  //       name: "bsadasa",
  //       phone: 48352384,
  //       password: "adiledsadk34",
  //     }),
  //   });
  // } catch (error) {
  //   console.log(error);
  // }