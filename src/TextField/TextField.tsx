import { InputBaseComponentProps } from "@mui/material/InputBase";
import MuiTextField from "@mui/material/TextField";
import { ChangeEventHandler } from "react";

type TextFieldProps = {
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
  margin,
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
    />
  );
}

export default TextField;
