import { db } from '@vercel/postgres';

import { NextResponse } from 'next/server';
 

// get all ads
export async function GET(request: Request) {
  //пагинация
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('p') as string) || 1;
  //сортировка
  const sortPrice = searchParams.get('ps') as string;
  const dateSort = searchParams.get('ds') as string;
  const sortDelivered = (searchParams.get('dls') as string) ;
  const sortMinPrice = parseFloat(searchParams.get('pmin') as string )  ;
  const sortMaxPrice = parseFloat(searchParams.get('pmax') as string) ;
  const date = dateSort === 'asc' ? 'ASC' : 'DESC';
  const delivery = sortDelivered === 'true' ? ' ads.isdelevery = true AND' : '';

 

  
  const client = await db.connect();
  try {
    const perPage = 12 * page; // Количество элементов на странице
    const offset = 0;

    let query: string = "SELECT DISTINCT ON (ads.ad_id) ads.*,TO_CHAR(ads.added_date, 'DD.MM.YY HH24:MI') as formatted_added_date, ads_images.image_url FROM ads LEFT JOIN ads_images ON ads.ad_id = ads_images.ad_id WHERE ads.category = 'food' AND " + delivery + " ads.price >= " + sortMinPrice + " AND ads.price <= " + sortMaxPrice + "  ORDER BY ads.ad_id " +  date + "  LIMIT $1 OFFSET $2"
    if(sortPrice === "none"){
      query
    } else if(sortPrice === "down"){
      query = "SELECT DISTINCT ON (ads.price) ads.*,TO_CHAR(ads.added_date, 'DD.MM.YY HH24:MI') as formatted_added_date, ads_images.image_url FROM ads LEFT JOIN ads_images ON ads.ad_id = ads_images.ad_id  WHERE ads.category = 'food' AND " + delivery + " ads.price >= " + sortMinPrice + " AND ads.price <= " + sortMaxPrice + " ORDER BY ads.price DESC  LIMIT $1 OFFSET $2";
    } else if(sortPrice === "up"){
      query ="SELECT DISTINCT ON (ads.price) ads.*,TO_CHAR(ads.added_date, 'DD.MM.YY HH24:MI') as formatted_added_date, ads_images.image_url FROM ads LEFT JOIN ads_images ON ads.ad_id = ads_images.ad_id  WHERE ads.category = 'food' AND " + delivery + " ads.price >= " + sortMinPrice + " AND ads.price <= " + sortMaxPrice + " ORDER BY ads.price ASC  LIMIT $1 OFFSET $2";
    }
    
    const result = await client.query(query, [perPage, offset]);
  
    return NextResponse.json({ result: result.rows, currentPage: page }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    client.release(); 
  }
}