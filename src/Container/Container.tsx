import MuiContainer from "@mui/material/Container";
import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren & {
  alignItems?: "center";
  background?: string;
  display?: "flex" | "grid";
  flexDirection?: "column";
  height?: string;
  margin?: string;
  maxWidth?: "xl" | false;
  minHeight?: string;
  placeItems?: "center";
};

function Container({
  alignItems,
  background,
  children,
  display,
  flexDirection,
  height,
  margin,
  maxWidth,
  minHeight,
  placeItems,
}: ContainerProps) {
  return (
    <MuiContainer
      maxWidth={maxWidth}
      sx={{
        alignItems,
        background,
        display,
        flexDirection,
        height,
        margin,
        minHeight,
        placeItems,
      }}
    >
      {children}
    </MuiContainer>
  );
}

export default Container;
