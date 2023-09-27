import MuiIconButton from "@mui/material/IconButton";
import { MouseEventHandler, PropsWithChildren } from "react";

type IconButtonProps = PropsWithChildren & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function IconButton({ children, onClick }: IconButtonProps) {
  return <MuiIconButton onClick={onClick}>{children}</MuiIconButton>;
}

export default IconButton;
