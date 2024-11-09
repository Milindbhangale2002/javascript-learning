const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);

console.log("First and Last Element On console")

const first=fruits_seasonal[0];
console.log(first);

const last = fruits_seasonal[fruits_seasonal.length-1];
console.log(last);

console.log("Papaya before the element 'Banana' and then log array")

fruits_seasonal.unshift('Papaya');
console.log(fruits_seasonal);

console.log("Remove'Mango'from the array")
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);

console.log("Add Element or insert an element 'Pineapple'at the last position");
fruits_seasonal.push('Pineapple');
console.log(fruits_seasonal);

console.log("Dragon Fruit before Water Melon");
fruits_seasonal.splice(4,0,'Dragon Fruit');
console.log(fruits_seasonal);

console.log("Replace an element 'orange With Kiwi");
fruits_seasonal.splice(2,1,'Kiwi');
console.log(fruits_seasonal);

console.log('Log the element Starting from index 1 to 4');
const element=fruits_seasonal.slice(1,4);
console.log(element);

console.log("Only select last 3 element and log on console");
const last3=fruits_seasonal.slice(fruits_seasonal.length-3);
console.log(last3);
