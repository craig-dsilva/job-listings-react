import React from "react";

import Job from "./Job/Job";

const Jobs = (props) => {
  return (
    <main className="main">
      {props.jobs.map((job) => {
        return <Job key={job.id} data={job} />;
      })}
    </main>
  );
};

export default Jobs;
