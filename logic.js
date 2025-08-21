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
const body = document.body;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let colorId = e.target.id;
    console.log(colorId);

    body.setAttribute("class", colorId);
  });
});

// BMI calculator-------------------------

const calcBtn = document.getElementById("calc-btn");
const resultBlock = document.getElementById("result-block");
const feedback = document.getElementById("feedback");

calcBtn.addEventListener("click", () => {
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);

  if (!isNaN(height) && !isNaN(weight)) {
    const result = parseFloat(
      (weight / ((height * height) / 10000)).toFixed(2)
    );
    // resultBlock.appendChild(document.createTextNode(`Your BMI is: ${result}`));
    resultBlock.innerText = `Your BMI is: ${result}`;
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    resultBlock.style.color = "green";
    if (result < 18.5) {
      feedback.innerText = `You need to eat more`;
    } else if (result > 30) {
      feedback.innerText = `You are spreading out, stop eating`;
    } else if (result < 30 && result >= 25) {
      feedback.innerText = `Be careful, you're getting fat`;
    } else if (result >= 18.5 && result < 25) {
      feedback.innerText = `You are fit, keep it up`;
    }
  } else {
    resultBlock.innerText = `Please enter valid info!`;
    resultBlock.style.color = "red";
    feedback.innerText = "";
  }
});

// digital clock

const timeBlock = document.getElementById("time-block");
console.log(timeBlock);

setInterval(function () {
  const time = new Date();
  const localTime = time.toLocaleTimeString();

  timeBlock.innerText = localTime;
}, 1000);

// number guessing game

const matchButton = document.getElementById("num-match-btn");
const bingo = document.getElementById("bingo");
const remainingGuesses = document.getElementById("remainingGuesses");
const previousGuessList = document.getElementById("previousGuessList");
const max = 100;
const min = 50;
let numOfGuess = 10;
let previousGuesses = [];
const randomNum = Math.ceil(Math.random() * (max - min) + min);
console.log(randomNum);
console.log(typeof randomNum);

matchButton.addEventListener("click", () => {
  const playersGuess = parseInt(document.getElementById("guess").value);
  // console.log(typeof playersGuess);

  numOfGuess--;
  previousGuesses.push(playersGuess);
  previousGuessList.innerHTML = `previously guessed numbers: ${previousGuesses}`;
  remainingGuesses.innerHTML = `Number of attempts remaining: ${numOfGuess}`;

  if (randomNum === playersGuess) {
    console.log("hello world");

    bingo.innerText = `Bingo! you guessed it correctly the correct number was: ${randomNum}`;
  } else if (randomNum > playersGuess) {
    bingo.innerText = "The number is bigger than you thought, increase a bit";
  } else if (randomNum < playersGuess) {
    bingo.innerText = "The number is smaller than you thought, decrease a bit";
  }
  document.getElementById("guess").value = "";
});
