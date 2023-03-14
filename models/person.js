class Person {
  constructor(name, address, code, email) {
    this.name = name;
    this.address = address;
    this.code = code;
    this.email = email;
  }
}

class Student extends Person {
  // Trường hợp muốn bổ xung thêm các thuộc tính chỉ thuộc về class Student, ta cần override constructor
  constructor(name, address, code, email, math, physic, chemistry) {
    // super đại diện cho class cha mà nó đang kế thừa
    // super(...): Gọi tới constructor của class cha
    super(name, address, code, email);

    // Tự định nghĩa các thuộc tính thuộc về class Sale
    this.math = math;
    this.physic = physic;
    this.chemistry = chemistry;
  }

  calcScore() {
    return (this.math + this.physic + this.chemistry) / 3;
  }

  // Override lại phương thức calcSalary của class cha
}

class Employee extends Person {
  // Trường hợp muốn bổ xung thêm các thuộc tính chỉ thuộc về class Employee, ta cần override constructor
  constructor(name, address, code, email, day, salaryperday) {
    // super đại diện cho class cha mà nó đang kế thừa
    // super(...): Gọi tới constructor của class cha
    super(name, address, code, email);

    // Tự định nghĩa các thuộc tính thuộc về class Sale
    this.day = day;
    this.salaryperday = salaryperday;
  }

  calcSalary() {
    return this.salaryperday * this.day;
  }
}
class Customer extends Person {
  // Trường hợp muốn bổ xung thêm các thuộc tính chỉ thuộc về class Customer, ta cần override constructor
  constructor(name, address, code, email, nameCompany, bill, estimate) {
    // super đại diện cho class cha mà nó đang kế thừa
    // super(...): Gọi tới constructor của class cha
    super(name, address, code, email);

    // Tự định nghĩa các thuộc tính thuộc về class Sale
    this.nameCompany = nameCompany;
    this.bill = bill;
    this.estimate = estimate;
  }
}

class listPerson {
  constructor() {
    this.persons = [];
  }
  addPerson(person) {
    this.persons.push(person);
  }
  removePerson(code) {
    this.persons = this.persons.filter((person) => person.code !== code);
  }
  updatePerson(code, update) {
    let index = this.persons.findIndex((person) => person.code === code);
    if (index !== -1) {
      this.persons[index] = update;
    }
  }
  sortPerson() {
    console.log("CHuỗi là:", this.persons);
    this.persons = this.persons.sort((personsA, personB) => {
      let firstToken = personsA.name.split(" ");
      console.log("personsA:", firstToken);
      let secondToken = personB.name.split(" ");
      console.log("personsB:", secondToken);
      return firstToken[0].localeCompare(secondToken[0]);
    });
  }
}
