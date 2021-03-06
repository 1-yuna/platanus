const musicTitle = document.querySelector(".music-title");
const musicText = document.querySelector(".music-text");
const musicImg = document.querySelector(".music-img");
const middleText = document.querySelector(".main_middle-text");
const mainLowLeftlogoutI = document.querySelector(".main_low-left-logout-i");

if (getFeel === "happy") {
  mainLowLeftlogoutI.innerText = "π";
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
    musicTitle.innerText = "Hereβs to never growing up";
    musicText.innerText = "- Avril Lavigne";
    musicImg.src = "img/happy-0.jpg";
    middleText.innerText =
      "λ΄ μμ μ λν μμ κ°μ μμΌλ©΄ μ¨ μΈμμ΄ λμ μ μ΄ λλ€.";
  }

  if (chooseMusicHappy === musicHappy[1]) {
    musicTitle.innerText = "okay okay";
    musicText.innerText = "- Alessia cera";
    musicImg.src = "img/happy-1.jpg";
    middleText.innerText = "μ¬λμ μ€μ€λ‘ λ―Ώλ λλ‘ λλ€.";
  }

  if (chooseMusicHappy === musicHappy[2]) {
    musicTitle.innerText = "Me Too";
    musicText.innerText = "- Meghan Trainor";
    musicImg.src = "img/happy-2.jpg";
    middleText.innerText =
      "μ¬λμ μμνλ μ΄μμΌλ‘ μκΈ° μ΄λͺμ μ΄μ λ₯Ό κ°μ§κ³  μλ€. ";
  }

  if (chooseMusicHappy === musicHappy[3]) {
    musicTitle.innerText = "Love Myself";
    musicText.innerText = "- Hailee Steinfeld";
    musicImg.src = "img/happy-3.jpg";
    middleText.innerText = "λ μμ μκ² λμ± μ§μ€νλΌ.";
  }

  if (chooseMusicHappy === musicHappy[4]) {
    musicTitle.innerText = "Popular song";
    musicText.innerText = "- Ariana Grande & MIKA";
    musicImg.src = "img/happy-4.jpg";
    middleText.innerText =
      "λ¬΄μ¨ μΌμ΄λ  ν  μ μλ€κ³  μκ°νλ μ¬λμ΄ ν΄λ΄λ λ²μ΄λ€.";
  }

  if (chooseMusicHappy === musicHappy[5]) {
    musicTitle.innerText = "what the hell";
    musicText.innerText = "- Avril Lavigne";
    musicImg.src = "img/happy-5.jpg";
    middleText.innerText = "λ¨λ€μ΄ λΉμ μ μ΄λ»κ² μκ°ν κΉ λλ¬΄ κ±±μ νμ§ λ§λΌ.";
  }
}

if (getFeel === "sad") {
  mainLowLeftlogoutI.innerText = "π";
  const musicSad = ["Sad-0", "Sad-1", "Sad-2", "Sad-3", "Sad-4"];

  const chooseMusicSad = musicSad[Math.floor(Math.random() * musicSad.length)];

  musicPlay.src = `music/${chooseMusicSad}.mp3`;

  if (chooseMusicSad === musicSad[0]) {
    musicTitle.innerText = "λ¬΄λ¦";
    musicText.innerText = "- μμ΄μ ";
    musicImg.src = "img/sad-0.jpg";
    middleText.innerText = "μν λ λ§νΌ λ³΄λ€ λ λ°μ§μΌ μ μλ κ·Έλμ΄κΈ°λ₯Ό";
  }

  if (chooseMusicSad === musicSad[1]) {
    musicTitle.innerText = "new normal";
    musicText.innerText = "- khalid";
    musicImg.src = "img/sad-1.jpg";
    middleText.innerText = "ν¬λ§μ μ λ λΉμ μ λ²λ¦¬μ§ μλλ€.";
  }

  if (chooseMusicSad === musicSad[2]) {
    musicTitle.innerText = "μ΄λ₯Έ";
    musicText.innerText = "- μλμ(sondia)";
    musicImg.src = "img/sad-2.jpg";
    middleText.innerText = "κ°μ₯ μμ€ν κ²μ λ μμ μμ μμ§ λ§μ";
  }

  if (chooseMusicSad === musicSad[3]) {
    musicTitle.innerText = "λ°€νλμ";
    musicText.innerText = "- λ΄μλ€κ³΅λ°©";
    musicImg.src = "img/sad-3.jpg";
    middleText.innerText = "κ²¨μΈμ΄ μ€λ©΄ λ΄μ κ·Έλ¦¬ λ©μ§ μμΌλ¦¬";
  }

  if (chooseMusicSad === musicSad[4]) {
    musicTitle.innerText = "μ£Όμ νλ μ°μΈλ€μ μν΄";
    musicText.innerText = "- μλλΉ";
    musicImg.src = "img/sad-4.jpg";
    middleText.innerText =
      "λΉ¨λ¦¬ λμ°©νλ κ²μ΄ λͺ©νκ° μλλ€ νλ€ λ μ¬μ΄κ°λΌ      ";
  }
}

