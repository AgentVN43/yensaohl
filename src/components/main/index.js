import React from "react";
import { useInit } from "../hooks/useInit";

export default function Main() {
  const  {category} = useInit()

  console.log(category)
  return (
    <section className="section home bg-home bg-light" id="home">
      <div className="container">
        <div className="row align-items-center pt-4">
          <div className="col-lg-6">
            <div className="home-content">
              <h2 className="home-heading mb-4">Create Amazing Landing Page</h2>
              <p className="home-text text-muted mb-4">
                It is a long established fact that a reader will be of a page
                when established fact looking at its layout.
              </p>
              <div className="pt-2">
                <a href="#features" className="btn btn-sm btn-custom mr-2">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-3 mt-sm-0">
            <div className="video-bar">
              <iframe
                src="https://player.vimeo.com/video/69988283?color=f16000&title=0&byline=0&portrait=0"
                width={555}
                height={321}
                className="frame-border py-1"
                style={{ border: "5px solid #ddd" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
