import { pool } from "../dbConnection/db";

export const GET = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    Response.json({ success: true, time: result.rows[0] });
  } catch (error) {
    console.error("DB Connection Error:", error);
    Response.json({ success: false, error: error });
  }
};
