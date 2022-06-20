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
    FormBackgroundPaper,
    FormButton,
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
                            <FormButton variant={"contained"}>
                                <Typography variant="subtitle1">Fazer Login</Typography>
                            </FormButton>
                            <Typography align="left" >Não tem uma conta? Crie agora!</Typography>
                            <FormButton variant={"contained"}>
                                <Typography variant="subtitle1">Registrar uma conta</Typography>
                            </FormButton>
                        </Stack>
                    </FormBackgroundPaper>
                </Box>
            </BackgroundBox>
        </BackgroundContainer>
    );
}