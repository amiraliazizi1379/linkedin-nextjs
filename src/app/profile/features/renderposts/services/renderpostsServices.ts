import { setLoading, setPostData, store } from "@/redux/store";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";

export async function RenderPostsServices() {
  const req = await GetNewAccessToken(`/api/getposts`, {
    method: "GET",
  });
  if (req?.ok) {
    const result = await req.json();
    store.dispatch(setPostData(result.postdata));
  }
  store.dispatch(setLoading(false));
}
