import React from 'react';

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-marketing navbar-expand-lg bg-transparent navbar-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand text-primary">CHRISTIANCURI.DEV</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i data-feather="menu" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-lg-5">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/apps">
              <a className="nav-link">
                Apps
              </a>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
