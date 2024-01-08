function User(
  account,
  name,
  email,
  password,
  startDate,
  salary,
  position,
  workHour
) {
  this.account = account;
  this.name = name;
  this.email = email;
  this.password = password;
  this.startDate = startDate;
  this.salary = salary;
  this.position = position;
  this.workHour = workHour;

  this.totalSalary = () => {
    switch (this.position) {
      case "sep":
        return salary * 3;
      case "truong-phong":
        return salary * 2;
      default:
        return salary;
    }
  };

  this.rank = () => {
    if (this.workHour >= 192) {
      return "Xuất sắc";
    } else if (this.workHour >= 176) {
      return "Giỏi";
    } else if (this.workHour >= 160) {
      return "Khá";
    } else {
      return "Trung bình";
    }
  };

  this.positionName = () => {
    switch (position) {
      case "sep":
        return "Sếp";
      case "truong-phong":
        return "Trường phòng";
      default:
        return "Nhân viên";
    }
  };
}
