import type { Meta, StoryObj } from "@storybook/react-vite";
// import React from "react";
import { ControlsFieldset } from "../controls-fieldset";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Design System/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

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
    checkboxPosition: "right",
  },
};

export const GroupStacked: Story = {
  render: () => (
    <ControlsFieldset legend="Coffee" variant="stacked">
      <Checkbox label="Latte" value="latte" />
      <Checkbox label="Espresso" value="espresso" />
      <Checkbox label="Cappuccino" value="cappuccino" />
    </ControlsFieldset>
  ),
};

export const GroupInline: Story = {
  render: () => (
    <ControlsFieldset legend="Coffee" variant="inline">
      <Checkbox label="Latte" value="latte" />
      <Checkbox label="Espresso" value="espresso" />
      <Checkbox label="Cappuccino" value="cappuccino" />
    </ControlsFieldset>
  ),
};

export const WithHint: Story = {
  render: () => (
    <ControlsFieldset legend="Coffee" hint="Select your favorite drinks">
      <Checkbox label="Latte" value="latte" />
      <Checkbox label="Espresso" value="espresso" />
    </ControlsFieldset>
  ),
};

export const WithError: Story = {
  render: () => (
    <ControlsFieldset
      legend="Coffee"
      error="You must select at least one option"
    >
      <Checkbox label="Latte" value="latte" />
      <Checkbox label="Espresso" value="espresso" />
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
      <Checkbox label="Latte" value="latte" />
      <Checkbox label="Espresso" value="espresso" />
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
