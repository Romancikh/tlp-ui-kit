import MuiStack from "@mui/material/Stack";
import { PropsWithChildren } from "react";

type StackProps = PropsWithChildren & {
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
  marginTop?: number;
  spacing?: number;
};

function Stack({ children, direction, marginTop, spacing }: StackProps) {
  return (
    <MuiStack direction={direction} marginTop={marginTop} spacing={spacing}>
      {children}
    </MuiStack>
  );
}

export default Stack;
