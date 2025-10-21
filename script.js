// const list = document.querySelector(".list");
// const addButton = document.querySelector(".task-add-button");
// const input = document.getElementById("textInput");

// addButton.addEventListener("click", () => {
//   const value = input.value.trim();
//   if (value === "") return;

//   const li = document.createElement("li");

//   const textSpan = document.createElement("span");
//   textSpan.textContent = value;
//   textSpan.addEventListener("click", () => {
//     textSpan.classList.toggle("done");
//   });

//   const delBtn = document.createElement("button");
//   delBtn.textContent = "❌";
//   delBtn.classList.add("delete-btn");
//   delBtn.addEventListener("click", () => {
//     li.remove();
//   });

//   li.appendChild(textSpan);
//   li.appendChild(delBtn);

//   list.appendChild(li);
//   input.value = "";
// });

const list = document.querySelector(".list");
const addButton = document.querySelector(".task-add-button");
const input = document.getElementById("textInput");

let content = "";

const listItem = (content) => {
  return `<div class="item">
  <div class="item-inner">
  <input type="checkbox"></input>
  ${content}
  </div>
  <button class="delete-btn">Delete</button></div>`;
};

addButton.addEventListener("click", () => {
  const value = input.value;
  content += listItem(value);
  list.innerHTML = content;
});

const delBtn = document.querySelectorAll(".delete-btn");

delBtn.forEach.addEventListener("click", () => {});
