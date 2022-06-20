import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import backgroundImage from "../assets/backgroundImage.png"

export const LogoTypography = styled(Typography, {})({
    color: "#FFF500",
    fontFamily: "Just Another Hand",
    fontWeight: 400,
    fontSize: "96px",
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