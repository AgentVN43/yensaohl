import React from "react";
import data from "../../db/data.json";

export default function Contact() {
  const { contact } = data;

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="contact-head text-center">
              <h4 className="fs-24">{contact.title}</h4>
              <p className="fs-16 text-muted lh-base mt-3">
                {contact.descript}
              </p>
              {/* <div className="col-lg-12">
                <div className="">
                  <div className="mt-3">
                    <div className="float-start">
                      <i
                        className="avatar-s me-2 align-middle"
                        data-feather="mail"
                      />
                    </div>
                    <div>
                      <h6 className="text-dark fs-16">Email Address</h6>
                      <p className="text-muted fs-16">Example@abc.com</p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="float-start">
                      <i
                        className="avatar-s me-2 align-middle"
                        data-feather="phone-call"
                      />
                    </div>
                    <div>
                      <h6 className="text-dark fs-16">Phone number</h6>
                      <p className="text-muted fs-16">
                        +1-903-929-5705 , +1-631-705-0194
                      </p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="float-start">
                      <i
                        className="avatar-s me-2 align-middle"
                        data-feather="map-pin"
                      />
                    </div>
                    <div>
                      <h6 className="text-dark fs-16">Office Address</h6>
                      <p className="text-muted fs-16">
                        3961 Melville Street <br />
                        Bruceton, TN 38317
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* end row */}
        <div className="row mt-4 ">
          <div className="col-lg-12">
            <div className="row mt-5">
              <div className="col-lg-12">
                <div className="">
                  <div className="mt-3 text-center">
                    <div className="float-start">
                      <i
                        className="avatar-s me-2 align-middle"
                        data-feather="mail"
                      />
                    </div>
                    <div>
                      <h6 className="text-dark fs-16">Email Address</h6>
                      <p className="text-muted fs-16">{contact.email}</p>
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <div className="float-start">
                      <i
                        className="avatar-s me-2 align-middle"
                        data-feather="phone-call"
                      />
                    </div>
                    <div>
                      <h6 className="text-dark fs-16">Phone number</h6>
                      <p className="text-muted fs-16">{contact.phone}</p>
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <div className="float-start">
                      <i
                        className="avatar-s me-2 align-middle"
                        data-feather="map-pin"
                      />
                    </div>
                    <div>
                      <h6 className="text-dark fs-16">Office Address</h6>
                      <p className="text-muted fs-16">
                        {contact.addr} <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-8">
                <div className="custom-form mt-4 mt-lg-0">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Your name..."
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email..."
                          />
                        </div>
                      </div>
                    </div>
                   
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <input
                            name="text"
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Your subject..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <textarea
                            name="comments"
                            id="comments"
                            rows={4}
                            className="form-control"
                            placeholder="Your message..."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-12">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-primary"
                          defaultValue="Send Message"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
