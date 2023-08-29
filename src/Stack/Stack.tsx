import MuiStack from "@mui/material/Stack";
import { PropsWithChildren } from "react";

type StackProps = PropsWithChildren & {
  marginTop?: number;
  spacing?: number;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
};

function Stack({ marginTop, spacing, direction, children }: StackProps) {
  return (
    <MuiStack marginTop={marginTop} spacing={spacing} direction={direction}>
      {children}
    </MuiStack>
  );
}

export default Stack;
