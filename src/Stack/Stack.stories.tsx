import type { Meta, StoryObj } from "@storybook/react";

import Stack from "./Stack";

const meta = {
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Stack",
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div key="div1">First Div</div>
        <div key="div2">Second Div</div>
        <div key="div3">Third Div</div>
      </>
    ),
  },
};

export const Row: Story = {
  args: {
    children: (
      <>
        <div key="div1">First Div</div>
        <div key="div2">Second Div</div>
        <div key="div3">Third Div</div>
      </>
    ),
    direction: "row",
  },
};

export const Spacing: Story = {
  args: {
    children: (
      <>
        <div key="div1">First Div</div>
        <div key="div2">Second Div</div>
        <div key="div3">Third Div</div>
      </>
    ),
    spacing: 7,
  },
};

export const MarginTop: Story = {
  args: {
    children: (
      <>
        <div key="div1">First Div</div>
        <div key="div2">Second Div</div>
        <div key="div3">Third Div</div>
      </>
    ),
    marginTop: 7,
  },
};
