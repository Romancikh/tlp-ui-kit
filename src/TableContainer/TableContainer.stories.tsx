import type { Meta, StoryObj } from "@storybook/react";

import Table from "../Table/Table";
import TableBody from "../TableBody/TableBody";
import TableCell from "../TableCell/TableCell";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import TableContainer from "./TableContainer";

const meta = {
  component: TableContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "TableContainer",
} satisfies Meta<typeof TableContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: "20vh",
  },
  render: ({ ...args }) => (
    <TableContainer {...args}>
      <Table>
        <TableHead>
          <TableRow>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <TableCell background="#DFE4EC" key={item}>
                Head {`${item}`}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody background="#FFFFFF">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <TableRow key={item}>
              <TableCell>Cell{`${item}`}1</TableCell>
              <TableCell>Cell{`${item}`}2</TableCell>
              <TableCell>Cell{`${item}`}3</TableCell>
              <TableCell>Cell{`${item}`}4</TableCell>
              <TableCell>Cell{`${item}`}5</TableCell>
              <TableCell>Cell{`${item}`}6</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
};
