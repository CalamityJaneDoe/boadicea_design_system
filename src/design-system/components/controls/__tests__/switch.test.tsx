import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Switch } from "../switch";

describe("Switch component", () => {
  it("renders label and description", () => {
    render(
      <Switch label="Dark Mode" description="Enable dark mode for the site" />,
    );

    expect(screen.getByText("Dark Mode")).toBeInTheDocument();
    expect(
      screen.getByText("Enable dark mode for the site"),
    ).toBeInTheDocument();
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("renders ON/OFF state correctly (uncontrolled)", () => {
    render(<Switch label="Notifications" defaultChecked={false} />);

    const checkbox = screen.getByRole("switch") as HTMLInputElement;
    const state = screen.getByText("Off");
    expect(state).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    expect(screen.getByText("On")).toBeInTheDocument();
  });

  it("toggles state correctly in controlled mode", () => {
    const onChange = vi.fn();
    render(<Switch label="Controlled" checked={false} onChange={onChange} />);

    const checkbox = screen.getByRole("switch") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalled();
    // Controlled -> value doesn't change automatically
    expect(checkbox.checked).toBe(false);
  });

  it("renders disabled state correctly", () => {
    render(<Switch label="Disabled" disabled />);

    const checkbox = screen.getByRole("switch") as HTMLInputElement;
    expect(checkbox.disabled).toBe(true);

    const label = screen.getByText("Disabled");
    expect(label).toBeInTheDocument();
  });

  it("renders state and label in correct order for left/right positions", () => {
    const { container, rerender } = render(
      <Switch label="LeftLabel" switchPosition="left" defaultChecked={false} />,
    );

    const children = container.querySelector("label")?.children;
    expect(children).toBeDefined();
    if (children) {
      // LEFT: state, input, track, label
      expect(children[0].textContent).toBe("Off"); // state
      expect(children[1].tagName).toBe("INPUT");
      expect(children[2].className.includes("track")).toBe(true);
      expect(children[3].textContent).toBe("LeftLabel"); // label
    }

    rerender(
      <Switch
        label="RightLabel"
        switchPosition="right"
        defaultChecked={false}
      />,
    );
    const childrenR = container.querySelector("label")?.children;
    if (childrenR) {
      // RIGHT: label, input, track, state
      expect(childrenR[0].textContent).toBe("RightLabel"); // label
      expect(childrenR[1].tagName).toBe("INPUT");
      expect(childrenR[2].className.includes("track")).toBe(true);
      expect(childrenR[3].textContent).toBe("Off"); // state
    }
  });

  it("has correct accessibility attributes", () => {
    render(<Switch label="Access" defaultChecked />);

    const checkbox = screen.getByRole("switch");
    expect(checkbox).toHaveAttribute("role", "switch");
    expect(checkbox).toBeChecked();
  });
});
