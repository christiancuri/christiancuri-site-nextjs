import React, { ReactElement } from 'react';

export default function BlogHeader(): ReactElement {
  return (
    <header
      className="page-header page-header-dark bg-img-cover overlay overlay-60"
      style={{
        backgroundImage:
          'url(https://source.unsplash.com/PTRzqc_h1r4/1600x900)',
      }}
    >
      <div className="page-header-content">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="page-header-title mb-3">Blog</h1>
              <p className="page-header-text mb-0">
                Welcome to my blog, here i share a little about my knowledgment
              </p>
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
