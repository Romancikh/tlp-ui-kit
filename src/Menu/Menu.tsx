import MuiMenu from "@mui/material/Menu";
import { PropsWithChildren } from "react";

type MenuProps = PropsWithChildren & {
  anchorEl?: Element | null;
  onClose?: () => void;
  open: boolean;
};

function Menu({ anchorEl, children, onClose, open }: MenuProps) {
  return (
    <MuiMenu anchorEl={anchorEl} onClose={onClose} open={open}>
      {children}
    </MuiMenu>
  );
}

export default Menu;
