import MuiTableBody from "@mui/material/TableBody";
import { PropsWithChildren } from "react";

type TableBodyProps = PropsWithChildren & {
  background?: string;
};

function TableBody({ background, children }: TableBodyProps) {
  return <MuiTableBody sx={{ background }}>{children}</MuiTableBody>;
}

export default TableBody;
