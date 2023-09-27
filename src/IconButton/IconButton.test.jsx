import { render } from "@testing-library/react";
import Icon from "../Icon/Icon";
import IconButton from "./IconButton";

test("IconButton renders correctly", () => {
  const { container } = render(
    <IconButton>
      <Icon name="AddIcon" />
    </IconButton>,
  );
  expect(container).toMatchSnapshot();
});
