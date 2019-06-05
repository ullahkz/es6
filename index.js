// difference between let and var
// let -> scope to its own block
// use let only when you need to reassign a variable
// var -> scope to its function

// function sayHello(i) {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }

//   console.log(i);
// }

// let j = 7;
// sayHello(j);

// const person = {
//   name: "Mosh",
//   walk: function() {
//     console.log(this);
//     console.log(this.name + " is walking");
//   }
// };

// const targetMember = "name";
// person[targetMember] = "kazi";
// person.walk();

// const hato = person.walk.bind(person);
// hato();

// arrow functions

// const square = function(number) {
//   return number * number;
// };

// let squared = number => {
//   return number * number;
// };

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false }
// ];

// const activeJobs = jobs.filter(job => job.id);

// console.log(activeJobs);

// arrow function don't rebind this
// const person = {
//   name: "Mosh",
//   walk: function() {
//     setTimeout(() => {
//       console.log("this", this);
//     }, 1000);
//   }
// };

// person.walk();

// const colors = ["red", "green", "blue"];
// // template literal with backtics
// const items = colors.map(color => `<li>${color}</li>`);

// console.log(items);

// this line is to check the git status
