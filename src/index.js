import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import BreakingBapp from './App/BreakingBapp';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: green[900],
    },
  },
});

ReactDOM.render(
  <ErrorBoundary>
    <ThemeProvider theme={darkTheme}>
      <BreakingBapp />
    </ThemeProvider>
  </ErrorBoundary>,
  document.getElementById('root'),
);
module.hot.accept();
