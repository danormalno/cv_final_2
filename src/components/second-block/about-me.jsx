import React from "react";
import "./../../styles/about-me.css";
import imgEducation from "./../../assets/education.png";

const AboutMe = () => {
  return (
    <div className="about-general">
      <h2>
        {" "}
        <img src={imgEducation} height={20} />
        Professional summary
      </h2>
      Dedicated, self-motivated, and talented software engineer with a passion
      and strong affinity forcutting-edge JavaScript technologies and product
      delivery. Extensive experience around 1 year. Iam responsible for
      designing, developing, testing, and debugging responsive web for the
      company
    </div>
  );
};

export default AboutMe;
