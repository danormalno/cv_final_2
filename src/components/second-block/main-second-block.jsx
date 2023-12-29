import React from "react";
import Expertice from "./expertise";
import "./../../styles/main-second-block.css";
import Experience from "./experience";
import AboutMe from "./about-me";

const MainSecondBlock = () => {
  return (
    <div>
      <Expertice />
      <div class="line"></div>
      <AboutMe />
      <Experience />
    </div>
  );
};

export default MainSecondBlock;
