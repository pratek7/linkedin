import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./Firebase";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic] = useState("");
  const dispatch = useDispatch();
  const LoginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err));
  };

  const register = () => {
    if (!name) {
      return alert("enter a full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="login">
      <img src="" alt="" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name (requiired if registering)"
        />
        <input
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          type="text"
          placeholder="Profile pic URL (optionals)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={LoginToApp}>
          Sign In
        </button>
      </form>
      <p>Not a member?</p>
      <span className="login__register" onClick={register}>
        Register Now
      </span>
    </div>
  );
};

export default Login;
