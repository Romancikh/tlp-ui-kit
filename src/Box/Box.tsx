import MuiBox from "@mui/material/Box";
import { PropsWithChildren } from "react";

type BoxProps = PropsWithChildren & {
  display?: "flex";
  flexDirection?: "column";
  justifyContent?: "space-between" | "flex-start";
  width?: number | string;
  maxWidth?: number;
  boxSizing?: "border-box";
  padding?: number;
  border?: string;
  borderRadius?: string | number;
  marginLeft?: number;
  marginTop?: number;
  gap?: number;
  alignItems?: "center" | "flex-start";
  height?: "fit-content" | number;
  bgcolor?: string;
};

function Box({
  display,
  flexDirection,
  justifyContent,
  width,
  maxWidth,
  boxSizing,
  padding,
  border,
  borderRadius,
  marginLeft,
  marginTop,
  gap,
  alignItems,
  height,
  bgcolor,
  children,
}: BoxProps) {
  return (
    <MuiBox
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      width={width}
      maxWidth={maxWidth}
      boxSizing={boxSizing}
      padding={padding}
      border={border}
      borderRadius={borderRadius}
      marginLeft={marginLeft}
      marginTop={marginTop}
      gap={gap}
      alignItems={alignItems}
      height={height}
      bgcolor={bgcolor}
    >
      {children}
    </MuiBox>
  );
}

export default Box;
