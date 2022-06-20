import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Routes } from "./routes/Routes";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter'
        }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
