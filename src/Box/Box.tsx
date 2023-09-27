import MuiBox from "@mui/material/Box";
import { PropsWithChildren } from "react";

type BoxProps = PropsWithChildren & {
  alignItems?: "center" | "flex-start";
  bgcolor?: string;
  border?: string;
  borderRadius?: number | string;
  boxSizing?: "border-box";
  display?: "flex";
  flexDirection?: "column";
  gap?: number;
  height?: "fit-content" | number;
  justifyContent?: "flex-start" | "space-between";
  marginLeft?: number;
  marginTop?: number;
  maxWidth?: number;
  padding?: number;
  width?: number | string;
};

function Box({
  alignItems,
  bgcolor,
  border,
  borderRadius,
  boxSizing,
  children,
  display,
  flexDirection,
  gap,
  height,
  justifyContent,
  marginLeft,
  marginTop,
  maxWidth,
  padding,
  width,
}: BoxProps) {
  return (
    <MuiBox
      alignItems={alignItems}
      bgcolor={bgcolor}
      border={border}
      borderRadius={borderRadius}
      boxSizing={boxSizing}
      display={display}
      flexDirection={flexDirection}
      gap={gap}
      height={height}
      justifyContent={justifyContent}
      marginLeft={marginLeft}
      marginTop={marginTop}
      maxWidth={maxWidth}
      padding={padding}
      width={width}
    >
      {children}
    </MuiBox>
  );
}

export default Box;
