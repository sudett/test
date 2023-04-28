import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CommentInterface, UserInterface } from "./types";

type UserArgsType = {
  username: string;
  email: string;
};

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // get user by username and email
    getUserByUsernameAndEmail: builder.query<UserInterface, UserArgsType>({
      query: (args) => {
        const { username, email } = args;
        return `users?username=${username}&email=${email}`;
      },
    }),

    // get all comments
    getComments: builder.query<CommentInterface[], undefined>({
      query: () => {
        return "comments";
      },
    }),

    // get all users
    getUsers: builder.query<UserInterface[], undefined>({
      query: () => {
        return "users";
      },
    }),
  }),
});

export const {
  useLazyGetUserByUsernameAndEmailQuery,
  useGetCommentsQuery,
  useGetUsersQuery,
} = jsonPlaceholderApi;
