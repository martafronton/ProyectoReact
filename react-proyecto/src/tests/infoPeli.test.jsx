import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import InfoPeli from "../components/InfoPeli";

test("renders title and description", () => {
  render(<InfoPeli />);
  expect(screen.getByText(/Mi Lista de Películas/i)).toBeInTheDocument();
  expect(screen.getByText(/Bienvenido a la aplicación de películas/i)).toBeInTheDocument();
});

