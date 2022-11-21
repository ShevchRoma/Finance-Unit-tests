import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getTickers } from "./redux/actions/getTickers";
import Ticker from "./components/Ticker/Ticker";
import Time from "./components/Time/Time";

function App() {
  const { tickers } = useSelector((state) => state.tickers);

  const dispatch = useDispatch();

  /* or...
    React.useEffect(() =>{
       dispatch(getTickers())
    },[dispatch]) */

  return (
    <div className="wrapper">
      <div className="app">
        <div className="app__body">
          <div className="app__top top">
            <div className="container">
              <Time />
            </div>
          </div>
          <div className="app__bottom bottom">
            <div className="container">
              {!tickers ? (
                <button onClick={() => dispatch(getTickers())}>
                  Click Me To start
                </button>
              ) : (
                <div className="bottom__body">
                  <div className="bottom__row">
                    {tickers &&
                      tickers.map((item) => (
                        <Ticker item={item} key={item.ticker} />
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
