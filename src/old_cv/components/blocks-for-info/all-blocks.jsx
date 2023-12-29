import React from "react";
import BlocksForInfo from "./blocks-for-info";
import "./blocks-for-info.css";

const AlBlocks = () => {
  return (
    <div className="final-block">
      <BlocksForInfo
        title="Education (2009 -2014)"
        expirience="ZAPORIZHZHYA NATIONAL TECHNICAL UNIVERSITY"
        descrription="Design information technologies"
      />
      <BlocksForInfo
        title="Junior front end developer (October 2022 - September 2023)"
        expirience="CHESSWIZARDS JUNIOR"
        descrription="JAVASCRIPT(REACT) DEVELOPER"
      />
      <BlocksForInfo
        title="Junior front end developer (September 2023 - now)"
        expirience="FREELANCE"
        descrription="JAVASCRIPT(REACT) DEVELOPER"
      />
    </div>
  );
};

export default AlBlocks;
