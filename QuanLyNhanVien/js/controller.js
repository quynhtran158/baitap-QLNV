function getUserInfo() {
  let account = $("#tknv")[0].value;
  let name = $("#name")[0].value;
  let email = $("#email")[0].value;
  let password = $("#password")[0].value;
  let startDate = $("#datepicker")[0].value;
  let salary = $("#luongCB")[0].value * 1;
  let position = $("#chucvu")[0].value;
  let workHour = $("#gioLam")[0].value * 1;
  return new User(
    account,
    name,
    email,
    password,
    startDate,
    salary,
    position,
    workHour
  );
}

function showUserInfo(account) {
  if (account != null) {
    $("#btnThem")[0].click();
    let index = DSNV.findIndex((nv) => nv.account == account);
    let nv = DSNV[index];
    $("#tknv")[0].disabled = true;
    $("#tknv")[0].value = nv.account;
    $("#name")[0].value = nv.name;
    $("#email")[0].value = nv.email;
    $("#password")[0].value = nv.password;
    $("#datepicker")[0].value = nv.startDate;
    $("#luongCB")[0].value = nv.salary;
    $("#chucvu")[0].value = nv.position;
    $("#gioLam")[0].value = nv.workHour;
  } else {
    $("#tknv")[0].value = "";
    $("#name")[0].value = "";
    $("#email")[0].value = "";
    $("#password")[0].value = "";
    $("#datepicker")[0].value = "";
    $("#luongCB")[0].value = "";
    $("#chucvu")[0].value = "";
    $("#gioLam")[0].value = "";
  }
}

//render lai layout sau khi them data thanh cong
function render(DSNV) {
  let contentHtml = "";
  DSNV.forEach((nv) => {
    contentHtml += `
                <tr>
                    <td>${nv.account}</td>
                    <td>${nv.name}</td>
                    <td>${nv.email}</td>
                    <td>${nv.startDate}</td>
                    <td>${nv.positionName()}</td>
                    <td>${nv.totalSalary().toLocaleString()}</td>
                    <td>${nv.rank()}</td>
                    <td>
                        <button class="btn btn-warning" onclick="showUserInfo('${
                          nv.account
                        }')">Sửa</button>
                        <button class="btn btn-danger" onclick="remove('${
                          nv.account
                        }')">Xóa</button>
                    </td>
                </tr>
            `;
  });
  $("#tableDanhSach")[0].innerHTML = contentHtml;
}
// giu lai data khi user load trang
function saveLocal(DSNV) {
  localStorage.setItem("DSNV", JSON.stringify(DSNV));
}

function close() {
  $("#btnDong").click();
}
