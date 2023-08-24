import MuiList from "@mui/material/List";
import { PropsWithChildren } from "react";

type ListProps = PropsWithChildren & {};

function List({ children }: ListProps) {
  return <MuiList>{children}</MuiList>;
}

export default List;
