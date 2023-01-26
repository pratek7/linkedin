import React from "react";
import Header from "./Header";
import "./App.css";
import SideBar from "./SideBar";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {/* header  */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          {/* feed  */}
          <Feed />
          {/* widgets */}
        </div>
      )}
      {/* sidebar  */}
    </div>
  );
}

export default App;
