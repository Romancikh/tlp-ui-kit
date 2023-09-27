import MuiAvatar from "@mui/material/Avatar";

type AvatarProps = {
  alt?: string;
  height?: string;
  src?: string;
  width?: string;
};

function Avatar({ alt, height, src, width }: AvatarProps) {
  return (
    <MuiAvatar
      alt={alt}
      src={src}
      sx={{
        height,
        width,
      }}
    />
  );
}

export default Avatar;
