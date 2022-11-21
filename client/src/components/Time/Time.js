import React from "react";
import "./Time.css";

const TopTicker = () => {
  return (
    <div className="top__body">
      <div className="top__column column-top">
        <div className="column-top__row">
          <div className="column-top__dot"></div>
          <p className="column-top__name">
            15:40{/* <Moment format="HH:mm:ss" interval={1000} /> */}
          </p>
        </div>
        <div className="column-top__row">
          <div className="column-top__percent">Time</div>
          <div className="column-top__coefficient">Decor</div>
        </div>
      </div>
    </div>
  );
};

export default TopTicker;
