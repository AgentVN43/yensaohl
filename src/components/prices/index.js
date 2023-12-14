import React from "react";
import data from "../../db/data.json";

export default function Prices() {
  const { sections } = data;

  return (
    <section className="section bg-light" id="price">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text-center">
              <h4 className="fs-24">{sections.price.title}</h4>
              <p className="fs-16 text-muted mt-3">
                {sections.price.description}
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {sections.price.package.map((item) => (
            <div className="col-lg-4">
              <div className="price mt-4 p-5">
                <div className="item text-center">
                  <div className="type pb-3">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="value">
                    <h3>
                      {item.prices}.<span>99$</span>
                    </h3>
                    <span className="per text-muted">{item.unit}</span>
                  </div>

                  <div className="feature">
                    <ul className="list-unstyled text-muted">
                      {
                        item.detail.map((item)=>(
                          <li>{item}</li>
                        ))
                      }
                      
                    </ul>
                  </div>

                  <div>
                    <a href="javascript:void(0)" className="btn btn-primary">
                      Order Now <i className="mdi mdi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* end col */}
          {/* <div className="col-lg-4">
            <div className="price mt-4 p-5">
              <div className="item text-center">
                <div className="type pb-3">
                  <h4>Startup</h4>
                </div>
                <div className="value">
                  <h3>
                    30.<span>99$</span>
                  </h3>
                  <span className="per">Per Month</span>
                </div>
                <div className="feature">
                  <ul className="list-unstyled">
                    <li>Bandwidth: 2GB</li>
                    <li>Onlinespace: 1GB</li>
                    <li>Support: No</li>
                    <li>Domain: 3</li>
                    <li>200 Projects per month</li>
                    <li>Hidden Fees: No</li>
                  </ul>
                </div>
                <div>
                  <a href="javascript:void(0)" className="btn btn-primary">
                    Order Now <i className="mdi mdi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* end col */}
          {/* <div className="col-lg-4">
            <div className="price mt-4 p-5">
              <div className="item text-center">
                <div className="type pb-3">
                  <h4>Business</h4>
                </div>
                <div className="value">
                  <h3>
                    80.<span>99$</span>
                  </h3>
                  <span className="per text-muted">Per Month</span>
                </div>
                <div className="feature">
                  <ul className="list-unstyled text-muted">
                    <li>Bandwidth: 4GB</li>
                    <li>Onlinespace: 2GB</li>
                    <li>Support: No</li>
                    <li>Domain: Unlimited</li>
                    <li>Unlimited Projects per month</li>
                    <li>Hidden Fees: No</li>
                  </ul>
                </div>
                <div>
                  <a href="javascript:void(0)" className="btn btn-primary">
                    Order Now <i className="mdi mdi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* end col */}
        </div>
        {/* end row */}
      </div>
    </section>
  );
}
