import type { Meta } from "@storybook/react";

import { useState } from "react";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
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

export const Default = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
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
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem>
          <ListItemIcon>
            <Icon name="EditIcon" color="primary" />
          </ListItemIcon>
          <ListItemText>Редактировать</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Icon name="DeleteOutlineIcon" color="primary" />
          </ListItemIcon>
          <ListItemText>Удалить</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
