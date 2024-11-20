'use strict'

// greet = "Good Evening";
// console.log(greet);
 
  let person = {

}
console.log(person);

// function test(n1, n1){
//     console.log(n1+n1);
// }
// test(60, 80);

const person1 = {
    first_name:'Akshay',
    age: 25,
    grad: "BE"
}
let first_name = person1.first_name;
let age = person1.age;
console.log(first_name, age);

const person2 ={
    fullName:"Akshay Yadav",
    age: 45,
    isMarried: true
}

let {fullName, age1 } = person2;
console.log(fullName, age1);

const fruits = ["Apple", "Mango", "Banana", "Watermelon"]
const fruit_apple = fruits[0];
const fruit_banana = fruits[2];
console.log(fruit_apple, fruit_banana);
