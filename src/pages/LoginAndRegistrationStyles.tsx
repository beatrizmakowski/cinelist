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

export const FormButton = styled(Button, {})({
    height: "64px",
    padding: "0px 169px",
    backgroundColor: "#0069FF",
    textTransform: "none",
    marginTop: 0,
});

export const FormTextField = styled(InputBase, {})({
    color: "white",
    border: "1px solid white",
    borderRadius: "6px",
    paddingLeft: "30px",
    height: "64px",
});
