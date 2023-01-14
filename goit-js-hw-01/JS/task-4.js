let myCredits = 23580;
let pricePerDroid = 3000;
let message, totalPrice;

let countDroidsToBuy = prompt("Скільки дроїдів ви хочете придбати?", 1);

if (countDroidsToBuy) {
  totalPrice = +countDroidsToBuy * pricePerDroid;
  totalPrice > myCredits
    ? (message = `Недостатньо коштів на рахунку!`)
    : (message = `Ви купили ${countDroidsToBuy} дроїдів, на рахунку залишилося ${
        myCredits - totalPrice
      } кредитів.`);
} else {
  message = "Скасовано користувачем!";
}
alert(message);
