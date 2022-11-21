import { tickersReducer, initialState } from "../reducers/tickersReducer";

import {
  GET_TICKERS,
  GET_TICKERS_SUCCESS,
  GET_TICKERS_ERROR,
} from "../reducers/tickersReducer";

describe("session reducer", () => {
  it("should return the initial state", () => {
    expect(tickersReducer(undefined, {})).toEqual(initialState);
  });

  it("GET_TICKERS", () => {
    const action = {
      type: GET_TICKERS,
    };

    expect(tickersReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      err: "",
    });
  });

  it("GET_TICKERS_SUCCESS", () => {
    const action = {
      type: GET_TICKERS_SUCCESS,
      payload: [
        {
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: "128.56",
          change: "137.32",
          change_percent: "0.51",
          dividend: "0.20",
          yield: "0.58",
        },
      ],
      err: "",
    };

    expect(tickersReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      tickers: [
        {
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: "128.56",
          change: "137.32",
          change_percent: "0.51",
          dividend: "0.20",
          yield: "0.58",
        },
      ],
      err: "",
    });
  });

  it("GET_TICKERS_ERROR", () => {
    const action = {
      type: GET_TICKERS_ERROR,
      payload: "something going wrong",
    };

    expect(tickersReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      err: "something going wrong",
    });
  });
});
