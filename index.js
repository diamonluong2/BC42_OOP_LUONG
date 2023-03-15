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
// Hàm sort tên;
function sortbyName() {
  let isName = getElement("#sort-name").value;
  if (isName === "true") {
    dsPerson.sortPerson(true);
    dsPerson1.sortPerson(true);
    dsPerson2.sortPerson(true);
    renderStudent();
    renderCustomer();
    renderEmployee();
  } else if (isName === "false") {
    dsPerson.sortPerson(false);
    dsPerson1.sortPerson(false);
    dsPerson2.sortPerson(false);
    renderStudent();
    renderCustomer();
    renderEmployee();
  }
}

function validate() {
  // Mặc định là form hợp lệ
  let isValid = true;

  //   Kiểm tra tên điện thoại
  let name = getElement("#TenST").value;
  if (!name.trim()) {
    isValid = false;
    getElement("#tbl-name").innerHTML = "Tên không được để khoản trống";
    getElement("#tbl-name").style.display = "inline";
  } else {
    getElement("#tbl-name").innerHTML = "";
    getElement("#tbl-name").style.display = "inline";
  }

  // Kiểm tra giá tiền
  let address = getElement("#diachiST").value;
  if (!address.trim()) {
    isValid = false;
    getElement("#tbl-diachi").innerHTML = "Địa chỉ không được để khoản trống";
    getElement("#tbl-diachi").style.display = "inline";
  }

  // Kiểm tra màn hình
  let code = getElement("#maST").value;
  if (!code.trim()) {
    isValid = false;
    getElement("#tbl-code").innerHTML = "Số thứ tự không được để khoản trống";
    getElement("#tbl-code").style.display = "inline";
  } else if (!/^(?:100|[1-9][0-9]?|0)$/.test(code)) {
    isValid = false;
    getElement("#tbl-code").innerHTML = "Thứ tự phải là số";
    getElement("#tbl-code").style.display = "inline";
  } else {
    getElement("#tbl-code").innerHTML = "";
    getElement("#tbl-code").style.display = "inline";
  }

  let email = getElement("#emailST").value;
  if (!email.trim()) {
    isValid = false;
    getElement("#tbl-email").innerHTML = "Email không được để khoản trống";
    getElement("#tbl-email").style.display = "inline";
  } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
    isValid = false;
    getElement("#tbl-email").innerHTML = "Email phải là 1 định dạng @gmail.com";
    getElement("#tbl-email").style.display = "inline";
  } else {
    getElement("#tbl-email").innerHTML = "";
    getElement("#tbl-email").style.display = "inline";
  }

  let math = getElement("#diemToan").value;
  if (!math.trim()) {
    isValid = false;
    getElement("#tbl-math").innerHTML = "Điểm toán không được để khoản trống";
    getElement("#tbl-math").style.display = "inline";
  } else if (!/^(?:100|[1-9][0-9]?|0)$/.test(math)) {
    isValid = false;
    getElement("#tbl-math").innerHTML = "Điểm toán phải là số";
    getElement("#tbl-math").style.display = "inline";
  } else {
    getElement("#tbl-math").innerHTML = "";
    getElement("#tbl-math").style.display = "inline";
  }

  let physic = getElement("#diemLy").value;
  if (!physic.trim()) {
    isValid = false;
    getElement("#tbl-physic").innerHTML = "Điểm Lý không được để khoản trống";
    getElement("#tbl-physic").style.display = "inline";
  } else if (!/^(?:100|[1-9][0-9]?|0)$/.test(physic)) {
    isValid = false;
    getElement("#tbl-physic").innerHTML = "Điểm Lý phải là số";
    getElement("#tbl-physic").style.display = "inline";
  } else {
    getElement("#tbl-physic").innerHTML = "";
    getElement("#tbl-physic").style.display = "inline";
  }

  let chemistry = getElement("#diemHoa").value;
  if (!chemistry.trim()) {
    isValid = false;
    getElement("#tbl-chemistry").innerHTML =
      "Điểm hóa không được để khoản trống";
    getElement("#tbl-chemistry").style.display = "inline";
  } else if (!/^(?:100|[1-9][0-9]?|0)$/.test(chemistry)) {
    isValid = false;
    getElement("#tbl-chemistry").innerHTML = "Điểm hóa phải là số";
    getElement("#tbl-chemistry").style.display = "inline";
  } else {
    getElement("#tbl-chemistry").innerHTML = "";
    getElement("#tbl-chemistry").style.display = "inline";
  }

  return isValid;
}

