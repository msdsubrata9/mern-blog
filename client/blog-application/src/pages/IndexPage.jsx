import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const response = await fetch("http://localhost:4000/post");
    const posts = await response.json();
    setPosts(posts);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => {
          return <Post key={post._id} {...post} />;
        })}
    </div>
  );
};

export default IndexPage;
