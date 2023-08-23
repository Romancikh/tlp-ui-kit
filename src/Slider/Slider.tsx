import MuiSlider from "@mui/material/Slider";
import { PropsWithChildren } from "react";

type SliderProps = PropsWithChildren & {
  name?: string;
  marks?: boolean;
  valueLabelDisplay?: "auto" | "on" | "off";
  min?: number;
  max?: number;
  value?: number;
  onChange?: () => void;
  width?: string;
};

function Slider({
  name,
  marks,
  valueLabelDisplay,
  min,
  max,
  value,
  onChange,
  width,
  children,
}: SliderProps) {
  return (
    <MuiSlider
      name={name}
      marks={marks}
      valueLabelDisplay={valueLabelDisplay}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      sx={{ width }}
    >
      {children}
    </MuiSlider>
  );
}

export default Slider;
