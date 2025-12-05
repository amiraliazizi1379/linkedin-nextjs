import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export type commentDataType = {
  comment_id: number;
  user_id: number;
  post_id: number;
  content: string;
  created_at: Timestamp;
  image_url: string;
  name: string;
  image: string;
  email: string;
  bio: string;
  readMore: boolean;
};
