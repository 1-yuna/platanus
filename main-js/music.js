const musicContainer = document.querySelector(".music-container");
const musicBtn = document.querySelector(".music-btn");
const musicI = document.querySelector(".music-btn i");

function btnClickPlay() {
  if (musicContainer.classList.contains("play")) {
    musicContainer.classList.remove("play");
    musicI.classList.remove("fas", "fa-pause");
    musicI.classList.add("fas", "fa-play");
  } else {
    musicContainer.classList.add("play");
    musicI.classList.remove("fas", "fa-play");
    musicI.classList.add("fas", "fa-pause");
  }
}

musicBtn.addEventListener("click", btnClickPlay);
