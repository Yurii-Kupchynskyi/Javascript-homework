const rangeControl = document.querySelector("#font-size-control");
console.log(rangeControl.value);

const mainText = document.querySelector("#text");

rangeControl.addEventListener("input", () => {
  mainText.style.fontSize = `${rangeControl.value}px`;
});
