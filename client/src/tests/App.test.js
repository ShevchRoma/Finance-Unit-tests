import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { useSelector } from "react-redux";
import React from "react";
import * as reduxHooks from "react-redux";
import * as actions from "../redux/actions/getTickers";

jest.mock("react-redux");
jest.mock("React", () => ({
  ...jest.requireActual("React"),
  useEffect: jest.fn(),
}));

const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

const tickers = [
  {
    ticker: "AAPL",
    exchange: "NASDAQ",
    price: "128.56",
    change: "137.32",
    change_percent: "0.51",
    dividend: "0.20",
    yield: "0.58",
  },
  {
    ticker: "GOOGL",
    exchange: "NASDAQ",
    price: "237.08",
    change: "154.38",
    change_percent: "0.10",
    dividend: "0.18",
    yield: "0.98",
  },
];

describe("App", () => {
  it("should create App", () => {
    mockedDispatch.mockResolvedValue(jest.fn());
    useSelector.mockReturnValue([]);

    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });
  it("should create App  with tickers items", () => {
    useSelector.mockReturnValue(tickers);

    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });

  it("should dispatch actions", () => {
    const dispatch = jest.fn();

    mockedDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue([]);
    const mockedGetTickers = jest.spyOn(actions, "getTickers");
    render(<App />);
    fireEvent.click(screen.getByRole("button"));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedGetTickers).toHaveBeenCalled();
  });
});
