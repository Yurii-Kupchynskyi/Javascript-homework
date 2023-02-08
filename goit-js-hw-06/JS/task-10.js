import { dataArray as users } from "./data.js";
console.log(users);

const getSortedUniqueSkills = (users) => {
  return users
    .flatMap((user) => user.skills)
    .filter((skill, index, skills) => skills.indexOf(skill) === index)
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
