import MuiStack from "@mui/material/Stack";
import { PropsWithChildren } from "react";

type StackProps = PropsWithChildren & {
  marginTop?: number;
  gap?: number;
};

function Stack({ marginTop, gap, children }: StackProps) {
  return (
    <MuiStack marginTop={marginTop} gap={gap}>
      {children}
    </MuiStack>
  );
}

export default Stack;
