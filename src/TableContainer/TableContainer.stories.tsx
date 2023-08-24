import type { Meta, StoryObj } from "@storybook/react";

import Table from "../Table/Table";
import TableBody from "../TableBody/TableBody";
import TableCell from "../TableCell/TableCell";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import TableContainer from "./TableContainer";

const meta = {
  title: "TableContainer",
  component: TableContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TableContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: "10vh",
    children: (
      <Table>
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
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
};
