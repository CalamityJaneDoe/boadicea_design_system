import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";

const meta = {
  title: "Design System/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Dark Mode",
  },
};

export const Checked: Story = {
  args: {
    label: "Dark Mode",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Dark Mode",
    disabled: true,
  },
};

export const RightPosition: Story = {
  args: {
    label: "Dark Mode",
    switchPosition: "right",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Dark Mode",
    description: "Turn on this option to use dark mode.",
  },
};
