// eslint-disable-next-line no-unused-vars
import { dataObject} from '../src/object';

// eslint-disable-next-line no-undef
test("dataObject information", () => {
  // eslint-disable-next-line no-unused-vars
  let data = { name: "Маг", health: 90};
  const result = dataObject(data);
  const expected = "healthy"; 
  // eslint-disable-next-line no-undef
  expect(result).toBe(expected);
})