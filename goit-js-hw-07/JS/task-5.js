const inputData = document.querySelector("#name-input");
const outputData = document.querySelector("#name-output");
inputData.addEventListener("input", () => {
  if (inputData.value === "") {
    outputData.textContent = "Незнайомець";
  } else {
    outputData.textContent = inputData.value;
  }
});
