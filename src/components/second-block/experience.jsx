import React from "react";
import "./../../styles/education.css";
import imgExpirience from "./../../assets/expirience.png";

const Experience = () => {
  return (
    <div className="general">
      <h2>
        <img src={imgExpirience} height={20} />
        Experience
      </h2>
      <p className="company">ChessWizard - JavaScript(react) developer</p>
      <p className="year">(October 2022 - September 2023)</p>
    </div>
  );
};

export default Experience;
