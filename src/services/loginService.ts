import { api } from "../utils";

interface logUserDTO {
  email: string;
  password: string;
}

export async function logUser(dto: logUserDTO) {
  try {
    const userData = {
      email: dto.email,
      password: dto.password,
    };
    const { data } = await api.post("auth/signin", userData);
    localStorage.setItem("token", data.access_token);
    return data;
  } catch (err) {
    console.log(err);
  }
}