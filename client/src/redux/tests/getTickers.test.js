import { getTickers } from "../actions/getTickers";
import expect from "expect";

describe("getTickers", () => {
  it("should getTickers with resolved response", async () => {
    const mockData = [
      {
        ticker: "AAPL",
        exchange: "NASDAQ",
        price: "128.56",
        change: "137.32",
        change_percent: "0.51",
        dividend: "0.20",
        yield: "0.58",
      },
    ];

    const dispatch = jest.fn();
    const thunk = getTickers();

    await thunk(dispatch);

    const { calls } = dispatch.mock;

    expect(calls).toHaveLength(1);
  });
});

/* const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getTickers', () => { 

  describe('async actions', () => { 

    it('creates NEWS_GET_SUCCESS when fetching news has been done', () => {

      fetchMock.getOnce(`${API}`, {
        headers: { 'content-type': 'application/json' },
        body: { data: [{
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: "128.56",
          change: "137.32",
          change_percent: "0.51",
          dividend: "0.20",
          yield: "0.58",
        }], status: 'ok' }, 
      })
      
      
      const expectedActions = [
        {
          type: GET_TICKERS,
        },
        {
          type: GET_TICKERS_SUCCESS,
          payload: [{
            ticker: "AAPL",
            exchange: "NASDAQ",
            price: "128.56",
            change: "137.32",
            change_percent: "0.51",
            dividend: "0.20",
            yield: "0.58",
          }],
        },
      ]
      
      const store = mockStore({})

      return store.dispatch(getTickers()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
}) */
