import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css';

import Head from 'next/head';

type Props = {
  Component?: any;
  pageProps?: any;
};

function MyApp({ Component, pageProps }: Props): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
