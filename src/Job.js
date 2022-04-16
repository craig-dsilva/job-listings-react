import React from "react";

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
        <div className="job-tag">
          <p>{data.role}</p>
        </div>
        <div className="job-tag">
          <p>{data.level}</p>
        </div>
        {data.languages.map((language, index) => (
          <div className="job-tag" key={index}>
            <p>{language}</p>
          </div>
        ))}
        {data.tools.map((tool, index) => (
          <div className="job-tag" key={index}>
            <p>{tool}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
