// Variables booleanas (true y false)
const boolean1 = true;
const boolean2 = false;
const boolean3 = 'true';

console.log(boolean1);
console.log(boolean2);
console.log(boolean3);

console.log(typeof(boolean1)); // Tipo de valor

console.log(`Boolean1 es igual a Boolean2: ${boolean1 == boolean2}`);
console.log(`Boolean1 es igual a Boolean3: ${boolean1 === boolean3}`);

const boolean4 = new Boolean(true);
console.log(boolean4);