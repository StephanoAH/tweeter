import React, { useState } from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox/Tweetbox";
import Post from "./Post/Post.js";
import db from "../../firebase"

function Feed() {
  const [posts, setPosts] = useState([]);

  useE
  return (
    <div className="Feed">
      {/* Home */}
      <div className="Feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <Tweetbox />

      {/* Post */}
      <Post />
    </div>
  );
}

export default Feed;
