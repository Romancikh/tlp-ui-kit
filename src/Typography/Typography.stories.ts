import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./Typography";

const meta = {
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Typography",
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const h1: Story = {
  args: {
    children: "h1. Heading",
    variant: "h1",
  },
};

export const Colored: Story = {
  args: {
    children:
      "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
    color: "#1976d2",
  },
};
