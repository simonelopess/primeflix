import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Home from "../pages/Home";

describe("Home Component", () => {
  it("should render correctly", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(
        screen.getAllByText(
          (_context, element) => element.textContent === "Acessar"
        )
      ).toHaveLength(10);
    });
  });
});
