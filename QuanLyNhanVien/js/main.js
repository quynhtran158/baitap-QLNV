let json = localStorage.getItem("DSNV");
let DSNV = json ? JSON.parse(json) : [];

// Ensure DSNV is always an array
DSNV = Array.isArray(DSNV)
  ? DSNV.map((nv) => new User(...Object.values(nv)))
  : [];
console.log(" DSNV:", DSNV);
render(DSNV);

function add() {
  let nv = getUserInfo();
  DSNV.push(nv);
  render(DSNV);
  close();
  saveLocal(DSNV);
}

function remove(account) {
  let index = DSNV.findIndex((nv) => nv.account == account);
  DSNV.splice(index, 1);
  saveLocal(DSNV);
  render(DSNV);
}

function update() {
  let nv = getUserInfo();
  if (DSNV) {
    let index = DSNV.findIndex((user) => user.account == nv.account);
    DSNV[index] = nv;
    saveLocal(DSNV);
    render(DSNV);
    close();
  }
}

function ranking() {
  let rank = $("#searchName")[0].value.toLowerCase();
  let filter = DSNV.filter((e) => e.rank().toLowerCase().includes(rank));
  render(filter);
}
