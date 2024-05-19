import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import CssBaseline from "@mui/material/CssBaseline";
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';
import { theme } from "./theme";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
