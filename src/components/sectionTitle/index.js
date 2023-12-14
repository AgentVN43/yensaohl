import React from "react";
import './index.scss'

export default function SectionTitle({text}) {
  return (
    <div
      className="container section-title-container"
      style={{ marginBottom: "-7px" }}
    >
      <h2 className="section-title">
        <b />
        <span
          className="section-title-main"
          style={{ color: "rgb(162, 9, 55)" }}
        >
          {text}
        </span>
        <b />
      </h2>
    </div>
  );
}
