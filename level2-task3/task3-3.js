const inputBox = document.getElementById("input");
const ContainerBox = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("you should write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    ContainerBox.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

ContainerBox.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", ContainerBox.innerHTML);
}

function showlist() {
  ContainerBox.innerHTML = localStorage.getItem("data");
}
showlist();
