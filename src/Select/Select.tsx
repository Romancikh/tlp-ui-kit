import {
  Children,
  PropsWithChildren,
  cloneElement,
  useRef,
  useState,
} from "react";
import Icon, { IconName } from "../Icon/Icon";
import List from "../List/List";
import Paper from "../Paper/Paper";
import "./Select.scss";

export type SelectChangeEvent<Value = string> =
  | (Event & { target: { value: Value; name: string } })
  | React.ChangeEvent<HTMLInputElement>;

export type SelectProps = PropsWithChildren & {
  size?: "small";
  fullWidth?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
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
  const [open, setOpen] = useState(false);
  const [iconName, setIconName] = useState<IconName>("ExpandMoreIcon");
  const selectValueRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (selectedValue: string) => {
    if (!onChange) return;
    onChange(selectedValue);
    setOpen(false);
    setIconName("ExpandMoreIcon");
  };

  return (
    <div className={`select`} style={{ flex }}>
      <div
        ref={selectValueRef}
        className={`select__value select__value_size_${size} select__value_${
          fullWidth ? "full-width" : ""
        } select__value_${disabled ? "disabled" : ""}`}
        style={{
          maxWidth,
        }}
        onClick={() => {
          if (disabled) return;
          setOpen(!open);
          if (iconName === "ExpandMoreIcon") setIconName("ExpandLessIcon");
          else setIconName("ExpandMoreIcon");
        }}
      >
        {value} <Icon name={iconName} />
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
