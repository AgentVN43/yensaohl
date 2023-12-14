import React from "react";
import data from "../../db/data.json";

export default function About() {
  const { profile } = data;

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="about-title mx-auto text-center">
              <h2 className="fw-light lg-lg">{profile.title} </h2>
              <p className="text-muted fs-17 lh-base pt-4">
                {profile.description}
              </p>
            </div>
          </div>
        </div>
        {/* FUN-FACTS */}
        {/* <div className="row justify-content-center mt-5" id="counter">
          <div className="col-lg-3">
            <div className="text-muted text-center">
              <h3 className="text-dark fw-normal">128+</h3>
              <p className="fs-16">Projects</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-muted text-center about-border-left">
              <h3 className="text-dark fw-normal">89</h3>
              <p className="fs-16">Clients</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-muted text-center about-border-left">
              <h3 className="text-dark fw-normal">15842</h3>
              <p className="fs-16">Members</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-muted text-center about-border-left">
              <h3 className="text-dark fw-normal">125</h3>
              <p className="fs-16">Employee</p>
            </div>
          </div>
        </div> */}
        <div className="row mt-5">
          {profile.avatars.map((item) => (
            <div className="col-lg-3">
              <div className="mt-3">
                <img
                  src={item.image}
                  alt=""
                  className="img-fluid team-member mx-auto d-block rounded-circle img-thumbnail"
                />
                <div className="text-center mt-3">
                  <p className="fw-medium fs-16 mb-0">{item.name}</p>
                  <p className="text-muted fs-14 mb-0">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="col-lg-3">
            <div className="mt-3">
              <img
                src="images/team/2.jpg"
                alt=""
                className="img-fluid team-member mx-auto d-block rounded-circle img-thumbnail"
              />
              <div className="text-center mt-3">
                <p className="fw-medium fs-16 mb-0">William S. Blay</p>
                <p className="text-muted fs-14 mb-0">CTO/Co-Founder</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mt-3">
              <img
                src="images/team/3.jpg"
                alt=""
                className="img-fluid team-member mx-auto d-block rounded-circle img-thumbnail"
              />
              <div className="text-center mt-3">
                <p className="fw-medium fs-16 mb-0">Matthew B. Morales</p>
                <p className="text-muted fs-14 mb-0">Web Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mt-3">
              <img
                src="images/team/4.jpg"
                alt=""
                className="img-fluid team-member mx-auto d-block rounded-circle img-thumbnail"
              />
              <div className="text-center mt-3">
                <p className="fw-medium fs-16 mb-0">Luke L. Johnston</p>
                <p className="text-muted fs-14 mb-0">Web Developer</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
