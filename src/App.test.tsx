import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Star Wars Test", () => {
  render(<App />);
  const headerText = screen.getByText(/Star Wars Test/i);
  expect(headerText).toBeInTheDocument();
});
