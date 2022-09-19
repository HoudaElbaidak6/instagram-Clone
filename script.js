let img = document.querySelector("img");
let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");
let toggle = document.querySelector("header>i");

/* let likeBtn = document.getElementById("likeBtn");
let dislikeBtn = document.getElementById("dislikeBtn"); */
let outputs = document.querySelectorAll("p");

/* let likeOutput = document.getElementById("likesP");
let dislikeOutput = document.getElementById("dislikeP"); */
let likeCount = 0;
let dislikeCount = 0;

img.addEventListener("dblclick", function () {
  //   alert("it was double clicked");
  console.log("double-click works");
  likeCount++;
  console.log(likeCount);
  // outputs[0].textContent = likeCount;
  likeCounter();
});

buttons[1].addEventListener("click", function () {
  dislikeCount++;
  outputs[1].textContent = dislikeCount;
  dislikeCounter();
});

buttons[0].addEventListener("click", function () {
  likeCount++;
  // outputs[0].textContent = likeCount;
  likeCounter();
});

toggle.addEventListener("click", function () {
  toggle.classList.toggle("fa-sun");
  body.classList.toggle("dark-mode");
  console.log("clicked");
});

function likeCounter() {
  if (localStorage.likeCount) {
    localStorage.likeCount = Number(localStorage.likeCount) + 1;
  } else {
    localStorage.likeCount = 1;
  }
  outputs[0].innerHTML = localStorage.likeCount;
}

function dislikeCounter() {
  if (localStorage.dislikeCount) {
    localStorage.dislikeCount = Number(localStorage.dislikeCount) + 1;
  } else {
    localStorage.dislikeCount = 1;
  }
  outputs[1].innerHTML = localStorage.dislikeCount;
}
// localStorage.setItem("likes",JSON.stringify(likeCount))
