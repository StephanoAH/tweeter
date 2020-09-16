import React from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
  return (
    <div className="Tweetbox">
      <form action="">
        <div className="Tweetbox__input">
          <Avatar />
          <input placeholder="What's happening?" type="text" />
        </div>
        {/* <input
          className="Tweetbox__imageInput"
          placeholder="Optional: Enter a image URL"
          type="text"
        /> */}
        <Button className="Tweetbox__tweetbutton">Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox;
