import * as yup from "yup";

export const registrationSchema = yup
  .object({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Insira um email válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "A senha deve conter no mínimo 8 caracteres" ),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas devem ser iguais"),
  })
  .required();
