import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Nav from "../Pages/Nav/Nav";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import CreateDevice from "../Pages/Device/CreateDevice";
import MyDevices from "../Pages/Device/MyDevices";
import UpdateDevice from "../Pages/Device/UpdateDevice";
import { Alert } from "react-bootstrap";
import NotFound from "../Pages/NotFound";
import Footer from "../Pages/Footer/Footer";

const Routes = ({ user, setUser, setUser_id, user_id }) => {
  const [devices, setDevices] = useState([]);
  const [ownDevices, setOwnDevices] = useState([]);
  return (
    <div>
      <Router>
        <Nav setUser={setUser} />
        <div className="container">
          <Alert className="alert d-none my-1" variant="danger"></Alert>
          {/* <h1>Status: {user === "Logged" ? "Logged in" : "Not Logged in"}</h1> */}
          <Switch>
            <Route
              path="/signup"
              render={(props) => (
                <Signup
                  {...props}
                  setUser={setUser}
                  setUser_id={setUser_id}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  user={user}
                  setUser={setUser}
                  setUser_id={setUser_id}
                />
              )}
            />
            <Route
              exact
              path="/my_devices"
              render={(props) => (
                <MyDevices {...props} devices={devices} />
              )}
            />
            <Route
              path="/create_device"
              render={(props) => <CreateDevice {...props} />}
            />
            <Route
              exact
              path="/my_dev/:id"
              render={(props) => (
                <UpdateDevice
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={(props) => (
                <Home {...props} devices={devices} setDevices={setDevices} />
              )}
            />
            <Route path="*" render={(props) => <NotFound />} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default Routes;
