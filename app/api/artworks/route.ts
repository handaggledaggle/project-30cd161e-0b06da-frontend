import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const sql = neon(process.env.DATABASE_URL!);

async function ensureTable() {
  await sql`CREATE TABLE IF NOT EXISTS artworks (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist_name VARCHAR(255) NOT NULL,
    price_label VARCHAR(255),
    image_src TEXT,
    created_at TIMESTAMP DEFAULT NOW()
  )`;
}

export async function GET() {
  try {
    await ensureTable();
    const rows = await sql`SELECT id, title, artist_name, price_label, image_src FROM artworks ORDER BY created_at DESC`;
    return NextResponse.json(rows);
  } catch (e) {
    return NextResponse.json({ error: '작품을 불러오는 중 오류가 발생했어요.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await ensureTable();
    const { id, title, artistName, priceLabel, imageSrc } = await request.json();
    if (!id || !title || !artistName) {
      return NextResponse.json({ error: '필수 필드가 누락되었어요.' }, { status: 400 });
    }

    await sql`
      INSERT INTO artworks (id, title, artist_name, price_label, image_src)
      VALUES (${id}, ${title}, ${artistName}, ${priceLabel ?? null}, ${imageSrc ?? null})
      ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, artist_name = EXCLUDED.artist_name, price_label = EXCLUDED.price_label, image_src = EXCLUDED.image_src
    `;

    const inserted = await sql`SELECT id, title, artist_name, price_label, image_src FROM artworks WHERE id = ${id}`;
    return NextResponse.json(inserted[0], { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: '작품 저장 중 오류가 발생했어요.' }, { status: 500 });
  }
}
