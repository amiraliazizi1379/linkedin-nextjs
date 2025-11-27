// app/api/testdb/route.js
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
    const pool = mysql.createPool(process.env.MYSQL_URL!);

    const [rows] = await pool.query("SELECT 1+1 AS result");
    return NextResponse.json({ ok: true, rows });
  } catch (err) {
    console.log("DB ERROR:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
