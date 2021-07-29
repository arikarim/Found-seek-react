import React from "react";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../PureFunctions/Logout";
import "./Nav.css";
const Nav = ({user, setUser }) => {
  const history = useHistory();

  const toke = JSON.parse(localStorage.getItem("token"));
  return (
    <nav className="d-flex py-2 flex-column flex-md-row justify-content-between">
      <h3 className="my-auto mx-auto mx-md-2">Found&Seek</h3>
      {toke === "" || user === "Not Logged" ? (
        <ul className="list-unstyled my-auto d-flex py-3 justify-content-center justify-content-md-end">
          <li className="mx-3">
            <Link className="text-decoration-none link-light" to="/">
              Home
            </Link>
          </li>
          <li className="mx-3">
            <Link className="text-decoration-none link-light" to="/signup">
              Sign Up
            </Link>
          </li>
          <li className="mx-3">
            <Link className="text-decoration-none link-light" to="/login">
              Login
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="list-unstyled my-auto d-flex py-3 justify-content-center justify-content-md-end">
          <li className="mx-3">
            <Link className="text-decoration-none link-light" to="/">
              Home
            </Link>
          </li>
          <li className="mx-3">
            <Link className="text-decoration-none link-light" to="/my_devices">
              My devices
            </Link>
          </li>
          <li className="mx-3">
            <Link
              className="text-decoration-none link-light"
              to="/create_device"
            >
              Create device
            </Link>
          </li>
          <li className="mx-3">
            <button
              className="logout-btn"
              type="submit"
              onClick={(e) => logout(setUser, history)}
            >
              Log out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
