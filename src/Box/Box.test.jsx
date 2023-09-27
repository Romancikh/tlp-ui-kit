import { render } from "@testing-library/react";
import Box from "./Box";

test("Box renders correctly", () => {
  const { container } = render(
    <Box
      width={300}
      height={200}
      border="1px solid #000"
      children="Some content"
    />,
  );
  expect(container).toMatchSnapshot();
});
