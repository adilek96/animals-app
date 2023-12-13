import { db } from '@vercel/postgres';

import { NextResponse } from 'next/server';
 

// get all ads
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('p') as string) || 1;
    const sortDelivered = searchParams.get('dls') === 'true';
    const raitingSort = searchParams.get('rsrt') === 'up' ? 'DESC' : 'ASC';
    const city = searchParams.get('city');

    
    const cities = city === 'all' ? '' : `WHERE stores.city = '${city}'`;

    let query: string = `SELECT * FROM goods`;

    if (sortDelivered && city === 'all') {
      query = `SELECT * FROM stores WHERE stores.shipping = true ORDER BY stores.raiting ${raitingSort} LIMIT $1 OFFSET $2`;
    } else if (sortDelivered && city !== 'all') {
      query = `SELECT * FROM stores WHERE stores.shipping = true AND stores.city = '${city}' ORDER BY stores.raiting ${raitingSort} LIMIT $1 OFFSET $2`;
    }

    const perPage = 12;
    const offset = (page - 1) * perPage;

    const client = await db.connect();
    const result = await client.query(query, [perPage, offset]);

    return NextResponse.json({ result: result.rows, currentPage: page }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}