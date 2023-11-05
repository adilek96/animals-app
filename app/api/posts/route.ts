import { db } from '@vercel/postgres';

import { NextResponse } from 'next/server';
 

// get all ads
export async function GET(request: Request) {
  const client = await db.connect()
  try {
    const result =
      await client.sql`SELECT * FROM posts`;
    return NextResponse.json({ result: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}


// post new ads
export async function POST(request: Request ) {
  const client = await db.connect()
  const body = await request.json()
  console.log('Received request body:', body);



  if(body !== null)
    try {
     
      const result =
        await client.sql`INSERT INTO ads (title, description, user_id, category, vaccinations, passport, pedigree, city, in_good_hands, price) VALUES (${body.t}, ${body.d}, ${body.u}, ${body.c},${body.v}, ${body.pa},${body.pe},${body.ci}, ${body.i}, ${body.pr})` 
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
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