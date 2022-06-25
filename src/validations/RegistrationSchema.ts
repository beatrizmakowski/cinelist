import * as yup from "yup";

export const registrationSchema = yup
  .object({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas devem ser iguais"),
  })
  .required();
