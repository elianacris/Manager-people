import { ThemeProvider } from "@mui/material";
import React from "react"
import theme from "./constants/theme";

import Router from "./router/Router";
//import FormPage from "./pages/FormPage/FormPage";
//import LoginPage from './pages/LoginPage/LoginPage'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />

    </ThemeProvider>
  );
}

export default App;
