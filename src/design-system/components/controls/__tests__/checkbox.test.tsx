import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "../checkbox";

describe("Checkbox", () => {
  it("renders label and input", () => {
    render(<Checkbox label="Accept terms" />);

    expect(screen.getByText("Accept terms")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("places checkbox on the left by default", () => {
    render(<Checkbox label="Test" />);

    const label = screen.getByText("Test").closest("label");
    const input = screen.getByRole("checkbox");

    expect(label?.firstChild).toBe(input);
  });

  it("places checkbox on the right", () => {
    render(<Checkbox label="Test" checkboxPosition="right" />);

    const label = screen.getByText("Test").closest("label");
    const input = screen.getByRole("checkbox");

    expect(label?.lastChild).toBe(input);
  });

  it("forwards checked prop", () => {
    render(<Checkbox label="Test" checked />);

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("handles click on label", () => {
    render(<Checkbox label="Click me" />);

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(screen.getByText("Click me"));

    expect(checkbox).toBeChecked();
  });

  it("supports disabled state", () => {
    render(<Checkbox label="Disabled" disabled />);

    expect(screen.getByRole("checkbox")).toBeDisabled();
  });
});
