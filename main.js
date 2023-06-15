const noContent = document.querySelectorAll(".na")[0];
const memoModal = document.querySelectorAll(".new-memo")[0];
const fab = document.getElementById("fab");

const memoHead = document.getElementById("memo-head");
const memoText = document.getElementById("memo-text");
const priority = document.getElementById("priority");
const deadline = document.getElementById("deadline");
var existingData = localStorage.getItem("memo");
if (existingData) {
  showData();
}

function showData() {
  let ls = localStorage.getItem("memo");
  if (ls) {
    let tsk = document.createElement("div");
    tsk.classList.add("task");
    let hd = document.createElement("div");
    hd.classList.add("head");
    let del = document.createElement("div");
    del.classList.add("task-delete");
    let ico = document.createElement("div");
    ico.classList.add("icon");
    ico.innerText = "delete";
    let txt = document.createElement("p");
    txt.classList.add("task-text");
    txt.innerText = "delete";
    let adnl = document.createElement("additional");
    adnl.classList.add("additional");
    let prty = document.createElement("priority");
    prty.classList.add("priority");
    let ddln = document.createElement("deadline");
    ddln.classList.add("deadline");
  }
}

let data = {};
memoHead.onkeyup = (e) => {
  data.head = e.target.value;
  console.log(data);
};
memoText.onkeyup = (e) => {
  data.text = e.target.value;
  console.log(data);
};
priority.onchange = (e) => {
  data.priority = e.target.value;
  console.log(data);
};
deadline.onchange = (e) => {
  data.deadline = e.target.value;
  console.log(data);
};
const addTodo = document.querySelectorAll(".add-to-do")[0];
class Modal {
  constructor(header, content, onOkClick, onCancelClick) {
    const jsx = document.createElement("div");
    jsx.classList.add("modal");
    let head = document.createElement("div");
    head.classList.add("modal-header");
    head.innerText = header;
    let txt = document.createElement("div");
    txt.innerText = content;
    txt.classList.add("modal-text");
    jsx.appendChild(head);
    jsx.appendChild(txt);
    let cancel = document.createElement("button");
    cancel.innerText = "Cancel";
    cancel.classList.add("cancel-btn");
    cancel.onclick = function () {
      onCancelClick();
      return onAbort();
    };
    const ok = document.createElement("button");
    ok.innerText = "Ok";
    ok.onclick = function () {
      return onOkClick();
    };
    ok.classList.add("ok-btn");
    const actionBtn = document.createElement("div");
    actionBtn.classList.add("action-btns");
    jsx.appendChild(actionBtn);
    actionBtn.append(ok, cancel);

    function onAbort() {
      document.body.removeChild(jsx);
    }
    return jsx;
  }
}

fab.onclick = function () {
  return showNewMemo();
};

function showNewMemo() {
  memoModal.style.transform = "translate(-50%, -50%) scale(1)";
}

addTodo.addEventListener("click", (e) => {
  if (data.head && data.text && data.deadline && data.priority) {
    let ls = localStorage;
    let d = ls.getItem("memo");
    if (d) {
      ls.setItem("memo", JSON.stringify(...d, data));
    } else {
      ls.setItem("memo", JSON.stringify(data));
    }
    console.log(data.head, data.text, data.deadline, data.priority);
    data = {};
    memoHead.value = "";
    memoText.value = "";
    priority.value = "default";
    deadline.value = "";
  } else {
    alert("Enter all the data to save the Memo.");
  }
});
