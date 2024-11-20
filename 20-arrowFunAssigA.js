console.log('====  Arrow Function with no argument and no return value ==== ');
let show = () => {
    console.log(`"Good Morning, Today is Tuesday"`); 
}
show();

console.log(`=====1k3 args and no return value ======`)
let Multiply = (num, num2,num3) => {
   let multiplication = num * num2 * num3;
   console.log(`this Multiplication values => 5,5,2: ${multiplication}`);
}
Multiply(5,5,2);

console.log(' ===== assign default value ====  ');
let mul = (n1 ,n2, n3=1 )=>{
    let multiplication1 = n1 * n2 * n3;
    console.log(`Assign default value to 3rd arg as 1 , 10, 4 -> ${multiplication1}`)
    
}
mul(10, 2);

console.log(`=====5 args and return value===== `);

let sum = (s1, s2, s3, s4, s5) =>{
    let sumetion = s1 + s2 + s3 + s4 + s5;
    console.log(`Addition of :${sumetion}`);
}
sum(100, 100, 200,349, 756);



