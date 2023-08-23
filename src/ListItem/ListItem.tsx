import MuiListItem from "@mui/material/ListItem";
import { PropsWithChildren } from "react";

type ListItemProps = PropsWithChildren & {
  divider?: boolean;
};

function ListItem({ divider, children }: ListItemProps) {
  return <MuiListItem divider={divider}>{children}</MuiListItem>;
}

export default ListItem;
