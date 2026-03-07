import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Design System/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { labels: ["Latte Macchiato"] },
};

export const WithLegendHint: Story = {
  args: {
    labels: ["Latte Macchiato", "Cappuccino"],
    legend: "Choose your coffee",
    hint: "Select one or more options",
  },
};

export const ErrorState: Story = {
  args: {
    labels: ["Latte Macchiato", "Cappuccino"],
    error: "Please select at least one coffee",
  },
};

export const Inline: Story = {
  args: {
    labels: ["Latte Macchiato", "Cappuccino", "Mocaccino"],
    variant: "inline",
  },
};

export const Stacked: Story = {
  args: {
    labels: ["Latte Macchiato", "Cappuccino", "Mocaccino"],
    variant: "stacked",
  },
};

export const Disabled: Story = {
  args: {
    labels: ["Latte Macchiato"],
    disabled: true,
  },
};
