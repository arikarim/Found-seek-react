import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import CreateDevice from "../Pages/Device/CreateDevice";

describe("Pages", () => {
  test("full app rendering/navigating", () => {
    render(<CreateDevice />, { wrapper: MemoryRouter });
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText("Available?")).toBeInTheDocument;
  });
  test("should match with snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <CreateDevice />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
