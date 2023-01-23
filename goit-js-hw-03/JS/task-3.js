const findBestEmployee = function (employees) {
  const indexOfMaxCount = Object.values(employees).indexOf(
    Math.max(...Object.values(employees))
  );
  return Object.keys(employees)[indexOfMaxCount];
};
// Довший метод
//const findBestEmployee = function (employees) {
// let keys = Object.keys(employees);
// let tempCompareValue = employees[keys[0]];
// let index;

// console.log(keys);
// for (let i = 0; i < keys.length; i++) {
//   if (employees[keys[i]] >= tempCompareValue) {
//     tempCompareValue = employees[keys[i]];
//     index = i;
//   }
// }

// return [keys[index]];
//}

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
