import React from "react";

import Job from "./Job";

import data from "./data/data.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <main className="main">
        {data.map((job) => {
          return <Job key={job.id} data={job} />;
        })}
      </main>
    </div>
  );
}

export default App;
