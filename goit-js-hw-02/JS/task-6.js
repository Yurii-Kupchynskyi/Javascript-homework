let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введіть число ");
  if (Number.isNaN(Number(input))) {
    alert("Було написано не число, спробуйте ще раз");
    continue;
  } else {
    numbers.push(Number(input));
  }
} while (input !== null);

if (numbers.length !== 0) {
  for (let item of numbers) {
    total += item;
  }
}
console.log(`Загальна сума чисел дорівнює ${total}`);
