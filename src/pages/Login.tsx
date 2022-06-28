import { Box, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CustomBackground,
  CustomBackgroundBox,
  CustomButton,
  CustomFormTextField,
  CustomLogo,
  CustomPaper,
} from "../components";
import { loginSchema } from "../validations";
import { logUser } from "../services";

interface LoginForm {
  email: string;
  password: string;
}

export function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  }); 
  console.log(errors);

  async function loginUser(data: LoginForm) {
    const result = await logUser({
      email: data.email,
      password: data.password,
    });
  }

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
              <CustomFormTextField
                control={control}
                name={"email"}
                placeholder="Insira o email aqui"
              />
              <CustomFormTextField
                control={control}
                name={"password"}
                placeholder="Insira a senha aqui"
              />
              <CustomButton
                onClick={handleSubmit(loginUser)}
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
