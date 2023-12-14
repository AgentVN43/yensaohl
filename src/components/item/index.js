import React, { useState } from "react";
import "./index.scss";
import Popup from "../popup";

export default function Item({ name, prices, image }) {
  const [ShowPopup, setShowPopup] = useState(false)

  const handleImageClick = () => {
    setShowPopup(true);
  };
  
  const closePopup = () => {
    setShowPopup(false);
  };

  const inputString = name ;
  const parts = inputString.split(":");
  return (
    <div className="col-lg-3 col-sm-12">
      <div className="service-box p-4 text-center">
        <div className="icon-box mb-2">
          <img src={image} alt="" onClick={handleImageClick}/>
        </div>
        <h5 className="mt-4 mb-3">{parts[0]}<br/>{parts[1]}</h5>
        <p className="mx-auto">Giá: {parseFloat(prices).toLocaleString()}</p>
      </div>
      {ShowPopup && <Popup onClose={closePopup} />}
    </div>
  );
}
