import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Login from "../Pages/Login";

describe("Header with Link", () => {
  test("should match with snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
