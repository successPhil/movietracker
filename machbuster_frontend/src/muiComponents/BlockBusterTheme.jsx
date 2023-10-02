import { createTheme } from '@mui/material/styles';

const blockbusterTheme = createTheme({
  palette: {
    primary: {
      main: '#0e3fa9',// blockbuster blue
      contrastText: '#ffc107' //blockbuster yellow

    },
    secondary: {
      main: '#ffc107', // Yellow
    },
    customColor: {
        main: '#0d47a1', // Dark Blue (custom color)
      },
    background: {
      default: '#1a237e', // Dark Blue (default background color)
      paper: '#ffc107',
      contrastText: '#ffc107' 
    },
  },
});

export default blockbusterTheme;
