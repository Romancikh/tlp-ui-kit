import type { Meta, StoryObj } from "@storybook/react";

import Icon from "../Icon/Icon";
import IconButton from "./IconButton";

const meta = {
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "IconButton",
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...args }) => (
    <IconButton {...args}>
      <Icon name="AddIcon" />
    </IconButton>
  ),
};
