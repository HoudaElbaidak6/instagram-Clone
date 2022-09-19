let img = document.querySelector("img");
let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");
let toggle = document.querySelector("header>i");
let outputs = document.querySelectorAll("p");

let likeCount = localStorage.getItem("likes") == null ? 0 : localStorage.getItem("likes");
outputs[0].textContent = likeCount;
let dislikeCount = localStorage.getItem("dislikes") == null ? 0 : localStorage.getItem("dislikes");
outputs[1].textContent = likeCount;
// let dislikeCount = 0;

/* let like = localStorage.getItem("likes");
likeCount.textContent = like;
 */
img.addEventListener("dblclick", function () {
  console.log("double-click works");
  ++likeCount;
  console.log(likeCount);
  outputs[0].innerHTML = likeCount;
  // likeCounter();
  localStorage.setItem("likes", likeCount);
});

buttons[1].addEventListener("click", function () {
  dislikeCount++;
  outputs[1].textContent = dislikeCount;
  // dislikeCounter();
  localStorage.setItem("dislikes", dislikeCount);
});

buttons[0].addEventListener("click", function () {
  likeCount++;
  outputs[0].textContent = likeCount;
  // likeCounter();
  localStorage.setItem("likes", likeCount);
});

toggle.addEventListener("click", function () {
  // toggle.classList.toggle("fa-sun");
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggle.classList.replace("fa-moon", "fa-sun");
  } else {
    toggle.classList.replace("fa-sun", "fa-moon");
  }
});

/* function likeCounter() {
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
} */
// localStorage.setItem("likes",JSON.stringify(likeCount))
