import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "../checkbox";

const variants = ["primary", "secondary", "accent"] as const;

describe("Checkbox - Design System", () => {
  variants.forEach((variant) => {
    describe(`variant: ${variant}`, () => {
      it("renders label and input", () => {
        render(<Checkbox label="Accept terms" variant={variant} />);

        const label = screen.getByText("Accept terms");
        const checkbox = screen.getByRole("checkbox");

        expect(label).toBeInTheDocument();
        expect(checkbox).toBeInTheDocument();

        expect(label.closest("label")).toHaveAttribute("data-variant", variant);
      });

      it("places checkbox on the left by default", () => {
        render(<Checkbox label="Test" variant={variant} />);
        const label = screen.getByText("Test").closest("label");
        const input = screen.getByRole("checkbox");
        expect(label?.firstChild).toBe(input);
      });

      it("places checkbox on the right", () => {
        render(
          <Checkbox label="Test" checkboxPosition="right" variant={variant} />,
        );
        const label = screen.getByText("Test").closest("label");
        const input = screen.getByRole("checkbox");
        expect(label?.lastChild).toBe(input);
      });

      it("forwards checked prop", () => {
        render(<Checkbox label="Test" checked variant={variant} />);
        expect(screen.getByRole("checkbox")).toBeChecked();
      });

      it("handles click on label", () => {
        render(<Checkbox label="Click me" variant={variant} />);
        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(screen.getByText("Click me"));
        expect(checkbox).toBeChecked();
      });

      it("supports disabled state", () => {
        render(<Checkbox label="Disabled" disabled variant={variant} />);
        expect(screen.getByRole("checkbox")).toBeDisabled();
      });

      it("toggles checked state on click", () => {
        const onChange = vi.fn();
        render(
          <Checkbox label="Toggle" variant={variant} onChange={onChange} />,
        );
        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);
        expect(onChange).toHaveBeenCalled();
      });
    });
  });
});
