import React from "react";

const WorkBase = ({ item }) => {
  return (
    <div>
      <ul>
        {item.map((el, index) => (
          <li className={index === 0 ? "first-element " : ""} key={index}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkBase;
