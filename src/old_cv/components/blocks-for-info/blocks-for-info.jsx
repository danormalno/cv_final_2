import React from "react";
import "./blocks-for-info.css";

const BlocksForInfo = ({ title, expirience, descrription }) => {
  return (
    <div className="main-container">
      <div className="main-with-border">
        <div className="title-block">{title}</div>
        <div className="description-fo-the-block">{expirience}</div>
        <div className="second-stage-description">{descrription}</div>
      </div>
    </div>
  );
};

export default BlocksForInfo;
