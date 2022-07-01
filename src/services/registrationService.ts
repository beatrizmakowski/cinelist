import { api } from "../utils";

interface createUserDTO {
  email: string;
  password: string;
}

export async function createUser(dto: createUserDTO) {
  try {
    const formattedData = {
      name: dto.email.split("@")[0],
      email: dto.email,
      password: dto.password,
    };
    const { data } = await api.post("auth/signup", formattedData);
    // access_token
    localStorage.setItem("token", data.access_token);
    return data;
  } catch (err) {
    console.log(err);
  }
}
