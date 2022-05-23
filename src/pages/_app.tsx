import { useEffect } from "react";
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
  const dispatch = useStoreDispatch();

  useEffect(() => {
    const stateData = localStorage.getItem("state");

    if (stateData !== null) {
      const restoredState = JSON.parse(stateData);
      dispatch({ type: "updateWhole", payload: restoredState });
      dLog("브라우저에 저장된 상태 가져옴", restoredState);
    }
  }, [dispatch]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={muiLightTheme}>
        {
          // react-scoped-scss를 위해 Webpack 설정을 커스텀하다보니...
          // 개발 모드에서는 웹페이지를 너무 빨리 열면 스타일 안 먹는 경우가 있음...
          // 임시적인 fix: 개발 모드에서는 페이지를 무조건 CSR(Client-Side Rendering)을 함.
        }
        <Wrapper.Rendering forceCSR={isDevelopmentMode()}>
          <Wrapper.Loading>
            {/* <Component/>에 pages 폴더에 있는 것들이 들어감. */}
            {<Component {...pageProps} />}
          </Wrapper.Loading>
        </Wrapper.Rendering>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default storeWrapper.withRedux(MyApp);
