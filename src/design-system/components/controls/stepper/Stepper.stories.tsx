import type { Meta, StoryObj } from "@storybook/react-vite";
import { ControlsFieldset } from "../controls-fieldset";
import { Stepper } from "./Stepper";

const meta = {
  title: "Design System/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Latte",
  },
};

export const WithLimit: Story = {
  args: {
    label: "Latte",
    limit: 5,
  },
};

export const Disabled: Story = {
  args: {
    label: "Latte",
    disabled: true,
  },
};

export const GroupStacked: Story = {
  render: () => (
    <ControlsFieldset legend="Coffee Quantity" variant="stacked">
      <Stepper label="Latte" value="latte" />
      <Stepper label="Espresso" value="espresso" />
      <Stepper label="Cappuccino" value="cappuccino" />
    </ControlsFieldset>
  ),
};

export const GroupInline: Story = {
  render: () => (
    <ControlsFieldset legend="Coffee Quantity" variant="inline">
      <Stepper label="Latte" value="latte" />
      <Stepper label="Espresso" value="espresso" />
      <Stepper label="Cappuccino" value="cappuccino" />
    </ControlsFieldset>
  ),
};

export const WithHint: Story = {
  render: () => (
    <ControlsFieldset
      legend="Coffee Quantity"
      hint="Choose quantity for each type"
    >
      <Stepper label="Latte" value="latte" />
      <Stepper label="Espresso" value="espresso" />
    </ControlsFieldset>
  ),
};

export const WithError: Story = {
  render: () => (
    <ControlsFieldset
      legend="Coffee Quantity"
      error="You must indicate quantity for at least one option"
    >
      <Stepper label="Latte" value="latte" />
      <Stepper label="Espresso" value="espresso" />
    </ControlsFieldset>
  ),
};

export const WithHintAndError: Story = {
  render: () => (
    <ControlsFieldset
      legend="Coffee Quantity"
      hint="Choose quantity for each type"
      error="You must indicate quantity for at least one option"
    >
      <Stepper label="Latte" value="latte" />
      <Stepper label="Espresso" value="espresso" />
    </ControlsFieldset>
  ),
};

export const Primary: Story = {
  args: {
    label: "Latte",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Latte",
    variant: "secondary",
  },
};

export const Accent: Story = {
  args: {
    label: "Latte",
    variant: "accent",
  },
};
