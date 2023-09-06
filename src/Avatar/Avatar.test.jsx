import { render } from "@testing-library/react";
import Avatar from "./Avatar";

test("Avatar renders correctly", () => {
  const { container } = render(<Avatar />);
  expect(container).toMatchSnapshot();
});
