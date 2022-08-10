import createCache from "@emotion/cache";
import { createTheme } from "@mui/material/styles";

export const createEmotionCache = () => createCache({ key: "css" });

export const muiLightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
