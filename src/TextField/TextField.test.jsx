import { render } from "@testing-library/react";
import TextField from "./TextField";

test("TextField renders correctly", () => {
  const { container } = render(<TextField />);
  expect(container).toMatchSnapshot();
});

test("TextField with placeholder renders correctly", () => {
  const { container } = render(<TextField placeholder="Some placeholder" />);
  expect(container).toMatchSnapshot();
});

test("Small TextField renders correctly", () => {
  const { container } = render(<TextField size="small" />);
  expect(container).toMatchSnapshot();
});
