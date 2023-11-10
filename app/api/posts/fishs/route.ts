import { db } from '@vercel/postgres';

import { NextResponse } from 'next/server';
 

// get all fishs ads
export async function GET(request: Request) {
  //тест пагинации
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('p') as string) || 1;
  

  const client = await db.connect();
  try {
    const perPage = 12 * page; // Количество элементов на странице
    const offset = 0;
    const result = await client.query("SELECT ads.*,TO_CHAR(ads.added_date, 'DD/MM/YY HH24:MI') as formatted_added_date, ads_images.image_url FROM ads  LEFT JOIN ads_images ON ads.ad_id = ads_images.ad_id WHERE ads.category = 'fishs' ORDER BY ads.ad_id DESC LIMIT $1 OFFSET $2", [perPage, offset]);
    return NextResponse.json({ result: result.rows, currentPage: page }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    client.release(); 
  }
}