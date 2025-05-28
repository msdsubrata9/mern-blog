import React from "react";
import { formatISO9075 } from "date-fns";

const Post = ({ title, cover, summary, createdAt, author }) => {
  return (
    <div className="post">
      <img src={"http://localhost:4000/" + cover} />
      <div className="texts">
        <h4>{title}</h4>
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
