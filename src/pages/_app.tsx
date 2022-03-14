/**
 * 모든 페이지에서 돌아가는 코드.
 */

import { AppProps } from "next/app";
import Head from "next/head";

import { storeWrapper } from "@/store";
import "@/assets/scss/reset.scss";
import Image from "next/image";

/**
 * 임의의 page의 wrapper.
 */
const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>SeeMe</title>
    </Head>
    {/* Component에 페이지가 들어감. */}
    <Component {...pageProps} />
  </>
);

export default storeWrapper.withRedux(App);
