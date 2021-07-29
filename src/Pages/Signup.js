import axios from "axios";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { alert } from "../PureFunctions/alert";
import "./registration.css";

const Signup = ({ user, setUser, setUser_id }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const toke = JSON.parse(localStorage.getItem("token"));
  console.log(toke);
  if (toke !== "" && toke !== null) {
    return <Redirect to={"/"} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:3001/users", {
        user: {
          email: email,
          password: password,
        },
      });
      setUser_id(data.data.user.id);
      localStorage.setItem("user_id", JSON.stringify(data.data.user.id));
      localStorage.setItem("token", JSON.stringify(data.headers.authorization));
      data.data.message === "Signed up sucessfully."
        ? setUser("Logged")
        : setUser("Not Logged");
      history.push("/");
      alert(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signup-div">
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
          Sign up
        </button>
        <a className="text-decoration-none link-dark my-2" href="/login">
          Log in
        </a>
      </form>
    </div>
  );
};

export default Signup;