if (getFeel === "angry") {
  mainLowLeftlogoutI.innerText = "π";
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
    musicTitle.innerText = "κΊΌμ Έ";
    musicText.innerText = "- νλμ΄μ λμ€μ΄";
    musicImg.src = "img/angry-0.jpg";
    middleText.innerText = "μ°Έμ μΈ μΈ λ²μ΄λ©΄ νΈκ΅¬";
  }

  if (chooseMusicAngry === musicAngry[1]) {
    musicTitle.innerText = "μ±νΌμΈ";
    musicText.innerText = "- μΈμ΄";
    musicImg.src = "img/angry-1.jpg";
    middleText.innerText = "νΌν  μ μμΌλ©΄ μ¦κ²¨λΌ";
  }

  if (chooseMusicAngry === musicAngry[2]) {
    musicTitle.innerText = "abcdefu";
    musicText.innerText = "- GAYLE";
    musicImg.src = "img/angry-2.jpg";
    middleText.innerText = "λμ μ μ μ©μνλ κ·Έ μλΌμ μ΄λ¦μ κΈ°μ΅ν΄λ¬λΌ";
  }

  if (chooseMusicAngry === musicAngry[3]) {
    musicTitle.innerText = "good 4 u";
    musicText.innerText = "- Olivia Rodrigo";
    musicImg.src = "img/angry-3.jpg";
    middleText.innerText = "νμ νλ©΄ νμ μ§ λλ€.";
  }

  if (chooseMusicAngry === musicAngry[4]) {
    musicTitle.innerText = "Thriving";
    musicText.innerText = "- Upsahl";
    musicImg.src = "img/angry-4.jpg";
    middleText.innerText = "κ°λ λ§μ΄ κ³ μ°λ©΄ μλ³Έλ€.";
  }

  if (chooseMusicAngry === musicAngry[5]) {
    musicTitle.innerText = "Break My Heart Myself";
    musicText.innerText = "- Bebe Rexha";
    musicImg.src = "img/angry-5.jpg";
    middleText.innerText =
      "κ³€κ²½μ μ²ν μ¬λμ λμμ£Όλ©΄ κ±κ° λμ€μ λ κ³€κ²½μ μ²νμ λ λ λ μ¬λ¦΄ κ±°λ€.";
  }
}

if (getFeel === "love") {
  mainLowLeftlogoutI.innerText = "π";
  const musicLove = ["love-0", "love-1", "love-2", "love-3", "love-4"];

  const chooseMusicLove =
    musicLove[Math.floor(Math.random() * musicLove.length)];

  musicPlay.src = `music/${chooseMusicLove}.mp3`;

  if (chooseMusicLove === musicLove[0]) {
    musicTitle.innerText = "Settle For Less";
    musicText.innerText = "- Before You Exit";
    musicImg.src = "img/love-0.jpg";
    middleText.innerText = "μ°λ¦¬λ μ€λ‘μ§ μ¬λμ ν¨μΌλ‘μ¨ μ¬λμ λ°°μΈ μ μλ€.";
  }

  if (chooseMusicLove === musicLove[1]) {
    musicTitle.innerText = "μ₯νλ°©";
    musicText.innerText = "- N.Flying(μνλΌμ)";
    musicImg.src = "img/love-1.jpg";
    middleText.innerText = "μ¬λμ λ¬΄μλ³΄λ€λ μμ μ μν μ λ¬Όμ΄λ€.";
  }

  if (chooseMusicLove === musicLove[2]) {
    musicTitle.innerText = "Crazy AF";
    musicText.innerText = "- In Real Life";
    musicImg.src = "img/love-2.jpg";
    middleText.innerText = "λλ λ―Έν μλ‘μμ£ ?";
  }

  if (chooseMusicLove === musicLove[3]) {
    musicTitle.innerText = "What makes you beautiful";
    musicText.innerText = "- One Direction";
    musicImg.src = "img/love-3.jpg";
    middleText.innerText =
      "μΌλ§λ λ§μ΄ μ£Όλλλ³΄λ€ μΌλ§λ λ§μ μ¬λμ λ΄λλκ° μ€μνλ€.";
  }

  if (chooseMusicLove === musicLove[4]) {
    musicTitle.innerText = "You belong with me";
    musicText.innerText = "- Taylor Swift";
    musicImg.src = "img/love-4.jpg";
    middleText.innerText =
      "μ¬λμ΄λ μλ‘ λ§μ£Όλ³΄λ κ²μ΄ μλλΌ, λμ΄μ λκ°μ λ°©ν₯μ λ΄λ€λ³΄λ κ²μ΄λ€.";
  }
}
