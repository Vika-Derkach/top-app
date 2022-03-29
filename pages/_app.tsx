import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import React from "react";
import ReactGA from "react-ga";
import "../styles/globals.css";
ReactGA.initialize("UA-000000-01");

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  // router.events.on("routeChangeComplete", (url: string) => {
  //   if (typeof window !== undefined) {
  //   }
  // });

  return (
    <>
      <Head>
        <title>My top</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:url"
          content={"https://courses-top.ru" + router.asPath}
        />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
