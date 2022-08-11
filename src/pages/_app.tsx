// IE11 등 지원을 위한 파일. 제일 먼저 import!
import "@/utils/Polyfills";

import { useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";

import { dLog, isDevelopmentMode } from "@/utils/DebugUtils";
import { createEmotionCache, muiLightTheme } from "@/utils/StyleUtils";
import { storeWrapper, useStoreDispatch } from "@/states";
import { setLoading } from "@/states/ui";
import Wrapper from "@/components/wrapper";
import Layout from "@/containers/layout/Layout";
import "@/styles/reset.scss";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

/**
 * 임의의 page에 씌워지는 wrapper component.
 */
const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) => {
  const router = useRouter();
  const dispatch = useStoreDispatch();

  // 페이지 바뀔 때마다 loading dialog 보여줌.
  useEffect(() => {
    const handleRouteChangeStart = () => {
      dispatch(setLoading(true));
    };

    const handleRouteChangeComplete = () => {
      dispatch(setLoading(false));
    };

    const handleRouteChangeError = () => {
      dispatch(setLoading(false));
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [dispatch, router]);

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
        <Head>
          <title>SEE ME</title>
        </Head>
        {
          // react-scoped-scss를 위해 Webpack 설정을 커스텀하다보니...
          // 개발 모드에서는 웹페이지를 너무 빨리 열면 스타일 안 먹는 경우가 있음...
          // 임시적인 fix: 개발 모드에서는 페이지를 무조건 CSR(Client-Side Rendering)을 함.
        }
        <Wrapper.Rendering forceCSR={isDevelopmentMode()}>
          <Wrapper.Loading>
            <Layout>
              {/* <Component/>에 pages 폴더에 있는 것들이 들어감. */}
              {<Component {...pageProps} />}
            </Layout>
          </Wrapper.Loading>
        </Wrapper.Rendering>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default storeWrapper.withRedux(MyApp);
