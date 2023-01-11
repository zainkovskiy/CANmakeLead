import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Client } from "components/Client";
import { Communication } from "components/Communication";
import { Controller } from "components/Controller";
import './App.scss';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Controller />
      <div className="main">
        <Client />
        <Communication />
      </div>
    </ThemeProvider>
  )
}


const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  components: {
    MuiFormControlLabel: {
      variants: [
        {
          props: { color: 'grey' },
          style: {
            color: '#737373'
          }
        },
        {
          props: { color: 'white' },
          style: {
            color: '#fff'
          }
        }
      ]
    },
  },
});