import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";

import { storeWrapper } from "@/store";
import { isDevelopmentMode } from "@/utils/DebugUtils";
import { createEmotionCache, muiLightTheme } from "@/utils/StyleUtils";
import "@/scss/reset.scss";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

/**
 * 임의의 page에 씌워지는 wrapper component.
 */
const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) => {
  // SSR 중이면 false, CSR 중이면 true.
  const [isClient, setClient] = useState(false);

  // 개발 모드에서는 웹페이지를 너무 빨리 열면 스타일 안 먹는 경우가 있음...
  // 임시적인 fix: 개발 모드에서는 페이지를 무조건 CSR(client-side rendering)을 함.
  const renderPage = !isDevelopmentMode() || isClient;

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={muiLightTheme}>
        {/* <Component/>에 pages 폴더에 있는 것들이 들어감. */}
        {renderPage && <Component {...pageProps} />}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default storeWrapper.withRedux(MyApp);
