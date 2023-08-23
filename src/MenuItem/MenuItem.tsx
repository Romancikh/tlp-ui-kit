import MuiMenuItem from "@mui/material/MenuItem";
import { PropsWithChildren } from "react";

type MenuItemProps = PropsWithChildren & {
  value?: string;
  onClick?: () => void;
};

function MenuItem({ value, onClick, children }: MenuItemProps) {
  return (
    <MuiMenuItem value={value} onClick={onClick}>
      {children}
    </MuiMenuItem>
  );
}

export default MenuItem;
