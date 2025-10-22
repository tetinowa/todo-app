// // const list = document.querySelector(".list");
// // const addButton = document.querySelector(".task-add-button");
// // const input = document.getElementById("textInput");

// // addButton.addEventListener("click", () => {
// //   const value = input.value.trim();
// //   if (value === "") return;

// //   const li = document.createElement("li");

// //   const textSpan = document.createElement("span");
// //   textSpan.textContent = value;
// //   textSpan.addEventListener("click", () => {
// //     textSpan.classList.toggle("done");
// //   });

// //   const delBtn = document.createElement("button");
// //   delBtn.textContent = "❌";
// //   delBtn.classList.add("delete-btn");
// //   delBtn.addEventListener("click", () => {
// //     li.remove();
// //   });

// //   li.appendChild(textSpan);
// //   li.appendChild(delBtn);

// //   list.appendChild(li);
// //   input.value = "";
// // });

// const list = document.querySelector(".list");
// const addButton = document.querySelector(".task-add-button");
// const input = document.getElementById("textInput");

// let content = "";

// const listItem = (content) => {
//   return `<div class="item">
//   <div class="item-inner">
//   <input type="checkbox"></input>
//   ${content}
//   </div>
//   <button class="delete-btn">Delete</button></div>`;
// };

// addButton.addEventListener("click", () => {
//   const value = input.value;
//   content += listItem(value);
//   list.innerHTML = content;
// });

// const delBtn = document.querySelectorAll(".delete-btn");

// delBtn.forEach.addEventListener("click", () => {});

const list = document.querySelector(".list");
const input = document.getElementById("textInput");
const addBtn = document.querySelector(".task-add-button");
const buttons = document.querySelectorAll(".filter-container .filter-cont");
const checkbox = document.querySelectorAll(".checkbox");

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

  deleteBtns.forEach((btn, i) => {
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

// checkbox.forEach ((btn, i) => {
//   .addEventListener("click", () => {
// })
