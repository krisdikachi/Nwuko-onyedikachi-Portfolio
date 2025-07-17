import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'contact-messages.db');
const db = new Database(dbPath);

export async function GET() {
  try {
    const rows = db.prepare('SELECT id, name, email, message, created_at FROM messages ORDER BY created_at DESC').all();
    return NextResponse.json({ messages: rows });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
} 