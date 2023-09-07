import MuiButton from "@mui/material/Button";
import { CSSProperties, MouseEvent, PropsWithChildren, ReactNode } from "react";
import "./Button.scss";

type ButtonProps = PropsWithChildren & {
  variant: "contained" | "outlined";
  disabled?: boolean;
  onClick?: () => void;
  color?: "success";
  startIcon?: ReactNode;
  minWidth?: "unset";
  alignSelf?: "flex-end";
  padding?: number;
  marginTop?: number;
};

function Button({
  children,
  variant,
  disabled,
  onClick,
  color,
  startIcon,
  minWidth,
  alignSelf,
  padding,
  marginTop,
}: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      color={color ?? "primary"}
      startIcon={startIcon}
      sx={{
        minWidth,
        alignSelf,
        padding,
        marginTop,
      }}
    >
      {children}
    </MuiButton>
  );
}

function Button2({
  children,
  variant,
  disabled,
  onClick,
  color,
  startIcon,
  minWidth,
  alignSelf,
  padding,
  marginTop,
}: ButtonProps) {
  const handleRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rippleElement = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    rippleElement.style.width = rippleElement.style.height = `${size}px`;
    rippleElement.style.left = `${x}px`;
    rippleElement.style.top = `${y}px`;

    rippleElement.classList.add("ripple");

    button.appendChild(rippleElement);

    setTimeout(() => {
      rippleElement.remove();
    }, 600);
  };

  const buttonStyle = {
    minWidth,
    alignSelf,
    padding,
    marginTop,
  } satisfies CSSProperties;

  return (
    <button
      className={`button button_variant_${variant} button_color_${color}`}
      tabIndex={0}
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseDown={handleRipple}
      style={buttonStyle}
    >
      {startIcon && <span className="button__start-icon">{startIcon}</span>}
      {children}
    </button>
  );
}

export default Button;
export { Button2 };
