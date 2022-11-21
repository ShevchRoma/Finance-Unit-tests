export const GET_TICKERS = "GET_TICKERS";
export const GET_TICKERS_SUCCESS = "GET_TICKERS_SUCCESS";
export const GET_TICKERS_ERROR = "GET_TICKERS_ERROR";

export const initialState = {
  tickers: null,
  isLoading: false,
  err: "",
};

export const tickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKERS:
      return {
        ...state,
        tickers: null,
        isLoading: true,
        err: "",
      };
    case GET_TICKERS_SUCCESS:
      return {
        ...state,
        tickers: action.payload,
        isLoading: false,
        err: "",
      };
    case GET_TICKERS_ERROR:
      return {
        ...state,
        isLoading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};
