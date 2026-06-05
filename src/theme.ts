import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const brandColors = {
  beige: "#F5EFE6",
  cream: "#FAF7F2",
  sand: "#C9B79C",
  gold: "#D8B979",
  warmGray: "#7D7468",
  darkBrown: "#3D2B1F",
  lightGold: "#EDD9A3",
};

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brandColors.gold,
      light: brandColors.lightGold,
      dark: "#B8963A",
      contrastText: "#3D2B1F",
    },
    secondary: {
      main: brandColors.sand,
      light: brandColors.beige,
      dark: "#A09070",
      contrastText: "#3D2B1F",
    },
    background: {
      default: brandColors.cream,
      paper: brandColors.beige,
    },
    text: {
      primary: brandColors.darkBrown,
      secondary: brandColors.warmGray,
    },
    divider: brandColors.sand,
  },
  typography: {
    fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
    h1: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
      fontWeight: 500,
      letterSpacing: "0.01em",
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
      fontWeight: 500,
      letterSpacing: "0.01em",
    },
    h5: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: '"Lato", "Helvetica Neue", sans-serif',
      fontWeight: 400,
      letterSpacing: "0.02em",
    },
    subtitle2: {
      fontFamily: '"Lato", "Helvetica Neue", sans-serif',
      fontWeight: 400,
      letterSpacing: "0.05em",
    },
    body1: {
      fontFamily: '"Lato", "Helvetica Neue", sans-serif',
      fontWeight: 400,
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: '"Lato", "Helvetica Neue", sans-serif',
      fontWeight: 400,
      lineHeight: 1.7,
    },
    button: {
      fontFamily: '"Lato", "Helvetica Neue", sans-serif',
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: '"Lato", "Helvetica Neue", sans-serif',
      letterSpacing: "0.05em",
    },
    overline: {
      fontFamily: '"Lato", "Helvetica Neue", sans-serif',
      letterSpacing: "0.18em",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "14px 36px",
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          transition: "all 0.3s ease",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 6px 24px rgba(216, 185, 121, 0.45)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderWidth: "1.5px",
          "&:hover": {
            borderWidth: "1.5px",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 20px rgba(61, 43, 31, 0.06)",
          borderRadius: 0,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 12px 40px rgba(61, 43, 31, 0.14)",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: "transparent",
          "&:before": { display: "none" },
          "&.Mui-expanded": { margin: 0 },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0",
          minHeight: "60px",
          "&.Mui-expanded": { minHeight: "60px" },
        },
        content: {
          "&.Mui-expanded": { margin: "12px 0" },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0 0 20px 0",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:wght@300;400;700&display=swap');

        html { scroll-behavior: smooth; }

        ::selection {
          background: #D8B979;
          color: #3D2B1F;
        }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #FAF7F2; }
        ::-webkit-scrollbar-thumb { background: #C9B79C; border-radius: 3px; }
      `,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
