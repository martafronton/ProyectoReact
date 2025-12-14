import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import DragPeli from "../components/DragPeli";

test("muestra películas disponibles y permite quitar de favoritos", () => {
  render(<DragPeli />);
  expect(screen.getByText("Origen")).toBeInTheDocument();

  const dropZone = screen.getByText("⭐ Favoritos").parentElement;
  const peli = screen.getByText("Origen");
  fireEvent.dragStart(peli, { dataTransfer: { setData: vi.fn() } });
  fireEvent.drop(dropZone, { dataTransfer: { getData: () => "Origen" } });

  expect(screen.getByText("Quitar")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Quitar"));
  expect(screen.getByText("Origen")).toBeInTheDocument();
});
