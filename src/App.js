import React, { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import SideBar from "./SideBar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, login } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./Firebase";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="App">
      {/* header  */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="app__body">
            <SideBar />
            {/* feed  */}
            <Feed />
            {/* widgets */}
            <Widgets />
          </div>
        </>
      )}
      {/* sidebar  */}
    </div>
  );
}

export default App;
