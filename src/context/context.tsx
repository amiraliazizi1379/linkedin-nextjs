"use client";

import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type contextType = {
  postImgFile: File | null;
  setPostImgFile: Dispatch<SetStateAction<File | null>>;
};

export const userContext = createContext<contextType | null>(null);

export default function AppProvider({ children }: { children: ReactNode }) {
  const [postImgFile, setPostImgFile] = useState<File | null>(null);

  return (
    <userContext.Provider
      value={{
        postImgFile,
        setPostImgFile,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
export const useUserContext = () => {
  const context = useContext(userContext);
  if (!context) throw new Error("you must use context in provider");
  return context;
};
