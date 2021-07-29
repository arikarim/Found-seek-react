import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Signup from "../Pages/Signup";

describe("Header with Link", () => {
  test("should match with snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
