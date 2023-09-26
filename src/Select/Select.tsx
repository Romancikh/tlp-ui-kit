import classnames from "classnames";
import {
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useRef,
  useState,
} from "react";

import List from "../List/List";
import Paper from "../Paper/Paper";
import "./Select.scss";

type SelectProps = PropsWithChildren & {
  disabled?: boolean;
  flex?: string;
  fullWidth?: boolean;
  maxWidth?: number;
  // eslint-disable-next-line no-unused-vars
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
        className={classnames("select__value", `select__value_size_${size}`, {
          "select__value_full-width": fullWidth,
          select__value_disabled: disabled,
          select__value_active: isActive,
        })}
        onClick={() => {
          if (disabled) return;
          setOpen(!open);
          setIconRotation((prev) => !prev);
        }}
        onKeyDown={() => {}}
        ref={selectValueRef}
        role="button"
        style={{
          maxWidth,
        }}
        tabIndex={0}
      >
        {value}
        <Icon rotate={iconRotation} />
      </div>
      {open && (
        <Paper
          className="select__items"
          elevation={10}
          width={selectValueRef.current?.offsetWidth}
        >
          <List>
            {Children.map(
              children,
              (child) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                cloneElement(child as ReactElement, {
                  onClick: () => {
                    if (!child) return;
                    if (!(typeof child === "object" && "props" in child)) {
                      return;
                    }
                    handleSelect(child.props.value);
                  },
                }),
              // eslint-disable-next-line function-paren-newline
            )}
          </List>
        </Paper>
      )}
    </div>
  );
}

export default Select;
