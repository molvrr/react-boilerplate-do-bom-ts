import App from "../src/App";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("App", () => {
  render(<App />);

  it("should show Oi", () => {
    expect(screen.getByText("Oi")).toBeInTheDocument();
  });
});
