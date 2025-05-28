import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

const PostPage = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then((response) => response.json())
      .then((postInfo) => setPostInfo(postInfo));
  }, []);
  if (!postInfo) return <h1>No Post Info Present</h1>;
  return (
    <div className="post_page">
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} />
      </div>
      <h1>{postInfo.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      {userInfo.id === postInfo.author._id && (
        <button onClick={() => navigate(`/edit/${postInfo._id}`)}>
          Edit this Post
        </button>
      )}
    </div>
  );
};

export default PostPage;
