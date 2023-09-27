import type { Meta, StoryObj } from "@storybook/react";

import Container from "./Container";

const meta = {
  component: Container,
  tags: ["autodocs"],
  title: "Container",
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
    background: "lightblue",
    children: "Some content",
    height: "100vh",
    maxWidth: false,
  },
};
