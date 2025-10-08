import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export type commentDataType = {
  id: number;
  user_id: number;
  post_id: number;
  content: string;
  created_at: Timestamp;
  image_url: string;
};