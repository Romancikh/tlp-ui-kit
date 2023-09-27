import { render } from "@testing-library/react";
import Typography from "./Typography";

test("Typography renders correctly", () => {
  const { container } = render(
    <Typography variant="h1" children="h1. Heading" />,
  );
  expect(container).toMatchSnapshot();
});

test("Colored Typography renders correctly", () => {
  const { container } = render(
    <Typography
      color="#1976d2"
      children="body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
    />,
  );
  expect(container).toMatchSnapshot();
});
