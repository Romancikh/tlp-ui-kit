import MuiAlert from "@mui/material/Alert";
import { PropsWithChildren } from "react";

type AlertProps = PropsWithChildren & {
  onClose?: () => void;
  severity?: "error" | "success" | "warning";
};

function Alert({ children, onClose, severity = "success" }: AlertProps) {
  return (
    <MuiAlert onClose={onClose} severity={severity}>
      {children}
    </MuiAlert>
  );
}

export default Alert;
