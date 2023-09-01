import React from "react";
import PortfolioContainer from "./PortfolioContainer";

// Material UI Theme and palette creation
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
    return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <PortfolioContainer />
    </ThemeProvider>
    );
}

export default App;
