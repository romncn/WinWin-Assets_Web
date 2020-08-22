import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #404143;
    font-size: 14px;
    font-family: 'Kanit', sans-serif;
  }
  h1 {
    font-size: 34px;
    color: #404143;
  }
  h2 {
    font-size: 28px;
    color: #404143;
  }
  h3 {
    font-size: 24px;   
    color: #404143;
  }
  h4 {
    font-size: 20px;
    color: #404143;
  }
  h5 {
    font-size: 16px;
    color: #404143;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
