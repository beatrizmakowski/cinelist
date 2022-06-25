import { Box } from "@mui/material";

export function CustomBackgroundBox(props: any) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        paddingTop: { xs: "vh", xl: "5vh" },
        justifyContent: "space-evenly",
      }}
    >
      {props.children}
    </Box>
  );
}
