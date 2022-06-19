import {
    Box,
    Button,
    Container,
    Grow,
    Paper,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";

  export function Login() {

    return (
        <Container>
            <Typography>The Cinelist</Typography>
            <Paper elevation={1}>
                <Stack direction={"column"} spacing={4}>
                    <Typography>Faça o login</Typography>
                    <TextField defaultValue={"Insira o email aqui"}></TextField>
                    <TextField defaultValue={"Insira a senha aqui"}></TextField>
                    <Button variant={"contained"}>
                        <Typography >Fazer Login</Typography>
                    </Button>
                    <Typography>Não tem uma conta? Crie agora!</Typography>
                    <Button variant={"contained"}>
                        <Typography>Registrar uma conta</Typography>
                    </Button>
                </Stack>
            </Paper>
        </Container>
    );
  }