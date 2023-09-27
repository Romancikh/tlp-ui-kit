import type { Meta, StoryObj } from "@storybook/react";

import Paper from "./Paper";

const meta = {
  component: Paper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Paper",
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Some content",
    height: "128px",
    width: "128px",
  },
};

export const Elevation: Story = {
  args: {
    children: "Some content",
    elevation: 12,
    height: "128px",
    width: "128px",
  },
};
