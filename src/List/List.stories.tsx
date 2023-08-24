import type { Meta, StoryObj } from "@storybook/react";

import AutoStoriesIcon from "../Icons/AutoStoriesIcon";
import CancelOutlinedIcon from "../Icons/CancelOutlinedIcon";
import CheckCircleOutlineIcon from "../Icons/CheckCircleOutlineIcon";
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
  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ListItem divider>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="success" />
          </ListItemIcon>
          <ListItemText>ListItem 1</ListItemText>
        </ListItem>
        <ListItem divider>
          <ListItemIcon>
            <CancelOutlinedIcon color="error" />
          </ListItemIcon>
          <ListItemText>ListItem 2</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AutoStoriesIcon color="secondary" />
          </ListItemIcon>
          <ListItemText>ListItem 3</ListItemText>
        </ListItem>
      </>
    ),
  },
};
