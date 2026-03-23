import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    await sql`CREATE TABLE IF NOT EXISTS artworks (
      id SERIAL PRIMARY KEY,
      artist_name VARCHAR(255),
      image_src VARCHAR(255),
      price_label VARCHAR(255),
      title VARCHAR(255),
      created_at TIMESTAMP DEFAULT NOW()
    )`;
    await sql`CREATE TABLE IF NOT EXISTS shelves (
      id SERIAL PRIMARY KEY,
      image_src VARCHAR(255),
      shelf_key VARCHAR(255),
      subtitle VARCHAR(255),
      title VARCHAR(255),
      created_at TIMESTAMP DEFAULT NOW()
    )`;
    await sql`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMP DEFAULT NOW(),
      email VARCHAR(255) UNIQUE,
      name VARCHAR(255),
      password_hash VARCHAR(255)
    )`;
    return NextResponse.json({ success: true, message: 'Tables initialized' });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
