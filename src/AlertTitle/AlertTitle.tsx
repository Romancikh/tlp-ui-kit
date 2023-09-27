import MuiAlertTitle from "@mui/material/AlertTitle";
import { PropsWithChildren } from "react";

type AlertTitleProps = PropsWithChildren;

function AlertTitle({ children }: AlertTitleProps) {
  return <MuiAlertTitle>{children}</MuiAlertTitle>;
}

export default AlertTitle;
