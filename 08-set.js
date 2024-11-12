console.log('========= 1. Approach: Removing duplicate element from the array ====================');

let array = [10, 20, 40, 20, 10, 60];

console.log(array);

const setNum = new Set();

for (const element of array) {

    setNum.add(element);

}

console.log(setNum);

 

const arrayUnique = [];

for (const element of setNum) {

    arrayUnique.push(element);

}

console.log(arrayUnique);

 

console.log("======= 2. Approach: Removing duplicate elements using spread operator==========");

 

const arrayUniqueElements = [...new Set(array)];

console.log(arrayUniqueElements);