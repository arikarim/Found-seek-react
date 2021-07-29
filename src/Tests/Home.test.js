import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Home from "../Pages/Home";

describe("Header with Link", () => {
  test("full app rendering/navigating", () => {
    render(<Home />, { wrapper: MemoryRouter });
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText("Welcome to the home page")).toBeInTheDocument;
  });
  test("should match with snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
