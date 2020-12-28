import React, { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import styled from 'styled-components';

const Content = styled.div`
  min-width: 0;
  flex-grow: 1;
`;

type Props = {
  children: ReactNode;
  footerDark?: boolean;
};

const Home = ({ children, footerDark }: Props): JSX.Element => {
  return (
    <>
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
