import MuiAvatar from "@mui/material/Avatar";

type AvatarProps = {
  alt?: string;
  src?: string;
  width?: string;
  height?: string;
};

function Avatar({ alt, src, width, height }: AvatarProps) {
  return (
    <MuiAvatar
      alt={alt}
      src={src}
      sx={{
        width,
        height,
      }}
    />
  );
}

export default Avatar;
