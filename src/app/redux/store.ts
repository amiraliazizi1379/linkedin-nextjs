import { configureStore, createSlice } from "@reduxjs/toolkit";
import { userData } from "@/types/userDataType";
import { postdatas } from "@/types/postDataType";
const appSlice = createSlice({
  name: "app",
  initialState: {
    showPassword: false,
    popup: false,
    createPost: false,
    postData: [] as postdatas[],
    userData: {} as userData,
    editProfile: false,
    largImg: false,
    postImgSrc: "",
    commentImgSrc: "",
    userImgSrc: "",
    fullScreenImgSrc: "",
    postText: "",
    commentText: "",
    postBt: false,
    loading: false,
  },

  reducers: {
    setShowPassword: (state, action) => {
      state.showPassword = action.payload;
    },
    setPopup: (state, action) => {
      state.popup = action.payload;
    },
    setCreatePost: (state, action) => {
      state.createPost = action.payload;
    },
    setPostData: (state, action) => {
      state.postData = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setEditProfile: (state, action) => {
      state.editProfile = action.payload;
    },
    setLargImg: (state, action) => {
      state.largImg = action.payload;
    },
    setpostImgSrc: (state, action) => {
      state.postImgSrc = action.payload;
    },
    setCommentImgSrc: (state, action) => {
      state.commentImgSrc = action.payload;
    },
    setuserImgSrc: (state, action) => {
      state.userImgSrc = action.payload;
    },
    setPostText: (state, action) => {
      state.postText = action.payload;
    },
    setCommentText: (state, action) => {
      state.commentText = action.payload;
    },
    setPostBt: (state, action) => {
      state.postBt = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setFullScreenSrc: (state, action) => {
      state.fullScreenImgSrc = action.payload;
    },
  },
});

export const {
  setShowPassword,
  setCreatePost,
  setEditProfile,
  setPopup,
  setPostData,
  setUserData,
  setpostImgSrc,
  setCommentImgSrc,
  setuserImgSrc,
  setLargImg,
  setCommentText,
  setPostText,
  setPostBt,
  setLoading,
  setFullScreenSrc,
} = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
