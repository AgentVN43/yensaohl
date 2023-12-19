import React, { useState } from "react";
import Popup from "../popup";

export default function Item2({ url, name, imageValue, regular_price }) {
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
          <a href={url} title="Project Name">
            <img
              className="img-fluid rounded-3"
              src={imageValue}
              alt={2}
              onClick={handleImageClick}
            />
            <div className="item-mask ps-3">
              <div className="item-caption">
                <h5 className="text-dark fs-16 mt-3 mb-1">{name}</h5>
                <p className="text-price" >
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
