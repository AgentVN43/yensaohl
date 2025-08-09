import React, { useState } from "react";
import Popup from "../popup";

export default function Item2({ url, name, imageValue, regular_price, title }) {
  const [ShowPopup, setShowPopup] = useState(false);

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      className="col-lg-4 col-md-6  picture-item filter-box"
      data-groups='["profile"]'
    >
      <div className="card portfolio mt-4 overflow-hidden border-0">
        <a href={url} title={title}>
          <div
            style={{
              maxWidth: "100%",
              maxHeight: "400px",
              margin: "0px",
              padding: "0px",
            }}
          >
            <img
              className="img-fluid rounded-3"
              src={imageValue}
              alt={name}
              onClick={handleImageClick}
              style={{maxWidth:"100%"}}
            />
          </div>
          <div className="item-mask ps-3">
            <div className="item-caption">
              <h5 className="text-white fs-16 mt-3 mb-1" style={{textShadow:"2px 2px 5px #c30b1f"}}>{name}</h5>
              <p className="text-price" style={{textShadow:"2px 2px 5px #c30b1f"}}>
                Giá: {parseFloat(regular_price).toLocaleString()}
              </p>
            </div>
          </div>
        </a>
      </div>
      {ShowPopup && <Popup onClose={closePopup} />}
    </div>
  );
}
