// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// // How do we call add with our two arguments in the array?
// var toAdd = [9, 5]
//
// // One way is below -- but this is can get complex and is messy.
// add(toAdd[0], toAdd[1]);
//
// // The "spread" operator allows us to accomplish the above process in a simple and elegant way.
// console.log(add(...toAdd));
// // The spread operator comes before an array or a variable that is an array.
//   // Above the array items are spread out into the arguments of the "add" function.

// var groupA = ['Chris', 'Giselle'];
// var groupB = ['Al', 'Beck'];
// // We can use the spread operator to combine the two arrays.
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var personOne = ['Chris', 30];
var personTwo = ['Al', 28];

function greet (name, age) {
  console.log("Hello " + name + ", you are " + age);
}

greet(...personOne);
greet(...personTwo);

var name = ['Chris', 'Mike'];
var final = [...name ,'Al'];

final.forEach(function (name) {
  console.log("Hellow " + name)
});
