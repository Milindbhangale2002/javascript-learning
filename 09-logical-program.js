console.log('=====WAP to count the even number from the array===')
console.log('[10,20,45,30,77,60]')
const array = [10,20,45,30,77,60];
let oddNumCount = 0;
for (const element of array) {
    if (element%2==1) {
        console.log(element);
        oddNumCount = oddNumCount + 1;
    }
        
}
console.log(`odd number count is : ${oddNumCount}`);


console.log('===WAP to count the vowels including lower and upper case===')
let myLove = 'I Love only JavaScript';
const vowels = " aeiou ";
let counterVowels =0;
for (const char of myLove) {   
    if (vowels.includes (char.toLowerCase())) {
        counterVowels = counterVowels+1;
    } 
   
       
}
console.log(`Vowel count is : ${counterVowels}`);

console.log("===WAP to count the a character including upper and lower character===");
let sentence = "JavaScript LANGUAGE";

let CounterAchar = 0;
for (const char of sentence) {
    if (char =='a' || char =='A') {
        CounterAchar = CounterAchar + 1;
    }
    // if (char.toUpperCase()== 'A') {
    //     CounterAchar = CounterAchar + 1;        
    // }
}
console.log(`Total char a  is : ${CounterAchar}`);