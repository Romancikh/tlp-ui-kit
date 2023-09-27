import MuiMenuItem from "@mui/material/MenuItem";
import { PropsWithChildren } from "react";

type MenuItemProps = PropsWithChildren & {
  onClick?: () => void;
  value?: string;
};

function MenuItem({ children, onClick, value }: MenuItemProps) {
  return (
    <MuiMenuItem onClick={onClick} value={value}>
      {children}
    </MuiMenuItem>
  );
}

export default MenuItem;
