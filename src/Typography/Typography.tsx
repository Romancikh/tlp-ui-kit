import { CSSProperties, PropsWithChildren, createElement } from "react";
import "./Typography.scss";

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

const component = {
  body1: "p",
  body2: "p",
  button: "span",
  caption: "span",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
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
  const textStyle: CSSProperties = {
    color,
    fontSize,
    width,
    marginLeft,
    marginTop,
    lineHeight,
    fontWeight,
  };

  if (marginY) {
    textStyle.marginTop = marginY;
    textStyle.marginBottom = marginY;
  }
  if (marginX) {
    textStyle.marginLeft = marginX;
    textStyle.marginRight = marginX;
  }

  const textElement = createElement(
    component[variant],
    { style: textStyle, className: `typography typography_variant_${variant}` },
    children
  );
  return <>{textElement}</>;
}

export default Typography;
