class Vehicle {
    constructor(model, modelNo, company, color, cc) {
        this.model = model;
        this.modelNo = modelNo;
        this.company = company;
        this.color = color;
        this.cc = cc;
    }

    detail() {
        console.log(`===== Details of ${this.model} =====`);
        console.log(`Model Name: ${this.model},Model Number: ${this.modelNo},Company Name: ${this.company},Color: ${this.color},CC: ${this.cc}`);
       
    }
}

// Example usage
const myVehicle = new Vehicle('Tata Punch', 2525, 'Tata', 'white', 300);
const myVehicle1 = new Vehicle('Ford Mustang', 2526, 'Ford', 'Gray', 600);
const myVehicle2 = new Vehicle('Toyota Corolla', 2527, 'Toyota', 'Red', 800);
const myVehicle3= new Vehicle('Honda Civic', 2528, 'Honda', 'Blue', 400);
const myVehicle4= new Vehicle('Hyundai Elantra', 2529, 'Hyundai', 'Black', 700);
myVehicle.detail();
myVehicle1.detail();
myVehicle2.detail();
myVehicle3.detail();
myVehicle4.detail();


class College {
    constructor(name, location, establishedYear, numberOfStudents) {
        this.name = name;               // College name
        this.location = location;       // College location
        this.establishedYear = establishedYear; // Year of establishment
        this.numberOfStudents = numberOfStudents; // Number of students
    }

    display() {
        console.log(`====== College Information ======`);
        console.log(`College Name: ${this.name},Location: ${this.location},Established Year: ${this.establishedYear},Number of Students: ${this.numberOfStudents}`);
        
    }
}

// Creating instances of the College class
const college1 = new College('NMU University', 'Jalgaon', 1985, 12000);
const college2 = new College('SSBT College', 'Jalgaon', 1990, 8500);
const college3 = new College('Raisoni Institute', 'Jalgaon', 1978, 10500);
const college4 = new College('SGBAU University', 'Amaravati', 2000, 9500);
const college5 = new College('JSPM College', 'Pune', 2010, 7000);

// Logging details for each college instance
console.log("Logging College Details:");
college1.display();
college2.display();
college3.display();
college4.display();
college5.display();
