import { render } from "@testing-library/react";
import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import Select from "./Select";

const Component = () => {
  const [value, setValue] = useState("Option 1");

  return (
    <Select value={value} onChange={(event) => setValue(event.target.value)}>
      <MenuItem value="Option 1">Option 1</MenuItem>
      <MenuItem value="Option 2">Option 2</MenuItem>
      <MenuItem value="Option 3">Option 3</MenuItem>
      <MenuItem value="Option 4">Option 4</MenuItem>
    </Select>
  );
};

test("Select renders correctly", () => {
  const { container } = render(<Component />);
  expect(container).toMatchSnapshot();
});
