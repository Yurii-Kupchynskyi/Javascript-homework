// const makeOrder = function (chiefName, dishName) {
//   console.log(`${chiefName} is making ${dishName}`);
// };
// makeOrder("Andriy", "Greek salat");
// makeOrder("Andriy", "Fried potatoes");
// makeOrder("Andriy", "Cofe");

// makeOrder("Leo", "Fruit smoothie");
// makeOrder("Leo", "Tiramisu");
// makeOrder("Leo", "Sandwich");

const makeChief = function (chiefName) {
  const makeDish = function (dishName) {
    console.log(`${chiefName} is making ${dishName}`);
  };
  return makeDish;
};

const Andriy = makeChief("Andriy");
Andriy("Greek salat");
Andriy("Fried potatoes");
Andriy("Cofe");

const Leo = makeChief("Leo");
Leo("Fruit smoothie");
Leo("Tiramisu");
Leo("Sandwich");

const IncrementNumber = function (number) {
  return function () {
    console.log(number);
    number++;
  };
};

const Increment_1 = IncrementNumber(10);
Increment_1();
Increment_1();

const Increment_2 = IncrementNumber(10);
Increment_2();
Increment_2();
