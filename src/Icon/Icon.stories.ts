import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";

const meta = {
  argTypes: {
    color: { control: "select" },
  },
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Icon",
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddIcon: Story = {
  args: {
    name: "AddIcon",
  },
};

export const Colored: Story = {
  args: {
    color: "success",
    name: "AddIcon",
  },
};

export const AutoStoriesIcon: Story = {
  args: {
    name: "AutoStoriesIcon",
  },
};

export const CancelOutlinedIcon: Story = {
  args: {
    name: "CancelOutlinedIcon",
  },
};

export const CheckCircleOutlineIcon: Story = {
  args: {
    name: "CheckCircleOutlineIcon",
  },
};

export const DeleteOutlineIcon: Story = {
  args: {
    name: "DeleteOutlineIcon",
  },
};

export const EditIcon: Story = {
  args: {
    name: "EditIcon",
  },
};

export const MenuIcon: Story = {
  args: {
    name: "MenuIcon",
  },
};

export const NavigateBeforeIcon: Story = {
  args: {
    name: "NavigateBeforeIcon",
  },
};
