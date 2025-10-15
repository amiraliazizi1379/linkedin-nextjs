import { setLoading, setPostData } from "@/app/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function RenderPostsServices() {
  const dispatch = useDispatch();

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
        dispatch(setPostData(result.postdata));
      }
    };
    res();
  }, []);
}
