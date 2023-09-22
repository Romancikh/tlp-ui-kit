import MuiTableHead from "@mui/material/TableHead";
import { PropsWithChildren } from "react";

type TableHeadProps = PropsWithChildren;

function TableHead({ children }: TableHeadProps) {
  return <MuiTableHead>{children}</MuiTableHead>;
}

export default TableHead;
