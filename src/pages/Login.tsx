import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Components
import { CustomBackground } from "../components/CustomBackground";
import { CustomBackgroundBox } from "../components/CustomBackgroundBox";
import { CustomPaper } from "../components/CustomPaper";
import { CustomLogo } from "../components/CustomLogo";
import { CustomFormTextField } from "../components/CustomFormTextField";
import { CustomButton } from "../components/CustomButton";

export function Login() {
  const navigate = useNavigate();
  return (
    <CustomBackground>
      <CustomBackgroundBox>
        <Box>
          <CustomLogo />
          <CustomPaper>
            <Stack direction={"column"} spacing={{ xs: 2, xl: 4 }}>
              <Typography
                variant="h4"
                align="left"
                sx={{
                  fontSize: "30px",
                  fontWeight: 700,
                }}
              >
                Faça o login
              </Typography>
              <CustomFormTextField placeholder="Insira o email aqui" />
              <CustomFormTextField placeholder="Insira a senha aqui" />
              <CustomButton
                onClick={() => {
                  navigate("/");
                }}
                label="Fazer Login"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "fit-content",
                  gap: "18px",
                }}
              >
                <Typography align="left">
                  Não tem uma conta? Crie agora!
                </Typography>
                <CustomButton
                  onClick={() => {
                    navigate("/registration");
                  }}
                  label="Registrar uma conta"
                />
              </Box>
            </Stack>
          </CustomPaper>
        </Box>
      </CustomBackgroundBox>
    </CustomBackground>
  );
}
