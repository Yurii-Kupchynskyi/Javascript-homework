import { dataArray as users } from "./data.js";
console.log(users);

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.some((friend) => friend === friendName))
    .reduce((acc, { name }) => {
      return [...acc, name];
    }, []);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
