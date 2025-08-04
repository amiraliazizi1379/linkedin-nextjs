import { pool } from "@/libs/db";


export class databaseOperation {
  static findEmail = async (email: string) => {

      return await pool.query("select * from user_table where email = ?", [email]);
   
  }
  static addUser = async (email: string , password : string , refreshtoken : string) => {
    
      return  await pool.query('insert into user_table(email , password , refreshtoken) = ( ? , ? )', [email , password , refreshtoken])
   
  }
}
