import App, {doAdd, doSubtract} from '../src/App';
import * as math from "../src/math";

jest.mock("./math.js");
test("calls math.add", () => {
  doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});
test("calls math.subtract", () => {
  doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});