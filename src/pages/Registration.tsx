import {
    Box,
    Stack,
    Typography,
} from "@mui/material";
import { LoginAndRegistrationBackground } from "../components/LoginAndRegistrationBackground";
import { 
    LogoTypography, 
    BackgroundBox,
    FormBackgroundPaper,
    FormButton,
    FormTextField
} from "./LoginAndRegistrationStyles"

export function Registration() {
    return (
        <LoginAndRegistrationBackground>
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
                                    Faça o cadastro
                            </Typography>
                            <FormTextField defaultValue={"Insira o email aqui"} />
                            <FormTextField defaultValue={"Insira a senha aqui"} />
                            <Typography
                                align="left"
                                sx={{ 
                                    fontSize: "12px", 
                                    marginTop: 1 }}
                            >A senha deve conter no mínimo 8 letras</Typography>
                            <FormTextField defaultValue={"Confirme a senha"} />
                            <FormButton variant={"contained"}>
                                <Typography variant="subtitle1">Realizar Cadastro</Typography>
                            </FormButton>
                        </Stack>
                    </FormBackgroundPaper>
                </Box>
            </BackgroundBox>
        </LoginAndRegistrationBackground>
    );
}