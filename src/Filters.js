import React from "react";

const Filters = ({ keywords }) => {
  return (
    <ul className="filters">
      {keywords.map((keyword, index) => {
        return (
          <li className="filter-keyword" key={index}>
            {keyword}
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
