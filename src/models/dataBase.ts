import { pool } from "@/app/api/dbConnection/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export class databaseOperation {
  static findEmail = async (email: string) => {
    const findedemail = await pool.query(
      "select * from user_table where email = ?",
      [email]
    );

    return findedemail.rows[0];
  };
  static addUser = async (email: string, password: string) => {
    const result = await pool.query(
      "insert into user_table (email , password ) values  ( ? , ? ) RETURNING id",
      [email, password]
    );

    return result.rows[0].id;
  };

  static addProfileImage = async (image_url: string | null, id: number) => {
    return await pool.query("update user_table set  image = ? where id = ?", [
      image_url,
      id,
    ]);
  };
  static deleteProfileImage = async (id: number) => {
    return await pool.query("update user_table set image = null where id = ?", [
      id,
    ]);
  };

  static editEmail = async (email: string | null, id: number) => {
    return await pool.query("update user_table set  email = ? where id = ?", [
      email,
      id,
    ]);
  };

  static addBio = async (bio: string | null, id: number) => {
    return await pool.query("update user_table set  bio = ? where id = ?", [
      bio,
      id,
    ]);
  };
  static editName = async (name: string, id: number) => {
    return await pool.query("update user_table set  name = ?  where id = ?", [
      name,
      id,
    ]);
  };

  static findToken = async (id: number) => {
    const user = await pool.query(
      "select * from user_table  where id = ?",
      [id]
    );
    return user.rows[0];
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
    const userDat = await pool.query<RowDataPacket[]>(
      "select id , name , email , image , bio from user_table where id = ?",
      [id]
    );
    return userDat.rows;
  };

  static getAllUsers = async (id: number) => {
    const userDat = await pool.query(
      "select id , name , email , image , bio  , CASE  WHEN EXISTS ( SELECT 1  FROM follows WHERE follows.follower_id = ? AND follows.followed_id = user_table.id) THEN TRUE ELSE FALSE  END AS is_following from user_table where id != ?;",
      [id, id]
    );
    return userDat.rows;
  };

  static addPost = async (userId: number, text: string, img: string | null) => {
    const addPostQuery = await pool.query<ResultSetHeader>(
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
    const addCommentQuery = await pool.query<ResultSetHeader>(
      "insert into comments (user_id , post_id , content , image_url) values (? , ? , ? , ?)",
      [userId, postId, text, img]
    );
    return addCommentQuery;
  };

  static getPostsData = async (id: number) => {
    const postsDat = await pool.query(
      "SELECT posts.id AS post_id,posts.image_url,posts.content,posts.created_at,user_table.id AS user_id,user_table.image,user_table.name,user_table.email,user_table.bio,CASE WHEN EXISTS ( SELECT 1 FROM likes  WHERE likes.user_id = ? AND likes.post_id = posts.id) THEN TRUE ELSE FALSE END AS liked,CASE  WHEN EXISTS ( SELECT 1  FROM follows WHERE follows.follower_id = ? AND follows.followed_id = user_table.id) THEN TRUE ELSE FALSE  END AS is_following,COALESCE(like_counts.like_count, 0) AS like_count,COALESCE(comment_counts.comment_count, 0) AS comment_count FROM posts JOIN user_table ON posts.user_id = user_table.id LEFT JOIN (SELECT post_id, COUNT(*) AS like_count FROM likes GROUP BY post_id) AS like_counts ON like_counts.post_id = posts.id LEFT JOIN (SELECT post_id, COUNT(*) AS comment_count FROM comments GROUP BY post_id) AS comment_counts ON comment_counts.post_id = posts.id ORDER BY posts.created_at DESC limit 5;",
      [id, id]
    );
    return postsDat.rows;
  };

  static getComments = async (id: number) => {
    const postsComments = await pool.query(
      "select c.id AS comment_id,c.post_id,c.user_id, c.content,c.image_url,u.image, u.name,u.email from comments c join  user_table u ON u.id = c.user_id where c.post_id = ? ;",
      [id]
    );
    return postsComments;
  };

  static registerLike = async (userId: number, postId: number) => {
    const likeResult = await pool.query(
      "insert into likes (user_id , post_id) values (? , ?)",
      [userId, postId]
    );
    return likeResult;
  };
  static deleteLike = async (userId: number, postId: number) => {
    const likeResult = await pool.query(
      "DELETE from likes where user_id = ?  AND  post_id = ?",
      [userId, postId]
    );
    return likeResult;
  };
  static registerFollow = async (userId: number, postId: number) => {
    const likeResult = await pool.query(
      "insert into follows (follower_id , followed_id) values (? , ?)",
      [userId, postId]
    );
    return likeResult;
  };
  static deleteFollow = async (userId: number, postId: number) => {
    const likeResult = await pool.query(
      "DELETE from follows where follower_id = ?  AND  followed_id = ?",
      [userId, postId]
    );
    return likeResult;
  };
}
