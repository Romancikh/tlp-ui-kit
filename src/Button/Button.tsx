import { CSSProperties, MouseEvent, PropsWithChildren, ReactNode } from "react";

import "./Button.scss";

type ButtonProps = PropsWithChildren & {
  alignSelf?: "flex-end";
  color?: "success";
  disabled?: boolean;
  marginTop?: number;
  minWidth?: "unset";
  onClick?: () => void;
  padding?: number;
  startIcon?: ReactNode;
  variant: "contained" | "outlined";
};

function Button({
  alignSelf,
  children,
  color,
  disabled,
  marginTop,
  minWidth,
  onClick,
  padding,
  startIcon,
  variant,
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
    alignSelf,
    marginTop,
    minWidth,
    padding,
  } satisfies CSSProperties;

  return (
    <button
      className={`button button_variant_${variant} button_color_${color}`}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={handleRipple}
      style={buttonStyle}
      tabIndex={0}
      type="button"
    >
      {startIcon && <span className="button__start-icon">{startIcon}</span>}
      {children}
    </button>
  );
}

export default Button;
