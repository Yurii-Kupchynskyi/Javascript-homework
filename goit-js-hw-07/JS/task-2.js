const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

const liArray = ingredients.map((name) => {
  const liElement = document.createElement("li");
  liElement.textContent = `${name}`;
  return liElement;
});
console.log(liArray);

ingredientsList.append(...liArray);
