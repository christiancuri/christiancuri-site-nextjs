import React, { ReactElement } from 'react';

import Layout from '@/components/Layout';

import Header from './Header';
import Skills from './Skills';

const Home = (): ReactElement => {
  return (
    <Layout>
      <Header />
      <Skills />
    </Layout>
  );
};

export default Home;
