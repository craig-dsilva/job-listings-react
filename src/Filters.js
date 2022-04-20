import React, { useContext } from "react";

import Context from "./Context";

const Filters = ({ keywords }) => {
  const ctx = useContext(Context);

  return (
    <ul className="filters">
      {keywords.map((keyword, index) => {
        return (
          <li
            className="filter-keyword"
            key={index}
            onClick={() => ctx.removeFilter(index)}
          >
            {keyword}
          </li>
        );
      })}
      <p className="clear-filters" onClick={ctx.emptyFilter}>
        Clear
      </p>
    </ul>
  );
};

export default Filters;
