import React from 'react';

import Home from '@/components/Home';

import Head from 'next/head';

const IndexPage = (): JSX.Element => (
  <div>
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
    <Home />
  </div>
);

export default IndexPage;
