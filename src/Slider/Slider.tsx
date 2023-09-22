/* eslint-disable no-unused-vars */
import MuiSlider from "@mui/material/Slider";

type SliderProps = {
  marks?: boolean;
  max?: number;
  min?: number;
  name?: string;
  onChange?: (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ) => void;
  value?: number;
  valueLabelDisplay?: "auto" | "off" | "on";
  width?: string;
};

function Slider({
  marks,
  max,
  min,
  name,
  onChange,
  value,
  valueLabelDisplay,
  width,
}: SliderProps) {
  return (
    <MuiSlider
      marks={marks}
      max={max}
      min={min}
      name={name}
      onChange={onChange}
      sx={{ width }}
      value={value}
      valueLabelDisplay={valueLabelDisplay}
    />
  );
}

export default Slider;
