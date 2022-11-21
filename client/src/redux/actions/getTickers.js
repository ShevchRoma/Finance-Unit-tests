import { socket } from "../../api/socketApi";
import {
  GET_TICKERS,
  GET_TICKERS_ERROR,
  GET_TICKERS_SUCCESS,
} from "../reducers/tickersReducer";

export const getTickers = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_TICKERS,
    });
    socket.emit("start");
    socket.on("ticker", (tickers) => {
      dispatch({
        type: GET_TICKERS_SUCCESS,
        payload: tickers,
      });
    });
  } catch (err) {
    dispatch({
      type: GET_TICKERS_ERROR,
      payload: err.message,
    });
  }
};
