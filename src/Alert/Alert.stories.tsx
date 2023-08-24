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
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Some content",
  },
};

export const AlertWithTitle: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Alert</AlertTitle>
        This is an alert with title
      </>
    ),
  },
};
