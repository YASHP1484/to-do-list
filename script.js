let sideBar = document.getElementById("side");
let main = document.getElementsByTagName("main");
let sun = document.getElementById("sunrise");
let p = document.getElementById("pblock");
let span = document.getElementById("span");

let openBar = document.createElement("i");
openBar.classList.add("fa-solid", "fa-bars", "openbar");

let search = document.getElementById("searchBar");
let serchDiv = document.getElementById("topSearchDiv");
let spanCloseBtn;
let span1;
let inputval = [] || localStorage.getItem("inputVal");
let store = [] || localStorage.getItem("div");

function searchClick() {
  if (!document.getElementById("closeBt")) {
    span1 = document.createElement("span");
    span1.classList.add("closeBtn");
    span1.setAttribute("id", "closeBt");
    search.style.borderRadius = "0";
    let text = document.createTextNode("\u00D7");
    span1.appendChild(text);
    serchDiv.appendChild(span1);
    search.style.width = "540px";
  }
  spanCloseBtn = document.querySelector("#closeBt");
  spanCloseBtn.addEventListener("click", removeEle);
}
search.addEventListener("click", searchClick, {});

function removeEle() {
  console.log("test");
  search.style.width = "200px";
  console.log(spanCloseBtn);
  search.value = "";
  serchDiv.removeChild(span1);
}

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

    var response = document.createElement("div");
    response.classList.add("getResponse");
    createDiv.appendChild(response);

    var createLabel = document.createElement("label");
    createLabel.classList.add("task");
    createLabel.innerHTML = inputText.value;
    response.appendChild(createLabel);

    var span = document.createElement("span");
    span.classList.add("span");

    var text = document.createTextNode("\u00D7");
    span.appendChild(text);
    response.appendChild(span);

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
    inputval.push(createLabel.innerHTML);
    let create = createDiv.innerHTML;
    inputText.value = "";
    if (!store.includes(create)) {
      store.push(JSON.stringify(createDiv.innerHTML));
      console.log(store);
    }
  }
  localStorage.setItem("inputVal", inputval);
  localStorage.setItem("div", store);

  function handelClick(e) {
    if ((e.target = createLabel.innerHTML)) {
      createLabel.classList.toggle("checked");
      createLabel.classList.toggle("label-checked-text");
      completedTask();
    } else if ((inputText.value = "")) {
      alert("you must write something");
    }
  }
  let task = document.getElementById("completedTaskCont");
  let heading = document.querySelector("#headingOneTime");

  function completedTask() {
    heading.style.display = "none";

    if (heading.style.display) {
      // let heading = document.createElement("h3");
      // heading.textContent = "completed";
      // task.appendChild(heading);
      heading.style.display = "block";
    }

    task.appendChild(createDiv);
    
    // let completeTaskDiv = document.createElement("div");
    // completeTaskDiv.classList.add("mainList");
    // task.appendChild(completeTaskDiv);

    // let resp = document.createElement("div");
    // resp.classList.add("getTextResponse");
    // completeTaskDiv.appendChild(resp);

    // let createLabelCompleteTask = document.createElement("label");
    // createLabelCompleteTask.classList.add("task-completed", "checked");
    // createLabelCompleteTask.textContent = createLabel.innerHTML;
    // resp.appendChild(createLabelCompleteTask);
    // createDiv.remove();
  }
  function moveToNotCompleted() {}

  function handle(e) {
    if ((e.target = span)) {
      createDiv.style.display = "none";
    }
  }
  createLabel.addEventListener("click", handelClick);
  span.addEventListener("click", handle);
}

let groupEle = document.getElementById("group");
let sortButn = document.getElementById("sortBtn");

let rightBar = document.getElementById("right");
let head = document.getElementById("closeSuges");

var span2 = document.createElement("span");
span2.classList.add("span");

var text1 = document.createTextNode("\u00D7");
span2.appendChild(text1);
head.appendChild(span2);

function rightSugestions() {
  rightBar.style.display = "block";
  rightBar.style.width = "40%";
}
groupEle.addEventListener("click", rightSugestions);
sortButn.addEventListener("click", rightSugestions);

function close() {
  rightBar.style.display = "none";
}
span2.addEventListener("click", close);
