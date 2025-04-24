import React from "react";

export interface Post {
  title: string;
  body: string;
  userId: number;
  id: number;
}

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
