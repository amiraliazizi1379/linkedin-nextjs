import { pool } from "@/app/api/dbConnection/db";
import { ResultSetHeader } from "mysql2";

export class databaseOperation {
  static findEmail = async (email: string) => {
    const findedemail = await pool.query(
      "select * from users where email = $1 ;",
      [email]
    );

    return findedemail.rows[0];
  };
  static addUser = async (email: string, password: string) => {
    const result = await pool.query(
      "insert into users (email , password ) values  ( $1 , $2 ) RETURNING id ;",
      [email, password]
    );

    return result.rows[0].id;
  };

  static addProfileImage = async (image_url: string | null, id: number) => {
    return await pool.query("update users set  image = $1 where id = $2 ;", [
      image_url,
      id,
    ]);
  };
  static deleteProfileImage = async (id: number) => {
    return await pool.query("update users set image = null where id = $1 ;", [
      id,
    ]);
  };
  static deletePost = async (id: number) => {
    return await pool.query("delete from posts where id = $1 ;", [id]);
  };

  static editEmail = async (email: string | null, id: number) => {
    return await pool.query("update users set  email = $1 where id = $2 ;", [
      email,
      id,
    ]);
  };

  static addBio = async (bio: string | null, id: number) => {
    return await pool.query("update users set  bio = $1 where id = $2 ;", [
      bio,
      id,
    ]);
  };
  static editName = async (name: string, id: number) => {
    return await pool.query("update users set  name = $1  where id = $2 ;", [
      name,
      id,
    ]);
  };

  static findToken = async (id: number) => {
    const user = await pool.query("select * from users  where id = $1 ;", [id]);
    return user.rows[0];
  };

  static deleteToken = async (userId: number) => {
    return await pool.query(
      "update users set refreshtoken = null where id = $1 ;",
      [userId]
    );
  };

  static updateToken = async (token: string, id: number) => {
    return await pool.query(
      "update users set refreshtoken = $1 where id = $2 ;",
      [token, id]
    );
  };

  static getUserData = async (id: number) => {
    const userDat = await pool.query(
      "select id , name , email , image , bio from users where id = $1 ;",
      [id]
    );
    return userDat.rows[0];
  };
  static getImageUrl = async (id: number, table: string) => {
    const userDat = await pool.query(
      `select image from ${table} where id = $1 ;`,
      [id]
    );
    return userDat.rows[0];
  };

  static getAllUsers = async (id: number) => {
    const userDat = await pool.query(
      "select id , name , email , image , bio  , CASE  WHEN EXISTS ( SELECT 1  FROM follows WHERE follows.follower_id = $1 AND follows.followed_id = users.id) THEN TRUE ELSE FALSE  END AS is_following from users where id != $2 ;",
      [id, id]
    );
    return userDat.rows;
  };

  static addPost = async (userId: number, text: string, img: string | null) => {
    const addPostQuery = await pool.query<ResultSetHeader>(
      "insert into posts (user_id , content , image_url) values ($1 , $2 , $3);",
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
    const addCommentQuery = await pool.query(
      "insert into comments (user_id , post_id , content , image_url) values ($1 , $2 , $3 , $4) ;",
      [userId, postId, text, img]
    );
    return addCommentQuery;
  };

  static getPostsData = async (id: number) => {
    const postsDat = await pool.query(
      "SELECT posts.id AS post_id,posts.image_url,posts.content,posts.created_at,users.id AS user_id,users.image,users.name,users.email,users.bio,CASE WHEN EXISTS ( SELECT 1 FROM likes  WHERE likes.user_id = $1 AND likes.post_id = posts.id) THEN TRUE ELSE FALSE END AS liked,CASE  WHEN EXISTS ( SELECT 1  FROM follows WHERE follows.follower_id = $2 AND follows.followed_id = users.id) THEN TRUE ELSE FALSE  END AS is_following,COALESCE(like_counts.like_count, 0) AS like_count,COALESCE(comment_counts.comment_count, 0) AS comment_count FROM posts JOIN users ON posts.user_id = users.id LEFT JOIN (SELECT post_id, COUNT(*) AS like_count FROM likes GROUP BY post_id) AS like_counts ON like_counts.post_id = posts.id LEFT JOIN (SELECT post_id, COUNT(*) AS comment_count FROM comments GROUP BY post_id) AS comment_counts ON comment_counts.post_id = posts.id ORDER BY posts.created_at DESC limit 5;",
      [id, id]
    );
    return postsDat.rows;
  };

  static getComments = async (id: number) => {
    const postsComments = await pool.query(
      "select c.id AS comment_id,c.post_id,c.user_id, c.content,c.image_url,u.image, u.name,u.email , u.bio from comments c join  users u ON u.id = c.user_id where c.post_id = $1 ;",
      [id]
    );
    return postsComments.rows;
  };

  static registerLike = async (userId: number, postId: number) => {
    const likeResult = await pool.query(
      "insert into likes (user_id , post_id) values ($1 , $2) ;",
      [userId, postId]
    );
    return likeResult;
  };
  static deleteLike = async (userId: number, postId: number) => {
    const likeResult = await pool.query(
      "DELETE from likes where user_id = $1  AND  post_id = $2 ;",
      [userId, postId]
    );
    return likeResult;
  };
  static registerFollow = async (userId: number, postId: number) => {
    const likeResult = await pool.query(
      "insert into follows (follower_id , followed_id) values ($1 , $2);",
      [userId, postId]
    );
    return likeResult;
  };
  static deleteFollow = async (userId: number, postId: number) => {
    const likeResult = await pool.query(
      "DELETE from follows where follower_id = $1  AND  followed_id = $2;",
      [userId, postId]
    );
    return likeResult;
  };
}
