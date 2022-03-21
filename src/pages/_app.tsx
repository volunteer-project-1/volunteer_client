/**
 * 모든 페이지에서 돌아가는 코드.
 */

import { AppProps } from "next/app";

import { storeWrapper } from "@/store";
import "@/assets/scss/reset.scss";

import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

/**
 * 임의의 page의 wrapper.
 */
const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps) => (
  <>
    {/* Component에 페이지가 들어감. */}
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  </>
);

export default storeWrapper.withRedux(App);
