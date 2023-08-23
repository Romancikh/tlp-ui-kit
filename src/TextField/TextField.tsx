import { InputBaseComponentProps } from "@mui/material/InputBase";
import MuiTextField from "@mui/material/TextField";
import { ChangeEventHandler, PropsWithChildren } from "react";

type TextFieldProps = PropsWithChildren & {
  type?: "number";
  select?: boolean;
  multiline?: boolean;
  placeholder?: string;
  id?: string;
  minRows?: number;
  inputProps?: InputBaseComponentProps;
  size?: "small";
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  flex?: string;
  margin?: "normal";
};

function TextField({
  type,
  select,
  multiline,
  placeholder,
  id,
  minRows,
  inputProps,
  size,
  value,
  onChange,
  flex,
  margin,
  children,
}: TextFieldProps) {
  return (
    <MuiTextField
      type={type}
      select={select}
      multiline={multiline}
      placeholder={placeholder}
      id={id}
      minRows={minRows}
      inputProps={inputProps}
      size={size}
      value={value}
      onChange={onChange}
      margin={margin}
      sx={{ flex }}
    >
      {children}
    </MuiTextField>
  );
}

export default TextField;
