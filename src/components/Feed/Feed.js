import React from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox/Tweetbox";
import Post from "./Post/Post.js";

function Feed() {
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
