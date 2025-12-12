import { setLoading, setPostData, store } from "@/redux/store";
import { postdatas } from "@/types/postDataType";
import { GetNewAccessToken } from "@/utils/getNewAccessToken";

export async function RenderPostsServices() {
  const req = await GetNewAccessToken(`/api/getposts`, {
    method: "GET",
  });
  if (req?.ok) {
    let { postdata } = await req.json();
    postdata = (postdata as postdatas[]).map((itm) => ({
      ...itm,
      readMore: false,
      activePostOptions: true,
    }));
    store.dispatch(setPostData(postdata));
  }
  store.dispatch(setLoading(false));
}
