import type { Meta, StoryObj } from "@storybook/react";

import Container from "./Container";

const meta = {
  title: "Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    background: "lightgreen",
    children: "Some content",
    height: "100vh",
  },
};

export const MaxWidth: Story = {
  args: {
    maxWidth: false,
    children: "Some content",
    background: "lightblue",
    height: "100vh",
  },
};
