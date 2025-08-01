import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#4B0082" }, // Purple
    secondary: { main: "#98FF98" }, // Mint Green
    background: { default: "#ffffff" },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
