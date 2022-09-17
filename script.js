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
  outputs[0].textContent = likeCount;
});

buttons[1].addEventListener("click", function () {
  dislikeCount++;
  outputs[1].textContent = dislikeCount;
});

buttons[0].addEventListener("click", function () {
  likeCount++;
  outputs[0].textContent = likeCount;
});

toggle.addEventListener("click", function () {
  toggle.classList.toggle("fa-moon");
  body.classList.toggle("dark-mode")
});
