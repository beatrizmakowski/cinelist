import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import { Login } from './pages/Login'
import { Registration } from './pages/Registration'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter'
        }
      `
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Registration />
      </div>
    </ThemeProvider>
  )
}

export default App
