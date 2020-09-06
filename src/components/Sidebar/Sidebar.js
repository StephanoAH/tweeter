// Project
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

// Dependencies
import { Button } from "@material-ui/core";

// Icons
import TwiterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

function Sidebar() {
  return (
    <div className="Sidebar__container">
      {/* Twiter icon*/}
      <TwiterIcon className="Sidebar__twitterIcon" />

      {/* Sidebar option */}
      <SidebarOption active Icon={HomeOutlinedIcon} text="Home" />
      <SidebarOption Icon={SearchOutlinedIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notification" />
      <SidebarOption Icon={EmailOutlinedIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
      <SidebarOption Icon={AccountCircleOutlinedIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

      {/* Tweet */}
      <Button variant="outlined" className="Sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
