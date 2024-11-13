// Step 1: Create the object 'bankSbi'
let bankSbi = {
    "bank name": "State Bank of India",
    Emp_staff: 100,
    "Account No": 501004052172,
    "IFSC code": "SBI0009543"
};
console.log("----------------------------------------------------");
// Step 2: Create the object 'bankLocation'
let bankLocation = {
    street: "tulsi bag line",
    city: "Malkapur",
    Pin: "443101"
};
console.log("----------------------------------------------------");
// Step 3: Clone 'bankSbi' and 'bankLocation' using Object.assign()
let clonedBanksbi = Object.assign({}, bankSbi);
let clonedBankLocation = Object.assign({}, bankLocation);
console.log("Cloned bankSbi:", clonedBanksbi);
console.log("Cloned bankLocation:", clonedBankLocation);
console.log("----------------------------------------------------");
// Step 4: Create the 'rateOfInterest' object
let rateOfInterest = {
    homeLoanInterest: 6.5,
    personalLoanInterest: 10.5,
    dueInterest: 5.0
};
console.log(rateOfInterest);
console.log("----------------------------------------------------");
// Step 5: Merge all objects into 'sbiDetails'
let sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.log("Merged sbiDetails:", sbiDetails);
console.log("----------------------------------------------------");
// Step 6: Traverse 'sbiDetails' and log each property
console.log("Traversing sbiDetails:");
for (let key in sbiDetails) {
    console.log(`${key}: ${sbiDetails[key]}`);
}
