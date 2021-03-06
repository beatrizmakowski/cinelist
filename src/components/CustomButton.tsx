import { Button, SxProps, Theme, Typography } from "@mui/material";

interface CustomButtonProps {
  label: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

export function CustomButton({ label, sx, onClick }: CustomButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={"contained"}
      sx={{
        height: "64px",
        width: "426px",
        maxWidth: "100%",
        backgroundColor: "#0069FF",
        textTransform: "none",
        whiteSpace: "nowrap",
        ...sx,
      }}
    >
      <Typography variant="subtitle1">{label}</Typography>
    </Button>
  );
}
