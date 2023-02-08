let todoList = [
  {
    item_name: "Apple",
    price: "$5",
    quantity: 1,
    brand_details: { name: "Golden Delicious", location: "San Francisco" },
    isChecked: true,
  },

  {
    item_name: "Bannana",
    price: "$3",
    quantity: 2,
    brand_details: { name: "Fuji", location: "San Diego" },
    isChecked: false,
  },

  {
    item_name: "Pears",
    price: "$7",
    quantity: 4,
    brand_details: { name: "Golden Delicious", location: "San Francisco" },
    isChecked: true,
  },

  {
    item_name: "Milk",
    price: "$4",
    quantity: 3,
    brand_details: { name: "Mother Dairy", location: "California" },
    isChecked: false,
  },
];

//console.log(_.range(0, 30, 5));

// var objs = [
//   { first_nom: "Lazslo", last_nom: "Jamf" },
//   { first_nom: "Pig", last_nom: "Bodine" },
//   { first_nom: "Pig", last_nom: "Andrean" },
//   { first_nom: "Pirate", last_nom: "Prentice" },
//   { first_nom: "Alex", last_nom: "Stendal" },
//   { first_nom: "Barbara", last_nom: "Blake" },
// ];

// var sortedObjs = _.sortBy(objs, "last_nom");
// console.table(sortedObjs);

let sortedList = _.sortBy(todoList, "item_name");
console.table([sortedList]);

const priceToDOList = todoList.map((product) => product.price);
console.log(priceToDOList);

const updatedToDOList = todoList.map((product) => {
  return {
    ...product,
    generalSum: product.quantity * product.price.split("")[1],
  };
});
console.table(updatedToDOList);

const BrandDetailsArray = todoList.reduce((acc, number) => {
  return [...acc, number.brand_details];
}, []);
console.log(BrandDetailsArray);

// todoList.forEach((product, index, i) => {
//   console.log(product, index, i[0].price);
// });
