import AddIcon from "@mui/icons-material/Add";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const icons = {
  AddIcon,
  AutoStoriesIcon,
  CancelOutlinedIcon,
  CheckCircleOutlineIcon,
  DeleteOutlineIcon,
  EditIcon,
  ExpandLessIcon,
  ExpandMoreIcon,
  MenuIcon,
  NavigateBeforeIcon,
};

type IconName = keyof typeof icons;

type IconProps = {
  color?: "error" | "primary" | "secondary" | "success";
  name: IconName;
};

function Icon({ color, name }: IconProps) {
  const SelectedIcon = icons[name];
  return <SelectedIcon color={color} />;
}

export default Icon;
export { IconName };
