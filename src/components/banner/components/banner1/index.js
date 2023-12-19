import React from "react";
import data from "../../../../db/data.json";

export default function Banner1() {
  const { banners } = data;

  return (
    <section
      className="home-1 d-flex justify-content-center position-relative text-center"
      id="home"
      style={{ backgroundImage: `url(${banners[0].image})` }}
    >
      <div className="bg-overlay" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h5 className="text-uppercase mb-4 text-white-50 fw-medium fs-16">
              {banners[0].titles[0]}
            </h5>
            <h1 className="text-white display-4 fw-semibold mb-0">
              {banners[0].titles[1]}
            </h1>
            <h1 className="display-5 mb-4 text-white">
              {banners[0].titles[2]}
            </h1>
            <p className="text-white-50 fs-16">{banners[0].titles[3]}</p>
            <div className="pt-4">
              <a href={banners[0].url} className="btn btn-primary">
                View More
                <i className="mdi mdi-arrow-right ms-1" />
              </a>
            </div>
          </div>
          {/* END COL */}
        </div>
        {/* END ROW */}
      </div>
    </section>
  );
}
