import React from "react";
import "./header.css";
import WorkBase from "../work-with-base/work-with-base";
import {
  expertise,
  technologies,
  frimeworks,
  methodologies,
  languages,
} from "../../consts/main-scree-cv.jsx";
import img from "../../assets/header-img.png";
import AlBlocks from "../blocks-for-info/all-blocks.jsx";
import AboutMe from "../../pages/about-me.jsx";

const Header = () => {
  return (
    <div className="main-block">
      <div className="contact-block">
        <p className="contact">
          <p>+380736969005</p> <p>vb.dev.ua@gmail.com</p> <p>Kyiv, Ukraine</p>
        </p>
        <p className="vb">Volodymyr Borysenko</p>
        <img className="first-img-me" height={330} src={img} />
      </div>
      <div className="expertice-with-title">
        junior front end developer
        <p className="expertise ">
          <WorkBase item={expertise} />
          <WorkBase item={technologies} />
          <WorkBase item={frimeworks} />
          <WorkBase item={methodologies} />
          <WorkBase item={languages} />
        </p>
        <p className="list-item"></p>
      </div>
    </div>
  );
};

export default Header;
