import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "contained",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "contained",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "outlined",
  },
};

export const Disabled: Story = {
  args: {
    variant: "contained",
    disabled: true,
    children: "disabled",
  },
};

export const Success: Story = {
  args: {
    variant: "contained",
    color: "success",
    children: "success",
  },
};
