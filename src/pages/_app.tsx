import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";

import { storeWrapper, useStoreDispatch } from "@/store";
import { dLog, isDevelopmentMode } from "@/utils/DebugUtils";
import { createEmotionCache, muiLightTheme } from "@/utils/StyleUtils";
import Wrapper from "@/components/wrapper";
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

  const dispatch = useStoreDispatch();

  useEffect(() => {
    const stateData = localStorage.getItem("state");

    if (stateData !== null) {
      const restoredState = JSON.parse(stateData);
      dispatch({ type: "updateWhole", payload: restoredState });
      dLog("브라우저에 저장된 상태 가져옴", restoredState);
    }

    setClient(true);
  }, [dispatch]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={muiLightTheme}>
        <Wrapper.Loading>
          {/* <Component/>에 pages 폴더에 있는 것들이 들어감. */}
          {renderPage && <Component {...pageProps} />}
        </Wrapper.Loading>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default storeWrapper.withRedux(MyApp);
