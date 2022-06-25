import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components/CustomButton";
import { LoginAndRegistrationBackground } from "../components/LoginAndRegistrationBackground";
import { CustomLogo } from "../components/CustomLogo";
import {
  BackgroundBox,
  FormBackgroundPaper,
  FormTextField,
} from "./LoginAndRegistrationStyles";

export function Login() {
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
                  fontSize: "30px",
                  fontWeight: 700,
                  marginBottom: "65px",
                }}
              >
                Faça o login
              </Typography>
              <FormTextField defaultValue={"Insira o email aqui"} />
              <FormTextField defaultValue={"Insira a senha aqui"} />
              <CustomButton
                onClick={() => {
                  navigate("/");
                }}
                label="Fazer Login"
              />
              <Typography align="left">
                Não tem uma conta? Crie agora!
              </Typography>
              <CustomButton
                onClick={() => {
                  navigate("/registration");
                }}
                label="Registrar uma conta"
                sx={{ marginTop: 8 }}
              />
            </Stack>
          </FormBackgroundPaper>
        </Box>
      </BackgroundBox>
    </LoginAndRegistrationBackground>
  );
}
