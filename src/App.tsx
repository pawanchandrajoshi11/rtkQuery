import { FormEvent, useState } from "react";
import "./App.css";
import PostCard, { Post } from "./components/PostCard";
import { useGetPostsQuery, useNewPostsMutation } from "./redux/api";

function App() {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  const [newPost] = useNewPostsMutation();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post: Post = {
      title,
      body,
      userId: Math.random() * 10000,
      id: Math.random() * 10000,
    };

    newPost(post);
    setTitle("");
    setBody("");
  };
  return (
    <>
      <div>
        <h1>My App</h1>
        <form onSubmit={handleSubmitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((i) => <PostCard key={i.id} post={i} />)
        )}
      </div>
    </>
  );
}

export default App;
