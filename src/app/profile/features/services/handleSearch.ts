import {
  setNotFoundSearch,
  setusersSearch,
  setpostsSearch,
  store,
} from "@/redux/store";

export function handleSreach(text: string, page: string) {
  const { allUsers, postData } = store.getState().app;
  if (page === "network") {
    const find = allUsers.filter((user) => {
      let { name, email, bio } = user;
      if (name) name = name.toLowerCase();
      email = email.toLowerCase();
      if (bio) bio = bio.toLowerCase();
      return (
        (name && name.includes(text)) ||
        email.includes(text) ||
        (bio && bio.includes(text)) ||
        (name || bio || email) === text ||
        email.startsWith(text) ||
        (name && name.startsWith(text)) ||
        (bio && bio.startsWith(text))
      );
    });
    store.dispatch(setusersSearch(find));
    if (text.length > 0 && find.length === 0) {
      store.dispatch(setNotFoundSearch(true));
    } else {
      store.dispatch(setNotFoundSearch(false));
    }
  }

  if (page === "home") {
    const find = postData.filter((user) => {
      let { name, email, bio, content } = user;
      if (name) name = name.toLowerCase();
      email = email.toLowerCase();
      if (bio) bio = bio.toLowerCase();
      if (content) content = content.toLowerCase();
      return (
        (name && name.includes(text)) ||
        email.includes(text) ||
        (bio && bio.includes(text)) ||
        (content && content.includes(text)) ||
        (name || bio || email || content) === text ||
        email.startsWith(text) ||
        (name && name.startsWith(text)) ||
        (content && content.startsWith(text)) ||
        (bio && bio.startsWith(text))
      );
    });
    if (text && find.length === 0) {
      store.dispatch(setNotFoundSearch(true));
    } else {
      store.dispatch(setNotFoundSearch(false));
    }
    store.dispatch(setpostsSearch(find));
  }
}
