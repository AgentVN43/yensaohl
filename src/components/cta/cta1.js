import React from "react";
import data from "../../db/data.json";


export default function CallToAction() {
  const { banners } = data;

  return (
    <section className="section bg-cta"
    style={{ backgroundImage: `url(${banners[1].image})` }}
    >
      <div className="bg-overlay" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="text-center text-white">
            {banners[1].titles[0]}
            </h3>
            <p className="text-white-50 text-center lh-base fs-16 mt-3">
            {banners[1].titles[1]}
            </p>
            <div className="text-center mt-4">
              <a href= {banners[1].url} className="btn btn-primary">
                Get Started <i className="mdi mdi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
