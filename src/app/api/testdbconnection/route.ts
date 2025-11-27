// app/api/testdb/route.js
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: Number(process.env.DB_PORT),
    });

    const [rows] = await pool.query("SELECT 1+1 AS result");
    return NextResponse.json({ ok: true, rows });
  } catch (err) {
    console.log("DB ERROR:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
