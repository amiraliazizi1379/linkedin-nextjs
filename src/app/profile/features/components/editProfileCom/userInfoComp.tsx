"use client";

import {
  RootState,
  setEditedBio,
  setEditedEmail,
  setEditedUserName,
  setPostBt,
} from "@/redux/store";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { makeData } from "./data";

export function EditUserInfo() {
  const dispatch = useDispatch();
  const {
    editEmailStatus,
    userData,
    activeEditingUserInfo,
    editedBio,
    editedUserName,
    editedEmail,
  } = useSelector((state: RootState) => state.app);
  const { id, name, email, bio } = userData;
  useEffect(() => {
    dispatch(setEditedUserName(name));
    dispatch(setEditedEmail(email));
    dispatch(setEditedBio(bio));
  }, []);
  const data = makeData(
    name,
    email,
    bio,
    editedUserName,
    editedEmail,
    editedBio
  );
  return (
    <article className="ml-">
      {data.length > 1 &&
        data.map((item) => {
          const { id, name, content, logo, inputValue, reducer } = item;
          return (
            <div
              key={id}
              className="flex items-center gap-2 mt-6 text-md h-[2rem]"
            >
              <span className="text-xl text-[#2c95fe]">{logo}</span>

              <h1 className="text-[#2c95fe]">{name}</h1>
              {activeEditingUserInfo ? (
                <input
                  onChange={(e) => {
                    dispatch(reducer(e.target.value));
                    if (e.target.value === content) {
                      dispatch(setPostBt(false));
                    } else {
                      dispatch(setPostBt(true));
                    }
                  }}
                  type="text"
                  value={inputValue ? inputValue : ''}
                  className=" px-2 py-0.5 outline-none  focus:border-b-1 focus:border-[#2c95fe]"
                  autoFocus
                />
              ) : (
                <h1 className="ml-2">{content}</h1>
              )}
            </div>
          );
        })}
      {editEmailStatus && (
        <p className="text-red-500 mt-8">email is already registered</p>
      )}
    </article>
  );
}
