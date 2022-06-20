import { styled } from "@mui/system";
import { Typography, Container, Box, Paper, Button, InputBase } from "@mui/material";
import backgroundImage from "../assets/backgroundImage.png"

export const LogoTypography = styled(Typography, {})({
    color: "#FFF500",
    fontFamily: "Just Another Hand",
    fontWeight: 400,
    fontSize: "96px",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
});

export const BackgroundContainer = styled(Container, {})({
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#252B3A',
    height: '100vh',
    width: 'auto',
    minWidth: '100vw',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
});

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
