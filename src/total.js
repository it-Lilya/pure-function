export function dataPersons(name, health) {
  const person = { name, health };
  let result;
  if (person.health >= 50) {
    result = 'healthy';
  }
  if (person.health >= 15 && person.health < 50) {
    result = 'wounded';
  }
  if (person.health < 15) {
    result = 'critical';
  }
  return result;
}
