import React, { ReactElement } from 'react';

import Layout from '@/components/Layout';

import Demos from './Demos';
import Header from './Header';
import Skills from './Skills';

const Home = (): ReactElement => {
  return (
    <Layout>
      <Header />
      <Demos />
      <Skills />
    </Layout>
  );
};

export default Home;
