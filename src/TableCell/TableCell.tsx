import MuiTableCell from "@mui/material/TableCell";
import { PropsWithChildren } from "react";

type TableCellProps = PropsWithChildren & {
  background?: string;
  align?: "right";
};

function TableCell({ background, align, children }: TableCellProps) {
  return (
    <MuiTableCell align={align} sx={{ background }}>
      {children}
    </MuiTableCell>
  );
}

export default TableCell;
