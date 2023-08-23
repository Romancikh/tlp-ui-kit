import MuiPaper from "@mui/material/Paper";
import { PropsWithChildren } from "react";

type PaperProps = PropsWithChildren & {
  width?: "fit-content";
};

function Paper({ width, children }: PaperProps) {
  return <MuiPaper sx={{ width }}>{children}</MuiPaper>;
}

export default Paper;
