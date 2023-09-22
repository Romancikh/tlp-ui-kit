import { render } from "@testing-library/react";
import Table from "../Table/Table";
import TableBody from "../TableBody/TableBody";
import TableCell from "../TableCell/TableCell";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import TableContainer from "./TableContainer";

test("TableContainer renders correctly", () => {
  const { container } = render(
    <TableContainer>
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
    </TableContainer>,
  );
  expect(container).toMatchSnapshot();
});
