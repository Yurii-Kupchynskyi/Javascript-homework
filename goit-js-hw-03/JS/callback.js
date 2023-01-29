const myfilter = function (array, myCallback) {
  const newArray = [];
  for (const iterator of array) {
    // console.log(iterator);
    if (myCallback(iterator)) {
      newArray.push(iterator);
    }
  }
  return newArray;
};
const getByQuantity = function (element) {
  return element >= 10;
};
const getByEvenNumber = function (element) {
  return element % 2 === 0;
};

console.log(myfilter([1, 4, 23, 34, 11, 0, 1], getByQuantity));

console.log(myfilter([1, 4, 23, 34, 11, 0, 1], getByEvenNumber));
