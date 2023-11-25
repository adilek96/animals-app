import { db } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

// get img by ad_id
export async function GET(request: Request) {
    // const { ad_id } = request.query
    const { searchParams } = new URL(request.url)

    const ad_id = searchParams.get('q')
    
    if (!ad_id) {
        const client = await db.connect();
            try {
              const result = await client.query('SELECT * FROM ads_images');
              return NextResponse.json({ result: result.rows }, { status: 200 });
            } catch (error) {
              return NextResponse.json({ error }, { status: 500 });
            } finally {
              client.release(); 
            }
    }

    const client = await db.connect();
    try {
        const result = await client.query('SELECT image_url FROM ads_images WHERE ad_id = $1  LIMIT 1', [ad_id]);
        if (result.rows.length > 0) {
            return NextResponse.json({ result: result.rows[0].image_url }, { status: 200 });
        } else {
            return NextResponse.json({ error: 'No images found for the provided ad_id' }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    } finally {
        client.release(); 
    }
}


// // get all img
// export async function GET(request: Request) {
//     const client = await db.connect();
//     try {
//       const result = await client.query('SELECT * FROM ads_images');
//       return NextResponse.json({ result: result.rows }, { status: 200 });
//     } catch (error) {
//       return NextResponse.json({ error }, { status: 500 });
//     } finally {
//       client.release(); 
//     }
//   }


export async function POST(request: Request) {
    try {
        const client = await db.connect();
        const body = await request.json();
      

        if (body && body.ad_id && Array.isArray(body.image_url)) {
            for (const url of body.image_url) {
                await client.query(
                    `INSERT INTO ads_images (ad_id, image_url) VALUES ($1, $2)`,
                    [body.ad_id, url]
                );
            }
            client.release(); // Закрываем соединение
            return NextResponse.json({ success: true }, { status: 200 });
        } else {
            client.release(); // Закрываем соединение
            return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ error: "ошибка"}, { status: 500 });
    }
}
