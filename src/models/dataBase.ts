import { pool } from "@/libs/db";
import { QueryResult, ResultSetHeader, RowDataPacket } from "mysql2";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

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
    const [result] = await pool.query<ResultSetHeader>(
      "insert into user_table (email , password , refreshtoken) values  ( ? , ? , ?)",
      [email, password, refreshtoken]
    );

    return result;
  };

  static findToken = async (token: string) => {
    const [user] = await pool.query<RowDataPacket[]>(
      "select * from user_table  where id = ?",
      [token]
    );
    return user[0];
  };

  static deleteToken = async (userId: string) => {
    return await pool.query(
      "update user_table set refreshtoken = null where id = ?",
      [userId]
    );
  };

  static updateToken = async (token: string, id: string) => {
    return await pool.query(
      "update user_table set refreshtoken = ? where id = ?",
      [token, id]
    );
  };

  static getUserData = async (email: string) => {
    const [userDat] = await pool.query<RowDataPacket[]>(
      "select id from user_table where email = ?",
      [email]
    );

    return userDat[0];
  };
}
