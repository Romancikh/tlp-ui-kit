import type { Meta, StoryObj } from "@storybook/react";

import Icon from "../Icon/Icon";
import ListItem from "../ListItem/ListItem";
import ListItemIcon from "../ListItemIcon/ListItemIcon";
import ListItemText from "../ListItemText/ListItemText";
import List from "./List";

const meta = {
  component: List,
  parameters: {
    layout: "centered",
  },
  title: "List",
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...args }) => (
    <List {...args}>
      <ListItem divider>
        <ListItemIcon>
          <Icon color="success" name="CheckCircleOutlineIcon" />
        </ListItemIcon>
        <ListItemText>ListItem 1</ListItemText>
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <Icon color="error" name="CancelOutlinedIcon" />
        </ListItemIcon>
        <ListItemText>ListItem 2</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Icon color="secondary" name="AutoStoriesIcon" />
        </ListItemIcon>
        <ListItemText>ListItem 3</ListItemText>
      </ListItem>
    </List>
  ),
};
