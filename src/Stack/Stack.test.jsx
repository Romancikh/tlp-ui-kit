import { render } from "@testing-library/react";
import Stack from "./Stack";

test("Stack renders correctly", () => {
  const { container } = render(
    <Stack>
      <div key="div1">First Div</div>
      <div key="div2">Second Div</div>
      <div key="div3">Third Div</div>
    </Stack>
  );
  expect(container).toMatchSnapshot();
});

test("Row Stack renders correctly", () => {
  const { container } = render(
    <Stack direction="row">
      <div key="div1">First Div</div>
      <div key="div2">Second Div</div>
      <div key="div3">Third Div</div>
    </Stack>
  );
  expect(container).toMatchSnapshot();
});

test("Spacing Stack renders correctly", () => {
  const { container } = render(
    <Stack spacing={7}>
      <div key="div1">First Div</div>
      <div key="div2">Second Div</div>
      <div key="div3">Third Div</div>
    </Stack>
  );
  expect(container).toMatchSnapshot();
});

test("Margin Stack renders correctly", () => {
  const { container } = render(
    <Stack marginTop={7}>
      <div key="div1">First Div</div>
      <div key="div2">Second Div</div>
      <div key="div3">Third Div</div>
    </Stack>
  );
  expect(container).toMatchSnapshot();
});
