let country = prompt("Введіть країну").toLowerCase();
let newCountry = country[0].toUpperCase() + country.slice(1, country.length);
let price;
let deliveryStatus = true;

switch (newCountry) {
  case "Китай":
    price = 100;
    break;

  case "Чилі":
    price = 250;
    break;

  case "Австралія ":
    price = 170;
    break;

  case "Індія":
    price = 80;
    break;

  case "Ямайка":
    price = 120;
    break;

  default:
    deliveryStatus = false;
}
if (deliveryStatus) {
  console.log(`Доставка в ${newCountry} буде коштувати ${price} кредитів`);
} else {
  alert("У вашій країні доставка недоступна");
}
