import { pool } from "@/libs/db";
import { RowDataPacket } from "mysql2";

export class databaseOperation {
  static findEmail = async (email: string) => {
    const [findedemail] = await pool.query<RowDataPacket[]>(
      "select * from user_table where email = ?",
      [email]
    );

    return findedemail[0];
  };
  static addUser = async (
    email: string,
    password: string,
    refreshtoken: string
  ) => {
    return await pool.query(
      "insert into user_table (email , password , refreshtoken) values  ( ? , ? , ?)",
      [email, password, refreshtoken]
    );
  };

  static findToken = async (token: string) => {
    return await pool.query("select * from user_table where refreshtoken = ?", [
      token,
    ]);
  };
}
