import React from "react";
import "./Ticker.css";

const Ticker = ({ item }) => {
  return (
    <div className="bottom__column">
      <div className="bottom__name">
        <div className="bottom__icon">
          <span>{item?.ticker}</span>
        </div>
        <div className="bottom__title">{item?.ticker}</div>
      </div>
      <div className="bottom__price">
        <p>{item?.price}</p>
        <span>$</span>
      </div>
      <div className="bottom__rate">
        <p>{item?.change}</p>
        <span>$</span>
      </div>
      <div className="bottom__change">
        <p>{item?.change_percent}%</p>
      </div>
    </div>
  );
};

export default Ticker;
