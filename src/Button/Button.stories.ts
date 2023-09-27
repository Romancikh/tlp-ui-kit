import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  args: {
    disabled: false,
    variant: "contained",
  },
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    children: "contained",
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    children: "outlined",
    variant: "outlined",
  },
};

export const Disabled: Story = {
  args: {
    children: "disabled",
    disabled: true,
    variant: "contained",
  },
};

export const Success: Story = {
  args: {
    children: "success",
    color: "success",
    variant: "contained",
  },
};
