import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "../Button.tsx";
import { Coffee } from "lucide-react";
import type { ButtonProps } from "../Button.types.ts";

const variants = [
  "primary",
  "secondary",
  "accent",
  "positive",
  "danger",
] as const;
const designs = ["labelOnly", "iconOnly", "labelAndIcon"] as const;

describe("Button - Design System", () => {
  variants.forEach((variant) => {
    describe(`variant: ${variant}`, () => {
      designs.forEach((design) => {
        const title = `${design} - ${variant}`;

        it(`renders correctly (${title})`, () => {
          const props: ButtonProps = { variant };
          if (design === "labelOnly") props.children = "Click me";
          if (design === "iconOnly") {
            props.icon = <Coffee data-testid="icon" />;
            props["aria-label"] = "Add coffee";
          }
          if (design === "labelAndIcon") {
            props.children = "Add coffee";
            props.icon = <Coffee data-testid="icon" />;
          }

          render(<Button {...props} />);
          const btn = screen.getByRole("button", {
            name: props.children || props["aria-label"],
          });

          expect(btn).toBeInTheDocument();

          expect(btn).toHaveAttribute("data-variant", variant);

          if (design === "iconOnly" || design === "labelAndIcon") {
            expect(screen.getByTestId("icon")).toBeInTheDocument();
          }
          if (design === "iconOnly") {
            expect(btn).toHaveAttribute("aria-label", props["aria-label"]);
            expect(btn).toHaveTextContent("");
          }
        });

        it(`handles disabled state (${title})`, () => {
          const props: ButtonProps = { variant, disabled: true };
          if (design === "labelOnly") props.children = "Click me";
          if (design === "iconOnly") {
            props.icon = <Coffee data-testid="icon" />;
            props["aria-label"] = "Add coffee";
          }
          if (design === "labelAndIcon") {
            props.children = "Add coffee";
            props.icon = <Coffee data-testid="icon" />;
          }

          const handleClick = vi.fn();
          render(<Button {...props} onClick={handleClick} />);
          const btn = screen.getByRole("button", {
            name: props.children || props["aria-label"],
          });

          expect(btn).toBeDisabled();
          fireEvent.click(btn);
          expect(handleClick).not.toHaveBeenCalled();
        });

        it(`handles click event (${title})`, () => {
          const handleClick = vi.fn();
          const props: ButtonProps = { variant, onClick: handleClick };
          if (design === "labelOnly") props.children = "Click me";
          if (design === "iconOnly") {
            props.icon = <Coffee data-testid="icon" />;
            props["aria-label"] = "Add coffee";
          }
          if (design === "labelAndIcon") {
            props.children = "Add coffee";
            props.icon = <Coffee data-testid="icon" />;
          }

          const btn = render(<Button {...props} />).getByRole("button", {
            name: props.children || props["aria-label"],
          });
          fireEvent.click(btn);
          expect(handleClick).toHaveBeenCalledOnce();
        });
      });
    });
  });
});
