import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Insira um email válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "A senha deve conter no mínimo 8 caracteres"),
  })
  .required();