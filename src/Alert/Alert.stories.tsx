import type { Meta, StoryObj } from "@storybook/react";

import AlertTitle from "../AlertTitle/AlertTitle";
import Alert from "./Alert";

const meta = {
  argTypes: {
    severity: { control: "select" },
  },
  args: {
    severity: "success",
  },
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Alert",
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
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Alert {...args}>
      <AlertTitle>Alert</AlertTitle>
      This is an alert with title
    </Alert>
  ),
};