function validateEP() {
  // Mặc định là form hợp lệ
  let isValid = true;

  //   Kiểm tra tên điện thoại
  let name = getElement("#TenEP").value;
  if (!name.trim()) {
    isValid = false;
    getElement("#tbl-nameEP").innerHTML = "Tên không được để khoản trống";
    getElement("#tbl-nameEP").style.display = "inline";
  } else {
    getElement("#tbl-nameEP").innerHTML = "";
    getElement("#tbl-nameEP").style.display = "inline";
  }

  // Kiểm tra giá tiền
  let address = getElement("#diachiEP").value;
  if (!address.trim()) {
    isValid = false;
    getElement("#tbl-diachiEP").innerHTML = "Địa chỉ không được để khoản trống";
    getElement("#tbl-diachiEP").style.display = "inline";
  } else {
    getElement("#tbl-diachiEP").innerHTML = "";
    getElement("#tbl-diachiEP").style.display = "inline";
  }
  // Kiểm tra màn hình
  let code = getElement("#maEP").value;
  if (!code.trim()) {
    isValid = false;
    getElement("#tbl-maEP").innerHTML = "Số thứ tự không được để khoản trống";
    getElement("#tbl-maEP").style.display = "inline";
  } else if (!/^(?:100|[1-9][0-9]?|0)$/.test(code)) {
    isValid = false;
    getElement("#tbl-maEP").innerHTML = "Thứ tự phải là số";
    getElement("#tbl-maEP").style.display = "inline";
  } else {
    getElement("#tbl-maEP").innerHTML = "";
    getElement("#tbl-maEP").style.display = "inline";
  }

  let email = getElement("#emailEP").value;
  if (!email.trim()) {
    isValid = false;
    getElement("#tbl-emailEP").innerHTML = "Email không được để khoản trống";
    getElement("#tbl-emailEP").style.display = "inline";
  } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
    isValid = false;
    getElement("#tbl-emailEP").innerHTML =
      "Email phải là 1 định dạng @gmail.com";
    getElement("#tbl-emailEP").style.display = "inline";
  } else {
    getElement("#tbl-emailEP").innerHTML = "";
    getElement("#tbl-emailEP").style.display = "inline";
  }

  let day = getElement("#count-day").value;
  if (!day.trim()) {
    isValid = false;
    getElement("#tbl-count-day").innerHTML =
      "Số ngày không được để khoản trống";
    getElement("#tbl-count-day").style.display = "inline";
  } else if (!/^(?:100|[1-9][0-9]?|0)$/.test(day)) {
    isValid = false;
    getElement("#tbl-count-day").innerHTML = "Số ngày làm phải là số";
    getElement("#tbl-count-day").style.display = "inline";
  } else {
    getElement("#tbl-count-day").innerHTML = "";
    getElement("#tbl-count-day").style.display = "inline";
  }

  let salary = getElement("#salary-day").value;
  if (!salary.trim()) {
    isValid = false;
    getElement("#tbl-salary-day").innerHTML = "Lương không được để khoản trống";
    getElement("#tbl-salary-day").style.display = "inline";
  } else if (!/^[1-9][0-9]{3,}$/.test(salary)) {
    isValid = false;
    getElement("#tbl-salary-day").innerHTML = "Lương phải là số";
    getElement("#tbl-salary-day").style.display = "inline";
  } else {
    getElement("#tbl-salary-day").innerHTML = "";
    getElement("#tbl-salary-day").style.display = "inline";
  }

  return isValid;
}

