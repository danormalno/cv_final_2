import "./about-me.css";
import img from "./../assets/myself.png";

import React from "react";
import { teamSize, textAboutMe } from "../consts/text-about-me";

const AboutMe = () => {
  return (
    <div className="all-screen">
      <div className="img-myself">
        <div className="text-about-me">
          <h1>Summary of Qualifications:</h1>
          {textAboutMe}
          <h1>Project Team Size:</h1>
          {teamSize}
        </div>
        <img width={280} height={400} src={img} alt="Myself" />
      </div>
    </div>
  );
};

export default AboutMe;
