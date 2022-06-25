import { Paper } from "@mui/material";

export function CustomPaper(props: any) {
  return (
    <Paper
      sx={{
        borderRadius: "28px",
        backgroundColor: "rgba(18, 15, 51, 0.95)",
        color: "white",
        padding: { xs: "25px", xl: 5 },
        width: "524px",
      }}
      elevation={1}
    >
      {props.children}
    </Paper>
  );
}
