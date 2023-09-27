import type { Meta } from "@storybook/react";

import { useState } from "react";

import MenuItem from "../MenuItem/MenuItem";
import Select from "./Select";

const meta = {
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Select",
} satisfies Meta<typeof Select>;

export default meta;

export function Default() {
  const [value, setValue] = useState("Option 1");
  return (
    <Select onChange={setValue} value={value}>
      <MenuItem value="Option 1">Option 1</MenuItem>
      <MenuItem value="Option 2">Option 2</MenuItem>
      <MenuItem value="Option 3">Option 3</MenuItem>
      <MenuItem value="Option 4">Option 4</MenuItem>
    </Select>
  );
}
