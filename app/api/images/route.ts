import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

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
