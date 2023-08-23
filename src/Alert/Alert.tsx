import MuiAlert from "@mui/material/Alert";
import { PropsWithChildren } from "react";

type AlertProps = PropsWithChildren & {
  severity?: "error" | "warning" | "success";
  onClose?: () => void;
};

function Alert({ severity = "success", onClose, children }: AlertProps) {
  return (
    <MuiAlert severity={severity} onClose={onClose}>
      {children}
    </MuiAlert>
  );
}

export default Alert;
