import { db } from '@vercel/postgres';

import { NextResponse } from 'next/server';
 

// get all ads
export async function GET(request: Request) {
  //пагинация
  const { searchParams } = new URL(request.url)
  const post = parseInt(searchParams.get('q') as string) || 1;
 

 

  
  const client = await db.connect();
  try {
   

    let query: string = "SELECT * FROM ads LEFT JOIN ads_images ON ads.ad_id = ads_images.ad_id WHERE ads.ad_id = " + post + " "
   
    
    const result = await client.query(query);
  
    return NextResponse.json({ result: result.rows}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    client.release(); 
  }
}