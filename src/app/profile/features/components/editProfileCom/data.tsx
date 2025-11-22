"use client";

import {
  setEditedBio,
  setEditedEmail,
  setEditedUserName,
  store,
} from "@/redux/store";
import { FaRegUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SlInfo } from "react-icons/sl";
export function makeData(
  name: string,
  email: string,
  bio: string,
  editedUserName: string,
  editedEmail: string,
  editedBio: string
) {


  const data = [
    {
      id: 53,
      name: "User name",
      content: name,
      logo: <FaRegUserCircle />,
      inputValue: editedUserName,
      reducer: setEditedUserName,
    },
    {
      id: 33,
      name: "Email",
      content: email,
      logo: <MdAlternateEmail />,
      inputValue: editedEmail,
      reducer: setEditedEmail,
    },
    {
      id: 21,
      name: "Bio",
      content: bio,
      logo: <SlInfo />,
      inputValue: editedBio,
      reducer: setEditedBio,
    },
  ];
  return data;
}
