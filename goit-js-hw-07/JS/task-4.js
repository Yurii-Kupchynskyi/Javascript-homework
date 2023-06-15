const currentData = document.querySelector("#value");

const incButton = document.querySelector('button[data-action="increment"]');

const decButton = document.querySelector('button[data-action="decrement"]');

incButton.addEventListener("click", () => {
  console.log(incButton.dataset.action);
  currentData.textContent = +currentData.textContent + 1;
});

decButton.addEventListener("click", () => {
  console.log(decButton.dataset.action);
  currentData.textContent = +currentData.textContent - 1;
});
