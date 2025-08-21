const checkbox = document.getElementById("toggle");
const button = document.getElementById("orange-btn");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    // console.log("checked");
    button.classList.add("visual-effect");
  } else {
    button.classList.remove("visual-effect");
  }
});

const submitBtn = document.getElementById("submit-btn");
const commentSection = document.getElementById("comment-box");

submitBtn.addEventListener("click", () => {
  const commentTextArea = document.getElementById("comment-text-area");
  const newComment = commentTextArea.value.trim();

  if (!newComment) {
    alert("empty comments are not supported!");
    return;
  }

  const newCommentBlock = document.createElement("p");
  newCommentBlock.innerText = newComment;
  newCommentBlock.setAttribute("class", "comments");

  commentSection.appendChild(newCommentBlock);

  commentTextArea.value = "";
});

submitBtn.addEventListener("mouseenter", () => console.log("hello there"));

// console.log(itemsCollection);

// for (const item of itemsCollection) {
//     item.addEventListener('click', () => {
//         console.log(item);

//     })
// }

const orderedList = document.getElementById("ordered-list");

function clickUtility(parent, eventType, handler) {
  // const itemsCollection = parent.children;
  parent.addEventListener(eventType, handler);
}

const classNameLi = document.querySelector(".items").getAttribute("class");
console.log(classNameLi);

clickUtility(orderedList, "click", function (event) {
  console.log(event);

  if (event.target.tagName === "LI") {
    event.target.parentNode.removeChild(event.target);
  }
});

const liItem = document.querySelector(".items").innerHTML;

const createBtn = document.getElementById("create-btn");
createBtn.addEventListener("click", () => {
  const newListItem = document.createElement("li");
  newListItem.appendChild(document.createTextNode("new item"));

  const orderedList = document.getElementById("ordered-list");
  orderedList.appendChild(newListItem);
  newListItem.setAttribute("class", classNameLi);
});

const secondItem = document.querySelector("li:nth-child(3)"); //- It means “select the <ol> element if it is the second child of its parent.”

const anotherNewItem = document.createElement("li");
anotherNewItem.appendChild(document.createTextNode("item77"));
secondItem.replaceWith(anotherNewItem);
anotherNewItem.setAttribute("class", classNameLi);
let nextItem = anotherNewItem.nextElementSibling;

while (nextItem) {
  console.log(nextItem);
  console.log(nextItem.nodeName);
  nextItem = nextItem.nextElementSibling;
}

const buttons = document.querySelectorAll(".button");
const body = document.getElementById("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let colorId = e.target.id;
    console.log(colorId);

    body.setAttribute("class", colorId);
  });
});
