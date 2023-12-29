import React from "react";
import "./../../styles/education.css";
import imgEducation from "./../../assets/education.png";

const Education = () => {
  return (
    <div className="general">
      <h2>
        {" "}
        <img src={imgEducation} height={20} />
        Education:
      </h2>
      <p className="year">(2009 -2014)</p>
      <p className="year">ZAPORIZHZHYA NATIONAL TECHNICAL UNIVERSITY</p>
      <p>Design information technologies</p>
    </div>
  );
};

export default Education;
