import { render } from "@testing-library/react";
import Paper from "./Paper";

test("Paper renders correctly", () => {
  const { container } = render(
    <Paper height="128px" width="128px" children="Some content" />,
  );
  expect(container).toMatchSnapshot();
});
