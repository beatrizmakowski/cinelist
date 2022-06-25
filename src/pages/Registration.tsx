import {
    Box,
    Stack,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { 
    BackgroundBox,
} from "./LoginAndRegistrationStyles"

// Components
import { CustomBackground } from "../components/CustomBackground";
import { CustomPaper } from "../components/CustomPaper";
import { CustomLogo } from "../components/CustomLogo";
import { CustomFormTextField } from "../components/CustomFormTextField";
import { CustomButton } from "../components/CustomButton";

export function Registration() {
    const navigate = useNavigate();
    return (
        <CustomBackground>
            <BackgroundBox>
                <Box>
                    <CustomLogo />
                    <CustomPaper>
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
                    </CustomPaper>
                </Box>
            </BackgroundBox>
        </CustomBackground>
    );
}