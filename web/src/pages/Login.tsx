import {
    Box,
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
    FormTextField
} from "./LoginAndRegistrationStyles"

export function Login() {
    return (
        <BackgroundContainer>
            <BackgroundBox>
                <Box>
                    <LogoTypography>The CineList</LogoTypography>
                    <FormBackgroundPaper elevation={1}>
                        <Stack direction={"column"} spacing={4}>
                            <Typography 
                                variant="h4" 
                                align="left"
                                sx={{ 
                                    fontSize: '30px', 
                                    fontWeight: 700,
                                    marginBottom: '65px' 
                                }}
                            >
                                    Faça o login
                            </Typography>
                            <FormTextField defaultValue={"Insira o email aqui"} />
                            <FormTextField defaultValue={"Insira a senha aqui"} />
                            <FormButton variant={"contained"}>
                                <Typography variant="subtitle1">Fazer Login</Typography>
                            </FormButton>
                            <Typography align="left" >Não tem uma conta? Crie agora!</Typography>
                            <FormButton 
                                variant={"contained"}
                                style={{ marginTop: 8}}
                            >
                                <Typography variant="subtitle1">Registrar uma conta</Typography>
                            </FormButton>
                        </Stack>
                    </FormBackgroundPaper>
                </Box>
            </BackgroundBox>
        </BackgroundContainer>
    );
}