
console.log(`----------------------------Palindrome-----------------------------------`)
function Palindrome(str) {
    
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');    
  
    if (cleanedStr === reversedStr) {
        console.log(`The word '${str}' :    a palindrome`);
    } else {
        console.log(`The word '${str}' :   not a palindrome`);
    }
}

Palindrome("Madam"); 
Palindrome("Dad");   
Palindrome("Hello"); 

console.log(`------------------------Anagrams----------------------------------`)
function Anagrams(str1, str2) {
    
    const sortedStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');

    if (sortedStr1 === sortedStr2) {
        console.log(`The words ('${str1}', '${str2}') :    are Anagrams `);
    } else {
        console.log(`The words ('${str1}', '${str2}') :    are not Anagrams `);
    }
}

Anagrams("silent", "listen"); 
Anagrams("hello", "world");   
Anagrams("such", "much");    