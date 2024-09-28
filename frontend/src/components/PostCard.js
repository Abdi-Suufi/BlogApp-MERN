import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
        <p className="card-text">
          <small className="text-muted">By {post.user.username}</small>
        </p>
      </div>
    </div>
  );
};

export default PostCard;