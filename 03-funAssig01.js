
// Type 1: Function with no argument and no return type
function country(){
    console.log("Hello World...");
    console.log("===============================")
    
}
country();
// Type 2: Function with argument and no return type

function Name(firstName,lastName,collegeName){
    console.log("My First Name is;",firstName)
    console.log("My Last Name is:",lastName)
    console.log("My College Name is:",collegeName)
    console.log("=======================================")
}
Name("Milind","Bhangale","VMV");

// Type 3: Function with argument and return value

function addition(n1,n2,n3){   
   console.log("Given Number to addition:", n1,n2,n3)
    var addThreeValues= n1+n2+n3;
    console.log("The Addition is:",addThreeValues)
    console.log("=====================================")    
}
addition(10.23,600,40);
addition("Hello","Good","Morning")