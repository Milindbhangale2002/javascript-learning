function stringHandsOn(){
var str ="   Hey you are doing good,  keep it up    ";
console.log(`1. ${str}`);
console.log(`Total length of the string:${str.length} `);
var result = str.trim();
console.log(`After trim string is: ${result} and it's length ${result.length}`);

console.log(`First char ${result.charAt(0)} and Last char ${result.charAt(result.length-1)}`);
var resultvalue = result.split("");
console.log(`Total number of words in the string: ${resultvalue.length}`);
var indexofGood = result.indexOf("good");
console.log(`index of word 'Good' in the string: ${indexofGood}`);
 
var substringFromIndex22 = result.substring(22);
console.log("Substring starting from index 22:", substringFromIndex22);

var endsWithUp = result.endsWith("up");
console.log("Does the string end with 'up'?", endsWithUp);

var startsWithHey = result.startsWith("Hey");
console.log("Does the string start with 'Hey'?", startsWithHey);

}

stringHandsOn();