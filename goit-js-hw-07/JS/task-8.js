const amount = document.querySelector("input[type='number']");

const renderButton = document.querySelector("button[data-action='render']");
const destroyButton = document.querySelector("button[data-action='destroy']");

const boxes = document.querySelector("#boxes");
const boxArray = [];

const generateRandomValues = () => {
  const rgbRandomValues = [];
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * 256);
    rgbRandomValues.push(randomNumber);
  }
  return rgbRandomValues;
};

const addBlocks = () => {
  let startBlockSize = 30;
  for (let i = 0; i < +amount.value; i++) {
    const rgbRandomValues = generateRandomValues();

    const divObject = document.createElement("div");
    divObject.style.width = `${startBlockSize}px`;
    divObject.style.height = `${startBlockSize}px`;
    divObject.style.backgroundColor = `rgb(${rgbRandomValues[0]},
          ${rgbRandomValues[1]},${rgbRandomValues[2]})`;
    boxArray.push(divObject);
    startBlockSize += 10;
  }
  boxes.append(...boxArray);
};

renderButton.addEventListener("click", addBlocks);
