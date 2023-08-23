import MuiTableContainer from "@mui/material/TableContainer";
import { PropsWithChildren } from "react";

type TableContainerProps = PropsWithChildren & {
  height?: string;
};

function TableContainer({ height, children }: TableContainerProps) {
  return <MuiTableContainer sx={{ height }}>{children}</MuiTableContainer>;
}

export default TableContainer;
