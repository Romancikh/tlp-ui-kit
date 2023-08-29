import MuiMenu from "@mui/material/Menu";
import { PropsWithChildren } from "react";

type MenuProps = PropsWithChildren & {
  open: boolean;
  anchorEl?: Element | null;
  onClose?: () => void;
};

function Menu({ open, anchorEl, onClose, children }: MenuProps) {
  return (
    <MuiMenu open={open} anchorEl={anchorEl} onClose={onClose}>
      {children}
    </MuiMenu>
  );
}

export default Menu;
