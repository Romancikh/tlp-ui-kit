import MuiIconButton from "@mui/material/IconButton";
import { PropsWithChildren } from "react";

type IconButtonProps = PropsWithChildren & {
  onClick?: () => void;
};

function IconButton({ onClick, children }: IconButtonProps) {
  return <MuiIconButton onClick={onClick}>{children}</MuiIconButton>;
}

export default IconButton;
