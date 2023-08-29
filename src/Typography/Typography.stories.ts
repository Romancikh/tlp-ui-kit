import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./Typography";

const meta = {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const h1: Story = {
  args: {
    variant: "h1",
    children: "h1. Heading",
  },
};

export const Colored: Story = {
  args: {
    color: "#1976d2",
    children:
      "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  },
};
