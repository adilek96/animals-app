

import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// get all ads title
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchInput = searchParams.get('input') as string;
  const search = searchInput.toLowerCase();

  const client = await db.connect();
  try {
    const query = "SELECT ads.title FROM ads WHERE ads.title ILIKE $1";
    const result = await client.query(query, ['%' + search + '%']);
    return NextResponse.json({ result: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json( 'Internal Server Error' , { status: 500 });
  } finally {
    client.release();
  }
}
