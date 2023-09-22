import MuiListItemText from "@mui/material/ListItemText";
import { PropsWithChildren } from "react";

type ListItemTextProps = PropsWithChildren & {
  textAlign?: "right";
};

function ListItemText({ children, textAlign }: ListItemTextProps) {
  return <MuiListItemText sx={{ textAlign }}>{children}</MuiListItemText>;
}

export default ListItemText;
