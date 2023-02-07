import { FiberManualRecord, InfoOutlined } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
    </div>;
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoOutlined />
      </div>
      {newsArticle("LINKEDIN DEVELOPERS ARE CRAZY ", "Top news - 99 readers")}
      {newsArticle("tesla hits new higts", "wowww blow up ")}
    </div>
  );
};

export default Widgets;
