import type { Meta, StoryObj } from "@storybook/react";

import Box from "./Box";

const meta = {
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Box",
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    border: "1px solid #000",
    children: "Some text",
    height: 200,
    width: 300,
  },
};
