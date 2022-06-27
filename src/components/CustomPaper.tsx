import { ReactNode } from "react";
import { Paper } from "@mui/material";

interface CustomPaperProps {
  children: ReactNode;
}

export function CustomPaper({ children }: CustomPaperProps) {
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
      {children}
    </Paper>
  );
}
