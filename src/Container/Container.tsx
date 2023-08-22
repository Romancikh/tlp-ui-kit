import MuiContainer from "@mui/material/Container";
import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren & {
  maxWidth?: "xl" | false;
  display?: "grid" | "flex";
  flexDirection?: "column";
  placeItems?: "center";
  alignItems?: "center";
  margin?: string;
  height?: string;
  minHeight?: string;
  background?: string;
};

function Container({
  maxWidth,
  display,
  flexDirection,
  placeItems,
  alignItems,
  margin,
  height,
  minHeight,
  background,
  children,
}: ContainerProps) {
  return (
    <MuiContainer
      maxWidth={maxWidth}
      sx={{
        display,
        flexDirection,
        placeItems,
        alignItems,
        margin,
        height,
        minHeight,
        background,
      }}
    >
      {children}
    </MuiContainer>
  );
}

export default Container;
