import type { Meta, StoryObj } from "@storybook/react";

import DeleteOutlineIcon from "../Icons/DeleteOutlineIcon";
import EditIcon from "../Icons/EditIcon";
import ListItemIcon from "../ListItemIcon/ListItemIcon";
import ListItemText from "../ListItemText/ListItemText";
import MenuItem from "../MenuItem/MenuItem";
import Menu from "./Menu";

const meta = {
  title: "Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <>
        <MenuItem>
          <ListItemIcon>
            <EditIcon color="primary" />
          </ListItemIcon>
          <ListItemText>Редактировать</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DeleteOutlineIcon color="primary" />
          </ListItemIcon>
          <ListItemText>Удалить</ListItemText>
        </MenuItem>
      </>
    ),
  },
};
