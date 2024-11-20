const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`=====before array====`);
console.log(arrayNumbers);
const Addition = arrayNumbers.map((element, index) =>{
    return element + 10;
});
console.log(`=====Add 10 into After array ====`);

console.log(Addition);

console.log(`=====Cube the each Array element ====`);

const cube = arrayNumbers.map((element, index) =>{
    return element * element * element;
});

console.log(cube);

console.log(`=====Add index value into its corresponding each array element ====`);

const Addindex = arrayNumbers.map((element, index) =>{
    return element + index;
});

console.log(Addindex);

