import { db } from '@vercel/postgres';

import { NextResponse } from 'next/server';
 

// get all ads
export async function GET(request: Request) {
  //пагинация
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('p') as string) || 1;
  //сортировка
  const sortDelivered = (searchParams.get('dls') as string) ;
  const raitingSort = (searchParams.get('rsrt') as string) ;

  const delivery = sortDelivered === 'true' ? 'WHERE stores.shipping = true ' : '';
  const raiting = raitingSort === 'up' ? 'DESC' : 'ASC';

 

  
  const client = await db.connect();
  try {
    const perPage = 12 * page; // Количество элементов на странице
    const offset = 0;

    let query: string = "SELECT * FROM stores " + delivery + " ORDER BY stores.raiting " + raiting + "  LIMIT $1 OFFSET $2 "
   
    
    const result = await client.query(query, [perPage, offset]);
  
    return NextResponse.json({ result: result.rows, currentPage: page }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    client.release(); 
  }
}

// post new store
export async function POST(request: Request ) {
  const client = await db.connect()
  const body = await request.json()
 



  if(body !== null)
    try {
     
      const result =
        await client.sql`INSERT INTO stores (user_id, name, location, raiting, shipping, info, phone, logo_url) VALUES (${body.user_id}, ${body.name}, ${body.location}, ${body.raiting},${body.shipping}, ${body.info},${body.phone},${body.logo_url}) RETURNING store_id`
       
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    } finally {
      client.release(); 
    }
  
  }

