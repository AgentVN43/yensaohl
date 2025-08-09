import React from "react";
import CallToAction from "../../components/cta/cta1";
import Products from "../../components/products";
import Slider from "../../components/slider";
import { SliderAcc } from "../../components/slider/slideracc";

export default function Home2() {
  return (
    <>
      <Slider />
      <Products category={1} />
      <Products category={3} />
      <Products category={4} />
      <Products category={6} />
      <Products category={5} />
      <Products category={2} />

      <SliderAcc />
      <CallToAction />
    </>
  );
}
