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
