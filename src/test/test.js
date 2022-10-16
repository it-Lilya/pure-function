import { dataPersons } from '../total';

test('dataPersons sort helthy', () => {
  const person = dataPersons('Маг', 90);
  const expected = 'healthy';
  expect(person).toEqual(expected);
});

test('dataPersons sort helthy', () => {
  const person = dataPersons('Зомби', 40);
  const expected = 'wounded';
  expect(person).toEqual(expected);
});

test('dataPersons sort helthy', () => {
  const person = dataPersons('Люцифер', 5);
  const expected = 'critical';
  expect(person).toEqual(expected);
});
