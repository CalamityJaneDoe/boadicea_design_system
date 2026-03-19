import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Radio } from "../Radio";

const variants = ["primary", "secondary", "accent"] as const;

describe("Radio - Design System", () => {
  variants.forEach((variant) => {
    describe(`variant: ${variant}`, () => {
      it("renders label and input", () => {
        render(<Radio label="Option 1" variant={variant} />);
        const label = screen.getByText("Option 1");
        const radio = screen.getByRole("radio");

        expect(label).toBeInTheDocument();
        expect(radio).toBeInTheDocument();

        expect(label.closest("label")).toHaveAttribute("data-variant", variant);
      });

      it("places radio on the left by default", () => {
        render(<Radio label="Test" variant={variant} />);
        const label = screen.getByText("Test").closest("label");
        const input = screen.getByRole("radio");
        expect(label?.firstChild).toBe(input);
      });

      it("places radio on the right", () => {
        render(<Radio label="Test" radioPosition="right" variant={variant} />);
        const label = screen.getByText("Test").closest("label");
        const input = screen.getByRole("radio");
        expect(label?.lastChild).toBe(input);
      });

      it("forwards checked prop", () => {
        render(<Radio label="Test" checked variant={variant} />);
        expect(screen.getByRole("radio")).toBeChecked();
      });

      it("handles click on label", () => {
        render(<Radio label="Click me" variant={variant} />);
        const radio = screen.getByRole("radio");
        fireEvent.click(screen.getByText("Click me"));
        expect(radio).toBeChecked();
      });

      it("supports disabled state", () => {
        render(<Radio label="Disabled" disabled variant={variant} />);
        expect(screen.getByRole("radio")).toBeDisabled();
      });

      it("toggles checked state on click", () => {
        const onChange = vi.fn();
        render(<Radio label="Toggle" variant={variant} onChange={onChange} />);
        const radio = screen.getByRole("radio");
        fireEvent.click(radio);
        expect(onChange).toHaveBeenCalled();
      });
    });
  });
});
