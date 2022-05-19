const memoForm = document.querySelector(".main_low-memo-form");
const memoInput = document.querySelector(".main_low-memo-input");
const memoUl = document.querySelector(".main_low-memo-list-box");
let newMemoList = [];

function lineClick(e) {
  let clicklI = e.target.parentElement;
  clicklI = clicklI.parentElement;
  clicklI.classList.toggle("main_low-memo-text-line");
}
function lineClicki(e) {
  let clicklI = e.target.parentElement;
  clicklI = clicklI.parentElement.parentElement;
  clicklI.classList.toggle("main_low-memo-text-line");
}

//li 삭제
function deleteMemo(e) {
  let clicklI = e.target.parentElement;
  clicklI = clicklI.parentElement;
  newMemoList = newMemoList.filter((memo) => memo.id !== parseInt(clicklI.id));
  clicklI.remove();
  saveDB();
}

function deleteMemoi(e) {
  let clicklI = e.target.parentElement;
  clicklI = clicklI.parentElement.parentElement;
  newMemoList = newMemoList.filter((memo) => memo.id !== parseInt(clicklI.id));
  clicklI.remove();
  saveDB();
}

//미니데베에 저장
function saveDB() {
  localStorage.setItem("new_DB", JSON.stringify(newMemoList));
}

//li 생성
function newList(newMemoObj) {
  const li = document.createElement("li");
  li.id = newMemoObj.id;
  li.classList.add("main_low-memo-list");
  const p = document.createElement("p");
  p.classList.add("main_low-memo-text");
  const div = document.createElement("div");
  div.classList.add("main_low-memo-text-btn");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  const i1 = document.createElement("i");
  i1.classList.add("main_low-memo-text-i1", "fas", "fa-check", "fa-xs");
  const i2 = document.createElement("i");
  i2.classList.add("main_low-memo-text-i2", "far", "fa-trash-alt", "fa-sm");

  p.innerText = newMemoObj.text;
  button1.appendChild(i1);
  button2.appendChild(i2);
  div.appendChild(button1);
  div.appendChild(button2);
  li.appendChild(p);
  li.appendChild(div);

  memoUl.appendChild(li);

  button1.addEventListener("click", lineClick);
  button2.addEventListener("click", deleteMemo);
  i1.addEventListener("click", lineClicki);
  i2.addEventListener("click", deleteMemoi);
}

//리스트에 저장
function listSave(e) {
  e.preventDefault();
  const newMemo = memoInput.value;
  memoInput.value = "";
  const newMemoObj = {
    text: newMemo,
    id: Date.now(),
  };
  newMemoList.push(newMemoObj);
  saveDB();
  newList(newMemoObj);
}
memoForm.addEventListener("submit", listSave);

const savedMemo = localStorage.getItem("new_DB");

//새로고침 후, list 다시 불러오기
if (savedMemo !== null) {
  const parsedMemo = JSON.parse(savedMemo);
  newMemoList = parsedMemo;
  parsedMemo.forEach(newList);
}
