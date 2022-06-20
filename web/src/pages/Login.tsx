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
    BackgroundContainer,
    BackgroundBox,
    FormBackgroundPaper
} from "./LoginAndRegistrationStyles"

export function Login() {
    return (
        <BackgroundContainer>
            <BackgroundBox>
                <Box>
                    <LogoTypography>The CineList</LogoTypography>
                    <FormBackgroundPaper elevation={1}>
                        <Stack direction={"column"} spacing={4}>
                            <Typography variant="h4" align="left" >Faça o login</Typography>
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
                            <Typography align="left" >Não tem uma conta? Crie agora!</Typography>
                            <Button variant={"contained"}>
                                <Typography variant="subtitle1">Registrar uma conta</Typography>
                            </Button>
                        </Stack>
                    </FormBackgroundPaper>
                </Box>
            </BackgroundBox>
        </BackgroundContainer>
    );
}