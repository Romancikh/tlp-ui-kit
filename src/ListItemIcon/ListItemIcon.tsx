import MuiListItemIcon from "@mui/material/ListItemIcon";
import { PropsWithChildren } from "react";

type ListItemIconProps = PropsWithChildren & {};

function ListItemIcon({ children }: ListItemIconProps) {
  return <MuiListItemIcon>{children}</MuiListItemIcon>;
}

export default ListItemIcon;
