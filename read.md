class Person {
constructor(name, address, id, email) {
this.name = name;
this.address = address;
this.id = id;
this.email = email;
}
}

class Student extends Person {
constructor(name, address, id, email, math, physics, chemistry) {
super(name, address, id, email);
this.math = math;
this.physics = physics;
this.chemistry = chemistry;
}

calculateAverage() {
return (this.math + this.physics + this.chemistry) / 3;
}
}

class Employee extends Person {
constructor(name, address, id, email, workDays, dailySalary) {
super(name, address, id, email);
this.workDays = workDays;
this.dailySalary = dailySalary;
}

calculateSalary() {
return this.workDays \* this.dailySalary;
}
}

class Customer extends Person {
constructor(name, address, id, email, companyName, invoiceValue, rating) {
super(name, address, id, email);
this.companyName = companyName;
this.invoiceValue = invoiceValue;
this.rating = rating;
}
}

class ListPerson {
constructor() {
this.persons = [];
}

addPerson(person) {
this.persons.push(person);
}

removePersonById(id) {
this.persons = this.persons.filter((person) => person.id !== id);
}

updatePersonById(id, updatedPerson) {
const index = this.persons.findIndex((person) => person.id === id);
if (index !== -1) {
this.persons[index] = updatedPerson;
}
}

sortByFullName() {
this.persons.sort((person1, person2) => {
const fullName1 = person1.name.split(" ").reverse().join(" ");
const fullName2 = person2.name.split(" ").reverse().join(" ");
return fullName1.localeCompare(fullName2);
});
}

filterByType(type) {
return this.persons.filter((person) => person instanceof type);
}
}

const listPerson = new ListPerson();

// add persons to list
const student1 = new Student("John Doe", "123 Main St", "001", "john.doe@example.com", 90, 85, 95);
listPerson.addPerson(student1);

const employee1 = new Employee("Jane Smith", "456 Park Ave", "002", "jane.smith@example.com", 20, 50);
listPerson.addPerson(employee1);

const customer1 = new Customer("Acme Inc.", "789 Broadway", "003", "info@acme.com", "Acme Inc.", 5000, 4.5);
listPerson.addPerson(customer1);

// remove person from list
listPerson.removePersonById("002");

// update person in list
const updatedStudent1 = new Student("John Doe Jr.", "123 Main St", "001", "john.doe@example.com", 85, 80, 90);
listPerson.updatePersonById("001", updatedStudent1);

// sort list by full name
listPerson.sortByFullName();

// filter list by type
const students = listPerson.filterByType(Student);

// calculate average for each student in filtered list
students.forEach((student) => {
console.log(`${student.name}: ${student.calculateAverage()}`);
});

// filter list by type
const employees = listPerson.filterByType(Employee);

// calculate salary for each employee in filtered list
employees.forEach((employee) => {
console.log(`${employee
