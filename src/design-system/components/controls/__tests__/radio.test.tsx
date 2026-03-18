import { render, screen, fireEvent } from "@testing-library/react";
import { Radio } from "../radio";

describe("Radio", () => {
  it("renders label and radio input", () => {
    render(<Radio label="Option A" />);

    expect(screen.getByText("Option A")).toBeInTheDocument();
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("handles selection", () => {
    render(<Radio label="Option A" />);

    const radio = screen.getByRole("radio");

    fireEvent.click(screen.getByText("Option A"));

    expect(radio).toBeChecked();
  });

  it("forwards name prop (important for groups)", () => {
    render(<Radio label="A" name="group1" />);

    expect(screen.getByRole("radio")).toHaveAttribute("name", "group1");
  });
});
