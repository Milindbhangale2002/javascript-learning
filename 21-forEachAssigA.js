const arrayNumbers = [1, -7, 40,502, -77, 91, 0, 108,89, -601];
console.log(arrayNumbers);

console.log(`=========Array element with it's index using forEach()==========`);

arrayNumbers.forEach((element , index) => {
    console.log(`element ->${element},    index ->${index}`);

});

console.log(`======Find the Positive Number======`);
 
arrayNumbers.forEach(element => {
    if (element >= 0 ) {
        console.log(element);
    }
});

console.log(`=====Find the negative numbers======`);

arrayNumbers.forEach(element => {
    if (element <0) {
        console.log(element);
    }
});

console.log(`======Find the Even nymbers=======`)
arrayNumbers.forEach(element => {
    if (element%2== 0) {
        console.log(element)
    }
});

console.log(`====sum of all the given array numbers====`);
const sum = arrayNumbers.reduce((Totalvalue, currentValue) => Totalvalue + currentValue, 0);
console.log("Sum of all elements:", sum);

console.log(`=====Only even indexed array value=====`);

arrayNumbers.forEach((element ,index) => {
    if (index % 2 === 0 ) {
        console.log(`${index},   ${element}`);
    }    
});
