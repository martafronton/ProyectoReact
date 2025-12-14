import { render, screen } from "@testing-library/react";
import infoPeli from "../components/infoPeli";

test("renders title and description", () => {
  render(<infoPeli/>);
  expect(screen.getByText(/Mi Lista de Películas/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Bienvenido a la aplicación de películas/i)
  ).toBeInTheDocument();
});
