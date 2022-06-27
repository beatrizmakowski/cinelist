import { ReactNode } from "react";
import { Box } from "@mui/material";

interface CustomBackgroundProps {
  children: ReactNode;
}

export function CustomBackgroundBox({ children }: CustomBackgroundProps) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        paddingTop: { xs: "vh", xl: "5vh" },
        justifyContent: "space-evenly",
      }}
    >
      {children}
    </Box>
  );
}
