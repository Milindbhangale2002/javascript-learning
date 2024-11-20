console.log(`======== filter() method to find number greater than 50 ==============`);
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(arrayNumbers);
const greater = arrayNumbers.filter( (element) => {
    return element  >= 50;
    
});
console.log(greater);
console.log(`=====Find Out all even number====`)
const arrayEven = arrayNumbers.filter( (element) => {
    return element % 2 == 0;
    
});
console.log(arrayEven);

console.log(`=====Find Out all odd number====`)
const arrayodd = arrayNumbers.filter( (element) => {
    return element % 2 == 1;
    
});
console.log(arrayodd);


console.log(`=====Which are multiple of 5====`)
const multiply = arrayNumbers.filter( (element) => {
    return element % 5 ==0;
    
});
console.log(multiply);

console.log(`=====Which are between 20 and 50====`)
const result = arrayNumbers.filter( (element) => {
    return  element > 20 && element < 50;
    
});
console.log(result);


