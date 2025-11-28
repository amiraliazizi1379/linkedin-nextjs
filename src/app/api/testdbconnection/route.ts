import { NextResponse } from "next/server";
import { pool } from "../dbConnection/db";

export const GET = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    NextResponse.json({ success: true, time: result.rows[0] });
  } catch (error) {
    console.error("DB Connection Error:", error);
    NextResponse.json({ success: false, error: error });
  }
};
