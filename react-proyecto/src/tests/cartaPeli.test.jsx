import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import CartaPeli from "../components/CartaPeli";

describe("Componente CartaPeli", () => {
  test("muestra el título y el año correctamente", () => {
    render(<CartaPeli titulo="Los Goonies" año="1985" imagen="test.jpg" />);
    expect(screen.getByText("Los Goonies")).toBeInTheDocument();
    expect(screen.getByText(/1985/)).toBeInTheDocument();
  });

  test("renderiza la imagen con el alt correcto", () => {
    render(<CartaPeli titulo="Los Goonies" año="1985" imagen="test.jpg" />);
    const imagen = screen.getByAltText("Poster de Los Goonies");
    expect(imagen).toBeInTheDocument();
    expect(imagen).toHaveAttribute("src", "test.jpg");
  });
});
