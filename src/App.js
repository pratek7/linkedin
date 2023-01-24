import React from "react";
import Header from "./Header";
import "./App.css";
import SideBar from "./SideBar";
import Feed from "./Feed";

function App() {
  return (
    <div className="App">
      {/* header  */}
      <Header />
      {/* sidebar  */}
      <div className="app__body">
        <SideBar />
        {/* feed  */}
        <Feed />
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
