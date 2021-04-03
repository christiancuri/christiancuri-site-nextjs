import React, { useState } from 'react';
import { Navbar as BsNavbar, Nav } from 'react-bootstrap';

import Link from 'next/link';

const Navbar: React.FC = () => {
  const [openned, setOpenned] = useState<boolean>(false);

  return (
    <nav className="navbar navbar-marketing navbar-expand-lg bg-transparent navbar-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand text-primary">CHRISTIANCURI.DEV</a>
        </Link>
        <BsNavbar.Toggle
          aria-controls="navbar"
          onClick={() => setOpenned(!openned)}
        />
        <BsNavbar.Collapse in={openned}>
          <Nav className="navbar-nav ml-auto mr-lg-5">
            <Nav.Item className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link href="/blog">
                <a className="nav-link">Blog</a>
              </Link>
            </Nav.Item>
          </Nav>
        </BsNavbar.Collapse>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
