import MuiSlider from "@mui/material/Slider";

type SliderProps = {
  name?: string;
  marks?: boolean;
  valueLabelDisplay?: "auto" | "on" | "off";
  min?: number;
  max?: number;
  value?: number;
  onChange?: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
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
    />
  );
}

export default Slider;
