import MuiTypography from "@mui/material/Typography";
import { PropsWithChildren } from "react";

type TypographyProps = PropsWithChildren & {
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  color?: string;
  fontSize?: number;
  width?: number;
  marginLeft?: number;
  marginTop?: number;
  marginY?: number;
  marginX?: number;
  lineHeight?: number;
  fontWeight?: number;
};

function Typography({
  variant = "body1",
  color,
  fontSize,
  width,
  marginLeft,
  marginTop,
  marginY,
  marginX,
  lineHeight,
  fontWeight,
  children,
}: TypographyProps) {
  return (
    <MuiTypography
      variant={variant}
      color={color}
      fontSize={fontSize}
      width={width}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginY={marginY}
      marginX={marginX}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
    >
      {children}
    </MuiTypography>
  );
}

export default Typography;
