import Base from "@mui/material/Button";
import { PropsWithChildren, ReactNode } from "react";

type ButtonProps = PropsWithChildren & {
  variant: "contained" | "outlined";
  disabled?: boolean;
  onClick?: () => void;
  color?: "success";
  startIcon?: ReactNode;
  minWidth?: "unset";
  alignSelf?: "flex-end";
  padding?: number;
  marginTop?: number;
};

function Button({
  children,
  variant,
  disabled,
  onClick,
  color,
  startIcon,
  minWidth,
  alignSelf,
  padding,
  marginTop,
}: ButtonProps) {
  return (
    <Base
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      color={color ?? "primary"}
      startIcon={startIcon}
      sx={{
        minWidth,
        alignSelf,
        padding,
        marginTop,
      }}
    >
      {children}
    </Base>
  );
}

export default Button;
