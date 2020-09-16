// Project
import React from "react";
import "./Post.css";

// Dependencies
import { Avatar } from "@material-ui/core";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="Post">
      <div className="Post__avatar">
        <Avatar />
      </div>
      <div className="Post__body">
        <div className="Post__header">
          <div className="Post__headerText">
            <h3>
              Stephano Hernandez{" "}
              <span className="Post__headerSpecial">
                <VerifiedUserOutlinedIcon className="Post__badge" />
              </span>
            </h3>
          </div>
          <div className="Post__headerDescription">
            <p>
              Mi vieja mula no es lo que era,no es lo que era, no es lo que era,
              no es lo que era.
            </p>
          </div>
        </div>
        <div className="Post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <ShareIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
