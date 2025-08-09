import React, { useEffect, useRef } from "react";
import { tns } from "tiny-slider";
import data from "../../db/data.json";

export default function Slider() {
  const sliderRef = useRef(null);

  const {ncc} = data

  useEffect(() => {
    const sliderOptions = {
      
        "container": ".myslider",
        "items": 1,
        "slideBy": "page",
        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 400,
        "navPosition": 'bottom'
      
    };

    // Initialize the slider
    const sliderInstance = tns(sliderOptions);

    // Store the slider instance in the ref
    sliderRef.current = sliderInstance;

    // Destroy the slider when the component unmounts
    return () => {
      if (sliderRef.current) {
        sliderRef.current.destroy();
      }
    };
  }, []); // Run this effect only once on mount

  return (
    <section className="section" id="client">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className=" text-center">
              <h4 className="fs-24">Hệ thống đại lý</h4>
              <p className="fs-16 text-muted mt-3">
                Đừng ngần ngại hãy đến với chúng tôi để trở thành một phần của Yến Sào Hòa Lê, mang sức khỏe
                đến với mọi nhà.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="tns-outer" id="tns1-ow">
            
              <div id="tns1-mw" className="tns-ovh">
                <div className="tns-inner" id="tns1-iw">
                  <div
                    className="myslider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                    id="tns1"
                    style={{ 
                      transform: "translate3d(-20%, 0px, 0px)",
                      width: "calc(500%)",
                      transitionDuration: "0.3s",
                       }}
                  >
                    {/* <div
                      className="testi-box tns-item tns-slide-cloned"
                      aria-hidden="true"
                      tabIndex={-1}
                    >
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
                            further—we’ve got pre-built websites for over 20
                            different types of events: birthday party, wedding,
                            course launch, marketing event, conference, seasonal
                            event."
                          </p>
                        </div>
                      </div>
           
                    {/* end */}
                    {
                      ncc.map((item) => (
                        <div
                      className="testi-box tns-item"
                      id="tns1-item1"
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <div className="text-center mt-4">
                        <img
                          src={item.logo}
                          alt=""
                          className="img-fluid avatar-lg img-thumbnail rounded-circle testi-user mx-auto d-block"
                        />
                        <div className="img-post text-center">
                          <p className="text-muted fs-16 mb-1 mt-3">{item.titles[0]}</p>
                          <h5 className="text-dark fs-18">{item.titles[1]}</h5>
                        </div>
                        <div className="bg-light m-3 position-relative mt-4 p-4 rounded-3 testi-box-arrow testi-box-arrow">
                          <img src={item.image} style={{width:"100%"}} className="text-muted fst-italic fs-16 text-center mb-0" alt="ncc"/>
                        </div>
                      </div>
                    </div>
                      ))
                    }
                   
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
