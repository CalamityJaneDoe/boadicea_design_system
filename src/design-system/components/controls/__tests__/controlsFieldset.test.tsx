import { render, screen } from "@testing-library/react";
import { ControlsFieldset } from "../controls-fieldset";

describe("ControlsFieldset", () => {
  it("renders legend, hint and error", () => {
    render(
      <ControlsFieldset
        legend="Preferences"
        hint="Select options"
        error="Required"
      >
        <div>Child</div>
      </ControlsFieldset>,
    );

    expect(screen.getByText("Preferences")).toBeInTheDocument();
    expect(screen.getByText("Select options")).toBeInTheDocument();
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <ControlsFieldset>
        <div>Child element</div>
      </ControlsFieldset>,
    );

    expect(screen.getByText("Child element")).toBeInTheDocument();
  });

  it("applies inline variant by default", () => {
    render(
      <ControlsFieldset>
        <div>Child</div>
      </ControlsFieldset>,
    );

    const group = screen.getByText("Child").parentElement;
    expect(group?.className).toMatch(/inline/);
  });

  it("applies stacked variant", () => {
    render(
      <ControlsFieldset variant="stacked">
        <div>Child</div>
      </ControlsFieldset>,
    );

    const group = screen.getByText("Child").parentElement;
    expect(group?.className).toMatch(/stacked/);
  });

  it("applies error class", () => {
    render(
      <ControlsFieldset error="Error message">
        <div>Child</div>
      </ControlsFieldset>,
    );

    const fieldset = screen.getByText("Error message").closest("fieldset");

    expect(fieldset?.className).toMatch(/error/);
  });
});
