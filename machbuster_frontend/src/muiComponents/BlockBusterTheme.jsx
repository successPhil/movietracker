import { createTheme } from '@mui/material/styles';


const blockbusterTheme = createTheme({
  palette: {
    typography: {
      h1: {
        fontSize: '5rem',
        fontWeight: 'bold',
        fontFamily: 'Impact',
        color: '#ffc107',// Very large font size for h1
      },
      h2: {
        fontSize: '3.8rem', // Very large font size for h2
      },
      h3: {
        fontSize: '2.7rem', 
        fontWeight: 'bold',
        fontFamily: '"Roboto Condensed", sans-serif',
        // Large font size for h3
      },
      h4: {
        fontSize: '1.9rem',
        fontWeight: 'bold',
        fontFamily: 'Impact',
        color: 'red',// Very large font size for h1
      },
      h5: {
        fontSize: '1.4rem', // Medium font size for h5
      },
      h6: {
        fontSize: '1.1rem', // Medium font size for h6
      },
    },
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
      paper: '#bbdefb',
      // paper: '#ffc107',
      contrastText: '#ffc107' 
    },
  },
});

export default blockbusterTheme;
