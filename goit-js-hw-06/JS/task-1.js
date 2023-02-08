import { dataArray } from "./data.js";
console.log(dataArray);

const getUserNames = (users) => {
  const namesArray = users.reduce((acc, { name }) => {
    return [...acc, name];
  }, []);
  return namesArray;
};

console.log(getUserNames(dataArray));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
