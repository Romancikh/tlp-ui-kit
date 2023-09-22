import MuiTableCell from "@mui/material/TableCell";
import { PropsWithChildren } from "react";

type TableCellProps = PropsWithChildren & {
  align?: "right";
  background?: string;
};

function TableCell({ align, background, children }: TableCellProps) {
  return (
    <MuiTableCell align={align} sx={{ background }}>
      {children}
    </MuiTableCell>
  );
}

export default TableCell;
