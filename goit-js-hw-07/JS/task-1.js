// 1.1
const underCategories = document.querySelector("#categories").children;
console.log(`У списку ${underCategories.length} категорії`);

//1.2
const headerArray = document.querySelectorAll("h2");
// console.log(headerArray);
headerArray.forEach((name) => {
  console.log(`Категорія : ${name.textContent}`);
  console.log(
    `Кількість елементів : ${name.nextElementSibling.children.length}`
  );
});
