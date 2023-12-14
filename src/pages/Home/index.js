import React from "react";
import Banner from "../../components/banner";
import Services from "../../components/services";
import Portfolio from "../../components/portfolio";
import About from "../../components/about";
import Prices from "../../components/prices";
import CallToAction from "../../components/cta/cta1";
import Contact from "../../components/contact";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Portfolio />
      <CallToAction />
      <Prices />
      <About />
      <CallToAction />
      <Contact/>
    </>
  );
}
