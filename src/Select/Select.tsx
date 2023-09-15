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
  | (Event & { target: { value: Value; name: string } })
  | React.ChangeEvent<HTMLInputElement>;

type SelectProps = PropsWithChildren & {
  size?: "small";
  fullWidth?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  maxWidth?: number;
  flex?: string;
};

function Icon({ rotate }: { rotate: boolean }) {
  return (
    <svg
      className={`icon icon_${rotate ? "rotate" : ""}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path d="M7 10l5 5 5-5z"></path>
    </svg>
  );
}

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
  const [open, setOpen] = useState<boolean>(false);
  const [iconRotation, setIconRotation] = useState<boolean>(false);
  let isActive = open;
  const selectValueRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (selectedValue: string) => {
    if (!onChange) return;
    onChange(selectedValue);
    setOpen(false);
    setIconRotation((prev) => !prev);
  };

  return (
    <div className={`select`} style={{ flex }}>
      <div
        ref={selectValueRef}
        className={`select__value select__value_size_${size} select__value_${
          fullWidth ? "full-width" : ""
        } select__value_${disabled ? "disabled" : ""} select__value_${
          isActive ? "active" : ""
        }`}
        style={{
          maxWidth,
        }}
        onClick={() => {
          if (disabled) return;
          setOpen(!open);
          setIconRotation((prev) => !prev);
        }}
      >
        {value} <Icon rotate={iconRotation} />
      </div>
      {open && (
        <Paper
          elevation={10}
          className="select__items"
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
              })
            )}
          </List>
        </Paper>
      )}
    </div>
  );
}

export default Select;
