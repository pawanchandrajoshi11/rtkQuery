import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../components/PostCard";

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["Posts"], // more for referencing
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: () => "posts",
      providesTags: ["Posts"],
    }),
    newPosts: builder.mutation<Post, Post>({
      query: (post) => ({
        url: "posts", // sending URL
        method: "POST", // sending method
        body: post, // data that we are sending to the backend
      }),
      invalidatesTags: ["Posts"], // this will run the get query which has "Posts" in providesTags
    }),
  }),
});

export const { useGetPostsQuery, useNewPostsMutation } = myApi;
