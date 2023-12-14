import React from "react";
import data from "../../db/data.json";

export default function Portfolio() {
  const { sections } = data;

  return (
    <section className="section pb-0" id="portfolio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center">
              <h4 className="fs-24">{sections.portfolio.title}</h4>
              <p className="fs-16 text-muted mt-3">
                {sections.portfolio.description}
              </p>
            </div>
          </div>
        </div>
        {/* portfolio menu */}
        {/* <div className="row mt-4">
          <div className="col-lg-12">
            <div className="filters-group-wrap">
              <div className="filters-group text-center">
                <ul className="filter-options list-unstyled d-inline-block list-inline text-center mb-0 p-0">
                  <li
                    data-group="all"
                    className="categories list-inline-item tab-active rounded active"
                    style={{ cursor: "pointer" }}
                  >
                    All
                  </li>
                  <li
                    data-group="profile"
                    className="categories list-inline-item tab-active rounded"
                    style={{ cursor: "pointer" }}
                  >
                    Profile
                  </li>
                  <li
                    data-group="business"
                    className="categories list-inline-item tab-active rounded"
                    style={{ cursor: "pointer" }}
                  >
                    Business
                  </li>
                  <li
                    data-group="finance"
                    className="categories list-inline-item tab-active rounded"
                    style={{ cursor: "pointer" }}
                  >
                    Finance
                  </li>
                  <li
                    data-group="marketing"
                    className="categories list-inline-item tab-active rounded"
                    style={{ cursor: "pointer" }}
                  >
                    Marketing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* End  */}
      </div>
      {/* Gallary */}
      <div className="container">
        <div className="row " id="grid">
          {sections.portfolio.project.map((item) => (
            <div
              className="col-lg-4 col-md-6  picture-item filter-box"
              data-groups='["profile"]'
              key={item.index}
            >
              <div className="card portfolio mt-4 overflow-hidden border-0">
                <a href={item.url} title="Project Name">
                  <img
                    className="img-fluid rounded-3"
                    src={item.image}
                    alt={2}
                  />
                  <div className="item-mask ps-3">
                    <div className="item-caption">
                      <h5 className="text-dark fs-16 mt-3 mb-1">
                        {item.title}
                      </h5>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
