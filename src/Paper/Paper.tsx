import MuiPaper from "@mui/material/Paper";
import { PropsWithChildren } from "react";

type PaperProps = PropsWithChildren & {
  height?: string;
  width?: "fit-content" | string;
};

function Paper({ height, width, children }: PaperProps) {
  return <MuiPaper sx={{ height, width }}>{children}</MuiPaper>;
}

export default Paper;
