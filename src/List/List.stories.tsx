import type { Meta, StoryObj } from "@storybook/react";

import Icon from "../Icon/Icon";
import ListItem from "../ListItem/ListItem";
import ListItemIcon from "../ListItemIcon/ListItemIcon";
import ListItemText from "../ListItemText/ListItemText";
import List from "./List";

const meta = {
  title: "List",
  component: List,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...args }) => (
    <List {...args}>
      <ListItem divider>
        <ListItemIcon>
          <Icon name="CheckCircleOutlineIcon" color="success" />
        </ListItemIcon>
        <ListItemText>ListItem 1</ListItemText>
      </ListItem>
      <ListItem divider>
        <ListItemIcon>
          <Icon name="CancelOutlinedIcon" color="error" />
        </ListItemIcon>
        <ListItemText>ListItem 2</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Icon name="AutoStoriesIcon" color="secondary" />
        </ListItemIcon>
        <ListItemText>ListItem 3</ListItemText>
      </ListItem>
    </List>
  ),
};
