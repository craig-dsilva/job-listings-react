import React, { useState } from "react";

import Filters from "./Filters";

import Context from "./Context";

import data from "./data/data.json";

import "./App.css";
import Jobs from "./Components/Jobs/Jobs";

function App() {
  const [jobs, setJobs] = useState(data);
  const [keywords, setKeywords] = useState([]);

  const addFilter = (keyword) => {
    const copyOfKeywords = [...keywords];
    if (!copyOfKeywords.includes(keyword)) {
      copyOfKeywords.push(keyword);
    }
    setKeywords(copyOfKeywords);
    setJobs(
      data.filter((job) => {
        return (
          copyOfKeywords.includes(job.role) ||
          copyOfKeywords.includes(job.level)
        );
      })
    );
  };

  return (
    <Context.Provider value={addFilter} className="App">
      <header className="header"></header>
      <Filters keywords={keywords} />
      <Jobs jobs={jobs} />
    </Context.Provider>
  );
}

export default App;
