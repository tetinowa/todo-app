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
