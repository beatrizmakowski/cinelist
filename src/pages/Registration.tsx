import { Box, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CustomBackground,
  CustomBackgroundBox,
  CustomLogo,
  CustomPaper,
  CustomFormTextField,
  CustomButton,
} from "../components";
import { registrationSchema } from "../validations";
import { createUser } from "../services";

interface RegisterForm {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export function Registration() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(registrationSchema),
    mode: "onChange",
  });
  console.log(errors);

  async function registerUser(data: RegisterForm) {
    const result = await createUser({
      email: data.email,
      password: data.password,
    });

    console.log(result);
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
                Faça o cadastro
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
                type="password"
              />
              <Typography
                align="left"
                sx={{
                  fontSize: "12px",
                  marginTop: 1,
                }}
              >
                A senha deve conter no mínimo 8 caracteres
              </Typography>
              <CustomFormTextField
                placeholder="Confirme a senha"
                name={"passwordConfirmation"}
                control={control}
                type="password"
              />
              <CustomButton
                onClick={handleSubmit(registerUser)}
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