function validateCS() {
  // Mặc định là form hợp lệ
  let isValid = true;

  //   Kiểm tra tên điện thoại
  let name = getElement("#TenCS").value;
  if (!name.trim()) {
    isValid = false;
    getElement("#tbl-TenCS").innerHTML = "Tên không được để khoản trống";
    getElement("#tbl-TenCS").style.display = "inline";
  } else {
    getElement("#tbl-TenCS").innerHTML = "";
    getElement("#tbl-TenCS").style.display = "inline";
  }

  // Kiểm tra giá tiền
  let address = getElement("#diachiCS").value;
  if (!address.trim()) {
    isValid = false;
    getElement("#tbl-diachiCS").innerHTML = "Địa chỉ không được để khoản trống";
    getElement("#tbl-diachiCS").style.display = "inline";
  } else {
    getElement("#tbl-diachiCS").innerHTML = "";
    getElement("#tbl-diachiCS").style.display = "inline";
  }

  // Kiểm tra màn hình
  let code = getElement("#maCS").value;
  if (!code.trim()) {
    isValid = false;
    getElement("#tbl-maCS").innerHTML = "Số thứ tự không được để khoản trống";
    getElement("#tbl-maCS").style.display = "inline";
  } else if (!/^(?:100|[1-9][0-9]?|0)$/.test(code)) {
    isValid = false;
    getElement("#tbl-maCS").innerHTML = "Thứ tự phải là số";
    getElement("#tbl-maCS").style.display = "inline";
  } else {
    getElement("#tbl-maCS").innerHTML = "";
    getElement("#tbl-maCS").style.display = "inline";
  }

  let email = getElement("#emailCS").value;
  if (!email.trim()) {
    isValid = false;
    getElement("#tbl-emailCS").innerHTML = "Email không được để khoản trống";
    getElement("#tbl-emailCS").style.display = "inline";
  } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
    isValid = false;
    getElement("#tbl-emailCS").innerHTML =
      "Email phải là 1 định dạng @gmail.com";
    getElement("#tbl-emailCS").style.display = "inline";
  } else {
    getElement("#tbl-emailCS").innerHTML = "";
    getElement("#tbl-emailCS").style.display = "inline";
  }

  let math = getElement("#tenCTY").value;
  if (!math.trim()) {
    isValid = false;
    getElement("#tbl-tenCTY").innerHTML =
      "Tên công ty không được để khoản trống";
    getElement("#tbl-tenCTY").style.display = "inline";
  } else {
    getElement("#tbl-tenCTY").innerHTML = "";
    getElement("#tbl-tenCTY").style.display = "inline";
  }

  let physic = getElement("#giaHoaDon").value;
  if (!physic.trim()) {
    isValid = false;
    getElement("#tbl-giaHoaDon").innerHTML =
      "Giá trị hóa đơn không được để khoản trống";
    getElement("#tbl-giaHoaDon").style.display = "inline";
  } else if (!/^(?:100|[1-9][0-9]?|0)$/.test(physic)) {
    isValid = false;
    getElement("#tbl-giaHoaDon").innerHTML = "Giá trị phải là số";
    getElement("#tbl-giaHoaDon").style.display = "inline";
  } else {
    getElement("#tbl-giaHoaDon").innerHTML = "";
    getElement("#tbl-giaHoaDon").style.display = "inline";
  }

  let chemistry = getElement("#danhgia").value;
  if (!chemistry.trim()) {
    isValid = false;
    getElement("#tbl-danhgia").innerHTML = "Đánh giá không được để khoản trống";
    getElement("#tbl-danhgia").style.display = "inline";
  } else {
    getElement("#tbl-danhgia").innerHTML = "";
    getElement("#tbl-danhgia").style.display = "inline";
  }

  return isValid;
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
          onclick="selectEmployeeToUpdate('${item.code}')"
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
            onclick="selectCustomerToUpdate('${item.code}')"
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

  let isValid = validate();
  // isValid là false => form không hợp lệ => không cho phép tạo student bằng cách kết thúc hàm
  if (!isValid) {
    return;
  }
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

  let isValid = validateEP();
  // isValid là false => form không hợp lệ => không cho phép tạo student bằng cách kết thúc hàm
  if (!isValid) {
    return;
  }
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

  let isValid = validateCS();
  // isValid là false => form không hợp lệ => không cho phép tạo student bằng cách kết thúc hàm
  if (!isValid) {
    return;
  }
  dsPerson2.addPerson(customer);
  renderCustomer();
}

