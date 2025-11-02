import { configureStore, createSlice } from "@reduxjs/toolkit";
import { userData } from "@/types/userDataType";
import { postdatas } from "@/types/postDataType";
import { usersType } from "@/app/profile/myNetwork/type/allUsersDataType";
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
    saveBt: false,
    loading: false,
    editedUserName: "",
    editedEmail: "",
    editedBio: "",
    activeEditingUserInfo: false,
    btnLoading: false,
    allUsers: [] as usersType[],
    search: [],
    notFoundSearch: false,
    editEmailStatus: false,
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
    setSaveBt: (state, action) => {
      state.saveBt = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setFullScreenSrc: (state, action) => {
      state.fullScreenImgSrc = action.payload;
    },
    setEditedUserName: (state, action) => {
      state.editedUserName = action.payload;
    },
    setEditedEmail: (state, action) => {
      state.editedEmail = action.payload;
    },
    setEditedBio: (state, action) => {
      state.editedBio = action.payload;
    },
    setActiveEditingUserInfo: (state, action) => {
      state.activeEditingUserInfo = action.payload;
    },
    setBtnLoading: (state, action) => {
      state.btnLoading = action.payload;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setNotFoundSearch: (state, action) => {
      state.notFoundSearch = action.payload;
    },
    setEditEmailStatus: (state, action) => {
      state.editEmailStatus = action.payload;
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
  setSaveBt,
  setLoading,
  setFullScreenSrc,
  setEditedBio,
  setEditedEmail,
  setEditedUserName,
  setActiveEditingUserInfo,
  setBtnLoading,
  setAllUsers,
  setSearch,
  setNotFoundSearch,
  setEditEmailStatus,
} = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
