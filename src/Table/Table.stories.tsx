import type { Meta, StoryObj } from "@storybook/react";

import TableBody from "../TableBody/TableBody";
import TableCell from "../TableCell/TableCell";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import Table from "./Table";

const meta = {
  title: "Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableCell background="#DFE4EC">Head 1</TableCell>
            <TableCell background="#DFE4EC">Head 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody background="#FFFFFF">
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};
