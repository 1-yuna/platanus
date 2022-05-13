const logoutImg = document.querySelector(".main_low-left-img");

function outlog() {
  logoutImg.src = "img/logout2.jpg";
}

function outlog1() {
  logoutImg.src = "img/logout1.jpg";
}
logoutImg.addEventListener("mouseenter", outlog);
logoutImg.addEventListener("mouseleave", outlog1);
