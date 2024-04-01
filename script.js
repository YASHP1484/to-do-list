let sideBar = document.getElementById("side");
let main = document.getElementsByTagName("main");
let sun = document.getElementById("sunrise");
let p = document.getElementById("pblock");
let span = document.getElementById("spann");
console.log("yash");
let openBar = document.createElement("i");
openBar.classList.add("fa-solid", "fa-bars", "openbar");
let search = document.getElementById("searchBar");

let serchDiv = document.getElementById("topSearchDiv");

function searchClick() {
  var span1 = document.createElement("span");
  span1.classList.add("closeBtn");
  search.style.borderRadius = "0";
  var text = document.createTextNode("\u00D7");
  span1.appendChild(text);
  serchDiv.appendChild(span1);
  search.style.width = "540px";
}
search.addEventListener("click", searchClick, { once: true });

let spanCloseBtn = document.querySelector(".closeBtn");
function removeEle() {
  console.log("test");
  search.style.width = "200px";
}
if (spanCloseBtn) {
  console.log(spanCloseBtn);
  spanCloseBtn.addEventListener("click", function () {
    console.log("test");
  });
} else {
  console.log("test3");
}
console.log("tesfsdfs");
function closemenu() {
  sideBar.style.width = "0";
  sideBar.style.transition = "0.5s";
  sun.replaceWith(openBar);
  openBar.style.display = "inline-block";
  sun.style.display = "none";
}

function openMenu() {
  sideBar.style.width = "20%";
  openBar.style.display = "none";
  openBar.replaceWith(sun);
  sun.style.display = "inline-block";
  sun.style.transition = "1s";
}

openBar.addEventListener("click", openMenu);

let inputText = document.getElementById("text");
let content = document.getElementById("listCont");
let btn = document.getElementsByClassName("add-btn");

function createCopy() {
  if (inputText.value === "") {
    alert("you must write something");
  } else {
    var createDiv = document.createElement("div");
    createDiv.classList.add("main-list");
    content.appendChild(createDiv);

    var createLabel = document.createElement("label");
    createLabel.classList.add("task");
    createLabel.innerHTML = inputText.value;
    createDiv.appendChild(createLabel);

    var span = document.createElement("span");
    span.classList.add("span");

    var text = document.createTextNode("\u00D7");
    span.appendChild(text);
    createLabel.appendChild(span);

    var createUl = document.createElement("ul");
    createUl.classList.add("icons");
    createDiv.appendChild(createUl);

    var createLi = document.createElement("li");
    createUl.appendChild(createLi);

    var creteA = document.createElement("a");
    createLi.appendChild(creteA);

    let creatAb = document.createElement("a");
    createLi.appendChild(creatAb);

    let creatAc = document.createElement("a");
    createLi.appendChild(creatAc);

    let createIa = document.createElement("i");
    createIa.classList.add("fa-solid", "fa-bell");
    creteA.appendChild(createIa);

    let createIb = document.createElement("i");
    createIb.classList.add("fa-solid", "fa-repeat");
    creatAb.appendChild(createIb);

    let createIc = document.createElement("i");
    createIc.classList.add("fa-solid", "fa-calendar-days");
    creatAc.appendChild(createIc);
  }

  function handelClick(e) {
    if ((e.target = createLabel)) {
      createLabel.classList.toggle("checked");
    } else if ((inputText.value = "")) {
      alert("you must write something");
    }
  }
  function handle(e) {
    if ((e.target = span)) {
      createDiv.style.display = "none";
    }
  }
  createLabel.addEventListener("click", handelClick);
  span.addEventListener("click", handle);
}

let groupEle = document.getElementById("group");
let rightBar = document.getElementById("right");
let head = document.getElementById("closeSuges");

var span1 = document.createElement("span");
span1.classList.add("span");

var text1 = document.createTextNode("\u00D7");
span1.appendChild(text1);
head.appendChild(span1);

function rightSugestions() {
  rightBar.style.display = "block";
  rightBar.style.width = "40%";
  groupEle.style.transition = "0.5s ease 2s";
}
groupEle.addEventListener("click", rightSugestions);

function close() {
  rightBar.style.display = "none";
}
span1.addEventListener("click", close);
