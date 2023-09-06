import { render } from "@testing-library/react";
import Icon from "./Icon";

test("AddIcon renders correctly", () => {
  const { container } = render(<Icon name="AddIcon" />);
  expect(container).toMatchSnapshot();
});

test("Colored AddIcon renders correctly", () => {
  const { container } = render(<Icon name="AddIcon" color="success" />);
  expect(container).toMatchSnapshot();
});

test("AutoStoriesIcon renders correctly", () => {
  const { container } = render(<Icon name="AutoStoriesIcon" />);
  expect(container).toMatchSnapshot();
});

test("CancelOutlinedIcon renders correctly", () => {
  const { container } = render(<Icon name="CancelOutlinedIcon" />);
  expect(container).toMatchSnapshot();
});

test("CheckCircleOutlineIcon renders correctly", () => {
  const { container } = render(<Icon name="CheckCircleOutlineIcon" />);
  expect(container).toMatchSnapshot();
});

test("DeleteOutlineIcon renders correctly", () => {
  const { container } = render(<Icon name="DeleteOutlineIcon" />);
  expect(container).toMatchSnapshot();
});

test("EditIcon renders correctly", () => {
  const { container } = render(<Icon name="EditIcon" />);
  expect(container).toMatchSnapshot();
});

test("MenuIcon renders correctly", () => {
  const { container } = render(<Icon name="MenuIcon" />);
  expect(container).toMatchSnapshot();
});

test("NavigateBeforeIcon renders correctly", () => {
  const { container } = render(<Icon name="NavigateBeforeIcon" />);
  expect(container).toMatchSnapshot();
});
