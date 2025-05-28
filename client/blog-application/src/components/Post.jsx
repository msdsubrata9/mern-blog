import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, cover, summary, createdAt, author }) => {
  return (
    <div className="post">
      <Link to={`/post/${_id}`}>
        <img src={"http://localhost:4000/" + cover} />
      </Link>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h4>{title}</h4>
        </Link>
        <p className="info">
          <a href="" className="author">
            {author?.username}
          </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Post;
