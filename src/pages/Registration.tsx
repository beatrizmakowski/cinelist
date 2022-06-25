import {
    Box,
    Stack,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomBackground } from "../components/CustomBackground";
import { CustomLogo } from "../components/CustomLogo";
import { CustomButton } from "../components/CustomButton";
import { CustomFormTextField } from "../components/CustomFormTextField";
import { 
    BackgroundBox,
    FormBackgroundPaper,
} from "./LoginAndRegistrationStyles"

export function Registration() {
    const navigate = useNavigate();
    return (
        <CustomBackground>
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
                            <CustomFormTextField placeholder="Insira o email aqui" />
                            <CustomFormTextField placeholder="Insira a senha aqui" />
                            <Typography
                                align="left"
                                sx={{ 
                                    fontSize: "12px", 
                                    marginTop: 1 }}
                            >A senha deve conter no mínimo 8 letras</Typography>
                            <CustomFormTextField placeholder="Confirme a senha" />
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
        </CustomBackground>
    );
}