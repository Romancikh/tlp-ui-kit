import { render } from "@testing-library/react";
import TableBody from "../TableBody/TableBody";
import TableCell from "../TableCell/TableCell";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import Table from "./Table";

test("Table renders correctly", () => {
  const { container } = render(
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
            <TableCell>Cell {`${item}`}1</TableCell>
            <TableCell>Cell {`${item}`}2</TableCell>
            <TableCell>Cell {`${item}`}3</TableCell>
            <TableCell>Cell {`${item}`}4</TableCell>
            <TableCell>Cell {`${item}`}5</TableCell>
            <TableCell>Cell {`${item}`}6</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
  expect(container).toMatchSnapshot();
});
