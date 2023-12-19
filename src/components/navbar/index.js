import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top nav-sticky sticky"
      id="navbar"
    >
      <div className="container">
        <a className="navbar-brand logo" href="/">
          <span className="logo-light-mode">
            <img
              src="/images/logo-light.jpg"
              className="logo-light"
              alt=""
              height={22}
            />
            <img
              src="/images/logo-light.jpg"
              className="logo-dark"
              alt=""
              height={22}
            />
          </span>
          <img
            src="images/logo-light.jpg"
            className="logo-dark-mode"
            alt=""
            height={22}
          />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="mdi mdi-menu" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto navbar-center" id="mySidenav">
            <li className="nav-item">
            
              <ScrollLink
                to="mua_hang"
                smooth={true}
                duration={200}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                MUA HÀNG
              </ScrollLink>
            </li>
            {/* <li className="nav-item">
              
              <ScrollLink
                to="service"
                smooth={true}
                duration={200}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                Services
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={200}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                Works
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="price"
                smooth={true}
                duration={200}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                Pricing
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="about"
                smooth={true}
                duration={200}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="about"
                smooth={true}
                duration={200}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                Blog
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={200}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                Contact
              </ScrollLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
