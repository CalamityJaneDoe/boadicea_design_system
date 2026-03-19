import type { Meta, StoryObj } from "@storybook/react-vite";
// import React from "react";
import { ControlsFieldset } from "../controls-fieldset";
import { Radio } from "./Radio";

const meta = {
  title: "Design System/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Latte",
  },
};

export const Checked: Story = {
  args: {
    label: "Latte",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Latte",
    disabled: true,
  },
};

export const RightPosition: Story = {
  args: {
    label: "Latte",
    radioPosition: "right",
  },
};

export const GroupStacked: Story = {
  render: () => (
    <ControlsFieldset legend="Coffee" variant="stacked">
      <Radio label="Latte" value="latte" name="coffeeTypes" />
      <Radio label="Espresso" value="espresso" name="coffeeTypes" />
      <Radio label="Cappuccino" value="cappuccino" name="coffeeTypes" />
    </ControlsFieldset>
  ),
};

export const GroupInline: Story = {
  render: () => (
    <ControlsFieldset legend="Coffee" variant="inline">
      <Radio label="Latte" value="latte" name="coffeeTypes" />
      <Radio label="Espresso" value="espresso" name="coffeeTypes" />
      <Radio label="Cappuccino" value="cappuccino" name="coffeeTypes" />
    </ControlsFieldset>
  ),
};

export const WithHint: Story = {
  render: () => (
    <ControlsFieldset legend="Coffee" hint="Select your favorite drinks">
      <Radio label="Latte" value="latte" name="coffeeTypes" />
      <Radio label="Espresso" value="espresso" name="coffeeTypes" />
    </ControlsFieldset>
  ),
};

export const WithError: Story = {
  render: () => (
    <ControlsFieldset
      legend="Coffee"
      error="You must select at least one option"
    >
      <Radio label="Latte" value="latte" name="coffeeTypes" />
      <Radio label="Espresso" value="espresso" name="coffeeTypes" />
    </ControlsFieldset>
  ),
};

export const WithHintAndError: Story = {
  render: () => (
    <ControlsFieldset
      legend="Coffee"
      hint="Select your favorite drinks"
      error="You must select at least one option"
    >
      <Radio label="Latte" value="latte" name="coffeeTypes" />
      <Radio label="Espresso" value="espresso" name="coffeeTypes" />
    </ControlsFieldset>
  ),
};

export const Primary: Story = {
  args: {
    label: "Latte",
    variant: "primary",
    checked: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Latte",
    variant: "secondary",
    checked: true,
  },
};

export const Accent: Story = {
  args: {
    label: "Latte",
    variant: "accent",
    checked: true,
  },
};
