import {
  Children,
  PropsWithChildren,
  cloneElement,
  useRef,
  useState,
} from "react";

import List from "../List/List";
import Paper from "../Paper/Paper";
import "./Select.scss";

type SelectChangeEvent<Value = string> =
  | (Event & { target: { name: string; value: Value } })
  | React.ChangeEvent<HTMLInputElement>;

type SelectProps = PropsWithChildren & {
  disabled?: boolean;
  flex?: string;
  fullWidth?: boolean;
  maxWidth?: number;
  onChange?: (value: string) => void;
  size?: "small";
  value?: string;
};

function Icon({ rotate }: { rotate: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`icon icon_${rotate ? "rotate" : ""}`}
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );
}

function Select({
  children,
  disabled,
  flex,
  fullWidth,
  maxWidth,
  onChange,
  size,
  value,
}: SelectProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [iconRotation, setIconRotation] = useState<boolean>(false);
  const isActive = open;
  const selectValueRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (selectedValue: string) => {
    if (!onChange) return;
    onChange(selectedValue);
    setOpen(false);
    setIconRotation((prev) => !prev);
  };

  return (
    <div className="select" style={{ flex }}>
      <div
        className={`select__value select__value_size_${size} select__value_${
          fullWidth ? "full-width" : ""
        } select__value_${disabled ? "disabled" : ""} select__value_${
          isActive ? "active" : ""
        }`}
        onClick={() => {
          if (disabled) return;
          setOpen(!open);
          setIconRotation((prev) => !prev);
        }}
        ref={selectValueRef}
        style={{
          maxWidth,
        }}
      >
        {value} <Icon rotate={iconRotation} />
      </div>
      {open && (
        <Paper
          className="select__items"
          elevation={10}
          width={selectValueRef.current?.offsetWidth}
        >
          <List>
            {Children.map(children, (child) =>
              cloneElement(child as React.ReactElement, {
                onClick: () => {
                  if (!child) return;
                  if (!(typeof child === "object" && "props" in child)) return;
                  handleSelect(child.props.value);
                },
              }),
            )}
          </List>
        </Paper>
      )}
    </div>
  );
}

export default Select;
