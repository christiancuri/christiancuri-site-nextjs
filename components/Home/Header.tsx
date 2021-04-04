import React, { ReactElement } from 'react';
import { Col, Row } from 'react-bootstrap';

import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';

import styles from './Header.module.css';

const yearsUntilToday = (date: Date): number =>
  new Date().getFullYear() - new Date(date).getFullYear();

const MY_BIRTHDAY = new Date('07/22/1999');

export default function Header(): ReactElement {
  const myAge = yearsUntilToday(MY_BIRTHDAY);

  return (
    <header className="page-header page-header-light bg-white">
      <div className="page-header-content pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <h1 className="page-header-title">
                Welcome to my personal website
              </h1>
              <p className="page-header-text mb-5">
                Hi, my name is Christian Curi, i&apos;m {myAge} years old and I
                love programming. Today i&apos;m a Software Engineer with +8 of
                work experience years. Below you can know a little more about me
                and my skills
              </p>
              <Row>
                <Col sm="12">
                  <Row>
                    <Col sm="12" md="6">
                      <Link
                        href="https://www.linkedin.com/in/mike-christian-santos-curi-a9472418b/"
                        as="https://www.linkedin.com/in/mike-christian-santos-curi-a9472418b/"
                      >
                        <a
                          className={`btn btn-large btn-primary font-weight-500 mr-3 ${styles.homeLink}`}
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            style={{ width: '20px' }}
                          />{' '}
                          &nbsp; Linkedin
                        </a>
                      </Link>
                    </Col>
                    <Col sm="12" md="6">
                      <Link
                        href="https://github.com/christiancuri"
                        as="https://github.com/christiancuri"
                      >
                        <a
                          className={`btn btn-large btn-primary-soft text-primary font-weight-500 ${styles.homeLink}`}
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={faGithubAlt}
                            style={{ width: '20px' }}
                          />
                          &nbsp; GitHub
                        </a>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div
              className="col-lg-6 d-none d-lg-block"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                className="img-fluid"
                src="assets/img/illustrations/programming.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="svg-border-rounded text-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.54 17.34"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
        </svg>
      </div>
    </header>
  );
}
