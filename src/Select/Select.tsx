import MuiSelect from "@mui/material/Select";
import { PropsWithChildren } from "react";

export type SelectChangeEvent<Value = string> =
  | (Event & { target: { value: Value; name: string } })
  | React.ChangeEvent<HTMLInputElement>;

type SelectProps = PropsWithChildren & {
  size?: "small";
  fullWidth?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (event: SelectChangeEvent) => void;
  maxWidth?: number;
  flex?: string;
};

function Select({
  size,
  fullWidth,
  value,
  disabled,
  onChange,
  maxWidth,
  flex,
  children,
}: SelectProps) {
  return (
    <MuiSelect
      size={size}
      fullWidth={fullWidth}
      value={value}
      disabled={disabled}
      onChange={onChange}
      sx={{ maxWidth, flex }}
    >
      {children}
    </MuiSelect>
  );
}

export default Select;
