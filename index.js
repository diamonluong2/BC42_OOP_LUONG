// class Sale kế thừa class Person sẽ kế thừa toàn bộ thuộc tính và phương thức đã được định nghĩa trong class Person

let dsPerson = new listPerson();
let dsPerson1 = new listPerson();
let dsPerson2 = new listPerson();
// Tính đa hình thể hiện khi các class khác nhau cùng kế thừa 1 class (Marketing và Sale cùng kế thừa Employee), mà ở class cha có định nghĩa 1 phương thức nào đó (phương thức calcSalary), thì ta chắc chắn có thể gọi tới phương thức đó mà không cần quan tâm nó thuộc Marketing hay Sale
function deleteStudent(item) {
  dsPerson.removePerson(item);
  renderStudent();
}
function deleteEmployee(item) {
  dsPerson1.removePerson(item);
  renderEmployee();
}
function deleteCustomer(item) {
  dsPerson2.removePerson(item);
  renderCustomer();
}
// Hiện ds
function renderStudent() {
  let listST = dsPerson.persons;
  const html = listST.reduce((result, item) => {
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
            <td>${item.calcScore()}</td>
            <td>
            <button
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#myModal-CS"
            onclick="selectStudentToUpdate('${item.code}')"
          >
            Chỉnh sửa
            </button>
            <button
            class="btn btn-danger"
            onclick="deleteStudent('${item.code}')"
          >
            Xoá
          </button>
            </td>
          </tr>
        `
    );
  }, "");
  document.getElementById("tblDanhSachST").innerHTML = html;
}
function renderEmployee() {
  let listEP = dsPerson1.persons;
  const html1 = listEP.reduce((result, item) => {
    return (
      result +
      `
        <tr>
          <td>${item.code}</td>
          <td>${item.name}</td>
          <td>${item.address}</td>
          <td>${item.email}</td>
          <td>${item.day}</td>
          <td>${item.salaryperday}</td>
          <td>${item.calcSalary()}</td>
          <td>
          <button
          class="btn btn-primary"
          onclick="selectStudentToUpdate('${item.code}')"
        >
          Chỉnh sửa
          </button>
          <button
          class="btn btn-danger"
          onclick="deleteEmployee('${item.code}')"
        >
          Xoá
        </button>
          </td>

        </tr>
      `
    );
  }, "");

  document.getElementById("tblDanhSachEP").innerHTML = html1;
}
function renderCustomer() {
  let listST = dsPerson2.persons;
  const html2 = listST.reduce((result, item) => {
    return (
      result +
      `
          <tr>
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.address}</td>
            <td>${item.email}</td>
            <td>${item.nameCompany}</td>
            <td>${item.bill}</td>
            <td>${item.estimate}</td>
            <td>
            <button
            class="btn btn-primary"
            onclick="selectStudentToUpdate('${item.code}')"
          >
            Chỉnh sửa
            </button>
            <button
            class="btn btn-danger"
            onclick="deleteCustomer('${item.code}')"
          >
            Xoá
          </button>
            </td>
          </tr>
        `
    );
  }, "");
  document.getElementById("tblDanhSachCS").innerHTML = html2;
}

function createStudent() {
  let name = getElement("#TenST").value;
  let address = getElement("#diachiST").value;
  let code = getElement("#maST").value;
  let email = getElement("#emailST").value;
  let math = +getElement("#diemToan").value;
  let physic = +getElement("#diemLy").value;
  let chemistry = +getElement("#diemHoa").value;

  let student = new Student(
    name,
    address,
    code,
    email,
    math,
    physic,
    chemistry
  );

  dsPerson.addPerson(student);
  renderStudent();
}

function createEmployee() {
  let name1 = getElement("#TenEP").value;
  let address1 = getElement("#diachiEP").value;
  let code1 = getElement("#maEP").value;
  let email1 = getElement("#emailEP").value;
  let day = getElement("#count-day").value;
  let salary = getElement("#salary-day").value;

  let employee = new Employee(name1, address1, code1, email1, day, salary);

  dsPerson1.addPerson(employee);
  renderEmployee();
}

function createCustomer() {
  let name2 = getElement("#TenCS").value;
  let address2 = getElement("#diachiCS").value;
  let code2 = getElement("#maCS").value;
  let email2 = getElement("#emailCS").value;
  let nameCty = getElement("#tenCTY").value;
  let bill = getElement("#giaHoaDon").value;
  let estimate = getElement("#danhgia").value;

  let customer = new Customer(
    name2,
    address2,
    code2,
    email2,
    nameCty,
    bill,
    estimate
  );
  dsPerson2.addPerson(customer);
  renderCustomer();
}

function selectStudentToUpdate(studentID) {
  let listST = dsPerson.persons;
  let selectedAccount = listST.find((student) => {
    return student.code === studentID;
  });
  console.log("Selectedaccount,", selectedAccount.name);
  // Lấy thông tin của sinh viên tìm được để fill lên form
  getElement("#TenST").value = selectedAccount.name;
  getElement("#diachiST").value = selectedAccount.address;
  getElement("#maST").value = selectedAccount.code;
  getElement("#emailST").value = selectedAccount.email;
  getElement("#diemToan").value = selectedAccount.math;
  getElement("#diemLy").value = selectedAccount.physic;
  getElement("#diemHoa").value = selectedAccount.chemistry;

  getElement(".modal-title").innerHTML = "Cập nhật sản phẩm";
  getElement(".modal-footer").innerHTML = `
  <button class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
  <button class="btn btn-primary" onclick="updateStudent('${selectedAccount.code}')">Cập nhật</button>
`;
  $("#myModal-ST").modal("show");
}

function updateStudent(studentCode) {}

document.getElementById("btnThemST").addEventListener("click", () => {
  getElement(".modal-title").innerHTML = "Thêm học sinh";
  getElement(".modal-footer").innerHTML = `
      <button class="btn btn-secondary" data-dismiss="modal" ">Hủy</button>
      <button class="btn btn-primary" onclick="createStudent()">Thêm</button>
    `;
});

document.getElementById("btnThemEP").addEventListener("click", () => {
  getElement(".modal-title").innerHTML = "Thêm nhân viên";
  getElement("#footer-EP").innerHTML = `
      <button class="btn btn-secondary" data-dismiss="modal" ">Hủy</button>
      <button class="btn btn-primary" onclick="createEmployee()">Thêm</button>
    `;
});

document.getElementById("btnThemCS").addEventListener("click", () => {
  getElement(".modal-title").innerHTML = "Thêm khách hàng";
  getElement("#footer-CS").innerHTML = `
      <button class="btn btn-secondary" data-dismiss="modal" ">Hủy</button>
      <button class="btn btn-primary" onclick="createCustomer()">Thêm</button>
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
