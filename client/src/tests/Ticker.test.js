import { cleanup } from "@testing-library/react";
import Ticker from "../components/Ticker/Ticker";
import TestRenderer from "react-test-renderer";

afterEach(cleanup);

describe("Ticker.js", () => {
  it("snapshot renders correctly, truthy values", () => {
    const tree = TestRenderer.create(
      <Ticker
        ticker="AAPL"
        price="270.51"
        change="110.94"
        change_percent="0.29"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("snapshot renders correctly, falsy values", () => {
    const tree = TestRenderer.create(<Ticker />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
