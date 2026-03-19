import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Switch } from "../Switch";

const variants = ["primary", "secondary", "accent"] as const;

describe("Switch - Design System", () => {
  variants.forEach((variant) => {
    describe(`variant: ${variant}`, () => {
      it("renders label, input and state", () => {
        render(<Switch label="Dark Mode" variant={variant} />);
        const wrapper = screen.getByText("Dark Mode").closest("div");
        const input = screen.getByRole("switch");
        const state = screen.getByText("Off");

        expect(wrapper).toHaveAttribute("data-variant", variant);
        expect(input).toBeInTheDocument();
        expect(state).toBeInTheDocument();
      });

      it("renders state before/after input correctly depending on switchPosition", () => {
        const { rerender } = render(
          <Switch label="Left" switchPosition="left" variant={variant} />,
        );
        const labelLeft = screen.getByText("Left");
        const stateLeft = screen.getByText("Off");
        const containerLeft = labelLeft.closest("label")!;
        expect(containerLeft.firstChild?.textContent).toBe("Off"); // state first

        rerender(
          <Switch label="Right" switchPosition="right" variant={variant} />,
        );
        const labelRight = screen.getByText("Right");
        const stateRight = screen.getByText("Off");
        const containerRight = labelRight.closest("label")!;
        expect(containerRight.firstChild?.textContent).toBe("Right"); // label first
      });

      it("handles defaultChecked for uncontrolled switch", () => {
        render(<Switch label="Toggle" defaultChecked variant={variant} />);
        const input = screen.getByRole("switch") as HTMLInputElement;
        expect(input.checked).toBe(true);

        fireEvent.click(input);
        expect(input.checked).toBe(false);
      });

      it("works as controlled component", () => {
        const onChange = vi.fn();
        render(
          <Switch
            label="Controlled"
            checked={false}
            onChange={onChange}
            variant={variant}
          />,
        );
        const input = screen.getByRole("switch") as HTMLInputElement;
        expect(input.checked).toBe(false);

        fireEvent.click(input);
        expect(onChange).toHaveBeenCalled();
        expect(input.checked).toBe(false); // still false, controlled
      });

      it("supports disabled state", () => {
        render(<Switch label="Disabled" disabled variant={variant} />);
        const input = screen.getByRole("switch");
        expect(input).toBeDisabled();
      });
    });
  });
});
