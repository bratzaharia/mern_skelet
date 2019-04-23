import React from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import purple from "@material-ui/core/colors/purple";
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import { hot } from "react-hot-loader";

const theme = createMuiTheme({
  palette: {
    primary: {
      //   main: purple[500]
      light: "#757de8",
      main: "#3f51b5",
      dark: "#002984",
      contrastText: "#fff"
    },
    // Purple and green play nicely together.
    secondary: {
      //   main: "#11cb5f"
      light: "#ff79b0",
      main: "#ff4081",
      dark: "#c60055",
      contrastText: "#000"
    }, // This is just green.A700 as hex.
    openTitle: pink["400"],
    protectedTitle: pink["400"],
    type: "light"
  },
  typography: { useNextVariants: true }
});

const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <MainRouter />
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default hot(module)(App);
