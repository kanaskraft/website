import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6d4c41", // Brown - pottery clay color
      light: "#9c786c",
      dark: "#40241a",
    },
    secondary: {
      main: "#a1887f", // Lighter brown
      light: "#d3b8ae",
      dark: "#725b53",
    },
    accent: {
      main: "#bcaaa4", // Beige/tan - natural clay color
    },
    background: {
      default: "#f5f5f5", // Light grey/off-white
      paper: "#ffffff",
    },
    text: {
      primary: "#3e2723", // Dark brown
      secondary: "#5d4037", // Medium brown
    },
  },
  typography: {
    fontFamily: '"Roboto", "Raleway", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Raleway", sans-serif',
    },
    h6: {
      fontFamily: '"Raleway", sans-serif',
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.02em",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 24px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
