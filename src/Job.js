import React from "react";

const Job = ({ data }) => {
  console.log(data.logo);
  return (
    <div className="job">
      <img src={data.logo} alt={data.company} />
      <h3>{data.company}</h3>
      {data.new ? <p>New</p> : ""}
      {data.featured ? <p>Featured</p> : ""}
      <h4>{data.position}</h4>
      <p>{data.postedAt}</p>
      <p>{data.contract}</p>
      <p>{data.location}</p>
      <hr />
      <p>{data.role}</p>
      <p>{data.level}</p>
    </div>
  );
};

export default Job;
