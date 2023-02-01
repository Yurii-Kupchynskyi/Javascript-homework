// function multiplyAll(array) {
//   const multiply_all = (num) => {
//     return array.map((el) => el * num);
//   };
//   return multiply_all;
// }

// const mult_1 = multiplyAll([1, 3, 4, 5]);
// console.log(mult_1(5));

//👨‍🎓
function goodVsEvil(good, evil) {
  const CountPower = (item) =>
    item
      .split(" ")
      .reduce(
        (accumulator, currentValue) =>
          Number(accumulator) + Number(currentValue),
        0
      );

  if (CountPower(good) > CountPower(evil)) {
    return "Battle Result: Good triumphs over Evil";
  } else if (CountPower(good) === CountPower(evil)) {
    return "Battle Result: No victor on this battle field";
  } else return "Battle Result: Evil eradicates all trace of Good";
}

console.log(goodVsEvil("5 1 1 6 1 1", "1 1 6 1 1 1 1"));

//🧡🧡
function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

const liftingCalc = (w) => {
  if (w > 20 && w % 2.5 === 0) {
    const resultArray = [];
    let amount = 0;
    weightOnEachSide = (w - 20) / 2;
    avaibleWeights = [20, 15, 10, 5, 2.5, 1.25];
    for (const currentWeight of avaibleWeights) {
      amount = Math.floor(weightOnEachSide / currentWeight);
      weightOnEachSide = weightOnEachSide - amount * currentWeight;
      for (let i = 0; i < amount; i++) {
        resultArray.push(currentWeight);
      }
    }
    return resultArray;
  } else if (w === 20) {
    return [];
  } else return false;
};

console.table(liftingCalc(95));
