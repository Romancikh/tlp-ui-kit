import type { Meta, StoryObj } from "@storybook/react";

import TextField from "./TextField";

const meta = {
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "TextField",
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: "Some placeholder",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
