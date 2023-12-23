import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Banner2 from "../banner/components/banner2";

export default function Navbar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://yensaohoale.annk.info/api/category`
        );

        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error(`Error fetching data:`);
      }
    };

    fetchData();
  }, []);

  
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top nav-sticky sticky"
      id="navbar"
    >
      <Banner2 />
      <div className="container">
        <a className="navbar-brand logo" href="/">
          <span className="logo-light-mode">
            <img
              src="/images/logo-light.jpg"
              className="logo-light"
              alt=""
              height={44}
            />
            <img
              src="/images/logo-light.jpg"
              className="logo-dark"
              alt=""
              height={44}
            />
          </span>
          <img
            src="images/logo-light.jpg"
            className="logo-dark-mode"
            alt=""
            height={44}
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
            {data.map((item) => (
              <li className="nav-item" key={item.title}>
                <ScrollLink
                  to={item.title}
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
