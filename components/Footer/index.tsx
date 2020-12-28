import React, { ReactElement } from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';
import styled from 'styled-components';

const Footer = styled.footer`
  min-width: 0;
`;

type Props = {
  dark?: boolean;
};

export default function FooterComponent({ dark }: Props): ReactElement {
  return (
    <Footer
      className={`footer pt-10 pb-5 mt-auto ${
        dark ? 'bg-dark footer-dark' : 'bg-light footer-light'
      }`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 small">
            Copyright {new Date().getFullYear()} &copy; ChristianCuri.dev
          </div>
          <div className="col-md-6 text-md-right small">
            <Link href="https://github.com/ChristianCuri-dev">
              <a target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Footer>
  );
}
