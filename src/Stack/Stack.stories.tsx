import type { Meta, StoryObj } from "@storybook/react";

import Stack from "./Stack";

const meta = {
  title: "Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <div key="div1">First Div</div>,
      <div key="div2">Second Div</div>,
      <div key="div3">Third Div</div>,
    ],
  },
};

export const Gap: Story = {
  args: {
    gap: 7,
    children: [
      <div key="div1">First Div</div>,
      <div key="div2">Second Div</div>,
      <div key="div3">Third Div</div>,
    ],
  },
};

export const MarginTop: Story = {
  args: {
    marginTop: 7,
    children: [
      <div key="div1">First Div</div>,
      <div key="div2">Second Div</div>,
      <div key="div3">Third Div</div>,
    ],
  },
};
