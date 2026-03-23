import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const sql = neon(process.env.DATABASE_URL!);

async function ensureTable() {
  await sql`CREATE TABLE IF NOT EXISTS shelves (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255),
    image_src TEXT,
    shelf_key VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
  )`;
}

export async function GET(request: Request) {
  try {
    await ensureTable();
    // optional query param ?key=popular|new|curator
    const url = new URL(request.url);
    const key = url.searchParams.get('key');
    if (key) {
      const rows = await sql`SELECT id, title, subtitle, image_src FROM shelves WHERE shelf_key = ${key} ORDER BY created_at DESC`;
      return NextResponse.json(rows);
    }
    const rows = await sql`SELECT id, title, subtitle, image_src, shelf_key FROM shelves ORDER BY created_at DESC`;
    return NextResponse.json(rows);
  } catch (e) {
    return NextResponse.json({ error: '셸프를 불러오는 중 오류가 발생했어요.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await ensureTable();
    const { id, title, subtitle, imageSrc, shelfKey } = await request.json();
    if (!id || !title || !shelfKey) {
      return NextResponse.json({ error: '필수 필드가 누락되었어요.' }, { status: 400 });
    }

    await sql`
      INSERT INTO shelves (id, title, subtitle, image_src, shelf_key)
      VALUES (${id}, ${title}, ${subtitle ?? null}, ${imageSrc ?? null}, ${shelfKey})
      ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, subtitle = EXCLUDED.subtitle, image_src = EXCLUDED.image_src, shelf_key = EXCLUDED.shelf_key
    `;

    const inserted = await sql`SELECT id, title, subtitle, image_src, shelf_key FROM shelves WHERE id = ${id}`;
    return NextResponse.json(inserted[0], { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: '셸프 저장 중 오류가 발생했어요.' }, { status: 500 });
  }
}
