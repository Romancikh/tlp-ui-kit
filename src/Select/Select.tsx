import MuiSelect, { SelectChangeEvent } from "@mui/material/Select";
import { PropsWithChildren } from "react";

type SelectProps = PropsWithChildren & {
  size?: "small";
  fullWidth?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (event: SelectChangeEvent<string>) => void;
  maxWidth?: number;
};

function Select({
  size,
  fullWidth,
  value,
  disabled,
  onChange,
  maxWidth,
  children,
}: SelectProps) {
  return (
    <MuiSelect
      size={size}
      fullWidth={fullWidth}
      value={value}
      disabled={disabled}
      onChange={onChange}
      sx={{ maxWidth }}
    >
      {children}
    </MuiSelect>
  );
}

export default Select;
