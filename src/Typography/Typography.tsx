import { CSSProperties, PropsWithChildren, createElement } from "react";

import "./Typography.scss";

type TypographyProps = PropsWithChildren & {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  marginLeft?: number;
  marginTop?: number;
  marginX?: number;
  marginY?: number;
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
  width?: number;
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
  children,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  marginLeft,
  marginTop,
  marginX,
  marginY,
  variant = "body1",
  width,
}: TypographyProps) {
  const textStyle: CSSProperties = {
    color,
    fontSize,
    fontWeight,
    lineHeight,
    marginLeft,
    marginTop,
    width,
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
    { className: `typography typography_variant_${variant}`, style: textStyle },
    children,
  );
  return <>{textElement}</>;
}

export default Typography;
