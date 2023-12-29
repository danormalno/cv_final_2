import "./left-vertical-block.css";
import imgForLeftVerticalBlock from "./../../assets/img-for-left-block.png";

import React from "react";
import Contacts from "./contacts";

const LeftVerticalBlock = () => {
  return (
    <div className="main-block">
      <div>
        <img className="my-photo" height={262} src={imgForLeftVerticalBlock} />
        <Contacts />
      </div>
    </div>
  );
};

export default LeftVerticalBlock;
