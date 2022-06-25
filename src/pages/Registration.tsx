import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  CustomBackground,
  CustomBackgroundBox,
  CustomLogo,
  CustomPaper,
  CustomFormTextField,
  CustomButton,
} from "../components";

// Components
export function Registration() {
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
                Faça o cadastro
              </Typography>
              <CustomFormTextField placeholder="Insira o email aqui" />
              <CustomFormTextField placeholder="Insira a senha aqui" />
              <Typography
                align="left"
                sx={{
                  fontSize: "12px",
                  marginTop: 1,
                }}
              >
                A senha deve conter no mínimo 8 letras
              </Typography>
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
      </CustomBackgroundBox>
    </CustomBackground>
  );
}
