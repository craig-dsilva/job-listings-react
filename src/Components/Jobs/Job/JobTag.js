import React, { useContext } from "react";

import Context from "../../../Context";

const JobTag = (props) => {
  const ctx = useContext(Context);

  return typeof props.tagType === "string" ? (
    <div className="job-tag" onClick={() => ctx(props.tagType)}>
      <p>{props.tagType}</p>
    </div>
  ) : (
    props.tagType.map((tag, index) => {
      return (
        <div className="job-tag" key={index} onClick={() => ctx(tag)}>
          <p>{tag}</p>
        </div>
      );
    })
  );
};

export default JobTag;
