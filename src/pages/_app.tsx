import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";

import { storeWrapper } from "@/store";
import { createEmotionCache, muiLightTheme } from "@/utils/StyleUtils";
import "@/scss/reset.scss";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

/**
 * 임의의 page에 씌워지는 wrapper component.
 */
const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={muiLightTheme}>
      {/* <Component/>에 pages 폴더에 있는 것들이 들어감. */}
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default storeWrapper.withRedux(MyApp);
