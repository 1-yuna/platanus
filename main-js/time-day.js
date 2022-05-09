const clock = document.querySelector(".main_high-time-box p");

function getclock() {
  const date = new Date(); // 시간과 날짜 불러오기
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getclock(); // 1초 딜레이 방지
setInterval(getclock, 1000); //1초 지날때마다 실행
