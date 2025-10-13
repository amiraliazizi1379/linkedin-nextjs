import { pool } from "@/libs/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export class databaseOperation {
  static findEmail = async (email: string) => {
    const [findedemail] = await pool.query<RowDataPacket[]>(
      "select * from user_table where email = ?",
      [email]
    );

    return findedemail[0];
  };
  static addUser = async (email: string, password: string) => {
    const [result] = await pool.query<ResultSetHeader>(
      "insert into user_table (email , password ) values  ( ? , ? )",
      [email, password]
    );

    return result;
  };

  static updateUserInfo = async (image_url: string, id: number) => {
    return await pool.query("update user_table set image = ? where id = ?", [
      image_url,
      id,
    ]);
  };

  static findToken = async (id: number) => {
    const [user] = await pool.query<RowDataPacket[]>(
      "select * from user_table  where id = ?",
      [id]
    );
    return user[0];
  };

  static deleteToken = async (userId: number) => {
    return await pool.query(
      "update user_table set refreshtoken = null where id = ?",
      [userId]
    );
  };

  static updateToken = async (token: string, id: number) => {
    return await pool.query(
      "update user_table set refreshtoken = ? where id = ?",
      [token, id]
    );
  };

  static getUserData = async (id: number) => {
    const [userDat] = await pool.query<RowDataPacket[]>(
      "select name , email , image from user_table where id = ?",
      [id]
    );

    return userDat[0];
  };
  static addPost = async (userId: number, text: string, img: string | null) => {
    const [addPostQuery] = await pool.query<ResultSetHeader>(
      "insert into posts (user_id , content , image_url) values (? , ? , ?)",
      [userId, text, img]
    );
    return addPostQuery;
  };

  static addComment = async (
    userId: number,
    postId: number,
    text: string,
    img: string | null
  ) => {
    const [addCommentQuery] = await pool.query<ResultSetHeader>(
      "insert into comments (user_id , post_id , content , image_url) values (? , ? , ? , ?)",
      [userId, postId, text, img]
    );
    return addCommentQuery;
  };

  static getPostsData = async (id: number) => {
    const [postsDat] = await pool.query(
      "SELECT posts.id AS post_id,posts.image_url,posts.content,posts.created_at,user_table.id AS user_id,user_table.image,user_table.name,user_table.email,CASE WHEN EXISTS (SELECT 1 FROM likes  WHERE likes.user_id = ? AND likes.post_id = posts.id ) THEN TRUE ELSE FALSE END AS liked,CASE WHEN EXISTS (SELECT 1 FROM follows WHERE follows.follower_id = ? AND follows.followed_id = user_table.id) THEN TRUE ELSE FALSE  END AS is_following FROM posts JOIN user_table ON posts.user_id = user_table.id ORDER BY posts.created_at DESC;",
      [id, id]
    );
    //console.log(postsDat)
    return postsDat;
  };

  static getComments = async (id: number) => {
    const [postsComments] = await pool.query(
      "select c.id AS comment_id,c.post_id,c.user_id, c.content,c.image_url,u.image, u.name,u.email from comments c join  user_table u ON u.id = c.user_id where c.post_id = ? ;",
      [id]
    );
    return postsComments;
  };

  static registerLike = async (userId: number, postId: number) => {
    const [likeResult] = await pool.query(
      "insert into likes (user_id , post_id) values (? , ?)",
      [userId, postId]
    );
    return likeResult;
  };
  static deleteLike = async (userId: number, postId: number) => {
    const [likeResult] = await pool.query(
      "DELETE from likes where user_id = ?  AND  post_id = ?",
      [userId, postId]
    );
    return likeResult;
  };
  static registerFollow = async (userId: number, postId: number) => {
    const [likeResult] = await pool.query(
      "insert into follows (follower_id , followed_id) values (? , ?)",
      [userId, postId]
    );
    return likeResult;
  };
  static deleteFollow = async (userId: number, postId: number) => {
    const [likeResult] = await pool.query(
      "DELETE from follows where follower_id = ?  AND  followed_id = ?",
      [userId, postId]
    );
    return likeResult;
  };
}
