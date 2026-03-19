import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { Coffee } from "lucide-react";

const meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Icon: Story = {
  args: {
    children: "Button",
    icon: <Coffee />,
  },
};

export const IconRight: Story = {
  args: {
    children: "Button",
    icon: <Coffee />,
    iconPosition: "right",
  },
};

export const IconOnly: Story = {
  args: {
    icon: <Coffee />,
    "aria-label": "Coffee Button",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Accent: Story = {
  args: {
    children: "Button",
    variant: "accent",
  },
};

export const Positive: Story = {
  args: {
    children: "Button",
    variant: "positive",
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    variant: "danger",
  },
};
