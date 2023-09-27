import type { Meta, StoryObj } from "@storybook/react";

import Slider from "./Slider";

const meta = {
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Slider",
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    max: 5,
    min: 1,
    width: "250px",
  },
};
