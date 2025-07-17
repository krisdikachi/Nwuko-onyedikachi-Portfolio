export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

// Path to the SQLite database file (in project root)
const dbPath = path.join(process.cwd(), 'contact-messages.db');
const db = new Database(dbPath);

db.exec(`CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const stmt = db.prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)');
    stmt.run(name, email, message);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
} 