import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import renderer from "react-test-renderer";
import { Checkbox } from "../Checkbox";

const variants = ["inline", "stacked"] as const;
const positions = ["left", "right"] as const;
const errorStates = [undefined, "This field is required"] as const;

describe("Checkbox - Design System", () => {
    variants.forEach((variant) => {
        positions.forEach((position) => {
            errorStates.forEach((error) => {
                const title = `variant: ${variant}, position: ${position}, error: ${error ?? "none"}`;

                it(`renders correctly (${title})`, () => {
                    const props: any = {
                        labels: ["Option 1", "Option 2"],
                        variant,
                        checkboxPosition: position,
                        legend: "Choose an option",
                        hint: "Select one or more",
                        error,
                    };

                    const { container } = render(<Checkbox {...props} />);

                    // Labels & inputs
                    expect(screen.getByText("Option 1")).toBeInTheDocument();
                    expect(screen.getByText("Option 2")).toBeInTheDocument();
                    const checkboxes = screen.getAllByRole("checkbox");
                    expect(checkboxes.length).toBe(2);

                    // Error message
                    if (error) {
                        expect(screen.getByText(error)).toBeInTheDocument();
                    }

                    // Snapshot
                    const tree = renderer.create(<Checkbox {...props} />).toJSON();
                    expect(tree).toMatchSnapshot();
                });

                it(`handles check/uncheck (${title})`, () => {
                    const props: any = {
                        labels: ["Option 1"],
                        variant,
                        checkboxPosition: position,
                        error,
                    };

                    render(<Checkbox {...props} />);
                    const checkbox = screen.getByRole("checkbox");
                    expect(checkbox).not.toBeChecked();

                    fireEvent.click(checkbox);
                    expect(checkbox).toBeChecked();

                    fireEvent.click(checkbox);
                    expect(checkbox).not.toBeChecked();
                });

                it(`handles disabled state (${title})`, () => {
                    const props: any = {
                        labels: ["Option 1"],
                        variant,
                        checkboxPosition: position,
                        disabled: true,
                        error,
                    };

                    render(<Checkbox {...props} />);
                    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
                    expect(checkbox.disabled).toBe(true);
                });

                it(`focus works correctly (${title})`, () => {
                    const props: any = {
                        labels: ["Option 1"],
                        variant,
                        checkboxPosition: position,
                        error,
                    };

                    render(<Checkbox {...props} />);
                    const checkbox = screen.getByRole("checkbox");
                    checkbox.focus();
                    expect(document.activeElement).toBe(checkbox);
                });
            });
        });
    });
});