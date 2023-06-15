const inputData = document.querySelector("#validation-input");
const currentLength = inputData.getAttribute("data-length");
inputData.classList.add("invalid");
const lengthControl = () => {
  if (currentLength == inputData.value.length) {
    inputData.classList.replace("invalid", "valid");
  } else {
    inputData.classList.replace("valid", "invalid");
  }
};

inputData.addEventListener("change", lengthControl);

console.log(inputData);
