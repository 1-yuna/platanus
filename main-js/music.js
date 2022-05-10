const musicContainer = document.querySelector(".music-container");
const musicBtn = document.querySelector(".music-btn");
const musicI = document.querySelector(".music-btn i");
const musicPlay = document.querySelector(".music-play");
const musicProgressContainer = document.querySelector(
  ".music-progress-container"
);
const musicProgress = document.querySelector(".music-progress");

//오디오 진행률 마음대로 설정
function setProgress(event) {
  const width = this.clientWidth; //너비 가져오기
  const clickX = event.offsetX; // x축에서 클릭한 위치 확인
  const duration = musicPlay.duration; // 총 재생시간 얻음

  //현재 시간 구하기
  musicPlay.currentTime = (clickX / width) * duration; //현재시간을
}

// 오디오 재생 시 bar width 바뀜
function updateProgress(event) {
  const { duration, currentTime } = event.srcElement; // 총 시간, 현재 시간
  const progressPercent = (currentTime / duration) * 100; // 100% 중 몇프로 채워졌는지
  musicProgress.style.width = `${progressPercent}%`;
}

//버튼 클릭시 사진 회전, 아이콘 change, 음악 재생
function btnClickPlay() {
  if (musicContainer.classList.contains("play")) {
    musicContainer.classList.remove("play");
    musicI.classList.remove("fas", "fa-pause");
    musicI.classList.add("fas", "fa-play");
    musicPlay.pause();
  } else {
    musicContainer.classList.add("play");
    musicI.classList.remove("fas", "fa-play");
    musicI.classList.add("fas", "fa-pause");
    musicPlay.play();
  }
}

musicBtn.addEventListener("click", btnClickPlay);
musicPlay.addEventListener("timeupdate", updateProgress);
musicProgressContainer.addEventListener("click", setProgress);
