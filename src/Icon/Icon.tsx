import AddIcon from "@mui/icons-material/Add";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const icons = {
  AddIcon,
  AutoStoriesIcon,
  CancelOutlinedIcon,
  CheckCircleOutlineIcon,
  DeleteOutlineIcon,
  EditIcon,
  MenuIcon,
  NavigateBeforeIcon,
};

type IconProps = {
  name: keyof typeof icons;
  color?: "success" | "primary" | "error" | "secondary";
};

function Icon({ name, color }: IconProps) {
  const SelectedIcon = icons[name];
  return <SelectedIcon color={color} />;
}

export default Icon;
