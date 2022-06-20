import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { 
    LogoTypography, 
    BackgroundContainer 
} from "./LoginAndRegistrationStyles"

export function Login() {
    return (
        <BackgroundContainer>
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
        </BackgroundContainer>
    );
}