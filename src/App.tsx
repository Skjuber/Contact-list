import React from "react";
import MainRouter from "./components/MainRouter";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
          <h1 className="Header">Contact-List</h1>
      <MainRouter />
 
    </div>
  );
};

export default App;
