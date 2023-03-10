// class Student {
//   // Phương thức khởi tạo, được tự động khởi chạy khi class được khởi tạo
//   // Dùng để khởi tạo giá trị cho các thuộc tính
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   // Khai báo phương thức
//   sayHi() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// const student = new Student("Alice", "alice@gmail.com");
// console.log(student);
// student.sayHi();

// =========== Kế thừa ==========
class Person {
  constructor(name, address, code, email) {
    this.name = name;
    this.address = address;
    this.code = code;
    this.email = email;
  }

  //   print() {
  //     console.log(`ID: ${this.id} - Name: ${this.name}`);
  //   }

  //   calcSalary() {
  //     return 3_000_000;
  //   }
}

// class Sale kế thừa class Person sẽ kế thừa toàn bộ thuộc tính và phương thức đã được định nghĩa trong class Person
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
}
// Tính đa hình thể hiện khi các class khác nhau cùng kế thừa 1 class (Marketing và Sale cùng kế thừa Employee), mà ở class cha có định nghĩa 1 phương thức nào đó (phương thức calcSalary), thì ta chắc chắn có thể gọi tới phương thức đó mà không cần quan tâm nó thuộc Marketing hay Sale
function renderPerson() {
  let name = getElement("#TenST").value;
  let address = getElement("#diachiST").value;
  let code = getElement("#maST").value;
  let email = getElement("#emailST").value;
  let math = getElement("#diemToan").value;
  let physic = getElement("#diemLy").value;
  let chemistry = getElement("#diemHoa").value;

  let name1 = getElement("#TenEP").value;
  let address1 = getElement("#diachiEP").value;
  let code1 = getElement("#maEP").value;
  let email1 = getElement("#emailEP").value;
  let day = getElement("#count-day").value;
  let salary = getElement("#salary-day").value;

  let name2 = getElement("#TenCS").value;
  let address2 = getElement("#diachiCS").value;
  let code2 = getElement("#maCS").value;
  let email2 = getElement("#emailCS").value;
  let nameCty = getElement("#tenCTY").value;
  let bill = getElement("#giaHoaDon").value;
  let estimate = getElement("#danhgia").value;

  let student = new Student(
    name,
    address,
    code,
    email,
    math,
    physic,
    chemistry
  );

  let employee = new Employee(name1, address1, code1, email1, day, salary);

  let customer = new Customer(
    name2,
    address2,
    code2,
    email2,
    nameCty,
    bill,
    estimate
  );
  console.log("chuỗi là", student);
  console.log("chuỗi là", employee);
  console.log("chuỗi là", customer);
  let dsPerson = [student];
  const html = dsPerson.reduce((result, item) => {
    return (
      result +
      `
          <tr>
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.address}</td>
            <td>${item.email}</td>
            <td>${item.math}</td>
            <td>${item.physic}</td>
            <td>${item.chemistry}</td>
          </tr>
        `
    );
  }, "");
  document.getElementById("tblDanhSachST").innerHTML = html;
  let dsPerson1 = [employee];
  const html1 = dsPerson1.reduce((result, item) => {
    return (
      result +
      `
          <tr>
            <td>${item.code1}</td>
            <td>${item.name1}</td>
            <td>${item.address1}</td>
            <td>${item.email1}</td>
            <td>${item.day}</td>
            <td>${item.salary}</td>
          </tr>
        `
    );
  }, "");

  document.getElementById("tblDanhSachEP").innerHTML = html1;
  let dsPerson2 = [customer];
  const html2 = dsPerson2.reduce((result, item) => {
    return (
      result +
      `
          <tr>
            <td>${item.code2}</td>
            <td>${item.name2}</td>
            <td>${item.address2}</td>
            <td>${item.email2}</td>
            <td>${item.nameCty}</td>
            <td>${item.bill}</td>
            <td>${item.estimate}</td>
          </tr>
        `
    );
  }, "");

  document.getElementById("tblDanhSachCS").innerHTML = html2;
}

document.getElementById("btnThemST").addEventListener("click", () => {
  getElement(".modal-title").innerHTML = "Thêm học sinh";
  getElement(".modal-footer").innerHTML = `
      <button class="btn btn-secondary" data-dismiss="modal" ">Hủy</button>
      <button class="btn btn-primary" onclick="renderPerson()">Thêm</button>
    `;
});

document.getElementById("btnThemEP").addEventListener("click", () => {
  getElement(".modal-title").innerHTML = "Thêm nhân viên";
  getElement("#footer-EP").innerHTML = `
      <button class="btn btn-secondary" data-dismiss="modal" ">Hủy</button>
      <button class="btn btn-primary" onclick="renderPerson()">Thêm</button>
    `;
});

document.getElementById("btnThemCS").addEventListener("click", () => {
  getElement(".modal-title").innerHTML = "Thêm khách hàng";
  getElement("#footer-CS").innerHTML = `
      <button class="btn btn-secondary" data-dismiss="modal" ">Hủy</button>
      <button class="btn btn-primary" onclick="renderPerson()">Thêm</button>
    `;
});

function getElement(selector) {
  return document.querySelector(selector);
}
function selectTable() {
  let tableUser = document.getElementById("table-user").value;
  let listST = document.getElementById("DanhSachST");
  let listEP = document.getElementById("DanhSachEP");
  let listCS = document.getElementById("DanhSachCS");
  if (tableUser === "DanhSachST") {
    listST.style.display = "block";
    listEP.style.display = "none";
    listCS.style.display = "none";
  } else if (tableUser === "DanhSachEP") {
    listST.style.display = "none";
    listEP.style.display = "block";
    listCS.style.display = "none";
  } else if (tableUser === "DanhSachCS") {
    listST.style.display = "none";
    listEP.style.display = "none";
    listCS.style.display = "block";
  }
  return;
}
