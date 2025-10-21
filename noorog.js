const list = document.querySelector(".list");
const input = document.querySelector("input");
const addBtn = document.querySelector(".create-btn");
const buttons = document.querySelectorAll(".buttons button");

let content = [];
let type = "All";

let id = 1;

const ListItem = (item) => {
  return `
    <div class="item">
      <input class="checkbox" type="checkbox" ${item.isDone ? "checked" : ""} />
      <p>${item.text}</p>
      <button class="delete-btn">Delete</button>
    </div>
  `;
};

addBtn.addEventListener("click", () => {
  content.push({
    id: id,
    text: input.value,
    isDone: false,
  });

  id++;

  console.log(content);

  render();
});

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("chosen");
    });

    btn.classList.add("chosen");

    if (i === 0) {
      type = "All";
    } else if (i === 1) {
      type = "Active";
    } else {
      type = "Completed";
    }

    render();
  });
});

const render = () => {
  const elements = content
    .filter((item) => {
      if (type === "All") return true;
      if (type === "Active") return item.isDone === false;
      return item.isDone === true;
    })
    .map((item) => ListItem(item))
    .join("");

  list.innerHTML = elements;

  addListeners();
};

const addListeners = () => {
  const deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      content = content.filter((item, index) => index !== i);
      render();
    });
  });

  const checkboxes = document.querySelectorAll(".checkbox");

  checkboxes.forEach((checkbox, i) => {
    checkbox.addEventListener("click", () => {
      content[i].isDone = !content[i].isDone;
      render();
    });
  });
};
