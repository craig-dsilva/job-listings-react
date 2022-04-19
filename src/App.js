import React, { useState } from "react";

import Filters from "./Filters";

import data from "./data/data.json";

import "./App.css";
import Jobs from "./Components/Jobs/Jobs";

function App() {
  const [jobs, setJobs] = useState(data);
  const [keywords, setKeywords] = useState([]);

  const addFilter = () => {
    const copyOfKeywords = [...keywords];
    // Push
    setKeywords(copyOfKeywords);
    setJobs(
      data.filter((job) => {
        return keywords.includes(job.role) || keywords.includes(job.level);
      })
    );
  };

  console.log(jobs);

  return (
    <div className="App">
      <header className="header"></header>
      <Filters />
      <Jobs jobs={jobs} />
    </div>
  );
}

export default App;
