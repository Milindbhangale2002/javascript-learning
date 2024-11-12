let profesor = {
    Name: "Rupesh Patil",
    teachingSubject: "Physics",
    gender: "male",
    city: "Malkapur",
    email: "rahul001@gmail.com",
    collage: "VMV collage Malkapur",
    Certificates: ["Hackers Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"],
    degree: {
        bachelorsDegree: "Physics",
        mastersDegree: "MPhys",
        PhD: "Physics",
    }
};

// Initial console.log to check the professor object
console.log(profesor);

// Adding a new property to the object
profesor.totalExp = "10 years";
console.log(`Total Experience is: ${profesor.totalExp}`);  // Fixed the template string

console.log("---------------------------------------------------------");

// Modifying the existing property 'city'
console.log("Modifying existing property");
profesor.city = "malkapur";
console.log(profesor);

console.log("----------------------------------------------------------");

// Adding a new certificate to the 'Certificates' array
console.log("After adding New certificate");
profesor.Certificates.splice(2, 0, "Oracle Certified");
console.log(profesor.Certificates);

console.log("--------------------------------------------------------------");

// Accessing the last element of the 'Certificates' array
console.log(`Last element of array: ${profesor.Certificates[profesor.Certificates.length - 1]}`);

console.log("---------------------------------------------------------------");

// Traversing the 'Certificates' array using for...of loop
console.log("-------Traversing the array using for of loop-----");
const arrayCertificates = profesor.Certificates;
for (const element of arrayCertificates) {
    console.log(element);
}
