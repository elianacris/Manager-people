import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./constants/theme";

import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
