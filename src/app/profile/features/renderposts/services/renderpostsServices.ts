import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { useEffect, useState } from "react";

type datas = {
  post_id: number;
  user_id: number;
  content: string;
  image_url: string;
  liked?: boolean;
  is_following: boolean;
};

export function RenderPostsServices() {
  const [data, setData] = useState<datas[]>([]);
  useEffect(() => {
    const res = async () => {
      const req = await GetNewAccessToken(
        "http://localhost:3000/api/getposts",
        {
          method: "GET",
        }
      );
      if (req) {
        const result = await req.json();
        setData(result.postdata);
      }
    };
    res();
  }, []);

  async function handleLikes(id: number, liked: boolean | undefined) {
    setData((pre) =>
      pre.map((post) =>
        post.post_id === id ? { ...post, liked: !post.liked } : post
      )
    );

    try {
      if (!liked) {
        const res = await GetNewAccessToken("/api/registerlike", {
          method: "POST",
          body: JSON.stringify(id),
        });
      } else {
        const res2 = await GetNewAccessToken("/api/registerlike", {
          method: "DELETE",
          body: JSON.stringify(id),
        });
      }
    } catch {
      setData((pre) =>
        pre.map((post) =>
          post.post_id === id ? { ...post, liked: !post.liked } : post
        )
      );
    }
  }

  async function handleFollow(id: number, is_following: boolean) {
    setData((pre) =>
      pre.map((post) =>
        post.user_id === id
          ? { ...post, is_following: !post.is_following }
          : post
      )
    );

    try {
      if (!is_following) {
        const res = await GetNewAccessToken("/api/registerfollow", {
          method: "POST",
          body: JSON.stringify(id),
        });
      } else {
        const res2 = await GetNewAccessToken("/api/registerfollow", {
          method: "DELETE",
          body: JSON.stringify(id),
        });
      }
    } catch {
      setData((pre) =>
        pre.map((post) =>
          post.user_id === id
            ? { ...post, is_following: !post.is_following }
            : post
        )
      );
    }
  }
  return {
    handleLikes,
    handleFollow,
    data,
  };
}
