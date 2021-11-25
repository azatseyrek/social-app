import React from "react";
import { makeStyles } from "@mui/styles";
import Navbar from "./components/Navbar";
import "./App.css";
import { ThemeProvider } from "@mui/styles";
import {theme} from "./theme"
import Leftbar from "./components/Leftbar";

const useStyles = makeStyles((theme) => ({}));

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>

        <Navbar />
        <Leftbar/>

    </ThemeProvider>
  );
};

export default App;
