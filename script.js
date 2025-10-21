const tasks = [];
const list = document.querySelectors(".list");
const addButton = document.querySelector(".task-add-button");
const input = document.getElementById("textInput");

let count = 0;

addButton.addEventListener("click", () => {
  count++;

  for (let i = 0; i < count; i++) {
    const value = input.value;
    list.innerHTML = value;
  }
});


const list = document.querySelector(".list");
const addButton = document.querySelector(".task-add-button");
const input = document.getElementById("textInput");

addButton.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;

  const li = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = value;
  textSpan.addEventListener("click", () => {
    textSpan.classList.toggle("done");
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.classList.add("delete-btn");
  delBtn.addEventListener("click", () => {
    li.remove();
  });


  li.appendChild(textSpan);
  li.appendChild(delBtn);

  list.appendChild(li);
  input.value = "";
});
