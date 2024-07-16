// src/App.tsx

import React from "react";
import CalendarScheduler from "./components/calendar";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calendar Scheduler</h1>
      </header>
      <main>
        <CalendarScheduler />
      </main>
    </div>
  );
};

export default App;
