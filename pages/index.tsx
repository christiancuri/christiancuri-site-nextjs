import React from 'react';

import Home from '@/components/Home';

import Head from 'next/head';

const IndexPage = (): JSX.Element => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css"
      />
    </Head>
    <Home />
  </div>
);

export default IndexPage;
