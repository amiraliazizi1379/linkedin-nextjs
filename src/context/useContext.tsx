"use client";

import { createContext, useState, ReactNode, useContext } from "react";

type contextType = {
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  accesstoken: string;
  setAccesstoken: (value: string) => void;
};

export const userContext = createContext<contextType | null>(null);

export default function AppProvider({ children }: { children: ReactNode }) {
  const [showPassword, setShowPassword] = useState(false);
  const [accesstoken, setAccesstoken] = useState("");

  return (
    <userContext.Provider
      value={{ showPassword, setShowPassword, accesstoken, setAccesstoken }}
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
