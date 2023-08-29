import type { Meta, StoryObj } from "@storybook/react";

import AlertTitle from "../AlertTitle/AlertTitle";
import Alert from "./Alert";

const meta = {
  title: "Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    severity: "success",
  },
  argTypes: {
    severity: { control: "select" },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Some alert text",
  },
};

export const AlertWithTitle: Story = {
  render: ({ ...args }) => (
    <Alert {...args}>
      <AlertTitle>Alert</AlertTitle>
      This is an alert with title
    </Alert>
  ),
};
