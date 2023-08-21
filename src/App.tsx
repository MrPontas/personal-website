import React, { useState } from "react";
import { createTheme, Typography, CssBaseline } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#817e9f",
    },
    secondary: {
      main: "#4a7856",
    },
  },
  typography: {
    allVariants: {
      color: "#122932",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#817e9f",
    },
    secondary: {
      main: "#4a7856",
    },
  },
  typography: {
    allVariants: {
      color: "#fef5ef",
    },
  },
});

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

function App() {
  const [themeSelected, themeSelectedSet] =
    useState<keyof typeof themes>("light");

  const toggleTheme = () => {
    if (themeSelected === "light") {
      themeSelectedSet("dark");
    } else {
      themeSelectedSet("light");
    }
  };
  return (
    <ThemeProvider theme={themes[themeSelected]}>
      <CssBaseline />
      <button onClick={toggleTheme}>click</button>
      <Typography variant="h1" fontWeight={"bold"}>
        Guilherme Pontarolo
      </Typography>
    </ThemeProvider>
  );
}

export default App;
