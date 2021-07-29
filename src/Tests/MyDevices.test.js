import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import MyDevices from "../Pages/Device/MyDevices";

describe("Pages", () => {
  test("should match with snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <MyDevices />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
