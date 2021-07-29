import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { alert } from "../../PureFunctions/alert";
import {InvalidAlert} from "../../PureFunctions/InvalidAlert";
import "./registration.css";

const Login = ({ setUser, user, setUser_id }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:3001/users/sign_in", {
        user: {
          email: email,
          password: password,
        },
      });
      setUser_id(data.data.user.id);
      localStorage.setItem("user_id", JSON.stringify(data.data.user.id));
      localStorage.setItem("token", JSON.stringify(data.headers.authorization));
      data.data.message === "You are logged in."
        ? setUser("Logged")
        : setUser("Not Logged");
      history.push("/");
      alert(data);
    } catch (error) {
      InvalidAlert()
      console.log(error);
    }
  };
  if (user === "Logged") {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="login-div">
      <form
        onSubmit={handleSubmit}
        className="my-5 d-flex flex-column  col-10 col-md-8 mx-auto p-5"
      >
        <label htmlFor="email" className="col-form-label my-2">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className="my-3"
          type="email"
          placeholder="email"
          required
        />
        <label htmlFor="password" className="col-form-label my-2">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className="my-3"
          type="password"
          placeholder="password"
          required
        />
        <button className="my-2 btn btndark" type="submit">
          Log in
        </button>
        <a className="text-decoration-none link-dark my-2" href="/signup">
          Sign up
        </a>
      </form>
    </div>
  );
};

export default Login;
