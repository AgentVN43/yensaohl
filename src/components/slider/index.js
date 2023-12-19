import React from "react";

export default function Slider() {
  return (
    <section className="section" id="client">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className=" text-center">
              <h4 className="fs-24">Testimonial</h4>
              <p className="fs-16 text-muted mt-3">
                We craft digital, graphic and dimensional thinking, to create
                category leading brand experiences that have meaning and add a
                value.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="myslider">
              <div className="testi-box">
                <div className="text-center mt-4">
                  <img
                    src="images/client/111.jpg"
                    alt=""
                    className="img-fluid avatar-lg img-thumbnail rounded-circle testi-user mx-auto d-block"
                  />
                  <div className="img-post text-center">
                    <p className="text-muted fs-16 mb-1 mt-3">Founder</p>
                    <h5 className="text-dark fs-18">Willimore Wilson</h5>
                  </div>
                  <div className="bg-light m-3 position-relative mt-4 p-4 rounded-3 testi-box-arrow testi-box-arrow">
                    <p className="text-muted fst-italic fs-16 text-center mb-0">
                      " Their separate existence is a myth. For science music
                      sport etc Europe uses the same vocabulary. The languages
                      only differ in their grammar, their pronunciation and
                      their most common words. Everyone realizes why a new
                      common language "
                    </p>
                  </div>
                </div>
              </div>
              {/* end */}
              <div className="testi-box">
                <div className="text-center mt-4">
                  <img
                    src="images/client/122.jpg"
                    alt=""
                    className="img-fluid avatar-lg img-thumbnail rounded-circle testi-user mx-auto d-block"
                  />
                  <div className="img-post text-center">
                    <p className="text-muted fs-16 mb-1 mt-3">Ceo</p>
                    <h5 className="text-dark fs-18">Charley Brown</h5>
                  </div>
                  <div className="bg-light m-3 position-relative mt-4 p-4 rounded-3 testi-box-arrow testi-box-arrow">
                    <p className="text-muted fst-italic fs-16 text-center mb-0">
                      " It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a normal of letters, as opposed to using making it
                      look like readable English."
                    </p>
                  </div>
                </div>
              </div>
              {/* end */}
              <div className="testi-box">
                <div className="text-center mt-4">
                  <img
                    src="images/client/133.jpg"
                    alt=""
                    className="img-fluid avatar-lg img-thumbnail rounded-circle testi-user mx-auto d-block"
                  />
                  <div className="img-post text-center">
                    <p className="text-muted fs-16 mb-1 mt-3">Manager</p>
                    <h5 className="text-dark fs-18">Norden Sophie</h5>
                  </div>
                  <div className="bg-light m-3 position-relative mt-4 p-4 rounded-3 testi-box-arrow testi-box-arrow">
                    <p className="text-muted fst-italic fs-16 text-center mb-0">
                      " Looking for an event WordPress theme? Look no
                      further—we’ve got pre-built websites for over 20 different
                      types of events: birthday party, wedding, course launch,
                      marketing event, conference, seasonal event."
                    </p>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
