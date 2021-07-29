import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import UpdateDevice from "../Pages/Device/UpdateDevice";

describe("Pages", () => {
  test("should match with snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <UpdateDevice />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
