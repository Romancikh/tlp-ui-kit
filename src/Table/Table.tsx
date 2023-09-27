import MuiTable from "@mui/material/Table";
import { PropsWithChildren } from "react";

type TableProps = PropsWithChildren & {
  stickyHeader?: boolean;
};

function Table({ children, stickyHeader }: TableProps) {
  return <MuiTable stickyHeader={stickyHeader}>{children}</MuiTable>;
}

export default Table;
