import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ec407a',
    },
    secondary: {
      main: '#880e4f',
    },
  },
});

ReactDOM.render(
                <ThemeProvider theme={theme}>
                <App/>
                </ThemeProvider>
    , document.getElementById('root'));