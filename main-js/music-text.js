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
    middleText.innerText =
      "무슨 일이든 할 수 있다고 생각하는 사람이 해내는 법이다.";
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
