const musicTitle = document.querySelector(".music-title");
const musicText = document.querySelector(".music-text");
const musicImg = document.querySelector(".music-img");
const middleText = document.querySelector(".main_middle-text");
const mainLowLeftlogoutI = document.querySelector(".main_low-left-logout-i");

if (getFeel === "happy") {
  mainLowLeftlogoutI.innerText = "💛";
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
  mainLowLeftlogoutI.innerText = "💙";
  const musicSad = ["Sad-0", "Sad-1", "Sad-2", "Sad-3", "Sad-4"];

  const chooseMusicSad = musicSad[Math.floor(Math.random() * musicSad.length)];

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

if (getFeel === "angry") {
  mainLowLeftlogoutI.innerText = "💔";
  const musicAngry = [
    "angry-0",
    "angry-1",
    "angry-2",
    "angry-3",
    "angry-4",
    "angry-5",
  ];

  const chooseMusicAngry =
    musicAngry[Math.floor(Math.random() * musicAngry.length)];

  musicPlay.src = `music/${chooseMusicAngry}.mp3`;

  if (chooseMusicAngry === musicAngry[0]) {
    musicTitle.innerText = "꺼져";
    musicText.innerText = "- 형돈이와 대준이";
    musicImg.src = "img/angry-0.jpg";
    middleText.innerText = "참을 인 세 번이면 호구";
  }

  if (chooseMusicAngry === musicAngry[1]) {
    musicTitle.innerText = "챔피언";
    musicText.innerText = "- 싸이";
    musicImg.src = "img/angry-1.jpg";
    middleText.innerText = "피할 수 없으면 즐겨라";
  }

  if (chooseMusicAngry === musicAngry[2]) {
    musicTitle.innerText = "abcdefu";
    musicText.innerText = "- GAYLE";
    musicImg.src = "img/angry-2.jpg";
    middleText.innerText = "너의 적을 용서하되 그 새끼의 이름은 기억해둬라";
  }

  if (chooseMusicAngry === musicAngry[3]) {
    musicTitle.innerText = "good 4 u";
    musicText.innerText = "- Olivia Rodrigo";
    musicImg.src = "img/angry-3.jpg";
    middleText.innerText = "헌신하면 헌신짝 된다.";
  }

  if (chooseMusicAngry === musicAngry[4]) {
    musicTitle.innerText = "Thriving";
    musicText.innerText = "- Upsahl";
    musicImg.src = "img/angry-4.jpg";
    middleText.innerText = "가는 말이 고우면 얕본다.";
  }

  if (chooseMusicAngry === musicAngry[5]) {
    musicTitle.innerText = "Break My Heart Myself";
    musicText.innerText = "- Bebe Rexha";
    musicImg.src = "img/angry-5.jpg";
    middleText.innerText =
      "곤경에 처한 사람을 도와주면 걔가 나중에 또 곤경에 처했을 때 널 떠올릴 거다.";
  }
}

if (getFeel === "love") {
  mainLowLeftlogoutI.innerText = "💗";
  const musicLove = ["love-0", "love-1", "love-2", "love-3", "love-4"];

  const chooseMusicLove =
    musicLove[Math.floor(Math.random() * musicLove.length)];

  musicPlay.src = `music/${chooseMusicLove}.mp3`;

  if (chooseMusicLove === musicLove[0]) {
    musicTitle.innerText = "Settle For Less";
    musicText.innerText = "- Before You Exit";
    musicImg.src = "img/love-0.jpg";
    middleText.innerText =
      "사랑받고 싶다면 사랑하라, 그리고 사랑스럽게 행동하라";
  }

  if (chooseMusicLove === musicLove[1]) {
    musicTitle.innerText = "옥탑방";
    musicText.innerText = "- N.Flying(엔플라잉)";
    musicImg.src = "img/love-1.jpg";
    middleText.innerText = "사랑은 무엇보다도 자신을 위한 선물이다.";
  }

  if (chooseMusicLove === musicLove[2]) {
    musicTitle.innerText = "Crazy AF";
    musicText.innerText = "- In Real Life";
    musicImg.src = "img/love-2.jpg";
    middleText.innerText = "도레미파 솔로시죠?";
  }

  if (chooseMusicLove === musicLove[3]) {
    musicTitle.innerText = "What makes you beautiful";
    musicText.innerText = "- One Direction";
    musicImg.src = "img/love-3.jpg";
    middleText.innerText = "아무런 기대없이 사랑하는 자만이 참된 사랑을 안다.";
  }

  if (chooseMusicLove === musicLove[4]) {
    musicTitle.innerText = "You belong with me";
    musicText.innerText = "- Taylor Swift";
    musicImg.src = "img/love-4.jpg";
    middleText.innerText =
      "사랑이란 서로 마주보는 것이 아니라, 둘이서 똑같은 방향을 내다보는 것이다.";
  }
}
