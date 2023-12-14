import React from "react";
import data from "../../db/data.json";


export default function Services() {

  const { sections } = data;

  return (
    <section className="section" id="service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text-center">
              <h4 className="fs-24">{sections.services.title}</h4>
              <p className="text-muted fs-16 mt-3">
              {sections.services.description}
              </p>
            </div>
          </div>
          {/* END COL */}
        </div>
        {/* END ROW */}
        <div className="row pt-5">
        {
          sections.services.service.map((item) => (
            <div className="col-lg-4 col-md-6">
            <div className="mt-4">
              <div className="d-flex">
                <div className="features-icon text-center">
                  <i className="uil uil-water" />
                </div>
                <div className="flex-1 ms-4">
                  <h5 className="mt-0 fs-16">{item.title}</h5>
                  <p className="text-muted">
                   {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          ))
        }
        </div>
        {/* END ROW */}
      </div>
    </section>
  );
}
