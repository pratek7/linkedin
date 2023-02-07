import React, { forwardRef } from "react";
import "./Post.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import InputOption from "./InputOption";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <AccountCircleIcon src={photoUrl}>{name[0]}</AccountCircleIcon>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />

        <InputOption Icon={ChatIcon} title="Comment" color="gray" />

        <InputOption Icon={ShareIcon} title="Share" color="gray" />

        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
