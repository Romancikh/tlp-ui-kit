import MuiPaper from "@mui/material/Paper";
import { PropsWithChildren } from "react";

type PaperProps = PropsWithChildren & {
  height?: string;
  elevation?: number;
  width?: "fit-content" | string | number;
  className?: string;
};

function Paper({ elevation, height, width, className, children }: PaperProps) {
  return (
    <MuiPaper
      elevation={elevation}
      className={className}
      sx={{ height, width }}
    >
      {children}
    </MuiPaper>
  );
}

export default Paper;
