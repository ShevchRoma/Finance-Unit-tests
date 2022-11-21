import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { tickersReducer } from "./reducers/tickersReducer";

export const rootReducer = combineReducers({
  tickers: tickersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
