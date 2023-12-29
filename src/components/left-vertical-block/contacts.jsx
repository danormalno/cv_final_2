import React from "react";
import location from "./../../assets/location.png";
import tel from "./../../assets/tel.png";
import message from "./../../assets/message.png";
import link from "./../../assets/link.png";

const Contacts = () => {
  return (
    <div className="contact">
      <div>
        {" "}
        <img className="img-location" src={tel} height={13} />
        +380736969005
      </div>
      <div>
        {" "}
        <img className="img-location" src={message} height={13} />
        vb.dev.ua@gmail.com
      </div>{" "}
      <div>
        {" "}
        <img className="img-location" src={location} height={13} />
        Kyiv, Ukraine
      </div>
      <div>
        <a href="linkedin.com/in/vladimir- borysenko- b200b8238/">
          {" "}
          <img className="img-location" src={link} height={13} />
          Linkedin
        </a>
      </div>
      <h3>Expertise:</h3>
      <div>
        <ul className="ul-left-block">
          <li>JavaScript</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Redux</li>
          <li>HTML, CSS/SCSS/SASS</li>
        </ul>
      </div>
      <h3>Technologies:</h3>
      <div>
        <ul className="ul-left-block">
          <li>Webpack</li>
          <li>Bootstrap</li>
          <li>Figma</li>
          <li>JSON</li>
          <li>Tailwind</li>
          <li>i18n</li>
        </ul>
      </div>
      <h3>Languages:</h3>
      <ul className="ul-left-block">
        <li>English (B1)</li>
        <li>Ukraine (native)</li>
        <li>Russian</li>
      </ul>
    </div>
  );
};

export default Contacts;
