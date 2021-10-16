function arrOfPersons() {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let personAnna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let personSoftuni = new Person('SoftUni');
    let personStefan = new Person('Stephan', 'Johnson', 25);
    let personGabriel = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    let outputArr = [];

    outputArr.push(personAnna);
    outputArr.push(personSoftuni);
    outputArr.push(personStefan);
    outputArr.push(personGabriel);


    return outputArr;
}

console.log(arrOfPersons());