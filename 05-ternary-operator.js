function squareOFWordLength(givenstring1){
var wordLength = givenstring1.length;
var result = wordLength * wordLength;
return result;

}
var returnValues =squareOFWordLength("JavaScript");
console.log(`Given string is: Web developer smart and it's length square is:${returnValues}`);

var returnValues =squareOFWordLength("Google chrome");
console.log(`Given string is: Web developer smart and it's length square is:${returnValues}`);

var returnValues =squareOFWordLength("Web developer smart");
console.log(`Given string is: Web developer smart and it's length square is:${returnValues}`);

function stringOperation(givenString) {
    var strLength = givenString.length;
    var words = givenString.split(" "); 
    var totalWords = words.length;

    if (totalWords === 0) {
        console.log("No words to operate on.");
        return;
    }

    var strDivision = strLength / totalWords;
    console.log(`String Division is: ${strDivision}`);

    var strMultiply = strLength * totalWords;
    console.log(`String Multiplication is: ${strMultiply}`);
}

stringOperation("I am Angular Developer");
