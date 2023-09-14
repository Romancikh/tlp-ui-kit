import type { Meta, StoryObj } from "@storybook/react";

import Paper from "./Paper";

const meta = {
  title: "Paper",
  component: Paper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: "128px",
    width: "128px",
    children: "Some content",
  },
};

export const Elevation: Story = {
  args: {
    height: "128px",
    width: "128px",
    children: "Some content",
    elevation: 12,
  },
};
