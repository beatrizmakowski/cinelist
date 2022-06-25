import { styled } from "@mui/system";
import { Box, Paper, Button, InputBase } from "@mui/material";


export const BackgroundBox = styled(Box, {})({
    height: "100vh",
    display: "flex",
    paddingTop: "5vh",
    justifyContent: "space-evenly"
});

export const FormBackgroundPaper = styled(Paper, {})({
    borderRadius: "28px",
    backgroundColor: "rgba(18, 15, 51, 0.95)",
    color: "white",
    padding: "43px 60px 49px 49px",
    width: "524px",
});