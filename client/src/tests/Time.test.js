import { cleanup } from "@testing-library/react";
import Time from "../components/Time/Time";
import TestRenderer from "react-test-renderer";

afterEach(cleanup);

describe("Ticker.js", () => {
  it("snapshot renders correctly, truthy values", () => {
    const tree = TestRenderer.create(<Time />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("snapshot renders correctly, falsy values", () => {
    const tree = TestRenderer.create(<Time />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
