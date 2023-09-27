import { render } from "@testing-library/react";
import Button from "./Button";

test("Contained button renders correctly", () => {
  const { container } = render(
    <Button variant="contained" children="contained" />,
  );
  expect(container).toMatchSnapshot();
});

test("Outlined button renders correctly", () => {
  const { container } = render(
    <Button variant="outlined" children="outlined" />,
  );
  expect(container).toMatchSnapshot();
});

test("Disabled button renders correctly", () => {
  const { container } = render(
    <Button variant="Disabled" children="Disabled" />,
  );
  expect(container).toMatchSnapshot();
});

test("Success button renders correctly", () => {
  const { container } = render(
    <Button variant="contained" color="success" children="Success" />,
  );
  expect(container).toMatchSnapshot();
});
