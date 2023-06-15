const text = document.querySelector("#paragraph");

console.log(text.classList); // ["text", "red", "big", value: "text red big"]

console.log(text.classList.contains("red")); // true

text.classList.remove("big");
console.log(text.classList); // ["text", "red", value: "text red"]

const buttonOpacity = document.querySelector("#AddOpacity");
const buttonTransform = document.querySelector("#AddInlineStyle");

// Активація та дизактивація класу при потребі
buttonOpacity.addEventListener("click", (e) => {
  text.classList.toggle("new-class");
  console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]
});

// Inline style
buttonTransform.addEventListener("click", (e) => {
  text.style.textAlign = "center";
});

console.log(buttonTransform.attributes);

// Data-action query
const addBtn = document.querySelector('button[data-action="add"]');
console.log(addBtn.dataset.action); // "add"

const removeBtn = document.querySelector('button[data-action="remove"]');

const newHeader = document.createElement("h2");

newHeader.textContent = "Creating element";

removeBtn.addEventListener("click", (e) => {
  newHeader.remove();
});
addBtn.addEventListener("click", (e) => {
  document.body.append(newHeader);
});
