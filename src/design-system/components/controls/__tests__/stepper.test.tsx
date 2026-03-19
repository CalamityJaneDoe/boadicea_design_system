import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Stepper } from "../Stepper";
import { Minus, Plus } from "lucide-react";

const variants = ["primary", "secondary", "accent"] as const;

describe("Stepper - Design System", () => {
  variants.forEach((variant) => {
    describe(`variant: ${variant}`, () => {
      it("renders label, quantity, buttons and limit", () => {
        render(<Stepper label="Quantity" variant={variant} limit={5} />);
        const wrapper = screen.getByText("Quantity").closest("div");
        const quantity = screen.getByText("0");
        const decreaseBtn = screen.getByLabelText("Decrease quantity");
        const increaseBtn = screen.getByLabelText("Increase quantity");
        const limit = screen.getByText("0 / 5");

        expect(wrapper).toHaveAttribute("data-variant", variant);
        expect(quantity).toBeInTheDocument();
        expect(decreaseBtn).toBeInTheDocument();
        expect(increaseBtn).toBeInTheDocument();
        expect(limit).toBeInTheDocument();
      });

      it("increments and decrements quantity when buttons clicked", () => {
        render(<Stepper label="Qty" variant={variant} limit={3} />);
        const decreaseBtn = screen.getByLabelText("Decrease quantity");
        const increaseBtn = screen.getByLabelText("Increase quantity");
        const quantity = () => screen.getByText(/^(\d+)$/);

        // initial state
        expect(quantity().textContent).toBe("0");
        expect(decreaseBtn).toBeDisabled();

        // increase
        fireEvent.click(increaseBtn);
        expect(quantity().textContent).toBe("1");
        expect(decreaseBtn).not.toBeDisabled();

        fireEvent.click(increaseBtn);
        fireEvent.click(increaseBtn);
        expect(quantity().textContent).toBe("3");
        expect(increaseBtn).toBeDisabled();

        // decrease
        fireEvent.click(decreaseBtn);
        expect(quantity().textContent).toBe("2");
        expect(increaseBtn).not.toBeDisabled();
      });

      it("respects disabled prop", () => {
        render(<Stepper label="Qty" variant={variant} limit={5} disabled />);
        const decreaseBtn = screen.getByLabelText("Decrease quantity");
        const increaseBtn = screen.getByLabelText("Increase quantity");
        const quantity = screen.getByText("0");

        expect(decreaseBtn).toBeDisabled();
        expect(increaseBtn).toBeDisabled();
        expect(quantity).toBeInTheDocument();

        fireEvent.click(increaseBtn);
        expect(quantity.textContent).toBe("0"); // does not change
      });

      it("does not exceed limit or go below zero", () => {
        render(<Stepper label="Qty" variant={variant} limit={2} />);
        const decreaseBtn = screen.getByLabelText("Decrease quantity");
        const increaseBtn = screen.getByLabelText("Increase quantity");
        const quantity = () => screen.getByText(/^(\d+)$/);

        fireEvent.click(increaseBtn);
        fireEvent.click(increaseBtn);
        fireEvent.click(increaseBtn); // over limit
        expect(quantity().textContent).toBe("2");
        expect(increaseBtn).toBeDisabled();

        fireEvent.click(decreaseBtn);
        fireEvent.click(decreaseBtn);
        fireEvent.click(decreaseBtn); // below zero
        expect(quantity().textContent).toBe("0");
        expect(decreaseBtn).toBeDisabled();
      });
    });
  });
});
