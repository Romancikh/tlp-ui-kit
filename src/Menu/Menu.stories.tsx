import type { Meta } from "@storybook/react";

import { MouseEvent, useState } from "react";

import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
import ListItemIcon from "../ListItemIcon/ListItemIcon";
import ListItemText from "../ListItemText/ListItemText";
import MenuItem from "../MenuItem/MenuItem";
import Menu from "./Menu";

const meta = {
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Menu",
} satisfies Meta<typeof Menu>;

export default meta;

export function Default() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <Icon name="MenuIcon" />
      </IconButton>
      <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
        <MenuItem>
          <ListItemIcon>
            <Icon color="primary" name="EditIcon" />
          </ListItemIcon>
          <ListItemText>Редактировать</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Icon color="primary" name="DeleteOutlineIcon" />
          </ListItemIcon>
          <ListItemText>Удалить</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
