import type { Meta, StoryObj } from "@storybook/react";

import Box from "./Box";

const meta = {
  title: "Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 300,
    height: 200,
    border: "1px solid #000",
    children: "Some text",
  },
};
