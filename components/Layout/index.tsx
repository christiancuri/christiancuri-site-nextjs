import React, { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import Head from 'next/head';
import styled from 'styled-components';

const Content = styled.div`
  min-width: 0;
  flex-grow: 1;
`;

type Props = {
  children: ReactNode;
  footerDark?: boolean;
  title?: string;
};

const Home = ({ children, footerDark, title }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | ChristianCuri.dev`
            : 'My personal website | ChristianCuri.dev'}
        </title>
      </Head>
      <div id="layoutDefault">
        <Content>
          <main>
            <Navbar />
            {children}
          </main>
        </Content>
        <Footer dark={!!footerDark} />
      </div>
    </>
  );
};

export default Home;
