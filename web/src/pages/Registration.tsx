import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    TextField,
    Typography,
    makeStyles
} from "@mui/material";
import { height, styled } from "@mui/system";
import backgroundImage from "../assets/backgroundImage.png"

const LogoTypography = styled(Typography, {})({
    color: "#FFF500",
    fontFamily: "Just Another Hand",
    fontWeight: 400,
    fontSize: "96px",
});

const styles = {
    backgroundContainer: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#252B3A',
        height: '100vh',
        width: 'auto',
        minWidth: '100vw',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
};

export function Registration() {
    return (
        <Container style={styles.backgroundContainer}>
            <Box
                sx={{ 
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                }}
            >
                <Box>
                    <LogoTypography>The CineList</LogoTypography>
                    <Paper elevation={1} 
                        sx={{
                            borderRadius: "28px",
                            bgcolor: "rgba(18, 15, 51, 0.95)",
                            color: "white",
                            padding: "43px 49px",
                            width: "524px"
                        }}
                    >
                        <Stack direction={"column"} spacing={4}>
                            <Typography variant="h4">Faça o login</Typography>
                            <TextField 
                                defaultValue={"Insira o email aqui"}
                                sx={{ input: { color: 'white' }}}
                            />
                            <TextField 
                                defaultValue={"Insira a senha aqui"}
                                sx={{ input: { color: 'white' } }}
                            />
                            <Button 
                                variant={"contained"}
                                sx={{
                                    padding: "22px 169px"
                                }}
                            >
                                <Typography variant="subtitle1">Fazer Login</Typography>
                            </Button>
                            <Typography>Não tem uma conta? Crie agora!</Typography>
                            <Button variant={"contained"}>
                                <Typography variant="subtitle1">Registrar uma conta</Typography>
                            </Button>
                        </Stack>
                    </Paper>
                </Box>
            </Box>
        </Container>
    );
}