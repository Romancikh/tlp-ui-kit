import { InputBaseComponentProps } from "@mui/material/InputBase";
import MuiTextField from "@mui/material/TextField";
import { ChangeEventHandler } from "react";

type TextFieldProps = {
  id?: string;
  inputProps?: InputBaseComponentProps;
  margin?: "normal";
  minRows?: number;
  multiline?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  select?: boolean;
  size?: "small";
  type?: "number";
  value?: string;
};

function TextField({
  id,
  inputProps,
  margin,
  minRows,
  multiline,
  onChange,
  placeholder,
  select,
  size,
  type,
  value,
}: TextFieldProps) {
  return (
    <MuiTextField
      id={id}
      inputProps={inputProps}
      margin={margin}
      minRows={minRows}
      multiline={multiline}
      onChange={onChange}
      placeholder={placeholder}
      select={select}
      size={size}
      type={type}
      value={value}
    />
  );
}

export default TextField;
