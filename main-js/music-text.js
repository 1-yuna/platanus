const musicTitle = document.querySelector(".music-title");
const musicText = document.querySelector(".music-text");
const musicImg = document.querySelector(".music-img");
const middleText = document.querySelector(".main_middle-text");

if (getFeel === "happy") {
  const musicHappy = [
    "happy-0",
    "happy-1",
    "happy-2",
    "happy-3",
    "happy-4",
    "happy-5",
  ];

  const chooseMusicHappy =
    musicHappy[Math.floor(Math.random() * musicHappy.length)];

  console.log(chooseMusicHappy);
  musicPlay.src = `music/${chooseMusicHappy}.mp3`;

  if (chooseMusicHappy === musicHappy[0]) {
    musicTitle.innerText = "Here’s to never growing up";
    musicText.innerText = "- Avril Lavigne";
    musicImg.src = "img/happy-0.jpg";
    middleText.innerText =
      "내 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.";
  }

  if (chooseMusicHappy === musicHappy[1]) {
    musicTitle.innerText = "okay okay";
    musicText.innerText = "- Alessia cera";
    musicImg.src = "img/happy-1.jpg";
    middleText.innerText = "사람은 스스로 믿는 대로 된다.";
  }

  if (chooseMusicHappy === musicHappy[2]) {
    musicTitle.innerText = "Me Too";
    musicText.innerText = "- Meghan Trainor";
    musicImg.src = "img/happy-2.jpg";
    middleText.innerText =
      "사람은 상상하는 이상으로 자기 운명의 열쇠를 가지고 있다. ";
  }

  if (chooseMusicHappy === musicHappy[3]) {
    musicTitle.innerText = "Love Myself";
    musicText.innerText = "- Hailee Steinfeld";
    musicImg.src = "img/happy-3.jpg";
    middleText.innerText = "나 자신에게 더욱 집중하라.";
  }

  if (chooseMusicHappy === musicHappy[4]) {
    musicTitle.innerText = "Popular song";
    musicText.innerText = "- Ariana Grande & MIKA";
    musicImg.src = "img/happy-4.jpg";
    middleText.innerText =
      "무슨 일이든 할 수 있다고 생각하는 사람이 해내는 법이다.";
  }

  if (chooseMusicHappy === musicHappy[5]) {
    musicTitle.innerText = "what the hell";
    musicText.innerText = "- Avril Lavigne";
    musicImg.src = "img/happy-5.jpg";
    middleText.innerText = "남들이 당신을 어떻게 생각할까 너무 걱정하지 말라.";
  }
}

if (getFeel === "sad") {
  const musicSad = ["Sad-0", "Sad-1", "Sad-2", "Sad-3", "Sad-4"];

  const chooseMusicSad = musicSad[Math.floor(Math.random() * musicSad.length)];

  console.log(chooseMusicSad);
  musicPlay.src = `music/${chooseMusicSad}.mp3`;

  if (chooseMusicSad === musicSad[0]) {
    musicTitle.innerText = "무릎";
    musicText.innerText = "- 아이유";
    musicImg.src = "img/sad-0.jpg";
    middleText.innerText = "아팠던 만큼 보다 더 반짝일 수 있는 그대이기를";
  }

  if (chooseMusicSad === musicSad[1]) {
    musicTitle.innerText = "new normal";
    musicText.innerText = "- khalid";
    musicImg.src = "img/sad-1.jpg";
    middleText.innerText = "희망은 절대 당신을 버리지 않는다.";
  }

  if (chooseMusicSad === musicSad[2]) {
    musicTitle.innerText = "어른";
    musicText.innerText = "- 손디아(sondia)";
    musicImg.src = "img/sad-2.jpg";
    middleText.innerText = "가장 소중한 것은 나 자신임을 잊지 말자";
  }

  if (chooseMusicSad === musicSad[3]) {
    musicTitle.innerText = "밤하늘에";
    musicText.innerText = "- 담소네공방";
    musicImg.src = "img/sad-3.jpg";
    middleText.innerText = "겨울이 오면 봄은 그리 멀지 않으리";
  }

  if (chooseMusicSad === musicSad[4]) {
    musicTitle.innerText = "주저하는 연인들을 위해";
    musicText.innerText = "- 잔나비";
    musicImg.src = "img/sad-4.jpg";
    middleText.innerText =
      "빨리 도착하는 것이 목표가 아니다 힘들 땐 쉬어가라      ";
  }
}
