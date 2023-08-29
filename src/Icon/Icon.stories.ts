import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";

const meta = {
  title: "Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select" },
  },
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
    name: "AddIcon",
    color: "success",
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
