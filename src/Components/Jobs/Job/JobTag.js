import React from "react";

const JobTag = (props) => {
  return typeof props.tagType === "string" ? (
    <div className="job-tag">
      <p>{props.tagType}</p>
    </div>
  ) : (
    props.tagType.map((tag, index) => {
      return (
        <div className="job-tag" key={index}>
          <p>{tag}</p>
        </div>
      );
    })
  );
};

export default JobTag;
