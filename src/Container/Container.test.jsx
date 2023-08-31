import { render } from "@testing-library/react";
import Container from "./Container";

test("Default container renders correctly", () => {
  const { container } = render(
    <Container background="lightgreen" height="100vh" children="Some content" />
  );
  expect(container).toMatchSnapshot();
});

test("MaxWidth container renders correctly", () => {
  const { container } = render(
    <Container
      maxWidth={false}
      background="lightblue"
      height="100vh"
      children="Some content"
    />
  );
  expect(container).toMatchSnapshot();
});
