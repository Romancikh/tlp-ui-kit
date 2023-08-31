import { render } from "@testing-library/react";
import Slider from "./Slider";

test("Slider renders correctly", () => {
  const { container } = render(<Slider min={1} max={5} width="250px" />);
  expect(container).toMatchSnapshot();
});
