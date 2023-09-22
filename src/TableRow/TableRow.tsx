import MuiTableRow from "@mui/material/TableRow";
import { PropsWithChildren } from "react";

type TableRowProps = PropsWithChildren;

function TableRow({ children }: TableRowProps) {
  return <MuiTableRow>{children}</MuiTableRow>;
}

export default TableRow;
