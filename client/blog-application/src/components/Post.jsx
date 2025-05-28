import React from "react";

const Post = () => {
  return (
    <div className="post">
      <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*zWSeHOIq1C4jlSKBwm-oEQ.png" />
      <div className="texts">
        <h4>
          🚀 My Agoda Frontend Interview Experience | 82 LPA | Senior Software
          Engineer
        </h4>
        <p className="info">
          <a href="" className="author">
            Subrata Saha
          </a>
          <time>2025-01-06 16:25</time>
        </p>
        <p>
          🏢 Agoda is a major global travel platform headquartered in Singapore.
        </p>
      </div>
    </div>
  );
};

export default Post;