function selectStudentToUpdate(studentID) {
  let listST = dsPerson.persons;
  let selectedAccount = listST.find((student) => {
    return student.code === studentID;
  });
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

function selectEmployeeToUpdate(studentID) {
  let listST = dsPerson1.persons;
  let selectedAccount = listST.find((student) => {
    return student.code === studentID;
  });
  // Lấy thông tin của sinh viên tìm được để fill lên form
  getElement("#TenST").value = selectedAccount.name;
  getElement("#diachiST").value = selectedAccount.address;
  getElement("#maST").value = selectedAccount.code;
  getElement("#emailST").value = selectedAccount.email;
  getElement("#count-day").value = selectedAccount.day;
  getElement("#salary-day").value = selectedAccount.salaryperday;

  getElement("#header-EP").innerHTML = "Cập nhật sản phẩm";
  getElement("#footer-EP").innerHTML = `
  <button class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
  <button class="btn btn-primary" onclick="updateEmployee('${selectedAccount.code}')">Cập nhật</button>
`;
  $("#myModal-EP").modal("show");
}
function selectCustomerToUpdate(studentID) {
  let listST = dsPerson2.persons;
  let selectedAccount = listST.find((student) => {
    return student.code === studentID;
  });
  // Lấy thông tin của sinh viên tìm được để fill lên form
  getElement("#TenST").value = selectedAccount.name;
  getElement("#diachiST").value = selectedAccount.address;
  getElement("#maST").value = selectedAccount.code;
  getElement("#emailST").value = selectedAccount.email;
  getElement("#tenCTY").value = selectedAccount.nameCompany;
  getElement("#giaHoaDon").value = selectedAccount.bill;
  getElement("#danhgia").value = selectedAccount.estimate;

  getElement("#header-CS").innerHTML = "Cập nhật sản phẩm";
  getElement("#footer-CS").innerHTML = `
  <button class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
  <button class="btn btn-primary" onclick="updateCustomer('${selectedAccount.code}')">Cập nhật</button>
`;
  $("#myModal-CS").modal("show");
}

function updateStudent(studentCode) {
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

  let isValid = validate();
  // isValid là false => form không hợp lệ => không cho phép tạo student bằng cách kết thúc hàm
  if (!isValid) {
    return;
  }

  dsPerson.updatePerson(studentCode, student);
  renderStudent();
}
function updateEmployee(studentCode) {
  let name = getElement("#TenST").value;
  let address = getElement("#diachiST").value;
  let code = getElement("#maST").value;
  let email = getElement("#emailST").value;
  let day = getElement("#count-day").value;
  let salary = getElement("#salary-day").value;

  let employee = new Employee(name, address, code, email, day, salary);

  let isValid = validateEP();
  // isValid là false => form không hợp lệ => không cho phép tạo student bằng cách kết thúc hàm
  if (!isValid) {
    return;
  }

  dsPerson1.updatePerson(studentCode, employee);
  renderEmployee();
}
function updateCustomer(studentCode) {
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

  let isValid = validateCS();
  // isValid là false => form không hợp lệ => không cho phép tạo student bằng cách kết thúc hàm
  if (!isValid) {
    return;
  }

  dsPerson2.updatePerson(studentCode, customer);
  renderCustomer();
}

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
