import {
    Box,
    Stack,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoginAndRegistrationBackground } from "../components/LoginAndRegistrationBackground";
import { CustomLogo } from "../components/CustomLogo";
import { CustomButton } from "../components/CustomButton";
import { 
    BackgroundBox,
    FormBackgroundPaper,
    FormTextField
} from "./LoginAndRegistrationStyles"

export function Registration() {
    const navigate = useNavigate();
    return (
        <LoginAndRegistrationBackground>
            <BackgroundBox>
                <Box>
                    <CustomLogo />
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
                            <CustomButton
                                onClick={() => {
                                    navigate("/");
                                }}
                                label="Realizar Cadastro"
                                sx={{ marginTop: 8 }}
                            />
                        </Stack>
                    </FormBackgroundPaper>
                </Box>
            </BackgroundBox>
        </LoginAndRegistrationBackground>
    );
}