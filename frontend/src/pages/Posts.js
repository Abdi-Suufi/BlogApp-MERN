import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4" key={post._id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;