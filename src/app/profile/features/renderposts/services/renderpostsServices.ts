import { setLoading, setPostData } from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function RenderPostsServices() {
  const dispatch = useDispatch();

  useEffect(() => {
    const res = async () => {
      const req = await GetNewAccessToken(
        "https://linkedin-nextjs-3b3x.onrender.com/api/getposts",
        {
          method: "GET",
        }
      );
      if (req) {
        const result = await req.json();
        dispatch(setPostData(result.postdata));
      }
      dispatch(setLoading(false));
    };
    res();
  }, [dispatch]);
}
