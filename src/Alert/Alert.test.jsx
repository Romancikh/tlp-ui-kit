import { render } from "@testing-library/react";
import AlertTitle from "../AlertTitle/AlertTitle";
import Alert from "./Alert";

test("Alert renders correctly", () => {
  const { container } = render(<Alert />);
  expect(container).toMatchSnapshot();
});

test("Alert with title renders correctly", () => {
  const { container } = render(
    <Alert>
      <AlertTitle>Alert</AlertTitle>
      This is an alert with title
    </Alert>
  );
  expect(container).toMatchSnapshot();
});
