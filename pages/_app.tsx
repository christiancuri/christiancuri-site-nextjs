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
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/img/logo_apple.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/logo.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/logo.png?v=1"
        />
        {/* <link rel="manifest" href="site.webmanifest?v=1" /> */}
        <link rel="shortcut icon" href="/img/favicon.ico?v=1" />
        <meta name="msapplication-TileColor" content="#00dbff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Christian Curi" />
        <meta
          name="description"
          content="This is my personal website. Here I share a little bit about my knowledge"
        />
        <meta
          name="keywords"
          content="sites, web, desenvolvimento, development, blog, jitsi, tutorials, web, nodejs, javascript, tricks, kubernetes, cloud, database, tutorial"
        />
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="copyright" content="© 2021 ChristianCuri.dev" />
        <meta name="rating" content="general" />
        <meta name="identifier-url" content="https://christiancuri.dev" />
        <meta
          name="abstract"
          content="This is my personal website. Here I share a little bit about my knowledge"
        />
        <meta name="revisit-after" content="5" />

        <link rel="canonical" href="https://christiancuri.dev" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My personal website" />
        <meta
          property="og:description"
          content="This is my personal website. Here I share a little bit about my knowledge"
        />
        <meta property="og:url" content="https://christiancuri.dev" />
        <meta property="og:site_name" content="ChristianCuri" />
        <meta
          property="og:image"
          content="https://christiancuri.dev/img/logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@christiancuri" />
        <meta name="twitter:site" content="@christiancuri" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Christian Curi" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
