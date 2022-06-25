import { Typography } from "@mui/material";

export function CustomLogo() {
    return (
        <Typography
            sx={{
                color: "#FFF500",
                fontFamily: "Just Another Hand",
                fontWeight: 400,
                fontSize: "96px",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
        >
            CineList
        </Typography>
    );
}