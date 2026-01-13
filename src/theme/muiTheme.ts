// src/theme/muiTheme.ts
import { createTheme } from "@mui/material/styles";
import { colors } from "./tokens";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: colors.green[100],
      dark: colors.green[200],
      contrastText: colors.gray[100],
    },

    secondary: {
      main: colors.purple[100],
      dark: colors.purple[200],
      contrastText: colors.gray[100],
    },

    background: {
      default: colors.gray[800],
      paper: colors.gray[700],
    },

    text: {
      primary: colors.gray[100],
      secondary: colors.gray[400],
    },

    divider: colors.gray[600],
  },

  typography: {
    fontFamily:
      '"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',

    body1: {
      fontSize: "16px",
      lineHeight: 1.6,
      fontWeight: 400,
    },

    body2: {
      fontSize: "14px",
      lineHeight: 1.6,
      fontWeight: 400,
    },

    h1: {
      fontSize: "24px",
      lineHeight: 1.4,
      fontWeight: 700,
    },

    h2: {
      fontSize: "20px",
      lineHeight: 1.4,
      fontWeight: 700,
    },

    h3: {
      fontSize: "18px",
      lineHeight: 1.4,
      fontWeight: 700,
    },
  },
});
