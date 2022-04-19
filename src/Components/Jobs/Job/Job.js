import React from "react";
import JobTag from "./JobTag";

const Job = ({ data }) => {
  return (
    <div className={`job ${data.featured ? "featured-border" : ""}`}>
      <div className="job-info">
        <img className="job-logo" src={data.logo} alt={data.company} />
        <h3 className="job-company">{data.company}</h3>
        <div className="job-keywords">
          {data.new ? <p className="new-keyword">New</p> : ""}
          {data.featured ? <p className="featured-keyword">Featured</p> : ""}
        </div>
        <h4 className="job-position">{data.position}</h4>
        <div className="job-description">
          <p>{data.postedAt}</p>
          <p>{data.contract}</p>
          <p>{data.location}</p>
        </div>
      </div>
      <hr />
      <div className="job-tags">
        <JobTag tagType={data.role} />
        <JobTag tagType={data.level} />
        <JobTag tagType={data.languages} />
        <JobTag tagType={data.tools} />
      </div>
    </div>
  );
};

export default Job;
