import { commentDataType } from "./commentDataType";

export type postdatas = {
  post_id: number;
  user_id: number;
  content: string;
  image_url: string;
  liked?: boolean;
  is_following: boolean;
  comment: boolean;
  commentData: commentDataType[];
  image: string;
  name: string;
  email: string;
};
