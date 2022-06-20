import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    TextField,
    Typography,
    makeStyles
} from "@mui/material";


export function Login() {

    return (
        <Container>
            <Box
                sx={{ 
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                }}
            >
                <Box>
                    <Typography variant="h1">The CineList</Typography>
                    <Paper elevation={1} 
                        sx={{
                            borderRadius: "28px",
                            bgcolor: "rgba(18, 15, 51, 0.95)",
                            color: "white"
                        }}
                    >
                        <Stack direction={"column"} spacing={4}>
                            <Typography variant="h4">Faça o login</Typography>
                            <TextField 
                                defaultValue={"Insira o email aqui"}
                                sx={{ input: { color: 'white' }}}
                            />
                            <TextField 
                                defaultValue={"Insira a senha aqui"}
                                sx={{ input: { color: 'white' } }}
                            />
                            <Button variant={"contained"}>
                                <Typography variant="subtitle1">Fazer Login</Typography>
                            </Button>
                            <Typography>Não tem uma conta? Crie agora!</Typography>
                            <Button variant={"contained"}>
                                <Typography variant="subtitle1">Registrar uma conta</Typography>
                            </Button>
                        </Stack>
                    </Paper>
                </Box>
            </Box>
        </Container>
    );
}